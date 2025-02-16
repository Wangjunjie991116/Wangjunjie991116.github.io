## Push 推送

1. **提交代码**
    1. 正常思路
        1. 切换到本地 rc 分支，`git pull` 代码进行更新
        2. 切换到本地功能分支
        3. `git merge rc` 解决冲突，或前两步合井操作：`git merge origin/rc`
        4. 提交：`git push`
        5. 提个 MR，合并到主分支
    2. **rebase** 思路
        1. `git fetch` 代码拉取代码（此时远程代码是在 origin/rc 上）
        2. `git rebase -i origin/master` 变基到主分支后
        3. `git merge` 解决冲突
        4. `git push -f`（强制推送）
        5. 提个 MR，合并到主分支

## Update 更新

1. **更新分支名**
    1. 远程
        1. 麻烦
            1. `git checkout old_branch`
            2. `git branch -m old_branch new_branch`
            3. `git push --delete origin old_branch`
            4. `git push origin new_branch`
            5. `git branch --set-upstream-to origin/new_branch`
        2. 简单
            1. 本地切到需要修改名字的本地分支
            2. `git checkout -b new-branch` 正常推送，创建 MR，相当于在远程新创建一个分支
    2. 本地
        1. `git branch -m new_branch`

## Apply 暂存

1. **代码临时存储**
    1. 应用场景：某一天你正在 feature 分支开发新需求，突然产品经理跑过来说线上有 Bug，必须马上修复。而此时你的功能开发到一半，因为当前有文件更改了，需要提交 commit 保持工作区干净才能切分支。由于情况紧急，你只有急忙 commit 上去，commit 信息也随便写了个“暂存代码”，于是该分支提交记录就留了一条黑历史
    2. 使用方法：使用 `git stash` 即可，保存当前修改，并不会留下 commit 的历史，后续想恢复只需要 `git stash apply` 即可
    3. 相关命令介绍
        1. #保存当前未 commit 的代码。`git stash`
        2. #保存当前未 commit 的代码并添加备注。`git stash save "备注的内容"`
        3. #列出 stash 的所有记录。`git stash list`
        4. #删除 stash 的所有记录。`git stash clear`
        5. #应用最近一次的 stash。 `git stash apply`
        6. #应用最近一次的 stash，随后删除该记录。`git stash pop`
        7. #删除最近的一次 stash。 `git stash drop`

## Commit 记录

1. **回退已提交的 commit，并将 commit 的修改内容放回暂存区**
    1. 应用场景
        1. 手滑把不该提交的内容 commit 了，这时想改回来，只能再 commit 一次，又多一条“黑历史”
        2. 规范的团队，一般对于 commit 的内容要求 “职责明确，颗粒度要细，便于后续出现问题排查”。本来属于两块不同功能的修改，一起 commit 上去，这种就属于不规范。这次恰好又手滑了，一次性 commit 上去
    2. 介绍
        1. `git reset --hard` 被提及的较多，它能让 commit 记录强制回溯到某一个节点
        2. `git reset --soft`，除了回溯节点外，还会保留节点的修改内容
    3. #恢复最近一次 commit。`git reset --soft HEAD^`
    4. **注意点**
        1. 对于已 push 的 commit，也可以使用该命令，不过再次 push 时，由于远程分支和本地分支有差异，需要强制推送 `git push -f` 来覆盖被 reset 的 commit
        2. 在 `reset --soft` 指定 commit 号时，会将该 commit 到最近一次 commit 的所有修改内容全部恢复，而不是只针对该 commit
2. **跳过 commit**
    1. 应用场景：代码存在保存，但仍需要提交远程代码仓库
    2. 命令：`git commit -m "feat: xxxx" --no-verify`
3. **commit 文案修改**
    1. 应用场景：修改最近一次的 commit 文案
    2. 命令：`git commit--amend`，会打开 `vim`
    3. 进入 `vim` 后，按 `i` 进行插入修改操作，修改完成后，按 `esc` 退出，并`：Wq` 保存

## Delete 删除

1. **删除分支**
    1. 删除远程分支：`git push origin --delete 分支名`
    2. 删除本地分支：`git branch -D 分支名`

## 文件权限

1. [**文件读写权限**](https://blog.csdn.net/Axela30W/article/details/78981749)
    1. 命令：`ls -l 文件夹`
    2. 含义：  
       第一位代表文件类型，有两个数值：“d”和“-”，“d”代表目录，“-”代表非目录  
       后面 9 位可以拆分为 3 组来看，分别对应不同用户，2-4 位代表所有者 user 的权限说明，5-7 位代表组群 group 的权限说明，8-10 位代表其他人 other 的权限说明  
       r 代表可读权限，w 代表可写权限，x 代表可执行权限  
       "drwxrwxrwx”表示所有用户都对这个目录有可读可写可执行权限
    3. 例子：  
       -rw------- (600) 只有所有者才有读和写的权限  
       -rw-r–r-- (644) 只有所有者才有读和写的权限，组群和其他人只有读的权限  
       -rwx------ (700) 只有所有者才有读，写，执行的权限  
       -rwxr-xr-x (755) 只有所有者才有读，写，执行的权限，组群和其他人只有读和执行的权限  
       -rwx–x--x (711) 只有所有者才有读，写，执行的权限，组群和其他人只有执行的权限  
       -rw-rw-rw- (666) 每个人都有读写的权限

## 好文

1. [**stash、reset、cherry-pick、revert、reflog 详细介绍**](https://mp.weixin.qq.com/s/XisZxng0gO1BSHvZXYlo4A)

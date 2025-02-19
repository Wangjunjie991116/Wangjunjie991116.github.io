## 实践

### GitLab 项目发布到 Github 和 Npm

1. `git pull` 确保本地项目和远端 Gitlab 代码一致
2. `git config user.name "github 账户用户名"`
3. `git config user.email "xxxx@xxxxx.com"`
4. `git push github master` 推送至 Github
5. `npm login --registry https://registry.npmjs.org`
6. 输入 npm 用户名
7. 输入 npm 密码
8. 打开终端显示的网站，获取一次性秘钥
9. `npm publish --registry https://registry.npmjs.org --access public`
10. 等一段时间（慢的话 5 分钟），会展示一个网址
11. 打开网址输入秘钥，完成 npm 发版（有时候会有延迟，慢的话 8 分钟）

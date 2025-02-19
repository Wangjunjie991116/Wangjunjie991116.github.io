# Taro

## Taro 项目 px 适配异常

**问题**：Taro 运行时会对 Css 代码中的 px 进行自动转化，其中，在 H5 上为 px -> rem，在小程序中为 px -> rpx

```css title="解决：将 px 修改为 PX，大写的 PX 能阻止 Taro 运行时默认的单位转化行为"
.content {
	height: 24PX;
	padding-bottom: 16PX;
}
```

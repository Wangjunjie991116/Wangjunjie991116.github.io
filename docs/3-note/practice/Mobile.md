# 移动端开发

## 实践

### 安全距离设置

```css title="例如 iphone X 底部有安全距离区，以内边距为例的样式配置"
.content {
    padding-bottom: 16px;
    padding-bottom: env(safe-area-inset-bottom); /* 兼容 IOS < 11.2 */
    padding-bottom: constant(safe-area-inset-bottom); /* 兼容 IOS > 11.2 */
}
```

## 踩坑

### 【小程序】开发者工具控制台打印的内容无法复制

**解决**：借助小程序的 [wx.setClipboardData](https://developers.weixin.qq.com/miniprogram/dev/api/device/clipboard/wx.setClipboardData.html) 将要打印的内容复制到剪贴板

```javascript
wx.setClipboardData({
    data: 'data',
    success(res) {
        wx.getClipboardData({
            success(res) {
                console.log(res.data); // data
            },
        });
    },
});
```

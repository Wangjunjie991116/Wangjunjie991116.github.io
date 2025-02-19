# Taro

## 实践

### **【小程序】**

### 微信小程序中使用 echarts

## 踩坑

### **【普适】**

### 相同像素值，不同项目展示异常

-   **背景**：Taro 项目需要复用非 Taro 项目的已有页面
-   **问题**：复制代码后，在 Taro 项目中，样式像素呈现有差异
-   **原因**：Taro 运行时会对 Css 代码中的 px 进行自动转化。H5 上为 `px -> rem`，小程序上为 `px -> rpx`，转化标准与 Taro config 文件中 `designWidth`、`deviceRadio` 属性设置有关
-   **解决**：将 px 修改为 PX，大写的 PX 能阻止 Taro 运行时默认的单位转化行为

```css
.content {
    /* height: 24PX; */
    /* padding-bottom: 16PX; */
}
```

### **【H5】**

### 页面返回闪烁

-   **背景**：页面 A 跳转 页面 B 后，点击浏览器返回，页面 B 会闪一下然后展示（Taro V3.5.10）
-   **原因**：Taro H5 如果使用 fixed 定位，在切换路由时，上个页面的元素会停留
-   **解决**：在 app.config.ts 文件中配置 animaa:false 关闭动画（默认值为 true）

```js
export default defineAppConfig({
    // ...
    animation: false,
});
```

---

### **【小程序】**

### [滚动穿透](https://taro-docs.jd.com/docs/react-overall#%E9%98%BB%E6%AD%A2%E6%BB%9A%E5%8A%A8%E7%A9%BF%E9%80%8F)

-   **背景**：在小程序中开发内容弹窗，弹窗中有可供上下滑动的滚动列表
-   **问题**：手指滑动滚动列表，内容弹窗下方的页面随之滚动
-   **原因**: Taro 3 的事件机制都以 bind 的形式进行绑定，因此不能使用 e.stopPropagation() 阻止滚动穿透
-   **解决**：给内容弹窗外层 View 添加 catchMove 属性

```jsx
/* 这个 View 组件会绑定 catchtouchmove 事件而不是 bindtouchmove */
<View catchMove></View>
```

---

# Taro

## 实践

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

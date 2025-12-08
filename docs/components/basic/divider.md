# Divider 分割线

分割线组件，用于分隔内容区域，支持水平和垂直方向、多种样式和文字内容。

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

默认为水平方向的实线分割线。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <text class="demo-text">内容区域 1</text>
    <TDivider />
    <text class="demo-text">内容区域 2</text>
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  padding: 32rpx;
}

.demo-text {
  font-size: 28rpx;
  color: #606266;
  line-height: 1.5;
}
</style>
```

## 分割线方向

支持 `horizontal`（水平）和 `vertical`（垂直）两种方向。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <view class="demo-row">
      <text class="demo-text">内容 1</text>
      <TDivider direction="horizontal" />
      <text class="demo-text">内容 2</text>
    </view>
    
    <view class="demo-row-vertical">
      <text class="demo-text">内容 1</text>
      <TDivider direction="vertical" />
      <text class="demo-text">内容 2</text>
      <TDivider direction="vertical" />
      <text class="demo-text">内容 3</text>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  padding: 32rpx;
}

.demo-row {
  display: flex;
  flex-direction: column;
  margin-bottom: 32rpx;
}

.demo-row-vertical {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.demo-text {
  font-size: 28rpx;
  color: #606266;
}
</style>
```

## 分割线类型

支持 `solid`（实线）、`dashed`（虚线）、`dotted`（点线）三种类型。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <text class="demo-text">实线分割线</text>
    <TDivider type="solid" />
    
    <text class="demo-text">虚线分割线</text>
    <TDivider type="dashed" />
    
    <text class="demo-text">点线分割线</text>
    <TDivider type="dotted" />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  padding: 32rpx;
}

.demo-text {
  font-size: 28rpx;
  color: #606266;
  margin-bottom: 16rpx;
}
</style>
```

## 自定义颜色

通过 `color` 属性自定义分割线颜色。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <TDivider color="#409eff" />
    <TDivider color="#67c23a" />
    <TDivider color="#e6a23c" />
    <TDivider color="#f56c6c" />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  padding: 32rpx;
  display: flex;
  flex-direction: column;
  gap: 32rpx;
}
</style>
```

## 自定义粗细

通过 `thickness` 属性自定义分割线粗细。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <TDivider :thickness="1" />
    <TDivider :thickness="2" />
    <TDivider :thickness="4" />
    <TDivider :thickness="8" />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  padding: 32rpx;
  display: flex;
  flex-direction: column;
  gap: 32rpx;
}
</style>
```

## 带文字的分割线

通过 `content` 属性设置分割线中的文字内容。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <text class="demo-text">上方内容</text>
    <TDivider content="分割线文字" />
    <text class="demo-text">下方内容</text>
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  padding: 32rpx;
}

.demo-text {
  font-size: 28rpx;
  color: #606266;
  line-height: 1.5;
}
</style>
```

## 文字位置

通过 `contentPosition` 属性设置文字位置，支持 `left`、`center`、`right` 三种位置。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <TDivider content="左侧文字" content-position="left" />
    <TDivider content="居中文字" content-position="center" />
    <TDivider content="右侧文字" content-position="right" />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  padding: 32rpx;
  display: flex;
  flex-direction: column;
  gap: 32rpx;
}
</style>
```

## 自定义文字样式

通过 `contentStyle` 属性自定义文字样式。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <TDivider 
      content="自定义样式" 
      content-style="color: #409eff; font-size: 32rpx; font-weight: bold;"
    />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  padding: 32rpx;
}
</style>
```

## 自定义间距

通过 `padding` 和 `margin` 属性自定义分割线的内外边距。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <text class="demo-text">默认间距</text>
    <TDivider />
    
    <text class="demo-text">自定义内边距</text>
    <TDivider padding="32rpx" />
    
    <text class="demo-text">自定义外边距</text>
    <TDivider margin="64rpx" />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  padding: 32rpx;
}

.demo-text {
  font-size: 28rpx;
  color: #606266;
}
</style>
```

## 细线模式

通过 `hairline` 属性开启细线模式，分割线会更细。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <text class="demo-text">普通分割线</text>
    <TDivider :hairline="false" />
    
    <text class="demo-text">细线分割线</text>
    <TDivider :hairline="true" />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  padding: 32rpx;
}

.demo-text {
  font-size: 28rpx;
  color: #606266;
  margin-bottom: 16rpx;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| direction | 分割线方向 | string | `horizontal` / `vertical` | `horizontal` |
| type | 分割线类型 | string | `solid` / `dashed` / `dotted` | `solid` |
| color | 分割线颜色 | string | - | `#e0e0e0` |
| thickness | 分割线粗细（单位：px） | number | - | `1` |
| hairline | 是否显示细线 | boolean | - | `true` |
| content | 文字内容 | string | - | - |
| contentPosition | 文字位置（仅水平方向有效） | string | `left` / `center` / `right` | `center` |
| contentStyle | 文字样式 | string | - | - |
| padding | 内边距 | string / number | - | `16px` |
| margin | 外边距 | string / number | - | `16px` |
| customClass | 自定义类名 | string | - | - |
| customStyle | 自定义样式 | string | - | - |

## 注意事项

1. 垂直分割线需要在 flex 布局的容器中使用
2. `contentPosition` 属性仅在水平方向（`direction="horizontal"`）时有效
3. `hairline` 为 true 时，分割线会使用 0.5px 的细线（在支持的设备上）
4. 自定义间距时，可以使用数字（单位 px）或带单位的字符串
5. 带文字的分割线仅支持水平方向

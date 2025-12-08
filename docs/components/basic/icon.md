# Icon 图标

图标组件，支持 iconfont 字体图标，可自定义大小、颜色和样式。

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

通过 `name` 属性设置图标名称，支持 iconfont 字体图标。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <TIcon name="icon-home" />
    <TIcon name="icon-user" />
    <TIcon name="icon-setting" />
    <TIcon name="icon-search" />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  gap: 32rpx;
  padding: 32rpx;
  align-items: center;
}
</style>
```

## 图标大小

通过 `size` 属性设置图标大小，支持数字（单位 rpx）或字符串（带单位）。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <TIcon name="icon-home" :size="32" />
    <TIcon name="icon-home" :size="48" />
    <TIcon name="icon-home" :size="64" />
    <TIcon name="icon-home" size="80rpx" />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  gap: 32rpx;
  padding: 32rpx;
  align-items: center;
}
</style>
```

## 图标颜色

通过 `color` 属性设置图标颜色。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <TIcon name="icon-heart" color="#409eff" />
    <TIcon name="icon-heart" color="#67c23a" />
    <TIcon name="icon-heart" color="#e6a23c" />
    <TIcon name="icon-heart" color="#f56c6c" />
    <TIcon name="icon-heart" color="#909399" />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  gap: 32rpx;
  padding: 32rpx;
  align-items: center;
}
</style>
```

## 加粗图标

通过 `bold` 属性设置图标加粗显示。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <TIcon name="icon-star" :size="64" />
    <TIcon name="icon-star" :size="64" :bold="true" />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  gap: 32rpx;
  padding: 32rpx;
  align-items: center;
}
</style>
```

## 点击事件

图标支持点击事件。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const count = ref<number>(0)

const handleClick = (): void => {
  count.value++
  console.log('图标被点击了', count.value)
}
</script>

<template>
  <view class="demo-section">
    <view class="demo-item">
      <TIcon name="icon-like" :size="64" color="#409eff" @click="handleClick" />
      <text class="demo-text">点击次数: {{ count }}</text>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  padding: 32rpx;
}

.demo-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16rpx;
}

.demo-text {
  font-size: 28rpx;
  color: #606266;
}
</style>
```

## 自定义样式

通过 `customClass` 和 `customStyle` 属性自定义图标样式。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <TIcon 
      name="icon-star" 
      :size="64"
      customStyle="text-shadow: 2px 2px 4px rgba(0,0,0,0.3);"
    />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  padding: 32rpx;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| name | 图标名称（iconfont 类名） | string | - | - |
| size | 图标大小 | string / number | - | `48` |
| color | 图标颜色 | string | - | `#333333` |
| bold | 是否加粗 | boolean | - | `false` |
| customClass | 自定义类名 | string | - | - |
| customStyle | 自定义样式 | string | - | - |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击图标时触发 | - |

## 注意事项

1. 图标组件依赖 iconfont 字体库，需要在项目中引入相应的字体文件
2. `size` 属性为数字时，单位为 rpx（响应式像素）
3. 图标颜色支持任何有效的 CSS 颜色值（十六进制、RGB、颜色名称等）
4. 使用自定义样式时，可以添加阴影、旋转等 CSS 效果

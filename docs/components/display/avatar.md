# Avatar 头像

用于展示用户头像或图标的组件，支持图片、文字和自定义内容。

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

最简单的头像用法，显示图片。

```vue
<script setup lang="uts">
</script>

<template>
  <TAvatar src="https://example.com/avatar.jpg" />
</template>
```

## 不同尺寸

提供三种预设尺寸：small、medium（默认）、large，也支持自定义数字尺寸。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-row">
    <TAvatar src="https://example.com/avatar.jpg" size="small" />
    <TAvatar src="https://example.com/avatar.jpg" size="medium" />
    <TAvatar src="https://example.com/avatar.jpg" size="large" />
    <TAvatar src="https://example.com/avatar.jpg" :size="80" />
  </view>
</template>

<style lang="scss" scoped>
.demo-row {
  display: flex;
  gap: 16px;
  align-items: center;
}
</style>
```

## 不同形状

支持圆形和方形两种形状。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-row">
    <TAvatar src="https://example.com/avatar.jpg" shape="circle" />
    <TAvatar src="https://example.com/avatar.jpg" shape="square" />
  </view>
</template>

<style lang="scss" scoped>
.demo-row {
  display: flex;
  gap: 16px;
  align-items: center;
}
</style>
```

## 文字头像

当没有图片时，可以显示文字（取首字符）。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-row">
    <TAvatar alt="张三" />
    <TAvatar alt="李四" bg-color="#52c41a" />
    <TAvatar alt="王五" bg-color="#1890ff" />
  </view>
</template>

<style lang="scss" scoped>
.demo-row {
  display: flex;
  gap: 16px;
  align-items: center;
}
</style>
```

## 自定义颜色

可以自定义背景色和文字颜色。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-row">
    <TAvatar alt="A" bg-color="#f56c6c" color="#ffffff" />
    <TAvatar alt="B" bg-color="#e6a23c" color="#ffffff" />
    <TAvatar alt="C" bg-color="#409eff" color="#ffffff" />
    <TAvatar alt="D" bg-color="#67c23a" color="#ffffff" />
  </view>
</template>

<style lang="scss" scoped>
.demo-row {
  display: flex;
  gap: 16px;
  align-items: center;
}
</style>
```

## 图片填充模式

可以设置图片的填充模式。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-row">
    <TAvatar src="https://example.com/avatar.jpg" fit="cover" />
    <TAvatar src="https://example.com/avatar.jpg" fit="contain" />
    <TAvatar src="https://example.com/avatar.jpg" fit="fill" />
  </view>
</template>

<style lang="scss" scoped>
.demo-row {
  display: flex;
  gap: 16px;
  align-items: center;
}
</style>
```

## 加载失败处理

图片加载失败时，会显示替代文字或自定义内容。

```vue
<script setup lang="uts">
const handleError = (): void => {
  console.log('图片加载失败')
}
</script>

<template>
  <TAvatar 
    src="https://invalid-url.com/avatar.jpg" 
    alt="用户"
    @error="handleError"
  />
</template>
```

## 点击事件

头像支持点击事件。

```vue
<script setup lang="uts">
const handleClick = (): void => {
  console.log('头像被点击')
}
</script>

<template>
  <TAvatar 
    src="https://example.com/avatar.jpg"
    @click="handleClick"
  />
</template>
```

## 自定义内容

可以使用插槽自定义头像内容。

```vue
<script setup lang="uts">
</script>

<template>
  <TAvatar>
    <TIcon name="user" size="24" />
  </TAvatar>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| src | 头像图片地址 | `string` | - | `''` |
| size | 头像大小 | `string \| number` | `small` / `medium` / `large` / 数字 | `medium` |
| shape | 头像形状 | `string` | `circle` / `square` | `circle` |
| alt | 替代文字（无图片时显示） | `string` | - | `''` |
| bgColor | 背景色 | `string` | - | `#c0c4cc` |
| color | 文字颜色 | `string` | - | `#ffffff` |
| fit | 图片填充模式 | `string` | `cover` / `contain` / `fill` / `none` / `scale-down` | `cover` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击头像时触发 | `() => void` |
| error | 图片加载失败时触发 | `() => void` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义头像内容 |

## 注意事项

1. 当 `src` 为空或图片加载失败时，会显示 `alt` 文字的首字符
2. 文字头像会自动取 `alt` 的第一个字符并转为大写
3. 预设尺寸对应的像素值：`small: 32px`、`medium: 40px`、`large: 56px`
4. 使用自定义数字尺寸时，单位为 `px`
5. `fit` 属性控制图片如何适应容器，与 CSS 的 `object-fit` 类似
6. 图片加载失败时会触发 `error` 事件，并自动显示替代内容

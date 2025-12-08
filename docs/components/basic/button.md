# Button 按钮

按钮组件，支持多种类型、尺寸、形状和状态。

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

支持 `default`、`primary`、`success`、`warning`、`danger`、`info` 六种类型。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <TButton text="默认按钮" />
    <TButton type="primary" text="主要按钮" />
    <TButton type="success" text="成功按钮" />
    <TButton type="warning" text="警告按钮" />
    <TButton type="danger" text="危险按钮" />
    <TButton type="info" text="信息按钮" />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  flex-wrap: wrap;
  gap: 16rpx;
  padding: 32rpx;
}
</style>
```

## 朴素按钮

通过 `plain` 属性设置朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <TButton plain text="朴素按钮" />
    <TButton type="primary" plain text="主要按钮" />
    <TButton type="success" plain text="成功按钮" />
    <TButton type="warning" plain text="警告按钮" />
    <TButton type="danger" plain text="危险按钮" />
    <TButton type="info" plain text="信息按钮" />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  flex-wrap: wrap;
  gap: 16rpx;
  padding: 32rpx;
}
</style>
```

## 按钮尺寸

支持 `large`、`medium`、`small`、`mini` 四种尺寸，默认为 `medium`。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <TButton size="large" text="大型按钮" />
    <TButton size="medium" text="中等按钮" />
    <TButton size="small" text="小型按钮" />
    <TButton size="mini" text="迷你按钮" />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
  padding: 32rpx;
}
</style>
```

## 按钮形状

支持 `square`（方形）、`round`（圆角）、`circle`（圆形）三种形状。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <TButton shape="square" text="方形按钮" />
    <TButton shape="round" text="圆角按钮" />
    <TButton shape="circle" icon="+" />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  gap: 16rpx;
  padding: 32rpx;
  align-items: center;
}
</style>
```

## 禁用状态

通过 `disabled` 属性设置按钮为禁用状态。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <TButton disabled text="禁用按钮" />
    <TButton type="primary" disabled text="禁用按钮" />
    <TButton type="success" plain disabled text="禁用按钮" />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  flex-wrap: wrap;
  gap: 16rpx;
  padding: 32rpx;
}
</style>
```

## 加载状态

通过 `loading` 属性设置按钮为加载状态，加载状态下按钮不可点击。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const loading = ref<boolean>(false)

const handleClick = (): void => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>

<template>
  <view class="demo-section">
    <TButton :loading="loading" text="加载中" @click="handleClick" />
    <TButton type="primary" :loading="loading" text="加载中" @click="handleClick" />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  gap: 16rpx;
  padding: 32rpx;
}
</style>
```

## 块级按钮

通过 `block` 属性设置按钮为块级元素，宽度为 100%。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <TButton block text="块级按钮" />
    <TButton type="primary" block text="块级按钮" />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
  padding: 32rpx;
}
</style>
```

## 带图标按钮

通过 `icon` 属性设置按钮图标。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <TButton icon="🔍" text="搜索" />
    <TButton type="primary" icon="✓" text="确认" />
    <TButton type="danger" icon="✕" text="删除" />
    <TButton shape="circle" icon="+" />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  gap: 16rpx;
  padding: 32rpx;
  align-items: center;
}
</style>
```

## 自定义样式

通过 `customClass` 和 `customStyle` 属性自定义按钮样式。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <TButton 
      text="自定义样式" 
      customStyle="background: linear-gradient(to right, #ff6b6b, #ee5a6f); border: none;"
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
| type | 按钮类型 | string | `primary` / `success` / `warning` / `danger` / `info` / `default` | `default` |
| size | 按钮尺寸 | string | `large` / `medium` / `small` / `mini` | `medium` |
| shape | 按钮形状 | string | `square` / `round` / `circle` | `square` |
| plain | 是否为朴素按钮 | boolean | - | `false` |
| disabled | 是否禁用 | boolean | - | `false` |
| loading | 是否加载中 | boolean | - | `false` |
| block | 是否为块级按钮 | boolean | - | `false` |
| text | 按钮文本 | string | - | - |
| icon | 图标 | string | - | - |
| customClass | 自定义类名 | string | - | - |
| customStyle | 自定义样式 | string | - | - |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击按钮时触发（禁用和加载状态下不触发） | - |

### Slots

| 名称 | 说明 |
|------|------|
| default | 按钮内容，优先级高于 text 属性 |

## 注意事项

1. 按钮在禁用或加载状态下不会触发点击事件
2. 圆形按钮（`shape="circle"`）建议只使用图标，不设置文本
3. 块级按钮会占据父容器的全部宽度
4. 自定义样式会覆盖默认样式，请谨慎使用

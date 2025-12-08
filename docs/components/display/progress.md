# Progress 进度条

用于展示操作进度，告知用户当前状态和预期。

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

最简单的进度条用法。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const percentage = ref<number>(50)
</script>

<template>
  <TProgress :percentage="percentage" />
</template>
```

## 不同进度

展示不同的进度值。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-block">
    <TProgress :percentage="0" />
    <TProgress :percentage="25" />
    <TProgress :percentage="50" />
    <TProgress :percentage="75" />
    <TProgress :percentage="100" />
  </view>
</template>

<style lang="scss" scoped>
.demo-block {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
```

## 自定义颜色

可以自定义进度条的颜色。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-block">
    <TProgress :percentage="50" color="#1890ff" />
    <TProgress :percentage="50" color="#52c41a" />
    <TProgress :percentage="50" color="#faad14" />
    <TProgress :percentage="50" color="#f5222d" />
  </view>
</template>

<style lang="scss" scoped>
.demo-block {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
```

## 自定义粗细

可以自定义进度条的粗细。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-block">
    <TProgress :percentage="50" :stroke-width="4" />
    <TProgress :percentage="50" :stroke-width="8" />
    <TProgress :percentage="50" :stroke-width="12" />
    <TProgress :percentage="50" :stroke-width="16" />
  </view>
</template>

<style lang="scss" scoped>
.demo-block {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
```

## 隐藏文字

可以隐藏进度文字。

```vue
<script setup lang="uts">
</script>

<template>
  <TProgress :percentage="50" :show-text="false" />
</template>
```

## 自定义文字颜色

可以自定义进度文字的颜色。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-block">
    <TProgress :percentage="50" text-color="#1890ff" />
    <TProgress :percentage="50" text-color="#52c41a" />
    <TProgress :percentage="50" text-color="#f5222d" />
  </view>
</template>

<style lang="scss" scoped>
.demo-block {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
```

## 禁用动画

可以禁用进度条的动画效果。

```vue
<script setup lang="uts">
</script>

<template>
  <TProgress :percentage="50" :animated="false" />
</template>
```

## 动态进度

展示动态变化的进度。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const percentage = ref<number>(0)

const increase = (): void => {
  percentage.value = Math.min(100, percentage.value + 10)
}

const decrease = (): void => {
  percentage.value = Math.max(0, percentage.value - 10)
}
</script>

<template>
  <view class="demo-container">
    <TProgress :percentage="percentage" />
    
    <view class="button-group">
      <TButton text="增加" @click="increase" />
      <TButton text="减少" @click="decrease" />
    </view>
  </view>
</template>

<style lang="scss" scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.button-group {
  display: flex;
  gap: 12px;
}
</style>
```

## 不同状态

根据进度值显示不同的颜色状态。

```vue
<script setup lang="uts">
import { ref, computed } from 'vue'

const percentage = ref<number>(50)

const progressColor = computed<string>(() => {
  if (percentage.value < 30) {
    return '#f5222d'
  } else if (percentage.value < 70) {
    return '#faad14'
  } else {
    return '#52c41a'
  }
})
</script>

<template>
  <TProgress :percentage="percentage" :color="progressColor" />
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| percentage | 进度百分比（0-100） | `number` | - | `0` |
| type | 进度条类型 | `string` | `line` / `circle` | `line` |
| color | 进度条颜色 | `string` | - | `#1890ff` |
| strokeWidth | 进度条粗细（单位：px） | `number` | - | `6` |
| showText | 是否显示进度文字 | `boolean` | - | `true` |
| textColor | 文字颜色 | `string` | - | `#323233` |
| animated | 是否显示动画 | `boolean` | - | `true` |
| customClass | 自定义类名 | `string` | - | `''` |
| customStyle | 自定义样式 | `string` | - | `''` |

## 注意事项

1. `percentage` 值会自动限制在 0-100 之间
2. 进度条默认带有平滑的动画效果，可通过 `animated` 属性关闭
3. `strokeWidth` 单位为像素（px）
4. 当前版本仅支持 `line` 类型，`circle` 类型待实现
5. 进度文字默认显示在进度条右侧
6. 可以通过 `customClass` 和 `customStyle` 进行更多自定义

# Slider 滑块

滑块组件，用于在给定范围内选择数值。

::: tip v-model 支持
TSlider 组件使用 Vue 3.4+ 的 `defineModel` API 实现双向绑定。

**类型定义**：`defineModel<number>({ default: 0 })`

**使用方式**：`<TSlider v-model="value" />`
:::

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

最简单的滑块用法。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<number>(50)
</script>

<template>
  <TSlider v-model="value" />
</template>
```

## 设置范围

通过 `min` 和 `max` 属性设置滑块的取值范围。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<number>(20)
</script>

<template>
  <TSlider v-model="value" :min="0" :max="100" />
</template>
```

## 步长

通过 `step` 属性设置滑块的步长。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<number>(50)
</script>

<template>
  <TSlider v-model="value" :step="10" />
</template>
```

## 显示当前值

通过 `show-value` 属性显示当前值。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<number>(50)
</script>

<template>
  <TSlider v-model="value" show-value />
</template>
```

## 禁用状态

通过 `disabled` 属性禁用滑块。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<number>(50)
</script>

<template>
  <TSlider v-model="value" disabled />
</template>
```

## 自定义颜色

通过 `active-color` 和 `inactive-color` 属性自定义滑块颜色。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<number>(50)
</script>

<template>
  <view class="demo-section">
    <TSlider 
      v-model="value" 
      active-color="#1890ff" 
      inactive-color="#e9e9e9" 
    />
    <TSlider 
      v-model="value" 
      active-color="#52c41a" 
      inactive-color="#f0f0f0" 
    />
    <TSlider 
      v-model="value" 
      active-color="#f5222d" 
      inactive-color="#fafafa" 
    />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  flex-direction: column;
  gap: 32rpx;
}
</style>
```

## 事件处理

滑块支持 change 事件。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<number>(50)

const handleChange = (val: number): void => {
  console.log('滑块值:', val)
  uni.showToast({
    title: `当前值: ${val}`,
    icon: 'none'
  })
}
</script>

<template>
  <TSlider v-model="value" @change="handleChange" />
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| v-model | 绑定值（使用 defineModel） | number | - | 0 |
| min | 最小值 | number | - | 0 |
| max | 最大值 | number | - | 100 |
| step | 步长 | number | - | 1 |
| disabled | 是否禁用 | boolean | - | false |
| show-value | 是否显示当前值 | boolean | - | false |
| active-color | 已选择部分的颜色 | string | - | #1890ff |
| inactive-color | 未选择部分的颜色 | string | - | #e9e9e9 |
| custom-class | 自定义类名 | string | - | '' |
| custom-style | 自定义样式 | string | - | '' |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 值改变时触发 | (value: number) => void |

## 注意事项

1. **v-model 类型**：TSlider 的 v-model 只接受 `number` 类型的值。

2. **步长限制**：滑块的值会根据 `step` 属性自动调整到最接近的步长值。

3. **范围限制**：滑块的值会自动限制在 `min` 和 `max` 之间。

4. **精度问题**：由于浮点数计算的精度问题，建议使用整数步长。

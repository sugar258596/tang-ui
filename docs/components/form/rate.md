# Rate 评分

评分组件，用于对事物进行评级操作。

::: tip v-model 支持
TRate 组件使用 Vue 3.4+ 的 `defineModel` API 实现双向绑定。

**类型定义**：`defineModel<number>({ default: 0 })`

**使用方式**：`<TRate v-model="value" />`
:::

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

最简单的评分用法。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<number>(3)
</script>

<template>
  <TRate v-model="value" />
</template>
```

## 最大评分

通过 `max` 属性设置最大评分。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<number>(5)
</script>

<template>
  <view class="demo-section">
    <TRate v-model="value" :max="5" />
    <TRate v-model="value" :max="10" />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
}
</style>
```

## 只读状态

通过 `readonly` 属性设置只读状态。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<number>(3.5)
</script>

<template>
  <TRate v-model="value" readonly />
</template>
```

## 禁用状态

通过 `disabled` 属性禁用评分。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<number>(3)
</script>

<template>
  <TRate v-model="value" disabled />
</template>
```

## 自定义尺寸

通过 `size` 属性自定义星星大小。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<number>(3)
</script>

<template>
  <view class="demo-section">
    <TRate v-model="value" :size="30" />
    <TRate v-model="value" :size="40" />
    <TRate v-model="value" :size="50" />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
}
</style>
```

## 自定义颜色

通过 `active-color` 和 `inactive-color` 属性自定义颜色。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<number>(3)
</script>

<template>
  <view class="demo-section">
    <TRate 
      v-model="value" 
      active-color="#ffc107" 
      inactive-color="#e4e7eb" 
    />
    <TRate 
      v-model="value" 
      active-color="#f5222d" 
      inactive-color="#f0f0f0" 
    />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
}
</style>
```

## 显示评分

通过 `show-score` 属性显示当前评分。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<number>(3)
</script>

<template>
  <TRate v-model="value" show-score />
</template>
```

## 允许清除

通过 `allow-clear` 属性允许清除评分。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<number>(3)
</script>

<template>
  <TRate v-model="value" allow-clear />
</template>
```

## 事件处理

评分支持 change 和 click 事件。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<number>(0)

const handleChange = (val: number): void => {
  console.log('评分改变:', val)
}

const handleClick = (val: number): void => {
  console.log('点击星星:', val)
  uni.showToast({
    title: `评分: ${val}`,
    icon: 'none'
  })
}
</script>

<template>
  <TRate 
    v-model="value" 
    @change="handleChange"
    @click="handleClick"
  />
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| v-model | 绑定值（使用 defineModel） | number | - | 0 |
| max | 最大评分 | number | - | 5 |
| readonly | 是否只读 | boolean | - | false |
| disabled | 是否禁用 | boolean | - | false |
| size | 星星大小（rpx） | number | - | 40 |
| gap | 星星间距（rpx） | number | - | 2 |
| active-color | 选中颜色 | string | - | #ffc107 |
| inactive-color | 未选中颜色 | string | - | #e4e7eb |
| show-score | 是否显示评分 | boolean | - | false |
| allow-clear | 是否允许清除 | boolean | - | false |
| precision | 精度（0 表示整数） | number | - | 0 |
| star-char | 星星字符 | string | - | ★ |
| vibrate | 是否震动反馈 | boolean | - | false |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 评分改变时触发 | (value: number) => void |
| click | 点击星星时触发 | (value: number) => void |
| hover-change | 鼠标悬停时触发 | (value: number) => void |

## 注意事项

1. **v-model 类型**：TRate 的 v-model 接受 `number` 类型的值。

2. **清除功能**：当 `allow-clear` 为 `true` 时，点击已选中的星星可以清除评分。

3. **精度设置**：`precision` 为 0 时只支持整数评分，大于 0 时支持小数评分。

4. **震动反馈**：`vibrate` 为 `true` 时，点击星星会触发设备震动（需要设备支持）。

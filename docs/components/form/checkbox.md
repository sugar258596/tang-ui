# Checkbox 复选框

复选框组件，用于在多个选项中进行多选。支持单个复选框和复选框组两种使用方式。

::: tip v-model 支持
TCheckbox 和 TCheckboxGroup 组件都使用 Vue 3.4+ 的 `defineModel` API 实现双向绑定。

**TCheckbox 类型定义**：`defineModel<boolean>({ default: false })`

**TCheckboxGroup 类型定义**：`defineModel<(string | number)[]>({ default: () => [] })`

**使用方式**：
- 单个：`<TCheckbox v-model="checked" />`
- 组：`<TCheckboxGroup v-model="selectedValues" :options="options" />`
:::

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

### 单个复选框

最简单的复选框用法。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const checked = ref<boolean>(false)
</script>

<template>
  <view class="demo-section">
    <TCheckbox v-model="checked" />
    <text>{{ checked ? '已选中' : '未选中' }}</text>
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16rpx;
}
</style>
```

### 复选框组

使用复选框组管理多个选项。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { CheckboxOption } from '@/components/TCheckboxGroup/type.uts'

const selectedValues = ref<(string | number)[]>([])

const options: CheckboxOption[] = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B', value: 'b' },
  { label: '选项 C', value: 'c' }
]
</script>

<template>
  <TCheckboxGroup v-model="selectedValues" :options="options" />
</template>
```

## 复选框尺寸

提供三种尺寸：small、medium、large。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const checked = ref<boolean>(true)
</script>

<template>
  <view class="demo-section">
    <TCheckbox v-model="checked" size="small" />
    <TCheckbox v-model="checked" size="medium" />
    <TCheckbox v-model="checked" size="large" />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16rpx;
}
</style>
```

## 禁用状态

### 单个禁用

通过 `disabled` 属性禁用复选框。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const checked1 = ref<boolean>(false)
const checked2 = ref<boolean>(true)
</script>

<template>
  <view class="demo-section">
    <TCheckbox v-model="checked1" disabled />
    <TCheckbox v-model="checked2" disabled />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16rpx;
}
</style>
```

### 组禁用

禁用整个复选框组或单个选项。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { CheckboxOption } from '@/components/TCheckboxGroup/type.uts'

const selectedValues = ref<(string | number)[]>(['a'])

const options: CheckboxOption[] = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B（禁用）', value: 'b', disabled: true },
  { label: '选项 C', value: 'c' }
]
</script>

<template>
  <view class="demo-section">
    <!-- 禁用整个组 -->
    <TCheckboxGroup v-model="selectedValues" :options="options" disabled />
    
    <!-- 禁用单个选项 -->
    <TCheckboxGroup v-model="selectedValues" :options="options" />
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

## 形状样式

支持圆形和方形两种样式。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const checked = ref<boolean>(true)
</script>

<template>
  <view class="demo-section">
    <!-- 圆形（默认） -->
    <TCheckbox v-model="checked" />
    
    <!-- 方形 -->
    <TCheckbox v-model="checked" square />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16rpx;
}
</style>
```

## 自定义颜色

通过 `active-color` 和 `inactive-color` 属性自定义颜色。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const checked = ref<boolean>(true)
</script>

<template>
  <view class="demo-section">
    <TCheckbox 
      v-model="checked" 
      active-color="#00bba7" 
      inactive-color="#c8c9cc" 
    />
    <TCheckbox 
      v-model="checked" 
      active-color="#f56c6c" 
      inactive-color="#909399" 
    />
    <TCheckbox 
      v-model="checked" 
      active-color="#409eff" 
      inactive-color="#dcdfe6" 
    />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16rpx;
}
</style>
```

## 排列方向

复选框组支持垂直和水平排列。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { CheckboxOption } from '@/components/TCheckboxGroup/type.uts'

const selectedValues = ref<(string | number)[]>([])

const options: CheckboxOption[] = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B', value: 'b' },
  { label: '选项 C', value: 'c' }
]
</script>

<template>
  <view class="demo-section">
    <!-- 垂直排列（默认） -->
    <TCheckboxGroup 
      v-model="selectedValues" 
      :options="options" 
      direction="vertical" 
    />
    
    <!-- 水平排列 -->
    <TCheckboxGroup 
      v-model="selectedValues" 
      :options="options" 
      direction="horizontal" 
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

## 最大选择数量

通过 `max` 属性限制最大选择数量。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { CheckboxOption } from '@/components/TCheckboxGroup/type.uts'

const selectedValues = ref<(string | number)[]>([])

const options: CheckboxOption[] = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B', value: 'b' },
  { label: '选项 C', value: 'c' },
  { label: '选项 D', value: 'd' }
]
</script>

<template>
  <view class="demo-section">
    <text class="tip">最多选择 2 项</text>
    <TCheckboxGroup 
      v-model="selectedValues" 
      :options="options" 
      :max="2" 
    />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
}

.tip {
  font-size: 24rpx;
  color: #909399;
}
</style>
```

## 事件处理

复选框支持 change 和 click 事件。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { CheckboxOption } from '@/components/TCheckboxGroup/type.uts'

const checked = ref<boolean>(false)
const selectedValues = ref<(string | number)[]>([])

const options: CheckboxOption[] = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B', value: 'b' },
  { label: '选项 C', value: 'c' }
]

const handleChange = (val: boolean): void => {
  console.log('复选框状态:', val)
}

const handleGroupChange = (val: (string | number)[]): void => {
  console.log('选中的值:', val)
  uni.showToast({
    title: `已选择 ${val.length} 项`,
    icon: 'none'
  })
}
</script>

<template>
  <view class="demo-section">
    <!-- 单个复选框 -->
    <TCheckbox v-model="checked" @change="handleChange" />
    
    <!-- 复选框组 -->
    <TCheckboxGroup 
      v-model="selectedValues" 
      :options="options" 
      @change="handleGroupChange" 
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

## API

### TCheckbox Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| v-model | 绑定值（使用 defineModel） | boolean | - | false |
| disabled | 是否禁用 | boolean | - | false |
| size | 复选框尺寸 | string | small / medium / large | medium |
| active-color | 选中状态颜色 | string | - | #00bba7 |
| inactive-color | 未选中状态颜色 | string | - | #c8c9cc |
| square | 是否为方形 | boolean | - | false |
| border-width | 边框宽度 | number | - | 2 |

### TCheckbox Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 复选框状态改变时触发 | (value: boolean) => void |
| click | 点击复选框时触发 | (event: any) => void |

### TCheckboxGroup Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| v-model | 绑定值（使用 defineModel） | (string \| number)[] | - | [] |
| options | 选项列表 | CheckboxOption[] | - | [] |
| direction | 排列方向 | string | vertical / horizontal | vertical |
| max | 最大选择数量，-1 表示不限制 | number | - | -1 |
| disabled | 是否禁用整个组 | boolean | - | false |
| custom-class | 自定义类名 | string | - | '' |
| custom-style | 自定义样式 | string | - | '' |

### TCheckboxGroup Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 选中值改变时触发 | (value: (string \| number)[]) => void |

### CheckboxOption 类型

```typescript
interface CheckboxOption {
  label: string              // 显示文本
  value: string | number     // 选项值
  disabled?: boolean         // 是否禁用该选项
}
```

## 注意事项

1. **v-model 类型**：
   - TCheckbox 的 v-model 接受 `boolean` 类型
   - TCheckboxGroup 的 v-model 接受 `(string | number)[]` 数组类型

2. **选项值唯一性**：在 TCheckboxGroup 中，每个选项的 `value` 必须唯一。

3. **最大选择限制**：当达到 `max` 限制时，会显示提示信息，且无法继续选择。

4. **禁用优先级**：如果 TCheckboxGroup 设置了 `disabled`，则所有选项都会被禁用，即使单个选项没有设置 `disabled`。

5. **形状选择**：
   - 圆形（默认）：更适合单选场景的视觉习惯
   - 方形：更符合复选框的传统样式

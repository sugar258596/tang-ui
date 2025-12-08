# Picker 选择器

选择器组件，支持单列、多列选择，适用于从底部弹出的选择场景。

::: tip 双 v-model 支持
TPicker 组件使用 Vue 3.4+ 的 `defineModel` API 实现双向绑定，支持**两个 v-model**：

**v-model（控制显示）**：`defineModel<boolean>({ default: false })`

**v-model:selectedValue（控制选中值）**：`defineModel<any>('selectedValue', { default: null })`

**使用方式**：
```vue
<TPicker 
  v-model="visible" 
  v-model:selectedValue="selected"
  :options="options" 
/>
```
:::

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

### 单列选择

最简单的单列选择器。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { TPickerOption } from '@/components/TPicker/type.uts'

const visible = ref<boolean>(false)
const selected = ref<any>(null)

const options: TPickerOption[] = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B', value: 'b' },
  { label: '选项 C', value: 'c' }
]

const showPicker = (): void => {
  visible.value = true
}
</script>

<template>
  <view>
    <TButton @click="showPicker">打开选择器</TButton>
    <TPicker 
      v-model="visible" 
      v-model:selectedValue="selected"
      :options="options"
      title="请选择"
    />
  </view>
</template>
```

### 多列选择

支持多列同时选择。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { TPickerOption } from '@/components/TPicker/type.uts'

const visible = ref<boolean>(false)
const selected = ref<any[]>([])

const columns: TPickerOption[][] = [
  [
    { label: '周一', value: 'mon' },
    { label: '周二', value: 'tue' },
    { label: '周三', value: 'wed' }
  ],
  [
    { label: '上午', value: 'am' },
    { label: '下午', value: 'pm' }
  ]
]

const showPicker = (): void => {
  visible.value = true
}
</script>

<template>
  <view>
    <TButton @click="showPicker">选择时间</TButton>
    <TPicker 
      v-model="visible" 
      v-model:selectedValue="selected"
      :columns="columns"
      title="选择时间"
    />
  </view>
</template>
```

## 自定义文本

通过 `title`、`confirm-text` 和 `cancel-text` 属性自定义文本。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { TPickerOption } from '@/components/TPicker/type.uts'

const visible = ref<boolean>(false)
const selected = ref<any>(null)

const options: TPickerOption[] = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
  { label: '广州', value: 'guangzhou' }
]
</script>

<template>
  <TPicker 
    v-model="visible" 
    v-model:selectedValue="selected"
    :options="options"
    title="选择城市"
    confirm-text="完成"
    cancel-text="返回"
  />
</template>
```

## 禁用选项

通过选项的 `disabled` 属性禁用特定选项。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { TPickerOption } from '@/components/TPicker/type.uts'

const visible = ref<boolean>(false)
const selected = ref<any>(null)

const options: TPickerOption[] = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B（禁用）', value: 'b', disabled: true },
  { label: '选项 C', value: 'c' },
  { label: '选项 D（禁用）', value: 'd', disabled: true }
]
</script>

<template>
  <TPicker 
    v-model="visible" 
    v-model:selectedValue="selected"
    :options="options"
  />
</template>
```

## 自定义高度

通过 `item-height` 和 `visible-item-count` 属性自定义选择器高度。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { TPickerOption } from '@/components/TPicker/type.uts'

const visible = ref<boolean>(false)
const selected = ref<any>(null)

const options: TPickerOption[] = [
  { label: '选项 1', value: 1 },
  { label: '选项 2', value: 2 },
  { label: '选项 3', value: 3 },
  { label: '选项 4', value: 4 },
  { label: '选项 5', value: 5 }
]
</script>

<template>
  <TPicker 
    v-model="visible" 
    v-model:selectedValue="selected"
    :options="options"
    item-height="50px"
    :visible-item-count="7"
  />
</template>
```

## 隐藏工具栏

通过 `show-toolbar` 属性隐藏工具栏。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { TPickerOption } from '@/components/TPicker/type.uts'

const visible = ref<boolean>(false)
const selected = ref<any>(null)

const options: TPickerOption[] = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B', value: 'b' },
  { label: '选项 C', value: 'c' }
]
</script>

<template>
  <TPicker 
    v-model="visible" 
    v-model:selectedValue="selected"
    :options="options"
    :show-toolbar="false"
  />
</template>
```

## 事件处理

选择器支持 confirm、cancel 和 change 事件。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { TPickerOption } from '@/components/TPicker/type.uts'

const visible = ref<boolean>(false)
const selected = ref<any>(null)

const options: TPickerOption[] = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B', value: 'b' },
  { label: '选项 C', value: 'c' }
]

const handleConfirm = (value: any, index: number | number[], option: TPickerOption | TPickerOption[]): void => {
  console.log('确认选择:', value, index, option)
  uni.showToast({
    title: `已选择: ${value}`,
    icon: 'none'
  })
}

const handleCancel = (): void => {
  console.log('取消选择')
}

const handleChange = (value: any, index: number | number[], columnIndex: number): void => {
  console.log('选项改变:', value, index, columnIndex)
}
</script>

<template>
  <TPicker 
    v-model="visible" 
    v-model:selectedValue="selected"
    :options="options"
    @confirm="handleConfirm"
    @cancel="handleCancel"
    @change="handleChange"
  />
</template>
```

## 完整示例

结合多个功能的完整示例。

```vue
<script setup lang="uts">
import { ref, computed } from 'vue'
import type { TPickerOption } from '@/components/TPicker/type.uts'

const cityVisible = ref<boolean>(false)
const citySelected = ref<any>(null)

const dateVisible = ref<boolean>(false)
const dateSelected = ref<any[]>([])

const cityOptions: TPickerOption[] = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
  { label: '广州', value: 'guangzhou' },
  { label: '深圳', value: 'shenzhen' },
  { label: '杭州', value: 'hangzhou' }
]

const dateColumns: TPickerOption[][] = [
  Array.from({ length: 12 }, (_, i) => ({
    label: `${i + 1}月`,
    value: i + 1
  })),
  Array.from({ length: 31 }, (_, i) => ({
    label: `${i + 1}日`,
    value: i + 1
  }))
]

const cityText = computed<string>(() => {
  if (!citySelected.value) return '请选择城市'
  const option = cityOptions.find(opt => opt.value === citySelected.value)
  return option ? option.label : '请选择城市'
})

const dateText = computed<string>(() => {
  if (!dateSelected.value || dateSelected.value.length === 0) return '请选择日期'
  return `${dateSelected.value[0]}月${dateSelected.value[1]}日`
})
</script>

<template>
  <view class="demo-container">
    <view class="demo-item" @click="cityVisible = true">
      <text class="demo-label">城市</text>
      <text class="demo-value">{{ cityText }}</text>
    </view>
    
    <view class="demo-item" @click="dateVisible = true">
      <text class="demo-label">日期</text>
      <text class="demo-value">{{ dateText }}</text>
    </view>
    
    <TPicker 
      v-model="cityVisible" 
      v-model:selectedValue="citySelected"
      :options="cityOptions"
      title="选择城市"
    />
    
    <TPicker 
      v-model="dateVisible" 
      v-model:selectedValue="dateSelected"
      :columns="dateColumns"
      title="选择日期"
    />
  </view>
</template>

<style lang="scss" scoped>
.demo-container {
  padding: 32rpx;
}

.demo-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24rpx 0;
  border-bottom: 1px solid #f0f0f0;
}

.demo-label {
  font-size: 28rpx;
  color: #303133;
}

.demo-value {
  font-size: 28rpx;
  color: #909399;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| v-model | 控制选择器显示（使用 defineModel） | boolean | - | false |
| v-model:selectedValue | 控制选中的值（使用命名 defineModel） | any | - | null |
| title | 选择器标题 | string | - | '请选择' |
| options | 单列选择器数据 | TPickerOption[] | - | [] |
| columns | 多列选择器数据 | TPickerOption[][] | - | [] |
| confirm-text | 确认按钮文字 | string | - | '确定' |
| cancel-text | 取消按钮文字 | string | - | '取消' |
| item-height | 选项高度 | string | - | '44px' |
| visible-item-count | 可见选项数量 | number | - | 5 |
| show-toolbar | 是否显示工具栏 | boolean | - | true |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| confirm | 点击确认按钮时触发 | (value: any, index: number \| number[], option: TPickerOption \| TPickerOption[]) => void |
| cancel | 点击取消按钮或遮罩时触发 | () => void |
| change | 选项改变时触发 | (value: any, index: number \| number[], columnIndex: number) => void |

### TPickerOption 类型

```typescript
interface TPickerOption {
  label: string              // 选项文本
  value: string | number     // 选项值
  children?: TPickerOption[] // 子选项（用于级联选择）
  disabled?: boolean         // 是否禁用
}
```

## 注意事项

1. **双 v-model**：TPicker 使用两个 v-model：
   - `v-model`：控制选择器的显示/隐藏
   - `v-model:selectedValue`：控制选中的值

2. **单列 vs 多列**：
   - 使用 `options` 属性创建单列选择器
   - 使用 `columns` 属性创建多列选择器
   - 不要同时使用两个属性

3. **选中值类型**：
   - 单列模式：`selectedValue` 为单个值（string | number）
   - 多列模式：`selectedValue` 为数组（any[]）

4. **禁用选项**：禁用的选项会显示半透明效果，但仍然可以滚动到该位置。

5. **高度计算**：选择器的总高度 = `item-height` × `visible-item-count`

6. **遮罩关闭**：点击遮罩层会触发 cancel 事件并关闭选择器。

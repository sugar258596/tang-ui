# Select 选择器

选择器组件，用于从下拉列表中选择一个或多个选项。

::: tip v-model 支持
TSelect 组件使用 Vue 3.4+ 的 `defineModel` API 实现双向绑定。

**类型定义**：`defineModel<SingleSelectValue | MultipleSelectValue>({ default: null })`

**SingleSelectValue**: `string | number | null`

**MultipleSelectValue**: `(string | number)[]`

**使用方式**：`<TSelect v-model="selected" :options="options" />`
:::

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

最简单的选择器用法。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { SelectOption } from '@/components/TSelect/type.uts'

const selected = ref<string | number | null>(null)

const options: SelectOption[] = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B', value: 'b' },
  { label: '选项 C', value: 'c' }
]
</script>

<template>
  <TSelect v-model="selected" :options="options" />
</template>
```

## 选择器尺寸

提供三种尺寸：small、medium、large。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { SelectOption } from '@/components/TSelect/type.uts'

const selected = ref<string | number | null>(null)

const options: SelectOption[] = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B', value: 'b' },
  { label: '选项 C', value: 'c' }
]
</script>

<template>
  <view class="demo-section">
    <TSelect v-model="selected" :options="options" size="small" />
    <TSelect v-model="selected" :options="options" size="medium" />
    <TSelect v-model="selected" :options="options" size="large" />
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

## 禁用状态

### 禁用整个选择器

通过 `disabled` 属性禁用选择器。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { SelectOption } from '@/components/TSelect/type.uts'

const selected = ref<string | number | null>('a')

const options: SelectOption[] = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B', value: 'b' },
  { label: '选项 C', value: 'c' }
]
</script>

<template>
  <TSelect v-model="selected" :options="options" disabled />
</template>
```

### 禁用单个选项

通过选项的 `disabled` 属性禁用特定选项。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { SelectOption } from '@/components/TSelect/type.uts'

const selected = ref<string | number | null>(null)

const options: SelectOption[] = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B（禁用）', value: 'b', disabled: true },
  { label: '选项 C', value: 'c' }
]
</script>

<template>
  <TSelect v-model="selected" :options="options" />
</template>
```

## 只读状态

通过 `readonly` 属性设置只读状态。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { SelectOption } from '@/components/TSelect/type.uts'

const selected = ref<string | number | null>('a')

const options: SelectOption[] = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B', value: 'b' },
  { label: '选项 C', value: 'c' }
]
</script>

<template>
  <TSelect v-model="selected" :options="options" readonly />
</template>
```

## 多选模式

通过 `multiple` 属性启用多选模式。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { SelectOption } from '@/components/TSelect/type.uts'

const selected = ref<(string | number)[]>([])

const options: SelectOption[] = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B', value: 'b' },
  { label: '选项 C', value: 'c' },
  { label: '选项 D', value: 'd' }
]
</script>

<template>
  <TSelect v-model="selected" :options="options" multiple />
</template>
```

## 自定义占位符

通过 `placeholder` 属性自定义占位符文本。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { SelectOption } from '@/components/TSelect/type.uts'

const selected = ref<string | number | null>(null)

const options: SelectOption[] = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
  { label: '广州', value: 'guangzhou' }
]
</script>

<template>
  <TSelect 
    v-model="selected" 
    :options="options" 
    placeholder="请选择城市" 
  />
</template>
```

## 下拉方向

通过 `placement` 属性设置下拉列表的展开方向。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { SelectOption } from '@/components/TSelect/type.uts'

const selected = ref<string | number | null>(null)

const options: SelectOption[] = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B', value: 'b' },
  { label: '选项 C', value: 'c' }
]
</script>

<template>
  <view class="demo-section">
    <!-- 向下展开（默认） -->
    <TSelect v-model="selected" :options="options" placement="bottom" />
    
    <!-- 向上展开 -->
    <TSelect v-model="selected" :options="options" placement="top" />
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

## 文本对齐

通过 `align` 属性设置文本对齐方式。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { SelectOption } from '@/components/TSelect/type.uts'

const selected = ref<string | number | null>(null)

const options: SelectOption[] = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B', value: 'b' },
  { label: '选项 C', value: 'c' }
]
</script>

<template>
  <view class="demo-section">
    <TSelect v-model="selected" :options="options" align="left" />
    <TSelect v-model="selected" :options="options" align="center" />
    <TSelect v-model="selected" :options="options" align="right" />
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

## 自定义样式

通过 `height`、`background` 和 `border-color` 属性自定义样式。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { SelectOption } from '@/components/TSelect/type.uts'

const selected = ref<string | number | null>(null)

const options: SelectOption[] = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B', value: 'b' },
  { label: '选项 C', value: 'c' }
]
</script>

<template>
  <TSelect 
    v-model="selected" 
    :options="options" 
    :height="70"
    background="#f5f7fa"
    border-color="#409eff"
  />
</template>
```

## 事件处理

选择器支持 change 和 clear 事件。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { SelectOption } from '@/components/TSelect/type.uts'

const selected = ref<string | number | null>(null)

const options: SelectOption[] = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B', value: 'b' },
  { label: '选项 C', value: 'c' }
]

const handleChange = (option: SelectOption | SelectOption[] | null): void => {
  console.log('选中的选项:', option)
  if (option && !Array.isArray(option)) {
    uni.showToast({
      title: `已选择: ${option.label}`,
      icon: 'none'
    })
  }
}

const handleClear = (): void => {
  console.log('已清空')
  uni.showToast({
    title: '已清空选择',
    icon: 'none'
  })
}
</script>

<template>
  <TSelect 
    v-model="selected" 
    :options="options" 
    @change="handleChange"
    @clear="handleClear"
  />
</template>
```

## 完整示例

结合多个功能的完整示例。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { SelectOption } from '@/components/TSelect/type.uts'

const singleSelected = ref<string | number | null>(null)
const multipleSelected = ref<(string | number)[]>([])

const cityOptions: SelectOption[] = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
  { label: '广州', value: 'guangzhou' },
  { label: '深圳', value: 'shenzhen' },
  { label: '杭州（暂不可选）', value: 'hangzhou', disabled: true }
]

const hobbyOptions: SelectOption[] = [
  { label: '阅读', value: 'reading' },
  { label: '运动', value: 'sports' },
  { label: '音乐', value: 'music' },
  { label: '旅游', value: 'travel' },
  { label: '摄影', value: 'photography' }
]
</script>

<template>
  <view class="form-container">
    <view class="form-item">
      <text class="form-label">所在城市</text>
      <TSelect 
        v-model="singleSelected" 
        :options="cityOptions" 
        placeholder="请选择城市"
      />
    </view>
    
    <view class="form-item">
      <text class="form-label">兴趣爱好（多选）</text>
      <TSelect 
        v-model="multipleSelected" 
        :options="hobbyOptions" 
        placeholder="请选择兴趣爱好"
        multiple
        :max-display-count="2"
      />
    </view>
  </view>
</template>

<style lang="scss" scoped>
.form-container {
  padding: 32rpx;
}

.form-item {
  margin-bottom: 32rpx;
}

.form-label {
  font-size: 28rpx;
  color: #303133;
  margin-bottom: 16rpx;
  display: block;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| v-model | 绑定值（使用 defineModel） | SingleSelectValue / MultipleSelectValue | - | null |
| options | 选项列表 | SelectOption[] | - | [] |
| placeholder | 占位符文本 | string | - | '请选择' |
| disabled | 是否禁用 | boolean | - | false |
| readonly | 是否只读 | boolean | - | false |
| multiple | 是否支持多选 | boolean | - | false |
| height | 选择器高度 | string / number | - | 55 |
| background | 背景颜色 | string | - | #ffffff |
| border-color | 边框颜色 | string | - | #c1c2c3ff |
| show-clear | 是否显示清空按钮 | boolean | - | true |
| max-display-count | 多选时显示的最大标签数量 | number | - | 3 |
| placement | 下拉列表展开方向 | string | top / bottom | bottom |
| size | 选择器尺寸 | string | small / medium / large | medium |
| align | 文本对齐方式 | string | left / center / right | left |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 选中值改变时触发 | (option: SelectOption \| SelectOption[] \| null) => void |
| clear | 点击清空按钮时触发 | () => void |

### SelectOption 类型

```typescript
interface SelectOption {
  label: string              // 选项显示的文本
  value: string | number     // 选项的值
  disabled?: boolean         // 是否禁用该选项
}
```

### 类型定义

```typescript
// 单选模式下的值类型
type SingleSelectValue = string | number | null

// 多选模式下的值类型
type MultipleSelectValue = (string | number)[]
```

## 注意事项

1. **v-model 类型**：
   - 单选模式：`string | number | null`
   - 多选模式：`(string | number)[]`

2. **多选显示**：当多选项数量超过 `max-display-count` 时，会显示 "已选择 N 项"。

3. **清空按钮**：清空按钮只在有选中值且不是禁用或只读状态时显示。

4. **下拉方向**：
   - `bottom`：向下展开，适用于选择器在页面上方的情况
   - `top`：向上展开，适用于选择器在页面下方的情况

5. **选项禁用**：禁用的选项会显示半透明效果，且无法选择。

6. **多选操作**：多选模式下，下拉列表会显示"全选"和"清空"按钮，方便批量操作。

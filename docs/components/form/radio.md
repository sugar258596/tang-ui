# Radio 单选框

单选框组件，用于在多个选项中进行单选。支持单个单选框和单选框组两种使用方式。

::: tip v-model 支持
TRadioButton 和 TRadioGroup 组件都使用 Vue 3.4+ 的 `defineModel` API 实现双向绑定。

**类型定义**：`defineModel<string | number>({ default: '' })`

**使用方式**：
- 单个：`<TRadioButton v-model="selected" :value="'option1'" />`
- 组：`<TRadioGroup v-model="selected" :options="options" />`
:::

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

### 单个单选框

最简单的单选框用法。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const selected = ref<string>('')
</script>

<template>
  <view class="demo-section">
    <TRadioButton v-model="selected" :value="'option1'">
      <text>选项 1</text>
    </TRadioButton>
    <TRadioButton v-model="selected" :value="'option2'">
      <text>选项 2</text>
    </TRadioButton>
    <text>当前选中: {{ selected }}</text>
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

### 单选框组

使用单选框组管理多个选项。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { RadioOption } from '@/components/TRadioGroup/type.uts'

const selected = ref<string | number>('')

const options: RadioOption[] = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B', value: 'b' },
  { label: '选项 C', value: 'c' }
]
</script>

<template>
  <TRadioGroup v-model="selected" :options="options" />
</template>
```

## 单选框尺寸

提供三种尺寸：small、medium、large。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const selected = ref<string>('option1')
</script>

<template>
  <view class="demo-section">
    <TRadioButton v-model="selected" :value="'option1'" size="small">
      <text>小尺寸</text>
    </TRadioButton>
    <TRadioButton v-model="selected" :value="'option2'" size="medium">
      <text>中等尺寸</text>
    </TRadioButton>
    <TRadioButton v-model="selected" :value="'option3'" size="large">
      <text>大尺寸</text>
    </TRadioButton>
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

### 单个禁用

通过 `disabled` 属性禁用单选框。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const selected = ref<string>('option1')
</script>

<template>
  <view class="demo-section">
    <TRadioButton v-model="selected" :value="'option1'" disabled>
      <text>已选中且禁用</text>
    </TRadioButton>
    <TRadioButton v-model="selected" :value="'option2'" disabled>
      <text>未选中且禁用</text>
    </TRadioButton>
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

### 组禁用

禁用整个单选框组或单个选项。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { RadioOption } from '@/components/TRadioGroup/type.uts'

const selected = ref<string | number>('a')

const options: RadioOption[] = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B（禁用）', value: 'b', disabled: true },
  { label: '选项 C', value: 'c' }
]
</script>

<template>
  <view class="demo-section">
    <!-- 禁用整个组 -->
    <TRadioGroup v-model="selected" :options="options" disabled />
    
    <!-- 禁用单个选项 -->
    <TRadioGroup v-model="selected" :options="options" />
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

## 自定义颜色

通过 `active-color` 和 `inactive-color` 属性自定义颜色。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const selected = ref<string>('option1')
</script>

<template>
  <view class="demo-section">
    <TRadioButton 
      v-model="selected" 
      :value="'option1'" 
      active-color="#00bba7" 
      inactive-color="#666666"
    >
      <text>青色主题</text>
    </TRadioButton>
    <TRadioButton 
      v-model="selected" 
      :value="'option2'" 
      active-color="#f56c6c" 
      inactive-color="#909399"
    >
      <text>红色主题</text>
    </TRadioButton>
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

## 排列方向

单选框组支持垂直和水平排列。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { RadioOption } from '@/components/TRadioGroup/type.uts'

const selected = ref<string | number>('')

const options: RadioOption[] = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B', value: 'b' },
  { label: '选项 C', value: 'c' }
]
</script>

<template>
  <view class="demo-section">
    <!-- 垂直排列（默认） -->
    <TRadioGroup 
      v-model="selected" 
      :options="options" 
      direction="vertical" 
    />
    
    <!-- 水平排列 -->
    <TRadioGroup 
      v-model="selected" 
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

## 选项组模式

TRadioButton 支持通过 `options` 属性直接渲染选项组。

```vue
<script setup lang="uts">
import { ref } from 'vue'

interface FormOption {
  label: string
  value: string | number
}

const selected = ref<string | number>('')

const options: FormOption[] = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B', value: 'b' },
  { label: '选项 C', value: 'c' }
]
</script>

<template>
  <TRadioButton v-model="selected" :options="options" />
</template>
```

## 事件处理

单选框支持 change 事件。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { RadioOption } from '@/components/TRadioGroup/type.uts'

const selected = ref<string | number>('')

const options: RadioOption[] = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B', value: 'b' },
  { label: '选项 C', value: 'c' }
]

const handleChange = (val: string | number): void => {
  console.log('选中的值:', val)
  uni.showToast({
    title: `已选择: ${val}`,
    icon: 'none'
  })
}
</script>

<template>
  <TRadioGroup 
    v-model="selected" 
    :options="options" 
    @change="handleChange" 
  />
</template>
```

## 表单场景

在表单中使用单选框。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { RadioOption } from '@/components/TRadioGroup/type.uts'

interface FormData {
  gender: string | number
  level: string | number
}

const formData = ref<FormData>({
  gender: '',
  level: ''
})

const genderOptions: RadioOption[] = [
  { label: '男', value: 'male' },
  { label: '女', value: 'female' }
]

const levelOptions: RadioOption[] = [
  { label: '初级', value: 1 },
  { label: '中级', value: 2 },
  { label: '高级', value: 3 }
]

const handleSubmit = (): void => {
  console.log('表单数据:', formData.value)
}
</script>

<template>
  <view class="form-container">
    <view class="form-item">
      <text class="form-label">性别</text>
      <TRadioGroup 
        v-model="formData.gender" 
        :options="genderOptions" 
        direction="horizontal" 
      />
    </view>
    
    <view class="form-item">
      <text class="form-label">等级</text>
      <TRadioGroup 
        v-model="formData.level" 
        :options="levelOptions" 
      />
    </view>
    
    <TButton type="primary" @click="handleSubmit">提交</TButton>
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

### TRadioButton Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| v-model | 绑定值（使用 defineModel） | string / number | - | '' |
| value | 单选框的值 | string / number | - | - |
| options | 选项组模式的选项列表 | FormOption[] | - | [] |
| size | 单选框尺寸 | string | small / medium / large | medium |
| active-color | 选中状态颜色 | string | - | #00bba7 |
| inactive-color | 未选中状态颜色 | string | - | #666666 |
| disabled | 是否禁用 | boolean | - | false |
| checked | 是否选中（仅单个按钮模式） | boolean | - | false |
| name | 名称属性（用于表单提交） | string | - | - |

### TRadioButton Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 单选框状态改变时触发 | (value: string \| number) => void |

### TRadioGroup Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| v-model | 绑定值（使用 defineModel） | string / number | - | '' |
| options | 选项列表 | RadioOption[] | - | [] |
| direction | 排列方向 | string | vertical / horizontal | vertical |
| disabled | 是否禁用整个组 | boolean | - | false |
| custom-class | 自定义类名 | string | - | '' |
| custom-style | 自定义样式 | string | - | '' |

### TRadioGroup Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 选中值改变时触发 | (value: string \| number) => void |

### RadioOption 类型

```typescript
interface RadioOption {
  label: string              // 显示文本
  value: string | number     // 选项值
  disabled?: boolean         // 是否禁用该选项
}
```

### FormOption 类型

```typescript
interface FormOption {
  label: string              // 显示文本
  value: string | number     // 选项值
}
```

## 注意事项

1. **v-model 类型**：TRadioButton 和 TRadioGroup 的 v-model 都接受 `string | number` 类型。

2. **选项值唯一性**：在单选框组中，每个选项的 `value` 必须唯一。

3. **单选特性**：与复选框不同，单选框一旦选中某个选项，必须选择其他选项才能改变，无法通过再次点击取消选中。

4. **禁用优先级**：如果 TRadioGroup 设置了 `disabled`，则所有选项都会被禁用，即使单个选项没有设置 `disabled`。

5. **两种使用模式**：
   - TRadioButton 可以单独使用，也可以通过 `options` 属性渲染选项组
   - TRadioGroup 专门用于选项组场景，提供更简洁的 API

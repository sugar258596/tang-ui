# Input 输入框

输入框组件，支持多种类型、尺寸和状态的输入框。

::: tip v-model 支持
TInput 组件使用 Vue 3.4+ 的 `defineModel` API 实现双向绑定。

**类型定义**：`defineModel<string | number>({ default: '' })`

**使用方式**：`<TInput v-model="value" />`
:::

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

最简单的输入框用法。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <TInput v-model="value" placeholder="请输入内容" />
</template>
```

## 输入框类型

支持多种输入类型：文本、数字、密码、电话。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const textValue = ref<string>('')
const numberValue = ref<number>(0)
const passwordValue = ref<string>('')
const telValue = ref<string>('')
</script>

<template>
  <view class="demo-section">
    <TInput v-model="textValue" type="text" placeholder="文本输入" />
    <TInput v-model="numberValue" type="number" placeholder="数字输入" />
    <TInput v-model="passwordValue" type="password" placeholder="密码输入" />
    <TInput v-model="telValue" type="tel" placeholder="电话输入" />
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

## 输入框尺寸

提供四种尺寸：large、medium、small、mini。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <view class="demo-section">
    <TInput v-model="value" size="large" placeholder="大型输入框" />
    <TInput v-model="value" size="medium" placeholder="中等输入框" />
    <TInput v-model="value" size="small" placeholder="小型输入框" />
    <TInput v-model="value" size="mini" placeholder="迷你输入框" />
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

通过 `disabled` 属性禁用输入框。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<string>('禁用状态的值')
</script>

<template>
  <view class="demo-section">
    <TInput disabled placeholder="禁用状态" />
    <TInput v-model="value" disabled />
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

const value = ref<string>('只读状态的值')
</script>

<template>
  <TInput v-model="value" readonly />
</template>
```

## 可清除

通过 `clearable` 属性显示清除按钮。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <TInput v-model="value" clearable placeholder="可清除的输入框" />
</template>
```

## 字数统计

通过 `show-count` 和 `maxlength` 属性显示字数统计。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <TInput 
    v-model="value" 
    :maxlength="20" 
    show-count 
    placeholder="最多输入20个字符" 
  />
</template>
```

## 带图标

通过 `prefix-icon` 和 `suffix-icon` 属性添加图标。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const searchValue = ref<string>('')
const verifyValue = ref<string>('')
</script>

<template>
  <view class="demo-section">
    <TInput v-model="searchValue" prefix-icon="🔍" placeholder="搜索" />
    <TInput v-model="verifyValue" suffix-icon="✓" placeholder="验证" />
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

## 文本域

通过 `type="textarea"` 创建多行文本输入框。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const textareaValue = ref<string>('')
const autoHeightValue = ref<string>('')
</script>

<template>
  <view class="demo-section">
    <TInput 
      v-model="textareaValue" 
      type="textarea" 
      placeholder="请输入多行文本" 
    />
    <TInput 
      v-model="autoHeightValue" 
      type="textarea" 
      :rows="5" 
      placeholder="5行文本域" 
    />
    <TInput 
      v-model="autoHeightValue" 
      type="textarea" 
      auto-height 
      placeholder="自动高度文本域" 
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

## 事件处理

输入框支持多种事件。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<string>('')

const handleInput = (val: string | number): void => {
  console.log('输入中:', val)
}

const handleChange = (val: string | number): void => {
  console.log('值改变:', val)
}

const handleFocus = (): void => {
  console.log('获得焦点')
}

const handleBlur = (): void => {
  console.log('失去焦点')
}

const handleClear = (): void => {
  console.log('清除内容')
}

const handleConfirm = (): void => {
  console.log('确认输入')
}
</script>

<template>
  <TInput 
    v-model="value" 
    clearable
    placeholder="触发各种事件"
    @input="handleInput"
    @change="handleChange"
    @focus="handleFocus"
    @blur="handleBlur"
    @clear="handleClear"
    @confirm="handleConfirm"
  />
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| v-model | 绑定值（使用 defineModel） | string / number | - | '' |
| type | 输入框类型 | string | text / number / password / tel / textarea | text |
| size | 输入框尺寸 | string | large / medium / small / mini | medium |
| placeholder | 占位文本 | string | - | '' |
| disabled | 是否禁用 | boolean | - | false |
| readonly | 是否只读 | boolean | - | false |
| clearable | 是否显示清除按钮 | boolean | - | false |
| show-count | 是否显示字数统计 | boolean | - | false |
| maxlength | 最大输入长度 | number | - | -1 |
| prefix-icon | 前缀图标 | string | - | '' |
| suffix-icon | 后缀图标 | string | - | '' |
| rows | 文本域行数 | number | - | 3 |
| auto-height | 文本域自动高度 | boolean | - | false |
| auto-focus | 自动获取焦点 | boolean | - | false |
| custom-class | 自定义类名 | string | - | '' |
| custom-style | 自定义样式 | string | - | '' |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| input | 输入时触发 | (value: string \| number) => void |
| change | 值改变时触发（失去焦点时） | (value: string \| number) => void |
| focus | 获得焦点时触发 | () => void |
| blur | 失去焦点时触发 | () => void |
| clear | 点击清除按钮时触发 | () => void |
| confirm | 点击键盘确认按钮时触发 | () => void |

## 注意事项

1. **v-model 类型**：TInput 的 v-model 支持 `string` 和 `number` 类型，会根据 `type` 属性自动处理。

2. **文本域模式**：当 `type="textarea"` 时，输入框会变为多行文本域，此时 `rows` 和 `auto-height` 属性生效。

3. **字数统计**：只有同时设置 `show-count` 和 `maxlength` 时，字数统计才会显示。

4. **清除按钮**：清除按钮只在输入框有值且不是禁用或只读状态时显示。

5. **图标使用**：`prefix-icon` 和 `suffix-icon` 接受任何字符串，建议使用 emoji 或图标字体。

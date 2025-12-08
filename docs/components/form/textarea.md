# Textarea 多行文本

多行文本输入框组件，支持自动高度、字数统计、清空等功能。

::: tip v-model 支持
TTextarea 组件使用 Vue 3.4+ 的 `defineModel` API 实现双向绑定。

**类型定义**：`defineModel<string>({ default: '' })`

**使用方式**：`<TTextarea v-model="value" />`
:::

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

最简单的多行文本输入框。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <TTextarea v-model="value" placeholder="请输入内容" />
</template>
```

## 固定行数

通过 `rows` 属性设置显示行数。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <view class="demo-section">
    <TTextarea v-model="value" :rows="3" placeholder="3行文本域" />
    <TTextarea v-model="value" :rows="5" placeholder="5行文本域" />
    <TTextarea v-model="value" :rows="8" placeholder="8行文本域" />
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

## 自动高度

通过 `auto-height` 属性实现自动高度。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <TTextarea 
    v-model="value" 
    auto-height 
    placeholder="输入内容会自动调整高度" 
  />
</template>
```

## 禁用状态

通过 `disabled` 属性禁用文本域。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<string>('这是禁用状态的文本')
</script>

<template>
  <TTextarea v-model="value" disabled />
</template>
```

## 字数统计

通过 `show-count` 属性显示字数统计。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <view class="demo-section">
    <!-- 仅显示当前字数 -->
    <TTextarea 
      v-model="value" 
      show-count 
      placeholder="显示当前字数" 
    />
    
    <!-- 显示字数和最大限制 -->
    <TTextarea 
      v-model="value" 
      show-count 
      :maxlength="200" 
      placeholder="最多输入200个字符" 
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

## 可清空

通过 `clearable` 属性显示清空按钮。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <TTextarea 
    v-model="value" 
    clearable 
    placeholder="可清空的文本域" 
  />
</template>
```

## 自动聚焦

通过 `auto-focus` 属性自动获取焦点。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <TTextarea 
    v-model="value" 
    auto-focus 
    placeholder="自动获取焦点" 
  />
</template>
```

## 事件处理

文本域支持多种事件。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<string>('')

const handleInput = (val: string): void => {
  console.log('输入中:', val)
}

const handleFocus = (event: Event): void => {
  console.log('获得焦点', event)
}

const handleBlur = (event: Event): void => {
  console.log('失去焦点', event)
}

const handleClear = (): void => {
  console.log('清空内容')
}
</script>

<template>
  <TTextarea 
    v-model="value" 
    clearable
    show-count
    placeholder="触发各种事件"
    @input="handleInput"
    @focus="handleFocus"
    @blur="handleBlur"
    @clear="handleClear"
  />
</template>
```

## 完整示例

结合多个功能的完整示例。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const feedbackValue = ref<string>('')
</script>

<template>
  <TTextarea 
    v-model="feedbackValue" 
    :rows="5"
    :maxlength="500"
    show-count
    clearable
    placeholder="请输入您的反馈意见（最多500字）"
  />
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| v-model | 绑定值（使用 defineModel） | string | - | '' |
| placeholder | 占位符文本 | string | - | '请输入内容' |
| placeholder-style | 占位符样式 | string | - | '' |
| disabled | 是否禁用 | boolean | - | false |
| maxlength | 最大输入长度，-1 表示不限制 | number | - | -1 |
| show-count | 是否显示字数统计 | boolean | - | false |
| auto-height | 是否自动增高，设置后 rows 无效 | boolean | - | false |
| rows | 显示行数 | number | - | 3 |
| auto-focus | 是否自动聚焦 | boolean | - | false |
| clearable | 是否显示清空按钮 | boolean | - | false |
| custom-class | 自定义类名 | string | - | '' |
| custom-style | 自定义样式 | string | - | '' |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| input | 输入时触发 | (value: string) => void |
| focus | 获得焦点时触发 | (event: Event) => void |
| blur | 失去焦点时触发 | (event: Event) => void |
| clear | 点击清空按钮时触发 | () => void |

## 注意事项

1. **自动高度**：当设置 `auto-height` 为 `true` 时，`rows` 属性将不生效，文本域会根据内容自动调整高度。

2. **字数统计**：
   - 仅设置 `show-count` 时，只显示当前字数
   - 同时设置 `show-count` 和 `maxlength` 时，显示 "当前字数/最大字数" 格式

3. **清空按钮**：清空按钮只在文本域有内容且不是禁用状态时显示。

4. **占位符样式**：`placeholder-style` 属性可以自定义占位符的样式，如颜色、字体大小等。

5. **性能优化**：对于大量文本输入，建议设置合理的 `maxlength` 限制，避免性能问题。

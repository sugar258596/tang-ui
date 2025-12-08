# SearchBar 搜索框

搜索框组件，用于搜索场景的输入框，支持防抖、清除、取消等功能。

::: tip v-model 支持
TSearchBar 组件使用 Vue 3.4+ 的 `defineModel` API 实现双向绑定。

**类型定义**：`defineModel<string>({ default: '' })`

**使用方式**：`<TSearchBar v-model="value" />`
:::

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

最简单的搜索框用法。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <TSearchBar v-model="value" />
</template>
```

## 搜索框形状

通过 `shape` 属性设置搜索框形状。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <view class="demo-section">
    <!-- 方形 -->
    <TSearchBar v-model="value" shape="square" />
    
    <!-- 圆形 -->
    <TSearchBar v-model="value" shape="round" />
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

## 自定义占位符

通过 `placeholder` 属性自定义占位符文本。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <TSearchBar v-model="value" placeholder="搜索商品" />
</template>
```

## 显示取消按钮

通过 `show-cancel` 属性显示取消按钮。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <TSearchBar v-model="value" show-cancel />
</template>
```

## 自定义背景色

通过 `background` 属性自定义背景色。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <TSearchBar v-model="value" background="#e8f4ff" />
</template>
```

## 禁用状态

通过 `disabled` 属性禁用搜索框。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<string>('禁用状态')
</script>

<template>
  <TSearchBar v-model="value" disabled />
</template>
```

## 防抖搜索

通过 `debounce` 属性设置防抖延迟。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<string>('')

const handleSearch = (val: string): void => {
  console.log('搜索:', val)
}
</script>

<template>
  <TSearchBar 
    v-model="value" 
    :debounce="500"
    @search="handleSearch"
  />
</template>
```

## 事件处理

搜索框支持多种事件。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<string>('')

const handleSearch = (val: string): void => {
  console.log('搜索:', val)
  uni.showToast({
    title: `搜索: ${val}`,
    icon: 'none'
  })
}

const handleInput = (val: string): void => {
  console.log('输入:', val)
}

const handleCancel = (): void => {
  console.log('取消搜索')
}

const handleClear = (): void => {
  console.log('清空内容')
}

const handleFocus = (event: Event): void => {
  console.log('获得焦点', event)
}

const handleBlur = (event: Event): void => {
  console.log('失去焦点', event)
}
</script>

<template>
  <TSearchBar 
    v-model="value" 
    show-cancel
    @search="handleSearch"
    @input="handleInput"
    @cancel="handleCancel"
    @clear="handleClear"
    @focus="handleFocus"
    @blur="handleBlur"
  />
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| v-model | 绑定值（使用 defineModel） | string | - | '' |
| placeholder | 占位符文本 | string | - | '请输入搜索关键词' |
| shape | 搜索框形状 | string | square / round | square |
| background | 背景颜色 | string | - | #f5f5f5 |
| maxlength | 最大输入长度 | number | - | -1 |
| clearable | 是否显示清除按钮 | boolean | - | true |
| show-cancel | 是否显示取消按钮 | boolean | - | false |
| cancel-text | 取消按钮文字 | string | - | '取消' |
| disabled | 是否禁用 | boolean | - | false |
| readonly | 是否只读 | boolean | - | false |
| auto-focus | 是否自动聚焦 | boolean | - | false |
| left-icon | 左侧图标 | string | - | 🔍 |
| debounce | 防抖延迟（毫秒） | number | - | 300 |
| custom-class | 自定义类名 | string | - | '' |
| custom-style | 自定义样式 | string | - | '' |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| search | 搜索时触发（防抖后） | (value: string) => void |
| input | 输入时触发 | (value: string) => void |
| cancel | 点击取消按钮时触发 | () => void |
| clear | 点击清除按钮时触发 | () => void |
| focus | 获得焦点时触发 | (event: Event) => void |
| blur | 失去焦点时触发 | (event: Event) => void |

## 注意事项

1. **v-model 类型**：TSearchBar 的 v-model 只接受 `string` 类型的值。

2. **防抖机制**：`search` 事件会在用户停止输入 `debounce` 毫秒后触发，避免频繁搜索。

3. **清除按钮**：清除按钮只在输入框有内容时显示。

4. **取消按钮**：取消按钮需要通过 `show-cancel` 属性显式开启。

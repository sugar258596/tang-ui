# TInput 输入框组件

输入框组件，支持多种类型、尺寸和状态。

## 基础用法

```vue
<template>
  <TInput v-model="value" placeholder="请输入内容" />
</template>

<script setup>
import { ref } from "vue";
const value = ref("");
</script>
```

## 输入框类型

```vue
<template>
  <TInput type="text" placeholder="文本输入" />
  <TInput type="number" placeholder="数字输入" />
  <TInput type="password" placeholder="密码输入" />
  <TInput type="tel" placeholder="电话输入" />
</template>
```

## 输入框尺寸

```vue
<template>
  <TInput size="large" placeholder="大型输入框" />
  <TInput size="medium" placeholder="中等输入框" />
  <TInput size="small" placeholder="小型输入框" />
  <TInput size="mini" placeholder="迷你输入框" />
</template>
```

## 禁用状态

```vue
<template>
  <TInput disabled placeholder="禁用状态" />
  <TInput disabled value="禁用状态" />
</template>
```

## 只读状态

```vue
<template>
  <TInput readonly value="只读状态" />
</template>
```

## 清除按钮

```vue
<template>
  <TInput v-model="value" clearable placeholder="可清除" />
</template>
```

## 显示字数统计

```vue
<template>
  <TInput
    v-model="value"
    maxlength="20"
    show-count
    placeholder="最多输入20个字符"
  />
</template>
```

## 带图标

```vue
<template>
  <TInput prefix-icon="🔍" placeholder="搜索" />
  <TInput suffix-icon="✓" placeholder="验证" />
</template>
```

## 文本域

```vue
<template>
  <TInput type="textarea" placeholder="请输入多行文本" />
  <TInput type="textarea" :rows="5" placeholder="5行文本域" />
</template>
```

## Props

| 参数        | 说明                      | 类型            | 可选值                                    | 默认值 |
| ----------- | ------------------------- | --------------- | ----------------------------------------- | ------ |
| v-model     | 绑定值 (使用 defineModel) | string / number | -                                         | -      |
| type        | 输入框类型                | string          | text / number / password / tel / textarea | text   |
| size        | 输入框尺寸                | string          | large / medium / small / mini             | medium |
| placeholder | 占位文本                  | string          | -                                         | -      |
| disabled    | 是否禁用                  | boolean         | -                                         | false  |
| readonly    | 是否只读                  | boolean         | -                                         | false  |
| clearable   | 是否显示清除按钮          | boolean         | -                                         | false  |
| showCount   | 是否显示字数统计          | boolean         | -                                         | false  |
| maxlength   | 最大输入长度              | number          | -                                         | -1     |
| prefixIcon  | 前缀图标                  | string          | -                                         | -      |
| suffixIcon  | 后缀图标                  | string          | -                                         | -      |
| rows        | 文本域行数                | number          | -                                         | 3      |
| autoHeight  | 文本域自动高度            | boolean         | -                                         | false  |
| customClass | 自定义类名                | string          | -                                         | -      |
| customStyle | 自定义样式                | string          | -                                         | -      |

## Events

| 事件名 | 说明               | 回调参数                  |
| ------ | ------------------ | ------------------------- |
| input  | 输入时触发         | (value: string \| number) |
| change | 值改变时触发       | (value: string \| number) |
| focus  | 获得焦点时触发     | -                         |
| blur   | 失去焦点时触发     | -                         |
| clear  | 点击清除按钮时触发 | -                         |

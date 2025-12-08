# TRadioButton 单选按钮

单选按钮组件，支持单个按钮和选项组两种使用方式。

## 基础用法

```vue
<template>
  <TRadioButton v-model="value" value="option1">选项一</TRadioButton>
  <TRadioButton v-model="value" value="option2">选项二</TRadioButton>
  <TRadioButton v-model="value" value="option3">选项三</TRadioButton>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('option1')
</script>
```

## 选项组模式

通过 `options` 属性传入选项数组，自动渲染多个单选按钮。

```vue
<template>
  <TRadioButton 
    v-model="value" 
    :options="[
      { label: '选项一', value: 'option1' },
      { label: '选项二', value: 'option2' },
      { label: '选项三', value: 'option3' }
    ]" 
  />
</template>
```

## 禁用状态

```vue
<TRadioButton v-model="value" value="option1" disabled>禁用选项</TRadioButton>
```

## 不同尺寸

```vue
<TRadioButton v-model="value" value="small" size="small">小尺寸</TRadioButton>
<TRadioButton v-model="value" value="medium" size="medium">中等尺寸</TRadioButton>
<TRadioButton v-model="value" value="large" size="large">大尺寸</TRadioButton>
```

## 自定义颜色

```vue
<TRadioButton 
  v-model="value" 
  value="option1" 
  activeColor="#f56c6c"
  inactiveColor="#909399"
>
  自定义颜色
</TRadioButton>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue (v-model) | 绑定值 | `string \| number` | - |
| value | 单选按钮的值 | `string \| number` | - |
| label | 显示的标签文本 | `string` | - |
| options | 选项组模式的选项列表 | `FormOption[]` | `[]` |
| size | 按钮尺寸 | `'small' \| 'medium' \| 'large'` | `'medium'` |
| activeColor | 激活状态颜色 | `string` | `'#00bba7'` |
| inactiveColor | 非激活状态颜色 | `string` | `'#666666'` |
| disabled | 是否禁用 | `boolean` | `false` |
| checked | 是否选中（仅单个按钮模式） | `boolean` | `false` |
| name | 原生 name 属性 | `string` | - |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 选中值改变时触发 | `(value: string \| number)` |

## FormOption 类型

```typescript
type FormOption = {
  label: string
  value: string | number
}
```

## 在 TForm 中使用

TRadioButton 可以在 TForm 组件中使用：

```vue
<TForm v-model="formData" :schemas="schemas" />

<script setup>
const schemas = [
  {
    field: 'gender',
    label: '性别',
    component: 'Radio',
    required: true,
    componentProps: {
      options: [
        { label: '男', value: 'male' },
        { label: '女', value: 'female' }
      ]
    }
  }
]
</script>
```

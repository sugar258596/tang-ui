# TButton 按钮组件

按钮组件，支持多种类型、尺寸、形状和状态。

## 基础用法

```vue
<template>
  <TButton text="默认按钮" />
  <TButton type="primary" text="主要按钮" />
  <TButton type="success" text="成功按钮" />
  <TButton type="warning" text="警告按钮" />
  <TButton type="danger" text="危险按钮" />
  <TButton type="info" text="信息按钮" />
</template>
```

## 朴素按钮

```vue
<template>
  <TButton plain text="朴素按钮" />
  <TButton type="primary" plain text="主要按钮" />
  <TButton type="success" plain text="成功按钮" />
</template>
```

## 按钮尺寸

```vue
<template>
  <TButton size="large" text="大型按钮" />
  <TButton size="medium" text="中等按钮" />
  <TButton size="small" text="小型按钮" />
  <TButton size="mini" text="迷你按钮" />
</template>
```

## 按钮形状

```vue
<template>
  <TButton shape="square" text="方形按钮" />
  <TButton shape="round" text="圆角按钮" />
  <TButton shape="circle" icon="+" />
</template>
```

## 禁用状态

```vue
<template>
  <TButton disabled text="禁用按钮" />
  <TButton type="primary" disabled text="禁用按钮" />
</template>
```

## 加载状态

```vue
<template>
  <TButton loading text="加载中" />
  <TButton type="primary" loading text="加载中" />
</template>
```

## 块级按钮

```vue
<template>
  <TButton block text="块级按钮" />
  <TButton type="primary" block text="块级按钮" />
</template>
```

## 带图标按钮

```vue
<template>
  <TButton icon="🔍" text="搜索" />
  <TButton type="primary" icon="✓" text="确认" />
</template>
```

## Props

| 参数        | 说明           | 类型    | 可选值                                                | 默认值  |
| ----------- | -------------- | ------- | ----------------------------------------------------- | ------- |
| type        | 按钮类型       | string  | primary / success / warning / danger / info / default | default |
| size        | 按钮尺寸       | string  | large / medium / small / mini                         | medium  |
| shape       | 按钮形状       | string  | square / round / circle                               | square  |
| plain       | 是否为朴素按钮 | boolean | -                                                     | false   |
| disabled    | 是否禁用       | boolean | -                                                     | false   |
| loading     | 是否加载中     | boolean | -                                                     | false   |
| block       | 是否为块级按钮 | boolean | -                                                     | false   |
| text        | 按钮文本       | string  | -                                                     | -       |
| icon        | 图标           | string  | -                                                     | -       |
| customClass | 自定义类名     | string  | -                                                     | -       |
| customStyle | 自定义样式     | string  | -                                                     | -       |

## Events

| 事件名 | 说明           | 回调参数 |
| ------ | -------------- | -------- |
| click  | 点击按钮时触发 | -        |

## Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 按钮内容 |

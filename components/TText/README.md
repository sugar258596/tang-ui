# TText 文本组件

文本组件，支持多种类型、尺寸、粗细和样式。

## 基础用法

```vue
<template>
  <TText text="默认文本" />
  <TText type="primary" text="主要文本" />
  <TText type="success" text="成功文本" />
  <TText type="warning" text="警告文本" />
  <TText type="danger" text="危险文本" />
  <TText type="info" text="信息文本" />
</template>
```

## 文本尺寸

```vue
<template>
  <TText size="large" text="大号文本" />
  <TText size="medium" text="中号文本" />
  <TText size="small" text="小号文本" />
  <TText size="mini" text="迷你文本" />
</template>
```

## 文本粗细

```vue
<template>
  <TText weight="lighter" text="细体文本" />
  <TText weight="normal" text="正常文本" />
  <TText weight="medium" text="中粗文本" />
  <TText weight="bold" text="粗体文本" />
</template>
```

## 文本对齐

```vue
<template>
  <TText align="left" text="左对齐" />
  <TText align="center" text="居中对齐" />
  <TText align="right" text="右对齐" />
  <TText align="justify" text="两端对齐" />
</template>
```

## 文本样式

```vue
<template>
  <TText bold text="加粗文本" />
  <TText italic text="斜体文本" />
  <TText underline text="下划线文本" />
  <TText strikethrough text="删除线文本" />
</template>
```

## 自定义颜色

```vue
<template>
  <TText color="#ff0000" text="红色文本" />
  <TText color="#00ff00" text="绿色文本" />
  <TText color="#0000ff" text="蓝色文本" />
</template>
```

## 文本省略

```vue
<template>
  <TText ellipsis text="这是一段很长的文本，超出部分会显示省略号" />
  <TText :max-lines="2" text="这是一段很长的文本，最多显示两行，超出部分会被隐藏" />
</template>
```

## 自定义行高

```vue
<template>
  <TText :line-height="2" text="行高为2的文本" />
  <TText line-height="30px" text="行高为30px的文本" />
</template>
```

## 使用插槽

```vue
<template>
  <TText type="primary">
    这是通过插槽传入的文本内容
  </TText>
</template>
```

## Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| text | 文本内容 | string | - | - |
| type | 文本类型 | string | primary / success / warning / danger / info / default | default |
| size | 文本尺寸 | string | large / medium / small / mini | medium |
| weight | 文本粗细 | string | lighter / normal / medium / bold | normal |
| align | 文本对齐 | string | left / center / right / justify | left |
| color | 自定义颜色 | string | - | - |
| lineHeight | 行高 | number / string | - | 1.5 |
| maxLines | 最大行数 | number | - | 0 |
| ellipsis | 是否显示省略号 | boolean | - | false |
| bold | 是否加粗 | boolean | - | false |
| italic | 是否斜体 | boolean | - | false |
| underline | 是否显示下划线 | boolean | - | false |
| strikethrough | 是否显示删除线 | boolean | - | false |
| customClass | 自定义类名 | string | - | - |
| customStyle | 自定义样式 | string | - | - |

## Slots

| 名称 | 说明 |
|------|------|
| default | 文本内容 |

# Text 文本

文本组件，支持多种类型、尺寸、粗细和样式，提供丰富的文本展示能力。

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

支持 `default`、`primary`、`success`、`warning`、`danger`、`info` 六种类型。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <TText text="默认文本" />
    <TText type="primary" text="主要文本" />
    <TText type="success" text="成功文本" />
    <TText type="warning" text="警告文本" />
    <TText type="danger" text="危险文本" />
    <TText type="info" text="信息文本" />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
  padding: 32rpx;
}
</style>
```

## 文本尺寸

支持 `large`、`medium`、`small`、`mini` 四种尺寸，默认为 `medium`。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <TText size="large" text="大号文本" />
    <TText size="medium" text="中号文本" />
    <TText size="small" text="小号文本" />
    <TText size="mini" text="迷你文本" />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
  padding: 32rpx;
}
</style>
```

## 文本粗细

支持 `lighter`、`normal`、`medium`、`bold` 四种粗细。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <TText weight="lighter" text="细体文本" />
    <TText weight="normal" text="正常文本" />
    <TText weight="medium" text="中粗文本" />
    <TText weight="bold" text="粗体文本" />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
  padding: 32rpx;
}
</style>
```

## 文本对齐

支持 `left`、`center`、`right`、`justify` 四种对齐方式。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <TText align="left" text="左对齐文本" />
    <TText align="center" text="居中对齐文本" />
    <TText align="right" text="右对齐文本" />
    <TText align="justify" text="两端对齐文本，这是一段较长的文本用于演示两端对齐的效果" />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
  padding: 32rpx;
}
</style>
```

## 文本样式

支持加粗、斜体、下划线、删除线等样式。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <TText bold text="加粗文本" />
    <TText italic text="斜体文本" />
    <TText underline text="下划线文本" />
    <TText strikethrough text="删除线文本" />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
  padding: 32rpx;
}
</style>
```

## 自定义颜色

通过 `color` 属性自定义文本颜色。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <TText color="#ff0000" text="红色文本" />
    <TText color="#00ff00" text="绿色文本" />
    <TText color="#0000ff" text="蓝色文本" />
    <TText color="#ff6b6b" text="自定义颜色文本" />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
  padding: 32rpx;
}
</style>
```

## 文本省略

通过 `ellipsis` 属性设置文本超出显示省略号。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <TText 
      ellipsis 
      text="这是一段很长的文本，超出部分会显示省略号，这样可以保持界面的整洁美观" 
    />
    <TText 
      :max-lines="2" 
      text="这是一段很长的文本，最多显示两行，超出部分会被隐藏。这样可以在有限的空间内展示更多内容，同时保持界面的整洁。" 
    />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
  padding: 32rpx;
}
</style>
```

## 自定义行高

通过 `lineHeight` 属性自定义文本行高。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <TText :line-height="1.5" text="行高为 1.5 的文本" />
    <TText :line-height="2" text="行高为 2 的文本" />
    <TText line-height="30px" text="行高为 30px 的文本" />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
  padding: 32rpx;
}
</style>
```

## 使用插槽

通过默认插槽传入文本内容，优先级高于 `text` 属性。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <TText type="primary">
      这是通过插槽传入的文本内容
    </TText>
    <TText type="success" size="large">
      <text>支持</text>
      <text style="color: #f56c6c;">混合</text>
      <text>内容</text>
    </TText>
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
  padding: 32rpx;
}
</style>
```

## 组合使用

结合多个属性实现复杂的文本样式。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <TText 
      type="primary" 
      size="large" 
      weight="bold" 
      text="主要大号粗体文本" 
    />
    <TText 
      type="danger" 
      italic 
      underline 
      text="危险斜体下划线文本" 
    />
    <TText 
      color="#ff6b6b" 
      size="small" 
      align="center" 
      text="自定义颜色小号居中文本" 
    />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
  padding: 32rpx;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| text | 文本内容 | string | - | - |
| type | 文本类型 | string | `primary` / `success` / `warning` / `danger` / `info` / `default` | `default` |
| size | 文本尺寸 | string | `large` / `medium` / `small` / `mini` | `medium` |
| weight | 文本粗细 | string | `lighter` / `normal` / `medium` / `bold` | `normal` |
| align | 文本对齐 | string | `left` / `center` / `right` / `justify` | `left` |
| color | 自定义颜色 | string | - | - |
| lineHeight | 行高 | number / string | - | `1.5` |
| maxLines | 最大行数（0 表示不限制） | number | - | `0` |
| ellipsis | 是否显示省略号 | boolean | - | `false` |
| bold | 是否加粗 | boolean | - | `false` |
| italic | 是否斜体 | boolean | - | `false` |
| underline | 是否显示下划线 | boolean | - | `false` |
| strikethrough | 是否显示删除线 | boolean | - | `false` |
| customClass | 自定义类名 | string | - | - |
| customStyle | 自定义样式 | string | - | - |

### Slots

| 名称 | 说明 |
|------|------|
| default | 文本内容，优先级高于 text 属性 |

## 注意事项

1. 插槽内容的优先级高于 `text` 属性
2. `maxLines` 设置为 0 时表示不限制行数
3. `ellipsis` 属性需要配合固定宽度使用才能生效
4. 自定义颜色会覆盖类型颜色
5. `lineHeight` 可以是数字（倍数）或带单位的字符串

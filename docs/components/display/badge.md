# Badge 徽标

用于显示数字或状态标记的徽标组件，通常用于消息提醒、未读数量等场景。

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

最简单的徽标用法，显示数字或文字。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const count = ref<number>(5)
</script>

<template>
  <TBadge :value="count">
    <TButton text="消息" />
  </TBadge>
</template>
```

## 最大值

可以设置最大值，超过最大值时显示 `{max}+`。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const count = ref<number>(100)
</script>

<template>
  <TBadge :value="count" :max="99">
    <TButton text="通知" />
  </TBadge>
</template>
```

## 小圆点

使用小圆点样式，不显示具体数字。

```vue
<script setup lang="uts">
</script>

<template>
  <TBadge :is-dot="true">
    <TButton text="消息" />
  </TBadge>
</template>
```

## 不同类型

提供多种预设的徽标类型，包括 primary、success、warning、danger、info。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-row">
    <TBadge :value="5" type="primary">
      <TButton text="Primary" />
    </TBadge>

    <TBadge :value="5" type="success">
      <TButton text="Success" />
    </TBadge>

    <TBadge :value="5" type="warning">
      <TButton text="Warning" />
    </TBadge>

    <TBadge :value="5" type="danger">
      <TButton text="Danger" />
    </TBadge>

    <TBadge :value="5" type="info">
      <TButton text="Info" />
    </TBadge>
  </view>
</template>

<style lang="scss" scoped>
.demo-row {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
</style>
```

## 自定义颜色

可以自定义徽标的背景色和文字颜色。

```vue
<script setup lang="uts">
</script>

<template>
  <TBadge :value="5" bg-color="#52c41a" color="#ffffff">
    <TButton text="自定义颜色" />
  </TBadge>
</template>
```

## 偏移量

可以设置徽标的偏移量，调整徽标的位置。

```vue
<script setup lang="uts">
</script>

<template>
  <TBadge :value="5" :offset="[10, 10]">
    <TButton text="偏移徽标" />
  </TBadge>
</template>
```

## 隐藏徽标

可以通过 `hidden` 属性控制徽标的显示和隐藏。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const hidden = ref<boolean>(false)

const toggleHidden = (): void => {
  hidden.value = !hidden.value
}
</script>

<template>
  <view>
    <TBadge :value="5" :hidden="hidden">
      <TButton text="消息" />
    </TBadge>

    <TButton text="切换显示" @click="toggleHidden" />
  </view>
</template>
```

## 独立使用

徽标可以不包裹其他元素，独立使用。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-row">
    <TBadge :value="5" />
    <TBadge :value="10" type="success" />
    <TBadge :value="20" type="warning" />
    <TBadge :is-dot="true" type="danger" />
  </view>
</template>

<style lang="scss" scoped>
.demo-row {
  display: flex;
  gap: 16px;
  align-items: center;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| value | 显示的数值 | `number \| string` | - | `''` |
| max | 最大值，超过最大值显示 `{max}+` | `number` | - | `99` |
| isDot | 是否显示小圆点 | `boolean` | - | `false` |
| hidden | 是否隐藏徽标 | `boolean` | - | `false` |
| type | 徽标类型 | `string` | `primary` / `success` / `warning` / `danger` / `info` | `danger` |
| bgColor | 自定义背景色 | `string` | - | - |
| color | 自定义文字颜色 | `string` | - | - |
| offset | 偏移量 `[x, y]` | `[number, number]` | - | `[0, 0]` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 徽标包裹的内容 |

## 注意事项

1. 当 `value` 为 `0` 或空字符串时，徽标不会显示（除非设置了 `isDot`）
2. 当 `value` 超过 `max` 时，会显示 `{max}+`
3. `isDot` 为 `true` 时，不会显示具体数值，只显示小圆点
4. 自定义颜色（`bgColor` 和 `color`）会覆盖 `type` 的预设颜色
5. `offset` 用于微调徽标位置，格式为 `[x, y]`，正值向右/下偏移，负值向左/上偏移

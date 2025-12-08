# Tags 标签页

类似 Ant Design 的 Tabs 标签页组件，支持多种样式和功能。

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

::: tip v-model 使用
Tags 组件使用 `defineModel` 实现双向绑定，支持 `v-model` 绑定当前激活的标签 key。
:::

## 基础用法

最简单的标签页用法。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { TabItem } from '@/components/Tags/type.uts'

const tabItems: TabItem[] = [
  { key: '1', label: '选项卡 1' },
  { key: '2', label: '选项卡 2' },
  { key: '3', label: '选项卡 3' }
]

const activeKey = ref<string>('1')
</script>

<template>
  <Tags :items="tabItems" v-model="activeKey">
    <view v-if="activeKey === '1'">内容 1</view>
    <view v-if="activeKey === '2'">内容 2</view>
    <view v-if="activeKey === '3'">内容 3</view>
  </Tags>
</template>
```

## 卡片式标签页

使用卡片样式的标签页，激活时带有背景色和阴影效果。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { TabItem } from '@/components/Tags/type.uts'

const tabItems: TabItem[] = [
  { key: '1', label: '选项卡 1' },
  { key: '2', label: '选项卡 2' }
]

const activeKey = ref<string>('1')
</script>

<template>
  <Tags :items="tabItems" type="card" v-model="activeKey">
    <view v-if="activeKey === '1'">卡片内容 1</view>
    <view v-if="activeKey === '2'">卡片内容 2</view>
  </Tags>
</template>
```

## 带徽标和图标

标签页可以显示图标和徽标数字。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { TabItem } from '@/components/Tags/type.uts'

const tabItems: TabItem[] = [
  { key: '1', label: '消息', icon: '💬', badge: 5 },
  { key: '2', label: '通知', icon: '🔔', badge: 99 },
  { key: '3', label: '设置', icon: '⚙️' }
]

const activeKey = ref<string>('1')
</script>

<template>
  <Tags :items="tabItems" v-model="activeKey" />
</template>
```

## 禁用选项卡

可以禁用某些选项卡，禁用的选项卡无法点击。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { TabItem } from '@/components/Tags/type.uts'

const tabItems: TabItem[] = [
  { key: '1', label: '可用选项' },
  { key: '2', label: '禁用选项', disabled: true },
  { key: '3', label: '可用选项' }
]

const activeKey = ref<string>('1')
</script>

<template>
  <Tags :items="tabItems" v-model="activeKey" />
</template>
```

## 居中显示

标签页可以居中显示。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { TabItem } from '@/components/Tags/type.uts'

const tabItems: TabItem[] = [
  { key: '1', label: '选项卡 1' },
  { key: '2', label: '选项卡 2' },
  { key: '3', label: '选项卡 3' }
]

const activeKey = ref<string>('1')
</script>

<template>
  <Tags :items="tabItems" v-model="activeKey" centered />
</template>
```

## 自定义颜色

可以自定义激活和未激活标签的颜色。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { TabItem } from '@/components/Tags/type.uts'

const tabItems: TabItem[] = [
  { key: '1', label: '选项卡 1' },
  { key: '2', label: '选项卡 2' },
  { key: '3', label: '选项卡 3' }
]

const activeKey = ref<string>('1')
</script>

<template>
  <Tags 
    :items="tabItems" 
    v-model="activeKey" 
    active-color="#52c41a" 
    inactive-color="#999999" 
  />
</template>
```

## 不同尺寸

提供三种尺寸：small、medium（默认）、large。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { TabItem } from '@/components/Tags/type.uts'

const tabItems: TabItem[] = [
  { key: '1', label: '选项卡 1' },
  { key: '2', label: '选项卡 2' }
]

const activeKey = ref<string>('1')
</script>

<template>
  <!-- 小号 -->
  <Tags :items="tabItems" v-model="activeKey" size="small" />

  <!-- 中号（默认） -->
  <Tags :items="tabItems" v-model="activeKey" size="medium" />

  <!-- 大号 -->
  <Tags :items="tabItems" v-model="activeKey" size="large" />
</template>
```

## 底部标签页

标签页可以放置在底部，适合底部导航场景。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { TabItem } from '@/components/Tags/type.uts'

const tabItems: TabItem[] = [
  { key: '1', label: '首页', icon: '🏠' },
  { key: '2', label: '消息', icon: '💬' },
  { key: '3', label: '我的', icon: '👤' }
]

const activeKey = ref<string>('1')
</script>

<template>
  <Tags :items="tabItems" v-model="activeKey" tab-position="bottom" />
</template>
```

## API

### TabItem 类型

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| key | 唯一标识（必填） | `string \| number` | - |
| label | 标签标题（必填） | `string` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| badge | 徽标数字 | `number \| string` | - |
| icon | 自定义图标 | `string` | - |

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| items | 选项卡数据 | `TabItem[]` | - | `[]` |
| v-model | 当前激活的 tab key | `string \| number` | - | - |
| defaultActiveKey | 默认激活的 tab key | `string` | - | 第一项的 key |
| type | 选项卡类型 | `string` | `line` / `card` | `line` |
| tabPosition | 选项卡位置 | `string` | `top` / `bottom` | `top` |
| centered | 是否居中显示 | `boolean` | - | `false` |
| scrollable | 是否可滑动 | `boolean` | - | `true` |
| activeColor | 激活标签的颜色 | `string` | - | `#00bba7` |
| inactiveColor | 未激活标签的颜色 | `string` | - | `#666666` |
| size | 标签大小 | `string` | `small` / `medium` / `large` | `medium` |
| animated | 是否显示动画 | `boolean` | - | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 切换标签时触发 | `(key: string \| number) => void` |
| update:activeKey | 当前激活的 tab 改变时触发 | `(key: string \| number) => void` |
| tabClick | 点击标签时触发 | `(key: string \| number, item: TabItem) => void` |

### Slots

| 名称 | 说明 | 参数 |
|------|------|------|
| default | 内容区域 | `{ activeKey: string \| number }` |

## 注意事项

1. 每个 `TabItem` 的 `key` 必须唯一
2. `v-model` 支持双向绑定当前激活的标签
3. 滑动指示器动画仅在 `type="line"` 且 `animated=true` 时生效
4. 使用 `scrollable` 时，标签超出屏幕宽度会自动滚动
5. `tabPosition="bottom"` 可将标签放置在底部，适合底部导航场景
6. 卡片类型的激活标签会自动应用透明背景色和动态阴影效果

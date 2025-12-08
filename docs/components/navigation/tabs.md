# Tabs 标签页

标签页组件，用于在不同内容区域之间进行切换。支持线条式和卡片式两种风格，提供丰富的自定义选项。

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

::: tip v-model 使用说明
Tabs 组件使用 Vue 3.4+ 的 `defineModel` API 实现双向绑定。

**使用方式**：`v-model` 绑定当前激活的标签页 key（类型：`string | number`）

```vue
<script setup lang="uts">
const activeKey = ref<string>('1')
</script>

<template>
  <Tabs v-model="activeKey" :items="tabItems" />
</template>
```
:::

## 基础用法

最简单的标签页用法，通过 `items` 属性传入标签页数据。

```vue
<script setup lang="uts">
import type { TabItem } from '@/components/Tabs/type.uts'

const tabItems: TabItem[] = [
  { key: '1', label: '选项卡 1' },
  { key: '2', label: '选项卡 2' },
  { key: '3', label: '选项卡 3' }
]

const activeKey = ref<string>('1')
</script>

<template>
  <view>
    <Tabs v-model="activeKey" :items="tabItems">
      <view v-if="activeKey === '1'" class="tab-content">
        <text>内容 1</text>
      </view>
      <view v-if="activeKey === '2'" class="tab-content">
        <text>内容 2</text>
      </view>
      <view v-if="activeKey === '3'" class="tab-content">
        <text>内容 3</text>
      </view>
    </Tabs>
  </view>
</template>

<style lang="scss" scoped>
.tab-content {
  padding: 32rpx;
  background-color: #ffffff;
}
</style>
```

## 卡片式标签页

通过 `type="card"` 设置卡片式风格的标签页。

```vue
<script setup lang="uts">
import type { TabItem } from '@/components/Tabs/type.uts'

const tabItems: TabItem[] = [
  { key: '1', label: '选项卡 1' },
  { key: '2', label: '选项卡 2' },
  { key: '3', label: '选项卡 3' }
]

const activeKey = ref<string>('1')
</script>

<template>
  <view>
    <Tabs v-model="activeKey" :items="tabItems" type="card">
      <view v-if="activeKey === '1'" class="tab-content">
        <text>卡片内容 1</text>
      </view>
      <view v-if="activeKey === '2'" class="tab-content">
        <text>卡片内容 2</text>
      </view>
      <view v-if="activeKey === '3'" class="tab-content">
        <text>卡片内容 3</text>
      </view>
    </Tabs>
  </view>
</template>

<style lang="scss" scoped>
.tab-content {
  padding: 32rpx;
  background-color: #ffffff;
  min-height: 400rpx;
}
</style>
```

## 带徽标和图标

标签页可以显示图标和徽标数字。

```vue
<script setup lang="uts">
import type { TabItem } from '@/components/Tabs/type.uts'

const tabItems: TabItem[] = [
  { key: '1', label: '消息', icon: '💬', badge: 5 },
  { key: '2', label: '通知', icon: '🔔', badge: 99 },
  { key: '3', label: '设置', icon: '⚙️' }
]

const activeKey = ref<string>('1')
</script>

<template>
  <view>
    <Tabs v-model="activeKey" :items="tabItems">
      <view v-if="activeKey === '1'" class="tab-content">
        <text>消息内容</text>
      </view>
      <view v-if="activeKey === '2'" class="tab-content">
        <text>通知内容</text>
      </view>
      <view v-if="activeKey === '3'" class="tab-content">
        <text>设置内容</text>
      </view>
    </Tabs>
  </view>
</template>

<style lang="scss" scoped>
.tab-content {
  padding: 32rpx;
}
</style>
```

## 禁用选项卡

通过设置 `disabled` 属性禁用某个标签页。

```vue
<script setup lang="uts">
import type { TabItem } from '@/components/Tabs/type.uts'

const tabItems: TabItem[] = [
  { key: '1', label: '可用选项' },
  { key: '2', label: '禁用选项', disabled: true },
  { key: '3', label: '可用选项' }
]

const activeKey = ref<string>('1')
</script>

<template>
  <view>
    <Tabs v-model="activeKey" :items="tabItems">
      <view v-if="activeKey === '1'" class="tab-content">
        <text>内容 1</text>
      </view>
      <view v-if="activeKey === '3'" class="tab-content">
        <text>内容 3</text>
      </view>
    </Tabs>
  </view>
</template>

<style lang="scss" scoped>
.tab-content {
  padding: 32rpx;
}
</style>
```

## 居中显示

通过 `centered` 属性使标签页居中显示。

```vue
<script setup lang="uts">
import type { TabItem } from '@/components/Tabs/type.uts'

const tabItems: TabItem[] = [
  { key: '1', label: '选项 1' },
  { key: '2', label: '选项 2' },
  { key: '3', label: '选项 3' }
]

const activeKey = ref<string>('1')
</script>

<template>
  <view>
    <Tabs v-model="activeKey" :items="tabItems" :centered="true">
      <view class="tab-content">
        <text>当前激活: {{ activeKey }}</text>
      </view>
    </Tabs>
  </view>
</template>

<style lang="scss" scoped>
.tab-content {
  padding: 32rpx;
  text-align: center;
}
</style>
```

## 自定义颜色

通过 `activeColor` 和 `inactiveColor` 自定义标签页颜色。

```vue
<script setup lang="uts">
import type { TabItem } from '@/components/Tabs/type.uts'

const tabItems: TabItem[] = [
  { key: '1', label: '选项 1' },
  { key: '2', label: '选项 2' },
  { key: '3', label: '选项 3' }
]

const activeKey = ref<string>('1')
</script>

<template>
  <view>
    <Tabs 
      v-model="activeKey" 
      :items="tabItems" 
      active-color="#52c41a" 
      inactive-color="#999999" 
    >
      <view class="tab-content">
        <text>自定义颜色的标签页</text>
      </view>
    </Tabs>
  </view>
</template>

<style lang="scss" scoped>
.tab-content {
  padding: 32rpx;
}
</style>
```

## 不同尺寸

通过 `size` 属性设置标签页的尺寸。

```vue
<script setup lang="uts">
import type { TabItem } from '@/components/Tabs/type.uts'

const tabItems: TabItem[] = [
  { key: '1', label: '选项 1' },
  { key: '2', label: '选项 2' },
  { key: '3', label: '选项 3' }
]

const activeKey1 = ref<string>('1')
const activeKey2 = ref<string>('1')
const activeKey3 = ref<string>('1')
</script>

<template>
  <view>
    <!-- 小号 -->
    <view class="demo-section">
      <text class="demo-title">小号</text>
      <Tabs v-model="activeKey1" :items="tabItems" size="small">
        <view class="tab-content">
          <text>小号标签页内容</text>
        </view>
      </Tabs>
    </view>

    <!-- 中号（默认） -->
    <view class="demo-section">
      <text class="demo-title">中号（默认）</text>
      <Tabs v-model="activeKey2" :items="tabItems" size="medium">
        <view class="tab-content">
          <text>中号标签页内容</text>
        </view>
      </Tabs>
    </view>

    <!-- 大号 -->
    <view class="demo-section">
      <text class="demo-title">大号</text>
      <Tabs v-model="activeKey3" :items="tabItems" size="large">
        <view class="tab-content">
          <text>大号标签页内容</text>
        </view>
      </Tabs>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  margin-bottom: 32rpx;
}

.demo-title {
  display: block;
  padding: 16rpx 32rpx;
  font-size: 28rpx;
  color: #666666;
}

.tab-content {
  padding: 32rpx;
}
</style>
```

## 底部标签页

通过 `tabPosition="bottom"` 将标签页放置在底部，适合底部导航场景。

```vue
<script setup lang="uts">
import type { TabItem } from '@/components/Tabs/type.uts'

const tabItems: TabItem[] = [
  { key: '1', label: '首页', icon: '🏠' },
  { key: '2', label: '消息', icon: '💬', badge: 5 },
  { key: '3', label: '我的', icon: '👤' }
]

const activeKey = ref<string>('1')
</script>

<template>
  <view class="page">
    <Tabs v-model="activeKey" :items="tabItems" tab-position="bottom">
      <view class="page-content">
        <view v-if="activeKey === '1'" class="content-item">
          <text>首页内容</text>
        </view>
        <view v-if="activeKey === '2'" class="content-item">
          <text>消息内容</text>
        </view>
        <view v-if="activeKey === '3'" class="content-item">
          <text>我的内容</text>
        </view>
      </view>
    </Tabs>
  </view>
</template>

<style lang="scss" scoped>
.page {
  height: 100vh;
}

.page-content {
  flex: 1;
  overflow-y: auto;
}

.content-item {
  padding: 32rpx;
  min-height: 600rpx;
}
</style>
```

## 使用插槽自定义内容

使用默认插槽可以访问当前激活的标签页 key。

```vue
<script setup lang="uts">
import type { TabItem } from '@/components/Tabs/type.uts'

const tabItems: TabItem[] = [
  { key: 'tab1', label: '选项 1' },
  { key: 'tab2', label: '选项 2' },
  { key: 'tab3', label: '选项 3' }
]

const activeKey = ref<string>('tab1')
</script>

<template>
  <view>
    <Tabs v-model="activeKey" :items="tabItems">
      <template #default="{ activeKey }">
        <view class="custom-content">
          <text class="current-key">当前激活: {{ activeKey }}</text>
          <view class="content-area">
            <text>这是自定义的内容区域</text>
          </view>
        </view>
      </template>
    </Tabs>
  </view>
</template>

<style lang="scss" scoped>
.custom-content {
  padding: 32rpx;
}

.current-key {
  display: block;
  font-size: 28rpx;
  color: #1890ff;
  margin-bottom: 16rpx;
}

.content-area {
  padding: 32rpx;
  background-color: #f5f5f5;
  border-radius: 8rpx;
}
</style>
```

## 监听切换事件

通过事件监听标签页的切换。

```vue
<script setup lang="uts">
import type { TabItem } from '@/components/Tabs/type.uts'

const tabItems: TabItem[] = [
  { key: '1', label: '选项 1' },
  { key: '2', label: '选项 2' },
  { key: '3', label: '选项 3' }
]

const activeKey = ref<string>('1')

const handleChange = (key: string | number): void => {
  console.log('切换到:', key)
  uni.showToast({ 
    title: `切换到: ${key}`, 
    icon: 'none' 
  })
}

const handleTabClick = (key: string | number, item: TabItem): void => {
  console.log('点击标签:', key, item)
}
</script>

<template>
  <view>
    <Tabs 
      v-model="activeKey" 
      :items="tabItems"
      @change="handleChange"
      @tab-click="handleTabClick"
    >
      <view class="tab-content">
        <text>当前激活: {{ activeKey }}</text>
      </view>
    </Tabs>
  </view>
</template>

<style lang="scss" scoped>
.tab-content {
  padding: 32rpx;
}
</style>
```

## 完整示例

一个包含所有功能的完整示例。

```vue
<script setup lang="uts">
import type { TabItem } from '@/components/Tabs/type.uts'

const tabItems: TabItem[] = [
  { key: 'tab1', label: '首页', icon: '🏠' },
  { key: 'tab2', label: '消息', icon: '💬', badge: 5 },
  { key: 'tab3', label: '禁用', disabled: true },
  { key: 'tab4', label: '设置', icon: '⚙️' }
]

const activeKey = ref<string>('tab1')

const handleChange = (key: string | number): void => {
  console.log('切换到:', key)
}

const handleTabClick = (key: string | number, item: TabItem): void => {
  console.log('点击标签:', key, item)
}
</script>

<template>
  <view class="page">
    <Tabs
      v-model="activeKey"
      :items="tabItems"
      type="line"
      size="medium"
      active-color="#1677ff"
      inactive-color="#666666"
      :centered="false"
      :scrollable="true"
      :animated="true"
      @change="handleChange"
      @tab-click="handleTabClick"
    >
      <view class="tab-content">
        <view v-if="activeKey === 'tab1'" class="content-item">
          <text class="content-title">首页内容</text>
          <text class="content-text">这是首页的内容区域</text>
        </view>
        <view v-if="activeKey === 'tab2'" class="content-item">
          <text class="content-title">消息内容</text>
          <text class="content-text">您有 5 条未读消息</text>
        </view>
        <view v-if="activeKey === 'tab4'" class="content-item">
          <text class="content-title">设置内容</text>
          <text class="content-text">这是设置页面</text>
        </view>
      </view>
    </Tabs>
  </view>
</template>

<style lang="scss" scoped>
.page {
  padding: 32rpx;
  background-color: #f5f5f5;
}

.tab-content {
  background-color: #ffffff;
  min-height: 400rpx;
}

.content-item {
  padding: 32rpx;
}

.content-title {
  display: block;
  font-size: 32rpx;
  font-weight: 600;
  color: #323233;
  margin-bottom: 16rpx;
}

.content-text {
  display: block;
  font-size: 28rpx;
  color: #666666;
  line-height: 1.6;
}
</style>
```

## API

### TabItem 类型

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| key | 唯一标识（必填） | `string \| number` | - |
| label | 标签标题（必填） | `string` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| badge | 徽标数字 | `number \| string` | - |
| icon | 自定义图标 | `string` | - |

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| v-model | 当前激活的标签页 key | `string \| number` | - | - |
| items | 选项卡数据 | `TabItem[]` | - | `[]` |
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
| update:activeKey | 当前激活的 tab 改变时触发（v-model 使用） | `(key: string \| number) => void` |
| tab-click | 点击标签时触发 | `(key: string \| number, item: TabItem) => void` |

### Slots

| 插槽名 | 说明 | 参数 |
|--------|------|------|
| default | 内容区域 | `{ activeKey: string \| number }` |

## 注意事项

1. 每个 `TabItem` 的 `key` 必须唯一，用于标识不同的标签页
2. 使用 `v-model` 实现双向绑定，自动同步当前激活的标签页
3. 滑动指示器动画仅在 `type="line"` 且 `animated=true` 时生效
4. 使用 `scrollable` 时，标签超出屏幕宽度会自动滚动
5. `tabPosition="bottom"` 可将标签放置在底部，适合底部导航场景
6. 卡片式标签页（`type="card"`）会自动应用激活状态的视觉效果（背景色、阴影等）
7. `activeColor` 支持十六进制颜色和 rgba 格式，组件会自动转换为 CSS 变量
8. 禁用的标签页无法点击，且会显示禁用状态的样式
9. 使用插槽时可以通过作用域插槽访问当前激活的 `activeKey`
10. 建议为内容区域设置最小高度，避免切换时布局抖动

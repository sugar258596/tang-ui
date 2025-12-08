# Tabs 标签页组件

类似 Ant Design 的 Tabs 标签页组件，支持多种样式和功能。

## 基本用法

```vue
<script setup>
import Tabs from "@/components/Tabs";
import type { TabItem } from "@/components/Tabs";

const tabItems: TabItem[] = [
  { key: "1", label: "选项卡 1" },
  { key: "2", label: "选项卡 2" },
  { key: "3", label: "选项卡 3" },
];

const activeKey = ref("1");
</script>

<template>
  <Tabs :items="tabItems" v-model="activeKey">
    <view v-if="activeKey === '1'">内容 1</view>
    <view v-if="activeKey === '2'">内容 2</view>
    <view v-if="activeKey === '3'">内容 3</view>
  </Tabs>
</template>
```

## 卡片式标签页

```vue
<template>
  <Tabs :items="tabItems" type="card" v-model="activeKey">
    <view v-if="activeKey === '1'">卡片内容 1</view>
    <view v-if="activeKey === '2'">卡片内容 2</view>
  </Tabs>
</template>
```

## 带徽标和图标

```vue
<script setup>
const tabItems: TabItem[] = [
  { key: "1", label: "消息", icon: "💬", badge: 5 },
  { key: "2", label: "通知", icon: "🔔", badge: 99 },
  { key: "3", label: "设置", icon: "⚙️" },
];
</script>

<template>
  <Tabs :items="tabItems" />
</template>
```

## 禁用选项卡

```vue
<script setup>
const tabItems: TabItem[] = [
  { key: "1", label: "可用选项" },
  { key: "2", label: "禁用选项", disabled: true },
  { key: "3", label: "可用选项" },
];
</script>
```

## 居中显示

```vue
<template>
  <Tabs :items="tabItems" centered />
</template>
```

## 自定义颜色

```vue
<template>
  <Tabs :items="tabItems" active-color="#52c41a" inactive-color="#999999" />
</template>
```

### 颜色变量机制

组件内部使用 CSS 变量统一管理颜色，支持以下变量：

- `--active-color`：激活标签的主颜色（控制文字、边框、滑块颜色）
- `--active-color-rgb`：激活颜色的 RGB 值（用于生成透明背景）

组件会自动将 `activeColor` prop 转换为对应的 CSS 变量，无需手动设置。

**card 类型的增强效果：**

card 类型的激活标签会自动应用：

- 透明背景色：`rgba(var(--active-color-rgb), 0.1)`
- 轻微上移效果：`translateY(-2rpx)`
- 动态阴影：`0 4rpx 12rpx rgba(var(--active-color-rgb), 0.2)`

## 不同尺寸

```vue
<template>
  <!-- 小号 -->
  <Tabs :items="tabItems" size="small" />

  <!-- 中号（默认） -->
  <Tabs :items="tabItems" size="medium" />

  <!-- 大号 -->
  <Tabs :items="tabItems" size="large" />
</template>
```

## 使用插槽自定义内容

```vue
<template>
  <Tabs :items="tabItems" v-model="activeKey">
    <template #default="{ activeKey }">
      <view class="p-4"> 当前激活: {{ activeKey }} </view>
    </template>
  </Tabs>
</template>
```

## API

### TabItem 类型

| 属性     | 说明             | 类型               | 默认值  |
| -------- | ---------------- | ------------------ | ------- |
| key      | 唯一标识（必填） | `string`           | -       |
| label    | 标签标题（必填） | `string`           | -       |
| disabled | 是否禁用         | `boolean`          | `false` |
| badge    | 徽标数字         | `number \| string` | -       |
| icon     | 自定义图标       | `string`           | -       |

### Props

| 属性                          | 说明               | 类型                             | 默认值       |
| ----------------------------- | ------------------ | -------------------------------- | ------------ |
| items                         | 选项卡数据         | `TabItem[]`                      | `[]`         |
| activeKey / v-model:activeKey | 当前激活的 tab key | `string`                         | -            |
| defaultActiveKey              | 默认激活的 tab key | `string`                         | 第一项的 key |
| type                          | 选项卡类型         | `'line' \| 'card'`               | `'line'`     |
| tabPosition                   | 选项卡位置         | `'top' \| 'bottom'`              | `'top'`      |
| centered                      | 是否居中显示       | `boolean`                        | `false`      |
| scrollable                    | 是否可滑动         | `boolean`                        | `true`       |
| activeColor                   | 激活标签的颜色     | `string`                         | `'#1677ff'`  |
| inactiveColor                 | 未激活标签的颜色   | `string`                         | `'#666666'`  |
| size                          | 标签大小           | `'small' \| 'medium' \| 'large'` | `'medium'`   |
| animated                      | 是否显示动画       | `boolean`                        | `true`       |

### Events

| 事件名           | 说明                      | 回调参数                       |
| ---------------- | ------------------------- | ------------------------------ |
| change           | 切换标签时触发            | `(key: string)`                |
| update:activeKey | 当前激活的 tab 改变时触发 | `(key: string)`                |
| tabClick         | 点击标签时触发            | `(key: string, item: TabItem)` |

### Slots

| 插槽名  | 说明     | 参数                    |
| ------- | -------- | ----------------------- |
| default | 内容区域 | `{ activeKey: string }` |

## 完整示例

```vue
<script setup>
import Tabs from "@/components/Tabs";
import type { TabItem } from "@/components/Tabs";

const tabItems: TabItem[] = [
  { key: "tab1", label: "首页", icon: "🏠" },
  { key: "tab2", label: "消息", icon: "💬", badge: 5 },
  { key: "tab3", label: "禁用", disabled: true },
  { key: "tab4", label: "设置", icon: "⚙️" },
];

const activeKey = ref("tab1");

const handleChange = (key: string) => {
  console.log("切换到:", key);
};

const handleTabClick = (key: string, item: TabItem) => {
  console.log("点击标签:", key, item);
};
</script>

<template>
  <view class="page">
    <Tabs
      :items="tabItems"
      v-model="activeKey"
      type="line"
      size="medium"
      active-color="#1677ff"
      @change="handleChange"
      @tab-click="handleTabClick"
    >
      <view class="tab-content">
        <view v-if="activeKey === 'tab1'" class="p-4">
          <text>首页内容</text>
        </view>
        <view v-if="activeKey === 'tab2'" class="p-4">
          <text>消息内容</text>
        </view>
        <view v-if="activeKey === 'tab4'" class="p-4">
          <text>设置内容</text>
        </view>
      </view>
    </Tabs>
  </view>
</template>

<style lang="scss" scoped>
.page {
  padding: 32rpx;
}

.tab-content {
  background-color: #ffffff;
  min-height: 400rpx;
}
</style>
```

## 注意事项

1. 每个 `TabItem` 的 `key` 必须唯一
2. `v-model:activeKey` 支持双向绑定
3. 滑动指示器动画仅在 `type="line"` 且 `animated=true` 时生效
4. 使用 `scrollable` 时，标签超出屏幕宽度会自动滚动
5. `tabPosition="bottom"` 可将标签放置在底部（适合底部导航场景）

```ts
// 选项项

/**

 * TabItem 类型定义

 */

export type TabItem = {
  /** 唯一标识 */

  key: string;

  /** 标签标题 */

  label: string;

  /** 是否禁用 */

  disabled?: boolean;

  /** 徽标数字 */

  badge?: number | string;

  /** 自定义图标 */

  icon?: string;
};

type TabsProps = {
  /** 选项卡数据 */
  items: TabItem[];
  /** 当前激活的 tab key */
  activeKey?: string;
  /** 默认激活的 tab key */
  defaultActiveKey?: string;
  /** 选项卡类型 */
  type?: "line" | "card";
  /** 选项卡位置 */
  tabPosition?: "top" | "bottom";
  /** 是否居中显示 */
  centered?: boolean;
  /** 是否可滑动 */
  scrollable?: boolean;
  /** 激活标签的颜色 */
  activeColor?: string;
  /** 未激活标签的颜色 */
  inactiveColor?: string;
  /** 标签大小 */
  size?: "small" | "medium" | "large";
  /** 是否显示动画 */
  animated?: boolean;
};
```

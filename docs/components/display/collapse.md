# Collapse 折叠面板

可折叠的内容面板，用于展示大量内容时节省空间。

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

::: tip v-model 使用
Collapse 组件使用 `defineModel` 实现双向绑定，支持 `v-model` 绑定当前展开的面板名称。
- 手风琴模式下：`v-model` 绑定字符串类型
- 多选模式下：`v-model` 绑定字符串数组类型
:::

## 基础用法

最简单的折叠面板用法。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const activeNames = ref<string[]>(['1'])
</script>

<template>
  <TCollapse v-model="activeNames">
    <TCollapseItem name="1" title="一致性 Consistency">
      <text>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念。</text>
    </TCollapseItem>
    <TCollapseItem name="2" title="反馈 Feedback">
      <text>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作。</text>
    </TCollapseItem>
    <TCollapseItem name="3" title="效率 Efficiency">
      <text>简化流程：设计简洁直观的操作流程，让用户快速完成任务。</text>
    </TCollapseItem>
  </TCollapse>
</template>
```

## 手风琴模式

设置 `accordion` 属性，每次只能展开一个面板。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const activeName = ref<string>('1')
</script>

<template>
  <TCollapse v-model="activeName" :accordion="true">
    <TCollapseItem name="1" title="一致性 Consistency">
      <text>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念。</text>
    </TCollapseItem>
    <TCollapseItem name="2" title="反馈 Feedback">
      <text>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作。</text>
    </TCollapseItem>
    <TCollapseItem name="3" title="效率 Efficiency">
      <text>简化流程：设计简洁直观的操作流程，让用户快速完成任务。</text>
    </TCollapseItem>
  </TCollapse>
</template>
```

## 禁用状态

可以禁用某个面板，禁用后无法展开或收起。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const activeNames = ref<string[]>(['1'])
</script>

<template>
  <TCollapse v-model="activeNames">
    <TCollapseItem name="1" title="一致性 Consistency">
      <text>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念。</text>
    </TCollapseItem>
    <TCollapseItem name="2" title="反馈 Feedback" :disabled="true">
      <text>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作。</text>
    </TCollapseItem>
    <TCollapseItem name="3" title="效率 Efficiency">
      <text>简化流程：设计简洁直观的操作流程，让用户快速完成任务。</text>
    </TCollapseItem>
  </TCollapse>
</template>
```

## 自定义标题

可以通过 `title` 插槽自定义面板标题。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const activeNames = ref<string[]>(['1'])
</script>

<template>
  <TCollapse v-model="activeNames">
    <TCollapseItem name="1">
      <template #title>
        <view class="custom-title">
          <text class="title-icon">📋</text>
          <text class="title-text">自定义标题 1</text>
        </view>
      </template>
      <text>这是自定义标题的内容区域。</text>
    </TCollapseItem>
    <TCollapseItem name="2">
      <template #title>
        <view class="custom-title">
          <text class="title-icon">🎨</text>
          <text class="title-text">自定义标题 2</text>
        </view>
      </template>
      <text>这是自定义标题的内容区域。</text>
    </TCollapseItem>
  </TCollapse>
</template>

<style lang="scss" scoped>
.custom-title {
  display: flex;
  align-items: center;
  gap: 8px;
}

.title-icon {
  font-size: 18px;
}

.title-text {
  font-size: 15px;
  font-weight: 500;
  color: #303133;
}
</style>
```

## 无边框

设置 `border` 为 `false` 可以隐藏边框。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const activeNames = ref<string[]>(['1'])
</script>

<template>
  <TCollapse v-model="activeNames" :border="false">
    <TCollapseItem name="1" title="一致性 Consistency">
      <text>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念。</text>
    </TCollapseItem>
    <TCollapseItem name="2" title="反馈 Feedback">
      <text>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作。</text>
    </TCollapseItem>
  </TCollapse>
</template>
```

## 完整示例

综合使用各种功能的示例。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const activeNames = ref<string[]>(['1'])

const handleChange = (value: string[]): void => {
  console.log('当前展开的面板:', value)
}
</script>

<template>
  <view class="demo-container">
    <view class="demo-section">
      <text class="section-title">多选模式</text>
      <TCollapse v-model="activeNames" @update:modelValue="handleChange">
        <TCollapseItem name="1" title="设计原则">
          <view class="content">
            <text>一致性、反馈、效率、可控</text>
          </view>
        </TCollapseItem>
        <TCollapseItem name="2" title="导航">
          <view class="content">
            <text>侧栏导航、顶部导航</text>
          </view>
        </TCollapseItem>
        <TCollapseItem name="3" title="组件" :disabled="true">
          <view class="content">
            <text>基础组件、表单组件、数据展示</text>
          </view>
        </TCollapseItem>
      </TCollapse>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.demo-container {
  padding: 16px;
}

.demo-section {
  margin-bottom: 24px;
}

.section-title {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
  display: block;
}

.content {
  padding: 8px 0;
}
</style>
```

## API

### TCollapse Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| v-model | 当前展开的面板名称 | `string \| string[]` | - | `[]` |
| accordion | 是否开启手风琴模式 | `boolean` | - | `false` |
| border | 是否显示边框 | `boolean` | - | `true` |

### TCollapseItem Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| name | 唯一标识符（必填） | `string` | - | - |
| title | 标题 | `string` | - | `''` |
| disabled | 是否禁用 | `boolean` | - | `false` |
| icon | 自定义图标 | `string` | - | `''` |

### TCollapseItem Slots

| 名称 | 说明 |
|------|------|
| default | 面板内容 |
| title | 自定义标题 |

## 注意事项

1. 每个 `TCollapseItem` 的 `name` 必须唯一
2. 手风琴模式下，`v-model` 绑定字符串类型；多选模式下绑定字符串数组类型
3. 禁用的面板无法展开或收起，但不影响其他面板的操作
4. 面板展开/收起时带有平滑的动画效果
5. 可以通过 `title` 插槽完全自定义标题内容
6. 组件使用 `provide/inject` 实现父子组件通信
7. 箭头图标会在展开时旋转 90 度

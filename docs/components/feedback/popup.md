# Popup 弹出层

弹出层容器组件，支持从上、下、左、右、中间五个方向弹出，可用于实现各种弹出式交互。

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

::: tip v-model 使用说明
TPopup 组件使用 Vue 3.4+ 的 `defineModel` API 实现双向绑定。

**使用方式：** `v-model` 控制弹出层的显示/隐藏状态

**类型：** `boolean`
:::

## 基础用法

最简单的弹出层用法，默认从底部弹出。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const visible = ref<boolean>(false)

const showPopup = (): void => {
  visible.value = true
}
</script>

<template>
  <view>
    <TButton text="显示弹出层" @click="showPopup" />
    
    <TPopup v-model="visible" title="标题">
      <view class="content">
        <text>这是弹出层的内容</text>
      </view>
    </TPopup>
  </view>
</template>

<style lang="scss" scoped>
.content {
  padding: 20px;
  min-height: 200px;
}
</style>
```

## 弹出位置

支持从五个方向弹出：bottom、top、left、right、center。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const bottomVisible = ref<boolean>(false)
const topVisible = ref<boolean>(false)
const leftVisible = ref<boolean>(false)
const rightVisible = ref<boolean>(false)
const centerVisible = ref<boolean>(false)
</script>

<template>
  <view class="demo-column">
    <TButton text="底部弹出" @click="bottomVisible = true" />
    <TPopup v-model="bottomVisible" position="bottom" title="底部弹出">
      <view class="content">
        <text>从底部弹出的内容</text>
      </view>
    </TPopup>
    
    <TButton text="顶部弹出" @click="topVisible = true" />
    <TPopup v-model="topVisible" position="top" title="顶部弹出">
      <view class="content">
        <text>从顶部弹出的内容</text>
      </view>
    </TPopup>
    
    <TButton text="左侧弹出" @click="leftVisible = true" />
    <TPopup v-model="leftVisible" position="left" title="左侧弹出" width="70%">
      <view class="content">
        <text>从左侧弹出的内容</text>
      </view>
    </TPopup>
    
    <TButton text="右侧弹出" @click="rightVisible = true" />
    <TPopup v-model="rightVisible" position="right" title="右侧弹出" width="70%">
      <view class="content">
        <text>从右侧弹出的内容</text>
      </view>
    </TPopup>
    
    <TButton text="居中弹出" @click="centerVisible = true" />
    <TPopup v-model="centerVisible" position="center" title="居中弹出" width="80%" height="400rpx">
      <view class="content">
        <text>居中弹出的内容</text>
      </view>
    </TPopup>
  </view>
</template>

<style lang="scss" scoped>
.demo-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.content {
  padding: 20px;
  min-height: 200px;
}
</style>
```

## 自定义尺寸

可以自定义弹出层的宽度和高度。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const visible1 = ref<boolean>(false)
const visible2 = ref<boolean>(false)
const visible3 = ref<boolean>(false)
</script>

<template>
  <view class="demo-column">
    <TButton text="30% 高度" @click="visible1 = true" />
    <TPopup v-model="visible1" height="30%" title="30% 高度">
      <view class="content">
        <text>高度为 30% 的弹出层</text>
      </view>
    </TPopup>
    
    <TButton text="50% 高度" @click="visible2 = true" />
    <TPopup v-model="visible2" height="50%" title="50% 高度">
      <view class="content">
        <text>高度为 50% 的弹出层</text>
      </view>
    </TPopup>
    
    <TButton text="固定高度 (600rpx)" @click="visible3 = true" />
    <TPopup v-model="visible3" :height="600" title="固定高度">
      <view class="content">
        <text>高度为 600rpx 的弹出层</text>
      </view>
    </TPopup>
  </view>
</template>

<style lang="scss" scoped>
.demo-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.content {
  padding: 20px;
}
</style>
```

## 隐藏标题栏

可以隐藏标题栏，只显示内容区域。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const visible = ref<boolean>(false)
</script>

<template>
  <view>
    <TButton text="显示弹出层" @click="visible = true" />
    
    <TPopup v-model="visible" :show-title="false">
      <view class="content">
        <text class="title">自定义标题</text>
        <text class="desc">这是一个没有标题栏的弹出层</text>
      </view>
    </TPopup>
  </view>
</template>

<style lang="scss" scoped>
.content {
  padding: 32px;
  
  .title {
    font-size: 18px;
    font-weight: 600;
    color: #303133;
    margin-bottom: 16px;
    display: block;
  }
  
  .desc {
    font-size: 14px;
    color: #606266;
    display: block;
  }
}
</style>
```

## 自定义标题

可以使用 `title` 插槽自定义标题内容。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const visible = ref<boolean>(false)
</script>

<template>
  <view>
    <TButton text="显示弹出层" @click="visible = true" />
    
    <TPopup v-model="visible">
      <template #title>
        <view class="custom-title">
          <text class="icon">📋</text>
          <text class="text">自定义标题</text>
        </view>
      </template>
      
      <view class="content">
        <text>这是一个带有自定义标题的弹出层</text>
      </view>
    </TPopup>
  </view>
</template>

<style lang="scss" scoped>
.custom-title {
  display: flex;
  align-items: center;
  gap: 8px;
  
  .icon {
    font-size: 20px;
  }
  
  .text {
    font-size: 16px;
    font-weight: 600;
    color: #303133;
  }
}

.content {
  padding: 20px;
  min-height: 200px;
}
</style>
```

## 圆角设置

可以控制是否显示圆角以及圆角大小。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const visible1 = ref<boolean>(false)
const visible2 = ref<boolean>(false)
const visible3 = ref<boolean>(false)
</script>

<template>
  <view class="demo-column">
    <TButton text="默认圆角" @click="visible1 = true" />
    <TPopup v-model="visible1" title="默认圆角">
      <view class="content">
        <text>默认圆角大小为 32rpx</text>
      </view>
    </TPopup>
    
    <TButton text="大圆角" @click="visible2 = true" />
    <TPopup v-model="visible2" title="大圆角" :border-radius="48">
      <view class="content">
        <text>圆角大小为 48rpx</text>
      </view>
    </TPopup>
    
    <TButton text="无圆角" @click="visible3 = true" />
    <TPopup v-model="visible3" title="无圆角" :round="false">
      <view class="content">
        <text>没有圆角的弹出层</text>
      </view>
    </TPopup>
  </view>
</template>

<style lang="scss" scoped>
.demo-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.content {
  padding: 20px;
  min-height: 200px;
}
</style>
```

## 禁止点击遮罩关闭

可以禁止点击遮罩层关闭弹出层。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const visible = ref<boolean>(false)
</script>

<template>
  <view>
    <TButton text="显示弹出层" @click="visible = true" />
    
    <TPopup 
      v-model="visible" 
      title="重要内容"
      :close-on-click-overlay="false"
    >
      <view class="content">
        <text>点击遮罩层无法关闭此弹出层</text>
        <TButton text="关闭" @click="visible = false" />
      </view>
    </TPopup>
  </view>
</template>

<style lang="scss" scoped>
.content {
  padding: 20px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
```

## 隐藏关闭按钮

可以隐藏标题栏的关闭按钮。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const visible = ref<boolean>(false)
</script>

<template>
  <view>
    <TButton text="显示弹出层" @click="visible = true" />
    
    <TPopup 
      v-model="visible" 
      title="提示"
      :show-close="false"
    >
      <view class="content">
        <text>这个弹出层没有关闭按钮</text>
        <TButton text="确定" type="primary" @click="visible = false" />
      </view>
    </TPopup>
  </view>
</template>

<style lang="scss" scoped>
.content {
  padding: 20px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
```

## 自定义背景色

可以自定义弹出层的背景色。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const visible = ref<boolean>(false)
</script>

<template>
  <view>
    <TButton text="显示弹出层" @click="visible = true" />
    
    <TPopup 
      v-model="visible" 
      title="自定义背景"
      background="#f5f7fa"
    >
      <view class="content">
        <text>这是一个自定义背景色的弹出层</text>
      </view>
    </TPopup>
  </view>
</template>

<style lang="scss" scoped>
.content {
  padding: 20px;
  min-height: 200px;
}
</style>
```

## 事件处理

弹出层提供了打开和关闭事件。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import { showToast } from '@/composables/useToast.uts'

const visible = ref<boolean>(false)

const handleOpen = (): void => {
  showToast('弹出层已打开')
}

const handleClose = (): void => {
  showToast('弹出层已关闭')
}
</script>

<template>
  <view>
    <TButton text="显示弹出层" @click="visible = true" />
    
    <TPopup 
      v-model="visible" 
      title="事件处理"
      @open="handleOpen"
      @close="handleClose"
    >
      <view class="content">
        <text>打开和关闭时会触发事件</text>
      </view>
    </TPopup>
  </view>
</template>

<style lang="scss" scoped>
.content {
  padding: 20px;
  min-height: 200px;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| v-model | 是否显示弹出层 | `boolean` | - | `false` |
| height | 弹窗高度，支持百分比或具体数值（rpx） | `string \| number` | - | `50%` |
| width | 弹窗宽度，支持百分比或具体数值（rpx） | `string \| number` | - | `100%` |
| position | 弹出位置 | `string` | `bottom` / `top` / `left` / `right` / `center` | `bottom` |
| showTitle | 是否显示标题栏 | `boolean` | - | `true` |
| title | 标题文本 | `string` | - | `''` |
| showClose | 是否显示关闭按钮 | `boolean` | - | `true` |
| round | 是否显示圆角 | `boolean` | - | `true` |
| borderRadius | 圆角大小 | `string \| number` | - | `32` |
| closeOnClickOverlay | 点击遮罩层是否关闭 | `boolean` | - | `true` |
| zIndex | 弹窗层级 | `number` | - | `999` |
| background | 背景色 | `string` | - | `#ffffff` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| open | 弹出层打开时触发 | `() => void` |
| close | 弹出层关闭时触发 | `() => void` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 弹出层内容 |
| title | 自定义标题内容 |

## 注意事项

1. 弹出层使用 `v-model` 控制显示状态，基于 `defineModel` API 实现
2. 不同位置的弹出层会有不同的动画效果
3. `height` 和 `width` 支持百分比（如 `50%`）或具体数值（如 `600`，单位为 rpx）
4. 当 `position` 为 `left` 或 `right` 时，`width` 属性生效
5. 当 `position` 为 `top` 或 `bottom` 时，`height` 属性生效
6. 当 `position` 为 `center` 时，`width` 和 `height` 都生效
7. 圆角只在对应的边显示（如底部弹出只有顶部圆角）
8. 弹出层打开时会阻止页面滚动，关闭后恢复
9. 建议根据内容长度合理设置弹出层尺寸
10. 可以基于 TPopup 组件封装更多业务组件，如选择器、菜单等

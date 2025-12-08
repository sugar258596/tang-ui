# ActionSheet 动作面板

底部弹出的动作菜单，用于显示一组操作选项供用户选择。基于 TPopup 组件实现。

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

::: tip v-model 使用说明
TActionSheet 组件使用 Vue 3.4+ 的 `defineModel` API 实现双向绑定。

**使用方式：** `v-model` 控制动作面板的显示/隐藏状态

**类型：** `boolean`
:::

## 基础用法

最简单的动作面板用法，显示一组操作选项。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { ActionSheetAction } from '@/components/TActionSheet/type.uts'

const visible = ref<boolean>(false)

const actions = ref<ActionSheetAction[]>([
  { name: '选项一' },
  { name: '选项二' },
  { name: '选项三' }
])

const handleSelect = (action: ActionSheetAction, index: number): void => {
  console.log('选择了：', action.name, '索引：', index)
}
</script>

<template>
  <view>
    <TButton text="显示动作面板" @click="visible = true" />
    
    <TActionSheet 
      v-model="visible"
      :actions="actions"
      @select="handleSelect"
    />
  </view>
</template>
```

## 带标题和描述

可以添加标题和描述文字。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { ActionSheetAction } from '@/components/TActionSheet/type.uts'

const visible = ref<boolean>(false)

const actions = ref<ActionSheetAction[]>([
  { name: '拍照' },
  { name: '从相册选择' },
  { name: '从文件选择' }
])
</script>

<template>
  <view>
    <TButton text="选择图片" @click="visible = true" />
    
    <TActionSheet 
      v-model="visible"
      title="选择图片来源"
      description="请选择图片的来源方式"
      :actions="actions"
    />
  </view>
</template>
```

## 自定义颜色

可以为每个选项设置不同的颜色。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { ActionSheetAction } from '@/components/TActionSheet/type.uts'

const visible = ref<boolean>(false)

const actions = ref<ActionSheetAction[]>([
  { name: '编辑', color: '#409eff' },
  { name: '分享', color: '#67c23a' },
  { name: '收藏', color: '#e6a23c' },
  { name: '删除', color: '#f56c6c' }
])
</script>

<template>
  <view>
    <TButton text="显示动作面板" @click="visible = true" />
    
    <TActionSheet 
      v-model="visible"
      title="操作"
      :actions="actions"
    />
  </view>
</template>
```

## 禁用选项

可以禁用某些选项，禁用的选项无法点击。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { ActionSheetAction } from '@/components/TActionSheet/type.uts'

const visible = ref<boolean>(false)

const actions = ref<ActionSheetAction[]>([
  { name: '选项一' },
  { name: '选项二（禁用）', disabled: true },
  { name: '选项三' },
  { name: '选项四（禁用）', disabled: true }
])
</script>

<template>
  <view>
    <TButton text="显示动作面板" @click="visible = true" />
    
    <TActionSheet 
      v-model="visible"
      title="选择操作"
      :actions="actions"
    />
  </view>
</template>
```

## 加载状态

可以为选项设置加载状态。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { ActionSheetAction } from '@/components/TActionSheet/type.uts'

const visible = ref<boolean>(false)

const actions = ref<ActionSheetAction[]>([
  { name: '选项一' },
  { name: '选项二（加载中）', loading: true },
  { name: '选项三' }
])
</script>

<template>
  <view>
    <TButton text="显示动作面板" @click="visible = true" />
    
    <TActionSheet 
      v-model="visible"
      title="选择操作"
      :actions="actions"
    />
  </view>
</template>
```

## 自定义取消按钮

可以自定义取消按钮的文字。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { ActionSheetAction } from '@/components/TActionSheet/type.uts'

const visible = ref<boolean>(false)

const actions = ref<ActionSheetAction[]>([
  { name: '选项一' },
  { name: '选项二' },
  { name: '选项三' }
])
</script>

<template>
  <view>
    <TButton text="显示动作面板" @click="visible = true" />
    
    <TActionSheet 
      v-model="visible"
      title="选择操作"
      :actions="actions"
      cancel-text="关闭"
    />
  </view>
</template>
```

## 禁止点击遮罩关闭

可以禁止点击遮罩层关闭动作面板。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { ActionSheetAction } from '@/components/TActionSheet/type.uts'

const visible = ref<boolean>(false)

const actions = ref<ActionSheetAction[]>([
  { name: '选项一' },
  { name: '选项二' },
  { name: '选项三' }
])
</script>

<template>
  <view>
    <TButton text="显示动作面板" @click="visible = true" />
    
    <TActionSheet 
      v-model="visible"
      title="请选择"
      :actions="actions"
      :close-on-click-overlay="false"
    />
  </view>
</template>
```

## 点击选项不关闭

可以设置点击选项后不自动关闭面板。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { ActionSheetAction } from '@/components/TActionSheet/type.uts'
import { showToast } from '@/composables/useToast.uts'

const visible = ref<boolean>(false)

const actions = ref<ActionSheetAction[]>([
  { name: '选项一' },
  { name: '选项二' },
  { name: '选项三' }
])

const handleSelect = (action: ActionSheetAction, index: number): void => {
  showToast(`选择了：${action.name}`)
}
</script>

<template>
  <view>
    <TButton text="显示动作面板" @click="visible = true" />
    
    <TActionSheet 
      v-model="visible"
      title="选择操作"
      :actions="actions"
      :close-on-click-action="false"
      @select="handleSelect"
    />
  </view>
</template>
```

## 事件处理

动作面板提供了多个事件回调。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { ActionSheetAction } from '@/components/TActionSheet/type.uts'
import { showToast } from '@/composables/useToast.uts'

const visible = ref<boolean>(false)

const actions = ref<ActionSheetAction[]>([
  { name: '编辑' },
  { name: '分享' },
  { name: '删除', color: '#f56c6c' }
])

const handleSelect = (action: ActionSheetAction, index: number): void => {
  showToast(`选择了：${action.name}`)
}

const handleCancel = (): void => {
  showToast('点击了取消')
}

const handleClose = (): void => {
  console.log('动作面板已关闭')
}
</script>

<template>
  <view>
    <TButton text="显示动作面板" @click="visible = true" />
    
    <TActionSheet 
      v-model="visible"
      title="选择操作"
      :actions="actions"
      @select="handleSelect"
      @cancel="handleCancel"
      @close="handleClose"
    />
  </view>
</template>
```

## 实际应用场景

### 图片操作

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { ActionSheetAction } from '@/components/TActionSheet/type.uts'
import { showToast } from '@/composables/useToast.uts'

const visible = ref<boolean>(false)

const actions = ref<ActionSheetAction[]>([
  { name: '查看大图' },
  { name: '保存到相册' },
  { name: '转发给好友' },
  { name: '收藏' },
  { name: '删除', color: '#f56c6c' }
])

const handleSelect = (action: ActionSheetAction, index: number): void => {
  showToast(`执行：${action.name}`)
}
</script>

<template>
  <view>
    <view class="image-box" @click="visible = true">
      <text>点击图片显示操作菜单</text>
    </view>
    
    <TActionSheet 
      v-model="visible"
      title="图片操作"
      :actions="actions"
      @select="handleSelect"
    />
  </view>
</template>

<style lang="scss" scoped>
.image-box {
  width: 200px;
  height: 200px;
  background-color: #f5f7fa;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
}
</style>
```

### 文件操作

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { ActionSheetAction } from '@/components/TActionSheet/type.uts'
import { showToast } from '@/composables/useToast.uts'

const visible = ref<boolean>(false)

const actions = ref<ActionSheetAction[]>([
  { name: '下载', color: '#409eff' },
  { name: '重命名' },
  { name: '移动' },
  { name: '复制' },
  { name: '分享' },
  { name: '删除', color: '#f56c6c' }
])

const handleSelect = (action: ActionSheetAction, index: number): void => {
  showToast(`执行：${action.name}`)
}
</script>

<template>
  <view>
    <TButton text="文件操作" @click="visible = true" />
    
    <TActionSheet 
      v-model="visible"
      title="文件操作"
      description="document.pdf"
      :actions="actions"
      @select="handleSelect"
    />
  </view>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| v-model | 是否显示动作面板 | `boolean` | - | `false` |
| actions | 操作选项列表 | `ActionSheetAction[]` | - | `[]` |
| title | 标题 | `string` | - | `''` |
| description | 描述文字 | `string` | - | `''` |
| cancelText | 取消按钮文字 | `string` | - | `取消` |
| closeOnClickAction | 点击选项后是否关闭 | `boolean` | - | `true` |
| closeOnClickOverlay | 点击遮罩层是否关闭 | `boolean` | - | `true` |
| customClass | 自定义类名 | `string` | - | `''` |
| customStyle | 自定义样式 | `string` | - | `''` |

### ActionSheetAction 类型

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| name | 选项名称 | `string` | - | - |
| color | 选项颜色 | `string` | - | - |
| disabled | 是否禁用 | `boolean` | - | `false` |
| loading | 是否显示加载状态 | `boolean` | - | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| select | 点击选项时触发 | `(action: ActionSheetAction, index: number) => void` |
| cancel | 点击取消按钮时触发 | `() => void` |
| close | 动作面板关闭时触发 | `() => void` |

## 注意事项

1. 动作面板使用 `v-model` 控制显示状态，基于 `defineModel` API 实现
2. 动作面板基于 TPopup 组件实现，从底部弹出
3. 点击选项后默认会自动关闭面板，可通过 `closeOnClickAction` 控制
4. 禁用或加载中的选项无法点击
5. 建议选项数量不要过多，避免滚动区域过长
6. 取消按钮始终显示在底部，与选项列表有明显分隔
7. 可以通过 `color` 属性为危险操作设置红色，提醒用户注意
8. 适用于需要用户从多个操作中选择一个的场景
9. 标题和描述可以帮助用户理解当前操作的上下文
10. 建议为每个选项提供清晰明确的名称，避免歧义

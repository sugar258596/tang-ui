# Dialog 对话框

模态对话框组件，用于显示重要信息、确认操作或收集用户输入。支持自定义标题、内容、按钮等。

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

::: tip v-model 使用说明
TDialog 组件使用 Vue 3.4+ 的 `defineModel` API 实现双向绑定。

**使用方式：** `v-model` 控制对话框的显示/隐藏状态

**类型：** `boolean`
:::

## 基础用法

最简单的对话框用法，通过 `v-model` 控制显示状态。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const visible = ref<boolean>(false)

const showDialog = (): void => {
  visible.value = true
}
</script>

<template>
  <view>
    <TButton text="显示对话框" @click="showDialog" />
    
    <TDialog 
      v-model="visible"
      title="提示"
      content="这是一个简单的对话框"
    />
  </view>
</template>
```

## 自定义内容

可以使用默认插槽自定义对话框内容。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const visible = ref<boolean>(false)
</script>

<template>
  <view>
    <TButton text="显示对话框" @click="visible = true" />
    
    <TDialog v-model="visible" title="用户信息">
      <view class="custom-content">
        <text class="label">姓名：</text>
        <text class="value">张三</text>
      </view>
      <view class="custom-content">
        <text class="label">年龄：</text>
        <text class="value">25</text>
      </view>
      <view class="custom-content">
        <text class="label">职业：</text>
        <text class="value">前端工程师</text>
      </view>
    </TDialog>
  </view>
</template>

<style lang="scss" scoped>
.custom-content {
  display: flex;
  margin-bottom: 12px;
  
  .label {
    font-weight: 600;
    color: #303133;
    margin-right: 8px;
  }
  
  .value {
    color: #606266;
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
    <TButton text="显示对话框" @click="visible = true" />
    
    <TDialog v-model="visible">
      <template #title>
        <view class="custom-title">
          <text class="icon">⚠️</text>
          <text class="text">重要提示</text>
        </view>
      </template>
      
      <text>这是一个带有自定义标题的对话框</text>
    </TDialog>
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
    font-size: 18px;
    font-weight: 600;
    color: #e6a23c;
  }
}
</style>
```

## 自定义按钮

可以使用 `footer` 插槽自定义底部按钮。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const visible = ref<boolean>(false)

const handleCustomAction = (): void => {
  console.log('自定义操作')
  visible.value = false
}
</script>

<template>
  <view>
    <TButton text="显示对话框" @click="visible = true" />
    
    <TDialog v-model="visible" title="自定义按钮">
      <template #footer>
        <view class="custom-footer">
          <TButton text="取消" size="small" @click="visible = false" />
          <TButton text="保存草稿" type="info" size="small" @click="handleCustomAction" />
          <TButton text="发布" type="primary" size="small" @click="handleCustomAction" />
        </view>
      </template>
      
      <text>这是一个带有自定义按钮的对话框</text>
    </TDialog>
  </view>
</template>

<style lang="scss" scoped>
.custom-footer {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}
</style>
```

## 不同按钮类型

可以设置确认按钮的类型。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const visible1 = ref<boolean>(false)
const visible2 = ref<boolean>(false)
const visible3 = ref<boolean>(false)
const visible4 = ref<boolean>(false)
</script>

<template>
  <view class="demo-column">
    <TButton text="Primary 按钮" type="primary" @click="visible1 = true" />
    <TDialog 
      v-model="visible1"
      title="提示"
      content="这是 Primary 类型的确认按钮"
      confirm-type="primary"
    />
    
    <TButton text="Success 按钮" type="success" @click="visible2 = true" />
    <TDialog 
      v-model="visible2"
      title="成功"
      content="这是 Success 类型的确认按钮"
      confirm-type="success"
    />
    
    <TButton text="Warning 按钮" type="warning" @click="visible3 = true" />
    <TDialog 
      v-model="visible3"
      title="警告"
      content="这是 Warning 类型的确认按钮"
      confirm-type="warning"
    />
    
    <TButton text="Danger 按钮" type="danger" @click="visible4 = true" />
    <TDialog 
      v-model="visible4"
      title="危险操作"
      content="这是 Danger 类型的确认按钮"
      confirm-type="danger"
    />
  </view>
</template>

<style lang="scss" scoped>
.demo-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
```

## 隐藏取消按钮

可以隐藏取消按钮，只显示确认按钮。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const visible = ref<boolean>(false)
</script>

<template>
  <view>
    <TButton text="显示对话框" @click="visible = true" />
    
    <TDialog 
      v-model="visible"
      title="通知"
      content="这是一个只有确认按钮的对话框"
      :show-cancel="false"
    />
  </view>
</template>
```

## 隐藏关闭按钮

可以隐藏右上角的关闭按钮。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const visible = ref<boolean>(false)
</script>

<template>
  <view>
    <TButton text="显示对话框" @click="visible = true" />
    
    <TDialog 
      v-model="visible"
      title="提示"
      content="这个对话框没有关闭按钮"
      :show-close="false"
    />
  </view>
</template>
```

## 禁止点击遮罩关闭

可以禁止点击遮罩层关闭对话框。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const visible = ref<boolean>(false)
</script>

<template>
  <view>
    <TButton text="显示对话框" @click="visible = true" />
    
    <TDialog 
      v-model="visible"
      title="重要提示"
      content="点击遮罩层无法关闭此对话框"
      :mask-closable="false"
    />
  </view>
</template>
```

## 自定义宽度

可以自定义对话框的宽度。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const visible1 = ref<boolean>(false)
const visible2 = ref<boolean>(false)
const visible3 = ref<boolean>(false)
</script>

<template>
  <view class="demo-column">
    <TButton text="小宽度 (60%)" @click="visible1 = true" />
    <TDialog 
      v-model="visible1"
      title="小宽度"
      content="这是一个宽度为 60% 的对话框"
      width="60%"
    />
    
    <TButton text="默认宽度 (80%)" @click="visible2 = true" />
    <TDialog 
      v-model="visible2"
      title="默认宽度"
      content="这是一个宽度为 80% 的对话框"
    />
    
    <TButton text="固定宽度 (600rpx)" @click="visible3 = true" />
    <TDialog 
      v-model="visible3"
      title="固定宽度"
      content="这是一个宽度为 600rpx 的对话框"
      width="600rpx"
    />
  </view>
</template>

<style lang="scss" scoped>
.demo-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
```

## 事件处理

对话框提供了多个事件回调。

```vue
<script setup lang="uts">
import { ref } from 'vue'
import { showToast } from '@/composables/useToast.uts'

const visible = ref<boolean>(false)

const handleConfirm = (): void => {
  showToast('点击了确认按钮')
}

const handleCancel = (): void => {
  showToast('点击了取消按钮')
}

const handleClose = (): void => {
  console.log('对话框已关闭')
}
</script>

<template>
  <view>
    <TButton text="显示对话框" @click="visible = true" />
    
    <TDialog 
      v-model="visible"
      title="事件处理"
      content="点击按钮查看事件回调"
      @confirm="handleConfirm"
      @cancel="handleCancel"
      @close="handleClose"
    />
  </view>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| v-model | 是否显示对话框 | `boolean` | - | `false` |
| title | 对话框标题 | `string` | - | `''` |
| content | 对话框内容 | `string` | - | `''` |
| width | 对话框宽度 | `string` | - | `80%` |
| mask | 是否显示遮罩层 | `boolean` | - | `true` |
| maskClosable | 是否点击遮罩关闭 | `boolean` | - | `true` |
| showClose | 是否显示关闭按钮 | `boolean` | - | `true` |
| showCancel | 是否显示取消按钮 | `boolean` | - | `true` |
| confirmText | 确认按钮文字 | `string` | - | `确定` |
| cancelText | 取消按钮文字 | `string` | - | `取消` |
| confirmType | 确认按钮类型 | `string` | `primary` / `success` / `warning` / `danger` | `primary` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| confirm | 点击确认按钮时触发 | `() => void` |
| cancel | 点击取消按钮时触发 | `() => void` |
| close | 对话框关闭时触发 | `() => void` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 对话框内容 |
| title | 对话框标题 |
| footer | 对话框底部按钮区域 |

## 注意事项

1. 对话框使用 `v-model` 控制显示状态，基于 `defineModel` API 实现
2. 点击确认或取消按钮后，对话框会自动关闭
3. 点击遮罩层或关闭按钮会触发 `close` 事件
4. 使用插槽自定义内容时，需要自行处理样式
5. 对话框默认居中显示，使用固定定位
6. 建议在重要操作前使用对话框进行二次确认
7. 对话框内容不宜过长，避免影响用户体验
8. 可以通过 `maskClosable` 控制是否允许点击遮罩关闭，重要操作建议设为 `false`

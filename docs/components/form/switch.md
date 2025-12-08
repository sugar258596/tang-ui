# Switch 开关

开关组件，用于两种状态之间的切换。

::: tip v-model 支持
TSwitch 组件使用 Vue 3.4+ 的 `defineModel` API 实现双向绑定。

**类型定义**：`defineModel<boolean>({ default: false })`

**使用方式**：`<TSwitch v-model="value" />`
:::

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

最简单的开关用法。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<boolean>(false)
</script>

<template>
  <TSwitch v-model="value" />
</template>
```

## 开关尺寸

提供三种尺寸：small、medium、large。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<boolean>(true)
</script>

<template>
  <view class="demo-section">
    <TSwitch v-model="value" size="small" />
    <TSwitch v-model="value" size="medium" />
    <TSwitch v-model="value" size="large" />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16rpx;
}
</style>
```

## 禁用状态

通过 `disabled` 属性禁用开关。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value1 = ref<boolean>(false)
const value2 = ref<boolean>(true)
</script>

<template>
  <view class="demo-section">
    <TSwitch v-model="value1" disabled />
    <TSwitch v-model="value2" disabled />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16rpx;
}
</style>
```

## 自定义颜色

通过 `active-color` 和 `inactive-color` 属性自定义开关颜色。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<boolean>(true)
</script>

<template>
  <view class="demo-section">
    <TSwitch 
      v-model="value" 
      active-color="#13ce66" 
      inactive-color="#ff4949" 
    />
    <TSwitch 
      v-model="value" 
      active-color="#409eff" 
      inactive-color="#dcdfe6" 
    />
    <TSwitch 
      v-model="value" 
      active-color="#f56c6c" 
      inactive-color="#909399" 
    />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16rpx;
}
</style>
```

## 文字描述

通过 `active-text` 和 `inactive-text` 属性添加文字描述。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<boolean>(true)
</script>

<template>
  <view class="demo-section">
    <TSwitch 
      v-model="value" 
      show-text
      active-text="开启" 
      inactive-text="关闭" 
    />
    <TSwitch 
      v-model="value" 
      show-text
      active-text="ON" 
      inactive-text="OFF" 
    />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
}
</style>
```

## 事件处理

开关状态改变时触发 change 事件。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<boolean>(false)

const handleChange = (val: boolean): void => {
  console.log('开关状态:', val ? '开启' : '关闭')
  uni.showToast({
    title: val ? '已开启' : '已关闭',
    icon: 'none'
  })
}
</script>

<template>
  <TSwitch v-model="value" @change="handleChange" />
</template>
```

## 表单场景

在表单中使用开关。

```vue
<script setup lang="uts">
import { ref } from 'vue'

interface FormData {
  notifications: boolean
  autoSave: boolean
  darkMode: boolean
}

const formData = ref<FormData>({
  notifications: true,
  autoSave: false,
  darkMode: false
})

const handleSubmit = (): void => {
  console.log('表单数据:', formData.value)
}
</script>

<template>
  <view class="form-container">
    <view class="form-item">
      <text class="form-label">消息通知</text>
      <TSwitch v-model="formData.notifications" />
    </view>
    
    <view class="form-item">
      <text class="form-label">自动保存</text>
      <TSwitch v-model="formData.autoSave" />
    </view>
    
    <view class="form-item">
      <text class="form-label">深色模式</text>
      <TSwitch v-model="formData.darkMode" />
    </view>
    
    <TButton type="primary" @click="handleSubmit">提交</TButton>
  </view>
</template>

<style lang="scss" scoped>
.form-container {
  padding: 32rpx;
}

.form-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24rpx 0;
  border-bottom: 1px solid #f0f0f0;
}

.form-label {
  font-size: 28rpx;
  color: #303133;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| v-model | 绑定值（使用 defineModel） | boolean | - | false |
| disabled | 是否禁用 | boolean | - | false |
| size | 开关大小 | string | small / medium / large | medium |
| active-color | 打开时的背景色 | string | - | #409eff |
| inactive-color | 关闭时的背景色 | string | - | #dcdfe6 |
| active-text | 打开时的文字描述 | string | - | '' |
| inactive-text | 关闭时的文字描述 | string | - | '' |
| show-text | 是否显示文字描述 | boolean | - | false |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 开关状态改变时触发 | (value: boolean) => void |

## 注意事项

1. **v-model 类型**：TSwitch 的 v-model 只接受 `boolean` 类型的值。

2. **文字描述**：需要同时设置 `show-text` 为 `true` 和 `active-text`/`inactive-text` 属性，文字才会显示。

3. **颜色自定义**：`active-color` 和 `inactive-color` 接受任何有效的 CSS 颜色值（十六进制、RGB、颜色名称等）。

4. **禁用状态**：禁用状态下，开关会显示半透明效果，且无法点击切换。

5. **尺寸选择**：
   - `small`：适用于紧凑的界面布局
   - `medium`：默认尺寸，适用于大多数场景
   - `large`：适用于需要突出显示的场景

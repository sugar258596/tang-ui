# 快速开始

本指南将帮助您快速上手 UniApp X UI 组件库，通过简单的示例了解组件的基本使用方法。

## 前提条件

在开始之前，请确保您已经：

- ✅ 安装了 HBuilderX 3.9.0 或更高版本
- ✅ 创建了 UniApp X 项目
- ✅ 按照[安装指南](/guide/installation)完成了组件库的安装

## 第一个组件

让我们从最简单的按钮组件开始。

### 1. 创建页面

在 `pages/demo/index.uvue` 创建一个新页面：

```vue
<script setup lang="uts">
import TButton from '@/components/TButton/index.uvue'

const handleClick = (): void => {
  console.log('按钮被点击了！')
}
</script>

<template>
  <view class="page">
    <TButton text="点击我" type="primary" @click="handleClick" />
  </view>
</template>

<style lang="scss" scoped>
.page {
  padding: 32rpx;
}
</style>
```

### 2. 运行项目

在 HBuilderX 中运行项目，您应该能看到一个蓝色的按钮。点击按钮，控制台会输出日志。

恭喜！您已经成功使用了第一个组件。

## 组件引入方式

UniApp X UI 支持多种组件引入方式。

### 方式一：按需导入（推荐）

组件需要手动导入后才能使用。推荐按需导入，只引入需要的组件：

```vue
<script setup lang="uts">
import { ref } from 'vue'
import TButton from '@/components/TButton/index.uvue'
import TInput from '@/components/TInput/index.uvue'
import TSwitch from '@/components/TSwitch/index.uvue'

const value = ref<string>('')
const checked = ref<boolean>(false)
</script>

<template>
  <view>
    <TButton text="按钮" />
    <TInput v-model="value" />
    <TSwitch v-model="checked" />
  </view>
</template>
```

::: tip 按需导入
UniApp X 需要手动导入组件，这样可以减少打包体积，只包含实际使用的组件。组件名称遵循 PascalCase 命名规范。
:::

### 方式二：导入组件和类型

如果需要使用组件的类型定义，可以同时导入组件和类型：

```vue
<script setup lang="uts">
import TButton from '@/components/TButton/index.uvue'
import type { TButtonProps } from '@/components/TButton/type.uts'

const buttonProps: TButtonProps = {
  text: '按钮',
  type: 'primary',
  size: 'medium'
}
</script>

<template>
  <TButton v-bind="buttonProps" />
</template>
```

## 基础示例

### 表单输入

创建一个简单的表单：

```vue
<script setup lang="uts">
import { ref } from 'vue'
import TText from '@/components/TText/index.uvue'
import TInput from '@/components/TInput/index.uvue'
import TCheckbox from '@/components/TCheckbox/index.uvue'
import TButton from '@/components/TButton/index.uvue'

const username = ref<string>('')
const password = ref<string>('')
const remember = ref<boolean>(false)

const handleSubmit = (): void => {
  console.log('用户名:', username.value)
  console.log('密码:', password.value)
  console.log('记住我:', remember.value)
}
</script>

<template>
  <view class="form">
    <view class="form-item">
      <TText text="用户名" />
      <TInput v-model="username" placeholder="请输入用户名" />
    </view>
    
    <view class="form-item">
      <TText text="密码" />
      <TInput v-model="password" type="password" placeholder="请输入密码" />
    </view>
    
    <view class="form-item">
      <TCheckbox v-model="remember" label="记住我" />
    </view>
    
    <TButton text="登录" type="primary" @click="handleSubmit" />
  </view>
</template>

<style lang="scss" scoped>
.form {
  padding: 32rpx;
  
  .form-item {
    margin-bottom: 24rpx;
  }
}
</style>
```

### 列表展示

使用卡片和列表组件展示数据：

```vue
<script setup lang="uts">
import { ref } from 'vue'
import TCard from '@/components/TCard/index.uvue'
import TText from '@/components/TText/index.uvue'

interface Item {
  id: number
  title: string
  description: string
}

const items = ref<Item[]>([
  { id: 1, title: '标题 1', description: '这是描述内容' },
  { id: 2, title: '标题 2', description: '这是描述内容' },
  { id: 3, title: '标题 3', description: '这是描述内容' }
])
</script>

<template>
  <view class="list">
    <TCard v-for="item in items" :key="item.id">
      <view class="card-content">
        <TText :text="item.title" size="large" weight="bold" />
        <TText :text="item.description" color="secondary" />
      </view>
    </TCard>
  </view>
</template>

<style lang="scss" scoped>
.list {
  padding: 32rpx;
  
  .card-content {
    display: flex;
    flex-direction: column;
    gap: 16rpx;
  }
}
</style>
```

### 交互反馈

使用对话框和提示组件：

```vue
<script setup lang="uts">
import { ref } from 'vue'
import TButton from '@/components/TButton/index.uvue'
import TDialog from '@/components/TDialog/index.uvue'
import { useToast } from '@/composables/useToast'

const dialogVisible = ref<boolean>(false)
const toast = useToast()

const showDialog = (): void => {
  dialogVisible.value = true
}

const handleConfirm = (): void => {
  dialogVisible.value = false
  toast.success('操作成功！')
}

const handleCancel = (): void => {
  dialogVisible.value = false
  toast.info('已取消')
}
</script>

<template>
  <view class="demo">
    <TButton text="显示对话框" @click="showDialog" />
    
    <TDialog
      v-model="dialogVisible"
      title="提示"
      content="确定要执行此操作吗？"
      @confirm="handleConfirm"
      @cancel="handleCancel"
    />
  </view>
</template>

<style lang="scss" scoped>
.demo {
  padding: 32rpx;
}
</style>
```

## 使用 v-model

21 个组件支持 `v-model` 双向绑定，使用 Vue 3.4+ 的 `defineModel` API 实现。

### 单个 v-model

大多数表单组件支持单个 `v-model`：

```vue
<script setup lang="uts">
import { ref } from 'vue'
import TInput from '@/components/TInput/index.uvue'
import TSwitch from '@/components/TSwitch/index.uvue'
import TSlider from '@/components/TSlider/index.uvue'

const inputValue = ref<string>('')
const switchValue = ref<boolean>(false)
const sliderValue = ref<number>(50)
</script>

<template>
  <view>
    <!-- 输入框 -->
    <TInput v-model="inputValue" />
    
    <!-- 开关 -->
    <TSwitch v-model="switchValue" />
    
    <!-- 滑块 -->
    <TSlider v-model="sliderValue" />
  </view>
</template>
```

### 多个 v-model

某些组件支持多个 `v-model`，如 `TPicker`：

```vue
<script setup lang="uts">
import { ref } from 'vue'
import TButton from '@/components/TButton/index.uvue'
import TPicker from '@/components/TPicker/index.uvue'

const pickerVisible = ref<boolean>(false)
const pickerValue = ref<any>(null)

const showPicker = (): void => {
  pickerVisible.value = true
}
</script>

<template>
  <view>
    <TButton text="选择" @click="showPicker" />
    
    <!-- TPicker 使用双 v-model -->
    <TPicker
      v-model="pickerVisible"
      v-model:selectedValue="pickerValue"
      :columns="[['选项1', '选项2', '选项3']]"
    />
  </view>
</template>
```

## 组件配置

### 使用 Props

通过 Props 配置组件的外观和行为：

```vue
<script setup lang="uts">
import TButton from '@/components/TButton/index.uvue'
</script>

<template>
  <view>
    <!-- 按钮类型 -->
    <TButton text="主要按钮" type="primary" />
    <TButton text="成功按钮" type="success" />
    <TButton text="警告按钮" type="warning" />
    <TButton text="危险按钮" type="danger" />
    
    <!-- 按钮尺寸 -->
    <TButton text="大按钮" size="large" />
    <TButton text="中按钮" size="medium" />
    <TButton text="小按钮" size="small" />
    <TButton text="迷你按钮" size="mini" />
    
    <!-- 按钮状态 -->
    <TButton text="禁用按钮" :disabled="true" />
    <TButton text="加载中" :loading="true" />
  </view>
</template>
```

### 使用 Slots

通过插槽自定义组件内容：

```vue
<script setup lang="uts">
import TCard from '@/components/TCard/index.uvue'
import TText from '@/components/TText/index.uvue'
import TButton from '@/components/TButton/index.uvue'
import TListItem from '@/components/TListItem/index.uvue'
import TIcon from '@/components/TIcon/index.uvue'
import TBadge from '@/components/TBadge/index.uvue'
</script>

<template>
  <view>
    <!-- 卡片插槽 -->
    <TCard>
      <template #header>
        <TText text="卡片标题" weight="bold" />
      </template>
      
      <view>卡片内容</view>
      
      <template #footer>
        <TButton text="操作" size="small" />
      </template>
    </TCard>
    
    <!-- 列表项插槽 -->
    <TListItem>
      <template #prefix>
        <TIcon name="user" />
      </template>
      
      <TText text="列表项" />
      
      <template #suffix>
        <TBadge :value="5" />
      </template>
    </TListItem>
  </view>
</template>
```

### 监听事件

通过事件处理用户交互：

```vue
<script setup lang="uts">
import TButton from '@/components/TButton/index.uvue'
import TInput from '@/components/TInput/index.uvue'

const handleClick = (): void => {
  console.log('点击事件')
}

const handleChange = (value: string): void => {
  console.log('值改变:', value)
}

const handleFocus = (): void => {
  console.log('获得焦点')
}

const handleBlur = (): void => {
  console.log('失去焦点')
}
</script>

<template>
  <view>
    <TButton text="按钮" @click="handleClick" />
    <TInput @change="handleChange" @focus="handleFocus" @blur="handleBlur" />
  </view>
</template>
```

## 最佳实践

### 1. 使用 TypeScript 类型

为变量添加类型注解，提高代码质量：

```vue
<script setup lang="uts">
import { ref } from 'vue'
import type { ButtonType, ButtonSize } from '@/components/TButton/type.uts'

const buttonType = ref<ButtonType>('primary')
const buttonSize = ref<ButtonSize>('medium')
const buttonText = ref<string>('按钮')
</script>
```

### 2. 合理使用响应式数据

只对需要响应式的数据使用 `ref` 或 `reactive`：

```vue
<script setup lang="uts">
import { ref, computed } from 'vue'

// 响应式数据
const count = ref<number>(0)

// 计算属性
const doubleCount = computed<number>(() => count.value * 2)

// 普通常量（不需要响应式）
const MAX_COUNT: number = 100
</script>
```

### 3. 组件解耦

将复杂的逻辑提取到 composables 中：

```vue
<script setup lang="uts">
import { useForm } from '@/composables/useForm'

const { formData, validate, submit } = useForm({
  username: '',
  password: ''
})

const handleSubmit = async (): Promise<void> => {
  if (validate()) {
    await submit()
  }
}
</script>
```

### 4. 统一的代码风格

遵循 UniApp X 的代码结构规范：

```vue
<!-- 1. script 标签在最前面 -->
<script setup lang="uts">
// 导入
import { ref } from 'vue'

// 响应式数据
const value = ref<string>('')

// 方法
const handleClick = (): void => {
  console.log('clicked')
}
</script>

<!-- 2. template 标签在中间 -->
<template>
  <view class="container">
    <TButton text="按钮" @click="handleClick" />
  </view>
</template>

<!-- 3. style 标签在最后 -->
<style lang="scss" scoped>
.container {
  padding: 32rpx;
}
</style>
```

### 5. 性能优化

- 使用 `v-show` 而不是 `v-if` 来切换频繁显示/隐藏的元素
- 为列表项添加唯一的 `key` 属性
- 避免在模板中使用复杂的表达式，使用计算属性代替

```vue
<script setup lang="uts">
import { ref, computed } from 'vue'

const items = ref<any[]>([...])

// 使用计算属性而不是在模板中过滤
const filteredItems = computed(() => {
  return items.value.filter(item => item.active)
})
</script>

<template>
  <view>
    <!-- 使用 key -->
    <TCard v-for="item in filteredItems" :key="item.id">
      {{ item.title }}
    </TCard>
  </view>
</template>
```

## 平台兼容性

UniApp X UI 支持多个平台，但某些功能可能存在平台差异。

### 支持的平台

- ✅ **H5** - 完全支持
- ✅ **微信小程序** - 完全支持
- ✅ **支付宝小程序** - 完全支持
- ✅ **App（iOS）** - 完全支持
- ✅ **App（Android）** - 完全支持

### 平台特定功能

某些组件可能在不同平台上有不同的表现：

```vue
<script setup lang="uts">
// 获取当前平台
// #ifdef H5
console.log('运行在 H5 平台')
// #endif

// #ifdef MP-WEIXIN
console.log('运行在微信小程序')
// #endif

// #ifdef APP-PLUS
console.log('运行在 App')
// #endif
</script>
```

### 兼容性建议

1. **测试多平台** - 在所有目标平台上测试您的应用
2. **使用条件编译** - 为不同平台提供特定的实现
3. **查看组件文档** - 了解组件的平台兼容性说明
4. **避免平台特定 API** - 尽量使用跨平台的 API

## 常见问题

### 组件样式不生效

确保已在 `App.uvue` 中引入全局样式：

```vue
<style lang="scss">
@import '@/style/index.scss';
</style>
```

### v-model 不工作

检查组件是否支持 `v-model`，以及绑定的数据类型是否正确：

```vue
<script setup lang="uts">
import { ref } from 'vue'

// 确保类型正确
const value = ref<string>('')  // ✅ 正确
// const value = ref('')        // ❌ 缺少类型注解
</script>
```

### 类型错误

确保导入了正确的类型定义：

```vue
<script setup lang="uts">
import type { TButtonProps } from '@/components/TButton/type.uts'
</script>
```

## 下一步

- [组件列表](/components/) - 浏览所有可用组件
- [设计规范](/guide/design) - 了解设计原则和规范
- [API 文档](/components/) - 查看详细的组件 API

## 获取帮助

如果您在使用过程中遇到问题：

- 查看具体组件的文档
- 在 GitHub 上搜索或提交 Issue
- 加入社区讨论群

祝您使用愉快！🎉

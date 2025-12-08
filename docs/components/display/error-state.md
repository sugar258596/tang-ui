# ErrorState 错误状态

用于展示错误状态或异常情况的组件，提供友好的错误提示和重试功能。

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

最简单的错误状态用法。

```vue
<script setup lang="uts">
</script>

<template>
  <TErrorState :is-error="true" />
</template>
```

## 非错误状态

可以显示非错误的异常状态，如数据不存在等。

```vue
<script setup lang="uts">
</script>

<template>
  <TErrorState :is-error="false" />
</template>
```

## 自定义文案

可以自定义错误和非错误状态的标题和描述。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-block">
    <!-- 错误状态 -->
    <TErrorState 
      :is-error="true"
      error-title="网络连接失败"
      error-desc="请检查您的网络设置后重试"
    />

    <!-- 非错误状态 -->
    <TErrorState 
      :is-error="false"
      normal-title="页面不存在"
      normal-desc="您访问的页面已被删除或不存在"
    />
  </view>
</template>

<style lang="scss" scoped>
.demo-block {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
```

## 隐藏重试按钮

可以隐藏重试按钮。

```vue
<script setup lang="uts">
</script>

<template>
  <TErrorState 
    :is-error="true"
    :show-retry="false"
  />
</template>
```

## 自定义重试按钮文字

可以自定义重试按钮的文字。

```vue
<script setup lang="uts">
</script>

<template>
  <TErrorState 
    :is-error="true"
    retry-text="点击重试"
  />
</template>
```

## 重试事件

可以监听重试按钮的点击事件。

```vue
<script setup lang="uts">
const handleRetry = (): void => {
  console.log('重新加载数据')
  // 执行重试逻辑
}
</script>

<template>
  <TErrorState 
    :is-error="true"
    @retry="handleRetry"
  />
</template>
```

## 不同场景

展示不同场景下的错误状态。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-block">
    <!-- 网络错误 -->
    <TErrorState 
      :is-error="true"
      error-title="网络连接失败"
      error-desc="请检查您的网络设置"
    />

    <!-- 服务器错误 -->
    <TErrorState 
      :is-error="true"
      error-title="服务器错误"
      error-desc="服务器开小差了，请稍后再试"
    />

    <!-- 权限错误 -->
    <TErrorState 
      :is-error="false"
      normal-title="暂无权限"
      normal-desc="您没有访问此内容的权限"
      :show-retry="false"
    />

    <!-- 页面不存在 -->
    <TErrorState 
      :is-error="false"
      normal-title="页面不存在"
      normal-desc="您访问的页面已被删除"
      :show-retry="false"
    />
  </view>
</template>

<style lang="scss" scoped>
.demo-block {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
```

## 完整示例

综合使用各种功能的示例。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const loading = ref<boolean>(false)
const hasError = ref<boolean>(true)
const data = ref<any>(null)

const loadData = (): void => {
  loading.value = true
  hasError.value = false
  
  // 模拟加载数据
  setTimeout(() => {
    loading.value = false
    // 模拟加载失败
    const success = Math.random() > 0.5
    if (success) {
      data.value = { message: '数据加载成功！' }
    } else {
      hasError.value = true
    }
  }, 2000)
}

const handleRetry = (): void => {
  loadData()
}
</script>

<template>
  <view class="demo-container">
    <TLoading v-if="loading" />
    
    <view v-else-if="data && !hasError" class="data-content">
      <text>{{ data.message }}</text>
    </view>
    
    <TErrorState 
      v-else
      :is-error="true"
      error-title="加载失败"
      error-desc="数据加载失败，请重试"
      retry-text="重新加载"
      @retry="handleRetry"
    />
  </view>
</template>

<style lang="scss" scoped>
.demo-container {
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.data-content {
  padding: 20px;
  text-align: center;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| isError | 是否为错误状态 | `boolean` | - | `false` |
| errorTitle | 错误状态的标题 | `string` | - | `加载失败` |
| normalTitle | 非错误状态的标题 | `string` | - | `数据不存在` |
| errorDesc | 错误状态的描述 | `string` | - | `请检查网络后重试` |
| normalDesc | 非错误状态的描述 | `string` | - | `请返回上一页重新操作` |
| showRetry | 是否显示重试按钮 | `boolean` | - | `true` |
| retryText | 重试按钮文字 | `string` | - | `重新加载` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| retry | 点击重试按钮时触发 | `() => void` |

## 注意事项

1. `isError` 为 `true` 时显示错误状态，为 `false` 时显示非错误状态
2. 重试按钮仅在 `isError` 为 `true` 且 `showRetry` 为 `true` 时显示
3. 错误状态和非错误状态使用不同的标题和描述文案
4. 组件默认使用表情符号 😕 作为图标
5. 重试按钮使用青色（teal）主题色
6. 组件适合用于页面级别的错误展示
7. 可以配合 Loading 组件实现完整的加载-错误-成功流程

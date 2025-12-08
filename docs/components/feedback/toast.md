# Toast 轻提示

轻量级的消息提示组件，用于向用户显示操作反馈、系统消息等短暂提示信息。Toast 通过 `useToast` composable 调用，无需在模板中声明组件。

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

通过 `useToast` composable 调用 Toast 提示。

```vue
<script setup lang="uts">
import { useToast } from '@/composables/useToast.uts'

const toast = useToast()

const showToast = (): void => {
  toast.show('这是一条提示消息')
}
</script>

<template>
  <TButton text="显示提示" @click="showToast" />
</template>
```

## 不同类型

提供多种预设的提示类型：success、error、warning、info。

```vue
<script setup lang="uts">
import { useToast } from '@/composables/useToast.uts'

const toast = useToast()

const showSuccess = (): void => {
  toast.success('操作成功')
}

const showError = (): void => {
  toast.error('操作失败')
}

const showWarning = (): void => {
  toast.warning('警告信息')
}

const showInfo = (): void => {
  toast.info('提示信息')
}
</script>

<template>
  <view class="demo-column">
    <TButton text="成功提示" type="success" @click="showSuccess" />
    <TButton text="错误提示" type="danger" @click="showError" />
    <TButton text="警告提示" type="warning" @click="showWarning" />
    <TButton text="信息提示" type="info" @click="showInfo" />
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

## 自定义时长

可以自定义 Toast 的显示时长（单位：毫秒）。

```vue
<script setup lang="uts">
import { useToast } from '@/composables/useToast.uts'

const toast = useToast()

const showShortToast = (): void => {
  toast.show({
    message: '短时间提示（1秒）',
    duration: 1000
  })
}

const showLongToast = (): void => {
  toast.show({
    message: '长时间提示（5秒）',
    duration: 5000
  })
}
</script>

<template>
  <view class="demo-column">
    <TButton text="短时间提示" @click="showShortToast" />
    <TButton text="长时间提示" @click="showLongToast" />
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

## 加载提示

显示加载状态的提示，需要手动关闭。

```vue
<script setup lang="uts">
import { useToast } from '@/composables/useToast.uts'

const toast = useToast()

const showLoading = (): void => {
  const hide = toast.loading('加载中...')
  
  // 模拟异步操作
  setTimeout(() => {
    hide()
    toast.success('加载完成')
  }, 3000)
}
</script>

<template>
  <TButton text="显示加载" @click="showLoading" />
</template>
```

## 快捷方法

除了使用 `useToast` composable，还可以使用快捷方法。

```vue
<script setup lang="uts">
import { 
  showToast, 
  showSuccess, 
  showError, 
  showWarning, 
  showInfo,
  showLoadingToast,
  hideToast
} from '@/composables/useToast.uts'

const handleSuccess = (): void => {
  showSuccess('操作成功')
}

const handleError = (): void => {
  showError('操作失败')
}

const handleWarning = (): void => {
  showWarning('警告信息')
}

const handleInfo = (): void => {
  showInfo('提示信息')
}

const handleLoading = (): void => {
  const hide = showLoadingToast('处理中...')
  
  setTimeout(() => {
    hide()
    showSuccess('处理完成')
  }, 2000)
}
</script>

<template>
  <view class="demo-column">
    <TButton text="成功提示" type="success" @click="handleSuccess" />
    <TButton text="错误提示" type="danger" @click="handleError" />
    <TButton text="警告提示" type="warning" @click="handleWarning" />
    <TButton text="信息提示" type="info" @click="handleInfo" />
    <TButton text="加载提示" @click="handleLoading" />
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

## 队列管理

Toast 支持队列管理，多个提示会依次显示。

```vue
<script setup lang="uts">
import { useToast } from '@/composables/useToast.uts'

const toast = useToast()

const showMultiple = (): void => {
  toast.info('第一条消息')
  toast.success('第二条消息')
  toast.warning('第三条消息')
}

const clearQueue = (): void => {
  toast.clear()
}
</script>

<template>
  <view class="demo-column">
    <TButton text="显示多条消息" @click="showMultiple" />
    <TButton text="清空队列" type="danger" @click="clearQueue" />
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

## 配置默认选项

可以设置全局默认配置。

```vue
<script setup lang="uts">
import { useToast } from '@/composables/useToast.uts'

const toast = useToast()

// 设置默认配置
toast.setDefaults({
  duration: 3000,
  position: 'center',
  mask: true
})

const showToast = (): void => {
  toast.show('使用默认配置的提示')
}
</script>

<template>
  <TButton text="显示提示" @click="showToast" />
</template>
```

## API

### useToast 方法

#### show(options)

显示 Toast 提示。

**参数：**
- `options`: `string | ToastOptions` - 提示内容或配置对象

**ToastOptions 类型：**

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| message | 提示内容 | `string` | - | - |
| duration | 显示时长（毫秒） | `number` | - | `2000` |
| position | 显示位置 | `string` | `top` / `center` / `bottom` | `center` |
| type | 提示类型 | `string` | `default` / `success` / `danger` / `warning` / `info` | `default` |
| mask | 是否显示遮罩层 | `boolean` | - | `false` |

#### success(message, duration?)

显示成功提示。

**参数：**
- `message`: `string` - 提示内容
- `duration`: `number` - 显示时长（可选）

#### error(message, duration?)

显示错误提示。

**参数：**
- `message`: `string` - 提示内容
- `duration`: `number` - 显示时长（可选）

#### warning(message, duration?)

显示警告提示。

**参数：**
- `message`: `string` - 提示内容
- `duration`: `number` - 显示时长（可选）

#### info(message, duration?)

显示信息提示。

**参数：**
- `message`: `string` - 提示内容
- `duration`: `number` - 显示时长（可选）

#### loading(message?)

显示加载提示。

**参数：**
- `message`: `string` - 提示内容（可选，默认为 "加载中..."）

**返回值：**
- `Function` - 关闭函数，调用后关闭加载提示

#### hide()

隐藏当前显示的 Toast。

#### clear()

清空 Toast 队列并隐藏当前 Toast。

#### setDefaults(options)

设置默认配置。

**参数：**
- `options`: `Partial<ToastOptions>` - 配置对象

#### getQueueLength()

获取当前队列长度。

**返回值：**
- `number` - 队列中待显示的 Toast 数量

### 快捷方法

| 方法 | 说明 | 参数 |
|------|------|------|
| showToast | 显示 Toast | `(options: string \| ToastOptions) => void` |
| showSuccess | 显示成功提示 | `(message: string, duration?: number) => void` |
| showError | 显示错误提示 | `(message: string, duration?: number) => void` |
| showWarning | 显示警告提示 | `(message: string, duration?: number) => void` |
| showInfo | 显示信息提示 | `(message: string, duration?: number) => void` |
| showLoadingToast | 显示加载提示 | `(message?: string) => () => void` |
| hideToast | 隐藏 Toast | `() => void` |
| clearToast | 清空队列 | `() => void` |

## 注意事项

1. Toast 基于 UniApp 的 `uni.showToast` API 实现，部分平台可能有限制
2. 同一时间只能显示一个 Toast，多个 Toast 会进入队列依次显示
3. 加载提示需要手动调用返回的关闭函数来关闭
4. `position` 参数在某些平台可能不生效，具体取决于 UniApp 的支持情况
5. 建议提示内容简短明了，避免过长的文字
6. 默认显示时长为 2 秒，可根据内容长度适当调整
7. 使用 `mask` 可以防止用户在 Toast 显示期间进行其他操作
8. Toast 是单例模式，多次调用 `useToast()` 返回同一个实例

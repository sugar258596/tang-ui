# NoticeBar 通知栏

用于循环播放展示一组消息通知，常用于系统通知、活动通知等场景。

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

最简单的通知栏用法。

```vue
<script setup lang="uts">
</script>

<template>
  <TNoticeBar text="这是一条通知消息" />
</template>
```

## 可关闭

设置 `mode` 为 `closeable` 可以显示关闭按钮。

```vue
<script setup lang="uts">
const handleClose = (): void => {
  console.log('通知栏已关闭')
}
</script>

<template>
  <TNoticeBar 
    text="这是一条可关闭的通知消息" 
    mode="closeable"
    @close="handleClose"
  />
</template>
```

## 链接模式

设置 `mode` 为 `link` 可以显示右侧箭头，表示可点击跳转。

```vue
<script setup lang="uts">
const handleClick = (): void => {
  console.log('通知栏被点击')
}
</script>

<template>
  <TNoticeBar 
    text="点击查看详情" 
    mode="link"
    @click="handleClick"
  />
</template>
```

## 滚动播放

当文字内容较长时，可以开启滚动播放。

```vue
<script setup lang="uts">
</script>

<template>
  <TNoticeBar 
    text="这是一条很长很长很长很长很长很长很长很长的通知消息，需要滚动播放" 
    :scrollable="true"
  />
</template>
```

## 自定义颜色

可以自定义通知栏的文字颜色和背景色。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-block">
    <TNoticeBar 
      text="默认样式的通知消息" 
    />
    
    <TNoticeBar 
      text="成功提示消息" 
      color="#52c41a"
      background="#f6ffed"
    />
    
    <TNoticeBar 
      text="警告提示消息" 
      color="#faad14"
      background="#fffbe6"
    />
    
    <TNoticeBar 
      text="错误提示消息" 
      color="#f5222d"
      background="#fff1f0"
    />
    
    <TNoticeBar 
      text="信息提示消息" 
      color="#1890ff"
      background="#e6f7ff"
    />
  </view>
</template>

<style lang="scss" scoped>
.demo-block {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
```

## 自定义图标

可以自定义左侧图标。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-block">
    <TNoticeBar text="默认图标" />
    <TNoticeBar text="自定义图标" left-icon="🔔" />
    <TNoticeBar text="自定义图标" left-icon="⚠️" />
    <TNoticeBar text="无图标" left-icon="" />
  </view>
</template>

<style lang="scss" scoped>
.demo-block {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
```

## 完整示例

综合使用各种功能的示例。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const visible1 = ref<boolean>(true)
const visible2 = ref<boolean>(true)

const handleClick = (): void => {
  console.log('通知栏被点击')
  uni.showToast({
    title: '查看详情',
    icon: 'none'
  })
}

const handleClose1 = (): void => {
  visible1.value = false
  console.log('通知栏1已关闭')
}

const handleClose2 = (): void => {
  visible2.value = false
  console.log('通知栏2已关闭')
}
</script>

<template>
  <view class="demo-container">
    <TNoticeBar 
      v-if="visible1"
      text="这是一条重要通知，请及时查看" 
      mode="closeable"
      @close="handleClose1"
    />
    
    <TNoticeBar 
      text="点击查看活动详情" 
      mode="link"
      color="#1890ff"
      background="#e6f7ff"
      left-icon="🎉"
      @click="handleClick"
    />
    
    <TNoticeBar 
      v-if="visible2"
      text="这是一条很长很长很长很长很长很长的滚动通知消息" 
      mode="closeable"
      :scrollable="true"
      @close="handleClose2"
    />
  </view>
</template>

<style lang="scss" scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| text | 通知文本内容 | `string` | - | `''` |
| mode | 通知栏模式 | `string` | `closeable` / `link` | - |
| color | 文字颜色 | `string` | - | `#ed6a0c` |
| background | 背景颜色 | `string` | - | `#fffbe8` |
| leftIcon | 左侧图标 | `string` | - | `📢` |
| scrollable | 是否开启滚动播放 | `boolean` | - | `false` |
| customClass | 自定义类名 | `string` | - | `''` |
| customStyle | 自定义样式 | `string` | - | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击通知栏时触发 | `() => void` |
| close | 点击关闭按钮时触发 | `() => void` |

## 注意事项

1. `mode` 为 `closeable` 时显示关闭按钮，点击后通知栏会隐藏
2. `mode` 为 `link` 时显示右侧箭头，表示可点击查看详情
3. `scrollable` 开启后，文字会自动滚动播放，适合长文本场景
4. 滚动动画时长为 10 秒，可通过自定义样式调整
5. 关闭通知栏后，组件会从 DOM 中移除，需要通过外部状态控制重新显示
6. `leftIcon` 支持 emoji 或文字，设置为空字符串可隐藏图标
7. 点击关闭按钮时会阻止事件冒泡，不会触发 `click` 事件

# Card 卡片

通用卡片容器组件，用于展示内容块。卡片可以包含标题、副标题、内容和底部操作区域。

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

最简单的卡片用法，只需要在卡片中放置内容即可。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const content = ref<string>('这是卡片内容')
</script>

<template>
  <TCard>
    <text>{{ content }}</text>
  </TCard>
</template>
```

## 带标题的卡片

通过 `title` 和 `subtitle` 属性设置卡片的标题和副标题。

```vue
<script setup lang="uts">
</script>

<template>
  <TCard 
    title="卡片标题" 
    subtitle="这是副标题"
  >
    <text>卡片内容区域</text>
  </TCard>
</template>
```

## 自定义头部

使用 `header` 插槽可以自定义卡片头部内容。

```vue
<script setup lang="uts">
</script>

<template>
  <TCard>
    <template #header>
      <view class="custom-header">
        <text class="title">自定义标题</text>
        <text class="subtitle">自定义副标题</text>
      </view>
    </template>
    <text>卡片内容</text>
  </TCard>
</template>

<style lang="scss" scoped>
.custom-header {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 18px;
  font-weight: bold;
  color: #303133;
}

.subtitle {
  font-size: 14px;
  color: #909399;
  margin-top: 4px;
}
</style>
```

## 阴影和边框

通过 `shadow` 和 `border` 属性控制卡片的阴影和边框显示。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-container">
    <!-- 带阴影的卡片（默认） -->
    <TCard title="带阴影" :shadow="true">
      <text>这是带阴影的卡片</text>
    </TCard>

    <!-- 带边框的卡片 -->
    <TCard title="带边框" :shadow="false" :border="true">
      <text>这是带边框的卡片</text>
    </TCard>

    <!-- 无阴影无边框 -->
    <TCard title="简洁卡片" :shadow="false" :border="false">
      <text>这是简洁的卡片</text>
    </TCard>
  </view>
</template>

<style lang="scss" scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
```

## 内边距大小

通过 `padding` 属性设置卡片的内边距大小，支持 `small`、`medium`、`large` 三种尺寸。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-container">
    <TCard title="小内边距" padding="small">
      <text>padding: 12px</text>
    </TCard>

    <TCard title="中等内边距" padding="medium">
      <text>padding: 20px（默认）</text>
    </TCard>

    <TCard title="大内边距" padding="large">
      <text>padding: 28px</text>
    </TCard>
  </view>
</template>

<style lang="scss" scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
```

## 圆角大小

通过 `radius` 属性设置卡片的圆角大小。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-container">
    <TCard title="无圆角" radius="none">
      <text>border-radius: 0</text>
    </TCard>

    <TCard title="小圆角" radius="small">
      <text>border-radius: 4px</text>
    </TCard>

    <TCard title="中等圆角" radius="medium">
      <text>border-radius: 8px（默认）</text>
    </TCard>

    <TCard title="大圆角" radius="large">
      <text>border-radius: 12px</text>
    </TCard>
  </view>
</template>

<style lang="scss" scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
```

## 带底部的卡片

使用 `footer` 插槽可以添加卡片底部内容，通常用于放置操作按钮。

```vue
<script setup lang="uts">
const handleConfirm = (): void => {
  console.log('确认')
}

const handleCancel = (): void => {
  console.log('取消')
}
</script>

<template>
  <TCard title="用户信息">
    <view class="user-info">
      <text>姓名：张三</text>
      <text>年龄：25</text>
      <text>职业：前端工程师</text>
    </view>
    
    <template #footer>
      <view class="footer-actions">
        <TButton text="取消" type="default" @click="handleCancel" />
        <TButton text="确认" type="primary" @click="handleConfirm" />
      </view>
    </template>
  </TCard>
</template>

<style lang="scss" scoped>
.user-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}
</style>
```

## 可点击的卡片

监听 `click` 事件可以让卡片响应点击操作。

```vue
<script setup lang="uts">
const handleCardClick = (): void => {
  uni.showToast({
    title: '卡片被点击',
    icon: 'none'
  })
}
</script>

<template>
  <TCard 
    title="可点击的卡片" 
    subtitle="点击试试"
    @click="handleCardClick"
  >
    <text>点击整个卡片区域都会触发事件</text>
  </TCard>
</template>
```

## 额外内容

使用 `extra` 插槽可以在卡片头部右侧添加额外内容。

```vue
<script setup lang="uts">
const handleMore = (): void => {
  console.log('查看更多')
}
</script>

<template>
  <TCard title="通知消息">
    <template #extra>
      <text class="more-link" @click="handleMore">更多 ›</text>
    </template>
    
    <text>您有 3 条未读消息</text>
  </TCard>
</template>

<style lang="scss" scoped>
.more-link {
  font-size: 14px;
  color: #409eff;
  cursor: pointer;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| title | 卡片标题 | string | - | - |
| subtitle | 卡片副标题 | string | - | - |
| shadow | 是否显示阴影 | boolean | - | true |
| border | 是否显示边框 | boolean | - | false |
| padding | 内边距大小 | string | small / medium / large | medium |
| radius | 圆角大小 | string | none / small / medium / large | medium |
| customClass | 自定义样式类 | string | - | - |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击卡片时触发 | () => void |

### Slots

| 名称 | 说明 |
|------|------|
| default | 卡片内容 |
| header | 自定义头部内容 |
| extra | 头部右侧额外内容 |
| footer | 底部内容 |

## 注意事项

1. 卡片组件默认带有阴影效果，如果不需要可以设置 `shadow` 为 `false`
2. `padding` 和 `radius` 属性提供了预设的尺寸，如需更精细的控制可以使用 `customClass` 自定义样式
3. 使用 `header` 插槽会完全替换默认的标题区域，包括 `title` 和 `subtitle` 属性
4. 卡片的点击事件会冒泡，如果卡片内有其他可点击元素，注意事件处理的优先级

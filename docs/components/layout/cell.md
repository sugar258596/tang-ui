# Cell 单元格

单元格组件，用于展示列表中的单个项目，支持标题、内容和图标显示。

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

最简单的单元格用法，显示标题和内容。

```vue
<script setup lang="uts">
</script>

<template>
  <TCell title="单元格标题" content="内容" />
</template>
```

## 隐藏图标

通过 `showIcon` 属性控制是否显示右侧箭头图标。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-container">
    <TCell title="显示图标" content="默认显示" :showIcon="true" />
    <TCell title="隐藏图标" content="不显示图标" :showIcon="false" />
  </view>
</template>

<style lang="scss" scoped>
.demo-container {
  display: flex;
  flex-direction: column;
}
</style>
```

## 自定义图标

通过 `icon` 属性自定义右侧图标。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-container">
    <TCell title="默认图标" content="右箭头" />
    <TCell title="自定义图标" content="星标" icon="icon-star" />
    <TCell title="自定义图标" content="设置" icon="icon-setting" />
  </view>
</template>

<style lang="scss" scoped>
.demo-container {
  display: flex;
  flex-direction: column;
}
</style>
```

## 可点击的单元格

监听 `cell` 事件实现单元格的点击交互。

```vue
<script setup lang="uts">
const handleCellClick = (): void => {
  uni.showToast({
    title: '单元格被点击',
    icon: 'none'
  })
}
</script>

<template>
  <TCell 
    title="可点击单元格" 
    content="点击试试"
    @cell="handleCellClick"
  />
</template>
```

## 自定义标题

使用 `title` 插槽可以自定义标题内容。

```vue
<script setup lang="uts">
</script>

<template>
  <TCell content="自定义标题样式">
    <template #title>
      <view class="custom-title">
        <text class="icon">⭐</text>
        <text class="text">重要通知</text>
      </view>
    </template>
  </TCell>
</template>

<style lang="scss" scoped>
.custom-title {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon {
  font-size: 18px;
}

.text {
  font-size: 16px;
  font-weight: bold;
  color: #f56c6c;
}
</style>
```

## 自定义内容

使用 `content` 插槽可以自定义内容区域。

```vue
<script setup lang="uts">
</script>

<template>
  <TCell title="自定义内容">
    <template #content>
      <view class="custom-content">
        <text class="value">99+</text>
        <TBadge content="新" type="danger" />
      </view>
    </template>
  </TCell>
</template>

<style lang="scss" scoped>
.custom-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.value {
  font-size: 14px;
  color: #f56c6c;
  font-weight: bold;
}
</style>
```

## 自定义右侧区域

使用 `right` 插槽可以完全自定义右侧区域的内容。

```vue
<script setup lang="uts">
const isEnabled = ref<boolean>(true)
</script>

<template>
  <TCell title="推送通知">
    <template #right>
      <TSwitch v-model="isEnabled" />
    </template>
  </TCell>
</template>
```

## 底部插槽

使用 `footer` 插槽可以在单元格底部添加额外内容。

```vue
<script setup lang="uts">
</script>

<template>
  <TCell title="订单详情" content="查看">
    <template #footer>
      <view class="footer-content">
        <text class="tip">订单号：202312080001</text>
      </view>
    </template>
  </TCell>
</template>

<style lang="scss" scoped>
.footer-content {
  padding: 8px 16px;
  background-color: #f5f7fa;
}

.tip {
  font-size: 12px;
  color: #909399;
}
</style>
```

## 组合使用

多个单元格组合使用，构建设置页面。

```vue
<script setup lang="uts">
const handleNavigation = (page: string): void => {
  console.log(`导航到：${page}`)
}
</script>

<template>
  <view class="settings-page">
    <view class="section">
      <TCell 
        title="账号管理" 
        content="设置"
        @cell="handleNavigation('account')"
      />
      <TCell 
        title="隐私设置" 
        content="管理"
        @cell="handleNavigation('privacy')"
      />
      <TCell 
        title="通知设置" 
        content="开启"
        @cell="handleNavigation('notification')"
      />
    </view>

    <view class="section">
      <TCell 
        title="清除缓存" 
        content="128 MB"
        @cell="handleNavigation('cache')"
      />
      <TCell 
        title="关于我们" 
        content="v1.0.0"
        @cell="handleNavigation('about')"
      />
    </view>
  </view>
</template>

<style lang="scss" scoped>
.settings-page {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section {
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| title | 单元格标题 | string | - | - |
| content | 单元格内容 | string | - | - |
| showIcon | 是否显示右侧图标 | boolean | - | true |
| icon | 右侧图标名称 | string | - | icon-youjiantou |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| cell | 点击单元格时触发 | () => void |

### Slots

| 名称 | 说明 |
|------|------|
| title | 自定义标题内容 |
| content | 自定义内容区域 |
| right | 自定义右侧区域（包括内容和图标） |
| footer | 底部额外内容 |

## 注意事项

1. TCell 组件默认显示右侧箭头图标，如果不需要可以设置 `showIcon` 为 `false`
2. 使用插槽自定义内容时，对应的 props 属性将不生效
3. `right` 插槽会完全替换右侧区域，包括内容和图标
4. 单元格组件自带内边距和间距样式，多个单元格组合使用时会自动处理间距
5. 点击事件会作用于整个单元格区域

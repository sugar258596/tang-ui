# Empty 空状态

用于空状态时的占位提示，提供友好的用户体验。

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

最简单的空状态用法。

```vue
<script setup lang="uts">
</script>

<template>
  <TEmpty />
</template>
```

## 自定义文案

可以自定义标题和描述文案。

```vue
<script setup lang="uts">
</script>

<template>
  <TEmpty 
    title="暂无订单" 
    description="您还没有任何订单记录" 
  />
</template>
```

## 自定义图片

可以自定义空状态的图片。

```vue
<script setup lang="uts">
</script>

<template>
  <TEmpty 
    title="暂无收藏" 
    description="快去收藏您喜欢的内容吧"
    image="/static/images/empty-favorite.png"
  />
</template>
```

## 显示操作按钮

可以显示操作按钮，引导用户进行下一步操作。

```vue
<script setup lang="uts">
const handleAction = (): void => {
  console.log('刷新数据')
  // 执行刷新操作
}
</script>

<template>
  <TEmpty 
    title="加载失败" 
    description="数据加载失败，请重试"
    :show-action="true"
    action-text="重新加载"
    @action-click="handleAction"
  />
</template>
```

## 紧凑模式

使用紧凑模式，减少空白空间。

```vue
<script setup lang="uts">
</script>

<template>
  <TEmpty 
    title="暂无消息" 
    :compact="true"
  />
</template>
```

## 自定义内容

可以通过插槽完全自定义空状态的内容。

```vue
<script setup lang="uts">
</script>

<template>
  <TEmpty title="自定义图标" description="使用插槽自定义图标">
    <view class="custom-icon">
      <text style="font-size: 64px;">📦</text>
    </view>
  </TEmpty>
</template>

<style lang="scss" scoped>
.custom-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}
</style>
```

## 不同场景

展示不同场景下的空状态。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-block">
    <!-- 无数据 -->
    <TEmpty 
      title="暂无数据" 
      description="当前没有任何数据"
    />

    <!-- 无搜索结果 -->
    <TEmpty 
      title="无搜索结果" 
      description="换个关键词试试"
      :show-action="true"
      action-text="清空搜索"
    />

    <!-- 无网络 -->
    <TEmpty 
      title="网络连接失败" 
      description="请检查您的网络设置"
      :show-action="true"
      action-text="重新连接"
    />

    <!-- 无权限 -->
    <TEmpty 
      title="暂无权限" 
      description="您没有访问此内容的权限"
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
const hasData = ref<boolean>(false)

const handleRefresh = (): void => {
  loading.value = true
  
  // 模拟加载数据
  setTimeout(() => {
    loading.value = false
    hasData.value = true
  }, 2000)
}
</script>

<template>
  <view class="demo-container">
    <TLoading v-if="loading" />
    
    <view v-else-if="hasData" class="data-list">
      <text>数据加载成功！</text>
    </view>
    
    <TEmpty 
      v-else
      title="暂无数据" 
      description="点击下方按钮加载数据"
      :show-action="true"
      action-text="加载数据"
      @action-click="handleRefresh"
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

.data-list {
  padding: 20px;
  text-align: center;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| title | 标题文案 | `string` | - | `暂无数据` |
| description | 描述文案 | `string` | - | `当前没有相关内容` |
| image | 图片地址 | `string` | - | `/static/images/empty.png` |
| showAction | 是否显示操作按钮 | `boolean` | - | `false` |
| actionText | 操作按钮文本 | `string` | - | `刷新试试` |
| compact | 是否紧凑模式 | `boolean` | - | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| actionClick | 点击操作按钮时触发 | `() => void` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义图片内容 |

## 注意事项

1. 默认图片路径为 `/static/images/empty.png`，请确保该图片存在或自定义图片路径
2. 紧凑模式会减少上下内边距和图片大小，适合在列表中使用
3. 操作按钮使用 `ButtonX` 组件，需要确保该组件已正确引入
4. 组件会自动适配深色模式，图片会自动调整亮度
5. 可以通过插槽完全自定义图片区域的内容
6. 描述文案最大宽度为 80vw，超出会自动换行
7. 组件带有淡入动画效果，提升用户体验

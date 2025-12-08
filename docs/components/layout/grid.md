# Grid 宫格

宫格布局组件，用于展示网格状的内容，常用于功能入口、图标导航等场景。需要配合 GridItem 组件使用。

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

最简单的宫格用法，默认 4 列布局。

```vue
<script setup lang="uts">
</script>

<template>
  <TGrid>
    <TGridItem icon="🏠" text="首页" />
    <TGridItem icon="📦" text="订单" />
    <TGridItem icon="👤" text="我的" />
    <TGridItem icon="⚙️" text="设置" />
  </TGrid>
</template>
```

## 自定义列数

通过 `columns` 属性设置宫格的列数。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-container">
    <!-- 3 列 -->
    <TGrid :columns="3">
      <TGridItem icon="🏠" text="首页" />
      <TGridItem icon="📦" text="订单" />
      <TGridItem icon="👤" text="我的" />
      <TGridItem icon="⚙️" text="设置" />
      <TGridItem icon="💬" text="消息" />
      <TGridItem icon="📍" text="地址" />
    </TGrid>

    <!-- 5 列 -->
    <TGrid :columns="5">
      <TGridItem icon="🏠" text="首页" />
      <TGridItem icon="📦" text="订单" />
      <TGridItem icon="👤" text="我的" />
      <TGridItem icon="⚙️" text="设置" />
      <TGridItem icon="💬" text="消息" />
    </TGrid>
  </view>
</template>

<style lang="scss" scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
```

## 设置间距

通过 `gap` 属性设置宫格项之间的间距。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-container">
    <!-- 无间距 -->
    <TGrid :columns="4" :gap="0">
      <TGridItem icon="🏠" text="首页" />
      <TGridItem icon="📦" text="订单" />
      <TGridItem icon="👤" text="我的" />
      <TGridItem icon="⚙️" text="设置" />
    </TGrid>

    <!-- 16px 间距 -->
    <TGrid :columns="4" :gap="16">
      <TGridItem icon="🏠" text="首页" />
      <TGridItem icon="📦" text="订单" />
      <TGridItem icon="👤" text="我的" />
      <TGridItem icon="⚙️" text="设置" />
    </TGrid>
  </view>
</template>

<style lang="scss" scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
```

## 显示边框

通过 `border` 属性显示宫格边框。

```vue
<script setup lang="uts">
</script>

<template>
  <TGrid :columns="4" :border="true">
    <TGridItem icon="🏠" text="首页" />
    <TGridItem icon="📦" text="订单" />
    <TGridItem icon="👤" text="我的" />
    <TGridItem icon="⚙️" text="设置" />
    <TGridItem icon="💬" text="消息" />
    <TGridItem icon="📍" text="地址" />
    <TGridItem icon="⭐" text="收藏" />
    <TGridItem icon="🔔" text="通知" />
  </TGrid>
</template>
```

## 正方形格子

通过 `square` 属性将宫格项设置为正方形。

```vue
<script setup lang="uts">
</script>

<template>
  <TGrid :columns="4" :square="true">
    <TGridItem icon="🏠" text="首页" />
    <TGridItem icon="📦" text="订单" />
    <TGridItem icon="👤" text="我的" />
    <TGridItem icon="⚙️" text="设置" />
  </TGrid>
</template>
```

## 自定义图标大小

通过 `iconSize` 属性设置图标大小。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-container">
    <!-- 小图标 -->
    <TGrid :columns="4" iconSize="20px">
      <TGridItem icon="🏠" text="首页" />
      <TGridItem icon="📦" text="订单" />
      <TGridItem icon="👤" text="我的" />
      <TGridItem icon="⚙️" text="设置" />
    </TGrid>

    <!-- 大图标 -->
    <TGrid :columns="4" iconSize="36px">
      <TGridItem icon="🏠" text="首页" />
      <TGridItem icon="📦" text="订单" />
      <TGridItem icon="👤" text="我的" />
      <TGridItem icon="⚙️" text="设置" />
    </TGrid>
  </view>
</template>

<style lang="scss" scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
```

## 使用图片

GridItem 支持使用图片代替图标。

```vue
<script setup lang="uts">
</script>

<template>
  <TGrid :columns="4">
    <TGridItem image="/static/icons/home.png" text="首页" />
    <TGridItem image="/static/icons/order.png" text="订单" />
    <TGridItem image="/static/icons/user.png" text="我的" />
    <TGridItem image="/static/icons/setting.png" text="设置" />
  </TGrid>
</template>
```

## 自定义颜色

通过 `iconColor` 和 `textColor` 属性自定义图标和文字颜色。

```vue
<script setup lang="uts">
</script>

<template>
  <TGrid :columns="4">
    <TGridItem 
      icon="🏠" 
      text="首页" 
      iconColor="#409eff"
      textColor="#409eff"
    />
    <TGridItem 
      icon="📦" 
      text="订单" 
      iconColor="#67c23a"
      textColor="#67c23a"
    />
    <TGridItem 
      icon="👤" 
      text="我的" 
      iconColor="#e6a23c"
      textColor="#e6a23c"
    />
    <TGridItem 
      icon="⚙️" 
      text="设置" 
      iconColor="#f56c6c"
      textColor="#f56c6c"
    />
  </TGrid>
</template>
```

## 徽标提示

GridItem 支持显示徽标和小红点。

```vue
<script setup lang="uts">
</script>

<template>
  <TGrid :columns="4">
    <TGridItem icon="🏠" text="首页" />
    <TGridItem icon="📦" text="订单" badge="5" />
    <TGridItem icon="💬" text="消息" badge="99+" />
    <TGridItem icon="🔔" text="通知" :dot="true" />
  </TGrid>
</template>
```

## 可点击的宫格

通过 `clickable` 属性和 `click` 事件实现宫格项的点击交互。

```vue
<script setup lang="uts">
const handleItemClick = (name: string): void => {
  uni.showToast({
    title: `点击了${name}`,
    icon: 'none'
  })
}
</script>

<template>
  <TGrid :columns="4" :clickable="true">
    <TGridItem 
      icon="🏠" 
      text="首页"
      @click="handleItemClick('首页')"
    />
    <TGridItem 
      icon="📦" 
      text="订单"
      @click="handleItemClick('订单')"
    />
    <TGridItem 
      icon="👤" 
      text="我的"
      @click="handleItemClick('我的')"
    />
    <TGridItem 
      icon="⚙️" 
      text="设置"
      @click="handleItemClick('设置')"
    />
  </TGrid>
</template>
```

## 自定义内容

使用 GridItem 的默认插槽可以完全自定义内容。

```vue
<script setup lang="uts">
</script>

<template>
  <TGrid :columns="3">
    <TGridItem>
      <view class="custom-item">
        <image 
          src="/static/product1.jpg" 
          class="product-image"
          mode="aspectFill"
        />
        <text class="product-name">商品 1</text>
        <text class="product-price">¥99</text>
      </view>
    </TGridItem>
    <TGridItem>
      <view class="custom-item">
        <image 
          src="/static/product2.jpg" 
          class="product-image"
          mode="aspectFill"
        />
        <text class="product-name">商品 2</text>
        <text class="product-price">¥199</text>
      </view>
    </TGridItem>
    <TGridItem>
      <view class="custom-item">
        <image 
          src="/static/product3.jpg" 
          class="product-image"
          mode="aspectFill"
        />
        <text class="product-name">商品 3</text>
        <text class="product-price">¥299</text>
      </view>
    </TGridItem>
  </TGrid>
</template>

<style lang="scss" scoped>
.custom-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.product-image {
  width: 80px;
  height: 80px;
  border-radius: 8px;
}

.product-name {
  font-size: 14px;
  color: #303133;
}

.product-price {
  font-size: 16px;
  font-weight: bold;
  color: #f56c6c;
}
</style>
```

## API

### Grid Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| columns | 列数 | number | - | 4 |
| gap | 格子间距 | number / string | - | 0 |
| border | 是否显示边框 | boolean | - | false |
| borderColor | 边框颜色 | string | - | #e0e0e0 |
| square | 是否正方形格子 | boolean | - | false |
| center | 是否居中显示内容 | boolean | - | true |
| clickable | 是否可点击 | boolean | - | false |
| iconSize | 图标大小 | string / number | - | 28px |
| customClass | 自定义类名 | string | - | - |
| customStyle | 自定义样式 | string | - | - |

### GridItem Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| icon | 图标内容 | string | - | - |
| iconColor | 图标颜色 | string | - | #323233 |
| image | 图片链接 | string | - | - |
| text | 文字内容 | string | - | - |
| textColor | 文字颜色 | string | - | #646566 |
| badge | 徽标内容 | string / number | - | - |
| dot | 是否显示小红点 | boolean | - | false |
| customClass | 自定义类名 | string | - | - |
| customStyle | 自定义样式 | string | - | - |

### GridItem Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击格子时触发 | () => void |

### GridItem Slots

| 名称 | 说明 |
|------|------|
| default | 自定义格子内容 |
| icon | 自定义图标内容 |

## 注意事项

1. TGrid 和 TGridItem 必须配合使用，TGrid 作为容器，TGridItem 作为子项
2. TGrid 通过 provide/inject 机制向 TGridItem 传递配置，因此 TGridItem 必须是 TGrid 的直接子组件
3. `icon` 和 `image` 属性互斥，优先使用 `image`
4. 当设置 `border` 为 `true` 时，会显示网格边框，适合需要明确分隔的场景
5. `square` 属性会将格子设置为正方形（宽高比 1:1），适合图标导航等场景
6. 使用自定义插槽时，`icon`、`image`、`text` 等属性将不生效
7. `clickable` 属性会为所有格子添加点击态效果，也可以单独为某个 GridItem 添加点击事件

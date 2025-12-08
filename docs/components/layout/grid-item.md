# GridItem 宫格项

宫格项组件，用于在宫格布局中展示单个项目。必须配合 Grid 组件使用。

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

GridItem 必须作为 Grid 的子组件使用，通过 `icon` 和 `text` 属性设置图标和文字。

```vue
<script setup lang="uts">
</script>

<template>
  <TGrid :columns="4">
    <TGridItem icon="🏠" text="首页" />
    <TGridItem icon="📦" text="订单" />
    <TGridItem icon="👤" text="我的" />
    <TGridItem icon="⚙️" text="设置" />
  </TGrid>
</template>
```

## 使用图片

通过 `image` 属性使用图片代替图标。

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

通过 `iconColor` 和 `textColor` 属性自定义图标和文字的颜色。

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

通过 `badge` 属性显示徽标数字，通过 `dot` 属性显示小红点。

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

## 点击事件

监听 `click` 事件实现宫格项的点击交互。

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

## 自定义图标

使用 `icon` 插槽可以自定义图标内容。

```vue
<script setup lang="uts">
</script>

<template>
  <TGrid :columns="4">
    <TGridItem text="首页">
      <template #icon>
        <TIcon name="home" size="28" color="#409eff" />
      </template>
    </TGridItem>
    <TGridItem text="订单">
      <template #icon>
        <TIcon name="order" size="28" color="#67c23a" />
      </template>
    </TGridItem>
    <TGridItem text="我的">
      <template #icon>
        <TIcon name="user" size="28" color="#e6a23c" />
      </template>
    </TGridItem>
    <TGridItem text="设置">
      <template #icon>
        <TIcon name="setting" size="28" color="#f56c6c" />
      </template>
    </TGridItem>
  </TGrid>
</template>
```

## 自定义内容

使用默认插槽可以完全自定义宫格项的内容。

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

## 功能入口示例

使用宫格项创建应用功能入口。

```vue
<script setup lang="uts">
const navigateTo = (page: string): void => {
  uni.navigateTo({
    url: `/pages/${page}/${page}`
  })
}
</script>

<template>
  <TGrid :columns="4" :clickable="true">
    <TGridItem 
      icon="📱" 
      text="扫一扫"
      @click="navigateTo('scan')"
    />
    <TGridItem 
      icon="💰" 
      text="付款"
      @click="navigateTo('payment')"
    />
    <TGridItem 
      icon="🎫" 
      text="卡券"
      badge="3"
      @click="navigateTo('coupon')"
    />
    <TGridItem 
      icon="🚚" 
      text="物流"
      @click="navigateTo('logistics')"
    />
    <TGridItem 
      icon="👥" 
      text="好友"
      @click="navigateTo('friends')"
    />
    <TGridItem 
      icon="🎮" 
      text="游戏"
      :dot="true"
      @click="navigateTo('games')"
    />
    <TGridItem 
      icon="📖" 
      text="阅读"
      @click="navigateTo('reading')"
    />
    <TGridItem 
      icon="🎵" 
      text="音乐"
      @click="navigateTo('music')"
    />
  </TGrid>
</template>
```

## 商品展示示例

使用宫格项展示商品列表。

```vue
<script setup lang="uts">
interface Product {
  id: number
  name: string
  image: string
  price: number
  badge?: string
}

const products = ref<Product[]>([
  { id: 1, name: '商品 1', image: '/static/product1.jpg', price: 99, badge: '热卖' },
  { id: 2, name: '商品 2', image: '/static/product2.jpg', price: 199 },
  { id: 3, name: '商品 3', image: '/static/product3.jpg', price: 299, badge: '新品' },
  { id: 4, name: '商品 4', image: '/static/product4.jpg', price: 399 }
])

const viewProduct = (product: Product): void => {
  uni.navigateTo({
    url: `/pages/product/detail?id=${product.id}`
  })
}
</script>

<template>
  <TGrid :columns="2" :gap="16" :clickable="true">
    <TGridItem 
      v-for="product in products"
      :key="product.id"
      :badge="product.badge"
      @click="viewProduct(product)"
    >
      <view class="product-card">
        <image 
          :src="product.image" 
          class="product-img"
          mode="aspectFill"
        />
        <text class="product-name">{{ product.name }}</text>
        <text class="product-price">¥{{ product.price }}</text>
      </view>
    </TGridItem>
  </TGrid>
</template>

<style lang="scss" scoped>
.product-card {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.product-img {
  width: 100%;
  height: 160px;
  border-radius: 8px;
  margin-bottom: 8px;
}

.product-name {
  font-size: 14px;
  color: #303133;
  margin-bottom: 4px;
}

.product-price {
  font-size: 16px;
  font-weight: bold;
  color: #f56c6c;
}
</style>
```

## API

### Props

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

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击格子时触发 | () => void |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义格子内容 |
| icon | 自定义图标内容 |

## 注意事项

1. GridItem 必须作为 Grid 组件的直接子组件使用，不能单独使用
2. GridItem 通过 inject 机制从 Grid 组件获取配置（如边框、居中、图标大小等）
3. `icon` 和 `image` 属性互斥，优先使用 `image`
4. 使用默认插槽时，`icon`、`image`、`text` 等属性将不生效
5. 使用 `icon` 插槽时，`icon` 和 `image` 属性将不生效，但 `text` 属性仍然有效
6. 徽标功能依赖 TBadge 组件，确保项目中已引入该组件
7. 当 Grid 的 `clickable` 为 `true` 时，所有 GridItem 都会有点击态效果
8. GridItem 的图标大小由 Grid 的 `iconSize` 属性统一控制
9. 当 Grid 设置了 `border` 时，GridItem 会自动显示边框
10. 当 Grid 设置了 `square` 时，GridItem 会自动变为正方形

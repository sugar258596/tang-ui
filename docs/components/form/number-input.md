# NumberInput 数字输入

数字输入框组件，用于输入数字，支持增减按钮。

::: tip v-model 支持
TNumberInput 组件使用 Vue 3.4+ 的 `defineModel` API 实现双向绑定。

**类型定义**：`defineModel<number>({ default: 0 })`

**使用方式**：`<TNumberInput v-model="value" />`
:::

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

最简单的数字输入框用法。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<number>(0)
</script>

<template>
  <TNumberInput v-model="value" />
</template>
```

## 设置范围

通过 `min` 和 `max` 属性设置数值范围。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<number>(5)
</script>

<template>
  <TNumberInput v-model="value" :min="0" :max="10" />
</template>
```

## 步长

通过 `step` 属性设置步长。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<number>(0)
</script>

<template>
  <view class="demo-section">
    <TNumberInput v-model="value" :step="1" />
    <TNumberInput v-model="value" :step="5" />
    <TNumberInput v-model="value" :step="10" />
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

## 禁用状态

通过 `disabled` 属性禁用数字输入框。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<number>(5)
</script>

<template>
  <TNumberInput v-model="value" disabled />
</template>
```

## 自定义宽度

通过 `width` 和 `button-size` 属性自定义尺寸。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<number>(0)
</script>

<template>
  <view class="demo-section">
    <TNumberInput v-model="value" :width="80" :button-size="64" />
    <TNumberInput v-model="value" :width="100" :button-size="80" />
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

## 占位符

通过 `placeholder` 属性设置占位符。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<number>(0)
</script>

<template>
  <TNumberInput v-model="value" placeholder="请输入数量" />
</template>
```

## 事件处理

数字输入框支持 change 事件。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<number>(0)

const handleChange = (val: number): void => {
  console.log('数值改变:', val)
  uni.showToast({
    title: `当前值: ${val}`,
    icon: 'none'
  })
}
</script>

<template>
  <TNumberInput v-model="value" @change="handleChange" />
</template>
```

## 购物车场景

在购物车中使用数字输入框。

```vue
<script setup lang="uts">
import { ref } from 'vue'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

const cartItems = ref<CartItem[]>([
  { id: 1, name: '商品 A', price: 99, quantity: 1 },
  { id: 2, name: '商品 B', price: 199, quantity: 2 }
])

const totalPrice = computed<number>(() => {
  return cartItems.value.reduce((sum, item) => {
    return sum + item.price * item.quantity
  }, 0)
})
</script>

<template>
  <view class="cart-container">
    <view 
      v-for="item in cartItems" 
      :key="item.id" 
      class="cart-item"
    >
      <text class="item-name">{{ item.name }}</text>
      <text class="item-price">¥{{ item.price }}</text>
      <TNumberInput 
        v-model="item.quantity" 
        :min="1" 
        :max="99" 
      />
    </view>
    
    <view class="cart-total">
      <text class="total-label">总计:</text>
      <text class="total-price">¥{{ totalPrice }}</text>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.cart-container {
  padding: 32rpx;
}

.cart-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24rpx 0;
  border-bottom: 1px solid #f0f0f0;
}

.item-name {
  flex: 1;
  font-size: 28rpx;
  color: #303133;
}

.item-price {
  font-size: 28rpx;
  color: #f56c6c;
  margin-right: 16rpx;
}

.cart-total {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 24rpx 0;
  margin-top: 16rpx;
}

.total-label {
  font-size: 32rpx;
  color: #303133;
  margin-right: 16rpx;
}

.total-price {
  font-size: 36rpx;
  color: #f56c6c;
  font-weight: bold;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| v-model | 绑定值（使用 defineModel） | number | - | 0 |
| min | 最小值 | number | - | 0 |
| max | 最大值 | number | - | 999999 |
| step | 步长 | number | - | 1 |
| disabled | 是否禁用 | boolean | - | false |
| placeholder | 占位符 | string | - | '' |
| width | 输入框宽度 | string / number | - | 60 |
| button-size | 按钮大小 | string / number | - | 64 |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 值改变时触发 | (value: number) => void |

## 注意事项

1. **v-model 类型**：TNumberInput 的 v-model 只接受 `number` 类型的值。

2. **范围限制**：输入的值会自动限制在 `min` 和 `max` 之间。

3. **按钮禁用**：当值达到最小值时，减少按钮会被禁用；当值达到最大值时，增加按钮会被禁用。

4. **键盘支持**：支持使用键盘上下箭头键来增减数值。

5. **尺寸单位**：`width` 和 `button-size` 属性支持数字（rpx）或字符串（如 '100px'）。

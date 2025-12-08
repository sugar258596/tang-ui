# Swiper 轮播图

用于循环播放一组图片或内容的轮播图组件。

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

::: tip v-model 使用
Swiper 组件使用 `defineModel` 实现双向绑定，支持 `v-model` 绑定当前轮播项的索引。
:::

## 基础用法

最简单的轮播图用法。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const currentIndex = ref<number>(0)
</script>

<template>
  <TSwiper v-model="currentIndex">
    <swiper-item>
      <view class="swiper-item" style="background-color: #409eff;">
        <text>轮播项 1</text>
      </view>
    </swiper-item>
    <swiper-item>
      <view class="swiper-item" style="background-color: #67c23a;">
        <text>轮播项 2</text>
      </view>
    </swiper-item>
    <swiper-item>
      <view class="swiper-item" style="background-color: #e6a23c;">
        <text>轮播项 3</text>
      </view>
    </swiper-item>
  </TSwiper>
</template>

<style lang="scss" scoped>
.swiper-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #ffffff;
  font-size: 18px;
}
</style>
```

## 自定义高度

可以自定义轮播图的高度。

```vue
<script setup lang="uts">
</script>

<template>
  <TSwiper height="300px">
    <swiper-item>
      <view class="swiper-item" style="background-color: #409eff;">
        <text>高度 300px</text>
      </view>
    </swiper-item>
    <swiper-item>
      <view class="swiper-item" style="background-color: #67c23a;">
        <text>高度 300px</text>
      </view>
    </swiper-item>
  </TSwiper>
</template>

<style lang="scss" scoped>
.swiper-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #ffffff;
  font-size: 18px;
}
</style>
```

## 禁用自动播放

可以禁用自动播放功能。

```vue
<script setup lang="uts">
</script>

<template>
  <TSwiper :autoplay="false">
    <swiper-item>
      <view class="swiper-item" style="background-color: #409eff;">
        <text>手动切换</text>
      </view>
    </swiper-item>
    <swiper-item>
      <view class="swiper-item" style="background-color: #67c23a;">
        <text>手动切换</text>
      </view>
    </swiper-item>
  </TSwiper>
</template>

<style lang="scss" scoped>
.swiper-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #ffffff;
  font-size: 18px;
}
</style>
```

## 自定义切换间隔

可以自定义自动切换的时间间隔。

```vue
<script setup lang="uts">
</script>

<template>
  <TSwiper :interval="5000">
    <swiper-item>
      <view class="swiper-item" style="background-color: #409eff;">
        <text>5秒切换</text>
      </view>
    </swiper-item>
    <swiper-item>
      <view class="swiper-item" style="background-color: #67c23a;">
        <text>5秒切换</text>
      </view>
    </swiper-item>
  </TSwiper>
</template>

<style lang="scss" scoped>
.swiper-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #ffffff;
  font-size: 18px;
}
</style>
```

## 数字指示器

使用数字指示器显示当前位置。

```vue
<script setup lang="uts">
</script>

<template>
  <TSwiper indicator-type="number">
    <swiper-item>
      <view class="swiper-item" style="background-color: #409eff;">
        <text>轮播项 1</text>
      </view>
    </swiper-item>
    <swiper-item>
      <view class="swiper-item" style="background-color: #67c23a;">
        <text>轮播项 2</text>
      </view>
    </swiper-item>
    <swiper-item>
      <view class="swiper-item" style="background-color: #e6a23c;">
        <text>轮播项 3</text>
      </view>
    </swiper-item>
  </TSwiper>
</template>

<style lang="scss" scoped>
.swiper-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #ffffff;
  font-size: 18px;
}
</style>
```

## 隐藏指示器

可以隐藏指示器。

```vue
<script setup lang="uts">
</script>

<template>
  <TSwiper indicator-type="none">
    <swiper-item>
      <view class="swiper-item" style="background-color: #409eff;">
        <text>无指示器</text>
      </view>
    </swiper-item>
    <swiper-item>
      <view class="swiper-item" style="background-color: #67c23a;">
        <text>无指示器</text>
      </view>
    </swiper-item>
  </TSwiper>
</template>

<style lang="scss" scoped>
.swiper-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #ffffff;
  font-size: 18px;
}
</style>
```

## 自定义指示器颜色

可以自定义指示器的颜色。

```vue
<script setup lang="uts">
</script>

<template>
  <TSwiper 
    indicator-color="rgba(255, 255, 255, 0.5)"
    indicator-active-color="#f5222d"
  >
    <swiper-item>
      <view class="swiper-item" style="background-color: #409eff;">
        <text>自定义颜色</text>
      </view>
    </swiper-item>
    <swiper-item>
      <view class="swiper-item" style="background-color: #67c23a;">
        <text>自定义颜色</text>
      </view>
    </swiper-item>
  </TSwiper>
</template>

<style lang="scss" scoped>
.swiper-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #ffffff;
  font-size: 18px;
}
</style>
```

## 指示器位置

可以设置指示器的位置。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-block">
    <TSwiper indicator-position="top">
      <swiper-item>
        <view class="swiper-item" style="background-color: #409eff;">
          <text>顶部指示器</text>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item" style="background-color: #67c23a;">
          <text>顶部指示器</text>
        </view>
      </swiper-item>
    </TSwiper>

    <TSwiper indicator-position="bottom">
      <swiper-item>
        <view class="swiper-item" style="background-color: #409eff;">
          <text>底部指示器</text>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item" style="background-color: #67c23a;">
          <text>底部指示器</text>
        </view>
      </swiper-item>
    </TSwiper>
  </view>
</template>

<style lang="scss" scoped>
.demo-block {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.swiper-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #ffffff;
  font-size: 18px;
}
</style>
```

## 垂直方向

可以设置轮播图为垂直方向。

```vue
<script setup lang="uts">
</script>

<template>
  <TSwiper direction="vertical" height="300px">
    <swiper-item>
      <view class="swiper-item" style="background-color: #409eff;">
        <text>垂直轮播 1</text>
      </view>
    </swiper-item>
    <swiper-item>
      <view class="swiper-item" style="background-color: #67c23a;">
        <text>垂直轮播 2</text>
      </view>
    </swiper-item>
    <swiper-item>
      <view class="swiper-item" style="background-color: #e6a23c;">
        <text>垂直轮播 3</text>
      </view>
    </swiper-item>
  </TSwiper>
</template>

<style lang="scss" scoped>
.swiper-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #ffffff;
  font-size: 18px;
}
</style>
```

## 事件监听

可以监听轮播图的切换和点击事件。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const currentIndex = ref<number>(0)

const handleChange = (index: number): void => {
  console.log('切换到:', index)
}

const handleClick = (index: number): void => {
  console.log('点击了:', index)
}
</script>

<template>
  <TSwiper 
    v-model="currentIndex"
    @change="handleChange"
    @click="handleClick"
  >
    <swiper-item>
      <view class="swiper-item" style="background-color: #409eff;">
        <text>轮播项 1</text>
      </view>
    </swiper-item>
    <swiper-item>
      <view class="swiper-item" style="background-color: #67c23a;">
        <text>轮播项 2</text>
      </view>
    </swiper-item>
  </TSwiper>
</template>

<style lang="scss" scoped>
.swiper-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #ffffff;
  font-size: 18px;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| v-model | 当前轮播项的索引 | `number` | - | `0` |
| height | 轮播图高度 | `string` | - | `200px` |
| autoplay | 是否自动切换 | `boolean` | - | `true` |
| interval | 自动切换时间间隔（毫秒） | `number` | - | `3000` |
| duration | 滑动动画时长（毫秒） | `number` | - | `300` |
| circular | 是否循环播放 | `boolean` | - | `true` |
| indicatorType | 指示器类型 | `string` | `dots` / `number` / `none` | `dots` |
| indicatorPosition | 指示器位置 | `string` | `top` / `bottom` / `left` / `right` | `bottom` |
| indicatorColor | 指示器颜色 | `string` | - | `rgba(0, 0, 0, 0.3)` |
| indicatorActiveColor | 指示器激活颜色 | `string` | - | `#ffffff` |
| direction | 轮播方向 | `string` | `horizontal` / `vertical` | `horizontal` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 当前轮播索引改变时触发 | `(index: number) => void` |
| click | 点击轮播项时触发 | `(index: number) => void` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 轮播项内容，需要使用 `swiper-item` 组件包裹 |

## 注意事项

1. 轮播项必须使用 `swiper-item` 组件包裹
2. `v-model` 绑定的索引从 0 开始
3. `height` 属性支持任何 CSS 长度单位（px、rpx、%等）
4. `interval` 和 `duration` 单位为毫秒
5. 垂直方向轮播时，指示器位置可以设置为 `left` 或 `right`
6. 水平方向轮播时，指示器位置可以设置为 `top` 或 `bottom`
7. 组件基于 UniApp 原生 `swiper` 组件封装，继承其性能优势
8. 指示器颜色支持任何 CSS 颜色格式（hex、rgb、rgba等）

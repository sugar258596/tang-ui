# Image 图片

图片组件，支持多种裁剪模式、形状、懒加载和预览功能。

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

通过 `src` 属性设置图片地址。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <TImage 
      src="https://via.placeholder.com/300x200" 
      width="300rpx" 
      height="200rpx"
    />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  padding: 32rpx;
}
</style>
```

## 裁剪模式

支持多种图片裁剪和缩放模式。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <view class="demo-item">
      <TImage 
        src="https://via.placeholder.com/300x200" 
        mode="scaleToFill"
        width="200rpx" 
        height="200rpx"
      />
      <text class="demo-label">scaleToFill</text>
    </view>
    
    <view class="demo-item">
      <TImage 
        src="https://via.placeholder.com/300x200" 
        mode="aspectFit"
        width="200rpx" 
        height="200rpx"
      />
      <text class="demo-label">aspectFit</text>
    </view>
    
    <view class="demo-item">
      <TImage 
        src="https://via.placeholder.com/300x200" 
        mode="aspectFill"
        width="200rpx" 
        height="200rpx"
      />
      <text class="demo-label">aspectFill</text>
    </view>
    
    <view class="demo-item">
      <TImage 
        src="https://via.placeholder.com/300x200" 
        mode="widthFix"
        width="200rpx"
      />
      <text class="demo-label">widthFix</text>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  flex-wrap: wrap;
  gap: 32rpx;
  padding: 32rpx;
}

.demo-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16rpx;
}

.demo-label {
  font-size: 24rpx;
  color: #909399;
}
</style>
```

## 图片形状

支持 `square`（方形）、`round`（圆角）、`circle`（圆形）三种形状。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <view class="demo-item">
      <TImage 
        src="https://via.placeholder.com/200x200" 
        shape="square"
        width="200rpx" 
        height="200rpx"
      />
      <text class="demo-label">方形</text>
    </view>
    
    <view class="demo-item">
      <TImage 
        src="https://via.placeholder.com/200x200" 
        shape="round"
        width="200rpx" 
        height="200rpx"
      />
      <text class="demo-label">圆角</text>
    </view>
    
    <view class="demo-item">
      <TImage 
        src="https://via.placeholder.com/200x200" 
        shape="circle"
        width="200rpx" 
        height="200rpx"
      />
      <text class="demo-label">圆形</text>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  gap: 32rpx;
  padding: 32rpx;
}

.demo-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16rpx;
}

.demo-label {
  font-size: 24rpx;
  color: #909399;
}
</style>
```

## 自定义圆角

通过 `radius` 属性自定义圆角大小（仅 `shape="square"` 时有效）。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <TImage 
      src="https://via.placeholder.com/200x200" 
      shape="square"
      radius="8rpx"
      width="200rpx" 
      height="200rpx"
    />
    <TImage 
      src="https://via.placeholder.com/200x200" 
      shape="square"
      radius="16rpx"
      width="200rpx" 
      height="200rpx"
    />
    <TImage 
      src="https://via.placeholder.com/200x200" 
      shape="square"
      radius="32rpx"
      width="200rpx" 
      height="200rpx"
    />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  gap: 32rpx;
  padding: 32rpx;
}
</style>
```

## 懒加载

通过 `lazyLoad` 属性开启图片懒加载。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <TImage 
      src="https://via.placeholder.com/300x200" 
      :lazy-load="true"
      width="300rpx" 
      height="200rpx"
    />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  padding: 32rpx;
}
</style>
```

## 加载状态

通过 `showLoading` 和 `showError` 属性控制加载状态的显示。

```vue
<script setup lang="uts">
import { ref } from 'vue'
</script>

<template>
  <view class="demo-section">
    <view class="demo-item">
      <TImage 
        src="https://via.placeholder.com/300x200" 
        :show-loading="true"
        loading-text="加载中..."
        width="300rpx" 
        height="200rpx"
      />
      <text class="demo-label">显示加载状态</text>
    </view>
    
    <view class="demo-item">
      <TImage 
        src="invalid-url" 
        :show-error="true"
        error-text="加载失败"
        width="300rpx" 
        height="200rpx"
      />
      <text class="demo-label">显示错误状态</text>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  display: flex;
  gap: 32rpx;
  padding: 32rpx;
}

.demo-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16rpx;
}

.demo-label {
  font-size: 24rpx;
  color: #909399;
}
</style>
```

## 图片预览

通过 `previewable` 属性开启图片预览功能。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const previewList = ref<string[]>([
  'https://via.placeholder.com/600x400/409eff',
  'https://via.placeholder.com/600x400/67c23a',
  'https://via.placeholder.com/600x400/e6a23c'
])
</script>

<template>
  <view class="demo-section">
    <TImage 
      src="https://via.placeholder.com/300x200" 
      :previewable="true"
      :preview-list="previewList"
      :preview-index="0"
      width="300rpx" 
      height="200rpx"
    />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  padding: 32rpx;
}
</style>
```

## 事件处理

图片支持加载完成、加载失败、点击等事件。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const handleLoad = (event: Event): void => {
  console.log('图片加载完成', event)
}

const handleError = (event: Event): void => {
  console.log('图片加载失败', event)
}

const handleClick = (): void => {
  console.log('图片被点击')
}
</script>

<template>
  <view class="demo-section">
    <TImage 
      src="https://via.placeholder.com/300x200" 
      width="300rpx" 
      height="200rpx"
      @load="handleLoad"
      @error="handleError"
      @click="handleClick"
    />
  </view>
</template>

<style lang="scss" scoped>
.demo-section {
  padding: 32rpx;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| src | 图片链接 | string | - | - |
| mode | 图片裁剪、缩放的模式 | string | `scaleToFill` / `aspectFit` / `aspectFill` / `widthFix` / `heightFix` / `top` / `bottom` / `center` / `left` / `right` / `top left` / `top right` / `bottom left` / `bottom right` | `aspectFill` |
| width | 图片宽度 | string / number | - | - |
| height | 图片高度 | string / number | - | - |
| shape | 图片形状 | string | `square` / `round` / `circle` | `square` |
| radius | 圆角大小（仅 shape 为 square 时有效） | string / number | - | - |
| showLoading | 是否显示加载中状态 | boolean | - | `true` |
| showError | 是否显示加载失败状态 | boolean | - | `true` |
| lazyLoad | 是否开启懒加载 | boolean | - | `false` |
| loadingText | 加载中提示文本 | string | - | `加载中...` |
| errorText | 加载失败提示文本 | string | - | `加载失败` |
| previewable | 是否可预览 | boolean | - | `false` |
| previewList | 预览图片列表 | string[] | - | - |
| previewIndex | 当前预览图片索引 | number | - | `0` |
| customClass | 自定义类名 | string | - | - |
| customStyle | 自定义样式 | string | - | - |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| load | 图片加载完成时触发 | (event: Event) => void |
| error | 图片加载失败时触发 | (event: Event) => void |
| click | 点击图片时触发 | - |
| preview | 预览图片时触发 | - |

## 注意事项

1. 图片地址支持网络图片和本地图片
2. `widthFix` 模式下，高度会自动计算，无需设置 height
3. `heightFix` 模式下，宽度会自动计算，无需设置 width
4. 圆形图片（`shape="circle"`）建议宽高相等
5. 懒加载功能需要图片在可视区域外才会生效
6. 预览功能需要配合 `previewList` 使用

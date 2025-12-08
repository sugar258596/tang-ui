# Loading 加载

用于显示加载状态的组件，支持全屏加载和局部加载，可自定义加载图标大小、颜色和提示文字。

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

最简单的加载状态展示。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const loading = ref<boolean>(true)
</script>

<template>
  <TLoading :loading="loading" />
</template>
```

## 加载文字

可以添加加载提示文字。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const loading = ref<boolean>(true)
</script>

<template>
  <TLoading :loading="loading" text="加载中..." />
</template>
```

## 不同尺寸

提供三种预设尺寸：small、medium、large。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const loading = ref<boolean>(true)
</script>

<template>
  <view class="demo-column">
    <TLoading :loading="loading" size="small" text="小尺寸" />
    <TLoading :loading="loading" size="medium" text="中等尺寸" />
    <TLoading :loading="loading" size="large" text="大尺寸" />
  </view>
</template>

<style lang="scss" scoped>
.demo-column {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>
```

## 自定义颜色

可以自定义加载图标的颜色。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const loading = ref<boolean>(true)
</script>

<template>
  <view class="demo-column">
    <TLoading :loading="loading" color="#409eff" text="蓝色" />
    <TLoading :loading="loading" color="#67c23a" text="绿色" />
    <TLoading :loading="loading" color="#e6a23c" text="橙色" />
    <TLoading :loading="loading" color="#f56c6c" text="红色" />
  </view>
</template>

<style lang="scss" scoped>
.demo-column {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>
```

## 全屏加载

设置 `fullscreen` 属性可以显示全屏加载。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const loading = ref<boolean>(false)

const showLoading = (): void => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 3000)
}
</script>

<template>
  <view>
    <TButton text="显示全屏加载" @click="showLoading" />
    <TLoading :loading="loading" fullscreen text="加载中..." />
  </view>
</template>
```

## 自定义遮罩

可以控制是否显示遮罩层，以及自定义遮罩层的背景色。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const loading1 = ref<boolean>(true)
const loading2 = ref<boolean>(true)
const loading3 = ref<boolean>(true)
</script>

<template>
  <view class="demo-column">
    <!-- 无遮罩 -->
    <view class="demo-box">
      <TLoading :loading="loading1" :mask="false" text="无遮罩" />
      <text>这是一些内容</text>
    </view>

    <!-- 半透明白色遮罩 -->
    <view class="demo-box">
      <TLoading 
        :loading="loading2" 
        mask-bg-color="rgba(255, 255, 255, 0.9)" 
        text="白色遮罩" 
      />
      <text>这是一些内容</text>
    </view>

    <!-- 半透明黑色遮罩 -->
    <view class="demo-box">
      <TLoading 
        :loading="loading3" 
        mask-bg-color="rgba(0, 0, 0, 0.5)" 
        color="#ffffff"
        text="黑色遮罩" 
      />
      <text>这是一些内容</text>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.demo-column {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.demo-box {
  position: relative;
  height: 200px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
```

## 局部加载

在容器内显示局部加载状态。

```vue
<script setup lang="uts">
import { ref } from 'vue'

const loading = ref<boolean>(false)

const loadData = (): void => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>

<template>
  <view class="demo-container">
    <TButton text="加载数据" @click="loadData" />
    
    <view class="content-box">
      <TLoading :loading="loading" text="加载中..." />
      <view v-if="!loading" class="content">
        <text>这是加载完成后的内容</text>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.content-box {
  position: relative;
  min-height: 200px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  padding: 20px;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| loading | 是否显示加载 | `boolean` | - | `false` |
| text | 加载文字提示 | `string` | - | `''` |
| size | 加载图标大小 | `string` | `small` / `medium` / `large` | `medium` |
| color | 加载图标颜色 | `string` | - | `#409eff` |
| fullscreen | 是否全屏加载 | `boolean` | - | `false` |
| mask | 是否显示遮罩层 | `boolean` | - | `true` |
| maskBgColor | 遮罩层背景色 | `string` | - | `rgba(255, 255, 255, 0.9)` |

## 注意事项

1. 全屏加载时，会自动添加固定定位，覆盖整个屏幕
2. 局部加载时，需要在父容器上设置 `position: relative`
3. 遮罩层默认为半透明白色，可以通过 `maskBgColor` 自定义
4. 当 `loading` 为 `false` 时，组件不会渲染任何内容
5. 加载图标使用 CSS 动画实现，性能较好
6. 建议在数据请求、页面切换等场景使用全屏加载
7. 在列表、卡片等局部区域使用局部加载

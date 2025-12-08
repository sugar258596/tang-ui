# NavBar 导航栏

顶部导航栏组件，用于页面顶部展示标题、返回按钮和操作按钮。支持固定定位、自定义左右内容等功能。

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

最简单的导航栏用法，只显示标题。

```vue
<script setup lang="uts">
</script>

<template>
  <view>
    <TNavBar title="页面标题" />
  </view>
</template>
```

## 左侧返回按钮

显示左侧返回按钮，常用于页面返回操作。

```vue
<script setup lang="uts">
const handleClickLeft = (): void => {
  uni.navigateBack()
}
</script>

<template>
  <view>
    <TNavBar 
      title="页面标题" 
      left-icon="←" 
      left-text="返回" 
      @click-left="handleClickLeft" 
    />
  </view>
</template>
```

## 右侧按钮

显示右侧操作按钮。

```vue
<script setup lang="uts">
const handleClickRight = (): void => {
  uni.showToast({ 
    title: '点击右侧按钮', 
    icon: 'none' 
  })
}
</script>

<template>
  <view>
    <TNavBar 
      title="页面标题" 
      right-text="更多" 
      @click-right="handleClickRight" 
    />
  </view>
</template>
```

## 左右按钮

同时显示左侧返回按钮和右侧操作按钮。

```vue
<script setup lang="uts">
const handleClickLeft = (): void => {
  uni.navigateBack()
}

const handleClickRight = (): void => {
  uni.showToast({ 
    title: '点击右侧按钮', 
    icon: 'none' 
  })
}
</script>

<template>
  <view>
    <TNavBar 
      title="页面标题" 
      left-icon="←" 
      left-text="返回"
      right-text="分享"
      @click-left="handleClickLeft"
      @click-right="handleClickRight" 
    />
  </view>
</template>
```

## 使用图标

可以在左右两侧使用图标。

```vue
<script setup lang="uts">
const handleClickLeft = (): void => {
  uni.navigateBack()
}

const handleClickRight = (): void => {
  uni.showToast({ 
    title: '点击搜索', 
    icon: 'none' 
  })
}
</script>

<template>
  <view>
    <TNavBar 
      title="页面标题" 
      left-icon="←"
      right-icon="🔍"
      @click-left="handleClickLeft"
      @click-right="handleClickRight" 
    />
  </view>
</template>
```

## 固定定位

将导航栏固定在页面顶部。

```vue
<script setup lang="uts">
</script>

<template>
  <view>
    <TNavBar 
      title="页面标题" 
      :fixed="true"
      :placeholder="true"
    />
    
    <view class="page-content">
      <text>页面内容</text>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.page-content {
  padding: 20px;
}
</style>
```

## 自定义左侧内容

使用 `left` 插槽自定义左侧内容。

```vue
<script setup lang="uts">
const handleBack = (): void => {
  uni.navigateBack()
}
</script>

<template>
  <view>
    <TNavBar title="页面标题">
      <template #left>
        <view class="custom-left" @click="handleBack">
          <text class="icon">🏠</text>
          <text class="text">首页</text>
        </view>
      </template>
    </TNavBar>
  </view>
</template>

<style lang="scss" scoped>
.custom-left {
  display: flex;
  align-items: center;
  gap: 4px;
  
  .icon {
    font-size: 18px;
  }
  
  .text {
    font-size: 14px;
    color: #1890ff;
  }
}
</style>
```

## 自定义标题

使用 `title` 插槽自定义标题内容。

```vue
<script setup lang="uts">
</script>

<template>
  <view>
    <TNavBar>
      <template #title>
        <view class="custom-title">
          <text class="main-title">自定义标题</text>
          <text class="sub-title">副标题</text>
        </view>
      </template>
    </TNavBar>
  </view>
</template>

<style lang="scss" scoped>
.custom-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .main-title {
    font-size: 16px;
    font-weight: 600;
    color: #323233;
  }
  
  .sub-title {
    font-size: 12px;
    color: #969799;
    margin-top: 2px;
  }
}
</style>
```

## 自定义右侧内容

使用 `right` 插槽自定义右侧内容。

```vue
<script setup lang="uts">
const handleSearch = (): void => {
  uni.showToast({ 
    title: '搜索', 
    icon: 'none' 
  })
}

const handleShare = (): void => {
  uni.showToast({ 
    title: '分享', 
    icon: 'none' 
  })
}
</script>

<template>
  <view>
    <TNavBar title="页面标题">
      <template #right>
        <view class="custom-right">
          <text class="icon" @click="handleSearch">🔍</text>
          <text class="icon" @click="handleShare">📤</text>
        </view>
      </template>
    </TNavBar>
  </view>
</template>

<style lang="scss" scoped>
.custom-right {
  display: flex;
  align-items: center;
  gap: 16px;
  
  .icon {
    font-size: 18px;
    cursor: pointer;
  }
}
</style>
```

## 自定义样式

可以通过 `customClass` 和 `customStyle` 自定义导航栏样式。

```vue
<script setup lang="uts">
</script>

<template>
  <view>
    <TNavBar 
      title="自定义样式" 
      left-icon="←"
      left-text="返回"
      custom-style="background: linear-gradient(to right, #667eea, #764ba2); border: none;"
    />
  </view>
</template>
```

## 设置层级

可以通过 `zIndex` 设置导航栏的层级。

```vue
<script setup lang="uts">
</script>

<template>
  <view>
    <TNavBar 
      title="页面标题" 
      :fixed="true"
      :placeholder="true"
      :z-index="999"
    />
  </view>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| title | 导航栏标题 | `string` | - | `''` |
| leftText | 左侧文字 | `string` | - | `''` |
| rightText | 右侧文字 | `string` | - | `''` |
| leftIcon | 左侧图标 | `string` | - | `''` |
| rightIcon | 右侧图标 | `string` | - | `''` |
| fixed | 是否固定在顶部 | `boolean` | - | `false` |
| placeholder | 固定时是否生成占位元素 | `boolean` | - | `false` |
| zIndex | 导航栏层级 | `number` | - | `1` |
| safeAreaInsetTop | 是否开启顶部安全区适配 | `boolean` | - | `false` |
| customClass | 自定义类名 | `string` | - | `''` |
| customStyle | 自定义样式 | `string` | - | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click-left | 点击左侧按钮时触发 | `() => void` |
| click-right | 点击右侧按钮时触发 | `() => void` |

### Slots

| 名称 | 说明 |
|------|------|
| left | 自定义左侧内容 |
| title | 自定义标题内容 |
| right | 自定义右侧内容 |

## 注意事项

1. 导航栏默认高度为 44px，使用固定定位时建议开启 `placeholder` 避免内容被遮挡
2. 使用 `fixed` 固定定位时，导航栏会脱离文档流，需要配合 `placeholder` 生成占位元素
3. 左右两侧的点击区域最小宽度为 60px，确保良好的点击体验
4. 使用插槽自定义内容时，需要自行处理样式和点击事件
5. `leftIcon` 和 `rightIcon` 可以使用 emoji 或自定义图标字体
6. 在小程序中使用时，建议开启 `safeAreaInsetTop` 适配刘海屏
7. 自定义样式时注意保持导航栏的可读性和可用性
8. 导航栏的 `zIndex` 默认为 1，如果页面有其他固定定位元素，可能需要调整层级

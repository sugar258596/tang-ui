# 触点反馈样式指南

提升 App 用户体验的触点反馈样式系统。

## 📱 基础触点样式

### 1. 通用触点反馈

```vue
<!-- 基础触点：透明度 + 轻微缩放 -->
<view class="tap-active">点击我</view>

<!-- 仅透明度变化 -->
<view class="tap-opacity">点击我</view>

<!-- 仅缩放变化 -->
<view class="tap-scale">点击我</view>
```

### 2. 按钮专用

```vue
<!-- 标准按钮反馈 -->
<button class="tap-button bg-primary text-white rounded-lg px-6 py-3">
  确认
</button>

<!-- 3D 按压效果 -->
<button class="tap-3d bg-white shadow-md rounded-lg px-6 py-3">
  立体按钮
</button>
```

### 3. 卡片/列表

```vue
<!-- 卡片触点 -->
<view class="tap-card bg-white rounded-xl p-4 shadow">
  <text>卡片内容</text>
</view>

<!-- 列表项触点 -->
<view class="tap-list-item p-4 flex items-center">
  <text>列表项</text>
</view>
```

## 🎨 高级效果

### 涟漪效果

```vue
<!-- 浅色涟漪（适合深色背景） -->
<view class="tap-ripple bg-primary text-white rounded-lg p-4">
  点击查看涟漪
</view>

<!-- 深色涟漪（适合浅色背景） -->
<view class="tap-ripple-dark bg-white rounded-lg p-4">
  点击查看涟漪
</view>
```

### 图标触点

```vue
<!-- 图标专用反馈 -->
<view class="tap-icon w-12 h-12 flex items-center justify-center">
  <image src="/static/icon/heart.png" class="w-6 h-6" />
</view>
```

### 弹跳效果

```vue
<!-- 弹性反馈 -->
<view class="tap-bounce bg-white rounded-full p-4 shadow">
  <image src="/static/icon/add.png" class="w-8 h-8" />
</view>
```

## 🎯 场景化应用

### 底部导航栏

```vue
<view class="fixed bottom-0 left-0 right-0 flex bg-white border-t">
  <view
    v-for="item in tabs"
    class="flex-1 tap-tab flex flex-col items-center py-2"
    :class="{ 'text-primary': current === item.id }"
  >
    <image :src="item.icon" class="w-6 h-6 mb-1" />
    <text class="text-xs">{{ item.name }}</text>
  </view>
</view>
```

### 宫格布局

```vue
<view class="grid grid-cols-4 gap-4 p-4">
  <view
    v-for="item in menus"
    class="tap-scale flex flex-col items-center"
  >
    <view class="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-2">
      <image :src="item.icon" class="w-8 h-8" />
    </view>
    <text class="text-xs text-gray-600">{{ item.name }}</text>
  </view>
</view>
```

### 商品卡片

```vue
<view class="tap-card bg-white rounded-xl overflow-hidden shadow">
  <image :src="product.image" class="w-full h-48 object-cover" />
  <view class="p-4">
    <text class="text-lg font-bold line-clamp-2">{{ product.name }}</text>
    <view class="flex items-center justify-between mt-3">
      <text class="text-red-500 text-xl font-bold">¥{{ product.price }}</text>
      <view class="tap-icon bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
        <text>+</text>
      </view>
    </view>
  </view>
</view>
```

### 浮动按钮

```vue
<!-- 带脉冲动画的 FAB -->
<view class="fixed bottom-32 right-8 tap-pulse tap-bounce">
  <view class="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg">
    <text class="text-white text-2xl">+</text>
  </view>
</view>
```

### 轮播指示器

```vue
<view class="flex justify-center gap-2 mt-4">
  <view
    v-for="(item, index) in banners"
    class="tap-scale transition-all"
    :class="current === index ? 'w-8 h-2 bg-primary' : 'w-2 h-2 bg-gray-300'"
  />
</view>
```

## 🛠️ 组合使用

### 高亮 + 缩放

```vue
<view class="tap-combo tap-highlight bg-white rounded-lg p-4">
  组合反馈效果
</view>
```

### 涟漪 + 阴影

```vue
<view class="tap-ripple-dark shadow-md hover:shadow-lg rounded-xl p-6">
  丰富的交互效果
</view>
```

### 悬浮 + 渐变

```vue
<view class="tap-float tap-gradient bg-white rounded-xl p-6 shadow">
  悬浮卡片效果
</view>
```

## 🚫 禁用状态

```vue
<!-- 禁用触点反馈 -->
<button class="tap-disabled bg-gray-300 text-gray-500 rounded-lg px-6 py-3">
  已禁用
</button>

<!-- 条件禁用 -->
<view
  class="tap-button bg-primary text-white rounded-lg px-6 py-3"
  :class="{ 'tap-disabled': isLoading }"
>
  {{ isLoading ? '加载中...' : '提交' }}
</view>
```

## 📊 样式对比

| 样式类           | 效果          | 适用场景      |
| ---------------- | ------------- | ------------- |
| `.tap-active`    | 透明度 + 缩放 | 通用元素      |
| `.tap-button`    | 按钮专用      | 各类按钮      |
| `.tap-card`      | 卡片专用      | 卡片、面板    |
| `.tap-list-item` | 背景高亮      | 列表项        |
| `.tap-icon`      | 强缩放        | 图标、小按钮  |
| `.tap-ripple`    | 涟漪效果      | 重要操作      |
| `.tap-scale`     | 仅缩放        | 图片、图标    |
| `.tap-opacity`   | 仅透明度      | 文本、链接    |
| `.tap-3d`        | 3D 按压       | 立体按钮      |
| `.tap-bounce`    | 弹跳效果      | FAB、特殊按钮 |

## ⚡ 性能优化建议

1. **避免过度使用** - 不是所有元素都需要触点反馈
2. **合理选择** - 根据元素重要性选择合适的反馈强度
3. **保持一致** - 同类元素使用相同的反馈样式
4. **控制动画时长** - 默认 0.15s 已优化，无需修改
5. **减少层级** - 避免在父子元素上同时添加触点样式

## 🎨 自定义调整

如需修改触点参数，编辑 `effects/_touch.scss`：

```scss
// 调整透明度
.tap-opacity {
  &:active {
    opacity: 0.5; // 默认 0.6，可调整为 0.5-0.9
  }
}

// 调整缩放比例
.tap-scale {
  &:active {
    transform: scale(0.92); // 默认 0.95，可调整为 0.9-0.98
  }
}

// 调整动画时长
.tap-active {
  transition: all 0.2s ease; // 默认 0.15s，可调整为 0.1s-0.3s
}
```

## 📱 平台兼容性

- ✅ iOS - 完美支持所有效果
- ✅ Android - 完美支持所有效果
- ⚠️ 小程序 - 部分效果受限（涟漪、悬浮）
- ⚠️ H5 - 使用 `:hover` 替代 `:active`（移动端）

## 🌟 最佳实践

1. **主操作按钮** - 使用 `.tap-button` 或 `.tap-3d`
2. **卡片列表** - 使用 `.tap-card` 或 `.tap-list-item`
3. **图标按钮** - 使用 `.tap-icon`
4. **底部导航** - 使用 `.tap-tab`
5. **浮动按钮** - 使用 `.tap-bounce` + `.tap-pulse`
6. **轻量交互** - 使用 `.tap-opacity-light`
7. **重要操作** - 使用 `.tap-ripple` + `.tap-button`

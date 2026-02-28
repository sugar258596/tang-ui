# 样式系统目录结构

模块化的 Tailwind-like 原子类样式系统，便于维护和扩展。

## 📁 目录结构

```
style/
├── index.scss              # 主入口文件（导入所有模块）
├── _variables.scss         # 设计变量（间距、字体、颜色等）
├── layout/                 # 布局相关
│   ├── _flexbox.scss      # Flex 布局
│   └── _sizing.scss       # 尺寸、定位、溢出
├── spacing/               # 间距相关
│   ├── _margin.scss       # 外边距
│   └── _padding.scss      # 内边距、间隙
├── typography/            # 排版相关
│   ├── _font.scss         # 字体大小、粗细、行高
│   └── _text.scss         # 文本对齐、装饰、溢出
├── colors/                # 颜色相关
│   └── _colors.scss       # 文本色、背景色、边框色、圆角
├── effects/               # 效果相关
│   ├── _shadow.scss       # 阴影效果
│   ├── _opacity.scss      # 透明度、过渡、变换
│   ├── _touch.scss        # 触点反馈（重要✨）
│   └── TOUCH_GUIDE.md     # 触点样式使用指南
├── grid/                  # 网格布局
│   └── _grid.scss         # Grid 布局系统
├── utilities/             # 工具类
│   └── _common.scss       # 通用工具（z-index、指针、安全区等）
└── pages/                 # 页面专属样式
    └── auth.scss          # 认证页面样式（登录、注册、忘记密码）
```

## 🎨 模块说明

### 1. **变量定义** (`_variables.scss`)

- 间距变量：0-96 的间距值
- 字体大小：xs 到 9xl
- 颜色系统：gray、red、blue、green、yellow、purple
- 圆角值：none 到 full

### 2. **布局模块** (`layout/`)

- **Flexbox** (`_flexbox.scss`)
  - 容器：`.flex`、`.inline-flex`
  - 方向：`.flex-row`、`.flex-col`
  - 对齐：`.justify-center`、`.items-center`
  - 顺序：`.order-1`

- **尺寸** (`_sizing.scss`)
  - 宽高：`.w-full`、`.h-screen`
  - 定位：`.absolute`、`.fixed`
  - 溢出：`.overflow-hidden`

### 3. **间距模块** (`spacing/`)

- **Margin** (`_margin.scss`)
  - 全方向：`.m-4`
  - 单方向：`.mt-4`、`.mr-4`
  - 负值：`.-mt-4`
  - Auto：`.mx-auto`

- **Padding** (`_padding.scss`)
  - 全方向：`.p-4`
  - 单方向：`.pt-4`、`.px-4`
  - 间隙：`.gap-4`

### 4. **排版模块** (`typography/`)

- **字体** (`_font.scss`)
  - 大小：`.text-xs` 到 `.text-9xl`
  - 粗细：`.font-normal`、`.font-bold`
  - 行高：`.leading-normal`

- **文本** (`_text.scss`)
  - 对齐：`.text-center`
  - 装饰：`.underline`
  - 溢出：`.truncate`、`.line-clamp-2`

### 5. **颜色模块** (`colors/`)

- 文本颜色：`.text-gray-500`、`.text-primary`
- 背景颜色：`.bg-white`、`.bg-primary`
- 边框：`.border`、`.border-gray-200`
- 圆角：`.rounded`、`.rounded-full`

### 6. **效果模块** (`effects/`)

- **阴影** (`_shadow.scss`)
  - `.shadow-sm`、`.shadow`、`.shadow-lg`

- **透明度与动画** (`_opacity.scss`)
  - 透明度：`.opacity-50`
  - 过渡：`.transition`、`.transition-all`
  - 变换：`.scale-110`、`.rotate-45`

- **触点反馈** (`_touch.scss`) ⭐ 新增
  - 通用：`.tap-active`、`.tap-scale`、`.tap-opacity`
  - 按钮：`.tap-button`、`.tap-3d`
  - 卡片：`.tap-card`、`.tap-list-item`
  - 图标：`.tap-icon`、`.tap-bounce`
  - 特效：`.tap-ripple`、`.tap-pulse`
  - 查看详细指南：`effects/TOUCH_GUIDE.md`

### 7. **网格布局** (`grid/`)

- 网格容器：`.grid`
- 列数：`.grid-cols-3`
- 跨度：`.col-span-2`
- 对齐：`.place-items-center`

### 8. **工具类** (`utilities/`)

- Z-index：`.z-10`、`.z-50`
- 指针：`.pointer-events-none`
- 安全区域：`.safe-area-top`、`.safe-area-bottom`
- 页面容器：`.page`

### 9. **页面专属样式** (`pages/`)

- **认证页面** (`auth.scss`)
  - 登录、注册、忘记密码页面的专属样式
  - 包含：`.auth-container`、`.logo-bg`、`.form-card`
  - 按钮样式：`.submit-btn`、`.code-btn`、`.deleted-btn`
  - 支持深色模式和响应式设计

## 🚀 使用方式

### 在页面中使用

```vue
<template>
  <view class="page">
    <!-- 带触点反馈的按钮 -->
    <view class="tap-button bg-primary text-white rounded-lg py-3 px-6">
      <text class="text-white">点击我</text>
    </view>

    <!-- 可点击的卡片 -->
    <view class="tap-card bg-white rounded-xl shadow-md p-6 m-4">
      <text class="text-2xl font-bold mb-2">卡片标题</text>
      <text class="text-gray-600 line-clamp-2">卡片内容...</text>
    </view>

    <!-- 宫格菜单 -->
    <view class="grid grid-cols-4 gap-4 p-4">
      <view class="tap-scale flex flex-col items-center">
        <view
          class="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-2"
        >
          <text>📱</text>
        </view>
        <text class="text-xs">菜单</text>
      </view>
    </view>

    <!-- 列表项 -->
    <view class="tap-list-item flex items-center justify-between p-4 bg-white">
      <text>设置</text>
      <text class="text-gray-400">›</text>
    </view>
  </view>
</template>
```

## 🔧 修改和扩展

### 添加新样式

1. 确定样式类别（布局、间距、颜色等）
2. 在对应模块文件中添加样式
3. 不需要修改 `index.scss`（已自动导入）

### 修改变量

在 `_variables.scss` 中修改设计变量：

```scss
$spacings: (
  // 添加新的间距值
  128: 512rpx
);

$colors: (
  // 添加新的颜色
  custom-blue: #1e90ff
);
```

### 创建新模块

1. 在对应目录创建新的 `.scss` 文件
2. 在 `index.scss` 中添加 `@import` 语句

## 📝 命名规范

- 使用小写字母和连字符（kebab-case）
- 遵循 Tailwind 命名约定
- 保持语义化和一致性

## 💡 最佳实践

1. **优先使用原子类**，避免自定义样式
2. **组合使用**多个原子类实现复杂效果
3. **保持一致性**，使用预定义的间距和颜色值
4. **响应式设计**，使用百分比和 flex 布局
5. **性能优化**，避免过度嵌套

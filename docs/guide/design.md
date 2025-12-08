# 设计规范

UniApp X UI 遵循统一的设计规范，确保组件库的一致性和易用性。本文档详细说明了组件库的设计原则、颜色系统、尺寸规范、间距规范和字体规范。

## 设计原则

### 1. 一致性 Consistency

**视觉一致性**：所有组件遵循统一的视觉风格，包括颜色、字体、圆角、阴影等设计元素。

**交互一致性**：相同类型的交互行为在不同组件中保持一致，降低用户的学习成本。

**代码一致性**：组件 API 设计遵循统一的命名规范和使用模式。

### 2. 简洁性 Simplicity

**视觉简洁**：避免过度装饰，保持界面清爽简洁。

**交互简洁**：减少不必要的操作步骤，让用户快速完成任务。

**API 简洁**：提供简单直观的 API，降低使用门槛。

### 3. 易用性 Usability

**易于理解**：组件的功能和用途一目了然。

**易于操作**：交互区域足够大，操作反馈及时明确。

**易于学习**：提供完整的文档和示例，帮助开发者快速上手。

### 4. 灵活性 Flexibility

**可配置**：通过 Props 提供丰富的配置选项。

**可扩展**：通过 Slots 支持自定义内容。

**可定制**：支持主题定制和样式覆盖。

### 5. 性能优先 Performance

**轻量级**：组件实现精简，避免不必要的依赖。

**高效渲染**：优化渲染性能，确保流畅的用户体验。

**按需加载**：支持按需引入，减小包体积。

## 颜色规范

### 主题色 Brand Colors

主题色是品牌色彩的体现，用于关键操作和重要信息的展示。

<div class="color-palette">
  <div class="color-item">
    <div class="color-block" style="background-color: #007aff;"></div>
    <div class="color-info">
      <div class="color-name">Primary 主色</div>
      <div class="color-value">#007AFF</div>
      <div class="color-usage">用于主要按钮、链接、选中状态</div>
    </div>
  </div>
</div>

**使用场景**：
- 主要操作按钮
- 重要信息提示
- 选中状态标识
- 链接文字

### 功能色 Functional Colors

功能色用于传达特定的功能含义和状态信息。

<div class="color-palette">
  <div class="color-item">
    <div class="color-block" style="background-color: #4cd964;"></div>
    <div class="color-info">
      <div class="color-name">Success 成功</div>
      <div class="color-value">#4CD964</div>
      <div class="color-usage">成功状态、正向操作</div>
    </div>
  </div>
  
  <div class="color-item">
    <div class="color-block" style="background-color: #f0ad4e;"></div>
    <div class="color-info">
      <div class="color-name">Warning 警告</div>
      <div class="color-value">#F0AD4E</div>
      <div class="color-usage">警告信息、需要注意的操作</div>
    </div>
  </div>
  
  <div class="color-item">
    <div class="color-block" style="background-color: #dd524d;"></div>
    <div class="color-info">
      <div class="color-name">Danger 危险</div>
      <div class="color-value">#DD524D</div>
      <div class="color-usage">错误状态、危险操作</div>
    </div>
  </div>
  
  <div class="color-item">
    <div class="color-block" style="background-color: #909399;"></div>
    <div class="color-info">
      <div class="color-name">Info 信息</div>
      <div class="color-value">#909399</div>
      <div class="color-usage">一般信息提示</div>
    </div>
  </div>
</div>

**使用场景**：
- **Success**：成功提示、完成状态、正向反馈
- **Warning**：警告提示、需要注意的信息
- **Danger**：错误提示、删除操作、危险警告
- **Info**：一般信息、辅助说明

### 中性色 Neutral Colors

中性色用于文本、背景、边框等基础元素。

#### 文本颜色

<div class="color-palette">
  <div class="color-item">
    <div class="color-block" style="background-color: #303133;"></div>
    <div class="color-info">
      <div class="color-name">主要文本</div>
      <div class="color-value">#303133</div>
      <div class="color-usage">标题、重要文本</div>
    </div>
  </div>
  
  <div class="color-item">
    <div class="color-block" style="background-color: #606266;"></div>
    <div class="color-info">
      <div class="color-name">常规文本</div>
      <div class="color-value">#606266</div>
      <div class="color-usage">正文、段落文本</div>
    </div>
  </div>
  
  <div class="color-item">
    <div class="color-block" style="background-color: #909399;"></div>
    <div class="color-info">
      <div class="color-name">次要文本</div>
      <div class="color-value">#909399</div>
      <div class="color-usage">辅助文本、说明文字</div>
    </div>
  </div>
  
  <div class="color-item">
    <div class="color-block" style="background-color: #c0c4cc;"></div>
    <div class="color-info">
      <div class="color-name">占位文本</div>
      <div class="color-value">#C0C4CC</div>
      <div class="color-usage">输入框占位符、禁用文本</div>
    </div>
  </div>
</div>

#### 边框颜色

<div class="color-palette">
  <div class="color-item">
    <div class="color-block" style="background-color: #dcdfe6; border: 1px solid #ccc;"></div>
    <div class="color-info">
      <div class="color-name">基础边框</div>
      <div class="color-value">#DCDFE6</div>
      <div class="color-usage">默认边框颜色</div>
    </div>
  </div>
  
  <div class="color-item">
    <div class="color-block" style="background-color: #e4e7ed; border: 1px solid #ccc;"></div>
    <div class="color-info">
      <div class="color-name">浅色边框</div>
      <div class="color-value">#E4E7ED</div>
      <div class="color-usage">分割线、卡片边框</div>
    </div>
  </div>
  
  <div class="color-item">
    <div class="color-block" style="background-color: #ebeef5; border: 1px solid #ccc;"></div>
    <div class="color-info">
      <div class="color-name">更浅边框</div>
      <div class="color-value">#EBEEF5</div>
      <div class="color-usage">表格边框、列表分隔</div>
    </div>
  </div>
  
  <div class="color-item">
    <div class="color-block" style="background-color: #f2f6fc; border: 1px solid #ccc;"></div>
    <div class="color-info">
      <div class="color-name">极浅边框</div>
      <div class="color-value">#F2F6FC</div>
      <div class="color-usage">背景分隔</div>
    </div>
  </div>
</div>

#### 背景颜色

<div class="color-palette">
  <div class="color-item">
    <div class="color-block" style="background-color: #ffffff; border: 1px solid #ccc;"></div>
    <div class="color-info">
      <div class="color-name">白色背景</div>
      <div class="color-value">#FFFFFF</div>
      <div class="color-usage">卡片、弹窗、输入框</div>
    </div>
  </div>
  
  <div class="color-item">
    <div class="color-block" style="background-color: #f5f7fa; border: 1px solid #ccc;"></div>
    <div class="color-info">
      <div class="color-name">浅灰背景</div>
      <div class="color-value">#F5F7FA</div>
      <div class="color-usage">禁用状态、次要区域</div>
    </div>
  </div>
  
  <div class="color-item">
    <div class="color-block" style="background-color: #f2f3f5; border: 1px solid #ccc;"></div>
    <div class="color-info">
      <div class="color-name">页面背景</div>
      <div class="color-value">#F2F3F5</div>
      <div class="color-usage">页面底色</div>
    </div>
  </div>
  
  <div class="color-item">
    <div class="color-block" style="background-color: rgba(0, 0, 0, 0.4);"></div>
    <div class="color-info">
      <div class="color-name">遮罩背景</div>
      <div class="color-value">rgba(0, 0, 0, 0.4)</div>
      <div class="color-usage">弹窗遮罩、图片遮罩</div>
    </div>
  </div>
</div>

### 颜色使用建议

1. **保持克制**：不要在一个界面中使用过多颜色，一般不超过 3-4 种主要颜色
2. **语义明确**：使用功能色时要符合其语义，如成功用绿色、错误用红色
3. **对比度**：确保文本和背景有足够的对比度，提高可读性
4. **无障碍**：考虑色盲用户，不要仅依靠颜色传达信息

## 尺寸规范

组件库提供四种标准尺寸，适用于不同的使用场景。

### 尺寸体系

| 尺寸 | 英文 | 高度 | 内边距 | 字体大小 | 使用场景 |
|------|------|------|--------|----------|----------|
| 大 | Large | 88rpx | 32rpx | 32rpx | 重要操作、页面主按钮 |
| 中 | Medium | 72rpx | 24rpx | 28rpx | 常规操作、表单组件（默认） |
| 小 | Small | 56rpx | 16rpx | 24rpx | 次要操作、工具栏按钮 |
| 迷你 | Mini | 48rpx | 12rpx | 24rpx | 标签、徽章、内联按钮 |

### 尺寸使用示例

```vue
<template>
  <view class="demo">
    <!-- 大尺寸 - 用于重要操作 -->
    <TButton text="大按钮" size="large" type="primary" />
    
    <!-- 中尺寸 - 默认尺寸，用于常规操作 -->
    <TButton text="中按钮" size="medium" type="primary" />
    
    <!-- 小尺寸 - 用于次要操作 -->
    <TButton text="小按钮" size="small" type="primary" />
    
    <!-- 迷你尺寸 - 用于紧凑布局 -->
    <TButton text="迷你" size="mini" type="primary" />
  </view>
</template>
```

### 尺寸选择建议

1. **页面主操作**：使用 Large 尺寸，突出重要性
2. **表单组件**：使用 Medium 尺寸（默认），保持统一
3. **工具栏按钮**：使用 Small 尺寸，节省空间
4. **内联元素**：使用 Mini 尺寸，与文本协调

## 间距规范

统一的间距系统确保界面的节奏感和呼吸感。

### 间距体系

组件库采用 8rpx 为基础单位的间距系统：

| 名称 | 值 | 使用场景 |
|------|-----|----------|
| xs | 8rpx | 极小间距，图标与文字 |
| sm | 16rpx | 小间距，相关元素 |
| md | 24rpx | 中等间距，组件内部 |
| lg | 32rpx | 大间距，组件之间 |
| xl | 48rpx | 超大间距，区块之间 |
| 2xl | 64rpx | 巨大间距，页面分区 |

### 间距使用原则

#### 1. 组件内部间距

组件内部元素的间距应该保持紧凑，使用较小的间距值：

```vue
<template>
  <view class="card">
    <!-- 标题和内容之间：16rpx -->
    <view class="card-title">标题</view>
    <view class="card-content">内容</view>
  </view>
</template>

<style lang="scss" scoped>
.card {
  padding: 24rpx;  // 组件内边距：md
  
  .card-title {
    margin-bottom: 16rpx;  // 标题和内容间距：sm
  }
}
</style>
```

#### 2. 组件之间间距

不同组件之间使用较大的间距，增强层次感：

```vue
<template>
  <view class="page">
    <TCard class="section">...</TCard>
    <TCard class="section">...</TCard>
    <TCard class="section">...</TCard>
  </view>
</template>

<style lang="scss" scoped>
.page {
  padding: 32rpx;  // 页面内边距：lg
  
  .section {
    margin-bottom: 32rpx;  // 组件间距：lg
    
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
```

#### 3. 页面布局间距

页面级别的布局使用更大的间距：

```vue
<template>
  <view class="page">
    <view class="header">...</view>
    <view class="content">...</view>
    <view class="footer">...</view>
  </view>
</template>

<style lang="scss" scoped>
.page {
  .header {
    margin-bottom: 48rpx;  // 区块间距：xl
  }
  
  .content {
    margin-bottom: 48rpx;  // 区块间距：xl
  }
}
</style>
```

### 间距工具类

组件库提供了间距工具类，方便快速应用间距：

```vue
<template>
  <view>
    <!-- 外边距 -->
    <view class="m-lg">外边距 32rpx</view>
    <view class="mt-md">上外边距 24rpx</view>
    <view class="mb-sm">下外边距 16rpx</view>
    
    <!-- 内边距 -->
    <view class="p-lg">内边距 32rpx</view>
    <view class="px-md">水平内边距 24rpx</view>
    <view class="py-sm">垂直内边距 16rpx</view>
  </view>
</template>
```

## 字体规范

### 字体大小

组件库使用响应式字体大小系统：

| 名称 | 大小 | 行高 | 使用场景 |
|------|------|------|----------|
| xs | 20rpx | 28rpx | 辅助文字、标签 |
| sm | 24rpx | 32rpx | 次要文本、说明 |
| base | 28rpx | 40rpx | 正文、段落（默认） |
| lg | 32rpx | 44rpx | 小标题、强调文本 |
| xl | 36rpx | 48rpx | 标题、重要信息 |
| 2xl | 40rpx | 52rpx | 大标题 |
| 3xl | 48rpx | 60rpx | 特大标题 |

### 字体粗细

| 名称 | 值 | 使用场景 |
|------|-----|----------|
| Light | 300 | 辅助文字 |
| Normal | 400 | 正文（默认） |
| Medium | 500 | 次要标题 |
| Bold | 700 | 标题、强调 |

### 字体使用示例

```vue
<template>
  <view class="demo">
    <!-- 标题 -->
    <TText text="大标题" size="2xl" weight="bold" />
    
    <!-- 小标题 -->
    <TText text="小标题" size="lg" weight="medium" />
    
    <!-- 正文 -->
    <TText text="这是正文内容" size="base" />
    
    <!-- 辅助文字 -->
    <TText text="辅助说明" size="sm" color="secondary" />
  </view>
</template>
```

### 字体使用建议

1. **层级分明**：使用不同的字体大小和粗细建立清晰的信息层级
2. **保持克制**：一个页面不要使用超过 3-4 种字体大小
3. **行高适当**：确保行高足够，提高可读性（一般为字体大小的 1.4-1.6 倍）
4. **对齐方式**：标题居中或左对齐，正文左对齐

## 圆角规范

统一的圆角使界面更加柔和友好。

| 名称 | 值 | 使用场景 |
|------|-----|----------|
| None | 0 | 无圆角，方形元素 |
| Small | 4rpx | 小元素，标签、徽章 |
| Base | 8rpx | 常规元素，按钮、输入框（默认） |
| Medium | 12rpx | 卡片、面板 |
| Large | 16rpx | 大卡片、弹窗 |
| XLarge | 24rpx | 特大元素 |
| Full | 9999rpx | 圆形元素，头像、圆形按钮 |

## 阴影规范

阴影用于表现层级关系和增强立体感。

| 名称 | 值 | 使用场景 |
|------|-----|----------|
| sm | 0 1px 2px rgba(0,0,0,0.05) | 轻微阴影，悬浮提示 |
| base | 0 2px 4px rgba(0,0,0,0.12) | 基础阴影，卡片 |
| md | 0 4px 6px rgba(0,0,0,0.1) | 中等阴影，下拉菜单 |
| lg | 0 10px 15px rgba(0,0,0,0.1) | 大阴影，弹窗 |
| xl | 0 20px 25px rgba(0,0,0,0.1) | 超大阴影，模态框 |

### 阴影使用建议

1. **层级表达**：使用不同深度的阴影表现元素的层级关系
2. **悬浮状态**：鼠标悬浮时增加阴影，提供视觉反馈
3. **保持克制**：不要过度使用阴影，避免界面过于复杂

## 动画规范

### 动画时长

| 名称 | 时长 | 使用场景 |
|------|------|----------|
| Fast | 150ms | 简单过渡，颜色变化 |
| Base | 300ms | 常规动画，位置移动（默认） |
| Slow | 500ms | 复杂动画，页面切换 |

### 缓动函数

| 名称 | 值 | 使用场景 |
|------|-----|----------|
| Ease | ease | 通用缓动 |
| Ease In | ease-in | 元素进入 |
| Ease Out | ease-out | 元素退出 |
| Ease In Out | ease-in-out | 元素进入和退出 |

### 动画使用建议

1. **性能优先**：优先使用 transform 和 opacity，避免触发重排
2. **时长适中**：动画时长不宜过长，避免影响用户体验
3. **保持一致**：相同类型的动画使用相同的时长和缓动函数

## 响应式设计

### 断点系统

| 断点 | 宽度 | 设备 |
|------|------|------|
| xs | < 768rpx | 小屏手机 |
| sm | ≥ 768rpx | 大屏手机 |
| md | ≥ 1024rpx | 平板 |
| lg | ≥ 1280rpx | 小屏电脑 |
| xl | ≥ 1920rpx | 大屏电脑 |

### 响应式建议

1. **移动优先**：先设计移动端，再适配大屏
2. **弹性布局**：使用 flex 和 grid 布局
3. **相对单位**：使用 rpx 而不是固定像素
4. **测试多端**：在不同设备上测试效果

## 无障碍设计

### 对比度

- 正文文本与背景的对比度至少为 4.5:1
- 大文本（≥ 36rpx）与背景的对比度至少为 3:1

### 触摸目标

- 可点击元素的最小尺寸为 88rpx × 88rpx
- 相邻可点击元素之间至少有 16rpx 的间距

### 语义化

- 使用语义化的 HTML 标签
- 为图片添加 alt 属性
- 为表单元素添加 label

## 设计资源

### Figma 设计稿

我们提供了完整的 Figma 设计稿，包含所有组件的设计规范和示例。

### Sketch 设计稿

我们也提供了 Sketch 版本的设计稿，方便使用 Sketch 的设计师。

### 图标库

组件库使用的图标资源可以在设计稿中找到。

## 总结

遵循统一的设计规范可以：

- ✅ 提高界面的一致性和专业性
- ✅ 降低设计和开发成本
- ✅ 提升用户体验
- ✅ 便于团队协作

建议在开发过程中严格遵循这些规范，如有特殊需求，请与设计团队沟通。

<style scoped>
.color-palette {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 24px 0;
}

.color-item {
  display: flex;
  align-items: center;
  gap: 16px;
}

.color-block {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.color-info {
  flex: 1;
}

.color-name {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
}

.color-value {
  font-size: 14px;
  color: #666;
  font-family: 'Monaco', 'Menlo', monospace;
  margin-bottom: 4px;
}

.color-usage {
  font-size: 13px;
  color: #999;
}
</style>

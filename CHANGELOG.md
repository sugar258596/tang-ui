# 更新日志

## [1.1.7] - 2025-12-25

### 新增
- **TInput**: 支持自定义聚焦状态样式
  - 新增 `focusBorderColor` 属性，自定义聚焦时的边框颜色
  - 新增 `focusBackgroundColor` 属性，自定义聚焦时的背景颜色
  - 新增 `focusBoxShadow` 属性，自定义聚焦时的阴影效果

### 示例
- **TInput**: 添加自定义聚焦状态示例，展示不同的聚焦效果

## [1.1.6] - 2025-12-25

### 新增
- **TForm**: 支持单个配置项的布局配置（layout 和 labelWidth），优先级高于整体配置
- **TForm**: 使用自定义 TSelect 组件替换原生 picker 下拉选择
- **TForm**: 表单项错误时显示红色边框和浅红背景
- **TForm**: 添加错误触发时的抖动动画效果，提升用户体验

### 优化
- **TForm**: 优化表单项 DOM 结构，错误提示独立显示
- **TForm**: 优化标签宽度样式，将宽度应用到 text 元素
- **TForm**: 优化表单验证交互体验
- **TForm**: 修复水平布局时的样式问题

### 修复
- **TForm**: 修复 TSelect 组件 v-model 类型错误

## [1.1.1] - 2025-12-08

### 修复
- **TRadioButton**: 修复单选按钮点击无响应的问题
- **TRadioButton**: 修复选中状态样式不显示的问题
- **TRadioButton**: 修复 `isChecked` 计算逻辑错误
- **TRadioButton**: 修复 CSS 变量未应用到单个按钮模式
- **TRadioButton**: 修复 `.radio-item.active` 类名缺失导致文字颜色不变化
- **TRadioButton**: 展开嵌套 SCSS 选择器，提高兼容性
- **TRadioButton**: 添加 `label` 属性支持，在单个按钮模式下显示标签
- **TForm**: 修复 Radio 组件使用 v-model 绑定问题
- **TForm**: 修复 Checkbox 组件缺少 label 显示
- **TCheckbox**: 添加 label 文本显示支持

### 新增
- **TRadioButton**: 添加完整的 README 文档
- **TRadioButton**: 支持自定义颜色（activeColor、inactiveColor）
- **TForm**: 完善 Radio 和 Checkbox 组件的样式和交互

### 示例
- 修复 radio 示例页面的自定义颜色属性名（color → activeColor）
- 更新 form 示例页面，展示 Radio 和 Checkbox 的正确用法

## [1.0.3] - 2025-12-08

### 修复
- 移除所有 `@` 别名导入，改用相对路径导入
- 修复 `composables/useToast.uts` 中的类型导入路径
- 修复组件间相互引用的导入路径（TGridItem, TActionSheet, TSelect, TCell, VbenFrom）
- 提高包的兼容性和稳定性

## [1.0.1] - 2025-12-08

### 修复
- 修复入口文件，使用 `.uts` 替代 `.js`，符合 uni-app x 规范
- 组件路径更新为 `index.uvue` 而不是 `.vue`
- 移除不支持的 `export { default as }` 语法

### 新增
- 导出 `useTheme`、`useToast`、`useModal` composables
- 导出所有工具函数
- 添加 `components` 数组，列出所有可用组件

### 文档
- 更新使用说明，添加正确的 easycom 配置示例
- 添加工具函数和 composables 使用示例

## [1.0.0] - 2025-12-08

### 首次发布
- 🎉 发布 42+ 个 UI 组件
- 支持 uni-app x
- 完整的 TypeScript 类型支持
- 提供 easycom 自动导入配置

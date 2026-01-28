# 更新日志

## [1.2.4] - 2026-01-27

### 新增

- **TDateTimePicker**: 新增日期范围选择功能
  - 新增 `range` 属性开启范围选择模式
  - 新增 `rangeColor` 属性自定义范围内日期背景色
  - 新增 `startText`、`endText` 属性自定义开始/结束提示文字
  - 新增 `confirmRange` 事件返回范围选择结果
  - 范围选择时显示开始/结束日期信息栏
  - 日历中高亮显示选中范围（开始、结束、范围内）

- **TIcon**: 集成 iconfont 字体图标库
  - 组件内 scoped 样式内联字体定义，不污染全局
  - 支持 `shanchu` 或 `icon-shanchu` 两种写法
  - 新增 `ICON_LIST` 常量导出可用图标列表
  - 当前可用图标：`shanchu`(删除)、`sousuo`(搜索)

- **TSearchBar**: 取消按钮支持插槽自定义
  - 新增 `cancel` 插槽，可自定义取消按钮内容

### 优化

- **TDateTimePicker**: 添加打开/关闭过渡动画
  - 遮罩层淡入淡出动画（0.3s）
  - 面板滑入滑出动画（0.35s）
  - 与 TPopup 组件动画效果保持一致

- **TSearchBar**: 使用 TIcon 组件
  - 左侧搜索图标改用 `TIcon` 组件 (`sousuo`)
  - 清除按钮改用 `TIcon` 组件 (`shanchu`)
  - `leftIcon` 属性改为 `showLeftIcon` (boolean)

### 重构

- **组件类型定义**: 统一所有组件类型定义结构
  - 所有组件类型移至对应的 `type.uts` 文件
  - 组件通过 `import type` 导入类型
  - 涉及组件：Tabs、Tags、TButton、TCol、TDivider、TGrid、TNavBar、TNoticeBar、TRow、TText 等

## [1.2.3] - 2025-01-07

### 优化

- 优化了一下 `utils` 文件的导出方式

## [1.2.2] - 2025-12-31

### 优化

- **TButton**: 优化样式选择器，将 `uni-button.t-button` 改为 `.t-button`，提升小程序兼容性
- **TCard**: 优化样式选择器，将 `uni-view.t-card` 改为 `.t-card`，提升小程序兼容性

## [1.2.1] - 2025-12-31

### 新增

- **HttpRequest**: 新增 HTTP 请求封装工具类 (`utils/request/index.uts`)
  - 支持 GET、POST、PUT、DELETE 等请求方法
  - 支持请求/响应拦截器
  - 自动附加 Token 认证（可配置）
  - GET 请求自动添加时间戳防缓存
  - 支持 Loading 状态显示（可配置）
  - 支持文件上传 `upload()` 方法
  - 支持 FormData 提交 `postFormData()` 方法
  - 统一的错误处理和 HTTP 状态码提示
  - 完整的 TypeScript 类型定义
  - 类型定义独立文件 (`utils/request/type.uts`)

### 优化

- **HttpRequest**: 代码结构优化
  - 类型定义拆分到独立文件 `type.uts`
  - 添加完整的 JSDoc 注释和使用示例
  - 扩展 HTTP 状态码错误提示（400/401/403/405/408/502/504）
  - 优化代码可读性和维护性

### 修复

- **TForm**: 修复小程序编译时 `v-bind="" is not supported` 错误

  - 原生组件（input、textarea）移除 `v-bind` 对象绑定，改为显式绑定具体属性
  - 新增 `getComponentProps()` 辅助函数，安全获取组件属性
  - 自定义组件使用 `getComponentProps(item)` 代替 `item.componentProps || {}`

- **i18n-demo**: 修复小程序编译时 WXML 特殊字符解析错误
  - `register-object.uvue`: 代码块添加条件编译，小程序端显示提示文本
  - `register-path.uvue`: 代码块和文件树结构添加条件编译

## [1.2.0] - 2025-12-31

### 优化

- **TForm**: 日期和时间选择改用 TDateTimePicker 组件
  - `Date` 类型使用 `TDateTimePicker` 的 `mode="date"` 模式
  - `Time` 类型使用 `TDateTimePicker` 的 `mode="datetime"` 模式
  - 移除原生 picker 组件，统一使用日历面板选择器
  - 新增 `.picker` 样式，与输入框风格一致

## [1.1.9] - 2025-12-30

### 新增

- **TDateTimePicker**: 新增日历时间选择器组件
  - 支持三种选择模式：`month`（年月）、`date`（年月日）、`datetime`（年月日时分）
  - 日历面板形式，6 行 7 列网格布局，显示上下月溢出日期
  - 年份选择面板，支持 ±100 年范围翻页浏览
  - 月份选择面板，12 个月网格展示
  - datetime 模式下底部时间选择器，支持自动滚动锚定
  - 阻止背景滚动穿透
  - 支持 `day` 插槽自定义日期单元格内容
  - 支持颜色配置：`activeColor`、`activeTextColor`、`todayColor`、`confirmColor`
  - 支持日期范围限制：`minDate`、`maxDate`
  - 完整的 i18n 国际化支持（中文简体、中文繁体、英文）

### 文档

- **TDateTimePicker**: 添加组件 README 文档
- **TDateTimePicker**: 添加示例页面

## [1.1.8] - 2025-12-30

### 修复

- **TPopup**: 修复 `position="center"` 时的弹窗样式
  - 移除缩放(scale)动画效果，改为淡入淡出(opacity)动画
  - 弹窗现在直接显示在屏幕正中央，而不是从中间缩放打开
  - 支持自定义宽度和高度（不再强制 100% 高度）

## [1.1.6] - 2025-12-26

### 新增

- **TSearchBar**: 调整搜索栏布局样式
  - 新增 `icon` 字符串属性，支持自定义搜索图标

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

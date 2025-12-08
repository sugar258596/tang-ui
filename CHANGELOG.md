# 更新日志

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

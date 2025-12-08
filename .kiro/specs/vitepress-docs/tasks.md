# Implementation Plan - VitePress 文档系统

## 任务列表

- [x] 1. 初始化 VitePress 项目（独立项目）
- [x] 1.1 创建项目目录结构
  - 在项目根目录创建 `docs` 目录
  - 创建 `docs/.vitepress` 配置目录
  - 创建 `docs/public` 静态资源目录
  - _Requirements: 8.1_

- [x] 1.2 配置包管理器（强制使用 pnpm）
  - 创建 `docs/.npmrc` 文件
  - 配置 `engine-strict=true` 强制引擎检查
  - 配置 `shamefully-hoist=false` 确保依赖隔离
  - 可选：配置国内镜像源加速
  - _Requirements: 8.1_

- [x] 1.3 创建 package.json（独立依赖配置）
  - 创建 `docs/package.json` 文件
  - 配置项目名称、版本、描述
  - 配置 `"private": true` 标记为私有项目
  - 配置 `"type": "module"` 使用 ES 模块
  - **配置 `"packageManager": "pnpm@9.0.0"` 强制使用 pnpm**
  - **配置 `"engines"` 指定 Node.js >= 18.0.0 和 pnpm >= 9.0.0**
  - 添加脚本命令：`dev`、`build`、`preview`
  - _Requirements: 8.1_

- [x] 1.4 安装依赖（使用 pnpm）
  - 进入 `docs` 目录
  - 运行 `pnpm install` 初始化 pnpm
  - 运行 `pnpm add -D vitepress vue typescript` 安装核心依赖
  - 验证 `docs/node_modules` 目录独立创建
  - 验证 `docs/pnpm-lock.yaml` 文件生成
  - _Requirements: 8.1_

- [x] 1.4.1 验证 pnpm 强制使用
  - 尝试运行 `npm install`（应该报错）
  - 尝试运行 `yarn install`（应该报错）
  - 确认只有 `pnpm install` 可以成功
  - _Requirements: 8.1_

- [x] 1.5 创建 .gitignore
  - 创建 `docs/.gitignore` 文件
  - 忽略 `node_modules/`
  - 忽略 `.vitepress/dist` 和 `.vitepress/cache`
  - 忽略编辑器和系统文件
  - _Requirements: 8.1_

- [x] 2. 配置 VitePress 基础设置
  - 创建 `.vitepress/config.ts` 配置文件
  - 配置站点元数据（标题、描述、语言）
  - 配置 Markdown 选项（行号、代码主题）
  - 配置构建选项
  - _Requirements: 3.1, 3.2, 8.4_

- [x] 3. 设置主题和样式
  - 配置主题选项（Logo、颜色）
  - 启用深色模式支持
  - 创建自定义样式文件
  - 配置响应式布局
  - _Requirements: 7.1, 6.1, 6.2_

- [x] 4. 配置导航结构
  - 创建顶部导航配置
  - 创建侧边栏配置（指南、组件分类）
  - 配置社交链接
  - 配置页脚信息
  - _Requirements: 1.4, 1.5_

- [x] 5. 配置搜索功能
  - 启用本地搜索
  - 配置搜索选项（快捷键、占位符）
  - 测试搜索功能
  - _Requirements: 5.1, 5.5_

- [x] 6. 创建文档首页
  - 创建 `docs/index.md` 首页文件
  - 编写组件库介绍
  - 添加特性列表
  - 添加快速开始链接
  - _Requirements: 1.1_

- [x] 7. 创建指南文档
- [x] 7.1 创建指南首页
  - 创建 `docs/guide/index.md`
  - 编写组件库概述
  - 说明组件库特点和优势
  - _Requirements: 1.1_

- [x] 7.2 创建安装指南
  - 创建 `docs/guide/installation.md`
  - 说明如何在 UniApp X 项目中使用
  - 提供安装步骤
  - _Requirements: 4.1, 4.2_

- [x] 7.3 创建快速开始指南
  - 创建 `docs/guide/quick-start.md`
  - 提供基本使用示例
  - 说明组件引入方式
  - 提供最佳实践建议
  - _Requirements: 4.3, 4.4_

- [x] 7.4 创建设计规范文档
  - 创建 `docs/guide/design.md`
  - 编写设计原则和理念
  - 添加颜色规范（主题色、功能色、中性色）
  - 添加尺寸规范（large、medium、small、mini）
  - 添加间距规范
  - 添加字体规范
  - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_

- [x] 7.5 创建兼容性说明
  - 在快速开始或安装指南中添加兼容性部分
  - 说明支持的平台（小程序、H5）
  - 说明 UniApp X 版本要求
  - _Requirements: 4.5_

- [x] 8. 创建组件文档总览页
  - 创建 `docs/components/index.md`
  - 按分类展示所有 44 个组件
  - 为每个组件添加简要描述
  - 添加组件分类说明
  - _Requirements: 1.2, 1.3_

- [x] 9. 创建基础组件文档（5 个）
- [x] 9.1 创建 Button 按钮文档
  - 创建 `docs/components/basic/button.md`
  - 从现有 README.md 迁移内容
  - 添加基础用法示例
  - 添加 Props、Events、Slots 表格
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

- [x] 9.2 创建 Icon 图标文档
  - 创建 `docs/components/basic/icon.md`
  - 编写组件介绍和用途
  - 添加使用示例
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3_

- [x] 9.3 创建 Text 文本文档
  - 创建 `docs/components/basic/text.md`
  - 从现有 README.md 迁移内容
  - 添加使用示例
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3_

- [x] 9.4 创建 Image 图片文档
  - 创建 `docs/components/basic/image.md`
  - 编写组件介绍
  - 添加使用示例（懒加载、裁剪模式等）
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3_

- [x] 9.5 创建 Divider 分割线文档
  - 创建 `docs/components/basic/divider.md`
  - 编写组件介绍
  - 添加使用示例
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3_

- [x] 10. 创建布局组件文档（8 个）
- [x] 10.1 创建 Card 卡片文档
  - 创建 `docs/components/layout/card.md`
  - 编写组件介绍和用途
  - 添加使用示例
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3_

- [x] 10.2 创建 List 列表文档
  - 创建 `docs/components/layout/list.md`
  - 编写组件介绍
  - 添加使用示例
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3_

- [x] 10.3 创建 Cell 单元格文档
  - 创建 `docs/components/layout/cell.md`
  - 编写组件介绍
  - 添加使用示例
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3_

- [x] 10.4 创建 Grid 宫格文档
  - 创建 `docs/components/layout/grid.md`
  - 编写组件介绍
  - 添加使用示例（Grid 和 GridItem）
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3_

- [x] 10.5 创建 Row/Col 栅格文档
  - 创建 `docs/components/layout/row-col.md`
  - 编写组件介绍
  - 添加使用示例（24 栅格系统）
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3_

- [x] 10.6 创建其他布局组件文档
  - 创建 ListItem、GridItem 等子组件文档
  - 编写组件介绍
  - 添加使用示例
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3_

- [x] 11. 创建表单组件文档（14 个）
- [x] 11.1 创建 Input 输入框文档
  - 创建 `docs/components/form/input.md`
  - 从现有 README.md 迁移内容
  - 标注 v-model 使用方式（defineModel）
  - 添加完整的使用示例
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3, 2.6_

- [x] 11.2 创建 Textarea 多行文本文档
  - 创建 `docs/components/form/textarea.md`
  - 标注 v-model 使用方式（defineModel）
  - 添加使用示例
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3, 2.6_

- [x] 11.3 创建 Switch 开关文档
  - 创建 `docs/components/form/switch.md`
  - 标注 v-model 使用方式（defineModel）
  - 添加使用示例
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3, 2.6_

- [x] 11.4 创建 Checkbox 复选框文档
  - 创建 `docs/components/form/checkbox.md`
  - 标注 v-model 使用方式（defineModel）
  - 添加使用示例（单个和组）
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3, 2.6_

- [x] 11.5 创建 Radio 单选框文档
  - 创建 `docs/components/form/radio.md`
  - 标注 v-model 使用方式（defineModel）
  - 添加使用示例（单个和组）
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3, 2.6_

- [x] 11.6 创建 Select 选择器文档
  - 创建 `docs/components/form/select.md`
  - 标注 v-model 使用方式（defineModel）
  - 添加使用示例
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3, 2.6_

- [x] 11.7 创建 Picker 选择器文档
  - 创建 `docs/components/form/picker.md`
  - 标注双 v-model 使用方式（visible 和 selectedValue）
  - 添加使用示例（单列、多列、级联）
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3, 2.6_

- [x] 11.8 创建 Slider 滑块文档
  - 创建 `docs/components/form/slider.md`
  - 标注 v-model 使用方式（defineModel）
  - 添加使用示例
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3, 2.6_

- [x] 11.9 创建 Rate 评分文档
  - 创建 `docs/components/form/rate.md`
  - 标注 v-model 使用方式（defineModel）
  - 添加使用示例
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3, 2.6_

- [x] 11.10 创建 SearchBar 搜索框文档
  - 创建 `docs/components/form/search-bar.md`
  - 标注 v-model 使用方式（defineModel）
  - 添加使用示例
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3, 2.6_

- [x] 11.11 创建 NumberInput 数字输入文档
  - 创建 `docs/components/form/number-input.md`
  - 标注 v-model 使用方式
  - 添加使用示例
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3, 2.6_

- [x] 11.12 创建其他表单组件文档
  - 创建 CheckboxGroup、RadioGroup 等文档
  - 标注 v-model 使用方式
  - 添加使用示例
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3, 2.6_

- [x] 12. 创建数据展示组件文档（10 个）
- [x] 12.1 创建 Tags 标签文档
  - 创建 `docs/components/display/tags.md`
  - 从现有 README.md 迁移内容
  - 添加使用示例
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3_

- [x] 12.2 创建 Badge 徽标文档
  - 创建 `docs/components/display/badge.md`
  - 编写组件介绍
  - 添加使用示例
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3_

- [x] 12.3 创建 Avatar 头像文档
  - 创建 `docs/components/display/avatar.md`
  - 编写组件介绍
  - 添加使用示例
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3_

- [x] 12.4 创建 Progress 进度条文档
  - 创建 `docs/components/display/progress.md`
  - 编写组件介绍
  - 添加使用示例
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3_

- [x] 12.5 创建 NoticeBar 通知栏文档
  - 创建 `docs/components/display/notice-bar.md`
  - 编写组件介绍
  - 添加使用示例
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3_

- [x] 12.6 创建 Collapse 折叠面板文档
  - 创建 `docs/components/display/collapse.md`
  - 标注 v-model 使用方式（defineModel）
  - 添加使用示例
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3, 2.6_

- [x] 12.7 创建 Swiper 轮播图文档
  - 创建 `docs/components/display/swiper.md`
  - 标注 v-model 使用方式（defineModel）
  - 添加使用示例
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3, 2.6_

- [x] 12.8 创建 Empty 空状态文档
  - 创建 `docs/components/display/empty.md`
  - 编写组件介绍
  - 添加使用示例
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3_

- [x] 12.9 创建 ErrorState 错误状态文档
  - 创建 `docs/components/display/error-state.md`
  - 编写组件介绍
  - 添加使用示例
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3_

- [x] 13. 创建反馈组件文档（5 个）
- [x] 13.1 创建 Loading 加载文档
  - 创建 `docs/components/feedback/loading.md`
  - 编写组件介绍
  - 添加使用示例
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3_

- [x] 13.2 创建 Toast 轻提示文档
  - 创建 `docs/components/feedback/toast.md`
  - 编写组件介绍
  - 说明 useToast composable 的使用
  - 添加使用示例
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3_

- [x] 13.3 创建 Dialog 对话框文档
  - 创建 `docs/components/feedback/dialog.md`
  - 标注 v-model 使用方式（defineModel）
  - 添加使用示例
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3, 2.6_

- [x] 13.4 创建 Popup 弹出层文档
  - 创建 `docs/components/feedback/popup.md`
  - 标注 v-model 使用方式（defineModel）
  - 添加使用示例
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3, 2.6_

- [x] 13.5 创建 ActionSheet 动作面板文档
  - 创建 `docs/components/feedback/action-sheet.md`
  - 编写组件介绍
  - 添加使用示例
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3_

- [x] 14. 创建导航组件文档（2 个）
- [x] 14.1 创建 Tabs 标签页文档
  - 创建 `docs/components/navigation/tabs.md`
  - 从现有 README.md 迁移内容
  - 标注 v-model 使用方式（defineModel）
  - 添加完整的使用示例
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3, 2.6_

- [x] 14.2 创建 NavBar 导航栏文档
  - 创建 `docs/components/navigation/navbar.md`
  - 编写组件介绍
  - 添加使用示例
  - 添加 API 文档
  - _Requirements: 2.1, 2.2, 2.3_

- [x] 15. 创建更新日志
  - 创建 `docs/changelog.md`
  - 按时间倒序列出版本
  - 为每个版本添加发布日期和版本号
  - 按类型分类变更内容（新增、修复、破坏性变更等）
  - 使用醒目标记标注破坏性变更
  - _Requirements: 10.1, 10.2, 10.3, 10.4_

- [x] 16. 添加静态资源
  - 复制 Logo 到 `docs/public/logo.png`
  - 创建 favicon.ico
  - 添加其他必要的图片资源
  - _Requirements: 1.5_

- [ ] 17. 创建自定义组件（可选）
- [ ]* 17.1 创建 ComponentDemo 组件
  - 创建 `docs/.vitepress/theme/components/ComponentDemo.vue`
  - 实现示例展示容器
  - 添加代码折叠功能
  - _Requirements: 3.1_

- [ ]* 17.2 创建 ColorPalette 组件
  - 创建 `docs/.vitepress/theme/components/ColorPalette.vue`
  - 实现颜色展示组件
  - 用于设计规范页面
  - _Requirements: 9.2_

- [ ]* 17.3 注册自定义组件
  - 在 `docs/.vitepress/theme/index.ts` 中注册组件
  - 配置全局组件
  - _Requirements: 8.4_

- [ ] 18. 配置部署
  - 创建 `.github/workflows/deploy.yml`（如果使用 GitHub Actions）
  - 配置构建和部署流程
  - 配置自定义域名（如果需要）
  - _Requirements: 8.5_

- [ ] 19. 测试和验证
- [ ]* 19.1 编写配置验证测试
  - 创建测试文件验证导航配置
  - 验证侧边栏配置与文件对应
  - 验证所有链接有效性
  - **Property 1: 组件分类完整性**
  - **Validates: Requirements 1.2**

- [ ]* 19.2 编写文档结构测试
  - 验证每个组件文档包含必需部分
  - 验证 API 表格列完整性
  - **Property 2: 组件文档结构完整性**
  - **Property 3: Props 表格列完整性**
  - **Property 4: Events 表格列完整性**
  - **Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5**

- [ ]* 19.3 编写 defineModel 文档测试
  - 验证使用 defineModel 的组件文档包含 v-model 说明
  - **Property 5: defineModel 组件文档标注**
  - **Validates: Requirements 2.6**

- [ ]* 19.4 编写示例代码测试
  - 验证示例代码包含必需部分
  - **Property 6: 示例代码完整性**
  - **Validates: Requirements 3.3**

- [ ]* 19.5 编写更新日志测试
  - 验证版本条目格式
  - 验证变更内容分类
  - **Property 7: 更新日志版本格式**
  - **Property 8: 更新日志变更分类**
  - **Validates: Requirements 10.2, 10.3**

- [ ] 20. 本地预览和调试
  - 运行开发服务器 `npm run docs:dev`
  - 检查所有页面渲染正确
  - 测试导航和链接
  - 测试搜索功能
  - 测试响应式布局
  - 测试深色模式
  - _Requirements: 所有_

- [ ] 21. 构建和部署
  - 运行构建命令 `npm run docs:build`
  - 验证构建成功无错误
  - 部署到托管服务
  - 验证线上访问正常
  - _Requirements: 8.5_

- [ ] 22. 文档优化
  - 检查拼写和语法
  - 优化代码示例
  - 添加更多使用场景
  - 根据反馈改进文档
  - _Requirements: 所有_

## 注意事项

1. **组件文档编写顺序**：建议按照组件分类顺序编写，先完成基础组件，再完成其他组件。

2. **UniApp X 代码规范**：
   - 文件格式：`.uvue`（UniApp X 的 Vue 单文件组件）
   - **代码结构顺序**：`<script>` → `<template>` → `<style>`（必须严格按此顺序）
   - 脚本语言：使用 `<script setup lang="uts">`（UTS 是 TypeScript 的 UniApp 扩展版本）
   - 类型定义：使用 `.uts` 文件扩展名

3. **defineModel 组件标注**：以下 21 个组件使用了 defineModel，需要在文档中明确标注 v-model 使用方式：
   - TInput, TTextarea, TSwitch, TCheckbox, TRadioButton
   - TCheckboxGroup, TRadioGroup, TSelect, TPicker, TSlider, TRate
   - TSearchBar, TNumberInput, TCollapse, TPopup, TSwiper
   - Tabs, Tags, VbenFrom, TDialog

4. **TPicker 特殊说明**：TPicker 使用双 v-model（v-model 控制显示，v-model:selectedValue 控制选中值），需要特别说明。

5. **文档模板**：所有组件文档应遵循统一的模板结构（介绍、示例、API、注意事项）。

6. **代码示例格式**：
   - 所有示例代码必须按照 `<script>` → `<template>` → `<style>` 顺序编写
   - 使用 `<script setup lang="uts">` 标签
   - 包含完整的类型注解（UTS 语法）
   - 示例应该是完整可运行的代码

7. **项目独立性（重要）**：
   - ✅ 文档系统是**完全独立的项目**，位于 `docs/` 目录
   - ✅ 拥有独立的 `package.json` 和 `pnpm-lock.yaml`
   - ✅ 拥有独立的 `node_modules` 目录
   - ❌ **禁止**依赖组件库的 node_modules
   - ❌ **禁止**与组件库共享任何依赖
   - ✅ 可以独立构建和部署

8. **包管理器要求（强制）**：
   - ✅ **必须**使用 pnpm 安装依赖
   - ✅ 在 `docs/.npmrc` 中配置 `engine-strict=true`
   - ✅ 在 `docs/package.json` 中配置 `"packageManager": "pnpm@9.0.0"`
   - ✅ 在 `docs/package.json` 中配置 `"engines"` 字段
   - ❌ **禁止**使用 npm 或 yarn（会报错）
   - ❌ **禁止**提交 `package-lock.json` 或 `yarn.lock`

9. **测试任务**：标记为可选（*）的测试任务可以在核心功能完成后再实现。

10. **部署配置**：
   - 根据实际使用的托管服务（GitHub Pages、Vercel、Netlify 等）调整部署配置
   - CI/CD 配置中必须使用 pnpm（参考 design.md 中的 GitHub Actions 示例）
   - 确保部署流程中使用 `cd docs && pnpm install && pnpm build`

11. **持续更新**：文档系统建立后，需要随着组件库的更新持续维护和改进。

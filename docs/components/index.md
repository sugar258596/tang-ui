# 组件总览

UniApp X UI 组件库提供了 44 个高质量的 UI 组件，涵盖基础组件、布局组件、表单组件、数据展示、反馈组件和导航组件六大类别。所有组件都基于 UniApp X 框架开发，使用 UTS 语言编写，支持跨平台运行。

## 组件分类说明

组件库按照功能和使用场景分为以下六大类：

- **基础组件**：构成界面的基础元素，如按钮、图标、文本等
- **布局组件**：用于页面布局和内容组织的组件
- **表单组件**：用于数据输入和表单交互的组件
- **数据展示**：用于展示各类数据和信息的组件
- **反馈组件**：用于操作反馈和用户提示的组件
- **导航组件**：用于页面导航和内容切换的组件

::: tip 组件特点
- 🚀 基于 UniApp X 框架，性能优异
- 💪 使用 UTS 语言开发，类型安全
- 🎨 支持主题定制，灵活配置
- 📱 跨平台支持，一次开发多端运行
- 🔧 21 个组件支持 v-model 双向绑定
:::

## 基础组件 (5 个)

基础组件是构成界面的基本元素，提供了最常用的 UI 控件。

| 组件 | 说明 | 链接 |
|------|------|------|
| Button 按钮 | 常用的操作按钮，支持多种类型、尺寸和状态 | [查看文档](/components/basic/button) |
| Icon 图标 | 图标组件，支持自定义图标和多种样式 | [查看文档](/components/basic/icon) |
| Text 文本 | 文本展示组件，支持多种文本样式和排版 | [查看文档](/components/basic/text) |
| Image 图片 | 图片展示组件，支持懒加载、裁剪模式等功能 | [查看文档](/components/basic/image) |
| Divider 分割线 | 分割线组件，用于分隔内容区域 | [查看文档](/components/basic/divider) |

## 布局组件 (8 个)

布局组件用于页面结构的搭建和内容的组织排列。

| 组件 | 说明 | 链接 |
|------|------|------|
| Card 卡片 | 卡片容器，用于内容分组和信息展示 | [查看文档](/components/layout/card) |
| List 列表 | 列表容器，用于展示一组相关的内容 | [查看文档](/components/layout/list) |
| ListItem 列表项 | 列表项组件，配合 List 使用 | [查看文档](/components/layout/list-item) |
| Cell 单元格 | 单元格组件，常用于设置页面和表单 | [查看文档](/components/layout/cell) |
| Grid 宫格 | 宫格布局容器，用于创建网格布局 | [查看文档](/components/layout/grid) |
| GridItem 宫格项 | 宫格项组件，配合 Grid 使用 | [查看文档](/components/layout/grid-item) |
| Row 行 | 栅格系统的行组件，基于 24 栅格系统 | [查看文档](/components/layout/row-col) |
| Col 列 | 栅格系统的列组件，配合 Row 使用 | [查看文档](/components/layout/row-col) |

## 表单组件 (14 个)

表单组件提供了丰富的数据输入和交互功能，大部分支持 v-model 双向绑定。

| 组件 | 说明 | v-model 支持 | 链接 |
|------|------|-------------|------|
| Input 输入框 | 文本输入组件，支持多种输入类型 | ✅ | [查看文档](/components/form/input) |
| Textarea 多行文本 | 多行文本输入组件 | ✅ | [查看文档](/components/form/textarea) |
| Switch 开关 | 开关选择器，用于切换状态 | ✅ | [查看文档](/components/form/switch) |
| Checkbox 复选框 | 复选框组件，支持单个和组合使用 | ✅ | [查看文档](/components/form/checkbox) |
| CheckboxGroup 复选框组 | 复选框组容器，管理多个复选框 | ✅ | [查看文档](/components/form/checkbox-group) |
| RadioButton 单选框 | 单选框组件，用于单项选择 | ✅ | [查看文档](/components/form/radio) |
| RadioGroup 单选框组 | 单选框组容器，管理多个单选框 | ✅ | [查看文档](/components/form/radio-group) |
| Select 选择器 | 下拉选择组件 | ✅ | [查看文档](/components/form/select) |
| Picker 选择器 | 多功能选择器，支持单列、多列、级联 | ✅ (双 v-model) | [查看文档](/components/form/picker) |
| Slider 滑块 | 滑块组件，用于数值选择 | ✅ | [查看文档](/components/form/slider) |
| Rate 评分 | 评分组件，用于评价打分 | ✅ | [查看文档](/components/form/rate) |
| SearchBar 搜索框 | 搜索输入组件 | ✅ | [查看文档](/components/form/search-bar) |
| NumberInput 数字输入 | 数字输入组件，支持步进操作 | ✅ | [查看文档](/components/form/number-input) |
| VbenFrom 表单 | 表单容器组件 | ✅ | [查看文档](/components/form/vben-form) |

::: tip v-model 说明
- 标记 ✅ 的组件支持 v-model 双向绑定
- Picker 组件支持双 v-model：`v-model` 控制显示，`v-model:selectedValue` 控制选中值
- 所有表单组件都使用 Vue 3.4+ 的 `defineModel` API
:::

## 数据展示组件 (10 个)

数据展示组件用于展示各类数据和信息，部分组件支持交互功能。

| 组件 | 说明 | v-model 支持 | 链接 |
|------|------|-------------|------|
| Tags 标签 | 标签组件，用于标记和分类 | ✅ | [查看文档](/components/display/tags) |
| Badge 徽标 | 徽标组件，用于消息提醒和状态标记 | - | [查看文档](/components/display/badge) |
| Avatar 头像 | 头像展示组件 | - | [查看文档](/components/display/avatar) |
| Progress 进度条 | 进度条组件，展示操作进度 | - | [查看文档](/components/display/progress) |
| NoticeBar 通知栏 | 通知栏组件，用于展示通知信息 | - | [查看文档](/components/display/notice-bar) |
| Collapse 折叠面板 | 折叠面板组件，用于内容的展开和收起 | ✅ | [查看文档](/components/display/collapse) |
| CollapseItem 折叠面板项 | 折叠面板项组件，配合 Collapse 使用 | - | [查看文档](/components/display/collapse-item) |
| Swiper 轮播图 | 轮播图组件，用于图片或内容轮播 | ✅ | [查看文档](/components/display/swiper) |
| Empty 空状态 | 空状态组件，用于无数据时的占位展示 | - | [查看文档](/components/display/empty) |
| ErrorState 错误状态 | 错误状态组件，用于错误提示和引导 | - | [查看文档](/components/display/error-state) |

## 反馈组件 (5 个)

反馈组件用于操作反馈和用户提示，提供良好的交互体验。

| 组件 | 说明 | v-model 支持 | 链接 |
|------|------|-------------|------|
| Loading 加载 | 加载状态组件，用于异步操作的等待提示 | - | [查看文档](/components/feedback/loading) |
| Toast 轻提示 | 轻量级提示组件，用于操作反馈 | - | [查看文档](/components/feedback/toast) |
| Dialog 对话框 | 对话框组件，用于重要信息提示和确认 | ✅ | [查看文档](/components/feedback/dialog) |
| Popup 弹出层 | 弹出层组件，用于展示浮层内容 | ✅ | [查看文档](/components/feedback/popup) |
| ActionSheet 动作面板 | 动作面板组件，用于展示操作选项 | - | [查看文档](/components/feedback/action-sheet) |

::: tip Toast 使用说明
Toast 组件通过 `useToast` composable 调用，无需手动管理组件实例。
:::

## 导航组件 (2 个)

导航组件用于页面导航和内容切换。

| 组件 | 说明 | v-model 支持 | 链接 |
|------|------|------|------|
| Tabs 标签页 | 标签页组件，用于内容分类和切换 | ✅ | [查看文档](/components/navigation/tabs) |
| NavBar 导航栏 | 导航栏组件，用于页面顶部导航 | - | [查看文档](/components/navigation/navbar) |

## 快速开始

如果你是第一次使用本组件库，建议按以下步骤开始：

1. 📖 阅读 [安装指南](/guide/installation)，了解如何在项目中引入组件库
2. 🚀 查看 [快速开始](/guide/quick-start)，学习基本使用方法
3. 🎨 浏览 [设计规范](/guide/design)，了解组件的设计理念和规范
4. 🔍 使用搜索功能快速查找需要的组件文档

## 组件统计

- **总计**：44 个组件
- **基础组件**：5 个
- **布局组件**：8 个
- **表单组件**：14 个
- **数据展示**：10 个
- **反馈组件**：5 个
- **导航组件**：2 个
- **支持 v-model**：21 个组件

## 浏览器兼容性

组件库基于 UniApp X 框架开发，支持以下平台：

- ✅ 微信小程序
- ✅ 支付宝小程序
- ✅ H5
- ✅ App (iOS/Android)

具体兼容性信息请参考 [兼容性说明](/guide/quick-start#兼容性)。

## 贡献指南

如果你在使用过程中发现问题或有改进建议，欢迎：

- 📝 提交 Issue 反馈问题
- 🔧 提交 Pull Request 贡献代码
- 💡 参与讨论，分享使用经验

---

::: info 提示
文档中的链接将在对应组件文档创建后生效。如果点击链接出现 404，说明该组件文档正在编写中。
:::

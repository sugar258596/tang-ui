# UniApp X UI 组件库

基于 uni-app x 的移动端 UI 组件库，提供 42+ 个高质量组件。

## ✨ 特性

- 🎨 42+ 个精美组件
- 💪 使用 TypeScript 开发，提供完整的类型定义
- 📱 专为 uni-app x 优化
- 🔥 使用 Vue 3 Composition API
- 🎯 支持 defineModel 双向绑定
- 📦 支持按需引入
- 🌈 统一的设计规范

## 📦 安装

```bash
npm install @your-org/uniapp-x-ui
# 或
yarn add @your-org/uniapp-x-ui
# 或
pnpm add @your-org/uniapp-x-ui
```

## 🔨 使用

### 方式一：easycom 自动导入（推荐）

在 `pages.json` 中配置 easycom：

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^T(.*)": "@your-org/uniapp-x-ui/components/T$1/T$1.vue"
    }
  }
}
```

然后在页面中直接使用：

```vue
<template>
  <view>
    <TButton type="primary">按钮</TButton>
    <TInput v-model="value" placeholder="请输入" />
  </view>
</template>
```

### 方式二：按需引入

```vue
<script setup>
import { TButton, TInput } from '@your-org/uniapp-x-ui'
</script>

<template>
  <view>
    <TButton type="primary">按钮</TButton>
    <TInput v-model="value" placeholder="请输入" />
  </view>
</template>
```

## 📚 组件列表

### 基础组件 (5个)
- TButton - 按钮
- TIcon - 图标
- TText - 文本
- TImage - 图片
- TDivider - 分割线

### 布局组件 (8个)
- TCard - 卡片
- TList - 列表
- TListItem - 列表项
- TCell - 单元格
- TGrid - 宫格
- TGridItem - 宫格项
- TRow - 栅格行
- TCol - 栅格列

### 表单组件 (13个)
- TInput - 输入框
- TNumberInput - 数字输入
- TTextarea - 多行文本输入
- TSearchBar - 搜索框
- TSwitch - 开关
- TCheckbox - 复选框
- TCheckboxGroup - 复选组
- TRadioButton - 单选按钮
- TRadioGroup - 单选组
- TSelect - 选择器
- TSlider - 滑块
- TRate - 评分
- TPicker - 选择器

### 数据展示 (9个)
- Tags - 标签
- TBadge - 徽标
- TAvatar - 头像
- TProgress - 进度条
- TNoticeBar - 通知栏
- TCollapse - 折叠面板
- TCollapseItem - 折叠面板项
- TEmpty - 空状态
- TErrorState - 错误状态
- TSwiper - 轮播图

### 反馈组件 (5个)
- TLoading - 加载
- TToast - 轻提示
- TDialog - 对话框
- TPopup - 弹出层
- TActionSheet - 动作面板

### 导航组件 (2个)
- Tabs - 标签页
- TNavBar - 导航栏

## 📖 文档

详细文档请访问：[文档地址]

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 License

MIT License

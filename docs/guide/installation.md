# 安装

本指南将帮助您在 UniApp X 项目中安装和配置 UniApp X UI 组件库。

## 环境要求

在开始之前，请确保您的开发环境满足以下要求：

### 必需条件

- **HBuilderX** - 版本 3.9.0 或更高（推荐使用最新版本）
- **UniApp X** - 支持 UniApp X 框架的项目
- **Node.js** - 版本 16.0.0 或更高（用于开发工具）

### 推荐配置

- **操作系统** - Windows 10/11、macOS 10.15+、Linux
- **内存** - 8GB 或更高
- **编辑器** - HBuilderX 或 VS Code（需安装 UniApp 插件）

## 平台兼容性

UniApp X UI 组件库支持多个平台，确保您的应用可以在不同环境中运行。

### 支持的平台

| 平台 | 支持状态 | 最低版本要求 | 说明 |
|------|----------|--------------|------|
| **H5** | ✅ 完全支持 | - | 支持所有现代浏览器 |
| **微信小程序** | ✅ 完全支持 | 基础库 2.0.0+ | 推荐使用最新版本 |
| **支付宝小程序** | ✅ 完全支持 | 基础库 2.0.0+ | 推荐使用最新版本 |
| **百度小程序** | ✅ 完全支持 | 基础库 3.0.0+ | 部分组件可能需要适配 |
| **字节跳动小程序** | ✅ 完全支持 | 基础库 2.0.0+ | 部分组件可能需要适配 |
| **QQ 小程序** | ✅ 完全支持 | 基础库 1.0.0+ | 部分组件可能需要适配 |
| **App (iOS)** | ✅ 完全支持 | iOS 10.0+ | 需要 UniApp X 3.9.0+ |
| **App (Android)** | ✅ 完全支持 | Android 5.0+ | 需要 UniApp X 3.9.0+ |
| **快应用** | ⚠️ 部分支持 | - | 部分组件可能不可用 |

### UniApp X 版本要求

- **最低版本**：UniApp X 3.9.0
- **推荐版本**：UniApp X 最新稳定版
- **HBuilderX 版本**：3.9.0 或更高

::: warning 版本兼容性
如果您使用的 UniApp X 版本低于 3.9.0，某些组件功能可能无法正常工作。建议升级到最新版本以获得最佳体验。
:::

### 浏览器兼容性（H5 平台）

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 最近 2 个版本 | 推荐使用 |
| Safari | 最近 2 个版本 | iOS 和 macOS |
| Firefox | 最近 2 个版本 | 完全支持 |
| Edge | 最近 2 个版本 | 基于 Chromium |
| 移动端浏览器 | iOS Safari 10+, Android Chrome 5+ | 完全支持 |

::: tip 浏览器推荐
为了获得最佳体验，推荐使用最新版本的 Chrome 或 Safari 浏览器。
:::

### 小程序平台特性

#### 微信小程序

- ✅ 支持所有组件
- ✅ 支持自定义组件
- ✅ 支持 Composition API
- ⚠️ 部分 CSS 特性可能受限

#### 支付宝小程序

- ✅ 支持所有组件
- ✅ 支持自定义组件
- ⚠️ 部分事件名称可能需要适配
- ⚠️ 部分 CSS 特性可能受限

#### 其他小程序平台

其他小程序平台（百度、字节跳动、QQ）的支持情况与微信小程序类似，但可能存在以下差异：

- 部分组件样式可能需要微调
- 部分事件处理方式可能不同
- 建议在目标平台上进行充分测试

### App 平台特性

#### iOS

- ✅ 支持所有组件
- ✅ 完整的原生性能
- ✅ 支持深色模式
- ✅ 支持安全区域适配

#### Android

- ✅ 支持所有组件
- ✅ 完整的原生性能
- ✅ 支持深色模式
- ⚠️ 部分低端设备可能需要性能优化

### 已知限制

#### 1. CSS 特性限制

某些 CSS 特性在小程序平台上可能不支持或表现不一致：

- `backdrop-filter`（背景模糊）- 部分小程序不支持
- `clip-path`（裁剪路径）- 部分小程序不支持
- 复杂的 CSS 动画 - 可能影响性能

#### 2. 事件处理差异

不同平台的事件处理可能存在差异：

- 触摸事件的触发时机可能不同
- 长按事件的判定时间可能不同
- 建议使用组件提供的事件而不是原生事件

#### 3. 性能考虑

在低端设备或小程序平台上：

- 避免同时渲染大量组件
- 使用虚拟列表处理长列表
- 优化图片资源大小

### 兼容性测试建议

为确保应用在所有目标平台上正常运行，建议：

1. **多平台测试**
   - 在所有目标平台上进行测试
   - 使用真机测试而不仅仅是模拟器
   - 测试不同版本的操作系统

2. **设备覆盖**
   - 测试高端和低端设备
   - 测试不同屏幕尺寸
   - 测试不同分辨率

3. **功能验证**
   - 验证所有组件功能正常
   - 验证交互行为符合预期
   - 验证样式显示正确

4. **性能测试**
   - 测试页面加载速度
   - 测试动画流畅度
   - 测试内存占用

### 条件编译

对于平台特定的功能，可以使用条件编译：

```vue
<script setup lang="uts">
// H5 平台特定代码
// #ifdef H5
console.log('运行在 H5 平台')
// #endif

// 微信小程序特定代码
// #ifdef MP-WEIXIN
console.log('运行在微信小程序')
// #endif

// App 平台特定代码
// #ifdef APP-PLUS
console.log('运行在 App')
// #endif

// iOS 特定代码
// #ifdef APP-IOS
console.log('运行在 iOS')
// #endif

// Android 特定代码
// #ifdef APP-ANDROID
console.log('运行在 Android')
// #endif
</script>

<template>
  <view>
    <!-- H5 平台显示 -->
    <!-- #ifdef H5 -->
    <view>H5 专属内容</view>
    <!-- #endif -->
    
    <!-- 小程序平台显示 -->
    <!-- #ifdef MP -->
    <view>小程序专属内容</view>
    <!-- #endif -->
    
    <!-- App 平台显示 -->
    <!-- #ifdef APP-PLUS -->
    <view>App 专属内容</view>
    <!-- #endif -->
  </view>
</template>

<style lang="scss" scoped>
/* H5 平台样式 */
/* #ifdef H5 */
.container {
  padding: 20px;
}
/* #endif */

/* 小程序平台样式 */
/* #ifdef MP */
.container {
  padding: 32rpx;
}
/* #endif */
</style>
```

### 获取平台信息

可以通过 UniApp 的 API 获取当前运行平台：

```vue
<script setup lang="uts">
import { onMounted } from 'vue'

onMounted(() => {
  // 获取系统信息
  uni.getSystemInfo({
    success: (res) => {
      console.log('平台:', res.platform)
      console.log('系统:', res.system)
      console.log('版本:', res.version)
    }
  })
})
</script>
```

### 兼容性问题反馈

如果您在使用过程中发现兼容性问题：

1. 查看[常见问题](#常见问题)部分
2. 搜索 GitHub Issues 查看是否已有相关问题
3. 提交新的 Issue，包含以下信息：
   - 平台和版本信息
   - 问题描述和复现步骤
   - 相关代码和截图

我们会尽快处理兼容性问题，确保组件库在所有平台上稳定运行。

## 创建 UniApp X 项目

如果您还没有 UniApp X 项目，请先创建一个：

### 使用 HBuilderX 创建

1. 打开 HBuilderX
2. 点击菜单 `文件` → `新建` → `项目`
3. 选择 `uni-app x` 项目类型
4. 填写项目名称和存储路径
5. 选择模板（推荐选择"默认模板"）
6. 点击"创建"按钮

### 使用命令行创建

```bash
# 使用 HBuilderX CLI 创建项目
hbuilderx create my-uniapp-x-project --type uni-app-x
```

## 安装组件库

UniApp X UI 是一个源码组件库，您需要将组件文件复制到项目中使用。

### 方式一：手动安装（推荐）

1. **下载组件库源码**

   从 GitHub 仓库下载最新版本的源码：

   ```bash
   git clone https://github.com/your-org/uniapp-x-ui.git
   ```

   或者下载 ZIP 压缩包并解压。

2. **复制组件文件**

   将以下目录复制到您的项目根目录：

   ```
   components/     # 组件目录
   composables/    # 组合式函数
   utils/          # 工具函数
   types/          # 类型定义
   style/          # 全局样式
   ```

3. **复制样式文件**

   将 `uni.scss` 文件复制到项目根目录（如果已存在，请合并内容）。

### 方式二：使用 Git Submodule

如果您的项目使用 Git 管理，可以将组件库作为子模块添加：

```bash
# 在项目根目录执行
git submodule add https://github.com/your-org/uniapp-x-ui.git lib/uniapp-x-ui

# 创建符号链接或复制文件到项目目录
```

### 方式三：直接复制单个组件

如果您只需要使用部分组件，可以只复制需要的组件：

1. 复制组件目录，如 `components/TButton/`
2. 复制相关的工具函数和类型定义
3. 复制必要的样式文件

## 配置项目

### 1. 配置 pages.json

在 `pages.json` 中配置全局样式（可选）：

```json
{
  "globalStyle": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "UniApp X UI",
    "navigationBarBackgroundColor": "#F8F8F8",
    "backgroundColor": "#F8F8F8"
  }
}
```

### 2. 引入全局样式

在 `App.uvue` 中引入全局样式：

```vue
<script setup lang="uts">
// App.uvue
</script>

<style lang="scss">
@import '@/style/index.scss';
</style>
```

### 3. 配置 TypeScript（可选）

如果您使用 TypeScript，可以在 `tsconfig.json` 中配置路径别名：

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "@/components/*": ["./components/*"],
      "@/utils/*": ["./utils/*"],
      "@/types/*": ["./types/*"]
    }
  }
}
```

## 验证安装

创建一个测试页面来验证组件库是否正确安装：

### 1. 创建测试页面

在 `pages/test/index.uvue` 创建测试页面：

```vue
<script setup lang="uts">
import { ref } from 'vue'
import TText from '@/components/TText/index.uvue'
import TButton from '@/components/TButton/index.uvue'

const message = ref<string>('Hello UniApp X UI!')

const handleClick = (): void => {
  console.log('Button clicked!')
}
</script>

<template>
  <view class="container">
    <TText :text="message" size="large" />
    <TButton text="点击测试" type="primary" @click="handleClick" />
  </view>
</template>

<style lang="scss" scoped>
.container {
  padding: 32rpx;
  display: flex;
  flex-direction: column;
  gap: 32rpx;
}
</style>
```

### 2. 配置路由

在 `pages.json` 中添加测试页面路由：

```json
{
  "pages": [
    {
      "path": "pages/test/index",
      "style": {
        "navigationBarTitleText": "测试页面"
      }
    }
  ]
}
```

### 3. 运行项目

在 HBuilderX 中运行项目：

1. 点击工具栏的"运行"按钮
2. 选择运行平台（H5、小程序或 App）
3. 等待编译完成
4. 查看测试页面是否正常显示

如果页面正常显示，说明组件库已成功安装！

## 常见问题

### 组件无法找到

**问题**：导入组件时提示找不到模块

**解决方案**：
1. 检查组件文件路径是否正确
2. 确认组件文件已正确复制到项目中
3. 检查导入路径是否使用了正确的别名

### 样式不生效

**问题**：组件显示异常，样式未正确应用

**解决方案**：
1. 确认已在 `App.uvue` 中引入全局样式
2. 检查 `uni.scss` 文件是否存在
3. 清除缓存并重新编译项目

### 类型错误

**问题**：TypeScript 提示类型错误

**解决方案**：
1. 确认已复制 `types/` 目录
2. 检查 `tsconfig.json` 配置是否正确
3. 重启 IDE 或编辑器

### 编译错误

**问题**：项目编译失败

**解决方案**：
1. 检查 HBuilderX 版本是否满足要求
2. 确认项目类型为 UniApp X
3. 查看错误信息，检查代码语法
4. 尝试清除缓存：`HBuilderX` → `运行` → `清除缓存`

## 更新组件库

### 手动更新

1. 下载最新版本的组件库源码
2. 备份您的自定义修改
3. 用新版本文件替换旧文件
4. 恢复您的自定义修改
5. 查看[更新日志](/changelog)了解变更内容

### Git Submodule 更新

如果使用 Git Submodule 方式安装：

```bash
# 更新子模块到最新版本
git submodule update --remote

# 或者进入子模块目录手动更新
cd lib/uniapp-x-ui
git pull origin main
```

## 下一步

- [快速开始](/guide/quick-start) - 学习如何使用组件
- [组件列表](/components/) - 浏览所有可用组件
- [设计规范](/guide/design) - 了解设计原则

## 获取帮助

如果您在安装过程中遇到问题：

- 查看[常见问题](#常见问题)部分
- 在 GitHub 上提交 Issue
- 加入社区讨论群

我们会尽快帮助您解决问题！

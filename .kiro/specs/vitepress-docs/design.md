# Design Document - VitePress 文档系统

## Overview

本设计文档描述了为 UniApp X UI 组件库构建 VitePress 文档系统的技术方案。该文档系统将提供完整的组件文档、API 说明、使用示例和设计规范，帮助开发者快速了解和使用组件库。

VitePress 是基于 Vite 和 Vue 3 的静态站点生成器，专为技术文档而设计，具有以下优势：
- 快速的开发服务器和构建速度
- 内置的 Markdown 扩展和 Vue 组件支持
- 优秀的 SEO 和性能表现
- 响应式布局和深色模式支持
- 强大的搜索功能

## Architecture

### 项目独立性原则 ⚠️

**核心原则**：文档系统是一个**完全独立的项目**，与组件库代码和依赖完全隔离：

#### 1. 独立的依赖管理
- ✅ 文档系统有自己独立的 `package.json`
- ✅ 文档系统有自己独立的 `pnpm-lock.yaml`
- ❌ **禁止**与组件库共享 `node_modules`
- ❌ **禁止**在文档系统中引用组件库的依赖
- ❌ **禁止**在组件库中引用文档系统的依赖

#### 2. 强制使用 pnpm
- ✅ 通过 `.npmrc` 配置 `engine-strict=true`
- ✅ 在 `package.json` 中指定 `"packageManager": "pnpm@9.0.0"`
- ✅ 在 `package.json` 中配置 `"engines"` 字段限制包管理器版本
- ❌ **禁止**使用 npm 或 yarn 安装依赖（会报错）
- ❌ **禁止**提交 `package-lock.json` 或 `yarn.lock`

#### 3. 独立的目录结构
- ✅ 文档系统位于 `docs/` 目录
- ✅ 所有文档相关文件都在 `docs/` 目录内
- ❌ **禁止**在组件库根目录放置文档相关依赖
- ❌ **禁止**在文档系统中直接引用组件库源码

#### 4. 独立的构建和部署
- ✅ 文档系统可以单独构建：`cd docs && pnpm install && pnpm build`
- ✅ 文档系统可以单独开发：`cd docs && pnpm dev`
- ✅ 文档系统可以单独部署，不依赖组件库
- ❌ **禁止**在组件库的构建流程中混入文档构建

### 整体架构

```
docs/                        # 文档系统根目录（完全独立的项目）
├── .npmrc                   # pnpm 配置（强制使用 pnpm，禁止其他包管理器）
├── package.json             # 文档系统独立的依赖配置（不与组件库共享任何依赖）
├── pnpm-lock.yaml           # pnpm 锁文件（必须提交到版本控制）
├── .vitepress/              # VitePress 配置目录
│   ├── config.ts            # 主配置文件
│   ├── theme/               # 自定义主题
│   │   ├── index.ts         # 主题入口
│   │   ├── style/           # 自定义样式
│   │   └── components/      # 自定义组件
│   └── cache/               # 构建缓存
├── public/                  # 静态资源
│   ├── logo.png             # Logo 图片
│   └── favicon.ico          # 网站图标
├── guide/                   # 指南文档
│   ├── index.md             # 指南首页
│   ├── installation.md      # 安装指南
│   ├── quick-start.md       # 快速开始
│   └── design.md            # 设计规范
├── components/              # 组件文档
│   ├── index.md             # 组件总览
│   ├── basic/               # 基础组件
│   │   ├── button.md
│   │   ├── icon.md
│   │   ├── text.md
│   │   ├── image.md
│   │   └── divider.md
│   ├── layout/              # 布局组件
│   │   ├── card.md
│   │   ├── list.md
│   │   ├── grid.md
│   │   └── row-col.md
│   ├── form/                # 表单组件
│   │   ├── input.md
│   │   ├── textarea.md
│   │   ├── switch.md
│   │   ├── checkbox.md
│   │   ├── radio.md
│   │   ├── select.md
│   │   ├── picker.md
│   │   ├── slider.md
│   │   ├── rate.md
│   │   └── search-bar.md
│   ├── display/             # 数据展示组件
│   │   ├── tags.md
│   │   ├── badge.md
│   │   ├── avatar.md
│   │   ├── progress.md
│   │   ├── notice-bar.md
│   │   ├── collapse.md
│   │   ├── swiper.md
│   │   ├── empty.md
│   │   └── error-state.md
│   ├── feedback/            # 反馈组件
│   │   ├── loading.md
│   │   ├── toast.md
│   │   ├── dialog.md
│   │   ├── popup.md
│   │   └── action-sheet.md
│   └── navigation/          # 导航组件
│       ├── tabs.md
│       └── navbar.md
├── changelog.md             # 更新日志
└── index.md                 # 文档首页
```

### 技术栈

**文档系统独立依赖**（仅在 docs/package.json 中）：

- **pnpm**: ^9.0.0 - 包管理器（强制使用，通过 .npmrc 和 package.json 配置）
- **VitePress**: ^1.0.0 - 静态站点生成器
- **Vue 3**: ^3.3.0 - 用于自定义组件（VitePress 依赖）
- **TypeScript**: ^5.0.0 - 类型支持
- **Markdown-it**: VitePress 内置 - Markdown 解析器
- **Shiki**: VitePress 内置 - 代码高亮

**依赖隔离原则**：
- ❌ 文档系统不依赖组件库的任何包
- ❌ 文档系统不引用组件库的 node_modules
- ❌ 文档系统不引用组件库的源代码
- ✅ 文档系统通过 Markdown 和代码示例展示组件用法
- ✅ 所有依赖都在 docs/package.json 中独立管理
- ✅ 使用 pnpm 确保依赖版本一致性和安全性

### 项目配置文件

#### 1. docs/.npmrc

强制使用 pnpm 包管理器：

```ini
# 强制严格检查包管理器版本
engine-strict=true

# pnpm 配置
shamefully-hoist=false
strict-peer-dependencies=false

# 使用国内镜像加速（可选）
# registry=https://registry.npmmirror.com
```

**说明**：
- `engine-strict=true`：配合 package.json 的 engines 字段，强制使用指定版本的包管理器
- 如果用户尝试使用 `npm install` 或 `yarn install`，将会报错
- `shamefully-hoist=false`：pnpm 默认配置，确保依赖隔离

#### 2. docs/package.json

文档系统的独立依赖配置：

```json
{
  "name": "uniapp-x-ui-docs",
  "version": "1.0.0",
  "description": "UniApp X UI 组件库文档",
  "private": true,
  "type": "module",
  "packageManager": "pnpm@9.0.0",
  "engines": {
    "node": ">=18.0.0",
    "pnpm": ">=9.0.0"
  },
  "scripts": {
    "dev": "vitepress dev",
    "build": "vitepress build",
    "preview": "vitepress preview"
  },
  "devDependencies": {
    "vitepress": "^1.0.0",
    "vue": "^3.3.0",
    "typescript": "^5.0.0"
  }
}
```

**关键配置说明**：
- `"packageManager": "pnpm@9.0.0"`：指定必须使用 pnpm 9.0.0
- `"engines"`：限制 Node.js 和 pnpm 的版本范围
- `"private": true`：标记为私有项目，不会发布到 npm
- 配合 `.npmrc` 的 `engine-strict=true`，如果使用错误的包管理器会报错

#### 3. docs/.gitignore

忽略文件配置：

```gitignore
# 依赖
node_modules/

# 构建产物
.vitepress/dist
.vitepress/cache

# 临时文件
.temp
.cache

# 编辑器
.vscode/
.idea/
*.swp
*.swo
*~

# 系统文件
.DS_Store
Thumbs.db
```

### UniApp X 组件特点

- **文件格式**: `.uvue` 文件（UniApp X 的 Vue 单文件组件）
- **代码结构顺序**: `<script>` → `<template>` → `<style>`（必须按此顺序）
- **脚本语言**: UTS（UniApp TypeScript，TypeScript 的 UniApp 扩展版本）
- **Composition API**: 使用 `<script setup lang="uts">` 语法
- **类型系统**: 完整的 UTS 类型支持，类型定义文件使用 `.uts` 扩展名
- **双向绑定**: 21 个组件使用 Vue 3.4+ 的 `defineModel` API

## Components and Interfaces

### 1. 包管理器配置

#### .npmrc 配置

```ini
# 强制使用 pnpm
engine-strict=true

# pnpm 配置
shamefully-hoist=false
strict-peer-dependencies=false
```

#### package.json 配置

```json
{
  "name": "uniapp-x-ui-docs",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "packageManager": "pnpm@9.0.0",
  "engines": {
    "node": ">=18.0.0",
    "pnpm": ">=9.0.0"
  },
  "scripts": {
    "docs:dev": "vitepress dev",
    "docs:build": "vitepress build",
    "docs:preview": "vitepress preview"
  },
  "devDependencies": {
    "vitepress": "^1.0.0",
    "vue": "^3.3.0",
    "typescript": "^5.0.0"
  }
}
```

**说明**：
- `packageManager` 字段指定必须使用 pnpm@9.0.0
- `engines` 字段限制 Node.js 和 pnpm 的版本
- 配合 `.npmrc` 的 `engine-strict=true`，如果使用 npm 或 yarn 会报错

### 2. VitePress 配置 (config.ts)

配置文件定义了文档站点的所有设置，包括导航、侧边栏、主题等。

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  // 站点元数据
  title: 'UniApp X UI',
  description: 'UniApp X UI 组件库文档',
  lang: 'zh-CN',
  
  // 主题配置
  themeConfig: {
    logo: '/logo.png',
    nav: [...],           // 顶部导航
    sidebar: {...},       // 侧边栏
    socialLinks: [...],   // 社交链接
    search: {...},        // 搜索配置
    footer: {...}         // 页脚
  },
  
  // Markdown 配置
  markdown: {
    lineNumbers: true,    // 显示行号
    theme: 'material-theme-palenight'  // 代码主题
  }
})
```

### 3. 导航结构

#### 顶部导航 (Nav)

```typescript
interface NavItem {
  text: string
  link?: string
  items?: NavItem[]
  activeMatch?: string
}

const nav: NavItem[] = [
  { text: '指南', link: '/guide/', activeMatch: '/guide/' },
  { text: '组件', link: '/components/', activeMatch: '/components/' },
  { text: '设计', link: '/guide/design' },
  { text: '更新日志', link: '/changelog' },
  {
    text: '相关链接',
    items: [
      { text: 'GitHub', link: 'https://github.com/...' },
      { text: 'UniApp X', link: 'https://uniapp.dcloud.net.cn/' }
    ]
  }
]
```

#### 侧边栏 (Sidebar)

```typescript
interface SidebarItem {
  text: string
  link?: string
  items?: SidebarItem[]
  collapsed?: boolean
}

const sidebar = {
  '/guide/': [
    {
      text: '开始',
      items: [
        { text: '介绍', link: '/guide/' },
        { text: '安装', link: '/guide/installation' },
        { text: '快速开始', link: '/guide/quick-start' }
      ]
    },
    {
      text: '进阶',
      items: [
        { text: '设计规范', link: '/guide/design' }
      ]
    }
  ],
  '/components/': [
    {
      text: '基础组件',
      items: [
        { text: 'Button 按钮', link: '/components/basic/button' },
        { text: 'Icon 图标', link: '/components/basic/icon' },
        // ... 其他基础组件
      ]
    },
    {
      text: '布局组件',
      items: [
        { text: 'Card 卡片', link: '/components/layout/card' },
        // ... 其他布局组件
      ]
    },
    // ... 其他分类
  ]
}
```

### 4. 文档模板结构

每个组件文档遵循统一的模板结构：

```markdown
# ComponentName 组件名称

组件的简要描述和用途说明。

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

基本使用示例，展示最简单的用法。

\`\`\`vue
<script setup lang="uts">
import { ref } from 'vue'

// 示例代码 - 使用 UTS 语法
const value = ref<string>('')
</script>

<template>
  <ComponentName v-model="value" />
</template>

<style lang="scss" scoped>
/* 样式代码 */
</style>
\`\`\`

## 高级用法

### 功能 1

说明和示例

### 功能 2

说明和示例

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| prop1 | 说明 | string | - | - |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| event1 | 说明 | (value: any) => void |

### Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽 |

## 注意事项

使用时需要注意的事项。
```

### 5. 自定义组件

为了增强文档的交互性和可读性，可以创建自定义 Vue 组件：

#### ComponentDemo.vue

用于展示组件示例的容器组件。

```vue
<template>
  <div class="component-demo">
    <div class="demo-preview">
      <slot name="demo" />
    </div>
    <div class="demo-code">
      <slot name="code" />
    </div>
  </div>
</template>

<style scoped lang="uts">
.component-demo {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 16px 0;
}

.demo-preview {
  padding: 24px;
  background: var(--vp-c-bg-soft);
}

.demo-code {
  border-top: 1px solid var(--vp-c-divider);
}
</style>
```

#### ColorPalette.vue

用于展示颜色规范的组件。

```vue
<template>
  <div class="color-palette">
    <div 
      v-for="color in colors" 
      :key="color.name"
      class="color-item"
    >
      <div 
        class="color-block" 
        :style="{ backgroundColor: color.value }"
      />
      <div class="color-info">
        <div class="color-name">{{ color.name }}</div>
        <div class="color-value">{{ color.value }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="uts">
interface Color {
  name: string
  value: string
}

defineProps<{
  colors: Color[]
}>()
</script>
```

## Data Models

### 组件文档数据模型

```typescript
interface ComponentDoc {
  name: string              // 组件名称
  title: string             // 中文标题
  description: string       // 组件描述
  category: ComponentCategory  // 组件分类
  examples: Example[]       // 使用示例
  api: ComponentAPI         // API 文档
  notes?: string[]          // 注意事项
}

type ComponentCategory = 
  | 'basic'      // 基础组件
  | 'layout'     // 布局组件
  | 'form'       // 表单组件
  | 'display'    // 数据展示
  | 'feedback'   // 反馈组件
  | 'navigation' // 导航组件

interface Example {
  title: string             // 示例标题
  description?: string      // 示例说明
  code: string              // 示例代码
}

interface ComponentAPI {
  props: PropItem[]         // 属性列表
  events: EventItem[]       // 事件列表
  slots: SlotItem[]         // 插槽列表
  methods?: MethodItem[]    // 方法列表（如果有）
}

interface PropItem {
  name: string              // 属性名
  description: string       // 说明
  type: string              // 类型
  options?: string          // 可选值
  default: string           // 默认值
  required?: boolean        // 是否必填
}

interface EventItem {
  name: string              // 事件名
  description: string       // 说明
  params: string            // 回调参数
}

interface SlotItem {
  name: string              // 插槽名
  description: string       // 说明
  params?: string           // 插槽参数
}

interface MethodItem {
  name: string              // 方法名
  description: string       // 说明
  params: string            // 参数
  returns: string           // 返回值
}
```

### 导航配置数据模型

```typescript
interface NavConfig {
  nav: NavItem[]
  sidebar: SidebarConfig
}

interface NavItem {
  text: string
  link?: string
  items?: NavItem[]
  activeMatch?: string
}

interface SidebarConfig {
  [path: string]: SidebarGroup[]
}

interface SidebarGroup {
  text: string
  items: SidebarItem[]
  collapsed?: boolean
}

interface SidebarItem {
  text: string
  link: string
}
```

### 更新日志数据模型

```typescript
interface Changelog {
  versions: Version[]
}

interface Version {
  version: string           // 版本号，如 "1.0.0"
  date: string              // 发布日期，如 "2025-12-08"
  changes: ChangeGroup[]    // 变更分组
}

interface ChangeGroup {
  type: ChangeType          // 变更类型
  items: string[]           // 变更项列表
}

type ChangeType = 
  | 'feature'               // 新增功能
  | 'fix'                   // Bug 修复
  | 'breaking'              // 破坏性变更
  | 'improvement'           // 改进
  | 'docs'                  // 文档更新
  | 'chore'                 // 其他
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: 组件分类完整性

*For any* 生成的文档系统，所有 44 个组件应该按照 6 个分类（基础组件、布局组件、表单组件、数据展示、反馈组件、导航组件）正确组织，每个组件应该出现在且仅出现在一个分类中。

**Validates: Requirements 1.2**

### Property 2: 组件文档结构完整性

*For any* 组件文档文件，应该包含以下必需部分：组件介绍、至少一个使用示例、Props 表格、Events 表格（如果组件有事件）。

**Validates: Requirements 2.1, 2.2, 2.3**

### Property 3: Props 表格列完整性

*For any* 组件的 Props 表格，应该包含以下列：参数名称、说明、类型、可选值、默认值。

**Validates: Requirements 2.4**

### Property 4: Events 表格列完整性

*For any* 组件的 Events 表格，应该包含以下列：事件名称、说明、回调参数。

**Validates: Requirements 2.5**

### Property 5: defineModel 组件文档标注

*For any* 使用 defineModel 的组件（共 21 个），其文档应该明确标注 v-model 的使用方式和类型。

**Validates: Requirements 2.6**

### Property 6: 示例代码完整性

*For any* 组件示例代码，应该包含 `<script setup>` 和 `<template>` 部分，如果有样式则包含 `<style>` 部分。

**Validates: Requirements 3.3**

### Property 7: 更新日志版本格式

*For any* 更新日志中的版本条目，应该包含版本号和发布日期。

**Validates: Requirements 10.2**

### Property 8: 更新日志变更分类

*For any* 更新日志中的变更内容，应该按照类型（新增功能、Bug 修复、破坏性变更等）进行分类。

**Validates: Requirements 10.3**

## Error Handling

### 构建错误处理

1. **Markdown 解析错误**
   - 检测：VitePress 构建时会报告 Markdown 语法错误
   - 处理：提供清晰的错误信息，指出错误的文件和行号
   - 恢复：修复 Markdown 语法错误后重新构建

2. **链接失效检测**
   - 检测：使用 VitePress 的链接检查功能
   - 处理：在构建时报告所有失效的内部链接
   - 恢复：修复链接或移除失效链接

3. **图片资源缺失**
   - 检测：检查所有引用的图片是否存在于 public 目录
   - 处理：在构建时警告缺失的图片资源
   - 恢复：添加缺失的图片或移除引用

### 配置错误处理

1. **导航配置错误**
   - 检测：验证导航配置的结构和链接
   - 处理：提供配置验证脚本，在构建前检查配置
   - 恢复：修正配置文件中的错误

2. **侧边栏配置错误**
   - 检测：验证侧边栏配置与实际文件的对应关系
   - 处理：检查所有侧边栏链接是否指向存在的文件
   - 恢复：更新配置或创建缺失的文件

### 开发时错误处理

1. **热更新失败**
   - 检测：监听文件变化时的错误
   - 处理：显示错误信息，保持开发服务器运行
   - 恢复：修复错误后自动重新加载

2. **端口占用**
   - 检测：启动开发服务器时检测端口占用
   - 处理：自动尝试使用其他端口或提示用户
   - 恢复：使用可用端口启动服务器

## Testing Strategy

### 单元测试

虽然 VitePress 文档系统主要是静态内容，但我们仍然需要测试以下方面：

1. **配置验证测试**
   - 测试导航配置的结构正确性
   - 测试侧边栏配置与文件的对应关系
   - 测试所有链接的有效性

2. **文档结构测试**
   - 测试每个组件文档是否包含必需的部分
   - 测试 API 表格的列是否完整
   - 测试示例代码的格式是否正确

3. **内容一致性测试**
   - 测试组件数量是否与实际组件库一致
   - 测试组件分类是否正确
   - 测试 defineModel 组件的文档标注

### 属性测试

属性测试用于验证文档系统的正确性属性：

1. **Property 1 测试：组件分类完整性**
   - 生成器：创建组件列表和分类配置
   - 属性：验证所有组件都被正确分类，且每个组件只属于一个分类
   - 验证：检查侧边栏配置和实际文件

2. **Property 2 测试：组件文档结构完整性**
   - 生成器：遍历所有组件文档文件
   - 属性：验证每个文档包含介绍、示例、Props 表格
   - 验证：解析 Markdown 文件，检查必需部分

3. **Property 5 测试：defineModel 组件文档标注**
   - 生成器：获取所有使用 defineModel 的组件列表
   - 属性：验证这些组件的文档包含 v-model 说明
   - 验证：搜索文档中的 v-model 关键词和类型说明

4. **Property 6 测试：示例代码完整性**
   - 生成器：提取所有示例代码块
   - 属性：验证代码块包含必需的部分
   - 验证：解析代码块，检查 script 和 template 标签

### 集成测试

1. **构建测试**
   - 测试：运行 `npm run docs:build` 命令
   - 验证：构建成功完成，无错误和警告
   - 检查：生成的静态文件结构正确

2. **链接测试**
   - 测试：检查所有内部链接
   - 验证：所有链接都指向存在的页面
   - 检查：没有 404 错误

3. **搜索功能测试**
   - 测试：搜索常见关键词
   - 验证：搜索结果准确且相关
   - 检查：搜索索引正确生成

### 端到端测试

1. **页面导航测试**
   - 测试：从首页导航到各个组件文档
   - 验证：所有导航链接正常工作
   - 检查：页面内容正确显示

2. **响应式布局测试**
   - 测试：在不同屏幕尺寸下访问文档
   - 验证：布局正确适配
   - 检查：移动端菜单正常工作

3. **主题切换测试**
   - 测试：切换浅色和深色主题
   - 验证：主题正确应用
   - 检查：主题偏好正确保存

### 测试工具

- **Vitest**: 用于单元测试和属性测试
- **Playwright**: 用于端到端测试
- **markdown-it**: 用于解析和验证 Markdown 内容
- **fast-check**: 用于属性测试的数据生成

### 测试配置

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['tests/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html']
    }
  }
})
```

### 持续集成

在 CI/CD 流程中集成测试：

1. **PR 检查**
   - 运行所有单元测试和属性测试
   - 验证文档构建成功
   - 检查链接有效性

2. **部署前验证**
   - 运行完整的测试套件
   - 生成测试覆盖率报告
   - 验证构建产物

3. **定期检查**
   - 每日运行链接检查
   - 每周运行完整的端到端测试
   - 监控文档网站的可用性

## Code Example Standards

### UniApp X 代码示例规范

所有文档中的代码示例必须遵循以下规范：

#### 1. 文件结构顺序

**必须严格按照以下顺序编写代码**：

```vue
<script setup lang="uts">
// 1. 导入语句
import { ref } from 'vue'
import type { ComponentProps } from './type.uts'

// 2. 响应式数据
const value = ref<string>('')

// 3. 计算属性和方法
const handleClick = () => {
  console.log('clicked')
}
</script>

<template>
  <!-- 模板代码 -->
  <view class="container">
    <TComponent v-model="value" @click="handleClick" />
  </view>
</template>

<style lang="scss" scoped>
/* 样式代码 */
.container {
  padding: 20rpx;
}
</style>
```

#### 2. UTS 语法要点

- **类型注解**：所有变量、函数参数和返回值都应该有明确的类型注解
  ```typescript
  const count = ref<number>(0)
  const name = ref<string>('张三')
  const list = ref<string[]>([])
  ```

- **类型导入**：使用 `type` 关键字导入类型
  ```typescript
  import type { TButtonProps } from './type.uts'
  ```

- **defineModel 使用**：对于使用 defineModel 的组件，明确标注类型
  ```typescript
  // 单个 v-model
  const modelValue = defineModel<string>({ default: '' })
  
  // 命名 v-model
  const visible = defineModel<boolean>({ default: false })
  const selectedValue = defineModel<any>('selectedValue', { default: null })
  ```

#### 3. 代码示例完整性

每个示例必须包含：
- ✅ 完整的 `<script setup lang="uts">` 部分
- ✅ 完整的 `<template>` 部分
- ✅ 必要的 `<style>` 部分（如果有样式）
- ✅ 必要的导入语句
- ✅ 类型注解
- ✅ 注释说明关键部分

#### 4. 示例代码模板

**基础示例**：
```vue
<script setup lang="uts">
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <TInput v-model="value" placeholder="请输入内容" />
</template>
```

**完整示例**：
```vue
<script setup lang="uts">
import { ref, computed } from 'vue'
import type { ButtonType } from '@/components/TButton/type.uts'

// 响应式数据
const count = ref<number>(0)
const buttonType = ref<ButtonType>('primary')

// 计算属性
const buttonText = computed<string>(() => {
  return `点击了 ${count.value} 次`
})

// 事件处理
const handleClick = (): void => {
  count.value++
}
</script>

<template>
  <view class="demo">
    <TButton 
      :type="buttonType" 
      :text="buttonText" 
      @click="handleClick" 
    />
  </view>
</template>

<style lang="scss" scoped>
.demo {
  padding: 32rpx;
}
</style>
```

#### 5. defineModel 组件示例

对于使用 defineModel 的组件，示例中必须明确展示 v-model 的使用：

```vue
<script setup lang="uts">
import { ref } from 'vue'

// 单个 v-model
const inputValue = ref<string>('')

// 双 v-model（如 TPicker）
const pickerVisible = ref<boolean>(false)
const pickerValue = ref<any>(null)
</script>

<template>
  <!-- 单个 v-model -->
  <TInput v-model="inputValue" />
  
  <!-- 双 v-model -->
  <TPicker 
    v-model="pickerVisible"
    v-model:selectedValue="pickerValue"
  />
</template>
```

## Implementation Notes

### 项目初始化步骤

#### 1. 创建独立的文档项目

```bash
# 在项目根目录下创建 docs 目录
mkdir docs
cd docs

# 初始化独立的 package.json
pnpm init
```

#### 2. 配置强制使用 pnpm

创建 `docs/.npmrc` 文件：
```ini
# 强制使用 pnpm
engine-strict=true
package-manager=pnpm@9.0.0

# pnpm 配置
shamefully-hoist=false
strict-peer-dependencies=false
```

更新 `docs/package.json`：
```json
{
  "name": "uniapp-x-ui-docs",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "engines": {
    "node": ">=18.0.0",
    "pnpm": ">=9.0.0"
  },
  "packageManager": "pnpm@9.0.0",
  "scripts": {
    "preinstall": "npx only-allow pnpm",
    "dev": "vitepress dev",
    "build": "vitepress build",
    "preview": "vitepress preview"
  }
}
```

#### 3. 安装文档系统依赖

```bash
# 在 docs 目录下安装依赖
cd docs
pnpm add -D vitepress vue typescript

# 如果使用 npm 或 yarn 会失败
# npm install  # ❌ 会报错
# yarn install # ❌ 会报错
```

#### 4. 验证依赖隔离

```bash
# 检查文档系统的依赖
cd docs
ls node_modules/  # 应该只包含文档系统的依赖

# 检查组件库的依赖
cd ..
ls node_modules/  # 应该只包含组件库的依赖（如果有）

# 两个 node_modules 目录应该完全独立
```

### 项目初始化流程

1. **创建独立的文档项目**
   ```bash
   # 在项目根目录创建 docs 目录
   mkdir docs
   cd docs
   
   # 初始化 package.json
   pnpm init
   
   # 配置 .npmrc 强制使用 pnpm
   echo "engine-strict=true" > .npmrc
   echo "shamefully-hoist=false" >> .npmrc
   
   # 安装 VitePress
   pnpm add -D vitepress vue typescript
   ```

2. **配置包管理器限制**
   
   在 `package.json` 中添加以下配置：
   ```json
   {
     "packageManager": "pnpm@9.0.0",
     "engines": {
       "node": ">=18.0.0",
       "pnpm": ">=9.0.0"
     }
   }
   ```

3. **验证 pnpm 强制使用**
   
   测试是否成功强制使用 pnpm：
   ```bash
   # 测试 1：尝试使用 npm（应该报错）
   cd docs
   npm install
   # 预期输出：错误信息，提示必须使用 pnpm
   
   # 测试 2：尝试使用 yarn（应该报错）
   yarn install
   # 预期输出：错误信息，提示必须使用 pnpm
   
   # 测试 3：使用 pnpm（应该成功）
   pnpm install
   # 预期输出：成功安装依赖
   ```

4. **验证依赖隔离**
   - 确认 `docs/node_modules` 独立存在
   - 确认不会引用根目录的 `node_modules`
   - 确认依赖版本不与组件库冲突
   - 检查 `docs/pnpm-lock.yaml` 文件存在且独立

### 文档生成策略

1. **手动编写 vs 自动生成**
   - 组件文档：手动编写，确保质量和可读性
   - API 表格：可以从组件的 type.uts 文件自动提取（可选）
   - 导航配置：手动维护，确保结构清晰

2. **文档更新流程**
   - 新增组件时，同步创建文档文件
   - 更新组件时，同步更新文档
   - 定期审查文档的准确性和完整性

3. **文档质量保证**
   - 使用 Markdown linter 检查格式
   - 使用拼写检查工具
   - 定期进行文档审查

### 性能优化

1. **构建优化**
   - 使用 VitePress 的增量构建功能
   - 优化图片资源（压缩、使用 WebP 格式）
   - 启用代码分割和懒加载

2. **加载优化**
   - 使用 CDN 加速静态资源
   - 启用 HTTP/2 和 Gzip 压缩
   - 优化首屏加载时间

3. **搜索优化**
   - 使用本地搜索而非服务器搜索
   - 优化搜索索引大小
   - 实现搜索结果缓存

### 部署方案

1. **静态托管服务**
   - GitHub Pages
   - Vercel
   - Netlify
   - Cloudflare Pages

2. **部署流程（独立构建）**
   ```bash
   # 进入文档目录
   cd docs
   
   # 安装依赖（使用 pnpm）
   pnpm install
   
   # 构建文档
   pnpm run build
   
   # 构建产物在 docs/.vitepress/dist
   ```

3. **CI/CD 配置示例（GitHub Actions）**
   ```yaml
   name: Deploy Docs
   
   on:
     push:
       branches: [main]
       paths:
         - 'docs/**'  # 只在文档变更时触发
   
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         
         - uses: pnpm/action-setup@v2
           with:
             version: 9.0.0
         
         - uses: actions/setup-node@v3
           with:
             node-version: 18
             cache: 'pnpm'
             cache-dependency-path: 'docs/pnpm-lock.yaml'
         
         - name: Install dependencies
           run: |
             cd docs
             pnpm install
         
         - name: Build docs
           run: |
             cd docs
             pnpm run build
         
         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: docs/.vitepress/dist
   ```

4. **域名配置**
   - 配置自定义域名
   - 启用 HTTPS
   - 配置 DNS 记录

### 维护建议

1. **定期更新**
   - 每次发布新版本时更新文档
   - 及时修复文档中的错误
   - 根据用户反馈改进文档

2. **版本管理**
   - 为每个主要版本维护独立的文档
   - 提供版本切换功能
   - 保留历史版本的文档

3. **社区贡献**
   - 提供文档贡献指南
   - 审查和合并文档 PR
   - 感谢贡献者

## Technology Choices

### 为什么选择 VitePress

1. **性能优势**
   - 基于 Vite，开发服务器启动快速
   - 构建速度快，支持增量构建
   - 生成的静态站点加载速度快

2. **开发体验**
   - 支持 Vue 3 组件
   - 热模块替换（HMR）
   - TypeScript 支持

3. **功能完善**
   - 内置搜索功能
   - 响应式布局
   - 深色模式支持
   - Markdown 扩展

4. **生态系统**
   - 活跃的社区
   - 丰富的插件
   - 良好的文档

### 替代方案对比

| 特性 | VitePress | VuePress | Docusaurus |
|------|-----------|----------|------------|
| 构建速度 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| 开发体验 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Vue 支持 | Vue 3 | Vue 2/3 | React |
| 搜索功能 | 内置 | 插件 | 内置 |
| 主题定制 | 简单 | 中等 | 中等 |
| 学习曲线 | 低 | 低 | 中 |

选择 VitePress 的主要原因：
- 与 Vue 3 生态系统完美集成
- 构建和开发速度最快
- 配置简单，易于上手
- 适合技术文档场景

## Conclusion

本设计文档详细描述了 VitePress 文档系统的架构、组件、数据模型和实现策略。通过采用 VitePress 作为文档生成工具，我们可以快速构建一个功能完善、性能优秀的文档网站，为 UniApp X UI 组件库的用户提供优质的文档体验。

关键设计决策：
1. 使用 VitePress 作为文档生成器，充分利用其性能和功能优势
2. 采用统一的文档模板，确保所有组件文档的一致性
3. 通过属性测试验证文档的完整性和正确性
4. 支持响应式布局和深色模式，提供良好的用户体验
5. 易于维护和更新，支持持续改进

下一步将根据本设计文档创建详细的实现任务列表，指导文档系统的开发工作。

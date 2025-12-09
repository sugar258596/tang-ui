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
npm install tang-ui-x
# 或
yarn add tang-ui-x
# 或
pnpm add tang-ui-x
```

## 🔨 使用

### 方式一：easycom 自动导入（推荐）

在 `pages.json` 中配置 easycom：

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^T(.*)": "tang-ui-x/components/T$1/index.uvue",
      "^Tabs$": "tang-ui-x/components/Tabs/index.uvue"
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

### 方式二：手动引入组件

```vue
<script setup lang="uts">
// 直接引入组件文件
</script>

<template>
  <view>
    <TButton type="primary">按钮</TButton>
  </view>
</template>

<script module="TButton" lang="uts">
  import TButton from 'tang-ui-x/components/TButton/index.uvue'
  export default TButton
</script>
```

### 方式三：使用工具函数和 Composables

```vue
<script setup lang="uts">
import { useToast, useTheme, useModal } from 'tang-ui-x'

const toast = useToast()
const theme = useTheme()

function showMessage() {
  toast.show({
    message: '操作成功',
    type: 'success'
  })
}
</script>
```

## 🌍 国际化 (i18n)

Tang UI X 内置了完整的多语言支持系统，让您的应用轻松支持多种语言。

### 内置语言

组件库默认支持以下语言：

- 🇨🇳 简体中文 (zh-CN) - 默认语言
- 🇺🇸 英语 (en-US)
- 🇭🇰 繁体中文 (zh-TW)

### 基本使用

#### 在组件中使用翻译

```vue
<script setup lang="uts">
import { useI18n } from 'tang-ui-x'

const { $t, locale, setLocale, availableLocales } = useI18n()

// 获取翻译文本
const confirmText = $t('common.confirm')  // "确定"
const cancelText = $t('common.cancel')    // "取消"

// 带参数的翻译
const greeting = $t('common.hello', { name: '张三' })  // "你好，张三"

// 切换语言
function switchLanguage() {
  setLocale('en-US')
}
</script>

<template>
  <view>
    <text>{{ confirmText }}</text>
    <text>当前语言: {{ locale }}</text>
    <button @click="switchLanguage">Switch to English</button>
  </view>
</template>
```

#### useI18n API

`useI18n()` 返回以下属性和方法：

- `$t(key, params?)` - 翻译函数，获取指定键的翻译文本
  - `key`: 翻译键，格式为 `moduleName.key`（如 `common.confirm`）
  - `params`: 可选的插值参数对象
- `locale` - 当前语言代码（响应式）
- `setLocale(code)` - 切换语言函数
- `availableLocales` - 可用语言列表（响应式）

### 全局语言切换

在应用的任何位置使用全局函数切换语言：

```vue
<script setup lang="uts">
import { setLanguage, getCurrentLocale, getAvailableLocales } from 'tang-ui-x'

// 切换到英语
const success = setLanguage('en-US')
console.log('切换成功:', success)  // true

// 获取当前语言
const currentLang = getCurrentLocale()  // 'en-US'

// 获取所有可用语言
const languages = getAvailableLocales()  // ['zh-CN', 'en-US', 'zh-TW']
</script>

<template>
  <view>
    <button @click="setLanguage('zh-CN')">中文</button>
    <button @click="setLanguage('en-US')">English</button>
    <button @click="setLanguage('zh-TW')">繁體中文</button>
  </view>
</template>
```

### 注册自定义语言包

#### 方式一：注册新语言

添加组件库未内置的语言（如日语、韩语等）：

```typescript
import { registerLocale, setLanguage } from 'tang-ui-x'

// 注册日语语言包
registerLocale('ja-JP', {
  common: {
    confirm: '確認',
    cancel: 'キャンセル',
    ok: 'OK',
    close: '閉じる',
    loading: '読み込み中...',
    noData: 'データなし'
  },
  dialog: {
    title: 'ヒント',
    confirmText: '確認',
    cancelText: 'キャンセル'
  },
  empty: {
    title: 'データなし',
    description: '関連コンテンツがありません',
    actionText: '更新'
  },
  searchBar: {
    placeholder: '検索キーワードを入力',
    cancelText: 'キャンセル'
  }
  // ... 其他组件模块
})

// 切换到日语
setLanguage('ja-JP')
```

#### 方式二：覆盖默认翻译

只覆盖部分翻译文本，其他保持默认：

```typescript
import { registerLocale } from 'tang-ui-x'

// 自定义简体中文的部分翻译
registerLocale('zh-CN', {
  common: {
    confirm: '好的',  // 覆盖默认的"确定"
    cancel: '算了'    // 覆盖默认的"取消"
    // 其他键（ok, close, loading 等）保持默认值
  }
  // 其他模块（dialog, empty 等）保持默认翻译
})
```

### 语言包注册模式

Tang UI X 提供了两种语言包注册模式，以满足不同的使用场景：**合并模式（merge）** 和 **替换模式（replace）**。

#### 合并模式（默认）

合并模式会将新语言包与现有语言包合并，新内容覆盖旧内容，但未覆盖的内容会被保留。这是 `registerLocale` 函数的默认行为。

**使用场景：**
- 只想覆盖部分翻译文本
- 添加新的翻译键而不影响现有翻译
- 逐步自定义组件库的翻译

**示例 1：覆盖部分通用文本**

```typescript
import { registerLocale } from 'tang-ui-x'

// 只覆盖 common 模块的部分键
registerLocale('zh-CN', {
  common: {
    confirm: '好的',  // 覆盖默认的"确定"
    cancel: '算了'    // 覆盖默认的"取消"
    // ok, close, loading, noData 等其他键保持默认值
  }
  // dialog, empty, searchBar 等其他模块保持默认翻译
})

// 结果：
// - common.confirm → "好的"（已覆盖）
// - common.cancel → "算了"（已覆盖）
// - common.ok → "好的"（保持默认）
// - common.close → "关闭"（保持默认）
// - dialog.title → "提示"（保持默认）
// - empty.title → "暂无数据"（保持默认）
```

**示例 2：添加新的翻译键**

```typescript
import { registerLocale } from 'tang-ui-x'

// 为现有语言添加新的翻译键
registerLocale('zh-CN', {
  common: {
    save: '保存',      // 新增键
    delete: '删除',    // 新增键
    edit: '编辑'       // 新增键
  },
  // 添加新的自定义模块
  myComponent: {
    title: '我的组件',
    description: '这是自定义组件'
  }
})

// 原有的所有翻译都会保留，只是新增了这些键
```

**示例 3：使用 registerLocaleWithMode 显式指定合并模式**

```typescript
import { registerLocaleWithMode } from 'tang-ui-x'

// 显式指定合并模式（与 registerLocale 效果相同）
registerLocaleWithMode('zh-CN', {
  common: {
    confirm: '好的'
  }
}, 'merge')
```

#### 替换模式

替换模式会完全替换现有语言包，不保留任何原有内容。使用此模式时，您需要提供完整的语言包，否则缺失的模块和键将无法使用。

**使用场景：**
- 完全自定义某个语言的所有翻译
- 从外部 JSON 文件加载完整的语言包
- 确保语言包的完整性和一致性

**方式 1：使用 replaceLocale 函数**

```typescript
import { replaceLocale } from 'tang-ui-x'

// 完全替换简体中文语言包
replaceLocale('zh-CN', {
  common: {
    confirm: '好的',
    cancel: '取消',
    ok: 'OK',
    close: '关闭',
    loading: '加载中...',
    noData: '暂无数据'
  },
  dialog: {
    title: '提示',
    confirmText: '好的',
    cancelText: '取消'
  },
  empty: {
    title: '暂无数据',
    description: '当前没有相关内容',
    actionText: '刷新试试'
  },
  searchBar: {
    placeholder: '请输入搜索关键词',
    cancelText: '取消'
  }
  // 必须提供所有组件模块，否则缺失的模块将无法使用
})

// 注意：原有的所有翻译都被清除，只保留新提供的内容
```

**方式 2：使用 registerLocaleWithMode 指定替换模式**

```typescript
import { registerLocaleWithMode } from 'tang-ui-x'

// 使用替换模式注册语言包
registerLocaleWithMode('zh-CN', {
  common: {
    confirm: '好的',
    cancel: '取消'
    // ... 其他键
  },
  dialog: {
    title: '提示'
    // ... 其他键
  }
  // ... 其他模块
}, 'replace')
```

#### 从 JSON 文件注册语言包

您可以将语言包保存为 JSON 文件，然后导入并注册。这种方式特别适合管理大型语言包或从外部系统加载翻译。

**JSON 文件格式：**

```json
// custom-zh-CN.json
{
  "common": {
    "confirm": "好的",
    "cancel": "取消",
    "ok": "OK",
    "close": "关闭",
    "loading": "加载中...",
    "noData": "暂无数据"
  },
  "dialog": {
    "title": "提示",
    "confirmText": "好的",
    "cancelText": "取消"
  },
  "empty": {
    "title": "暂无数据",
    "description": "当前没有相关内容",
    "actionText": "刷新试试"
  },
  "searchBar": {
    "placeholder": "请输入搜索关键词",
    "cancelText": "取消"
  }
}
```

**使用合并模式加载 JSON 文件：**

```typescript
import { registerLocale } from 'tang-ui-x'
import customZhCN from './locales/custom-zh-CN.json'

// 合并模式：保留未覆盖的默认翻译
registerLocale('zh-CN', customZhCN)
```

**使用替换模式加载 JSON 文件：**

```typescript
import { replaceLocale } from 'tang-ui-x'
import completeZhCN from './locales/complete-zh-CN.json'

// 替换模式：完全替换，不保留默认翻译
replaceLocale('zh-CN', completeZhCN)
```

**从多个 JSON 文件组合语言包：**

```typescript
import { registerLocale } from 'tang-ui-x'
import commonTranslations from './locales/common.json'
import dialogTranslations from './locales/dialog.json'
import emptyTranslations from './locales/empty.json'

// 组合多个 JSON 文件
const customLocale = {
  common: commonTranslations,
  dialog: dialogTranslations,
  empty: emptyTranslations
}

// 注册组合后的语言包
registerLocale('zh-CN', customLocale)
```

#### 两种模式的对比

| 特性 | 合并模式（merge） | 替换模式（replace） |
|------|------------------|-------------------|
| **默认行为** | ✓ 是（registerLocale） | ✗ 否（需显式使用） |
| **保留原有内容** | ✓ 是 | ✗ 否 |
| **覆盖指定键** | ✓ 是 | ✓ 是 |
| **需要完整语言包** | ✗ 否 | ✓ 是 |
| **适合部分自定义** | ✓ 是 | ✗ 否 |
| **适合完全自定义** | ✗ 否 | ✓ 是 |
| **使用函数** | registerLocale<br>registerLocaleWithMode(..., 'merge') | replaceLocale<br>registerLocaleWithMode(..., 'replace') |

#### 选择合适的模式

**使用合并模式的情况：**
- ✓ 只想修改少数几个翻译文本
- ✓ 想要添加新的翻译键
- ✓ 希望保留组件库的默认翻译作为后备
- ✓ 逐步自定义翻译，不想一次性提供所有内容

**使用替换模式的情况：**
- ✓ 需要完全控制语言包内容
- ✓ 从外部系统或 CMS 加载完整的翻译
- ✓ 确保翻译的完整性和一致性
- ✓ 不希望依赖组件库的默认翻译

#### 完整示例：动态语言包管理

```vue
<script setup lang="uts">
import { registerLocale, replaceLocale, registerLocaleWithMode } from 'tang-ui-x'
import { ref } from 'vue'

// 场景 1：部分自定义（合并模式）
function customizePartial() {
  registerLocale('zh-CN', {
    common: {
      confirm: '好的',
      cancel: '算了'
    }
  })
  console.log('已应用部分自定义翻译（合并模式）')
}

// 场景 2：完全替换（替换模式）
function replaceComplete() {
  replaceLocale('zh-CN', {
    common: {
      confirm: '确认',
      cancel: '取消',
      ok: 'OK',
      close: '关闭',
      loading: '加载中...',
      noData: '暂无数据'
    },
    dialog: {
      title: '提示',
      confirmText: '确认',
      cancelText: '取消'
    }
    // ... 提供所有必需的模块
  })
  console.log('已完全替换语言包（替换模式）')
}

// 场景 3：从 JSON 文件加载
async function loadFromJSON() {
  try {
    // 假设从服务器获取语言包
    const response = await fetch('/api/locales/zh-CN.json')
    const localeData = await response.json()
    
    // 使用合并模式
    registerLocale('zh-CN', localeData)
    
    // 或使用替换模式
    // replaceLocale('zh-CN', localeData)
    
    console.log('已从 JSON 加载语言包')
  } catch (error) {
    console.error('加载语言包失败:', error)
  }
}

// 场景 4：显式指定模式
function explicitMode() {
  // 合并模式
  registerLocaleWithMode('zh-CN', {
    common: { confirm: '好的' }
  }, 'merge')
  
  // 替换模式
  registerLocaleWithMode('en-US', {
    common: {
      confirm: 'OK',
      cancel: 'Cancel'
      // ... 完整内容
    }
  }, 'replace')
}
</script>

<template>
  <view class="locale-manager">
    <button @click="customizePartial">部分自定义（合并）</button>
    <button @click="replaceComplete">完全替换</button>
    <button @click="loadFromJSON">从 JSON 加载</button>
    <button @click="explicitMode">显式指定模式</button>
  </view>
</template>
```

#### 注意事项

1. **替换模式需要完整语言包**：使用替换模式时，确保提供所有必需的模块和键，否则缺失的翻译将无法使用。

2. **合并模式的覆盖规则**：在合并模式下，新键会覆盖旧键，但只在提供的模块内生效。未提供的模块完全保留。

3. **JSON 结构验证**：系统会验证注册的语言包结构。如果结构无效（如不是对象、包含非字符串值等），注册会失败并输出错误信息。

4. **模式选择建议**：如果不确定使用哪种模式，建议使用默认的合并模式（`registerLocale`），它更安全且易于使用。

### 语言包结构

语言包采用模块化结构，每个模块对应一组相关的翻译：

```typescript
{
  // 通用文本模块
  common: {
    confirm: '确定',
    cancel: '取消',
    ok: '好的',
    close: '关闭',
    loading: '加载中...',
    noData: '暂无数据'
  },
  
  // 对话框模块
  dialog: {
    title: '提示',
    confirmText: '确定',
    cancelText: '取消'
  },
  
  // 空状态模块
  empty: {
    title: '暂无数据',
    description: '当前没有相关内容',
    actionText: '刷新试试'
  },
  
  // 搜索框模块
  searchBar: {
    placeholder: '请输入搜索关键词',
    cancelText: '取消'
  }
  
  // ... 其他组件模块
}
```

### 翻译键命名规范

翻译键采用 `模块名.键名` 的格式：

- `common.confirm` - 通用模块的确定按钮
- `dialog.title` - 对话框模块的标题
- `empty.description` - 空状态模块的描述文本
- `searchBar.placeholder` - 搜索框模块的占位符

### 组件中使用自定义文本

所有支持 i18n 的组件都允许通过 props 覆盖默认翻译：

```vue
<template>
  <view>
    <!-- 使用默认翻译 -->
    <TEmpty />
    
    <!-- 使用自定义文本（优先级高于翻译） -->
    <TEmpty 
      title="没有找到结果" 
      description="请尝试其他搜索条件"
      actionText="重新搜索"
    />
    
    <!-- 使用默认翻译，但会随语言切换自动更新 -->
    <TSearchBar />
    
    <!-- 使用自定义占位符 -->
    <TSearchBar placeholder="搜索商品" />
  </view>
</template>
```

### 参数插值

翻译文本支持动态参数替换：

```typescript
// 定义带占位符的翻译
registerLocale('zh-CN', {
  common: {
    hello: '你好，{name}',
    itemCount: '共 {count} 个项目',
    welcome: '{user}，欢迎回来！'
  }
})

// 使用参数
const { $t } = useI18n()

const greeting = $t('common.hello', { name: '张三' })
// 结果: "你好，张三"

const count = $t('common.itemCount', { count: 5 })
// 结果: "共 5 个项目"

const welcome = $t('common.welcome', { user: 'Admin' })
// 结果: "Admin，欢迎回来！"
```

### 响应式语言切换

语言切换会自动触发所有使用翻译的组件更新：

```vue
<script setup lang="uts">
import { useI18n } from 'tang-ui-x'

const { $t, locale, setLocale } = useI18n()

// 这些文本会随语言切换自动更新
const title = computed(() => $t('common.confirm'))
const description = computed(() => $t('empty.description'))
</script>

<template>
  <view>
    <!-- 语言切换后，这些文本会自动更新 -->
    <text>{{ title }}</text>
    <text>{{ description }}</text>
    <text>当前语言: {{ locale }}</text>
    
    <!-- 组件内的文本也会自动更新 -->
    <TEmpty />
    <TSearchBar />
    
    <button @click="setLocale('en-US')">English</button>
    <button @click="setLocale('zh-CN')">中文</button>
  </view>
</template>
```

### 完整示例：语言切换器

创建一个完整的语言切换组件：

```vue
<script setup lang="uts">
import { useI18n, setLanguage } from 'tang-ui-x'
import { ref } from 'vue'

const { locale, availableLocales } = useI18n()

// 语言显示名称映射
const languageNames = {
  'zh-CN': '简体中文',
  'en-US': 'English',
  'zh-TW': '繁體中文'
}

// 切换语言
function switchLanguage(code: string) {
  const success = setLanguage(code)
  if (success) {
    console.log(`已切换到: ${languageNames[code]}`)
  } else {
    console.error(`切换失败: ${code}`)
  }
}
</script>

<template>
  <view class="language-switcher">
    <text class="title">选择语言 / Select Language</text>
    
    <view class="language-list">
      <view 
        v-for="lang in availableLocales" 
        :key="lang"
        class="language-item"
        :class="{ active: locale === lang }"
        @click="switchLanguage(lang)"
      >
        <text>{{ languageNames[lang] || lang }}</text>
        <text v-if="locale === lang" class="check">✓</text>
      </view>
    </view>
    
    <text class="current">当前语言: {{ languageNames[locale] }}</text>
  </view>
</template>

<style>
.language-switcher {
  padding: 20px;
}

.title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
}

.language-list {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
}

.language-item {
  padding: 15px;
  border-bottom: 1px solid #e0e0e0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.language-item:last-child {
  border-bottom: none;
}

.language-item.active {
  background-color: #f0f9ff;
  color: #0066cc;
}

.check {
  color: #0066cc;
  font-weight: bold;
}

.current {
  margin-top: 15px;
  color: #666;
  font-size: 14px;
}
</style>
```

### 组件迁移指南

如果您正在开发自定义组件并希望支持 i18n，请按以下步骤操作：

#### 步骤 1: 导入 useI18n

```typescript
import { useI18n } from 'tang-ui-x'
```

#### 步骤 2: 在 setup 中获取翻译函数

```typescript
const { $t } = useI18n()
```

#### 步骤 3: 替换硬编码文本

```typescript
// 之前
const confirmText = '确定'

// 之后
const confirmText = $t('common.confirm')
```

#### 步骤 4: 支持用户覆盖（推荐）

```typescript
interface Props {
  title?: string
  description?: string
}

const props = defineProps<Props>()
const { $t } = useI18n()

// 优先使用用户传入的值，否则使用翻译
const displayTitle = computed(() => props.title || $t('empty.title'))
const displayDescription = computed(() => props.description || $t('empty.description'))
```

#### 步骤 5: 更新模板

```vue
<template>
  <view>
    <!-- 使用计算属性 -->
    <text>{{ displayTitle }}</text>
    <text>{{ displayDescription }}</text>
  </view>
</template>
```

#### 完整示例

```vue
<script setup lang="uts">
import { useI18n } from 'tang-ui-x'
import { computed } from 'vue'

interface Props {
  title?: string
  description?: string
  actionText?: string
}

const props = defineProps<Props>()
const { $t } = useI18n()

// 优先使用用户传入的值
const displayTitle = computed(() => props.title || $t('empty.title'))
const displayDescription = computed(() => props.description || $t('empty.description'))
const displayActionText = computed(() => props.actionText || $t('empty.actionText'))

function handleAction() {
  console.log('Action clicked')
}
</script>

<template>
  <view class="custom-component">
    <text class="title">{{ displayTitle }}</text>
    <text class="description">{{ displayDescription }}</text>
    <button @click="handleAction">{{ displayActionText }}</button>
  </view>
</template>
```

### API 参考

#### useI18n()

组合式 API，用于在组件中使用 i18n 功能。

**返回值:**

```typescript
{
  $t: (key: string, params?: Record<string, any>) => string
  locale: ComputedRef<string>
  availableLocales: ComputedRef<string[]>
  setLocale: (locale: string) => boolean
}
```

#### 全局函数

##### setLanguage(locale: string): boolean

切换应用语言。

- **参数:**
  - `locale`: 语言代码（如 'zh-CN', 'en-US'）
- **返回值:** 切换是否成功

##### registerLocale(locale: string, messages: object): void

注册或更新语言包。

- **参数:**
  - `locale`: 语言代码
  - `messages`: 模块化语言包对象

##### getCurrentLocale(): string

获取当前语言代码。

- **返回值:** 当前语言代码

##### getAvailableLocales(): string[]

获取所有可用语言列表。

- **返回值:** 语言代码数组

### 常见问题

#### Q: 如何添加新语言？

A: 使用 `registerLocale` 函数注册新语言包，然后使用 `setLanguage` 切换。

```typescript
registerLocale('ja-JP', { /* 日语翻译 */ })
setLanguage('ja-JP')
```

#### Q: 如何覆盖默认翻译？

A: 使用 `registerLocale` 注册同语言代码的语言包，只需包含要覆盖的键。

```typescript
registerLocale('zh-CN', {
  common: {
    confirm: '好的'  // 只覆盖这一个键
  }
})
```

#### Q: 组件的文本不随语言切换更新？

A: 确保使用 `computed` 包装翻译文本：

```typescript
// ❌ 错误：不会更新
const title = $t('common.title')

// ✓ 正确：会自动更新
const title = computed(() => $t('common.title'))
```

#### Q: 如何在组件外使用翻译？

A: 使用全局函数或直接访问 I18nManager：

```typescript
import { getCurrentLocale } from 'tang-ui-x'

const locale = getCurrentLocale()
```

#### Q: 支持哪些语言？

A: 内置支持简体中文、英语、繁体中文。您可以通过 `registerLocale` 添加任何语言。

### 跨平台支持

Tang UI X 的国际化系统经过精心设计，确保在所有 uni-app x 支持的平台上都能正常工作。

#### 支持的平台

i18n 系统已在以下平台测试并验证：

- ✅ **Web H5** - 浏览器环境
- ✅ **微信小程序** - WeChat Mini Program
- ✅ **支付宝小程序** - Alipay Mini Program
- ✅ **App (Android/iOS)** - 原生应用

#### 跨平台兼容性设计

为了确保在所有平台上的一致性和可靠性，i18n 系统采用了以下技术方案：

**1. 静态导入机制**

所有语言包文件使用静态 `import` 语句导入，避免使用动态导入或平台特定 API（如 `import.meta.glob`），确保在小程序等受限环境中也能正常工作。

```typescript
// ✓ 使用静态导入（跨平台兼容）
import zhCNCommon from '../locales/zh-CN/common.json'
import enUSCommon from '../locales/en-US/common.json'

// ✗ 避免动态导入（小程序不支持）
// const module = await import(`../locales/${locale}/common.json`)
```

**2. 编译时确定性**

所有文件路径在编译时可解析，确保打包工具能够正确处理语言包文件，无论目标平台是什么。

**3. 同步初始化**

i18n 系统使用同步初始化方式，避免异步操作可能带来的平台兼容性问题：

```typescript
// 同步初始化，所有平台都支持
import { useI18n } from 'tang-ui-x'
const { $t } = useI18n()
```

**4. JSON 文件处理**

语言包使用标准 JSON 格式，确保在所有平台的编译和打包过程中都能被正确处理。

#### 平台特定注意事项

**小程序平台**

- ✓ 语言包会在编译时被打包到小程序包中
- ✓ 所有 i18n API 都可以正常使用
- ✓ 语言切换会立即生效，无需重启小程序

**App 平台**

- ✓ 语言包会被编译到原生应用中
- ✓ 支持热更新后的语言切换
- ✓ 性能与 Web 平台一致

**Web H5 平台**

- ✓ 语言包会被打包到 JavaScript bundle 中
- ✓ 支持浏览器缓存优化
- ✓ 可以与浏览器语言检测结合使用

#### 使用建议

1. **统一的代码**: 在所有平台使用相同的 i18n 代码，无需平台判断
2. **提前测试**: 在目标平台上测试语言切换功能
3. **包体积优化**: 如果只需要部分语言，可以考虑按需注册语言包

#### 示例：跨平台语言切换

以下代码在所有平台上都能正常工作：

```vue
<script setup lang="uts">
import { useI18n, setLanguage } from 'tang-ui-x'

const { locale, availableLocales } = useI18n()

// 这段代码在所有平台都能正常运行
function switchLanguage(lang: string) {
  const success = setLanguage(lang)
  if (success) {
    // 在所有平台上，UI 都会立即更新
    console.log(`语言已切换到: ${lang}`)
  }
}
</script>

<template>
  <view>
    <!-- 在所有平台上显示效果一致 -->
    <button @click="switchLanguage('zh-CN')">中文</button>
    <button @click="switchLanguage('en-US')">English</button>
    <button @click="switchLanguage('zh-TW')">繁體中文</button>
    
    <text>当前语言: {{ locale }}</text>
  </view>
</template>
```

#### 技术细节

如果您对 i18n 系统的跨平台实现感兴趣，以下是关键技术点：

- **语言包加载器**: 使用静态导入映射表，在编译时确定所有语言包路径
- **模块注册表**: 显式维护模块列表，避免运行时文件系统访问
- **响应式系统**: 基于 Vue 3 的响应式系统，在所有平台上表现一致
- **无外部依赖**: 不依赖任何平台特定的 API 或第三方库

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

详细文档请访问：[https://github.com/sugar258596/tang-ui](https://github.com/sugar258596/tang-ui)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## � 链接

- [GitHub](https://github.com/sugar258596/tang-ui)
- [Issues](https://github.com/sugar258596/tang-ui/issues)
- [NPM](https://www.npmjs.com/package/tang-ui-x)

## 📄 License

MIT License

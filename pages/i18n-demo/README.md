# 国际化示例

这个目录包含了两个完整的国际化示例页面，演示如何使用 Tang UI X 的国际化功能。

## 目录结构

```
i18n-demo/
├── locales/                    # 语言包目录
│   ├── ja-JP/                 # 日语语言包
│   │   ├── common.json        # 通用翻译
│   │   ├── form.json          # 表单翻译
│   │   ├── input.json         # 输入框翻译
│   │   ├── dialog.json        # 对话框翻译
│   │   ├── empty.json         # 空状态翻译
│   │   └── loading.json       # 加载翻译
│   └── ko-KR/                 # 韩语语言包
│       ├── common.json
│       ├── form.json
│       ├── input.json
│       ├── dialog.json
│       ├── empty.json
│       └── loading.json
├── register-object.uvue       # 示例1：对象方式注册
├── register-path.uvue         # 示例2：路径方式注册
└── README.md                  # 说明文档

```

## 示例页面

### 1. register-object.uvue - 对象方式注册

演示如何通过传入语言包对象来注册新语言。

**特点：**
- 直接在代码中定义语言包
- 适合少量翻译或动态生成的场景
- 可以灵活控制翻译内容

**使用方法：**
```typescript
i18nManager.registerLocale('ja-JP', {
  common: {
    confirm: '確認',
    cancel: 'キャンセル'
  },
  form: {
    required: 'この項目は必須です'
  }
})
```

**功能：**
- 切换内置语言（中文简体、繁体、英文）
- 动态注册日语语言包
- 动态注册韩语语言包
- 查看翻译文本
- 测试参数插值
- 查看已注册的语言列表

### 2. register-path.uvue - 路径方式注册

演示如何通过传入目录路径来注册新语言。

**特点：**
- 从文件系统加载语言包
- 适合大量翻译或多模块场景
- 自动加载目录下的所有 JSON 文件
- 便于维护和管理

**使用方法：**
```typescript
i18nManager.registerLocale('ja-JP', '@/pages/i18n-demo/locales/ja-JP')
```

**功能：**
- 切换内置语言（中文简体、繁体、英文）
- 从路径注册日语语言包
- 从路径注册韩语语言包
- 查看翻译文本
- 查看文件结构
- 查看已加载的模块
- 查看已注册的语言列表

## 语言包文件

### 日语 (ja-JP)

#### common.json - 通用翻译
```json
{
  "confirm": "確認",
  "cancel": "キャンセル",
  "ok": "OK",
  "delete": "削除",
  "edit": "編集",
  "save": "保存",
  "submit": "送信",
  "reset": "リセット",
  "search": "検索",
  "loading": "読み込み中...",
  "noData": "データがありません",
  "error": "エラーが発生しました"
}
```

#### form.json - 表单翻译
```json
{
  "required": "この項目は必須です",
  "invalid": "形式が正しくありません",
  "minLength": "長さは{min}文字以上である必要があります",
  "maxLength": "長さは{max}文字以下である必要があります",
  "email": "有効なメールアドレスを入力してください",
  "phone": "有効な電話番号を入力してください",
  "url": "有効なURLを入力してください"
}
```

### 韩语 (ko-KR)

#### common.json - 通用翻译
```json
{
  "confirm": "확인",
  "cancel": "취소",
  "ok": "확인",
  "delete": "삭제",
  "edit": "편집",
  "save": "저장",
  "submit": "제출",
  "reset": "재설정",
  "search": "검색",
  "loading": "로딩 중...",
  "noData": "데이터 없음",
  "error": "오류가 발생했습니다"
}
```

#### form.json - 表单翻译
```json
{
  "required": "이 항목은 필수입니다",
  "invalid": "형식이 올바르지 않습니다",
  "minLength": "길이는 {min}자 이상이어야 합니다",
  "maxLength": "길이는 {max}자 이하여야 합니다",
  "email": "유효한 이메일 주소를 입력하세요",
  "phone": "유효한 전화번호를 입력하세요",
  "url": "유효한 URL을 입력하세요"
}
```

## 如何使用

### 1. 在 pages.json 中添加路由

```json
{
  "pages": [
    {
      "path": "pages/i18n-demo/register-object",
      "style": {
        "navigationBarTitleText": "国际化 - 对象方式"
      }
    },
    {
      "path": "pages/i18n-demo/register-path",
      "style": {
        "navigationBarTitleText": "国际化 - 路径方式"
      }
    }
  ]
}
```

### 2. 导航到示例页面

```typescript
// 对象方式示例
uni.navigateTo({
  url: '/pages/i18n-demo/register-object'
})

// 路径方式示例
uni.navigateTo({
  url: '/pages/i18n-demo/register-path'
})
```

## 核心 API

### I18nManager

```typescript
import { I18nManager } from '@/composables/i18n/manager.uts'

const i18nManager = I18nManager.getInstance()

// 注册语言包（对象方式）
i18nManager.registerLocale('ja-JP', {
  common: { confirm: '確認' }
})

// 注册语言包（路径方式）
i18nManager.registerLocale('ja-JP', '@/locales/ja-JP')

// 切换语言
i18nManager.setLocale('ja-JP')

// 获取当前语言
const locale = i18nManager.getLocale()

// 检查语言是否已注册
if (i18nManager.hasLocale('ja-JP')) {
  console.log('日语已注册')
}

// 获取所有可用语言
const locales = i18nManager.getAvailableLocales()
```

### useI18n

```typescript
import { useI18n } from '@/composables/useI18n.uts'

const { t } = useI18n()

// 基础翻译
const text = t('common.confirm')

// 带参数的翻译
const msg = t('form.minLength', { min: 6 })

// 带默认值的翻译
const fallback = t('unknown.key', {}, '默认文本')
```

## 最佳实践

### 1. 组织语言包文件

按模块组织语言包，每个模块一个 JSON 文件：
- `common.json` - 通用翻译
- `form.json` - 表单相关
- `button.json` - 按钮相关
- `dialog.json` - 对话框相关

### 2. 使用路径方式注册

对于大型项目，推荐使用路径方式注册：
```typescript
i18nManager.registerLocale('ja-JP', '@/locales/ja-JP')
```

### 3. 参数插值

使用 `{key}` 格式的占位符：
```json
{
  "minLength": "长度不能少于{min}个字符"
}
```

```typescript
t('form.minLength', { min: 6 })
// 输出: "长度不能少于6个字符"
```

### 4. 持久化语言设置

```typescript
// 保存语言设置
const saveLanguage = (locale: string): void => {
  i18nManager.setLocale(locale)
  uni.setStorageSync('app_locale', locale)
}

// 加载语言设置
const loadLanguage = (): void => {
  const savedLocale = uni.getStorageSync('app_locale')
  if (savedLocale) {
    i18nManager.setLocale(savedLocale)
  }
}
```

## 注意事项

1. **路径格式**：使用 `@/` 开头的绝对路径
2. **文件命名**：语言包文件必须以 `.json` 结尾
3. **模块名称**：模块名称应与文件名一致（不含扩展名）
4. **JSON 格式**：确保 JSON 文件格式正确，避免语法错误
5. **响应式更新**：语言切换后，所有使用 `useI18n` 的组件会自动更新

## 相关文档

- [国际化指南](/guide/i18n)
- [API 文档](/components/)
- [更新日志](/changelog)

## 反馈

如有问题或建议，欢迎在 GitHub 上提交 Issue。

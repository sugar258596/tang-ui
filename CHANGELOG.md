# 更新日志

## [1.3.6] - 2026-05-18

### 新增

- **utils 导出**: 新增 `./utils/*` 和 `./utils` 导出路径，完善 npm 包工具模块导出配置

## [1.3.5] - 2026-05-18

### 新增

- **工具页面**: 新增 `pages/examples/utils.uvue`，展示 `utils/functions` 统一导出的常用方法，并支持 `storage` 的写入、读取、移除与清空演示

- **存储模块**: 新增 `utils/functions/modules/storage.uts`，统一封装 `setStorage`、`getStorage`、`hasStorage`、`removeStorage` 与 `clearStorage`

### 优化

- **导出结构**: 新增 `utils/functions/modules/index.uts` 统一聚合模块导出，并由 `utils/functions/index.uts` 统一转发

- **首页入口**: 更新 `pages/index/index.uvue`，新增 `Utils 工具方法` 跳转入口

### 修复

- **模块整理**: 将原有混合命名的工具文件按功能拆分为日期、字符串、数字、类型、函数、校验、剪贴板、对象与上传模块

## [1.3.4] - 2026-05-16

### 新增

- **组件库覆盖**: 补齐并接入完整组件实现与类型定义
  - 新增 `TActionSheet`、`TAvatar`、`TBadge`、`TButton`、`TCell`、`TCheckbox`、`TCheckboxGroup`、`TCol`、`TCollapse`、`TCollapseItem`、`TDateTimePicker`、`TDialog`、`TDivider`、`TEmpty`、`TErrorState`、`TForm`、`TGrid`、`TGridItem`、`TIcon`、`TImage`、`TInput`、`TLoading`、`TNavBar`、`TNoticeBar`、`TNumberInput`、`TPicker`、`TPopup`、`TProgress`、`TRadioButton`、`TRadioGroup`、`TRate`、`TRow`、`TSearchBar`、`TSelect`、`TSlider`、`TSwiper`、`TSwitch`、`TText`、`TTextarea`、`Tabs`、`Tags` 等组件入口与 `type.uts` 类型文件
  - 新增 `TButton`、`TDateTimePicker`、`TForm`、`TInput`、`TRadioButton`、`TText`、`Tabs`、`Tags` 等组件 README 文档
  - 新增 `types/index.d.ts` 与 `types/index.uts`，完善 npm 包类型入口

- **示例页面**: 补齐组件示例与页面路由
  - 新增 `pages/examples` 下 action-sheet、avatar、badge、button、card、cell、checkbox、collapse、datetime-picker、dialog、divider、empty、error、form、grid、icon、image、input、layout、list、loading、navbar、notice-bar、number-input、picker、popup、progress、radio、rate、search-bar、select、slider、swiper、switch、tabs、tags、text、textarea、toast 等示例页
  - 更新 `pages.json` 与首页示例入口，便于按组件分类预览和回归测试
  - 新增 `.hbuilderx/launch.json`，补充 HBuilderX 调试启动配置

- **国际化示例**: 新增 i18n 演示与多语言资源
  - 新增 `pages/i18n-demo` 示例，覆盖对象注册、路径注册与基础页面展示
  - 新增日语 `ja-JP` 与韩语 `ko-KR` 示例语言包
  - 更新 `locales/en-US`、`locales/zh-CN`、`locales/zh-TW` 示例页面文案

### 优化

- **主题与样式**: 优化主题 token、Tailwind 配置和生成样式
  - 调整 `composables/useTheme.uts` 与 `static/theme.scss`，完善浅色/暗黑主题覆盖
  - 更新 `tailwind.config.cjs`、`postcss.config.cjs` 与 `static/tailwind.css`，同步最新原子类输出
  - 优化 `TCard`、`TList`、`TListItem` 等已有组件样式与交互表现

- **组件体验**: 扩展多组件状态、尺寸、禁用态和示例覆盖
  - 优化 `TAvatar`、`TBadge`、`TImage`、`TPopup`、`TSelect`、`Tabs` 等组件的展示逻辑与示例场景
  - 调整表单、选择、弹层、标签页、文本输入等示例页结构，提升真机调试可读性

### 修复

- **UTS 兼容性**: 修复多处严格相等比较在 UTS 编译链路下的兼容性问题
  - `TBadge`：将 offset、数值和空值判断统一为 UTS 友好的宽松比较
  - `TImage`：修复 `radius` 对数字、字符串与空值混合输入的判断兼容性
  - `Tabs`：修复默认激活项、禁用态、空 key、卡片类型、尺寸判断和 active key 比较逻辑

- **国际化模块**: 修复 locales 与 composables 相关模块兼容性
  - 调整 `composables/i18n/manager.uts`、`composables/i18n/types.uts`、`composables/useI18n.uts` 与 `locales/loader.uts`
  - 修复语言资源加载、注册与示例页面配置的类型和运行时衔接问题

- **弹层与反馈**: 修复 `useModal.uts`、`useToast.uts` 在队列、实例和回调处理上的 UTS 类型兼容问题

### 工程化

- **发布配置**: 更新 `package.json` 发布文件白名单、构建脚本和类型入口配置
- **构建配置**: 更新 `manifest.json`、`vite.config.ts`、Tailwind 与 PostCSS 配置，保持 uni-app x 构建链路一致
- **仓库清理**: 更新 `.gitignore`，移除误提交的 `.gitignore copy`

## [1.3.3] - 2026-05-08

### 修复

- **UTS 兼容性**: 修复 `ReturnType<typeof fn>` 类型查询导致 Android 编译失败的问题
  - `composables/useTheme.uts`：移除不支持的 `ReturnType` 类型注解，改用 `any` 类型
  - `composables/useToast.uts`：同上修复
  - `composables/useModal.uts`：同上修复
  - 统一单例实例的空值判断为 `== null`，避免 UTS 下 `!` 取反语义差异

## [1.3.2] - 2026-05-07

### 优化

- **TDateTimePicker**: 优化上层面板关闭体验
  - 年份/月份等上层面板关闭时，先回退到基础面板，再执行遮罩与底部弹层关闭动画
  - 统一取消、确认、遮罩点击和外部关闭的关闭流程，减少状态切换卡顿

### 修复

- **UTS 兼容性**: 修复多处 `defineModel`、空值推断与实例暴露相关编译告警
  - 调整 `TSelect`、`TPicker`、`TInput`、`TRadioGroup`、`TRadioButton`、`TCheckboxGroup`、`TCollapse`、`Tabs`、`TForm` 等组件的模型类型写法
  - 修复 `TCheckboxGroup`、`TRadioGroup`、`TRadioButton`、`TCheckbox` 的尺寸配置空值告警
  - 修复 `pages/examples/form.uvue` 中表单 `ref` 暴露方法与插槽数据的类型问题
  - 修复 `composables/useToast.uts` 队列项类型过宽导致的重载匹配告警

- **TForm**: 修复类型文件重复导出问题
  - 移除 `components/TForm/type.uts` 中重复的二次导出声明

- **TRate**: 修复震动 API 类型告警
  - 兼容 `uni.vibrateShort` 在 UTS 类型系统下的可选调用

- **发包链路**: 修复发布前校验与类型入口配置
  - 补充 `prepare` / `prepublishOnly` 发布脚本
  - 新增顶层 `types/index.d.ts` 入口
  - 收窄 `files` 白名单，避免无关示例与校验资产进入 npm 包
  - 将 ESLint 配置切换为 ES Module 写法

## [1.2.9] - 2026-04-02

### 新增

- **主题系统**: 新增全局暗黑模式切换能力
  - 扩展 `composables/useTheme.uts`，补充完整的浅色/深色主题 token
  - 应用启动时自动初始化主题，并同步根节点 `data-theme` 与 `t-dark/t-light` 标记
  - 新增 `static/theme.scss`，统一接管页面、文本、边框、遮罩、阴影等暗黑模式覆盖
  - `pages/index/index.uvue` 首页新增“浅色 / 暗黑”按钮切换风格

- **TSelect**: 新增可搜索模式
  - 新增 `filterable` 属性，在下拉面板内显示搜索输入框
  - 新增 `searchPlaceholder` 属性，自定义搜索框占位文案
  - 输入时自动过滤普通选项列表或当前级联层级选项
  - 新增 `input` / `search` 事件，支持父组件接收搜索关键字
  - 多选模式下有搜索关键字时，`全选` 仅作用于当前过滤结果

### 优化

- **TDialog**: 使用 Tailwind 重构样式层，保留原有打开/关闭逻辑
  - 模板样式迁移为 Tailwind class
  - 中心定位与缩放动画改为显式 `transform`，提升 `uvue` 下的兼容性

- **TPopup**: 使用 Tailwind 重构样式层，保留原有弹出逻辑
  - 标题栏、遮罩层、内容区域样式迁移为 Tailwind class
  - 位移与居中动画改为显式 `transform/opacity`，避免 Tailwind transform 工具类在 `uvue` 中失效
  - 修正顶部、左右弹出时与默认导航栏的遮挡问题

- **主题接入**: 优化多组件默认中性色配置
  - `TPopup`、`TSelect`、`TSearchBar`、`TSwitch`、`TSlider`、`TRate`、`TGrid`、`TGridItem`、`TIcon`、`TAvatar`、`TLoading` 等组件默认颜色改为读取主题变量

### 修复

- **TSelect**: 修复下拉选项列表打开后页面仍可滚动的问题
  - 下拉打开时禁止页面滚动，关闭或组件卸载时自动恢复
  - 遮罩层增加触摸拦截，避免滚动穿透到底层页面

- **Tabs**: 修复中文 key 场景下标签可能全部呈现选中态的问题
  - 统一组件内部激活态判断逻辑，避免模板层直接比较 `defineModel` 产生异常
  - 修正 `activeKey` / `defaultActiveKey` 类型定义，与组件内部 `string | number` 实现保持一致
  - `pages/examples/tabs.uvue` 新增中文 key 示例，便于回归验证

- **TLoading**: 修复普通容器内加载状态不显示的问题
  - 非全屏模式下改为覆盖父容器显示
  - 内容区改为 flex 居中，避免依赖失效的位移工具类

## [1.2.8] - 2026-03-02

### 修复

- **Style**: 修复 `style/typography/font.scss` 中 `$font-weights` 导致的 Sass 颜色插值编译警告
- **Style**: 修复 `style/effects/opacity.scss` 中因直接使用 `/` 导致的 Sass 除法运算符废弃警告
- **Tags**: 修复 `pages/examples/tags.uvue` 示例页中组件类型 (`TabItem` -> `TagItem`) 引用错误问题

## [1.2.7] - 2026-02-28

### 新增

- **UI 设计规范**: 引入全新的全局样式系统 (原子化 CSS)
  - 新增 `style/colors/colors.scss` 统一颜色规范，废弃原来的 `colors/index.scss`
  - 新增 `style/effects` 目录，封装触摸反馈、投影效果、透明度等交互样式
  - 新增 `style/layout` 目录，提供 Flexbox、Sizing 相关的实用类
  - 新增 `style/spacing` 目录，提供 Margin、Padding 相关的原子类
  - 新增 `style/typography` 目录，规范字体大小和文本相关样式
  - 新增 `style/grid` 目录，提供网格布局系统相关类
  - 新增 `style/variables.scss` 统一全局 CSS 变量
  - 新增 `style/README.md` 和 `TOUCH_GUIDE.md` 样式系统开发指南

### 优化

- 优化 `uni.scss`，统一引入全新的模块化样式
- 移除不再使用的 `static/logo.png`

## [1.2.6] - 2026-02-28

### 新增

- **TSelect**: 新增级联选择功能
  - 当选项数据 `options` 中包含 `children` 字段时，组件自动启用级联选择模式
  - 支持最多四级深度的级联选择
  - 新增级联选项顶部标签页导航（面包屑式）
  - 新增 `changeOnSelect` 属性，支持级联时选中非叶子节点层级
  - 新增 `separator` 属性，自定义级联模式下选中数据的分隔符
- **TSelect**: 新增国际化(i18n)支持
  - 组件内部文本（"请选择"、"暂无选项"、"全选"、"清空"）现在支持多语言切换
  - 完善 `en-US` 和 `zh-CN` 语言包配置中的表单字段

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

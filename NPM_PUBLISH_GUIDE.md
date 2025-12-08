# NPM 发布指南

## 📋 发布前准备

### 1. 更新 package.json 信息

请修改 `package.json` 中的以下字段：

```json
{
  "name": "@your-org/uniapp-x-ui",  // 改为你的包名
  "author": "Your Name",             // 你的名字
  "repository": {
    "type": "git",
    "url": "https://github.com/your-org/uniapp-x-ui.git"  // 你的仓库地址
  },
  "bugs": {
    "url": "https://github.com/your-org/uniapp-x-ui/issues"
  },
  "homepage": "https://github.com/your-org/uniapp-x-ui#readme"
}
```

### 2. 检查文件结构

确保以下文件已创建：
- ✅ package.json
- ✅ README.md
- ✅ LICENSE
- ✅ .npmignore
- ✅ index.js

### 3. 登录 NPM

如果还没有 NPM 账号，先注册：
```bash
npm adduser
```

如果已有账号，登录：
```bash
npm login
```

验证登录状态：
```bash
npm whoami
```

## 🚀 发布步骤

### 方式一：标准发布

```bash
# 1. 确保在正确的目录
cd /path/to/your/project

# 2. 检查将要发布的文件
npm pack --dry-run

# 3. 发布到 npm（公开包）
npm publish --access public

# 如果是私有包（需要付费账号）
npm publish
```

### 方式二：使用作用域发布（推荐）

如果包名是 `@your-org/uniapp-x-ui` 格式：

```bash
# 发布公开的作用域包
npm publish --access public
```

## 📦 发布后验证

### 1. 检查包是否发布成功

访问：`https://www.npmjs.com/package/@your-org/uniapp-x-ui`

### 2. 测试安装

在另一个项目中测试：
```bash
npm install @your-org/uniapp-x-ui
```

### 3. 测试使用

```vue
<script setup>
import { TButton } from '@your-org/uniapp-x-ui'
</script>

<template>
  <TButton type="primary">测试按钮</TButton>
</template>
```

## 🔄 版本更新

### 更新版本号

```bash
# 补丁版本（bug 修复）：1.0.0 -> 1.0.1
npm version patch

# 次版本（新功能）：1.0.0 -> 1.1.0
npm version minor

# 主版本（破坏性更新）：1.0.0 -> 2.0.0
npm version major
```

### 发布新版本

```bash
# 更新版本后发布
npm publish --access public
```

## ⚠️ 注意事项

### 1. 包名规范
- 包名必须唯一，不能与已有包重复
- 建议使用作用域包：`@your-org/package-name`
- 只能包含小写字母、数字、连字符和下划线

### 2. 版本号规范
遵循语义化版本（Semantic Versioning）：
- 主版本号：不兼容的 API 修改
- 次版本号：向下兼容的功能性新增
- 修订号：向下兼容的问题修正

### 3. 文件大小
- 检查包大小：`npm pack --dry-run`
- 建议控制在 5MB 以内
- 使用 `.npmignore` 排除不必要的文件

### 4. 发布前检查清单
- [ ] 更新了 package.json 中的所有信息
- [ ] 更新了 README.md
- [ ] 测试了所有组件
- [ ] 更新了版本号
- [ ] 提交了所有代码到 Git
- [ ] 打了 Git 标签

## 🛠️ 常见问题

### 1. 发布失败：包名已存在
```
npm ERR! 403 Forbidden - PUT https://registry.npmjs.org/@your-org/uniapp-x-ui
```
解决：更改包名或使用作用域包

### 2. 权限错误
```
npm ERR! code ENEEDAUTH
```
解决：重新登录 `npm login`

### 3. 发布私有包需要付费
```
npm ERR! 402 Payment Required
```
解决：添加 `--access public` 参数

### 4. 撤销已发布的版本
```bash
# 撤销指定版本（24小时内）
npm unpublish @your-org/uniapp-x-ui@1.0.0

# 撤销整个包（24小时内，慎用）
npm unpublish @your-org/uniapp-x-ui --force
```

## 📚 推荐工具

### 1. np - 更好的发布工具
```bash
npm install -g np
np
```

### 2. release-it - 自动化发布
```bash
npm install -D release-it
npx release-it
```

## 🔗 相关链接

- [NPM 官方文档](https://docs.npmjs.com/)
- [语义化版本规范](https://semver.org/lang/zh-CN/)
- [package.json 字段说明](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)

---

## 快速发布命令

```bash
# 完整发布流程
npm login                           # 登录
npm version patch                   # 更新版本
npm publish --access public         # 发布
```

祝发布顺利！🎉

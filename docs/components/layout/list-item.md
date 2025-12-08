# ListItem 列表项

列表项组件，用于在列表中展示单个项目。通常配合 List 组件使用，也可以单独使用。

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

最简单的列表项用法，显示标题。

```vue
<script setup lang="uts">
</script>

<template>
  <TListItem title="列表项标题" />
</template>
```

## 带描述的列表项

通过 `description` 属性添加描述信息。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-container">
    <TListItem 
      title="系统消息" 
      description="您有 3 条未读消息"
    />
    <TListItem 
      title="活动通知" 
      description="新活动即将开始，敬请期待"
    />
  </view>
</template>

<style lang="scss" scoped>
.demo-container {
  display: flex;
  flex-direction: column;
}
</style>
```

## 带图标的列表项

通过 `icon` 属性在左侧显示图标。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-container">
    <TListItem 
      title="个人中心" 
      icon="👤"
    />
    <TListItem 
      title="我的订单" 
      icon="📦"
    />
    <TListItem 
      title="收货地址" 
      icon="📍"
    />
  </view>
</template>

<style lang="scss" scoped>
.demo-container {
  display: flex;
  flex-direction: column;
}
</style>
```

## 显示右侧箭头

通过 `arrow` 属性在右侧显示箭头图标。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-container">
    <TListItem 
      title="账号设置" 
      arrow
    />
    <TListItem 
      title="隐私设置" 
      arrow
    />
    <TListItem 
      title="通知设置" 
      arrow
    />
  </view>
</template>

<style lang="scss" scoped>
.demo-container {
  display: flex;
  flex-direction: column;
}
</style>
```

## 右侧额外信息

通过 `extra` 属性在右侧显示额外信息。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-container">
    <TListItem 
      title="版本号" 
      extra="v1.0.0"
    />
    <TListItem 
      title="系统语言" 
      extra="简体中文"
      arrow
    />
    <TListItem 
      title="缓存大小" 
      extra="128 MB"
      arrow
    />
  </view>
</template>

<style lang="scss" scoped>
.demo-container {
  display: flex;
  flex-direction: column;
}
</style>
```

## 可点击状态

通过 `clickable` 属性启用点击态效果。

```vue
<script setup lang="uts">
const handleClick = (): void => {
  uni.showToast({
    title: '列表项被点击',
    icon: 'none'
  })
}
</script>

<template>
  <view class="demo-container">
    <TListItem 
      title="可点击项" 
      description="点击会有反馈效果"
      arrow
      clickable
      @click="handleClick"
    />
    <TListItem 
      title="普通列表项" 
      description="不可点击"
    />
  </view>
</template>

<style lang="scss" scoped>
.demo-container {
  display: flex;
  flex-direction: column;
}
</style>
```

## 禁用状态

通过 `disabled` 属性禁用列表项。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-container">
    <TListItem 
      title="正常状态" 
      arrow
      clickable
    />
    <TListItem 
      title="禁用状态" 
      description="此功能暂不可用"
      arrow
      clickable
      disabled
    />
    <TListItem 
      title="正常状态" 
      arrow
      clickable
    />
  </view>
</template>

<style lang="scss" scoped>
.demo-container {
  display: flex;
  flex-direction: column;
}
</style>
```

## 完整示例

组合使用各种属性创建完整的列表项。

```vue
<script setup lang="uts">
const handleItemClick = (name: string): void => {
  uni.showToast({
    title: `点击了${name}`,
    icon: 'none'
  })
}
</script>

<template>
  <view class="demo-container">
    <TListItem 
      title="个人信息" 
      description="查看和编辑个人资料"
      icon="👤"
      arrow
      clickable
      @click="handleItemClick('个人信息')"
    />
    <TListItem 
      title="账号安全" 
      description="密码、手机号等安全设置"
      icon="🔒"
      arrow
      clickable
      @click="handleItemClick('账号安全')"
    />
    <TListItem 
      title="消息通知" 
      description="管理消息推送设置"
      icon="🔔"
      extra="已开启"
      arrow
      clickable
      @click="handleItemClick('消息通知')"
    />
    <TListItem 
      title="高级功能" 
      description="此功能需要升级会员"
      icon="⭐"
      arrow
      clickable
      disabled
    />
  </view>
</template>

<style lang="scss" scoped>
.demo-container {
  display: flex;
  flex-direction: column;
}
</style>
```

## 自定义内容

使用默认插槽可以完全自定义列表项的内容。

```vue
<script setup lang="uts">
</script>

<template>
  <TListItem clickable>
    <view class="custom-content">
      <image 
        src="/static/avatar.png" 
        class="avatar"
        mode="aspectFill"
      />
      <view class="info">
        <view class="name-row">
          <text class="name">张三</text>
          <TBadge content="VIP" type="warning" />
        </view>
        <text class="desc">前端工程师 · 北京</text>
      </view>
      <view class="action">
        <TButton text="关注" type="primary" size="small" />
      </view>
    </view>
  </TListItem>
</template>

<style lang="scss" scoped>
.custom-content {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 24px;
}

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.name-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.name {
  font-size: 16px;
  font-weight: 500;
  color: #303133;
}

.desc {
  font-size: 14px;
  color: #909399;
}

.action {
  display: flex;
  align-items: center;
}
</style>
```

## 配合 List 使用

ListItem 通常配合 List 组件使用。

```vue
<script setup lang="uts">
</script>

<template>
  <TList title="设置">
    <TListItem 
      title="账号管理" 
      icon="👤"
      arrow
      clickable
    />
    <TListItem 
      title="隐私设置" 
      icon="🔒"
      arrow
      clickable
    />
    <TListItem 
      title="通知设置" 
      icon="🔔"
      extra="已开启"
      arrow
      clickable
    />
    <TListItem 
      title="关于我们" 
      icon="ℹ️"
      extra="v1.0.0"
      arrow
      clickable
    />
  </TList>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| title | 列表项标题 | string | - | - |
| description | 列表项描述 | string | - | - |
| icon | 左侧图标 | string | - | - |
| extra | 右侧文字 | string | - | - |
| arrow | 是否显示右侧箭头 | boolean | - | false |
| clickable | 是否可点击 | boolean | - | false |
| disabled | 是否禁用 | boolean | - | false |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击列表项时触发（需要 clickable 为 true） | () => void |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义列表项内容 |

## 注意事项

1. ListItem 可以单独使用，也可以配合 List 组件使用
2. 当 `clickable` 为 `true` 时，列表项会有点击态效果（点击时背景色变化）
3. `disabled` 状态下的列表项不会响应点击事件，且显示为半透明（opacity: 0.5）
4. 使用默认插槽时，`title`、`description`、`icon`、`extra`、`arrow` 等属性将不生效
5. 列表项之间的分隔线会自动显示，最后一项不显示分隔线
6. `icon` 属性可以使用 emoji 或图标字体，也可以通过自定义插槽使用图片
7. 当同时设置 `extra` 和 `arrow` 时，箭头会显示在 `extra` 文字的右侧

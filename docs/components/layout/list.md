# List 列表

用于展示列表数据的容器组件，通常配合 ListItem 组件使用。

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

最简单的列表用法，配合 TListItem 组件展示列表项。

```vue
<script setup lang="uts">
</script>

<template>
  <TList>
    <TListItem title="列表项 1" />
    <TListItem title="列表项 2" />
    <TListItem title="列表项 3" />
  </TList>
</template>
```

## 带标题的列表

通过 `title` 属性为列表添加标题。

```vue
<script setup lang="uts">
</script>

<template>
  <TList title="设置">
    <TListItem title="账号管理" arrow clickable />
    <TListItem title="隐私设置" arrow clickable />
    <TListItem title="通知设置" arrow clickable />
  </TList>
</template>
```

## 无边框列表

通过 `border` 属性控制列表是否显示边框。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-container">
    <!-- 有边框（默认） -->
    <TList title="有边框列表" :border="true">
      <TListItem title="列表项 1" />
      <TListItem title="列表项 2" />
    </TList>

    <!-- 无边框 -->
    <TList title="无边框列表" :border="false">
      <TListItem title="列表项 1" />
      <TListItem title="列表项 2" />
    </TList>
  </view>
</template>

<style lang="scss" scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
```

## 列表间距

通过 `spacing` 属性设置列表项之间的间距。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-container">
    <TList title="无间距" spacing="none">
      <TListItem title="列表项 1" />
      <TListItem title="列表项 2" />
      <TListItem title="列表项 3" />
    </TList>

    <TList title="小间距" spacing="small">
      <TListItem title="列表项 1" />
      <TListItem title="列表项 2" />
      <TListItem title="列表项 3" />
    </TList>

    <TList title="中等间距" spacing="medium">
      <TListItem title="列表项 1" />
      <TListItem title="列表项 2" />
      <TListItem title="列表项 3" />
    </TList>

    <TList title="大间距" spacing="large">
      <TListItem title="列表项 1" />
      <TListItem title="列表项 2" />
      <TListItem title="列表项 3" />
    </TList>
  </view>
</template>

<style lang="scss" scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
```

## 带描述的列表项

列表项可以包含标题和描述信息。

```vue
<script setup lang="uts">
</script>

<template>
  <TList title="消息通知">
    <TListItem 
      title="系统消息" 
      description="您有 3 条未读消息"
      arrow
      clickable
    />
    <TListItem 
      title="活动通知" 
      description="新活动即将开始"
      arrow
      clickable
    />
    <TListItem 
      title="更新提醒" 
      description="发现新版本 v2.0.0"
      arrow
      clickable
    />
  </TList>
</template>
```

## 带图标的列表项

通过 `icon` 属性为列表项添加左侧图标。

```vue
<script setup lang="uts">
</script>

<template>
  <TList title="功能菜单">
    <TListItem 
      title="个人中心" 
      icon="👤"
      arrow
      clickable
    />
    <TListItem 
      title="我的订单" 
      icon="📦"
      arrow
      clickable
    />
    <TListItem 
      title="收货地址" 
      icon="📍"
      arrow
      clickable
    />
    <TListItem 
      title="客服中心" 
      icon="💬"
      arrow
      clickable
    />
  </TList>
</template>
```

## 可点击的列表项

通过 `clickable` 属性和 `click` 事件实现列表项的点击交互。

```vue
<script setup lang="uts">
const handleItemClick = (item: string): void => {
  uni.showToast({
    title: `点击了${item}`,
    icon: 'none'
  })
}
</script>

<template>
  <TList title="设置选项">
    <TListItem 
      title="账号安全" 
      arrow
      clickable
      @click="handleItemClick('账号安全')"
    />
    <TListItem 
      title="隐私保护" 
      arrow
      clickable
      @click="handleItemClick('隐私保护')"
    />
    <TListItem 
      title="关于我们" 
      arrow
      clickable
      @click="handleItemClick('关于我们')"
    />
  </TList>
</template>
```

## 带额外信息的列表项

通过 `extra` 属性在列表项右侧显示额外信息。

```vue
<script setup lang="uts">
</script>

<template>
  <TList title="系统信息">
    <TListItem 
      title="版本号" 
      extra="v1.0.0"
    />
    <TListItem 
      title="系统语言" 
      extra="简体中文"
      arrow
      clickable
    />
    <TListItem 
      title="缓存大小" 
      extra="128 MB"
      arrow
      clickable
    />
  </TList>
</template>
```

## 禁用状态

通过 `disabled` 属性禁用列表项。

```vue
<script setup lang="uts">
</script>

<template>
  <TList title="功能列表">
    <TListItem 
      title="可用功能" 
      arrow
      clickable
    />
    <TListItem 
      title="禁用功能" 
      arrow
      clickable
      disabled
    />
    <TListItem 
      title="正常功能" 
      arrow
      clickable
    />
  </TList>
</template>
```

## 自定义列表项内容

使用默认插槽可以完全自定义列表项的内容。

```vue
<script setup lang="uts">
</script>

<template>
  <TList title="自定义内容">
    <TListItem clickable>
      <view class="custom-item">
        <image 
          src="/static/avatar.png" 
          class="avatar"
          mode="aspectFill"
        />
        <view class="info">
          <text class="name">张三</text>
          <text class="desc">前端工程师</text>
        </view>
        <TBadge content="5" />
      </view>
    </TListItem>
  </TList>
</template>

<style lang="scss" scoped>
.custom-item {
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

.name {
  font-size: 16px;
  font-weight: 500;
  color: #303133;
}

.desc {
  font-size: 14px;
  color: #909399;
}
</style>
```

## API

### List Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| title | 列表标题 | string | - | - |
| border | 是否显示边框 | boolean | - | true |
| spacing | 列表项间距 | string | none / small / medium / large | medium |

### ListItem Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| title | 列表项标题 | string | - | - |
| description | 列表项描述 | string | - | - |
| icon | 左侧图标 | string | - | - |
| extra | 右侧文字 | string | - | - |
| arrow | 是否显示右侧箭头 | boolean | - | false |
| clickable | 是否可点击 | boolean | - | false |
| disabled | 是否禁用 | boolean | - | false |

### ListItem Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击列表项时触发 | () => void |

### ListItem Slots

| 名称 | 说明 |
|------|------|
| default | 自定义列表项内容 |

## 注意事项

1. TList 组件通常作为容器使用，需要配合 TListItem 组件展示具体的列表项
2. 列表项的分隔线由 TListItem 组件自动处理，最后一项不显示分隔线
3. 当 `clickable` 为 `true` 时，列表项会有点击态效果
4. `disabled` 状态下的列表项不会响应点击事件，且显示为半透明
5. 使用自定义插槽时，`title`、`description` 等属性将不生效

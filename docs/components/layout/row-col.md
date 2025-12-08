# Row / Col 栅格

基于 24 栅格系统的布局组件，通过 Row 和 Col 组件的组合使用，可以快速创建灵活的响应式布局。

::: tip 代码结构说明
UniApp X 组件使用 `.uvue` 文件格式，代码结构顺序为：`<script>` → `<template>` → `<style>`

Composition API 使用 **UTS 语法**（TypeScript 的 UniApp 扩展版本）
:::

## 基础用法

使用 Row 和 Col 组件创建基础的栅格布局。通过 `span` 属性设置列的宽度，总共 24 列。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-container">
    <!-- 单列 -->
    <TRow>
      <TCol :span="24">
        <view class="col-content">span: 24</view>
      </TCol>
    </TRow>

    <!-- 两列 -->
    <TRow>
      <TCol :span="12">
        <view class="col-content">span: 12</view>
      </TCol>
      <TCol :span="12">
        <view class="col-content">span: 12</view>
      </TCol>
    </TRow>

    <!-- 三列 -->
    <TRow>
      <TCol :span="8">
        <view class="col-content">span: 8</view>
      </TCol>
      <TCol :span="8">
        <view class="col-content">span: 8</view>
      </TCol>
      <TCol :span="8">
        <view class="col-content">span: 8</view>
      </TCol>
    </TRow>
  </view>
</template>

<style lang="scss" scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.col-content {
  padding: 16px;
  background-color: #409eff;
  color: #ffffff;
  text-align: center;
  border-radius: 4px;
}
</style>
```

## 列间距

通过 Row 的 `gutter` 属性设置列之间的间距。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-container">
    <!-- 无间距 -->
    <TRow :gutter="0">
      <TCol :span="8">
        <view class="col-content">无间距</view>
      </TCol>
      <TCol :span="8">
        <view class="col-content">无间距</view>
      </TCol>
      <TCol :span="8">
        <view class="col-content">无间距</view>
      </TCol>
    </TRow>

    <!-- 16px 间距 -->
    <TRow :gutter="16">
      <TCol :span="8">
        <view class="col-content">16px 间距</view>
      </TCol>
      <TCol :span="8">
        <view class="col-content">16px 间距</view>
      </TCol>
      <TCol :span="8">
        <view class="col-content">16px 间距</view>
      </TCol>
    </TRow>

    <!-- 32px 间距 -->
    <TRow :gutter="32">
      <TCol :span="8">
        <view class="col-content">32px 间距</view>
      </TCol>
      <TCol :span="8">
        <view class="col-content">32px 间距</view>
      </TCol>
      <TCol :span="8">
        <view class="col-content">32px 间距</view>
      </TCol>
    </TRow>
  </view>
</template>

<style lang="scss" scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.col-content {
  padding: 16px;
  background-color: #409eff;
  color: #ffffff;
  text-align: center;
  border-radius: 4px;
}
</style>
```

## 列偏移

通过 Col 的 `offset` 属性设置列的偏移量。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-container">
    <TRow :gutter="16">
      <TCol :span="8">
        <view class="col-content">span: 8</view>
      </TCol>
      <TCol :span="8" :offset="8">
        <view class="col-content">span: 8, offset: 8</view>
      </TCol>
    </TRow>

    <TRow :gutter="16">
      <TCol :span="6" :offset="6">
        <view class="col-content">span: 6, offset: 6</view>
      </TCol>
      <TCol :span="6" :offset="6">
        <view class="col-content">span: 6, offset: 6</view>
      </TCol>
    </TRow>

    <TRow :gutter="16">
      <TCol :span="12" :offset="6">
        <view class="col-content">span: 12, offset: 6</view>
      </TCol>
    </TRow>
  </view>
</template>

<style lang="scss" scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.col-content {
  padding: 16px;
  background-color: #409eff;
  color: #ffffff;
  text-align: center;
  border-radius: 4px;
}
</style>
```

## 水平对齐

通过 Row 的 `justify` 属性设置列的水平对齐方式。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-container">
    <!-- 左对齐 -->
    <TRow justify="start" :gutter="16">
      <TCol :span="6">
        <view class="col-content">start</view>
      </TCol>
      <TCol :span="6">
        <view class="col-content">start</view>
      </TCol>
    </TRow>

    <!-- 居中对齐 -->
    <TRow justify="center" :gutter="16">
      <TCol :span="6">
        <view class="col-content">center</view>
      </TCol>
      <TCol :span="6">
        <view class="col-content">center</view>
      </TCol>
    </TRow>

    <!-- 右对齐 -->
    <TRow justify="end" :gutter="16">
      <TCol :span="6">
        <view class="col-content">end</view>
      </TCol>
      <TCol :span="6">
        <view class="col-content">end</view>
      </TCol>
    </TRow>

    <!-- 两端对齐 -->
    <TRow justify="space-between" :gutter="16">
      <TCol :span="6">
        <view class="col-content">space-between</view>
      </TCol>
      <TCol :span="6">
        <view class="col-content">space-between</view>
      </TCol>
    </TRow>

    <!-- 均匀分布 -->
    <TRow justify="space-around" :gutter="16">
      <TCol :span="6">
        <view class="col-content">space-around</view>
      </TCol>
      <TCol :span="6">
        <view class="col-content">space-around</view>
      </TCol>
    </TRow>

    <!-- 平均分布 -->
    <TRow justify="space-evenly" :gutter="16">
      <TCol :span="6">
        <view class="col-content">space-evenly</view>
      </TCol>
      <TCol :span="6">
        <view class="col-content">space-evenly</view>
      </TCol>
    </TRow>
  </view>
</template>

<style lang="scss" scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.col-content {
  padding: 16px;
  background-color: #409eff;
  color: #ffffff;
  text-align: center;
  border-radius: 4px;
}
</style>
```

## 垂直对齐

通过 Row 的 `align` 属性设置列的垂直对齐方式。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-container">
    <!-- 顶部对齐 -->
    <TRow align="top" :gutter="16">
      <TCol :span="8">
        <view class="col-content" style="height: 60px;">top</view>
      </TCol>
      <TCol :span="8">
        <view class="col-content" style="height: 100px;">top</view>
      </TCol>
      <TCol :span="8">
        <view class="col-content" style="height: 80px;">top</view>
      </TCol>
    </TRow>

    <!-- 居中对齐 -->
    <TRow align="middle" :gutter="16">
      <TCol :span="8">
        <view class="col-content" style="height: 60px;">middle</view>
      </TCol>
      <TCol :span="8">
        <view class="col-content" style="height: 100px;">middle</view>
      </TCol>
      <TCol :span="8">
        <view class="col-content" style="height: 80px;">middle</view>
      </TCol>
    </TRow>

    <!-- 底部对齐 -->
    <TRow align="bottom" :gutter="16">
      <TCol :span="8">
        <view class="col-content" style="height: 60px;">bottom</view>
      </TCol>
      <TCol :span="8">
        <view class="col-content" style="height: 100px;">bottom</view>
      </TCol>
      <TCol :span="8">
        <view class="col-content" style="height: 80px;">bottom</view>
      </TCol>
    </TRow>
  </view>
</template>

<style lang="scss" scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.col-content {
  padding: 16px;
  background-color: #409eff;
  color: #ffffff;
  text-align: center;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
```

## 自动换行

Row 组件默认支持自动换行，当列的总宽度超过 24 时会自动换行。

```vue
<script setup lang="uts">
</script>

<template>
  <TRow :gutter="16">
    <TCol :span="8">
      <view class="col-content">span: 8</view>
    </TCol>
    <TCol :span="8">
      <view class="col-content">span: 8</view>
    </TCol>
    <TCol :span="8">
      <view class="col-content">span: 8</view>
    </TCol>
    <TCol :span="8">
      <view class="col-content">span: 8 (换行)</view>
    </TCol>
    <TCol :span="8">
      <view class="col-content">span: 8 (换行)</view>
    </TCol>
  </TRow>
</template>

<style lang="scss" scoped>
.col-content {
  padding: 16px;
  background-color: #409eff;
  color: #ffffff;
  text-align: center;
  border-radius: 4px;
}
</style>
```

## 禁止换行

通过设置 `wrap` 为 `false` 可以禁止自动换行。

```vue
<script setup lang="uts">
</script>

<template>
  <TRow :gutter="16" :wrap="false">
    <TCol :span="8">
      <view class="col-content">span: 8</view>
    </TCol>
    <TCol :span="8">
      <view class="col-content">span: 8</view>
    </TCol>
    <TCol :span="8">
      <view class="col-content">span: 8</view>
    </TCol>
    <TCol :span="8">
      <view class="col-content">span: 8 (不换行)</view>
    </TCol>
  </TRow>
</template>

<style lang="scss" scoped>
.col-content {
  padding: 16px;
  background-color: #409eff;
  color: #ffffff;
  text-align: center;
  border-radius: 4px;
}
</style>
```

## 复杂布局

组合使用各种属性创建复杂的布局。

```vue
<script setup lang="uts">
</script>

<template>
  <view class="demo-container">
    <!-- 头部 -->
    <TRow :gutter="16">
      <TCol :span="24">
        <view class="header">头部</view>
      </TCol>
    </TRow>

    <!-- 内容区 -->
    <TRow :gutter="16">
      <TCol :span="6">
        <view class="sidebar">侧边栏</view>
      </TCol>
      <TCol :span="18">
        <view class="main-content">
          <TRow :gutter="16">
            <TCol :span="12">
              <view class="content-block">内容块 1</view>
            </TCol>
            <TCol :span="12">
              <view class="content-block">内容块 2</view>
            </TCol>
          </TRow>
          <TRow :gutter="16" style="margin-top: 16px;">
            <TCol :span="8">
              <view class="content-block">内容块 3</view>
            </TCol>
            <TCol :span="8">
              <view class="content-block">内容块 4</view>
            </TCol>
            <TCol :span="8">
              <view class="content-block">内容块 5</view>
            </TCol>
          </TRow>
        </view>
      </TCol>
    </TRow>

    <!-- 底部 -->
    <TRow :gutter="16">
      <TCol :span="24">
        <view class="footer">底部</view>
      </TCol>
    </TRow>
  </view>
</template>

<style lang="scss" scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.header,
.footer {
  padding: 24px;
  background-color: #909399;
  color: #ffffff;
  text-align: center;
  border-radius: 4px;
}

.sidebar {
  padding: 24px;
  background-color: #67c23a;
  color: #ffffff;
  text-align: center;
  border-radius: 4px;
  min-height: 200px;
}

.main-content {
  width: 100%;
}

.content-block {
  padding: 24px;
  background-color: #409eff;
  color: #ffffff;
  text-align: center;
  border-radius: 4px;
}
</style>
```

## API

### Row Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| gutter | 列间距（单位 px） | number | - | 0 |
| justify | 水平对齐方式 | string | start / end / center / space-around / space-between / space-evenly | start |
| align | 垂直对齐方式 | string | top / middle / bottom | top |
| wrap | 是否自动换行 | boolean | - | true |
| customClass | 自定义类名 | string | - | - |
| customStyle | 自定义样式 | string | - | - |

### Col Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| span | 栅格占据的列数（共24列） | number | 1-24 | 24 |
| offset | 栅格左侧的间隔格数 | number | 0-23 | 0 |
| customClass | 自定义类名 | string | - | - |
| customStyle | 自定义样式 | string | - | - |

## 注意事项

1. Row 和 Col 必须配合使用，Row 作为容器，Col 作为列
2. 栅格系统基于 24 列，`span` 的值应该在 1-24 之间
3. `gutter` 属性通过 provide/inject 机制传递给 Col 组件，因此 Col 必须是 Row 的直接子组件
4. 当设置 `gutter` 时，Row 会使用负边距来抵消 Col 的内边距，确保整体布局对齐
5. `offset` 属性用于设置列的左侧间隔，不占用 `span` 的列数
6. 当列的总 `span` 超过 24 时，默认会自动换行，可以通过 `wrap` 属性控制
7. `justify` 和 `align` 属性基于 Flexbox 实现，提供了灵活的对齐方式
8. 嵌套使用时，内层的 Row 会创建新的 24 列栅格系统

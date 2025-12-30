# TDateTimePicker 日历时间选择器

日历面板形式的时间选择器组件，支持选择年月、年月日、年月日时分三种模式。

## 基础用法

```vue
<template>
  <TButton text="选择日期" @click="visible = true" />
  <TDateTimePicker
    v-model="visible"
    v-model:value="selectedValue"
    mode="date"
    @confirm="handleConfirm"
  />
</template>

<script setup lang="uts">
import { ref } from 'vue'

const visible = ref<boolean>(false)
const selectedValue = ref<number>(Date.now())

const handleConfirm = (value: number, formatted: string): void => {
  console.log('选中时间戳:', value)
  console.log('格式化时间:', formatted)
}
</script>
```

## 选择模式

### 选择年月 (month)

```vue
<TDateTimePicker v-model="visible" v-model:value="value" mode="month" />
```

### 选择年月日 (date)

```vue
<TDateTimePicker v-model="visible" v-model:value="value" mode="date" />
```

### 选择年月日时分 (datetime)

```vue
<TDateTimePicker v-model="visible" v-model:value="value" mode="datetime" />
```

## 自定义颜色

```vue
<TDateTimePicker
  v-model="visible"
  v-model:value="selectedValue"
  mode="date"
  active-color="#ff6b6b"
  active-text-color="#ffffff"
  today-color="#ff6b6b"
  confirm-color="#ff6b6b"
/>
```

## 自定义日期插槽

```vue
<TDateTimePicker v-model="visible" v-model:value="selectedValue" mode="date">
  <template #day="{ item }">
    <view class="custom-day">
      <text>{{ item.day }}</text>
      <view v-if="hasEvent(item)" class="event-dot"></view>
    </view>
  </template>
</TDateTimePicker>
```

## Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| v-model | 控制选择器显示 | boolean | - | false |
| v-model:value | 选中的时间戳（毫秒） | number | - | 0 |
| mode | 选择模式 | string | month / date / datetime | date |
| title | 选择器标题 | string | - | 选择日期 |
| minDate | 最小可选日期（时间戳） | number | - | 当前时间-100年 |
| maxDate | 最大可选日期（时间戳） | number | - | 当前时间+100年 |
| confirmText | 确认按钮文字 | string | - | 确定 |
| cancelText | 取消按钮文字 | string | - | 取消 |
| showToolbar | 是否显示工具栏 | boolean | - | true |
| activeColor | 选中日期背景颜色 | string | - | #409eff |
| activeTextColor | 选中日期文字颜色 | string | - | #ffffff |
| todayColor | 今天日期文字颜色 | string | - | #409eff |
| confirmColor | 确认/今天按钮颜色 | string | - | #409eff |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| confirm | 点击确认按钮时触发 | (value: number, formatted: string) |
| cancel | 点击取消按钮时触发 | - |
| change | 选项改变时触发 | (value: number) |

## Slots

| 名称 | 说明 | 参数 |
|------|------|------|
| day | 自定义日期单元格内容 | { item: TDateTimePickerDayItem } |

## 类型导出

```typescript
import type {
  TDateTimePickerMode,
  TDateTimePickerDayItem,
  TDateTimePickerProps
} from 'tang-ui-x/components/TDateTimePicker/type.uts'
```

## 跨端兼容性

| 平台 | 支持 |
|------|------|
| H5 | ✅ |
| 微信小程序 | ✅ |
| App (iOS/Android) | ✅ |

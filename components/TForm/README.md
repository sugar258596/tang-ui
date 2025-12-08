# TForm 表单

动态表单组件，支持多种表单控件类型，通过配置化的方式快速构建表单。

## 特性

- 🎯 **配置化**：通过 JSON 配置快速生成表单
- 🎨 **多组件支持**：支持 11 种常用表单组件
- 🔧 **灵活扩展**：支持自定义插槽和组件属性
- ✅ **表单验证**：内置必填验证，支持自定义验证
- 📱 **响应式**：适配各种屏幕尺寸
- 🎭 **TypeScript**：完整的类型定义

## 快速开始

查看完整示例：[example.uvue](./example.uvue)

## 基础用法

```vue
<template>
  <TForm v-model="formData" :schemas="schemas" @submit="handleSubmit" />
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({})

const schemas = [
  {
    field: 'name',
    label: '姓名',
    component: 'Input',
    required: true,
    componentProps: {
      placeholder: '请输入姓名',
      maxlength: 20,
      type: 'text'
    }
  },
  {
    field: 'age',
    label: '年龄',
    component: 'InputNumber',
    required: true,
    componentProps: {
      placeholder: '请输入年龄',
      min: 1,
      max: 120
    }
  },
  {
    field: 'gender',
    label: '性别',
    component: 'Radio',
    required: true,
    componentProps: {
      options: [
        { label: '男', value: 'male' },
        { label: '女', value: 'female' }
      ]
    }
  }
]

const handleSubmit = (values) => {
  console.log('表单数据:', values)
}
</script>
```

## 支持的组件类型

### 输入类

- `Input` - 文本输入框
- `InputNumber` - 数字输入框
- `Textarea` - 多行文本

### 选择类

- `Select` - 下拉选择
- `Date` - 日期选择
- `Time` - 时间选择
- `Radio` - 单选框
- `Checkbox` - 多选框

### 交互类

- `Switch` - 开关
- `Rate` - 评分
- `Slider` - 滑块

## componentProps 属性

`componentProps` 包含所有组件相关的属性，会通过 `v-bind` 绑定到对应组件上。

### 通用属性

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| placeholder | 占位符 | String | - |
| disabled | 是否禁用 | Boolean | false |
| options | 选项列表 | FormOption[] | - |

### Input / Number 属性

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| type | 输入类型 | String | 'text' |
| maxlength | 最大长度 | Number | - |
| min | 最小值 | Number | - |
| max | 最大值 | Number | - |
| focus | 是否自动聚焦 | Boolean | false |
| confirmType | 确认按钮文字 | String | 'done' |

### Textarea 属性

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| maxlength | 最大长度 | Number | - |
| autoHeight | 是否自动高度 | Boolean | false |
| showConfirmBar | 是否显示确认栏 | Boolean | true |

### Date / Time 属性

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| start | 开始日期 | String | - |
| end | 结束日期 | String | - |

### Switch 属性

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| color | 激活颜色 | String | '#007aff' |

### Rate 属性

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| max | 最大值 | Number | 5 |
| allowHalf | 是否允许半星 | Boolean | false |

### Slider 属性

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| min | 最小值 | Number | 0 |
| max | 最大值 | Number | 100 |
| step | 步长 | Number | 1 |
| showValue | 是否显示值 | Boolean | false |

### 常用属性示例

```javascript
// Input 组件
{
  field: 'username',
  label: '用户名',
  component: 'Input',
  componentProps: {
    placeholder: '请输入用户名',
    type: 'text',
    maxlength: 20,
    disabled: false,
    focus: true,
    confirmType: 'done'
  }
}

// InputNumber 组件
{
  field: 'age',
  label: '年龄',
  component: 'InputNumber',
  componentProps: {
    min: 0,
    max: 150,
    disabled: false
  }
}

// Textarea 组件
{
  field: 'description',
  label: '描述',
  component: 'Textarea',
  componentProps: {
    placeholder: '请输入描述',
    maxlength: 500,
    autoHeight: true,
    showConfirmBar: true,
    disabled: false
  }
}

// Select 组件
{
  field: 'city',
  label: '城市',
  component: 'Select',
  componentProps: {
    options: [
      { label: '北京', value: 'beijing' },
      { label: '上海', value: 'shanghai' },
      { label: '广州', value: 'guangzhou' }
    ],
    disabled: false
  }
}

// Radio 组件
{
  field: 'gender',
  label: '性别',
  component: 'Radio',
  componentProps: {
    options: [
      { label: '男', value: 'male' },
      { label: '女', value: 'female' }
    ],
    disabled: false
  }
}

// Checkbox 组件
{
  field: 'hobbies',
  label: '爱好',
  component: 'Checkbox',
  componentProps: {
    options: [
      { label: '阅读', value: 'reading' },
      { label: '运动', value: 'sports' },
      { label: '音乐', value: 'music' }
    ],
    disabled: false
  }
}

// picker 组件
{
  field: 'date',
  label: '日期',
  component: 'date',
  componentProps: {
    start: '2020-01-01',
    end: '2030-12-31',
    disabled: false
  }
}

// switch 组件
{
  field: 'notify',
  label: '通知',
  component: 'switch',
  componentProps: {
    disabled: false,
    color: '#007aff'
  }
}

// rate 组件
{
  field: 'rating',
  label: '评分',
  component: 'rate',
  componentProps: {
    max: 5,
    disabled: false,
    allowHalf: true
  }
}

// slider 组件
{
  field: 'volume',
  label: '音量',
  component: 'slider',
  componentProps: {
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    showValue: true
  }
}
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| v-model | 表单数据 | Object | {} |
| schemas | 表单配置 | FormSchema[] | [] |
| labelWidth | 标签宽度 | String | '160rpx' |
| hideButtons | 隐藏默认按钮 | Boolean | false |

## FormSchema 配置

| 参数 | 说明 | 类型 | 必填 |
|------|------|------|------|
| field | 字段名 | String | 是 |
| label | 标签文本 | String | 是 |
| component | 组件类型 | String | 是 |
| required | 是否必填 | Boolean | 否 |
| componentProps | 组件属性（包含 placeholder、options 等） | Object | 否 |

## Slots

支持为每个字段自定义插槽，插槽名为字段的 `field` 值。

插槽参数：
- `item` - 当前字段配置
- `value` - 当前字段值
- `error` - 当前字段错误信息

```vue
<TForm v-model="formData" :schemas="schemas">
  <!-- 自定义 username 字段 -->
  <template #username="{ item, value, error }">
    <view class="custom-input">
      <input v-model="formData.username" placeholder="自定义用户名输入" />
      <text v-if="error" class="error">{{ error }}</text>
    </view>
  </template>
  
  <!-- 自定义 avatar 字段 -->
  <template #avatar="{ item, value }">
    <view class="avatar-upload">
      <image :src="value || '/static/default-avatar.png'" />
      <button @click="uploadAvatar">上传头像</button>
    </view>
  </template>
</TForm>
```

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| submit | 提交表单 | (values: Object) |
| reset | 重置表单 | - |

## Methods

| 方法名 | 说明 | 参数 | 返回值 |
|--------|------|------|--------|
| submit | 提交表单 | - | Promise<{valid, values}> |
| reset | 重置表单 | - | - |
| validate | 验证表单 | - | Boolean |
| getFormData | 获取表单数据 | - | Object |
| getErrors | 获取错误信息 | - | Object |

## 完整示例

```vue
<template>
  <view>
    <TForm 
      ref="formRef"
      v-model="formData" 
      :schemas="schemas"
      label-width="180rpx"
      @submit="handleSubmit"
      @reset="handleReset" />
    
    <view class="custom-buttons">
      <button @click="handleCustomSubmit">自定义提交</button>
      <button @click="handleValidate">验证</button>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const formRef = ref(null)
const formData = ref({})

const schemas = [
  {
    field: 'username',
    label: '用户名',
    component: 'input',
    required: true,
    placeholder: '请输入用户名'
  },
  {
    field: 'password',
    label: '密码',
    component: 'input',
    type: 'password',
    required: true
  },
  {
    field: 'age',
    label: '年龄',
    component: 'number',
    min: 1,
    max: 120
  },
  {
    field: 'bio',
    label: '简介',
    component: 'textarea',
    placeholder: '请输入个人简介'
  },
  {
    field: 'city',
    label: '城市',
    component: 'select',
    required: true,
    options: [
      { label: '北京', value: 'beijing' },
      { label: '上海', value: 'shanghai' },
      { label: '广州', value: 'guangzhou' }
    ]
  },
  {
    field: 'birthday',
    label: '生日',
    component: 'date'
  },
  {
    field: 'gender',
    label: '性别',
    component: 'radio',
    options: [
      { label: '男', value: 'male' },
      { label: '女', value: 'female' }
    ]
  },
  {
    field: 'hobbies',
    label: '爱好',
    component: 'checkbox',
    options: [
      { label: '阅读', value: 'reading' },
      { label: '运动', value: 'sports' },
      { label: '音乐', value: 'music' }
    ]
  },
  {
    field: 'notify',
    label: '接收通知',
    component: 'switch'
  },
  {
    field: 'rating',
    label: '评分',
    component: 'rate',
    max: 5
  },
  {
    field: 'volume',
    label: '音量',
    component: 'slider',
    min: 0,
    max: 100,
    step: 1
  }
]

const handleSubmit = (values) => {
  console.log('提交:', values)
  uni.showToast({
    title: '提交成功',
    icon: 'success'
  })
}

const handleReset = () => {
  console.log('重置')
}

const handleCustomSubmit = async () => {
  const result = await formRef.value.submit()
  if (result.valid) {
    console.log('验证通过:', result.values)
  } else {
    console.log('验证失败')
  }
}

const handleValidate = () => {
  const isValid = formRef.value.validate()
  console.log('验证结果:', isValid)
  if (!isValid) {
    const errors = formRef.value.getErrors()
    console.log('错误信息:', errors)
  }
}
</script>
```

## 自定义插槽示例

```vue
<template>
  <TForm v-model="formData" :schemas="schemas" @submit="handleSubmit">
    <!-- 自定义用户名输入 -->
    <template #username="{ item, value, error }">
      <view class="custom-field">
        <input 
          v-model="formData.username" 
          placeholder="请输入用户名"
          class="custom-input" />
        <text class="hint">用户名长度 4-16 位</text>
        <text v-if="error" class="error">{{ error }}</text>
      </view>
    </template>
    
    <!-- 自定义头像上传 -->
    <template #avatar="{ item, value }">
      <view class="avatar-upload">
        <image 
          :src="value || '/static/default-avatar.png'" 
          class="avatar-preview" />
        <button @click="handleUploadAvatar" class="upload-btn">
          上传头像
        </button>
      </view>
    </template>
    
    <!-- 自定义地址选择 -->
    <template #address="{ item, value }">
      <view class="address-picker">
        <text>{{ value || '请选择地址' }}</text>
        <button @click="handleSelectAddress">选择地址</button>
      </view>
    </template>
  </TForm>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  username: '',
  avatar: '',
  address: ''
})

const schemas = [
  {
    field: 'username',
    label: '用户名',
    component: 'input',
    required: true
  },
  {
    field: 'avatar',
    label: '头像',
    component: 'input', // 使用插槽时 component 类型不重要
    required: false
  },
  {
    field: 'address',
    label: '地址',
    component: 'input',
    required: true
  }
]

const handleSubmit = (values) => {
  console.log('提交:', values)
}

const handleUploadAvatar = () => {
  uni.chooseImage({
    count: 1,
    success: (res) => {
      formData.value.avatar = res.tempFilePaths[0]
    }
  })
}

const handleSelectAddress = () => {
  // 打开地址选择器
  uni.chooseLocation({
    success: (res) => {
      formData.value.address = res.address
    }
  })
}
</script>

<style>
.custom-field {
  display: flex;
  flex-direction: column;
}

.custom-input {
  padding: 20rpx;
  border: 1rpx solid #e0e0e0;
  border-radius: 8rpx;
}

.hint {
  margin-top: 8rpx;
  font-size: 24rpx;
  color: #999;
}

.error {
  margin-top: 8rpx;
  font-size: 24rpx;
  color: #ff4d4f;
}

.avatar-upload {
  display: flex;
  align-items: center;
  gap: 24rpx;
}

.avatar-preview {
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
}

.upload-btn {
  padding: 16rpx 32rpx;
  background-color: #007aff;
  color: #fff;
  border-radius: 8rpx;
}

.address-picker {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx;
  background-color: #f5f5f5;
  border-radius: 8rpx;
}
</style>
```

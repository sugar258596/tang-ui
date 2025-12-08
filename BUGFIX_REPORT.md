# Bug 修复报告

## 问题描述

在 `pages/examples/radio.uvue` 页面中出现以下错误：
```
main.uts:9 [Vue warn]: Missing required prop: "options"
 at <Index>
```

## 问题分析

### 根本原因
`TRadioButton` 组件的设计存在问题：

1. **组件期望**：`options` 属性被定义为必需属性（无 `?` 标记）
2. **实际使用**：在 `radio.uvue` 页面中，所有 `TRadioButton` 组件都通过**插槽**传递内容，没有传递 `options` 属性
3. **结果**：组件渲染时因为缺少必需的 `options` 属性而报错

### 使用方式不匹配
- **组件设计**：期望通过 `options` 数组渲染多个选项
- **页面使用**：将每个 `TRadioButton` 作为**单个按钮**使用，通过插槽显示内容

## 解决方案

### 1. 重构 TRadioButton 组件 (`components/TRadioButton/index.uvue`)

**主要修改：**

1. **使 `options` 属性可选**
   ```ts
   // 修复前
   options: FormOption[]

   // 修复后
   options?: FormOption[]
   options: (): FormOption[] => []
   ```

2. **添加新的 props 支持单个按钮模式**
   ```ts
   type Props = {
     options?: FormOption[]    // 选项组模式
     value?: string | number   // 单个按钮模式的选项值
     checked?: boolean         // 是否选中
     disabled?: boolean        // 是否禁用
     size?: 'small' | 'medium' | 'large'  // 尺寸
     activeColor?: string      // 活动颜色
     inactiveColor?: string    // 非活动颜色
     name?: string             // 表单名称
   }
   ```

3. **实现双模式支持**
   - **选项组模式**：当传递 `options` 属性时，渲染一组选项
   - **单个按钮模式**：当没有 `options` 时，渲染单个按钮，支持插槽

4. **增强功能**
   - 添加三种尺寸支持（small/medium/large）
   - 完善禁用状态样式
   - 改进颜色主题支持

### 2. 修复示例页面 (`pages/examples/radio.uvue`)

修改"禁用已选中"示例，使用 `v-model` 替代 `checked` 属性：
```vue
<!-- 修复前 -->
<TRadioButton value="2" :checked="true" disabled>禁用已选中</TRadioButton>

<!-- 修复后 -->
<TRadioButton v-model="radioValue4" :value="2" disabled>禁用已选中</TRadioButton>
```

## 验证结果

✅ 修复后，组件支持两种使用方式：

1. **选项组模式**：
   ```vue
   <TRadioButton v-model="value" :options="[
     { label: '选项1', value: '1' },
     { label: '选项2', value: '2' }
   ]" />
   ```

2. **单个按钮模式**（原页面使用方式）：
   ```vue
   <TRadioButton v-model="value" value="option1">选项一</TRadioButton>
   <TRadioButton value="option2" disabled>禁用选项</TRadioButton>
   ```

## 影响的文件

1. `components/TRadioButton/index.uvue` - 重构组件实现
2. `pages/examples/radio.uvue` - 修复示例代码

## 总结

此次修复通过**使 props 可选**和**实现双模式设计**，解决了组件设计和使用方式不匹配的问题，同时保持了向后兼容性。修复后的组件更加灵活，既支持选项组模式，也支持单个按钮模式。

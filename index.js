// UniApp X UI 组件库入口文件
// 注意：uni-app x 项目通常通过 easycom 自动导入组件，无需手动注册

// 导出所有组件（供按需引入使用）
export { default as TButton } from './components/TButton/TButton.vue'
export { default as TIcon } from './components/TIcon/TIcon.vue'
export { default as TText } from './components/TText/TText.vue'
export { default as TImage } from './components/TImage/TImage.vue'
export { default as TDivider } from './components/TDivider/TDivider.vue'

// 布局组件
export { default as TCard } from './components/TCard/TCard.vue'
export { default as TList } from './components/TList/TList.vue'
export { default as TListItem } from './components/TListItem/TListItem.vue'
export { default as TCell } from './components/TCell/TCell.vue'
export { default as TGrid } from './components/TGrid/TGrid.vue'
export { default as TGridItem } from './components/TGridItem/TGridItem.vue'
export { default as TRow } from './components/TRow/TRow.vue'
export { default as TCol } from './components/TCol/TCol.vue'

// 表单组件
export { default as TInput } from './components/TInput/TInput.vue'
export { default as TNumberInput } from './components/TNumberInput/TNumberInput.vue'
export { default as TTextarea } from './components/TTextarea/TTextarea.vue'
export { default as TSearchBar } from './components/TSearchBar/TSearchBar.vue'
export { default as TSwitch } from './components/TSwitch/TSwitch.vue'
export { default as TCheckbox } from './components/TCheckbox/TCheckbox.vue'
export { default as TCheckboxGroup } from './components/TCheckboxGroup/TCheckboxGroup.vue'
export { default as TRadioButton } from './components/TRadioButton/TRadioButton.vue'
export { default as TRadioGroup } from './components/TRadioGroup/TRadioGroup.vue'
export { default as TSelect } from './components/TSelect/TSelect.vue'
export { default as TSlider } from './components/TSlider/TSlider.vue'
export { default as TRate } from './components/TRate/TRate.vue'

// 数据展示
export { default as Tags } from './components/Tags/Tags.vue'
export { default as TBadge } from './components/TBadge/TBadge.vue'
export { default as TAvatar } from './components/TAvatar/TAvatar.vue'
export { default as TProgress } from './components/TProgress/TProgress.vue'
export { default as TNoticeBar } from './components/TNoticeBar/TNoticeBar.vue'
export { default as TCollapse } from './components/TCollapse/TCollapse.vue'
export { default as TCollapseItem } from './components/TCollapseItem/TCollapseItem.vue'
export { default as TEmpty } from './components/TEmpty/TEmpty.vue'
export { default as TErrorState } from './components/TErrorState/TErrorState.vue'
export { default as TSwiper } from './components/TSwiper/TSwiper.vue'

// 反馈组件
export { default as TLoading } from './components/TLoading/TLoading.vue'
export { default as TToast } from './components/TToast/TToast.vue'
export { default as TDialog } from './components/TDialog/TDialog.vue'
export { default as TPopup } from './components/TPopup/TPopup.vue'
export { default as TActionSheet } from './components/TActionSheet/TActionSheet.vue'

// 导航组件
export { default as Tabs } from './components/Tabs/Tabs.vue'
export { default as TNavBar } from './components/TNavBar/TNavBar.vue'

// 导出工具函数（如果有）
export * from './utils'

// 版本信息
export const version = '1.0.0'

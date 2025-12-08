import { defineConfig } from 'vitepress'

export default defineConfig({
  // 站点元数据
  title: 'UniApp X UI',
  description: 'UniApp X UI 组件库文档',
  lang: 'zh-CN',

  // Head 配置
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }]
  ],

  // 外观配置
  appearance: 'dark', // 支持 'dark' | 'light' | true (自动切换)

  // 主题配置
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'UniApp X UI',

    // 顶部导航
    nav: [
      { text: '指南', link: '/guide/', activeMatch: '/guide/' },
      { text: '组件', link: '/components/', activeMatch: '/components/' },
      { text: '设计', link: '/guide/design' },
      { text: '更新日志', link: '/changelog' },
      {
        text: '相关链接',
        items: [
          { text: 'GitHub', link: 'https://github.com/your-repo/uniapp-x-ui' },
          { text: 'UniApp X 官网', link: 'https://uniapp.dcloud.net.cn/' },
          { text: 'UniApp X 文档', link: 'https://doc.dcloud.net.cn/uni-app-x/' }
        ]
      }
    ],

    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quick-start' }
          ]
        },
        {
          text: '使用指南',
          items: [
            { text: '搜索功能', link: '/guide/search' },
            { text: '视觉组件', link: '/guide/visual-components' }
          ]
        },
        {
          text: '进阶',
          items: [
            { text: '设计规范', link: '/guide/design' }
          ]
        }
      ],
      '/components/': [
        {
          text: '组件总览',
          items: [
            { text: '所有组件', link: '/components/' }
          ]
        },
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/basic/button' },
            { text: 'Icon 图标', link: '/components/basic/icon' },
            { text: 'Text 文本', link: '/components/basic/text' },
            { text: 'Image 图片', link: '/components/basic/image' },
            { text: 'Divider 分割线', link: '/components/basic/divider' }
          ]
        },
        {
          text: '布局组件',
          items: [
            { text: 'Card 卡片', link: '/components/layout/card' },
            { text: 'List 列表', link: '/components/layout/list' },
            { text: 'ListItem 列表项', link: '/components/layout/list-item' },
            { text: 'Cell 单元格', link: '/components/layout/cell' },
            { text: 'Grid 宫格', link: '/components/layout/grid' },
            { text: 'GridItem 宫格项', link: '/components/layout/grid-item' },
            { text: 'Row / Col 栅格', link: '/components/layout/row-col' }
          ]
        },
        {
          text: '表单组件',
          items: [
            { text: 'Input 输入框', link: '/components/form/input' },
            { text: 'Textarea 多行文本', link: '/components/form/textarea' },
            { text: 'Switch 开关', link: '/components/form/switch' },
            { text: 'Checkbox 复选框', link: '/components/form/checkbox' },
            { text: 'CheckboxGroup 复选框组', link: '/components/form/checkbox-group' },
            { text: 'Radio 单选框', link: '/components/form/radio' },
            { text: 'RadioGroup 单选框组', link: '/components/form/radio-group' },
            { text: 'Select 选择器', link: '/components/form/select' },
            { text: 'Picker 选择器', link: '/components/form/picker' },
            { text: 'Slider 滑块', link: '/components/form/slider' },
            { text: 'Rate 评分', link: '/components/form/rate' },
            { text: 'SearchBar 搜索框', link: '/components/form/search-bar' },
            { text: 'NumberInput 数字输入', link: '/components/form/number-input' }
          ]
        },
        {
          text: '数据展示',
          items: [
            { text: 'Tags 标签', link: '/components/display/tags' },
            { text: 'Badge 徽标', link: '/components/display/badge' },
            { text: 'Avatar 头像', link: '/components/display/avatar' },
            { text: 'Progress 进度条', link: '/components/display/progress' },
            { text: 'NoticeBar 通知栏', link: '/components/display/notice-bar' },
            { text: 'Collapse 折叠面板', link: '/components/display/collapse' },
            { text: 'CollapseItem 折叠面板项', link: '/components/display/collapse-item' },
            { text: 'Swiper 轮播图', link: '/components/display/swiper' },
            { text: 'Empty 空状态', link: '/components/display/empty' },
            { text: 'ErrorState 错误状态', link: '/components/display/error-state' }
          ]
        },
        {
          text: '反馈组件',
          items: [
            { text: 'Loading 加载', link: '/components/feedback/loading' },
            { text: 'Toast 轻提示', link: '/components/feedback/toast' },
            { text: 'Dialog 对话框', link: '/components/feedback/dialog' },
            { text: 'Popup 弹出层', link: '/components/feedback/popup' },
            { text: 'ActionSheet 动作面板', link: '/components/feedback/action-sheet' }
          ]
        },
        {
          text: '导航组件',
          items: [
            { text: 'Tabs 标签页', link: '/components/navigation/tabs' },
            { text: 'NavBar 导航栏', link: '/components/navigation/navbar' }
          ]
        }
      ]
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-repo/uniapp-x-ui' }
    ],

    // 搜索配置
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        },
        // 搜索快捷键配置
        // 默认支持 Ctrl+K (Windows/Linux) 和 Cmd+K (Mac)
        // 也支持 / 键快速打开搜索

        // 自定义搜索选项
        miniSearch: {
          searchOptions: {
            fuzzy: 0.2,
            prefix: true,
            boost: {
              title: 4,
              text: 2,
              titles: 1
            }
          }
        }
      }
    },

    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present UniApp X UI'
    },

    // 文档页脚配置
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    // 大纲配置
    outline: {
      level: [2, 3],
      label: '页面导航'
    },

    // 返回顶部文本
    returnToTopLabel: '返回顶部',

    // 侧边栏菜单标签
    sidebarMenuLabel: '菜单',

    // 深色模式切换标签
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  },

  // Markdown 配置
  markdown: {
    lineNumbers: true,
    theme: 'material-theme-palenight'
  },

  // 其他配置
  lastUpdated: true,
  cleanUrls: true,

  // 忽略死链接检查（文档构建中）
  ignoreDeadLinks: true
})

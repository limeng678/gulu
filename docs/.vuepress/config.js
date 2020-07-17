module.exports = {
  base:'/lemon/',
  title: 'Lemon UI',
  description: '一个好用的UI框架',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: 'Github', link: 'https://github.com/limeng678/'},
      {text: '欢迎star', link: 'https://github.com/limeng678/Lemon'},
    ],
    sidebar: [
      { title:'介绍',
        collapsable: false,
        children:[
          '/introduce/',
        ],
      },
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/', ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/popover',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/tabs',
          '/components/collapse'
        ]
      },

    ]
  }
}
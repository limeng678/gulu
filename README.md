# Lemon - 一个Vue UI 组件
[![Build Status](https://travis-ci.org/limeng678/gulu.svg?branch=master)](https://travis-ci.org/limeng678/gulu)
## 介绍
这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用。

## 开始使用
  1.添加 CSS 样式 

   使用本框架前，请在 CSS 中开启 border-box
        
        *,*::before,*::after{box-sizing: border-box;}
        
        IE 8 及以上浏览器都支持此样式。
        

  2.安装 lemon
        
        npm i --save lemon1
        
        或者
        
        yarn add lemon1
        

  3.引入 lemon
        
        import {Button, ButtonGroup, Icon} from 'lemon1'
   
        export default {
          name: 'app',
          components: {
            'g-button': Button,
            'g-icon': Icon
          }
        }
        
## 联系方式
   Email: 710450868@qq.com

<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-button>默认按钮</g-button>
    <g-button icon="settings">默认按钮</g-button>
    <g-button :loading="true">默认按钮</g-button>
    <g-button disabled>默认按钮</g-button>
    <g-button icon="thumbs-up">点赞</g-button>
    <g-button icon="download">下载</g-button>
    <g-button icon="left">上一页</g-button>
    <g-button icon="right" icon-position="right">下一页</g-button>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Button from '../../../src/button'
  export default {
    components: {
      'g-button': Button
    },
    data () {
      return {
        content: `
          <g-button>默认按钮</g-button>
          <g-button icon="settings">默认按钮</g-button>
          <g-button :loading="true">默认按钮</g-button>
          <g-button disabled>默认按钮</g-button>
          <g-button icon="thumbs-up">点赞</g-button>
          <g-button icon="download">下载</g-button>
          <g-button icon="left">上一页</g-button>
          <g-button icon="right" icon-position="right">下一页</g-button>

      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
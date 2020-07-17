<template>
  <div style="padding-top: 16px;">
    <h2>设置默认开启内容</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-collapse :selected.sync="selectedItem">
      <g-collapse-item title="This is panel header 1" name="1">
        <div>Lemon UI</div>
      </g-collapse-item>
      <g-collapse-item title="This is panel header 2" name="2">
        <div>Lemon UI</div>
      </g-collapse-item>
      <g-collapse-item title="This is panel header 3" name="3">
        <div>Lemon UI</div>
      </g-collapse-item>
    </g-collapse>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
  import Collapse from '../../../src/collapse'
  import CollapseItem from '../../../src/collapse-item'
  export default {
    components:{
      'g-collapse': Collapse,
      'g-collapse-item': CollapseItem,
    },
    data(){
      return{
        selectedItem: ['1'],
        content: `
           <g-collapse :selected.sync="selectedItem">
              <g-collapse-item title="This is panel header 1" name="1">
                <div>Lemon UI</div>
              </g-collapse-item>
              <g-collapse-item title="This is panel header 2" name="2">
                <div>Lemon UI</div>
              </g-collapse-item>
              <g-collapse-item title="This is panel header 3" name="3">
                <div>Lemon UI</div>
              </g-collapse-item>
           </g-collapse>
      `.replace(/^ {8}/gm, '').trim()

      }
    }
  }
</script>

<style>

</style>
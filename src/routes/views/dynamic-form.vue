<template>
  <div>
    <h1>Router Test</h1>
    <md-field>
      <label>Test Label</label>
      <md-input v-model="test"></md-input>
    </md-field>
  </div>
</template>

<script>
  export default {
    name: 'DynamicForm',
    data(){
      return {
        test: ''
      }
    }
  }
</script>
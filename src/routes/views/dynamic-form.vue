<template>
  <div>
    <h1>Router Test</h1>
    <b-form-input v-model="test"></b-form-input>
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
<template>
  <div >
      <div id="top">
      <Header/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import axios from 'axios'

export default {
  name: 'Home',
  data(){
    return {
      admin: 0
    }
  },
  methods:{
    
  },
  created(){
    localStorage.setItem('authed',this.admin);
  },
  components: {
    Header
  }
}
</script>

<style>
html{
  scroll-behavior: smooth;
}
body{
  margin:0;
  padding:0;
  
}
</style>

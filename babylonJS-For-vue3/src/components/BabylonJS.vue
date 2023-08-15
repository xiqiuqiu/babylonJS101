<template>
 <canvas style="height: 100%;width: 100%"></canvas>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue';
  import { BabylonScene } from '../BabylonEngine/BabylonScene';
  onMounted(()=>{
    const canvas =  document.querySelector("canvas");
    var scene  = new BabylonScene(canvas);
  })
  </script>
  
  <style scoped>
  
  </style>
  
  
<template>
 <canvas style="height: 100%;width: 100%"></canvas>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue';
  // import { BabylonScene } from '../BabylonEngine/BabylonScene';
  import { StandardMaterials } from '../BabylonEngine/StandardMaterial';
  onMounted(()=>{
    const canvas =  document.querySelector("canvas")!;
    // new BabylonScene(canvas);
    new StandardMaterials(canvas);
  })
  </script>
  
  <style scoped>
  
  </style>
  
  
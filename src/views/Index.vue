<template>
  <Header/>
  <div class="index-container">
    <LeftNav/>
    <router-view/>
  </div>
</template>

<script setup>
import Header from "@/components/Header";
import LeftNav from "@/components/LeftNav";
import MainContainer from "@/components/MainContainer";
</script>

<style scoped>
.index-container {
}
</style>
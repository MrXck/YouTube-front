<template>
  <div class="left-nav-parent">
    <div class="left-nav">
      <div class="nav-item" v-for="(item, index) in navItems" :key="index"
           :class="navIndex === index ? 'nav-item-active nav-item' : 'nav-item'">
        <div class="nav-item-icon">
          24
        </div>
        <div class="nav-item-desc">
          {{ item }}
        </div>
      </div>
      <hr/>

    </div>
  </div>
</template>

<script setup>

import {reactive, ref} from "vue";

const navIndex = ref(0)
const navItems = reactive(['首页', 'Shorts', '订阅内容', 'Shorts', '订阅内容', 'Shorts', '订阅内容', 'Shorts', '订阅内容', 'Shorts', '订阅内容'])


</script>

<style scoped>
.left-nav-parent {
  width: 240px;
  overflow-y: auto;
  height: calc(100vh - 56px);
  position: fixed;
  left: 0;
  bottom: 0;
  margin-top: 56px;
  overflow-x: hidden;
  padding-right: 12px;
  box-sizing: border-box;
}

.left-nav {
  width: 240px;
  display: flex;
  flex-direction: column;
  padding: 12px 12px 0 12px;
  box-sizing: border-box;
}

.left-nav-parent:hover::-webkit-scrollbar {
  display: block;
}

/* 定义滚动条的样式 */
.left-nav-parent::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  /*background-color: #f0f0f0;*/
  display: none;
}

/* 定义滚动条的轨道样式 */
.left-nav-parent::-webkit-scrollbar-track {
  /*background-color: #f0f0f0;*/
}

/* 定义滚动条的滑块样式 */
.left-nav-parent::-webkit-scrollbar-thumb {
  /*background-color: #ccc;*/
  background-color: #606060;
  border-radius: 5px;
}

/* 定义滚动条的滑块悬停时的样式 */
.left-nav-parent::-webkit-scrollbar-thumb:hover {
  background-color: #aaa;
}

.nav-item {
  height: 40px;
  width: 204px;
  padding: 12px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  flex-shrink: 0;
  box-sizing: border-box;
}

.nav-item:hover {
  background-color: #f2f2f2;
}

.nav-item-active {
  background-color: #f2f2f2;
}

.nav-item-active:hover {
  background-color: #e6e6e6;
}

.nav-item-icon {
  width: 24px !important;
  height: 24px;
  margin-right: 24px;
}

.nav-item-desc {
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  flex: 1;
}
</style>
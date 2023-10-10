<template>
  <div class="header">
    <div class="header-left">
      <div class="header-left-button">
        <svg height="24" viewBox="0 0 24 24" width="24" focusable="false"
             style="pointer-events: none; display: block; width: 100%; height: 100%;">
          <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
        </svg>
      </div>
      <div class="header-left-icon">
        <img :src="jpg" alt="">
      </div>
    </div>
    <div class="header-center">
      <div class="search-box">
        <div class="search-form">
          <div class="container" :style="showIcon ? 'margin-left: 0;border: 1px solid #1c62b9' : 'margin-left: 32px'">
            <div class="search-icon" v-show="showIcon">
              <svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false"
                   style="pointer-events: none; display: block; width: 100%; height: 100%;">
                <path
                    d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
              </svg>
            </div>
            <div class="search-input">
              <input class="input" :style="showIcon ? 'margin-left: 32px' : 'margin-left: 0'" type="text"
                     placeholder="搜索" @focus="showIcon = true" @blur="showIcon = false">
            </div>
          </div>
          <div class="search-history" v-show="showIcon">
            <div class="search-history-item">
              <div class="search-history-item-left"></div>
              <div class="search-history-item-content">
                <b>倒萨大撒的撒adsad啊</b>
              </div>
              <div class="search-history-item-right">
                <div class="search-history-item-right-button">移除</div>
              </div>
            </div>
          </div>
        </div>
        <div class="search-button">
          <svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false"
               style="pointer-events: none; display: block; width: 60%; height: 60%;">
            <path
                d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
          </svg>
          <div class="search-button-tool-tip">搜索</div>
        </div>
      </div>
    </div>
    <div class="header-right">
      <div>213</div>
      <div>213</div>
      <img :src="jpg" class="user-avatar" alt="">
    </div>
  </div>
</template>

<script setup>
import jpg from '@/assets/1.jpg'
import {ref} from "vue";

const showIcon = ref(false)


</script>

<style scoped>
.header {
  display: flex;
  height: 56px;
  justify-content: space-between;
  padding: 0 16px;
  position: fixed;
  left: 0;
  right: 10px;
  top: 0;
  background-color: white;
  z-index: 999;
}

.header-left {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-left-button {
  width: 40px;
  height: 40px;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 24px;
}

.header-left-button:hover {
  background-color: #e5e5e5;
}

.header-left-icon {
  height: 20px;
  width: 90px;
  padding: 18px 14px 18px 16px;
}

.header-left-icon img {
  height: 20px;
  width: 90px;
}

.header-center {
  flex: 0 1 732px;
  display: flex;
  align-items: center;
}

.search-box {
  margin: 0 0 0 40px;
  padding: 0 4px;
  flex: 1;
  display: flex;
  align-items: center;
}

.search-form {
  height: 40px;
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: row;
}

.search-history {
  position: absolute;
  top: 44px;
  z-index: 1000;
  background-color: white;
  flex: 1;
  width: 100%;
  padding: 16px 0 8px 0;
  border: 1px solid #ccc;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: default;
}

.search-history-item {
  color: #222;
  padding: 0 24px 0 16px;
  font-size: 14px;
  height: 32px;
  display: flex;
  align-items: center;
}

.search-history-item:hover {
  background-color: #eeeeee;
}

.search-history-item-left {
  /*width: 40px;*/

}

.search-history-item-content {
  flex: 1;
}

.search-history-item-right {
}

.search-history-item-right-button {
  cursor: pointer;
  color: #36c;
}

.search-history-item-right-button:hover {
  text-decoration: underline;
}

.container {
  position: relative;
  align-items: center;
  border: 1px solid #ccc;
  border-right: none;
  border-radius: 40px 0 0 40px;
  box-shadow: inset 0 1px 2px #eee;
  color: hsl(0, 0%, 6.7%);
  padding: 0 4px 0 16px;
  margin-left: 32px;
  flex: 1;
  display: flex;
  flex-direction: row;
  transition: .5s;

}

.search-icon {
  position: absolute;
  left: 0;
  color: #030303;
  padding: 0 10px 0 16px;
  transition: .5s;
  animation: fade-in 1s 1;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.search-input {
  width: 100%;
  transition: .5s;
}

.input {
  outline: none !important;
  -webkit-appearance: none;
  -webkit-font-smoothing: antialiased;
  background-color: transparent;
  border: none;
  box-shadow: none;
  color: inherit;
  font-family: Roboto, Noto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  max-width: 100%;
  text-align: inherit;
  width: 100%;
  -webkit-flex: 1;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  flex: 1;
  box-sizing: border-box;
  padding: 1px 0;
  margin: 0;
  transition: .5s;
}

.search-button {
  border: 1px solid #d3d3d3;
  background-color: #f8f8f8;
  border-radius: 0 40px 40px 0;
  cursor: pointer;
  height: 40px;
  width: 64px;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 40px;
}

.search-button:hover {
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  border-color: #c6c6c6;
  background-color: #f0f0f0;
}

.search-button:hover .search-button-tool-tip {
  opacity: 1;
}

.search-button-tool-tip {
  position: absolute;
  top: 62px;
  display: flex;
  outline: none;
  z-index: 1002;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
  transition: .5s;
  background-color: #6f6f6f;
  color: white;
  font-size: 10px;
  border-radius: 4px;
  width: 40px;
  height: 30px;
  justify-content: center;
  align-items: center;
  opacity: 0;
}

.header-right {
  min-width: 225px;
  align-items: center;
  justify-content: flex-end;
  display: flex;
}

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.header-right > * {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
}
</style>
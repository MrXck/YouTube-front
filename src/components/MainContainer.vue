<template>
  <div class="main-container">
    <div class="iron-selector">
      <div class="iron-selector-item">2313213</div>
      <div class="iron-selector-item">2313213</div>
      <div class="iron-selector-item">2313213</div>
      <div class="iron-selector-item">2313213</div>
      <div class="iron-selector-item">2313213</div>
      <div class="iron-selector-item">2313213</div>
      <div class="iron-selector-item">2313213</div>
    </div>
    <div class="media" @click="options = false">
      <div class="grid-container">
        <div class="grid-item-img" v-for="i in 10">
          <img :src="jpg2" alt="">
          <div class="grid-item-desc">
            <div class="grid-item-desc-left">
              <img :src="jpg2" alt="">
            </div>
            <div class="grid-item-desc-right">
              <h3 class="grid-item-desc-title">【ASMR/KU100】耳はむ♡キミをお耳を満たす…マンゾク快眠っ♡【 Ear
                cleaning/Whispering/Finger
                Scratching/Heart Beat】</h3>
              <div class="grid-item-desc-detail grid-item-desc-username">Naco Ch. 餅月なこ</div>
              <div class="grid-item-desc-detail">3.2万次观看 · 直播时间：6天前</div>
            </div>
            <div class="grid-item-desc-button" @click.prevent.stop="showOptions">
              <svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false"
                   style="pointer-events: none; display: block; width: 60%; height: 60%;">
                <path
                    d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="grid-item-desc-button-options" v-show="options" ref="buttonOptions"
             :style="`top: ${top}px;left: ${left}px;`">
          <div class="grid-item-desc-button-options-item">
            <div class="grid-item-desc-button-options-item-icon">
              <svg height="24" viewBox="0 0 24 24" width="24" focusable="false"
                   style="pointer-events: none; display: block; width: 24px; height: 24px;">
                <path d="M21 16h-7v-1h7v1zm0-5H9v1h12v-1zm0-4H3v1h18V7zm-11 8-7-4v8l7-4z"></path>
              </svg>
            </div>
            <div class="grid-item-desc-button-options-item-desc">231321321</div>
          </div>
        </div>
      </div>
    </div>
    <div id="loading"></div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import jpg2 from '@/assets/1.jpg'

const ironSelectorIndex = ref(0)
const options = ref(false)
const buttonOptions = ref(null)
const top = ref(0)
const left = ref(0)


function showOptions(e) {
  const rect = e.target.getBoundingClientRect()
  // console.log(e.target.getBoundingClientRect());
  // console.log(buttonOptions.value)
  options.value = true
  let x = rect.x
  if (window.innerWidth < x + 200 + 240) {
    x -= 200
  }
  top.value = rect.top + 30
  left.value = x
}


onMounted(() => {
  const loading = document.getElementById('loading')
  const ob = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      // todo 在这里滚动加载代码缺少
    }
  }, {
    root: null,
    thresholds: '0.5'
  })

  ob.observe(loading)


})

</script>

<style scoped>
.main-container {
  margin-top: 56px;
  margin-left: 240px;
  padding-left: 20px;
}

.media {
  position: relative;
}

.iron-selector {
  display: flex;
  height: 56px;
  align-items: center;
  position: sticky;
  top: 56px;
  background-color: white;
  z-index: 500;
  overflow-x: auto;
}

.iron-selector-item {
  padding: 0 12px;
  height: 32px;
  display: flex;
  align-items: center;
  margin: 12px 12px 12px 0;
  border-radius: 8px;
  background-color: #f2f2f2;
  cursor: pointer;
  transition: .5s;
}

.iron-selector-item:hover {
  background-color: #e5e5e5;
}

.iron-selector-item-active {
  color: white;
  background-color: #0f0f0f;
}

.grid-container {
  padding-top: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, calc((100% - 20px * 3) / 5));
  column-gap: 10px;
  row-gap: 130px;
  z-index: -1;
}

@media screen and (max-width: 1748px) {
  .grid-container {
    grid-template-columns: repeat(auto-fit, calc((100% - 20px * 3) / 4));
  }
}

@media screen and (max-width: 1592px) {
  .grid-container {
    grid-template-columns: repeat(auto-fit, calc((100% - 20px * 3) / 3));
  }
}

@media screen and (max-width: 1098px) {
  .grid-container {
    grid-template-columns: repeat(auto-fit, calc((100% - 20px * 2) / 2));
  }
}

@media screen and (max-width: 700px) {
  .grid-container {
    grid-template-columns: repeat(auto-fit, calc((100% - 20px) / 1));
  }
}

.grid-item-img {
  position: relative;
  width: 100%;
  padding-bottom: 56.24%;
}

.grid-item-img > img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 100%;
}

.grid-item-desc {
  position: absolute;
  top: 100%;
  display: flex;
  width: 100%;
}

.grid-item-desc-button {
  position: absolute;
  right: -14px;
  top: 6px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.grid-item-desc-button:active {
  background-color: #e5e5e5;
}

.grid-item-desc-button-options {
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 999;
  width: 200px;
  padding: 8px 0;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.1);
}

.grid-item-desc-button-options-item {
  padding: 0 12px 0 16px;
  display: flex;
  align-items: center;
  height: 36px;
  cursor: pointer;

}

.grid-item-desc-button-options-item:hover {
  background-color: #e5e5e5;
}

.grid-item-desc-button-options-item-icon {
  width: 24px;
  height: 24px;
  margin-right: 16px;
}

.grid-item-desc-left {
}

.grid-item-desc-left > img {
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  margin-top: 12px;
  margin-right: 12px;
}

.grid-item-desc-right {
  flex: 1;
  box-sizing: border-box;
  padding-right: 24px;
  cursor: pointer;
}

.grid-item-desc-title {
  color: black;
  overflow: hidden;
  display: block;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: normal;
  height: 44px;
  font-size: 16px;
  margin: 12px 0 4px 0;
  font-weight: 500;
}

.grid-item-desc-detail {
  color: #606060;
  overflow: hidden;
  display: block;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: normal;
}

.grid-item-desc-username:hover {
  color: #0f0f0f;
}
</style>
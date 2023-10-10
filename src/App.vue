<template>
  <router-view/>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}

body {
  height: 100vh;
}

#app {
  height: 100vh;
  overflow-y: auto;
}

/*#app::-webkit-scrollbar { !*滚动条整体样式*!*/
/*  width: 4px; !*高宽分别对应横竖滚动条的尺寸*!*/
/*  height: 4px;*/
/*  scrollbar-arrow-color: red;*/
/*}*/

/*#app::-webkit-scrollbar-thumb { !*滚动条里面小方块*!*/
/*  border-radius: 5px;*/
/*  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);*/
/*  background: rgba(0, 0, 0, 0.2);*/
/*  scrollbar-arrow-color: red;*/
/*}*/

/*#app::-webkit-scrollbar-track { !*滚动条里面轨道*!*/
/*  !*-webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);*!*/
/*  border-radius: 0;*/
/*  background: rgba(0, 0, 0, 0);*/
/*}*/

/* 定义滚动条的样式 */
#app::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: #f0f0f0;
}

/* 定义滚动条的轨道样式 */
#app::-webkit-scrollbar-track {
  /*background-color: #f0f0f0;*/
}

/* 定义滚动条的滑块样式 */
#app::-webkit-scrollbar-thumb {
  /*background-color: #ccc;*/
  background-color: #606060;
  border-radius: 5px;
}

/* 定义滚动条的滑块悬停时的样式 */
#app::-webkit-scrollbar-thumb:hover {
  background-color: #aaa;
}
</style>

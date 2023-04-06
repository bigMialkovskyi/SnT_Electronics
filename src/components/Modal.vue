<template>
  <div id="modal" class="modal-container">
    <div class="modal-content">
      <div class="msg-container">
        <div class="icon-container">
          <img class="modal-img" :src="imgSrc" alt="" />
        </div>
        <h5 class="modal-title">{{ title }}</h5>
        <h5 class="modal-text">{{ text }}</h5>
      </div>
      <div class="nav-box">
        <a class="nav-btn red-btn" @click="$emit('close')">OK</a>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "Modal",
  store,
  emits: ["close"],
  props: {
    title: String,
    imgSrc: String,
    text: String,
  },
};
</script>

<style scoped>
.modal-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
}

.modal-content {
  padding: 2vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 7px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2000;
  width: 400px;
  height: 500px;
  background-color: rgb(135, 206, 250);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
}

.msg-container {
  margin-top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.icon-container {
  width: 40px;
  height: 40px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-title {
  font-size: 30px;
  color: antiquewhite;
}

.modal-text {
  margin-top: 2vh;
  font-size: 16px;
  color: antiquewhite;
}

.nav-btn {
  width: 80px;
  height: 40px;
  border-radius: 10%;
  border: none;
  background-color: rgb(135, 206, 250);
  color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-btn:hover {
  background-color: #33adff;
}

.nav-btn:active {
  background-color: #007acc;
}

.red-btn {
  box-shadow: 0px 0px 1vh rgba(0, 0, 255, 0.3);
  border-top: 3px solid rgb(0, 255, 127, 0.5);
  border-bottom: 3px solid rgb(0, 255, 127, 0.5);
}

.nav-box {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2vh;
  margin-top: auto;
}

.modal-img {
  height: 5vh;
}
</style>
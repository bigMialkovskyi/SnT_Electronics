<template>
  <div class="modal-container">
    <div class="modal-content">
      <div @click="$emit('close')" class="close-btn"><span>X</span></div>
      <div class="input-box">
        <div class="input-element">
          <label for="title">enter the ID  of the sensor</label>
          <input id="title" v-model="sensorID" type="text" />
        </div>
        <div class="input-element">
          <label for="">enter the name of the sensor</label>
          <input v-model="sensorName" type="text" />
        </div>
      </div>
      <div class="nav-box">
        <button
          class="nav-btn green-btn"
          @click="$emit('confirm', { userID, sensorID, sensorName }, true)"
        >
          confirm   
        </button>
        <button class="nav-btn red-btn" @click="$emit('close')">cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "NewSensorWindows",
  store,

  data() {
    return {
      userID: "",
      sensorID: "",
      sensorName: "",
    };
  },

  // props: {
  //   coordinates: {
  //     type: Object,
  //     required: true,
  //   },
  // },

  emits: ["close", "confirm"],

  mounted() {
    this.userID = store.getters.StateUserID;
  },
};
</script>

<style scoped>
input {
  height: 40px;
  width: 300px;
  border-radius: 7px;
  background-color: #ccebff;
  border: 2px solid #0099ff;
}

.input-element {
  display: flex;
  flex-direction: column;
}

label {
  margin-right: auto;
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
  /* text-transform: uppercase; */
}

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
  border-radius: 7px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2000;
  width: 400px;
  height: 500px;
  background-color: #b3e0ff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
}

.close-btn {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  /* right: -20px;
  top: -20px; */
  right: 0px;
  top: 0px;
  z-index: 3000;
  width: 40px;
  height: 40px;
  background-color: #0099ff;
  border-radius: 10%;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
}

.close-btn:hover {
  background-color: #33adff;
}

.close-btn:active {
  background-color: #007acc;
}

.nav-btn {
  width: 80px;
  height: 40px;
  border-radius: 10%;
  border: none;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
}

.green-btn {
  background-color: #66ff33;
}

.green-btn:hover {
  background-color: #8cff66;
}

.green-btn:active {
  background-color: #40ff00;
}

.red-btn {
  background-color: #ff3300;
}

.red-btn:hover {
  background-color: #ff5c33;
}

.red-btn:active {
  background-color: #cc2900;
}

.input-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 75%;
}

.nav-box {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>
<template>
  <div class="register">
    <p>Щоб продовжити вам потрібно зареєструватися</p>
    <div>
      <form class="form" @submit.prevent="submit">
        <div>
          <label for="username">Ім'я користувача:</label>
          <input type="text" name="username" v-model="form.login" />
        </div>

        <div class="pass-box">
          <label for="password">Пароль:</label>
          <input
            v-if="!showPassword"
            class="pass-input"
            type="password"
            name="password"
            v-model="inpPass"
            required
          />
          <input
            v-if="showPassword"
            class="pass-input"
            type="text"
            name="password"
            v-model="inpPass"
            required
          />
          <button class="pass-visible-btn">
            <img
              v-if="!showPassword"
              @click="toggleShow($event)"
              class="view-icon"
              src="../assets/img/view-filled.svg"
              alt="img"
            />
            <img
              v-if="showPassword"
              @click="toggleShow($event)"
              class="view-icon"
              src="../assets/img/view-off-filled.svg"
              alt="img"
            />
          </button>
        </div>

        <div class="pass-box">
          <label for="password">Повторіть свій пароль:</label>
          <input
            v-if="!showPasswordRepeat"
            class="pass-input"
            type="password"
            name="password"
            v-model="inpPassReepat"
            required
          />
          <input
            v-if="showPasswordRepeat"
            class="pass-input"
            type="text"
            name="password"
            v-model="inpPassReepat"
            required
          />
          <button class="pass-visible-btn">
            <img
              v-if="!showPasswordRepeat"
              @click="toggleShowRepeat($event)"
              class="view-icon"
              src="../assets/img/view-filled.svg"
              alt="img"
            />
            <img
              v-if="showPasswordRepeat"
              @click="toggleShowRepeat($event)"
              class="view-icon"
              src="../assets/img/view-off-filled.svg"
              alt="img"
            />
          </button>
        </div>

        <div>
          <label for="email">Електронна пошта:</label>
          <input type="email" name="email" v-model="form.email" />
        </div>

        <div class="pass-box">
          <label for="sensorID">sensorID:</label>
          <input
            v-if="!showPasswordRepeat"
            class="pass-input"
            type="text"
            name="sensorID"
            v-model="form.sensorID"
            required
          />
          <button class="pass-visible-btn">
            <img
              @click="showModal = !showModal"
              class="view-icon"
              src="../assets/img/info-circle.svg"
              alt="img"
            />
          </button>
        </div>

        <button class="submit-button" type="submit">Підтвердити</button>
      </form>
      <p v-if="showError" id="error">{{ errorMessage }}</p>
      <div class="have-account">
        <p>Ви вже зареєстровані?</p>
        <router-link to="/login">
          <button>Вхід до особистого кабінету</button>
        </router-link>
      </div>
    </div>
    <Modal
      v-if="showModal"
      @close="showModal = false"
      :title="modal.title"
      :text="modal.text"
      :imgSrc="modal.imgSrc"
    />
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import { mapActions } from "vuex";
import modalImg from "@/assets/img/qr-code-outline.svg";

export default {
  name: "Register",
  components: {
    Modal,
    modalImg,
  },
  data() {
    return {
      form: {
        login: "",
        password: "",
        email: "",
        sensorID: "",
      },
      modal: {
        title: "Sensor ID",
        text: "Унікальний ідентифікатор пристрою (потрібен длятого, щоб впевнититсь що ви являєтесь нашим клієнтом)",
        imgSrc: modalImg,
      },
      inpPass: "",
      inpPassReepat: "",
      errorMessage: "",
      showError: false,
      showPassword: false,
      showPasswordRepeat: false,
      showModal: false,
    };
  },

  watch: {
    inpPassReepat() {
      if (this.inpPass == this.inpPassReepat) {
        this.form.password = this.inpPassReepat;
        this.errorMessage = "";
        this.showError = false;
      } else {
        this.errorMessage = "паролі не співпадають";
        this.showError = true;
      }
    },
    inpPass() {
      if (this.inpPass == this.inpPassReepat) {
        this.form.password = this.inpPassReepat;
        this.errorMessage = "";
        this.showError = false;
      } else {
        this.errorMessage = "паролі не співпадають";
        this.showError = true;
      }
    },
    showModal: function () {
      if (this.showModal) {
        document.documentElement.style.overflow = "hidden";
        return;
      }
      document.documentElement.style.overflow = "auto";
    },
  },

  methods: {
    ...mapActions(["Register"]),
    async submit() {
      try {
        await this.Register(this.form);
        this.$router.push("/login");
        this.showError = false;
      } catch (error) {
        console.error(error);
        this.errorMessage = error.response.data.error;
        this.showError = true;
      }
    },
    toggleShow(e) {
      e.preventDefault();
      this.showPassword = !this.showPassword;
    },
    toggleShowRepeat(e) {
      e.preventDefault();
      this.showPasswordRepeat = !this.showPasswordRepeat;
    },
  },
};
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}
.register {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  height: 90vh;
  justify-content: center;
  text-align: center;
}
.form {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.submit-button {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
.have-account {
  // margin-top: 20px;
  padding-top: 20px;
  p {
    background: rgba(0, 0, 0, 0.04);
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
    margin: 20px 0;
  }
  button {
    background-color: #00bfff;
    color: white;
    padding: 12px 20px;
    cursor: pointer;
    border-radius: 7px;
    width: 100%;
  }
  button:hover {
    cursor: pointer;
    background-color: #87cefa;
  }
}
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}
button[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 7px;
}
button[type="submit"]:hover {
  background-color: #45a049;
}
input {
  height: 5vh;
  width: 20vh;
  margin: 5px 0 5px 5px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 10px;
  border-radius: 7px;
}
.pass-box {
  display: flex;
  align-items: center;
}
.pass-input {
  width: 15vh;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.pass-visible-btn {
  width: 5vh;
  height: 5vh;
  margin: 0;
  border-left: 0;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
}

.view-icon {
  height: 3vh;
}
#error {
  color: red;
}
</style>
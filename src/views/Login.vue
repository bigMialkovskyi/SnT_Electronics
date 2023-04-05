<template>
  <div class="login">
    <p>Для входу введіть ім'я користувача та пароль</p>
    <div>
      <form class="form" @submit.prevent="submit">
        <div>
          <label for="username">Ім'я користувача:</label>
          <input type="text" name="username" v-model="form.login" required />
        </div>
        <div class="pass-box">
          <label for="password">Пароль:</label>
          <input
            v-if="!showPassword"
            class="pass-input"
            type="password"
            name="password"
            v-model="form.password"
            required
          />
          <input
            v-if="showPassword"
            class="pass-input"
            type="text"
            name="password"
            v-model="form.password"
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
        <button class="submit-button" type="submit">Вхід</button>
      </form>
      <p v-if="showError" id="error">{{ errorMessage }}</p>
      <div class="have-account">
        <p>Ви ще не зареєстровані?</p>
        <router-link to="/register">
          <button>Прейти до реєстрації</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  components: {},
  data() {
    return {
      form: {
        login: "",
        password: "",
      },
      errorMessage: "",
      showError: false,
      showPassword: false,
    };
  },
  methods: {
    ...mapActions(["LogIn"]),
    async submit() {
      try {
        await this.LogIn(this.form);
        this.$router.push("/user-page");
        this.showError = false;
      } catch (error) {
        this.errorMessage = error.response.data.error;
        this.showError = true;
      }
    },
    toggleShow(e) {
      e.preventDefault();
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}
.have-account {
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
.login {
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
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
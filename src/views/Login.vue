<template>
  <div class="login">
    <p>Для входу введіть ім'я користувача та пароль</p>
    <div>
      <form class="form" @submit.prevent="submit">
        <div>
          <label for="username">Ім'я користувача:</label>
          <input type="text" name="username" v-model="form.username" />
        </div>
        <div>
          <label for="password">Пароль:</label>
          <input type="password" name="password" v-model="form.password" />
        </div>
        <button class="submit-button" type="submit">Підтвердити</button>
      </form>
      <p v-if="showError" id="error">Username or Password is incorrect</p>
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
        username: "",
        password: "",
      },
      showError: false,
    };
  },
  methods: {
    ...mapActions(["LogIn"]),
    async submit() {
      const User = new FormData();
      User.append("username", this.form.username);
      User.append("password", this.form.password);
      try {
        await this.LogIn(User);
        this.$router.push("/posts");
        this.showError = false;
      } catch (error) {
        this.showError = true;
      }
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
    border-radius: 30px;
    width: 100%;
  }
  button:hover {
    cursor: pointer;
    background-color: #87cefa;
  }
}
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
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
  border-radius: 30px;
}
button[type="submit"]:hover {
  background-color: #45a049;
}
input {
  margin: 5px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 10px;
  border-radius: 30px;
}
#error {
  color: red;
}
</style>
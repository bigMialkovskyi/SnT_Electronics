<template>
  <div class="register">
    <div>
      <form class="form" @submit.prevent="submit">
        <div>
          <label for="username">І'мя користувача:</label>
          <input type="text" name="username" v-model="form.username" />
        </div>
        <!-- <div>
          <label for="full_name">Full Name:</label>
          <input type="text" name="full_name" v-model="form.full_name" />
        </div> -->
        <div>
          <label for="password">Пароль:</label>
          <input type="password" name="password" v-model="form.password" />
        </div>
        <button class="submit-button" type="submit">Підтвердити</button>
      </form>
    </div>
    <p v-if="showError" id="error">Користувач з таким іменем уже існує</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Register",
  components: {},
  data() {
    return {
      form: {
        username: "",
        // full_name: "",
        password: "",
      },
      showError: false,
    };
  },
  methods: {
    ...mapActions(["Register"]),
    async submit() {
      try {
        await this.Register(this.form);
        this.$router.push("/posts");
        this.showError = false;
      } catch (error) {
        this.showError = true;
      }
    },
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
.register {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
}
.form {
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
  color: red;
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
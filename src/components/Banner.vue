<template>
  <section class="banner">
    <div class="container">
      <div class="banner-content" v-if="!showModal">
        <!-- <h1 class="slogan">Здоров Василь</h1> -->
        <h1 class="slogan">Електроніка на замовлення</h1>
        <h2 class="slogan-desc">Ваші бажання - наші турботи</h2>
        <a href="#" @click="showModal = true">Зв'яжись з нами</a>
      </div>

      <div class="modal-container" v-if="showModal" @close="showModal = false">
        <form
          @submit="checkForm"
          action="mailto:sntelectronx@gmail.com"
          method="post"
          enctype="text/plain"
        >
          <label>Name</label>
          <input
            type="text"
            v-model="name"
            name="name"
            placeholder="Your Name"
          />
          <label>Email</label>
          <input
            type="email"
            v-model="email"
            name="email"
            placeholder="Your Email"
          />
          <label>Message</label>
          <textarea
            name="message"
            v-model="message"
            cols="30"
            rows="5"
            placeholder="Message"
          >
          </textarea>

          <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
              <li class="error-message" v-for="error in errors" v-bind:key="error">{{ error }}</li>
            </ul>
          </p>

          <input type="submit" value="Send" />
        </form>
        <button class="close-btn" @click="clearErrors">Close</button>
        <span class="top"></span>
        <span class="right"></span>
        <span class="bottom"></span>
        <span class="left"></span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      showModal: false,
      errors: [],
      email: null,
      name: null,
      message: null,
    };
  },
  methods: {
    checkForm: function (e) {
      if (this.name && this.email && this.message) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push("Name required.");
      }
      if (!this.email) {
        this.errors.push("Email required.");
      }
      if (!this.message) {
        this.errors.push("Message required.");
      }
      e.preventDefault();
    },

    clearErrors: function (e) {
      this.errors.length = 0;
      this.showModal = false;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";
@import "../styles/banner.scss";

* {
  box-sizing: border-box;
}

.modal-container {
  position: relative;
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  background-color: rgb(240, 248, 255);
  padding: 20px;
  width: 50%;
  box-shadow: 0 8px 26px rgba(0, 0, 0, 0.4), 0 28px 30px rgba(0, 0, 0, 0.3);
}

label {
  float: left;
}

input[type="text"],
[type="email"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

.close-btn {
  color: red;
  padding: 6px 20px;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.error-message {
  color: red;
}

@media screen and (max-width: 767px) {
  .modal-container {
    width: 75%;
  }
}

@media screen and (max-width: 575px) {
  .modal-container {
    width: 100%;
  }
}
//////

span {
  position: absolute;
  border-radius: 100vmax;
}

.top {
  top: 0;
  left: 0;
  width: 0;
  height: 5px;
  background: linear-gradient(
    90deg,
    transparent 50%,
    rgba(255, 49, 49, 0.5),
    rgb(255, 49, 49)
  );
}

.bottom {
  right: 0;
  bottom: 0;
  height: 5px;
  background: linear-gradient(
    90deg,
    rgb(57, 255, 20),
    rgba(57, 255, 20, 0.5),
    transparent 50%
  );
}

.right {
  top: 0;
  right: 0;
  width: 5px;
  height: 0;
  background: linear-gradient(
    180deg,
    transparent 30%,
    rgba(0, 255, 255, 0.5),
    rgb(0, 255, 255)
  );
}

.left {
  left: 0;
  bottom: 0;
  width: 5px;
  height: 0;
  background: linear-gradient(
    180deg,
    rgb(255, 255, 113),
    rgba(255, 255, 113, 0.5),
    transparent 70%
  );
}

.top {
  animation: animateTop 3s ease-in-out infinite;
}

.bottom {
  animation: animateBottom 3s ease-in-out infinite;
}

.right {
  animation: animateRight 3s linear infinite;
}

.left {
  animation: animateLeft 3s ease-in-out infinite;
}

@keyframes animateTop {
  25% {
    width: 100%;
    opacity: 1;
  }

  30%,
  100% {
    opacity: 0;
  }
}

@keyframes animateBottom {
  0%,
  50% {
    opacity: 0;
    width: 0;
  }

  75% {
    opacity: 1;
    width: 100%;
  }

  76%,
  100% {
    opacity: 0;
  }
}

@keyframes animateRight {
  0%,
  25% {
    opacity: 0;
    height: 0;
  }

  50% {
    opacity: 1;
    height: 100%;
  }

  55%,
  100% {
    height: 100%;
    opacity: 0;
  }
}

@keyframes animateLeft {
  0%,
  75% {
    opacity: 0;
    bottom: 0;
    height: 0;
  }

  100% {
    opacity: 1;
    height: 100%;
  }
}
</style>

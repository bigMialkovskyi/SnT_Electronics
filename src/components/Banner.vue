<template>
  <section class="banner">
    <div class="container">
      <div class="banner-content" v-if="!showModal">
        <h1 class="slogan">Електроніка на замовлення</h1>
        <h2 class="slogan-desc">Ваші бажання - наші турботи</h2>
        <a href="#" @click="showModal = true">Зв'яжись з нами</a>
      </div>
      <div class="modal-window" v-if="showModal" @close="showModal = false">
        <form
          action="mailto:sntelectronx@gmail.com"
          method="post"
          enctype="text/plain"
        >
          <div>
            <label for="name">Name:</label><br />
            <input type="text" id="name" name="name" /><br />
            <label for="email">Email:</label><br />
            <input type="email" id="email" name="email" /><br />
            <label for="message">Message:</label><br />
            <textarea id="message" name="message"></textarea><br />
          </div>
          <input class="send-btn" type="submit" value="Send" />
        </form>
        <button class="close-btn" @click="showModal = false">Close</button>
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
    };
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";
@import "../styles/banner.scss";

.modal-window {
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  height: 500px;
  margin-left: auto;
  margin-right: auto;
  background: rgba(30, 144, 255, 0.8);
  padding: 2%;
  border-radius: 5px;
  input[type="text"],
  input[type="email"] {
    border-radius: 5px;
    border: 2px solid $Blue;
    height: 30px;
    width: 200px;
    margin-bottom: 7px;
  }
  textarea {
    border-radius: 5px;
    border: 2px solid $Blue;
    min-height: 200px;
    max-height: 200px;
    max-width: 100%;
    min-width: 100%;
    resize: none;
  }
}

form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
}

.send-btn {
  @include button();
  border-radius: 5px;
}
.close-btn {
  background: rgb(30, 144, 255);
  border-radius: 5px;
}

@media screen and (max-width: 767px) {
  input,
  textarea {
    max-width: 90%;
    min-width: 90%;
  }
  .modal-window, .send-btn {
    width: 90%;
  }
}
</style>
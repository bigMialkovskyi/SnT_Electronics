<template>
  <section id="contacts" class="contacts">
    <div class="container">
      <h1 class="contacts-title">Зв'яжіться з нами</h1>
      <div class="contacts-info">
        <ul class="contacts-list">
          <p>Телефонуйте:</p>
          <li>
            <div class="icon-container">
              <img src="../assets/img/phone-call.svg" alt="" />
            </div>
            <a href="tel:(067) 570 34 89">(067) 570 34 89</a>
          </li>
          <li>
            <div class="icon-container">
              <img src="../assets/img/phone-call.svg" alt="" />
            </div>
            <a href="tel:(067) 570 34 89">(067) 570 34 89</a>
          </li>
          <P>Пошта:</P>
          <li>
            <div class="icon-container">
              <img src="../assets/img/mail.svg" alt="" />
            </div>
            <a href="">sntelectronx@gmai.com</a>
          </li>
        </ul>

        <ul class="social">
          <p>Ми в соцмережах:</p>
          <li>
            <div class="icon-container">
              <img src="../assets/img/instagram-social.svg" alt="" />
            </div>
            <a href="https://instagram.com/snt_electronics?igshid=OGQ2MjdiOTE="
              >Instagram</a
            >
          </li>
          <li>
            <div class="icon-container">
              <img src="../assets/img/social-youtube.svg" alt="" />
            </div>
            <a @click="showModal = !showModal" href="#modal">YouTube</a>
          </li>
        </ul>
      </div>
      <Modal
        v-if="showModal"
        @close="showModal = false"
        :title="modal.title"
        :text="modal.text"
        :imgSrc="modal.imgSrc"
      />
    </div>
  </section>
</template>

<script>
import Modal from "@/components/Modal.vue";
import modalImg from "@/assets/img/social-youtube.svg";

export default {
  components: { Modal },
  name: "Contacts",
  props: {
    msg: String,
  },
  data() {
    return {
      showModal: false,
      modal: {
        title: "Зовсім скоро",
        text: "Наразі, додаткову інформацію ви можете знайти на нашій сторінці Instagram. Дякуюємо що ви з нами.",
        imgSrc: modalImg,
      },
    };
  },

  watch: {
    showModal: function () {
      if (this.showModal) {
        document.documentElement.style.overflow = "hidden";
        return;
      }

      document.documentElement.style.overflow = "auto";
      //  <Modal
      //  @wheel.prevent
      //  @touchmove.prevent
      //  @scroll.prevent
      // />
      // does not work
    },
  },
};
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";
@import "../styles/contacts.scss";
</style>
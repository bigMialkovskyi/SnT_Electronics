<template>
   <section id="contacts"   class="contacts">
    <div class="container">
      <h1 class="contacts-title">Звяжіться з нами</h1>
      <div class="contacts-info">
        <ul class="contacts-list">
          <p>Телефонуйте:</p>
          <li>
            <div class="icon-container">
              <img src="../assets/img/phone-call.svg" alt="">
            </div>
            <a href="tel:(067) 570 34 89">(067) 570 34 89</a>
          </li>
          <li>
            <div class="icon-container">
              <img src="../assets/img/phone-call.svg" alt="">
            </div>
            <a href="tel:(067) 570 34 89">(067) 570 34 89</a>
          </li>
          <P>Пошта:</P>
          <li>
            <div class="icon-container">
              <img src="../assets/img/mail.svg" alt="">
            </div>
            <a href="">sntelectronx@gmai.com</a>
          </li>
        </ul>

        <ul class="social">
          <p> Ми в соцмережах:</p>
          <li>
            <div class="icon-container">
              <img src="../assets/img/instagram-social.svg" alt="">
            </div>
            <a href="https://instagram.com/snt_electronics?igshid=OGQ2MjdiOTE=">Instagram</a>
            <!-- <p>Instagram</p> -->
          </li>
          <li>
            <div class="icon-container">
              <img src="../assets/img/social-youtube.svg" alt="">
            </div>
            <p>YouTube</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contacts',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";
@import "../styles/contacts.scss";

</style>
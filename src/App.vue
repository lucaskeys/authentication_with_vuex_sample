<template>
  <div id="app">
    <navbar />
    <section v-if="isUserAuth" class="section">
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      Welcome {{ getUser.email }}
    </div>
  </div>
</section>
    <section class="section">
      <div class="container is-desktop">
        <router-view />
      </div>
    </section>
  </div>
</template>
<script>
import Navbar from "./components/Navbar";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { Navbar },
  mounted() {
    this.authAction();
  },
  computed: {
    ...mapGetters(["getUser", "isUserAuth"])
  },
  methods: {
    ...mapActions(["authAction"])
  }
};
</script>
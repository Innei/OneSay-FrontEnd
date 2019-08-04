<template>
  <div>
    <nav-bar :navbarActive="navbarActive"></nav-bar>
    <main>
      <transition name="slide-fade" mode="out-in">
        <router-view class="body" v-on:viewIn="closeNavbar"></router-view>
      </transition>
      <foot-er></foot-er>
    </main>
  </div>
</template>

<script>
import navBar from "../components/nav-bar";
import footer from "../components/footer";
export default {
  components: {
    "nav-bar": navBar,
    "foot-er": footer
  },
  data() {
    return {
      navbarActive: false
    };
  },
  methods: {
    closeNavbar() {
      this.navbarActive = false;
    }
  }
};
</script>

<style scoped>
main {
  margin: auto;
  padding-left: 5rem;
  max-width: 45rem;
}
.body {
  margin-top: 1rem;
  margin-bottom: 4rem;
  min-height: 70vh;
}
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
@media screen and (max-width: 900px) {
  main {
    padding-left: 2rem;
  }
}
@media screen and (max-width: 600px) {
  main {
    padding-right: 2rem;
  }
}
</style>

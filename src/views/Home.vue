<template>
  <div>
    <nav-bar></nav-bar>
    <main>
      <transition name="slide-fade" mode="out-in">
        <router-view class="body"></router-view>
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
  margin-bottom: 4rem
}
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>

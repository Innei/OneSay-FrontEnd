<template>
  <div>
    <nav-bar></nav-bar>
    <main>
      <router-view></router-view>
    </main>

    <foot-er></foot-er>
  </div>
</template>

<script>
import navBar from "../components/nav-bar";
export default {
  components: {
    "nav-bar": navBar
  }
};
</script>

<style scoped>
main {
    margin: auto;
    padding-left: 5rem;
    max-width: 45rem
}

</style>

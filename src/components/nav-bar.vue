<template>
  <div class="navbar">
    <div class="toggle"></div>
    <div class="wrap">
      <div class="header"></div>
      <div class="items"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
  color: #fff;
  width: 10em;
  position: fixed;
  background: #3498db;
  transition: transform 0.3s;
}
</style>



<template>
  <div class="col-6 col-m-4">
    <a class="box first" href="#">
      <h3>
        <i class="fa fa-music"></i>一言
      </h3>
      <p>一言</p>
    </a>
  </div>
</template>

<script>
import "../assets/css/gird.css";
export default {};
</script>

<style lang="scss" scoped>
.box {
  &.first {
    background: #2ecc71;
    animation-delay: 0.2s;
  }

  height: 100%;
  color: #fff;
  display: block;
  padding: 2em 1em;
  text-align: center;
  transition: background 0.3s;
  animation: fade-in-top 0.3s backwards;
}
</style>

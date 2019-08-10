<template>
  <div class="notice">
    <!-- <div class="item">感谢你的点赞</div>
    <div class="item">创意驱动科技改变世界。</div>-->
    <div
      class="item"
      v-for="notice in notices"
      :key="notice.time"
      :class="notice.color"
    >{{notice.msg}}</div>
  </div>
</template>

<script>
export default {
  props: {
    notices: {}
  },
  watch: {
    notices(n, old) {
      setTimeout(() => {
        const items = document.querySelectorAll(".notice > .item");
        items[items.length - 1].classList.add("active");
        this.$emit("pop");
      }, 20);
    }
  }
};
</script>

<style>
.notice {
  position: fixed;
  left: 4rem;
  right: 4rem;
  top: 0;
  height: 3rem;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item.active {
  transform: scale(1);
}
.item {
  transform: scale(0);
  margin: 0.5rem auto;
  transition: all 0.5s;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  color: #fff;
  box-shadow: 0 5px 5px -2px rgba(0, 0, 0, 0.2);
}
.red {
  background: #e74c3c;
}
.green {
  background: #1abc9c;
}
.yellow {
  background: #f1c40f;
}
</style>


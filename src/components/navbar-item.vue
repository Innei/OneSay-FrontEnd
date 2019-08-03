<template>
  <a :href="url" :title="name">
    <font-awesome-icon :icon="icon" class="icon" />

    {{name}}
  </a>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      require: true,
      default: "#"
    },
    name: {
      type: String,
      require: true
    },
    icon: {}
  }
};
</script>

<style scoped>
a {
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #eaf4fb;
}
.icon {
  margin-right: 0.8rem;
}
a:hover {
  background: rgba(0, 0, 0, 0.2);
}
</style>

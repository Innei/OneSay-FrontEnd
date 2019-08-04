<template>
  <div>
    <a :href="url" :title="name" v-if="!isLocation">
      <font-awesome-icon :icon="icon" class="icon" v-if="icon" />
      {{name}}
    </a>
    <router-link :to="locationRoute" v-else>
      <font-awesome-icon :icon="icon" class="icon" v-if="icon" />
      {{name}}
    </router-link>
  </div>
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
    icon: {
      default: ""
    },
    isLocation: {
      type: Boolean,
      default: false
    },
    locationRoute: {
      default: "",
      type: String
    }
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

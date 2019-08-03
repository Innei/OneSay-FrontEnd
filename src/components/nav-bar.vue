<template>
  <div class="navbar">
    <div class="toggle"></div>
    <div class="wrap">
      <div class="header">静之森 | API</div>
      <div class="items">
        <item
          v-for="item in items"
          :key="item.name"
          :name="item.name"
          :url="item.url"
          :icon="item.icon"
          :class="item.active ? 'active' : ''"
        />
      </div>
    </div>
  </div>
</template>

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
.wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0;
  .header {
    position: relative;
    height: 4rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4eaceb;
    font-size: 1.2rem;
  }
  .active {
    background: rgba(0, 0, 0, 0.1);
    position: relative;
  }
  .active:before {
    right: 0;
    content: "";
    position: absolute;
    border: 0.75em solid transparent;
    border-right-color: #fff;
  }
}
</style>


<script>
export default {
  data() {
    return {
      items: [
        {
          name: "首页",
          url: "https://shizuri.net",
          icon: "home"
        },
        {
          name: "博客",
          url: "https://blog.shizuri.net",
          icon: "book"
        },
        {
          name: "项目",
          url: "https://github.com/innei",
          icon: "magic"
        },
        {
          name: "API",
          url: window.location.href,
          icon: "cogs",
          active: true
        }
      ]
    };
  },
  components: {
    item: () => import("../components/navbar-item")
  }
};
</script>

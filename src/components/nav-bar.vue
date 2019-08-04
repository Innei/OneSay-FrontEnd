<template>
  <div class="navbar" :class="navbarActive ? 'active': ''">
    <div class="toggle" @click="toggleNavbar"></div>
    <div class="wrap">
      <div class="header">静之森 | API</div>
      <div class="items">
        <item
          v-for="item in items"
          :key="item.name"
          :name="item.name"
          :url="item.url"
          :icon="item.icon"
          :isLocation="item.isLocation"
          :locationRoute="item.locationRoute"
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
    top: 50%;
    transform: translateY(-50%);
    content: "";
    position: absolute;
    border: 0.75em solid transparent;
    border-right-color: #fff;
  }
}

@media screen and (max-width: 900px) {
  .sidebar.active .toggle {
    background: #2ecc71;
  }
  .toggle {
    top: 0;
    left: 10em;
    z-index: 3;
    color: #fff;
    width: 2.5em;
    height: 2.5em;
    cursor: pointer;
    position: absolute;
    text-align: center;
    background: #3498db;
    box-shadow: 0.25em 0 0.5em rgba(0, 0, 0, 0.2);
  }
  .navbar {
    transform: translateX(-10em);
    &.active {
      transform: translateX(0);
      box-shadow: 0.25em 0 0.5em rgba(0, 0, 0, 0.2);
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      navbarActive: false,
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
          icon: "cogs",
          active: true,
          isLocation: true,
          locationRoute: "/"
        },
        {
          name: "一言 API",
          isLocation: true,
          locationRoute: "one-say"
        }
      ]
    };
  },
  methods: {
    toggleNavbar(){
      this.navbarActive = !this.navbarActive
    }
  },
  components: {
    item: () => import("../components/navbar-item")
  }
};
</script>

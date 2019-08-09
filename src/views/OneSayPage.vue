<template>
  <div class="page">
    <header>
      <nav>
        <div class="left">
          <a href="javascript:;">
            <font-awesome-icon class="icon" icon="heart" />
          </a>
        </div>
        <div class="right">
          <a href="javascript:;" @click="getOneSay">
            <font-awesome-icon class="icon" icon="random" />
          </a>
        </div>
      </nav>
    </header>

    <main>
      <div class="container">
        <transition name="slide-fade" mode="out-in">
          <p class="content">
            {{item.content}}
            <small class="author">{{item.author}}</small>
          </p>
        </transition>
      </div>
    </main>
    <Footer style="border-top: none"></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {
        content: "",
        author: ""
      }
    };
  },
  components: {
    Footer: () => import("../components/footer")
  },
  methods: {
    async getOneSay() {
      const item = (await this.$http.get("says")).data.item;
      [this.item.content, this.item.author] = [item.content, item.author];
    }
  },
  created() {
    this.getOneSay();
  }
};
</script>

<style scoped>
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
.page {
  min-height: 100vh;
  position: relative;
}
.page {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 355, 0.5);
}
.page::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background: url("http://api.btstu.cn/sjbz/?lx=dongman") center/cover fixed;
}
header {
  position: relative;
}
nav {
  height: 3rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav::before {
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #ffffffa9;
  z-index: -1;
  position: absolute;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}
.icon {
  margin: 0.5rem 1rem;
  font-size: 1.5rem;
}
main {
  position: relative;
  min-height: 75vh;
}
.container {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: relative;
  min-height: 85vh;
}
.container p {
  font-size: 1.3rem;
  padding: 0 3rem;
  width: 80%;
  left: 0;
  right: 0;
  margin: auto;
  top: 50%;
  position: absolute;
  transform: translateY(-50%);
}

.container .author {
  color: rgb(80, 78, 78);
  position: absolute;
  right: -2vw;
  bottom: -3rem;
}
@media (max-width: 1000px) {
  .container p {
    width: 100%;
  }
  .container .author {
    right: 5vw;
    bottom: -2rem;
  }
}
.container .author::before {
  content: "--- ";
}
footer {
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
}
</style>

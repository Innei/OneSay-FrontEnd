<template>
  <div class="page">
    <header>
      <notice :notices="notices" v-on:pop="liked"></notice>
      <nav>
        <div class="left">
          <a href="javascript:;" @click="like">
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
        <p class="content">
          {{item.content}}
          <small class="author" v-if="item.author">{{item.author}}</small>
        </p>
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
        author: "",
        id: ""
      },
      notices: []
    };
  },
  components: {
    Footer: () => import("../components/footer"),
    notice: () => import("../components/notice")
  },
  methods: {
    async getOneSay() {
      const content = document.querySelector(".content") || "";
      content ? content.classList.add("loading") : false;
      const item = (await this.$http.get("says")).data.item;
      [this.item.content, this.item.author, this.item.id] = [
        item.content,
        item.author,
        item.id
      ];
      content ? content.classList.remove("loading") : false;
    },
    async like() {
      const res = await this.$http.get("says/like", {
        params: {
          time: Date.now(),
          id: this.item.id
        }
      });
      this.notices.push(res.data);
    },
    liked() {
      setTimeout(() => {
        if (this.notices.length) {
          const items = document.querySelectorAll(".notice > .item");
          items[0].classList.remove("active");
          setTimeout(() => {
            this.notices.splice(0, 1);
          }, 600);
        }
      }, 3000);
    }
  },
  created() {
    this.getOneSay();
  }
};
</script>

<style scoped>
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
  padding: 3rem;
  background: #ffffffa9;
  border-radius: 24px;
  width: 80%;
  left: 0;
  right: 0;
  margin: auto;
  top: 50%;
  position: absolute;
  transform: translateY(-50%);
}
.container p::before {
  content: "『";
  position: absolute;
  left: 1rem;
  top: 1rem;
  font-size: 1.5rem;
}
.container p::after {
  content: "』";
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  font-size: 1.5rem;
}

.container .author {
  color: rgb(80, 78, 78);
  position: absolute;
  right: 3rem;
  bottom: 1rem;
}
@media (max-width: 1000px) {
  .container p {
    width: 90%;
  }
  html {
    font-size: 0.9rem;
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
.content {
  transition: all 0.5s;
  opacity: 1;
}
.content.loading {
  opacity: 0;
}
</style>

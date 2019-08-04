<template>
  <div class="wrapper">
    <header>
      <h1>静之森的 API</h1>
      <h3>这里是有关 API 的说明文档</h3>
    </header>

    <div class="body">
      <h3>使用之前</h3>
      <p>
        本网站旨在于提供我开发的练手 API, 可能会有不稳定等现象, 如果您的项目已开始使用我提供的 API 服务，则默认视为遵守
        <router-link to="/notice">本约定</router-link>。
      </p>
      <h3>累计调用</h3>

      <p>一言 API 将会作为我的第一个 API 并开放调用, 截止至 {{getDate.year}} 年 {{getDate.month}} 月 {{getDate.day}} 日已调用次数如下:</p>

      <div class="row">
        <div class="col-4 col-m-2 api-item" align="center" v-for="info in infos" :key="info.name">
          <h2>{{info.times}}</h2>
          <p>{{info.name ? info.name : '加载中'}}</p>
        </div>
      </div>

      <h3>接口列表</h3>

      <div class="row full">
        <square v-for="api in apiList" :key="api.name" :name="api.name" :info="api.info" :url="api.url" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  margin-top: 2rem;
  header {
    text-align: center;
    border-bottom: 1px solid #eee;
    h1,
    h3 {
      font-weight: 100 !important;
      margin-bottom: 0.4rem;
    }
  }
  .body {
    @for $var from 1 through 3 {
      h#{$var} {
        font-weight: 100;
        margin-bottom: $var / 2 + em;
      }
      h#{$var}::before {
        content: "# ";
        color: #2ecc71;
        font-weight: bold;
      }
      h#{$var}:first-child {
        margin-top: 2rem;
      }
    }
    p {
      margin-bottom: 2rem;
    }
    .row {
      li {
        display: inline-block;
      }
      h2::before {
        display: none;
      }
      .api-item {
        justify-content: center;
      }
      &.full [class*="col-"] {
        padding: 0;
        margin-bottom: 0;
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      infos: [],
      apiList: []
    };
  },
  components: {
    square: () => import("../components/square")
  },
  methods: {
    async updateTimes() {
      let data = (await this.$http.get("/info")).data.value;
      data.times = data.times.value;
      if (data.length === undefined) {
        data = Array.of(data);
      }
      this.infos = data;
    },
    changeTitle(str) {
      document.head.querySelector('title').innerText = str
    }
  },
  computed: {
    getDate() {
      const now = new Date(Date.now());
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const day = now.getDate();
      return {
        year,
        month,
        day
      };
    },
    location() {
      return window.location.href;
    }
  },
  async created() {
    this.updateTimes();
    setInterval(async () => await this.updateTimes(), 5000);

    const apiList = (await this.$http.get("/info/query/api-list")).data.value;
    this.apiList = apiList;
    this.$emit('viewIn');

    this.changeTitle('静之森的 API')
  }
};
</script>

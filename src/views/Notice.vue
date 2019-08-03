<template>
  <div class="wrapper">
    <header>
      <h1>约定</h1>
      <h3>使用此服务请遵守我的约定哦！</h3>
    </header>
    <div class="body">
      <h3>总则：</h3>
      <p>使用者的网站需为内容合法的网站，非法网站直接进行黑名单处理。</p>
      <p>使用者不得对本服务器进行流量攻击，否则直接黑名单处理。</p>
      <p>使用时可以注明本服务及提供者（{{info.username}}），不得将本服务占为己有。</p>
      <p>
        如想完善充实本服务所提供的内容，欢迎和保罗进行
        <a :href="info.blog" target="_blank">联系</a>。
      </p>

      <h3>隐私：</h3>
      <p>本服务将记录您的使用信息，包括但不限于站点、使用的 API 内容及参数。</p>
      <p>
        以上内容将用于作者的统计及审查，且采用
        <code>https</code> 加密传输，将不对外完全保密。
      </p>
      <p>
        部分 API 需要使用
        <code>Cookie</code> 记录使用信息，以优化使用体验。
      </p>
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
      info: {}
    };
  },
  async created() {
    const data = (await this.$http.get("info/query/my-info")).data.value;
    this.info = data;
  }
};
</script>

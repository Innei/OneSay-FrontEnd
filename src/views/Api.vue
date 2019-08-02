<template>
  <div class="wrapper">
    <header>
      <h1>静之森的 API</h1>
      <h3>这里是有关 API 的说明文档</h3>
    </header>

    <div class="body">
      <h2>一言 API</h2>

      <p>一言即一句话, 这是一个我用来记录突然迸发的人生感想的平台, 他也用于记录那些偶然间看到的心灵美句。</p>

      <h3>累计调用</h3>

      <p>一言 API 将会作为我的第一个 API 并开放调用, 截止至 {{getDate.year}} 年 {{getDate.month}} 月 {{getDate.day}} 日已调用次数如下:</p>

      <ul>
        
      </ul>
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
        font-weight: bold
      }
    }
    p {
      margin-bottom: 2rem;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
        times: []
    };
  },
  methods: {},
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
    }
  }
};
</script>

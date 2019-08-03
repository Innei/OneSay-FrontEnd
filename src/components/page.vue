<template>
  <div class="wrapper">
    <header>
      <h1>{{title}}</h1>
      <h3 v-if="info">{{info}}</h3>
    </header>

    <div class="body">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true
    },
    info: {
      type: String
    }
  }
};
</script>

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
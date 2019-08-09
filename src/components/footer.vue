<template>
  <footer>
    <p>
      © 2019
      <a :href="info.home" target="_blank">{{info.username}}</a>. All Rights Reserved. <br>
      Theme designed by
      <a href="https://paul.ren/" target="_blank">Paul</a>. Refactored by
      <a href="https://shizuri.net/" target="_blank">Innei</a>.
    </p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  color: #666;
  padding: 1em 0;
  text-align: center;
  border-top: 1px solid #eee;
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



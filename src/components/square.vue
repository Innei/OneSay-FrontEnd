<template>
  <div class="col-6 col-m-4">
    <a class="box first" href="#" :style="color ? 'background-color:' + color : ''">
      <h3>
        <i class="fa fa-music"></i>
        {{name}}
      </h3>
      <p>{{info}}</p>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, require: true },
    info: String,
    color: {
      type: String,
      default: function() {
        return (
          "#" +
          (function(h) {
            return new Array(7 - h.length).join("0") + h;
          })(((Math.random() * 0x1000000) << 0).toString(16))
        );
      }
    }
  },
  methods: {},
  mounted() {
    this.color ? this.color : this.getRandomColor();
  }
};
</script>

<style lang="scss" scoped>
.box {
  &.first {
    background: #2ecc71;
    animation-delay: 0.2s;
  }

  height: 100%;
  color: #fff;
  display: block;
  padding: 2em 1em;
  text-align: center;
  transition: background 0.3s;
  animation: fade-in-top 0.3s backwards;
}
</style>

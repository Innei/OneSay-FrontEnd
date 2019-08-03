<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
body,
html {
  font: 16px/1.5 "Microsoft Yahei", "PingFang SC", "Hiragino Sans GB",
    sans-serif;
}
*{
  box-sizing: border-box
}
html,
body,
dl,
dt,
dd,
ol,
ul,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
p,
fieldset,
legend,
figure {
  margin: 0;
  padding: 0;
}
a {
  transition: color 0.3s, background 0.3s;
  color: #3498db;
  text-decoration: none;
  &:hover {
    color: #ffc670;
  }
}
</style>

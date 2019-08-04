<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">

a {
  transition: color 0.3s, background 0.3s;
  color: #3498db;
  text-decoration: none;
  &:hover {
    color: #ffc670;
  }
}
.row {
  max-width: 100%;
}
</style>

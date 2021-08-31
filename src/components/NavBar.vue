<template>
  <div class="navbar">
    <div class="brand">
      <router-link to="/">AppName</router-link>
    </div>
    <ul>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/order">Order</router-link></li>
      <li><router-link to="/stock">Stock</router-link></li>
      <li><router-link to="/product">Product</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

export default {
  name: "NavBar",
};
</script>

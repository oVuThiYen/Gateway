<template>
  <div>
    <NavBar />
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/NavBar.vue";

@Component({
  components: {
    NavBar,
  },
})
export default class Default extends Vue {}
</script>

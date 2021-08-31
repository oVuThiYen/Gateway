<template>
  <div id="app">
    <table>
      <tbody>
        <tr :key="todo.id" v-for="todo in todos">
          <td>Title: {{ todo.title }}</td>
          <td>Status: {{ todo.completed }}</td>
        </tr>
      </tbody>
    </table>
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script lang="ts">
const defaultLayout = "default";
import { Vue } from "vue-property-decorator";
import { mapActions, mapState } from "vuex";
export default Vue.extend({
  name: "Home" as string,
  computed: {
    layout() {
      // @ts-ignore
      return (this.$route.meta.layout || defaultLayout) + "-layout";
    },
    ...mapState("todos", ["todos"]),
  },
  methods: {
    ...mapActions("todos", ["getTodos"]),
  },
  created() {
    this.getTodos();
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

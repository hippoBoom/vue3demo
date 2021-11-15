<template>
  <div>this is about page</div>
  <div>{{ count }}</div>
  <button @click="increment">+1</button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

// Component definition
@Options({
  // Define component options
  watch: {
    count: (value) => {
      console.log(value);
    },
  },
})
export default class About extends Vue {
  // The behavior in class is the same as the current
  count = 0;

  increment() {
    this.count++;
  }
}
</script>

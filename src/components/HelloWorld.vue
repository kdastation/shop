<template>
  <div>
    <div>
      <Card />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "@/components/Card.vue";

export default defineComponent({
  name: "HelloWorld",
  components: { Card },
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

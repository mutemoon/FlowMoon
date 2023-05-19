<script setup lang="ts">
import { computed, defineComponent, ref } from 'vue';

const props = defineProps({
  node: {
    type: Object,
    required: true
  }
});
const FlowNode = computed(() => defineComponent(props.node))

console.log(props.node);

</script>

<template>
  <div class="flow-node-container">
    <FlowNode></FlowNode>
    <div v-for=""></div>
  </div>
</template>

<style scoped>
.flow-node-container{
  width: 200px;
  padding: 20px;

  border: 1px solid #000;
  cursor: move;
}
</style>

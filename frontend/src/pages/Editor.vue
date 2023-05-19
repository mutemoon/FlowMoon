<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import FlowNode from '../components/FlowNode.vue';

const nodeDefine = ref(`{
  data() {
    return {
      count: 0
    }
  },
  template: \`
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>\`
}`)
const node = ref({})
const isRight = ref(true)
watch(nodeDefine, () => {
    try {
        node.value = eval(`(${nodeDefine.value})`)
        isRight.value = true
    } catch (e) {
        isRight.value = false
    }
}, {
    immediate: true
})

const flowNode = ref()
setInterval(() => {

}, 1000)
</script>

<template>
    <textarea class="code-input" v-model="nodeDefine" :style="{border: `1px solid ${isRight ? '#000' : 'red'}`}"></textarea>
    <FlowNode ref="flowNode" :node="node"></FlowNode>
</template>

<style scoped>
.code-input {
    outline: none;
    position: fixed;
    width: 20%;
    height: 100%;
    right: 0;
    top: 0;
}
</style>

<script setup>
import { ref } from "vue";
import wordsGenerator from "./util/wordsGenerator";

const words = ref(wordsGenerator());

const handleInput = (e) => {
  const foundValue = words.value.find((d) => d == e.target.value);

  if (foundValue) {
    words.value = words.value.filter((d) => d !== foundValue);
    e.target.value = "";
  }
};
</script>

<template>
  <div>Typing Game</div>
  <!-- Typing Options -->
  <div><input @input="handleInput" /></div>
  <div class="">{{ words.join(" ") }}</div>
</template>

<style scoped></style>

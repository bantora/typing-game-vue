<template>
  <Congrats v-if="words.length === 0" />
  <div>Typing Game</div>
  <!-- Typing Options -->
  <div>
    <input @input="handleInput" />
    <select name="max" @change="handleChange">
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
    </select>
  </div>
  <ul>
    <li v-for="word in words" :class="checkWord(word, typedword)">
      <ul>
        <li v-for="letter in word">
          {{ letter }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

import wordsGenerator from "./util/wordsGenerator";
import Congrats from "./components/Congrats.vue";

const maxWords = ref(10);

const typedword = ref("");

const words = ref(wordsGenerator(maxWords.value));

const handleInput = (e) => {
  const foundValue = words.value.find((d) => d == e.target.value);

  if (foundValue) {
    words.value = words.value.filter((d) => d !== foundValue);
    e.target.value = "";
  }

  typedword.value = e.target.value;
};

const handleChange = (e) => {
  maxWords.value = +e.target.value;
  words.value = wordsGenerator(+e.target.value);
};

const checkWord = (w, c = null) => {
  return w.startsWith(c) ? "correct" : "wrong";
};
</script>

<style scoped>
ul {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.correct {
  color: rgb(219, 219, 219);
}

.wrong {
  color: rgb(116, 116, 116);
}

.blur {
  filter: blur(5px);
}
</style>
./components/Congrats.vue

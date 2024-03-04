<template>
  <Congrats v-if="words.length === 0" />
  <div class="title">Typing Game</div>
  <!-- Typing Options -->
  <div>
    <input @input="handleInput" @focus="setBlur(false)" @blur="setBlur(true)" />
    <select name="max" @change="handleChange">
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
    </select>
  </div>
  <ul>
    <li v-for="word in words" :class="checkWord(word, typedword)">
      <ul>
        <li
          v-for="(letter, index) in word"
          :class="checkLetter(letter, index, word)"
        >
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

const notFocused = ref(true);

const setBlur = (bool) => (notFocused.value = bool);

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
  if (notFocused.value) return "blur";
  return w.startsWith(c) ? "correct" : "wrong";
};

const checkLetter = (l, i, w) => {
  if (!w.startsWith(typedword.value)) return "";
  if (l === typedword.value[i]) return "correct-character";
};
</script>

<style scoped>
ul {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: x-large;
  font-weight: bold;
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

.title {
  font-size: xx-large;
}

.correct-character {
  color: rgb(21, 255, 0);
}
</style>

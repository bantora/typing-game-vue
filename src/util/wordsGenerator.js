import { faker } from "@faker-js/faker";

const wordsGenerator = (max) => {
  let words = [];
  while (words.length != max) {
    const newWord = faker.word.sample({ length: { min: 5, max: 7 } });

    if (!words.find((v) => v === newWord)) words.push(newWord);
  }

  return words;
};

export default wordsGenerator;

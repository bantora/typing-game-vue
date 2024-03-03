import { faker } from "@faker-js/faker";

const wordsGenerator = (max) => {
  let words = [];
  for (let i = 0; i <= max; i++) {
    words.push(faker.word.sample({ length: { min: 5, max: 7 } }));
  }

  return words;
};

export default wordsGenerator;

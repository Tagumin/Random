let nouns = ["apple", "ball", "cat", "dog", "elephant", "flower", "guitar", "house", "ice cream", "jacket"];
let verbs = ["run", "jump", "swim", "dance", "sing", "write", "read", "draw", "cook", "sleep"];

function generateRandomWord() {
  const nounIndex = Math.floor(Math.random() * nouns.length);
  const verbIndex = Math.floor(Math.random() * verbs.length);
  const noun = nouns[nounIndex];
  const verb = verbs[verbIndex];
  nouns.splice(nounIndex, 1);
  verbs.splice(verbIndex, 1);
  return { noun: noun, verb: verb };
}

const generateBtn = document.getElementById("generate-btn");
const nounDisplay = document.getElementById("noun");
const verbDisplay = document.getElementById("verb");

generateBtn.addEventListener("click", function () {
  if (nouns.length === 0 || verbs.length === 0) {
    nounDisplay.textContent = "No more words to display!";
    verbDisplay.textContent = "";
  } else {
    let newWord = generateRandomWord();
    nounDisplay.textContent = newWord.noun;
    verbDisplay.textContent = newWord.verb;
  }
});

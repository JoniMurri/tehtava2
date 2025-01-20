const readline = require("readline");

function myFunction(sana) {
  sana = sana.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let kaanteinen = "";
  for (let i = sana.length - 1; i >= 0; i--) {
    kaanteinen += sana[i];
  }
  return sana === kaanteinen;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Anna sana, jonka haluat tarkistaa (onko se palindromi): ",
  (sana) => {
    if (myFunction(sana)) {
      console.log(`"${sana}" on palindromi.`);
    } else {
      console.log(`"${sana}" ei ole palindromi.`);
    }
    rl.close();
  }
);

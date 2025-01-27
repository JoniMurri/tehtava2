const input = require("readline-sync");

function myFunction(sana) {
  sana = sana.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let kaanteinen = "";
  for (let i = sana.length - 1; i >= 0; i--) {
    kaanteinen += sana[i];
  }
  return sana === kaanteinen;
}

var sana = input.question("Anna sana tarkistettavaksi: ");

if (myFunction(sana)) {
  console.log(`"${sana}" on palindromi!`);
} else {
  console.log(`"${sana}" ei ole palindromi.`);
}

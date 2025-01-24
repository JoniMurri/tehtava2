const readline = require("readline");

function myFunction(sana) {
  sana = sana.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let kaanteinen = "";
  for (let i = sana.length - 1; i >= 0; i--) {
    kaanteinen += sana[i];
  }
  return sana === kaanteinen;
}

console.log(myFunction("Saippuakauppias"));
console.log(myFunction("javascript"));

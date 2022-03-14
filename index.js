//jshint esversion:6

/*Programma inutile :)*/

//per utilizzare "unicorn" all'interno di un modulo
import {
    createRequire,
    syncBuiltinESMExports
} from "module";


const require = createRequire(
    import.meta.url);

let supereroi = require("superheroes");
let cattividimmerda = require("supervillains");

const unicorno = require("./node_modules/unicorn").install();

let n;
let winSuC = 0;
let winCaC = 0;
funzioneAccazzo();

function funzioneAccazzo() {

    let i;
    for (i = 0; i < 100; i++) {
        n = Math.random(1);
        if (n > 0.5) {
            winSuC++;
            console.log(supereroi.random().green().blinking().bold() + " vs " + cattividimmerda.random().red());
        } else {
            winCaC++;
            console.log(supereroi.random().green() + " vs " + cattividimmerda.random().red().blinking().bold());
        }
    }
}
console.log(winSuC + " - " + winCaC);
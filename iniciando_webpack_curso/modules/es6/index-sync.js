import liquidos from "./es6";
import teste1 from "./teste";
import teste2 from "../teste";
import $ from "jquery";
// window.$ = window.jQuery = require("jquery");
// window.$ = window.jQuery = require("jquery/dist/jquery");

console.log(liquidos);
console.log(teste1);
console.log(teste2);
// console.log($);

$.each(liquidos, (index, value) => {
    console.log(index, value);
});
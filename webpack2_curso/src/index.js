import test from './test';
require('./app.less');

test();
$(document).ready(function() {
    $('input:text').val('JQuery 3 funcionando 2');
});

// System.import('./test')
//     .then(module => {
//         console.log(module);
//         module.default();
//     }, error => {
//         console.log('Ops !! Houve falha ao carregar o modulo');
//         console.log(error);
//     });
// test();
// $(document).ready(function() {
//     $('input:text').val('JQuery 3 funcionando 2');
// });

// $ = require('jquery');
// require(['./test'], function(test) {
//     test();
//     $(document).ready(function() {
//         $('input:text').val('JQuery 3 funcionando 2');
//     });
// });

// const test = require('./test');
// test();
// $(document).ready(function() {
//     $('input:text').val('JQuery 3 funcionando 2');
// });
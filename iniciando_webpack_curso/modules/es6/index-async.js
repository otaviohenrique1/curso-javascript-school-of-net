Promise.all([
    import("./es6"),
    import("./es6")
])
    .then(function(modules) {
        console.log(modules[0], modules[1]);
    });

import("./es6")
    .then(function(liquidos) {
        console.log(liquidos.default);
    });

// import("./es6")
//     .then(function(liquidos) {
//         console.log(liquidos.default);
//     });
let first_name = "luiz";
let last_name = "diniz";

let obj = {
    first_name,
    last_name,
    method(param1, param2) {
        console.log(param1, param2);
    }
};

function funcao({first_name, last_name}) {
    console.log(first_name, last_name);
}
funcao(obj);
// api Intl

let date = new Date();

console.log(new Intl.DateTimeFormat('pt-BR').format(date));
console.log(new Intl.DateTimeFormat('en-US').format(date));
console.log(new Intl.DateTimeFormat('pt-BR', {
    month: "long",
    day: "numeric",
    year: "numeric",
}).format(date));

console.log(new Intl.NumberFormat('pt-BR').format(200000.22));
console.log(new Intl.NumberFormat('en-US').format(200000.22));
console.log(new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(200000.220));
console.log(new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 }).format(200000.220));
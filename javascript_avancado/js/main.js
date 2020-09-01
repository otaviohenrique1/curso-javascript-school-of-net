// let list = [
//     {"desc": "rice", "amount": "1", "value": "5.40"},
//     {"desc": "beer", "amount": "12", "value": "1.99"},
//     {"desc": "meat", "amount": "1", "value": "15.00"}
// ];

// function getTotal(list) {
//     let total = 0;
//     for (let key in list) {
//         total += list[key].value * list[key].amount;
//     }
//     return total;
// }

// function setList(list) {
//     let table = '<thead><tr><td>Description</td><td>Amount</td><td>Value</td><td>Action</td></tr></thead><tbody>';
//     for (let key in list) {
//         table += '<tr><td>'+ formatDesc(list[key].desc) + '</td><td>' + list[key].amount + '</td><td>' + formatValue(list[key].value) + '</td>            <td>Edit | Delete</td></tr>';
//     }
//     table += '</tbody>';
//     document.getElementById('listTable').innerHTML = table;
// }

// function formatDesc(desc) {
//     // toLowerCase -> Transforma os caracteres maiusculos da string em minusculos
//     // charAt(0) -> Pega o primeiro caractere da string
//     // toUpperCase() -> Transforma os caracteres minusculos da string em maiusculos
//     // slice(1) -> Pega o resto dos caracteres da string
//     let str = desc.toLowerCase();
//     str = str.charAt(0).toUpperCase() + str.slice(1);
//     return str;
// }

// function formatValue(value) {
//     let str = parseFloat(value).toFixed(2) + "";
//     str = str.replace(".", ",");
//     str = "$ " + str;
//     return str;
// }

// function addData() {
//     let desc = document.getElementById("desc");
//     let amount = document.getElementById("amount");
//     let value = document.getElementById("value");

//     list.unshift({"desc": desc, "amount": amount, "value": value});
//     setList(list);
// }

// setList(list);
// console.log(getTotal(list));


let list = [
    {"desc":"rice","amount":"1","value":"5.40"},
    {"desc":"beer","amount":"12","value":"1.99"},
    {"desc":"meat","amount":"1","value":"15.00"}
];

function getTotal(list){
    let total = 0;
    for(let key in list){
        total += list[key].value * list[key].amount;
    }
    document.getElementById("totalValue").innerHTML = formatValue(total);
    // return total;
}

function setList(list){
    let table = '<thead><tr>'+
    '<td>Description</td>'+
    '<td>Amount</td>'+
    '<td>Value</td>'+
    '<td>Action</td></tr>'+
    '</thead><tbody>';
    for(let key in list){
        table += '<tr><td>'+
        formatDesc(list[key].desc)+
        '</td><td>'+ formatAmount(list[key].amount) +
        '</td><td>'+ formatValue(list[key].value)+
        '</td><td>'+
        '<button onclick="setUpdate(' + key + ');" class="btn btn-primary">Edit</button>'+
        '<button onclick="deleteData(' + key + ');" class="btn btn-danger">Delete</button>'+
        '</td></tr>';
    }
    table += '</tbody>';
    document.getElementById("listTable").innerHTML = table;
    getTotal(list);
    saveListStorage(list);
}

function formatDesc(desc){
    // toLowerCase -> Transforma os caracteres maiusculos da string em minusculos
    // charAt(0) -> Pega o primeiro caractere da string
    // toUpperCase() -> Transforma os caracteres minusculos da string em maiusculos
    // slice(1) -> Pega o resto dos caracteres da string
    let str = desc.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

function  formatAmount(amount){
    return parseInt(amount);
}

function  formatValue(value){
    let str = parseFloat(value).toFixed(2) + "";
    str = str.replace(".",",");
    str = "$ " + str;
    return str;
}

function  formatValue(value){
    let str = parseFloat(value).toFixed(2) + "";
    str = str.replace(".",",");
    str = "$ " + str;
    return str;
}

function addData(){
    if (!validation()) {
        return;
    }
    let desc = document.getElementById("desc").value;
    let amount = document.getElementById("amount").value;
    let value = document.getElementById("value").value;

    list.unshift({"desc":desc , "amount":amount ,"value":value });
    setList(list);
}

function setUpdate(id) {
    let obj = list[id];
    document.getElementById("desc").value = obj.desc;
    document.getElementById("amount").value = obj.amount;
    document.getElementById("value").value = obj.value;
    document.getElementById("btnUpdate").style.display = "inline-block";
    document.getElementById("btnAdd").style.display = "none";
    document.getElementById("inputIdUpdate").innerHTML = '<input type="hidden" id="idUpdate" value="' + id + '">'
}

function resetForm() {
    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("value").value = "";
    document.getElementById("btnUpdate").style.display = "none";
    document.getElementById("btnAdd").style.display = "inline-block";
    document.getElementById("inputIdUpdate").innerHTML = ''
    document.getElementById("errors").style.display = "none";
}

function updateData() {
    if (!validation()) {
        return;
    }
    let id = document.getElementById("idUpdate").value;
    let desc = document.getElementById("desc").value;
    let amount = document.getElementById("amount").value;
    let value = document.getElementById("value").value;
    list[id] = {"desc":desc , "amount":amount ,"value":value };
    resetForm();
    setList(list);
}

function deleteData(id) {
    if (confirm("Delete this item?")) {
        if (id === list.length - 1) {
            list.pop()
        } else if (id === 0) {
            list.shift();
        } else {
            let arrAuxIni = list.slice(0, id);
            let arrAuxEnd = list.slice(id + 1);
            list = arrAuxIni.concat(arrAuxEnd);
        }
        setList(list);
    }
}

function validation() {
    let desc = document.getElementById("desc").value;
    let amount = document.getElementById("amount").value;
    let value = document.getElementById("value").value;
    let errors = "";
    document.getElementById("errors").style.display = "none";

    if (desc === "") {
        errors += '<p>Fill out description</p>';
    }

    if (amount === "") {
        errors += '<p>Fill out a quantity</p>';
    } else if (amount != parseInt(amount)) {
        errors += '<p>Fill out a valid amount</p>';
    }

    if (value === "") {
        errors += '<p>Fill out a valid value</p>';
    } else if (value != parseFloat(value)) {
        errors += '<p>Fill out a valid value</p>';
    }

    if (errors != "") {
        document.getElementById("errors").style.display = "block";
        document.getElementById("errors").style.backgroundColor = "rgba(85, 85, 85, 0.3)";
        document.getElementById("errors").style.color = "white";
        document.getElementById("errors").style.padding = "10px";
        document.getElementById("errors").style.margin = "10px";
        document.getElementById("errors").style.borderRadius = "13px";
        document.getElementById("errors").innerHTML = "<h3>Error: </h3>" + errors;
        return 0;
    } else {
        return 1;
    }
}

function deleteList() {
    if (confirm("Delete this list?")) {
        list = [];
        setList(list);
    }
}

function saveListStorage(list) {
    let jsonStr = JSON.stringify(list);
    localStorage.setItem("list", jsonStr)
}

function initListStorage() {
    let testList = localStorage.getItem("list");
    if (testList) {
        list = JSON.parse(testList);
    }
    setList(list);
}

initListStorage();
// setList(list);
// console.log(getTotal(list));
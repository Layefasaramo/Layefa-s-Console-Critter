
num1= document.getElementById("num1-el");
num2= document.getElementById("num2-el");
result= document.getElementById("sum-el");

function store(){
    result.textContent = "";
    num1 = document.getElementById("num1-el").value;
    num2 = document.getElementById("num2-el").value;
}
function addfunc() {    
    store();
    let result = parseFloat(num1) + parseFloat(num2);
    document.getElementById("sum-el").textContent = "Result: " + result;
}

function minusfunc() {    
    store();
    let result = parseFloat(num1) - parseFloat(num2);
    document.getElementById("sum-el").textContent = "Result: " + result;
}

function timesfunc() {    
    store();
    let result = parseFloat(num1) * parseFloat(num2);
    document.getElementById("sum-el").textContent = "Result: " + result;
}
function dividefunc(tes)
{    store();
    result.textContent = "";
    tes = parseFloat(num1) / parseFloat(num2) + "";
    
    console.log(tes);
    result.textContent = "Result: " + tes;
}


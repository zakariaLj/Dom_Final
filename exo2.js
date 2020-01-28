let BtExo1 = document.getElementById('exo1');
let BtExo2 = document.getElementById('exo2');
let BtExo3 = document.getElementById('exo3');
let BtExo4 = document.getElementById('exo4');
let BtExo5 = document.getElementById('exo5');
let BtExo6 = document.getElementById('exo6');
let BtExo7 = document.getElementById('exo7');




let gotoExo1=()=>{
    document.getElementById('pageExo1').className="d-Block"
    document.getElementById('pageExo2').className="d-none";
    document.getElementById('pageExo3').className="d-none";
    document.getElementById('pageExo4').className="d-none";
    document.getElementById('pageExo5').className="d-none";
    document.getElementById('pageExo6').className="d-none";
    document.getElementById('pageExo7').className="d-none";
}


BtExo1.addEventListener('mouseover',gotoExo1);

let gotoExo2=()=>{
    document.getElementById('pageExo1').className="d-none"
    document.getElementById('pageExo2').className="d-Block";
    document.getElementById('pageExo3').className="d-none";
    document.getElementById('pageExo4').className="d-none";
    document.getElementById('pageExo5').className="d-none";
    document.getElementById('pageExo6').className="d-none";
    document.getElementById('pageExo7').className="d-none";
}


BtExo2.addEventListener('mouseover',gotoExo2);

let gotoExo3=()=>{
    document.getElementById('pageExo1').className="d-none"
    document.getElementById('pageExo2').className="d-none";
    document.getElementById('pageExo3').className="d-Block";
    document.getElementById('pageExo4').className="d-none";
    document.getElementById('pageExo5').className="d-none";
    document.getElementById('pageExo6').className="d-none";
    document.getElementById('pageExo7').className="d-none";
}


BtExo3.addEventListener('mouseover',gotoExo3);

let gotoExo4=()=>{
    document.getElementById('pageExo1').className="d-none"
    document.getElementById('pageExo2').className="d-none";
    document.getElementById('pageExo3').className="d-none";
    document.getElementById('pageExo4').className="d-Block";
    document.getElementById('pageExo5').className="d-none";
    document.getElementById('pageExo6').className="d-none";
    document.getElementById('pageExo7').className="d-none";
}


BtExo4.addEventListener('mouseover',gotoExo4)

let gotoExo5=()=>{
    document.getElementById('pageExo1').className="d-none"
    document.getElementById('pageExo2').className="d-none";
    document.getElementById('pageExo3').className="d-none";
    document.getElementById('pageExo4').className="d-none";
    document.getElementById('pageExo5').className="d-Block";
    document.getElementById('pageExo6').className="d-none";
    document.getElementById('pageExo7').className="d-none";
}


BtExo5.addEventListener('mouseover',gotoExo5)

let gotoExo6=()=>{
    document.getElementById('pageExo1').className="d-none"
    document.getElementById('pageExo2').className="d-none";
    document.getElementById('pageExo3').className="d-none";
    document.getElementById('pageExo4').className="d-none";
    document.getElementById('pageExo5').className="d-none";
    document.getElementById('pageExo6').className="d-Block";
    document.getElementById('pageExo7').className="d-none";
}


BtExo6.addEventListener('mouseover',gotoExo6)

let gotoExo7=()=>{
    document.getElementById('pageExo1').className="d-none"
    document.getElementById('pageExo2').className="d-none";
    document.getElementById('pageExo3').className="d-none";
    document.getElementById('pageExo4').className="d-none";
    document.getElementById('pageExo5').className="d-none";
    document.getElementById('pageExo6').className="d-none";
    document.getElementById('pageExo7').className="d-Block";
}


BtExo7.addEventListener('mouseover',gotoExo7)
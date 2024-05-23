// let rate1=document.querySelector(".rate1");
// let rate2=document.querySelector(".rate2");
// let resultBtn=document.querySelector(".result");
// let selects=document.querySelector(".options select");
// let sel1=selects[0];
// let sel2=selects[1];
// let inputs=document.querySelectorAll(".input input");
// let inpt1=inputs[0];
// let inpt2=inputs[1];

// let rates={};

// let requestURL="https://api.exchangerate.host/latest?base=US";

// fetchRate();


// async function fetchRate(){
//     let res=await fetch(requestURL);
//     res=await res.json();
//     rates=t=res.rates;
//     populateOptions();
// }

// function populateOptions(){
//     let val="";
//     Object.keys(rates).forEach(code => {
//         let str = `<option value="${code}>${code}</option>`;
//         val+=str;

//     })
//     selects.forEach((s) => (s.innerHTML=val))
// }


// function convert(val,formCurr,toCurr){
//     let v=(val/[fromCurr])*rates[toCurr];
//     let v1=v.toFixed(3);
//     return v1 == 0.0 ? v.toFixed : v1;
// }

// function displayrate(){
//     let v1=sel1.value;
//     let v2=sel2.value;

//     let val=convert(1,v1,v2);

//     rate1.innerHTML=`1 ${v1} equals`;
//     rate2.innerHTML=`${va1} ${v2}`;
// }

// resultBtn.addEventListener("click", ()=>{
//     let fromCurr=sell.value;
//     let fromVal=parseFloat(inpt1.value);
//     let toCurr=sel2.value;

//     if(isNaN(fromVal)){
//         alert("enter a number");
//     }
//     else{
//         let cVal=convert(fromVal,fromCurr,toCurr);
//         inpt2.value=cVal;
//     }
// });


// selects.forEach(S=>S.addEventListener("change",displayrate));

// document.querySelector(".swap").addEventListener("click",()=>{
//     let in1=inpt1.value;
//     let in2=inpt2.value;
//     let op1=sel1.value;
//     let op2=sel2.value;

//     inpt2.value=in1;
//     inpt1.value=in2;

//     sel2.value=op1;
//     sel1.value=op2;

//     displayrate();
// });



let rate1 = document.querySelector(".rate1");
let rate2 = document.querySelector(".rate2");
let resultBtn = document.querySelector(".result");
let selects = document.querySelectorAll("select");
let sel1 = selects[0];
let sel2 = selects[1];
let inputs = document.querySelectorAll(".input input");
let inpt1 = inputs[0];
let inpt2 = inputs[1];

let rates = {};

const requestURL = "https://api.exchangerate-api.com/v4/latest/USD"; 

fetchRate();

async function fetchRate() {
    let res = await fetch(requestURL);
    let data = await res.json();
    rates = data.rates;
    populateOptions();
    displayRate();  // Display initial conversion rate after fetching rates
}

function populateOptions() {
    let val = "";
    Object.keys(rates).forEach(code => {
        let str = `<option value="${code}">${code}</option>`;
        val += str;
    });
    selects.forEach(s => (s.innerHTML = val));
}

function convert(val, fromCurr, toCurr) {
    let v = (val / rates[fromCurr]) * rates[toCurr];
    return v.toFixed(3);
}

function displayRate() {
    let v1 = sel1.value;
    let v2 = sel2.value;
    let val = convert(1, v1, v2);

    rate1.innerHTML = `1 ${v1} equals`;
    rate2.innerHTML = `${val} ${v2}`;
}

resultBtn.addEventListener("click", () => {
    let fromCurr = sel1.value;
    let fromVal = parseFloat(inpt1.value);
    let toCurr = sel2.value;

    if (isNaN(fromVal)) {
        alert("Please enter a number");
    } else {
        let cVal = convert(fromVal, fromCurr, toCurr);
        inpt2.value = cVal;
    }
});

selects.forEach(s => s.addEventListener("change", displayRate));

document.querySelector(".swap").addEventListener("click", () => {
    let in1 = inpt1.value;
    let in2 = inpt2.value;
    let op1 = sel1.value;
    let op2 = sel2.value;

    inpt2.value = in1;
    inpt1.value = in2;

    sel2.value = op1;
    sel1.value = op2;

    displayRate();
});

let numberButtons = document.querySelectorAll(".numbers");
let displayNum = document.querySelector(".iptcal");
let operator = document.querySelectorAll(".operator");
let reset = document.querySelector('.reset');
let deletes = document.querySelector('.delete');
let equals = document.querySelector('.equals');
let dot = document.querySelector(".dot");
let fac = document.querySelector(".fac");

let result = "";

numberButtons.forEach(numberbtn => {
    numberbtn.addEventListener('click', () => {
        if(result[result.length - 1] != "!"){
            result += numberbtn.textContent;
            displayNum.value = result;
        }
    })
})

operator.forEach(operatorbtn => {
    operatorbtn.addEventListener('click', (event) => {
        const parts ="+-x÷";
       if((result != '' && !isNaN(result[result.length - 1])) ||(operatorbtn.textContent == "-" && result == "")){
        result += operatorbtn.textContent;
            displayNum.value = result;   
       } else if (parts.includes(result[result.length - 1])){
        result= result.slice(0, -1)
        result += operatorbtn.textContent;
        displayNum.value = result;   
       }
    })
})

fac.addEventListener("click", () => {
    const parts ="+-x÷";
    let con = 0;
    for (const inc of parts) {
        if(result.includes(inc)){
          con++
        }
     if(!isNaN(result[result.length - 1]) && con <= 0){
        result += fac.textContent;
        displayNum.value = result;
 
       }
    
    }
 
})
dot.addEventListener('click', () => {
    // Check if the last character is a digit or if it's a dot preceded by a digit
    if (result == '' || result[result.length - 1] || (result[result.length - 1] === '.' && !isNaN(result[result.length - 2]))) {
        // Check if the last number already contains a dot
        const parts = result.split(/[\+\-\x\÷]/);
        const lastPart = parts[parts.length - 1];
        if (!lastPart.includes('.')) {
            result += dot.textContent;
            displayNum.value = result;
        }
    }
});

deletes.addEventListener('click', () => {
    result = result.slice(0, -1);
    displayNum.value = result;
}) 


reset.addEventListener('click', () => {
    result = "";
    displayNum.value = result;   
    displayNum.style.fontSize = "30px" 
})


equals.addEventListener('click', () => {
    
    if(result[result.length -1] == "!"){
        let reConvert = result.substring(0, result.length - 1)
        reConvert = Number(reConvert)
        let facres = 1;
        for(let i = reConvert; i > 1; i--){
             facres *= i
        }
        result = facres.toString()
        displayNum.value = result;
       
    }
    let newre = result.replace(/x/g, '*' ).replace(/÷/g, '/').replace(/\^/g, '**')
    let evalres = eval(newre)
    const trimmedNumber = parseFloat(evalres.toFixed(2)).toString();
    displayNum.value = trimmedNumber;   
    result = evalres.toString();
    if(result.length > 12){
        displayNum.style.fontSize = "20px"
    }else if(result.length > 8){
        displayNum.style.fontSize = "25px"
    }else{
        displayNum.style.fontSize = "30px"
    }
})





function initBMICalculator() {
    alert("Let's start coding...");
    setEventListener();
}

function setEventListener(){
    var eventHeight = document.querySelector("#input_field_height");
    eventHeight.addEventListener("keyup", calcBMI);
    
    var eventWeight = document.querySelector("#input_field_weight");
    eventWeight.addEventListener("keyup", calcBMI);
}

function calcBMI(){
    var heightInputField = document.querySelector("#input_field_height");
    var weightInputField = document.querySelector("#input_field_weight");
    
    var height = heightInputField.value;
    var weight = weightInputField.value;
    
    height = height/100;
    
    var bmi = weight/(height*height);
    
    console.log(bmi);
    putOutResult(bmi);
}

function putOutResult(bmi){
    var tmpBmi = bmi;
    if(bmi === Infinity || bmi === NaN){
        bmi = "Undefined";
    }else{
        bmi = String(bmi);
        bmi = bmi.substr(0,5);
    }        
    
    var bmiResultOutput = document.getElementById("bmi_result_value");
    bmiResultOutput.innerHTML = bmi;
    
    var bmiTextOutput = document.getElementById("bmi_result_text");
    
    if(tmpBmi < 16){
        bmiTextOutput.innerHTML = "Starkes Untergewicht";
        bmiTextOutput.setAttribute('style', 'color: #E8C03C');
    }else if(tmpBmi >= 16 && tmpBmi < 17){
        bmiTextOutput.innerHTML = "Mäßiges Untergewicht";
        bmiTextOutput.setAttribute('style', 'color: #E8C03C');
    }else if(tmpBmi >= 17 && tmpBmi < 18.5){
        bmiTextOutput.innerHTML = "Leichtes Untergewicht";
        bmiTextOutput.setAttribute('style', 'color: #E8C03C');
    }else if(tmpBmi >= 18,5 && tmpBmi < 25){
        bmiTextOutput.innerHTML = "Normalgewicht";
        bmiTextOutput.setAttribute('style', 'color: green');
    }else if(tmpBmi >= 25 && tmpBmi < 30){
        bmiTextOutput.innerHTML = "Präadipositas";
        bmiTextOutput.setAttribute('style', 'color: #E8C03C');
    }else if(tmpBmi >= 30 && tmpBmi < 35){
        bmiTextOutput.innerHTML = "Adipositas Grad I";
        bmiTextOutput.setAttribute('style', 'color: #E8C03C');
    }else if(tmpBmi >= 35 && tmpBmi < 40){
        bmiTextOutput.innerHTML = "Adipositas Grad II";
        bmiTextOutput.setAttribute('style', 'color: #E8C03C');
    }else if(tmpBmi >= 40){
        bmiTextOutput.innerHTML = "Adipositas Grad III";
        bmiTextOutput.setAttribute('style', 'color: #E8C03C');
    }
    if(bmi === "Undefined"){
        bmiTextOutput.innerHTML = "";
    }
}
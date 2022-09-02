var base= document.querySelector("#baseInput");
var height= document.querySelector("#heightInput");
var calculate= document.querySelector("#calculate-btn");
var outputArea= document.querySelector(".output");


calculate.addEventListener("click", ()=>{
    var baseVal= base.value;
    var heightVal= height.value;
    //console.log(baseVal.length);
    if(baseVal.length== 0)
    {
        console.log("Enter all inputs");
        outputArea.style.color="red";
        outputArea.innerHTML="Enter all inputs";
    }
    else if(heightVal.length==0){
        console.log("Enter all inputs");
        outputArea.style.color="red";
        outputArea.innerHTML="Enter all inputs";
    }
    else if(baseVal<0 || heightVal<0){
        console.log("Enter all inputs");
        outputArea.style.color="red";
        outputArea.innerHTML="Height or base can't be negative. Eliminate negativity";
    }
    else if(baseVal==0 || heightVal==0){
        console.log("Base and Height of a triangle cannot be 0 practically");
        outputArea.style.color="red";
        outputArea.innerHTML="Base and Height of a triangle cannot practically be 0.\nPlease enter values greater than 0";
    }
    else{
        outputArea.style.color="rgb(106, 201, 69)";
        calculateHypotenuse(baseVal, heightVal);
    }
        
});

function calculateHypotenuse(b,h){
    var h= Math.sqrt((Math.pow(b,2) + Math.pow(h,2)));
    console.log(h);
    outputArea.innerHTML=h;
}

var side1= document.querySelector("#side1");
var side2= document.querySelector("#side2");
var side3= document.querySelector("#side3");

var calculateBtn= document.querySelector("#calculate-btn");
var outputArea= document.querySelector(".output");

calculateBtn.addEventListener("click", ()=>{
    side1Val=(side1.value); 
    side2Val=(side2.value); 
    side3Val=(side3.value);  
    console.log(side1Val+" "+side2Val+" "+side3Val);

    if(side1Val.length==0)
    {
        console.log("Enter all inputs");
        outputArea.style.color="red";
        outputArea.innerHTML="Enter all inputs";
    }
    else if(side2Val.length==0){
        console.log("Enter all inputs");
        outputArea.style.color="red";
        outputArea.innerHTML="Enter all inputs";
    }
    else if(side3Val.length==0){
        console.log("Enter all inputs");
        outputArea.style.color="red";
        outputArea.innerHTML="Enter all inputs";
    }
    else if(side1Val<0 || side2Val<0 || side3Val<0){
        outputArea.style.color="red";
        outputArea.innerHTML="Sides can't be negative. Eliminate negativity";
    }
    else{
        outputArea.style.color="rgb(106, 201, 69)";
        calculateArea(side1Val, side2Val, side3Val);
    }
});

function calculateArea(a,b,c){
    aInt= parseInt(a);
    bInt= parseInt(b);
    cInt= parseInt(c);
    console.log(a+b+c);
    var s= (aInt+bInt+cInt)/2;
    console.log(s);
    //√s(s - a)(s - b)(s - c)
    var area= Math.sqrt((s*(s-aInt)*(s-bInt)*(s-cInt)));
    console.log(area);
    outputArea.innerHTML="Area of the Triangle is: "+ area;
}

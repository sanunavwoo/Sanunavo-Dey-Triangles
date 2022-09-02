var angleInput1= document.querySelector("#angleInput1");
var angleInput2= document.querySelector("#angleInput2");
var angleInput3= document.querySelector("#angleInput3");

var checkBtn= document.querySelector("#check-btn");
var outputArea= document.querySelector(".output");
checkBtn.addEventListener("click", ()=>{
//Call function to find sum
   // document.querySelector(".output").innerHTML="";
    var angleInput1Val= angleInput1.value;
    var angleInput2Val= angleInput2.value;
    var angleInput3Val= angleInput3.value;

     if(angleInput1Val ==""|| angleInput2Val ==""||  angleInput3Val == ""){
         outputArea.style.display="block";
         outputArea.style.color= "rgb(253, 11, 52)";
         outputArea.innerHTML= "Enter all the angles";
         console.log("Enter all the angles"); 
     }
     else if(angleInput1Val<0 || angleInput2Val<0 || angleInput3Val<0){
        outputArea.style.display="block";
         outputArea.style.color= "rgb(253, 11, 52)";
         outputArea.innerHTML= "Angles can't be negative. Eliminate negativity";
         console.log("Angles can't be negative. Eliminate negativity"); 
     }
     else if(angleInput1Val==0 || angleInput2Val==0 || angleInput3Val==0){
        outputArea.style.display="block";
         outputArea.style.color= "rgb(253, 11, 52)";
         outputArea.innerHTML= "Triangles cannot have angles which measure 0°(Zero degrees)";
         console.log("Triangles cannot have angles which measure 0°(Zero degrees)"); 
     }
     else{
        var angleSum=sumTotal(angleInput1Val, angleInput2Val, angleInput3Val);
        isTriangle(angleSum);
    }
    // console.log(areaInput1Val);
    // console.log(areaInput2Val);
    // console.log(areaInput3Val);

    
}
);

function sumTotal(a1,a2,a3){
    var sum=0;
    a1Int= parseInt(a1);
    a2Int= parseInt(a2);
    a3Int= parseInt(a3);
    sum=+a1Int+a2Int+a3Int;
    //console.log(sum);
    return sum;
}
function isTriangle(s){
    if(s==180){
        outputArea.style.display="block";
        console.log("Is Triangle");
        outputArea.style.color= "rgb(106, 201, 69)";
        outputArea.innerHTML= "Cheers!! It is a Triangular day"
    }
    else{
        outputArea.style.display="block";
        outputArea.style.color= "rgb(253, 11, 52)";
        outputArea.innerHTML= "Bummer. Not a Triangle"
        console.log("Not a Triangle");
    }
}
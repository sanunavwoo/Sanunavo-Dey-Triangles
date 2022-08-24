var formQuiz= document.querySelector(".form-quiz");
var submitBtn= document.querySelector("#submit-btn");
var correctAnswers= ["60°", "right","acute","right","equilateral","2 congruent sides","15cm","180°","corresponding angles are congurent.", "pythagoras"];

var outputArea= document.querySelector(".output");


submitBtn.addEventListener("click",()=>{
    
    calculateScore();

});

function calculateScore(){
    var score=0;
    var i=0;
    var fData= new FormData(formQuiz);
    //console.log(fData);
    for(let fd of fData.values()){
            if(fd=== correctAnswers[i]){
                score=score+1;
            }
            i++;
        }
        console.log(score);
        displayScore(score);
        
    }
function displayScore(userScore){
    if(userScore>=0 && userScore<=4){
        outputArea.style.color="rgb(223, 94, 19)";
        
        
    }
    else if(userScore>4 && userScore<=7){
        outputArea.style.color="rgb(226, 190, 31)";
    }
    else{
        outputArea.style.color="rgb(106, 201, 69)"; 
    }

    outputArea.innerHTML= `Your score is ${userScore}`;
}



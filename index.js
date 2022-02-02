function check(){
    let total =0;
    let q1 = document.quiz.qestion1.value;
    let q2 = document.quiz.qestion2.value;
    let q3 = document.quiz.qestion3.value;
    let q4 = document.quiz.qestion4.value;
    let q5 = document.quiz.qestion5.value;

    let  result = document.getElementById("result");
    let quiz = document.getElementById("quiz");
    let finalcall = document.getElementById("finalcall");
    if(q1 === "Mahatma Gandhi"){
        total++;
    }
    if(q2 === "Hyderabad"){
        total++;
    }
    if(q3 === "Hyper text markup language"){
        total++;
    }
    if(q4 === "SS.Rajamouli"){
        total++;
    }
    if(q1 === "Twelve"){
        total++;
    }
    
    finalcall.textContent ="Final Call";
    finalcall.style.background ="white";
    finalcall.style.textAlign ="center";
    finalcall.style.fontSize ="larger";
quiz.style.display ="none";
result.style.textAlign ="center";
result.style.padding ="10px";
result.style.fontSize = "bolder";
    if(total >= 4){
        result.textContent = "yes";
        result.style.background ="lightgreen";
    }
    if((total <=3 ) && (total >= 2)){
        result.textContent = "Maybe";
        result.style.background ="violet";
    }
    if(total === 1 || total === 0){
        result.textContent = "NO";
        result.style.background ="red";
    }
    


}

var userName = document.querySelector("#username");
var birthDate = document.querySelector("#birthdate");
var luckyNum = document.querySelector("#luckynum")
var submitBtn = document.querySelector("#submitbtn");
var resetBtn = document.querySelector("#resetbtn");

submitBtn.addEventListener("click", btnHandler);
resetBtn.addEventListener("click", resetbtnHandler);

function resetbtnHandler(){
    
    document.getElementById("username").value = "";
    document.getElementById("birthdate").value = "";
    document.getElementById("luckynum").value = "";
    
}



function btnHandler(){
var n = luckyNum.value;
var date= birthDate.value
var d = 0 ;
for(var i=0;i<date.length;i++){
    if(!(i==4||i==7)){
        
        d = d + Number(date[i]);
        
    }
    
}

    if(d%n==0){
        
        location.href = "luckyBday.html";
    }
    else{
        
        location.href = "luckyYou.html"
    }

}

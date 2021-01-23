var userName = document.querySelector("#username");
var birthDate = document.querySelector("#birthdate");
var luckyNum = document.querySelector("#luckynum")
var submitBtn = document.querySelector("#submitbtn");
var outPut = document.querySelector("#output")

submitBtn.addEventListener("click", btnHandler)



function btnHandler(){
var n = luckyNum.value;
var date=birthDate.value
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

function bigImg(x) {
    x.style.height = "50rem";
    x.style.width = "50rem";
  }
  
  function normalImg(x) {
    x.style.height = "20rem";
    x.style.width = "20rem";
  }


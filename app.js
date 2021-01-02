var userName = document.querySelector("#username");
var birthDate = document.querySelector("#birthdate");
var luckyNum = document.querySelector("#luckynum")
var submitBtn = document.querySelector("#submitbtn");
var outPut = document.querySelector("#output")

submitBtn.addEventListener("click", btnHandler)



function btnHandler(){
console.log("hello")

var n = luckyNum.value;
var date=birthDate.value
var d = 0 ;
for(var i=0;i<date.length;i++){
    if(!(i==4||i==7)){
        
        d = d + Number(date[i]);
        console.log(d)
    }
    else{
        console.log("no")
    }
}
console.log(d)

    console.log(n)
    if(d%n==0){
        console.log("done");
        outPut.innerHTML = "its done";
    }
    else{
        console.log("not done");
        outPut.innerHTML = "not done";
    }

}

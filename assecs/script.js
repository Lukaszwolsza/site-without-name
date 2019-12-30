const userNickname = document.getElementById("user-nickname");
const userEmail = document.getElementById("user-email");
const btnSender = document.getElementById("btn-to-send");

function checkIsMailCorrect(){
    if(userEmail.contains("@")){
        alert("email is correct");
    } else{
        alert("email is incorrect");
    }
}

btnSender.addEventListener("click", checkIsMailCorrect);
var check = prompt("inserisci la tua email");

var emailCorrect = false;

var emailList = ["gino@email.com" , "dino@hug.net" , "gianni@argh.com"];

for (var i = 0; i < emailList.length; ++i){

    if (check == emailList[i]) { 
    
        emailCorrect = true; 
    }

}

if (emailCorrect == true) {

    alert("puoi entrare");

}
else {

    alert("non puoi entrare");

}

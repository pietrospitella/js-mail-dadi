var check = prompt("inserisci la tua email");

var emailList = ["gino@email.com" , "dino@hug.net" , "gianni@argh.com"];

for (var i = 0; i < emailList.length; ++i){
    if (check == emailList[i]) { 
    console.log("puoi entrare");
    }
    else {
    console.log(" non puoi entrare");
    }
}


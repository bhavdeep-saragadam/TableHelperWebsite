var firstNum = prompt("What's The First Number For Your Times Table") 
var secNum = prompt("What's The Second Number For Your Times Table")


function taable() {
    
    for (var i = 0; i < secNum; i++) {
        say = document.getElementById("tableview").innerHTML = (firstNum) * (parseInt(1) + i);
        
    }
    if (secNum === "0") {
        say.innerHTML = "0"
        
    }
    

}

taable();

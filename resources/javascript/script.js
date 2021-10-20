let timesPressed = 0;

//select button we will link
let buttonSelector = document.querySelector('button');

//function to print message with date and counter(of times pressed)
buttonSelector.onclick = function(){
    timesPressed++
    const d = new Date();
    let month = d.getMonth() + 1;
    if(month < 10){
        month = '0' + month;
    }
    //put together a message to print
    let date = "<br><h2>You pressed the button today: <br>Day: " + d.getDate() + ". Month: "
    + month + "<br> Number of times you pressed it: <br><span>" + timesPressed + "</span></h2>";
    
    //select where it will be printed
    document.getElementById('placeToPrint').innerHTML = date;
}
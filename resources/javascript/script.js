let timesPressed = 0;

//select button we will link
let buttonSelector = document.querySelector('button');


//function to print message with date and counter(of times pressed)
buttonSelector.onclick = function(){
    timesPressed++
    const d = new Date();
    const month = new Date()

    //put together a message to print
    let date = "<h2>You pressed the button today: <br>Day: " + d.getDate() + "Month: "
    + month.getMonth() + "<br><br><br><br> Number of times you pressed it: <br><br><br><span>" + timesPressed + "</span></h2>";
    
    //select where it will be printed
    document.getElementById('placeToPrint').innerHTML = date;
}
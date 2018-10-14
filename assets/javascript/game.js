
//Define Global Variables
var wins = 0;
var losses = 0;
var randomNumber = 19 + Math.round(Math.random() * 111);
    console.log(randomNumber);
var counter = 0;
var numberOptions = [];

$("#random-number-text").html("<h1> Your Random Number: " + randomNumber + "</h1>");

for (i = 0; i < 4; i++) {
    var increment = Math.ceil(Math.random() * 12);
    numberOptions.push(increment);
}
    console.log("Number options" + numberOptions);

//Create onclick loops

    $("#img-1").on("click", function() {

        counter += numberOptions[0];
        console.log(counter);
        $("#total-score").text("Your Total Score: " + counter);
        if (counter === randomNumber) {
            wins ++;
            $("#scorecard").html("<h1>You Win!</h1>")
        } else if (counter > randomNumber) {
            $("#scorecard").html("<h1>You Lost! </h1>")
        }
    })

    $("#img-2").on("click", function() {
    
        counter += numberOptions[1];
        console.log(counter);
        $("#total-score").text("Your Total Score: " + counter);
        if (counter === randomNumber) {
            wins ++;
            $("#scorecard").html("<h1>You Win!</h1>")
        } else if (counter > randomNumber) {
            $("#scorecard").html("<h1>You Lost! </h1>")
        } 
    })

    $("#img-3").on("click", function() {
    
        counter += numberOptions[2];
        console.log(counter);
        $("#total-score").text("Your Total Score: " + counter); 
        if (counter === randomNumber) {
            wins ++;
            $("#scorecard").html("<h1>You Win!</h1>")
        } else if (counter > randomNumber) {
            $("#scorecard").html("<h1>You Lost! </h1>")
        }
    })

    $("#img-4").on("click", function() {
    
        counter += numberOptions[3];
        console.log(counter);
        $("#total-score").text("Your Total Score: " + counter);
        if (counter === randomNumber) {
            wins ++;
            $("#scorecard").html("<h1>You Win!</h1>")
        } else if (counter > randomNumber) {
            $("#scorecard").html("<h1>You Lost! </h1>")
        } 
    
    })


//reset function
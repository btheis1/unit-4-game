
//Define Global Variables
var wins = 0;
var losses = 0;
var randomNumber = 19 + Math.round(Math.random() * 111);
var numberOptions = [];

//Reset function
var Reset = function () {
    counter= 0;
    randomNumber = 19 + Math.round(Math.random() * 111);
    $("#random-number-text").html("<h1> Your Random Number: " + randomNumber + "</h1>");
    numberOptions = [];
    for (i = 0; i < 4; i++) {
        var increment = Math.ceil(Math.random() * 12);
        numberOptions.push(increment);
    }
}

Reset();

//Create onclick functions
    $("#img-1").on("click", function() {
        counter += numberOptions[0];
        $("#total-score").text("Your Total Score: " + counter);
        if (counter === randomNumber) {
            wins ++;
            $("#scorecard").html("<h1>You Win! Try again. </h1>");
            $("#wins").text("Wins: " + wins);
            Reset();
        } else if (counter > randomNumber) {
            losses++;
            $("#scorecard").html("<h1>You Lost! Try again.</h1>")
            $("#losses").text("Losses: " + losses);
            Reset();
        }
    })

    $("#img-2").on("click", function() {
        counter += numberOptions[1];
        $("#total-score").text("Your Total Score: " + counter);
        if (counter === randomNumber) {
            wins ++;
            $("#scorecard").html("<h1>You Win! Try again.</h1>");
            $("#wins").text("Wins: " + wins);
            Reset();
        } else if (counter > randomNumber) {
            losses++;
            $("#scorecard").html("<h1>You Lost! Try again.</h1>")
            $("#losses").text("Losses: " + losses);
            Reset();
        }
    })

    $("#img-3").on("click", function() {
        counter += numberOptions[2];
        $("#total-score").text("Your Total Score: " + counter); 
        if (counter === randomNumber) {
            wins ++;
            $("#scorecard").html("<h1>You Win! Try again.</h1>");
            $("#wins").text("Wins: " + wins);
            Reset();
        } else if (counter > randomNumber) {
            losses++;
            $("#scorecard").html("<h1>You Lost! Try again.</h1>")
            $("#losses").text("Losses: " + losses);
            Reset();
        }
    })

    $("#img-4").on("click", function() {
        counter += numberOptions[3];
        $("#total-score").text("Your Total Score: " + counter);
        if (counter === randomNumber) {
            wins ++;
            $("#scorecard").html("<h1>You Win! Try again.</h1>");
            $("#wins").text("Wins: " + wins);
            Reset();
        } else if (counter > randomNumber) {
            losses++;
            $("#scorecard").html("<h1>You Lost! Try again.</h1>")
            $("#losses").text("Losses: " + losses);
            Reset();
        } 
    })

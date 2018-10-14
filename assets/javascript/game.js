
//Define Global Variables
var wins = 0;
var losses = 0;
var randomNumber = 19 + Math.round(Math.random() * 111);
var numberOptions = [];


//Reset function
var Reset = function () {
    counter= 0;
    randomNumber = 19 + Math.round(Math.random() * 111);
    console.log(randomNumber);
    $("#random-number-text").html("<h1> Your Random Number: " + randomNumber + "</h1>");
    numberOptions = [];
    for (i = 0; i < 4; i++) {
        var increment = Math.ceil(Math.random() * 12);
        numberOptions.push(increment);
    }
        console.log("Number options" + numberOptions);
}

Reset();

//Create onclick loops

    $("#img-1").on("click", function() {

        counter += numberOptions[0];
        console.log(counter);
        $("#total-score").text("Your Total Score: " + counter);
        if (counter === randomNumber) {
            wins ++;
            console.log("Wins" + wins);
            $("#scorecard").html("<h1>You Win!</h1>");
            $("#wins").text("Wins: " + wins);
            Reset();
        } else if (counter > randomNumber) {
            losses++;
            console.log("Losses" + losses);
            $("#scorecard").html("<h1>You Lost! </h1>")
            $("#losses").text("Losses: " + losses);
            Reset();
        }
    })

    $("#img-2").on("click", function() {
    
        counter += numberOptions[1];
        console.log(counter);
        $("#total-score").text("Your Total Score: " + counter);
        if (counter === randomNumber) {
            wins ++;
            console.log("Wins" + wins);
            $("#scorecard").html("<h1>You Win!</h1>");
            $("#wins").text("Wins: " + wins);
            Reset();
        } else if (counter > randomNumber) {
            losses++;
            console.log("Losses" + losses);
            $("#scorecard").html("<h1>You Lost! </h1>")
            $("#losses").text("Losses: " + losses);
            Reset();
        }
    })

    $("#img-3").on("click", function() {
    
        counter += numberOptions[2];
        console.log(counter);
        $("#total-score").text("Your Total Score: " + counter); 
        if (counter === randomNumber) {
            wins ++;
            console.log("Wins" + wins);
            $("#scorecard").html("<h1>You Win!</h1>");
            $("#wins").text("Wins: " + wins);
            Reset();
        } else if (counter > randomNumber) {
            losses++;
            console.log("Losses" + losses);
            $("#scorecard").html("<h1>You Lost! </h1>")
            $("#losses").text("Losses: " + losses);
            Reset();
        }
    })

    $("#img-4").on("click", function() {
    
        counter += numberOptions[3];
        console.log(counter);
        $("#total-score").text("Your Total Score: " + counter);
        if (counter === randomNumber) {
            wins ++;
            console.log("Wins" + wins);
            $("#scorecard").html("<h1>You Win!</h1>");
            $("#wins").text("Wins: " + wins);
            Reset();
        } else if (counter > randomNumber) {
            losses++;
            console.log("Losses" + losses);
            $("#scorecard").html("<h1>You Lost! </h1>")
            $("#losses").text("Losses: " + losses);
            Reset();
        } 
    
    })


//reset function
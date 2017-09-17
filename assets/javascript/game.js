// Creat var wins & loses
// Creat variable randomeNumber to generate the random number
// Using Jqeury on click method, when a user click the pics of crystals 
// the number that randomly set on each chrystal push and add up in blank. 
// when the sub === randomNumber, you win, wins++, and reset the game
// When the sub > randomNumber, you lose, loses++, and reset the game

// when the game was reseted, the generated number on each chrystal would reset and change the number. 

var wins = 0;
var losses = 0;
var clickLeft = 4;

var randomNumber = Math.floor(Math.random() * 49 + 19);

var chrystal1 = Math.floor(Math.random() * 21 + 1);
var chrystal2 = Math.floor(Math.random() * 21 + 1);
var chrystal3 = Math.floor(Math.random() * 21 + 1);
var chrystal4 = Math.floor(Math.random() * 21 + 1);

var blank = []; // store the random #s of chrystals
var sum = 0;



function num() {

    $("#random-number").html("<p><h3>Random Number: " + randomNumber + "</h3></p>");
    $("#result").html("<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</p></h4>");
}
num();

function reset() {
    randomNumber = Math.floor(Math.random() * 49 + 19);
    chrystal1 = Math.floor(Math.random() * 21 + 1);
    chrystal2 = Math.floor(Math.random() * 21 + 1);
    chrystal3 = Math.floor(Math.random() * 21 + 1);
    chrystal4 = Math.floor(Math.random() * 21 + 1);
    sum = 0;
    num();
    $("#score").html(sum);

}
//reset();



$("#gem1").on("click", function() {

    sum = sum + chrystal1;
    blank.push(chrystal1);
    console.log("new sum= " + sum);
    $("#score").html(sum);

    winsOrLoses();
    


    // if(randomNumber < sum) {
    //  wins++;
    //  reset();
    // } else {
    //  losses++;
    //  reset();
    // }
    // $("#result").html("<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Loses: " + losses + "</h4></p>");

});

$("#gem2").on("click", function() {

    sum = sum + chrystal2;
    blank.push(chrystal2);
    console.log("new sum= " + sum);
    $("#score").html(sum);
    winsOrLoses();
    

    // if(randomNumber < sum) {
    //  wins++;
    //  reset();
    // } else {
    //  losses++;
    //  reset();
    // }
    // $("#result").html("<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Loses: " + losses + "</h4></p>");

});

$("#gem3").on("click", function() {
    sum = sum + chrystal3;
    blank.push(chrystal3);
    console.log("new sum= " + sum);
    $("#score").html(sum);
    winsOrLoses();
    

    // if(randomNumber < sum) {
    //  wins++;
    //  reset();
    // } else {
    //  losses++;
    //  reset();
    // }
    // $("#result").html("<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Loses: " + losses + "</h4></p>");

});

$("#gem4").on("click", function() {
    sum = sum + chrystal4;
    blank.push(chrystal4);
    console.log("new sum= " + sum);
    $("#score").html(sum);
    winsOrLoses();
    

    // if(randomNumber < sum) {
    //  wins++;
    //  reset();
    // } else {
    //  losses++;
    //  reset();
    // }
    // $("#result").html("<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Loses: " + losses + "</h4></p>");

});







function winsOrLoses() {
    if (randomNumber === sum) {
        wins++;
        $("#comment").html("<p><h4>Congratuations! You Won!</h4></p>");
        reset();
       
    } else if(sum > randomNumber) {
        losses++;
        $("#comment").html("<p><h4>Bah! You Lost!</h4></p>");
        reset();
        
    }

    $("#result").html("<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>");

}


function yourScore() {
    $("#text").html("<p><h4>Your total score is: " + "</h4></p>");
}

yourScore();

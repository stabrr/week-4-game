
// declaring variables
var targetNumber;
var counter = 0;
var winNum = 0;
var lossNum = 0;
//random value for crsystal 1-12
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//location of pictures
var picture = "assets/images/";
//used for random shuffled crystal value numbers
var newNumbers = [];


//random target number btwn 19-120
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//this will take the shuffled array and asign values to the crystals
 function assignCrystalValue (changeNumbers){
  console.log(changeNumbers);
  for (var i = 1; i < 5; i++){
    ($(".crystal-image" + i).attr("data-crystalvalue",changeNumbers[i]));
    console.log("chnumi: " + changeNumbers[i]);
  }
 }
//this starts the game and resets the game by getting a target number and the new values for the crystals
 function gameReset (){
      targetNumber = getRandomInt (19,120);
      newNumbers = numberOptions.sort(function() { return 0.5 - Math.random() }); 
      assignCrystalValue(newNumbers);
      console.log(newNumbers); 
      console.log("imageCrystal: " + imageCrystal);  
      counter=0;   
      $("#number-to-guess").text(targetNumber);
      $("#your-score").text(counter);
 }

  // Next we create a for loop to create 4 crystals and two classes one style one for value
    for (var i = 1; i < 5; i++) {
    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");
    //Class created with a number to represent each crystal
    //this is needed to assign a vakue to each crystal
    imageCrystal.addClass("crystal-image"+i);

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src",picture + i+".jpg");

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
    ("imageCrystal: " + imageCrystal); 
    
  }
 

  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {



    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // Display score and to start or if you win or loss
    $("#your-score").text(counter);
    $("#gameResult").text(" ");

    //if you win upcounter display you win and reset game
    if (counter === targetNumber) {
      winNum++;
      $("#wins").text(winNum);
      gameReset();
      $("#gameResult").text("You are a Winner!");
    }

    //else if you lose to up loss counter, display and restart game
    else if (counter >= targetNumber) {
      lossNum++;
      $("#loss").text(lossNum);
      $("#gameResult").text("Sorry, You Lost! ");
      gameReset();  
    }
//    
  });
  gameReset();

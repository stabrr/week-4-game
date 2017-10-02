
// declaring variables
var targetNumber;
var counter = 0;
var winNum = 0;
var lossNum = 0;
//random value for crsystal 1-12
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var picture = "assets/images/";
var newNumbers = numberOptions.sort(function() { return 0.5 - Math.random() });
console.log(newNumbers);


function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
 function assignCrystalValue (changeNumbers){
//  var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//  var newNumbers = numberOptions.sort(function() { return 0.5 - Math.random() });
  console.log(changeNumbers);
  for (var i = 1; i < 5; i++){
    imageCrystal.attr("data-crystalvalue", changeNumbers[i]);

  }

 }

   targetNumber = getRandomInt (19,120);
   $("#number-to-guess").text(targetNumber);
  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 1; i < 5; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    imageCrystal.addClass("crystal-image"+i);

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src",picture + i+".jpg");




    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", newNumbers[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
    ("imageCrystal: " + imageCrystal); 
    console.log("imageCrystal: " + imageCrystal);
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

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    $("#your-score").text(counter);

    if (counter === targetNumber) {
      winNum++;
      $("#wins").text(winNum);
      targetNumber = getRandomInt (19,120);
      newNumbers = numberOptions.sort(function() { return 0.5 - Math.random() }); 
      assignCrystalValue(newNumbers);
      console.log(newNumbers); 
      console.log("imageCrystal: " + imageCrystal);  
      counter=0;   
      $("#number-to-guess").text(targetNumber);


    }

    else if (counter >= targetNumber) {
      lossNum++;
      $("#loss").text(lossNum);
      targetNumber = getRandomInt (19,120);
      newNumbers = numberOptions.sort(function() { return 0.5 - Math.random() });
      assignCrystalValue(newNumbers);
      console.log(newNumbers);
      console.log("imageCrystal: " + imageCrystal); 
      counter = 0; 
      $("#number-to-guess").text(targetNumber);
      
    }
    ($(".crystal-image1").attr("data-crystalvalue",20));
  });

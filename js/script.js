

function updateOne(){
    document.getElementById('output').innerHTML = "JavaScript enables websites to create dynamic and interactive animations by manipulating HTML and CSS elements in real-time. Through libraries like jQuery or frameworks like React, developers can easily control animations, enhancing user engagement and visual appeal. ";
    document.getElementById('img').src="img/Recording 2024-04-18 102939.gif";
}

function updateTwo(){
    document.getElementById('output').innerHTML = "";
    document.getElementById('img').src="img/Recording 2024-04-18 102939.gif";
}
function updateThree(){
    document.getElementById('output').innerHTML = "";
    document.getElementById('img').src="img/Recording 2024-04-18 102939.gif";
}

function updateSix(){
    document.getElementById('output').innerHTML = "";
    document.getElementById('img').src="img/Recording 2024-04-18 102939.gif";
}


document.addEventListener('DOMContentLoaded', function() {
    // Get reference to the bee image and the fun fact div
    var beeImage = document.querySelector('.bee-image');
    var funFactDiv = document.getElementById('fun-fact');
  
    // Define an array of fun facts about bees
    var funFacts = [
      "This is an Animated circle.",
      "Bees communicate with each other through dance.",
      "A beehive can contain up to 80,000 bees during peak season.",
      "Bees are the only insect in the world that make food that people can eat (honey).",
      "Bees flap their wings about 200 times per second, which is what creates their distinctive buzz."
    ];
  
    // Add click event listener to the bee image
    beeImage.addEventListener('click', function() {
      // Generate a random index to get a random fun fact
      var randomIndex = Math.floor(Math.random() * funFacts.length);
      // Display the random fun fact
      funFactDiv.textContent = funFacts[randomIndex];
      // Show the fun fact div
      funFactDiv.style.display = 'block';
    });
  });




function updateOne(){
    document.getElementById('output').innerHTML = " In 2024, it's crucial to prioritize bee conservation efforts. Bees play a vital role in pollinating crops and maintaining ecosystems, essential for our food supply and biodiversity. By safeguarding bees, we protect not just their species, but also the future of agriculture and our planet's delicate balance.";
    document.getElementById('img').src="img/bee0.png";
}

function updateTwo(){
    document.getElementById('output').innerHTML = "Bees face numerous threats, including habitat loss, pesticide exposure, climate change, and disease. Habitat destruction due to urbanization and intensive agriculture reduces foraging and nesting sites. Pesticides, especially neonicotinoids, can harm bees by affecting their navigation, communication, and reproductive abilities. Additionally, climate change alters flower availability and disrupts bee life cycles, exacerbating their vulnerability to other stressors.";
    document.getElementById('img').src="img/bee2.png";
}
function updateThree(){
    document.getElementById('output').innerHTML = "You can help bees by creating bee-friendly gardens with a variety of native plants that provide food and shelter. Avoiding or minimizing the use of pesticides in your garden can also protect bees from harmful chemicals. Supporting local beekeepers and advocating for policies that promote bee conservation efforts are other ways individuals can contribute to ensuring the well-being of these vital pollinators.";
    document.getElementById('img').src="img/bee3.png";
}
function updateFour(){
    document.getElementById('output').innerHTML = "You can get involved in bee conservation efforts by joining local beekeeping associations or environmental organizations dedicated to protecting pollinators. Participating in community events, workshops, or volunteering for bee-friendly initiatives can also make a significant impact. Additionally, educating others about the importance of bees and advocating for policies that prioritize their conservation are effective ways to contribute to safeguarding these essential pollinators.";
    document.getElementById('img').src="img/bee4.png";
}

function updateSix(){
    document.getElementById('output').innerHTML = "Bees matter immensely due to their critical role as pollinators in ecosystems. They facilitate the reproduction of plants, including many crops that humans rely on for food. Without bees, agricultural productivity would decline, impacting both global food security and biodiversity.";
    document.getElementById('img').src="img/bee5.png";
}


document.addEventListener('DOMContentLoaded', function() {
    // Get reference to the bee image and the fun fact div
    var beeImage = document.querySelector('.bee-image');
    var funFactDiv = document.getElementById('fun-fact');
  
    // Define an array of fun facts about bees
    var funFacts = [
      "Honeybees have five eyes, including three simple eyes and two compound eyes.",
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


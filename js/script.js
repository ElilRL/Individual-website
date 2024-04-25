

function updateOne(){
    document.getElementById('output').innerHTML = "JavaScript enables websites to create dynamic and interactive animations by manipulating HTML and CSS elements in real-time. Through libraries like jQuery or frameworks like React, developers can easily control animations, enhancing user engagement and visual appeal. ";
    document.getElementById('img').src="img/Recording 2024-04-18 102939.gif";
}

function updateTwo(){
    document.getElementById('output').innerHTML = " JavaScript's versatility, ease of use, and widespread adoption make it an essential language for web development and beyond. Its constantly evolving ecosystem, supported by a vibrant community and extensive documentation, ensures that it remains a cornerstone of modern programming.";
    document.getElementById('img').src="img/Recording 2024-04-18 102939.gif";
}
function updateThree(){
    document.getElementById('output').innerHTML = "MDN Web Docs (Mozilla Developer Network): MDN provides comprehensive documentation and tutorials on JavaScript, HTML, CSS, and web development in general. It's widely respected for its accuracy and depth of information. Website: MDN Web Docs freeCodeCamp: freeCodeCamp offers a structured curriculum for learning web development, including JavaScript. It provides interactive coding challenges, projects, and certifications to help you build practical skills. Website: freeCodeCamp Codecademy: Codecademy offers interactive coding exercises and projects to help you learn JavaScript (as well as other programming languages). Its hands-on approach allows you to practice coding in your browser and receive instant feedback. Website: Codecademy";
    document.getElementById('img').src="img/Recording 2024-04-18 102939.gif";
}

function updateSix(){
    document.getElementById('output').innerHTML = "Interactive website construction involves combining HTML for structure, CSS for styling, and JavaScript for interactivity. HTML provides the backbone of the webpage, defining its structure and content. CSS styles the HTML elements, making the site visually appealing and responsive. JavaScript adds interactivity by handling user actions like clicks and input, manipulating the Document Object Model (DOM) to dynamically update content and respond to user interactions. By utilizing event listeners, DOM manipulation, and asynchronous communication techniques like AJAX, developers can create engaging websites that respond to user input and provide a seamless browsing experience across different devices and screen sizes. Testing, debugging, and regular maintenance ensure the website functions correctly and remains accessible to users.";
    document.getElementById('img').src="img/Recording 2024-04-18 102939.gif";
}


document.addEventListener('DOMContentLoaded', function() {
    // Get reference to the bee image and the fun fact div
    var beeImage = document.querySelector('.bee-image');
    var funFactDiv = document.getElementById('fun-fact');
  
    // Define an array of fun facts about bees
    var funFacts = [
      "This is an Animated circle.",
      "JavaScript was originally named Mocha by its creator Brendan Eich, then briefly called LiveScript before finally being renamed JavaScript in a strategic partnership with Sun Microsystems to capitalize on the popularity of Java.",
      "The first version of JavaScript was created in just 10 days by Brendan Eich while he was working at Netscape Communications Corporation in 1995.",
      "JavaScript is not related to Java; its name was chosen for marketing reasons, and the two languages have different syntax, semantics, and purposes.",
      "JavaScript is not limited to web development; it can also be used for server-side programming (Node.js), desktop application development, game development, and even embedded systems."
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

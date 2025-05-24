// Selecting Elements
const body = document.getElementById('mainBody');
const title = document.getElementById('originalTitle');
const image = document.getElementById('mainImage');
const paragraphs = document.getElementsByClassName('info');
const link = document.getElementById('mainLink');
const button = document.getElementById('toggleButton');

// Changing Content
title.textContent = "Interesting Facts About Ravens";
paragraphs[0].innerHTML = "Ravens are fascinating birds known for their intelligence and adaptability. They are among the smartest of all birds, with cognitive abilities comparable to great apes and dolphins.Ravens can solve complex problems and have been observed crafting and using tools, demonstrating forward planning and even engaging in bartering behaviors"; 
paragraphs[1].innerHTML = "These birds are also known for their social behaviors. Ravens form teenage gangs, which they leave when they reach adulthood to mate for life.They exhibit empathy, consoling birds that have been involved in conflicts and remembering friendly birds for up to three years. Ravens are also adept at communication, using gestures like pointing with their beaks to direct other ravens.Ravens have a varied diet, including carrion, small animals, and even garbage, which they often cache for later use. They are also known to play, such as sliding on snow-covered roofs or rolling down snowy hills. Additionally, ravens are culturally significant, appearing in many mythologies and folklore, often associated with death and dark omens";

// Changing Attribute
const oldSrc = image.getAttribute("src");
image.setAttribute("src", "Raven.jpg")
link.setAttribute("href", "https://nationalzoo.si.edu/animals/common-raven");


// Modifying CSS Styles
body.style.backgroundColor = "black";
body.style.color = "white";
title.style.color = "blue";
title.style.fontSize = "30px"; 
image.style.border = "5px solid purple";
image.style.borderRadius = "20px";


// Modifying Classes
title.classList.add("highlight");
button.classList.add("block");
paragraphs[1].classList.remove("inactive");
link.classList.toggle("selected");


// Add or remove an element when a button is clicked
const toggleButton = document.getElementById('toggleButton');
let extraParagraph = null;

toggleButton.addEventListener('click', function() {
    if (!extraParagraph) {
        extraParagraph = document.createElement('p');
        extraParagraph.textContent = "Common ravens (Corvus corax) are adaptable and can thrive in a wide variety of habitats across the Northern Hemisphere. They are found in northern Europe, central Asia, and the Pacific Ocean, as well as in northwestern Africa and the Canary Islands, and in North and Central America. Ravens prefer open landscapes such as treeless tundra, seacoasts, open riverbanks, rocky cliffs, mountain forests, plains, deserts, and scrubby woodlands. They can also be found in most types of habitats except for rainforests. Additionally, ravens have adapted to human-modified environments, including rural settlements, isolated houses, and some cities, where they take advantage of artificial ponds and human garbage for survival";
        extraParagraph.style.marginTop = "20px";
        body.appendChild(extraParagraph);
    } else {
        body.removeChild(extraParagraph);
        extraParagraph = null;
    }
});
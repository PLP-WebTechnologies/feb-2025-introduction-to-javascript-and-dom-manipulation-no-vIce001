//Selecting Elements
const body = document.getElementById('mainBody');
const title = document.getElementById('originalTitle');
const image = document.getElementById('mainImage');
const paragraphs = document.getElementsByClassName('info');
const link = document.getElementById('mainLink');

// 1. Changing Content
title.textContent = "Interesting Facts About Ravens";
paragraphs[0].innerHTML = "Ravens are fascinating birds known for their intelligence and adaptability. They are among the smartest of all birds, with cognitive abilities comparable to great apes and dolphins.Ravens can solve complex problems and have been observed crafting and using tools, demonstrating forward planning and even engaging in bartering behaviors"; 
paragraphs[1].innerHTML = "These birds are also known for their social behaviors. Ravens form teenage gangs, which they leave when they reach adulthood to mate for life.They exhibit empathy, consoling birds that have been involved in conflicts and remembering friendly birds for up to three years. Ravens are also adept at communication, using gestures like pointing with their beaks to direct other ravens.Ravens have a varied diet, including carrion, small animals, and even garbage, which they often cache for later use. They are also known to play, such as sliding on snow-covered roofs or rolling down snowy hills. Additionally, ravens are culturally significant, appearing in many mythologies and folklore, often associated with death and dark omens";

// 2. Changing Attribute
const oldSrc = image.getAttribute("src");
image.setAttribute("src", "Raven.jpg")
link.setAttribute("href", "https://nationalzoo.si.edu/animals/common-raven");


//3. Modifying CSS Styles
body.style.backgroundColor = "black";
body.style.color = "white";
title.style.color = "blue";
title.style.fontSize = "30px"; 
image.style.border = "5px solid purple";
image.style.borderRadius = "20px";


//4. Modifying Classes
title.classList.add("highlight");
paragraphs[1].classList.remove("inactive");
link.classList.toggle("selected");
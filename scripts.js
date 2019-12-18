
let images = document.querySelectorAll('section > img');

function changeOpacity() {
  images[0].style.opacity = '0.2';
  images[1].style.opacity = '0.2';
  images[2].style.opacity = '0.2';
  images[3].style.opacity = '0.2';
  images[4].style.opacity = '0.2';

  this.style.opacity = '1'; 
}

function resetOpacity() {
  images[0].style.opacity = '1'; // reset opacity of each image
  images[1].style.opacity = '1';
  images[2].style.opacity = '1';
  images[3].style.opacity = '1';
  images[4].style.opacity = '1';

}

images[0].addEventListener('mouseover', changeOpacity);
images[1].addEventListener('mouseover', changeOpacity);
images[2].addEventListener('mouseover', changeOpacity);
images[3].addEventListener('mouseover', changeOpacity);
images[4].addEventListener('mouseover', changeOpacity);
images[0].addEventListener('mouseout', resetOpacity);
images[1].addEventListener('mouseout', resetOpacity);
images[2].addEventListener('mouseout', resetOpacity);
images[3].addEventListener('mouseout', resetOpacity);
images[4].addEventListener('mouseout', resetOpacity);


let today = new Date(); 
console.log(Date.now());
let hour = today.getHours(); 
console.log(hour);
let js; 
let paragraph = document.getElementById('js'); 

if (hour >= 12) {
  js = 'Hi There,';
} else if (hour >= 0) {
  js = 'Hello,';
} else {
  js = 'Hello,';
}
paragraph.textContent = js;


let day = today.getDay();
if (day == 0) {
    const colored = document.getElementById('name');
    colored.stlye.color = "#fc03ca";
}
else if (day == 1) {
        const colored = document.getElementById('name');
        colored.style.color = "#42aaf5";
}
else if (day == 2) {
        const colored = document.getElementById('name');
        colored.style.color = "#d60965";
}
else if (day == 3) {
        const colored = document.getElementById('name');
        colored.style.color = "#d60965";
}
else if (day == 4) {
    const colored = document.getElementById('name');
    colored.style.color = "#fc03ca";
}
else if (day == 5) {
        const colored = document.getElementById('name');
        colored.style.color = "#42aaf5";
}
else if (day == 6) {
        const colored = document.getElementById('name');
        colored.style.color = "#b207f5";
}
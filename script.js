
let sections = document.querySelectorAll('section');
window.onscroll =() => {
    sections.forEach(sec => { 
let top = window.scrollY;
let offset = sec.offsetTop -150;
let height = sec.offsetHeight;

if (top >= offset && top < offset + height) {
    sec.classList.add('show-animate');
}
//if want to use repeating animatiom on scroll, use this
else {
    sec.classList.remove('show-animate');
}
    }
)}

//for smooth scroll on navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click',function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        });
    });
});
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

document.addEventListener('DOMContentLoaded', function() {
    var hobbiesSection = document.querySelector('section:nth-child(3)');
    var hobbiesButton = document.createElement('button');
    hobbiesButton.textContent = 'Show/Hide Hobbies';
    hobbiesButton.onclick = function() {
        var hobbiesList = document.querySelector('section:nth-child(3) ul');
        if (hobbiesList.style.display === 'none') {
            hobbiesList.style.display = 'block';
        } else {
            hobbiesList.style.display = 'none';
        }
    };
    hobbiesSection.appendChild(hobbiesButton);
});

//buttons for projects to be shown
const buttons = document.querySelectorAll('.project-button');
        const projects = document.querySelectorAll('.project');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const projectId = button.getAttribute('data-project');
                const project = document.getElementById(projectId);

                projects.forEach(p => p.style.display = 'none');
                project.style.display = 'block';
            });
        });

        //for clickable skills in resume
        function showMessage(skill) {
            alert('You have clicked on the ' + skill + ' skill!');
         }

         //for validation contact form
         function validateForm() { let x = document.forms["myForm"]["fname"].value; 
         if (x == "") { alert("Name must be filled out"); return false; 
        } }

        const cursor = document.querySelector("#cursor");
const cursorBorder = document.querySelector("#cursor-border");
const cursorPos = { x: 0, y: 0 };
const cursorBorderPos = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;

  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

requestAnimationFrame(function loop() {
  const easting = 8;
  cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
  cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

  cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
  requestAnimationFrame(loop);
});

document.querySelectorAll("[data-cursor]").forEach((item) => {
  item.addEventListener("mouseover", () => {
    if (item.dataset.cursor === "pointer") {
      cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
      cursorBorder.style.setProperty("--size", "30px");
    }
    if (item.dataset.cursor === "pointer2") {
      cursorBorder.style.backgroundColor = "white";
      cursorBorder.style.mixBlendMode = "difference";
      cursorBorder.style.setProperty("--size", "80px");
    }
  });
  item.addEventListener("mouseout", () => {
    cursorBorder.style.backgroundColor = "unset";
    cursorBorder.style.mixBlendMode = "unset";
    cursorBorder.style.setProperty("--size", "50px");
  });
});



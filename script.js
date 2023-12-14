
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

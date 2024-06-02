/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 



let cadSlideIndex = 0;
let dashboardSlideIndex = 0;
showCadSlides();
showDashboardSlides();

function showCadSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides cad");
    let dots = document.getElementsByClassName("cad-dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    cadSlideIndex++;
    if (cadSlideIndex > slides.length) {cadSlideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[cadSlideIndex-1].style.display = "block";
    dots[cadSlideIndex-1].className += " active";
    setTimeout(showCadSlides, 5000); // Change image every 5 seconds
}

function showDashboardSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides dashboard");
    let dots = document.getElementsByClassName("dashboard-dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    dashboardSlideIndex++;
    if (dashboardSlideIndex > slides.length) {dashboardSlideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[dashboardSlideIndex-1].style.display = "block";
    dots[dashboardSlideIndex-1].className += " active";
    setTimeout(showDashboardSlides, 5000); // Change image every 5 seconds
}

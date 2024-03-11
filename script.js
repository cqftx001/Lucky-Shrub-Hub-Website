document.addEventListener('DOMContentLoaded', function () {
    const toogleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navbar-links');

    toggleButton.addEventListener('click', function () {
        navbarLinks.classList.toggle('active');
    });
});

let slideIndex = 0; 
showSlides(); 

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    let indicators = document.getElementsByClassName("indicator");


    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

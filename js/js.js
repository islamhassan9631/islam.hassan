
var topBtn = document.getElementById("topBtn")
window.addEventListener('scroll' , function(){
    (document.documentElement.scrollTop > 280) ? topBtn.style.display ="inline-block" : topBtn.style.display ="none"
})




$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
        items: 2,
        margin: 30,
        dots: false,
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                
            },
            600: {
                items: 2
            },

        }

    });
});




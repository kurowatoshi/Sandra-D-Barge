document.addEventListener("DOMContentLoaded", function() {
    const texts = document.querySelectorAll('.review-text');
    let currentIndex = 0;

    function showNextText() {
        texts[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % texts.length;
        texts[currentIndex].classList.add('active');
    }

    // Initialize the first text
    texts[currentIndex].classList.add('active');

    // Change text every 5 seconds
    setInterval(showNextText, 5000);

    // Contact Form Submission
    const form = document.querySelector('.contact-form form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        Swal.fire({
            icon: 'success',
            title: 'Sent Successfully',
            text: 'Your message has been sent!',
            confirmButtonText: 'OK'
        }).then(() => {
            form.reset(); // Optionally reset the form after showing the alert
        });
    });
});

$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000
    });
});

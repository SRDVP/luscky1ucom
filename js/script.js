$(document).ready(function() {
    // Smooth scrolling for anchor links (if you add them later)
    $('a[href^="#"]').on('click', function(event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 800);
        }
    });

    // Simple click animation on CTA buttons
    $('.cta-button').on('click', function() {
        $(this).animate({
            opacity: 0.7
        }, 150, function() {
            $(this).animate({
                opacity: 1
            }, 150);
            // In a real scenario, you would redirect to a sign-up page
            console.log('CTA Button Clicked!');
            // Example: window.location.href = 'https://your-signup-page.com';
        });
    });
});
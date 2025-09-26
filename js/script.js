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

    // Enhanced button animations
    $('.cta-button').each(function(index) {
        const button = $(this);
        
        // Add entrance animation delay based on index
        setTimeout(function() {
            button.addClass('animate-entrance');
        }, index * 200);
        
        // Hover effects with additional animations
        button.on('mouseenter', function() {
            // Add shimmer effect
            button.addClass('glow-animation');
            setTimeout(function() {
                button.removeClass('glow-animation');
            }, 1000);
            
            // Add quick zoom effect on hover
            button.addClass('zoom-animation');
            setTimeout(function() {
                button.removeClass('zoom-animation');
            }, 800);
        });
        
        // Click animation
        button.on('click', function(e) {
            // Prevent default if needed
            e.preventDefault();
            
            // Add scale bounce animation
            button.addClass('scale-bounce');
            
            // Remove animation class after animation completes
            setTimeout(function() {
                button.removeClass('scale-bounce');
            }, 300);
            
            console.log('CTA Button Clicked!');
        });
        
        // Add special animations randomly
        setTimeout(function() {
            const randomAnimation = Math.random();
            if (randomAnimation < 0.08) { // 8% chance for wiggle
                button.addClass('wiggle-animation');
                setTimeout(function() {
                    button.removeClass('wiggle-animation');
                }, 600);
            } else if (randomAnimation < 0.15) { // 7% chance for rotate
                button.addClass('rotate-animation');
                setTimeout(function() {
                    button.removeClass('rotate-animation');
                }, 2000);
            } else if (randomAnimation < 0.22) { // 7% chance for wave
                button.addClass('wave-animation');
                setTimeout(function() {
                    button.removeClass('wave-animation');
                }, 3000);
            } else if (randomAnimation < 0.25) { // 3% chance for twirl
                button.addClass('twirl-animation');
                setTimeout(function() {
                    button.removeClass('twirl-animation');
                }, 2000);
            } else if (randomAnimation < 0.35) { // 10% chance for zoom
                button.addClass('zoom-animation');
                setTimeout(function() {
                    button.removeClass('zoom-animation');
                }, 800);
            }
        }, 3000);
        
        // Add long-lasting animations at random intervals
        setInterval(function() {
            const timeAnimation = Math.random();
            if (timeAnimation < 0.25) { // 25% chance every interval (increased)
                const animationType = Math.random();
                if (animationType < 0.4) {
                    button.addClass('glow-animation');
                    setTimeout(function() {
                        button.removeClass('glow-animation');
                    }, 1000);
                } else if (animationType < 0.7) {
                    button.addClass('zoom-animation');
                    setTimeout(function() {
                        button.removeClass('zoom-animation');
                    }, 800);
                }
            }
        }, 5000); // Every 5 seconds (more frequent)
    });

}); // End of jQuery document ready
document.addEventListener('DOMContentLoaded', () => {
    const subtitle = document.querySelector('.subtitle');
    const body = document.querySelector('body');

    // Start pulsing animation
    subtitle.classList.add('subtitle-animating');

    // After 3 seconds...
    setTimeout(() => {
        // Stop infinite animation and fade out subtitle
        subtitle.classList.remove('subtitle-animating');
        subtitle.classList.add('fade-out');

        // Wait for fade-out to finish (~750ms), then swap
        setTimeout(() => {
            const button = document.createElement('button');
            button.textContent = 'Click to continue...';

            button.addEventListener('click', () => {
                // Optional: add a blur effect on the whole body for cinematic feel
                body.style.transition = 'filter 0.5s ease, opacity 0.5s ease';
                body.style.filter = 'blur(10px)';
                body.style.opacity = '0';

                setTimeout(() => {
                    window.location.href = 'home.html';
                }, 500);
            });

            subtitle.replaceWith(button);

            // Trigger fade-in effect
            requestAnimationFrame(() => {
                button.classList.add('fade-in');
            });
        }, 750);
    }, 3000);
});

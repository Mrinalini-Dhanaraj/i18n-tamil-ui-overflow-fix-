//Auto-fixes the configured section of a webpage after google-translated to Tamil,
//and applies a shrink-then-wrap to the affected heading.

(function() {
    setTimeout(() => {
        const title = document.querySelector('h3');
        const coText = document.querySelector('h1');

        console.log('title element:', title);
        console.log('coText element:', coText);
        
        if (title && coText && title.scrollWidth > title.clientWidth) {
            const coTextSize = parseFloat(window.getComputedStyle(coText).fontSize);
            let fontSize = parseFloat(window.getComputedStyle(title).fontSize);
            const minFontSize = coTextSize + 0.3;

            while (title.scrollWidth > title.clientWidth && fontSize > minFontSize) {
                fontSize -= 1.2;
                title.style.fontSize = fontSize + 'px';
            }

            if (title.scrollWidth > title.clientWidth) {
                title.style.whiteSpace = 'normal';
                title.style.overflow = 'visible';
                console.log('Shrink alone was not enough — wrapping applied as fallback');
            }
        } 
    }, 6000);
})();

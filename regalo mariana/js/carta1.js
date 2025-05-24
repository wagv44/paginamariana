const heart = document.getElementById('heart');
        const card = document.getElementById('card');
        const closeBtn = document.getElementById('closeBtn');
        const heartsBackground = document.getElementById('heartsBackground');

        let isCardOpen = false;

        heart.addEventListener('click', function() {
            if (!isCardOpen) {
                heart.classList.remove('beating');
                heart.classList.add('hide');
                setTimeout(() => {
                    card.classList.add('show');
                }, 400);
                isCardOpen = true;
                createFloatingHearts();
            }
        });

        closeBtn.addEventListener('click', function() {
            card.classList.remove('show');
            setTimeout(() => {
                heart.classList.remove('hide');
                heart.classList.add('beating');
            }, 400);
            isCardOpen = false;
            clearFloatingHearts();
        });

        function createFloatingHearts() {
            const heartInterval = setInterval(() => {
                if (!isCardOpen) {
                    clearInterval(heartInterval);
                    return;
                }
                
                const floatingHeart = document.createElement('div');
                floatingHeart.classList.add('floating-heart');
                floatingHeart.style.left = Math.random() * 100 + '%';
                floatingHeart.style.animationDelay = Math.random() * 2 + 's';
                floatingHeart.style.animationDuration = (Math.random() * 3 + 4) + 's';
                
                heartsBackground.appendChild(floatingHeart);
                
                setTimeout(() => {
                    if (floatingHeart.parentNode) {
                        floatingHeart.parentNode.removeChild(floatingHeart);
                    }
                }, 6000);
            }, 800);
        }

        function clearFloatingHearts() {
            heartsBackground.innerHTML = '';
        }
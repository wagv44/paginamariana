 // Funciones para el menú móvil
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.querySelector('.sidebar-overlay');
            
            sidebar.classList.toggle('show');
            overlay.classList.toggle('show');
        }

        function closeSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.querySelector('.sidebar-overlay');
            
            sidebar.classList.remove('show');
            overlay.classList.remove('show');
        }

        // Crear corazones animados
        function createHeart() {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '♥';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
            heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
            document.getElementById('hearts').appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 5000);
        }

        // Crear corazones cada 500ms
        setInterval(createHeart, 500);

        // Cerrar sidebar al hacer click en cualquier enlace
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', function() {
                closeSidebar();
            });
        });
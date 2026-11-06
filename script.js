/* ======================================================================
   CONTROL DE MENÚ HAMBURGUESA Y DESPLEGABLES FLOTANTES
   ====================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Lógica del Menú Hamburguesa para móviles
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // 2. Función genérica para manejar los clics en los submenús
    const setupDropdown = (btnId, submenuId) => {
        const btn = document.getElementById(btnId);
        const submenu = document.getElementById(submenuId);

        if (btn && submenu) {
            btn.addEventListener('click', (e) => {
                e.preventDefault(); // Evita que la página brinque hacia arriba
                e.stopPropagation(); // Evita interferencias con otros clics

                // Cierra cualquier otro submenú que esté abierto
                document.querySelectorAll('.submenu').forEach(sub => {
                    if (sub !== submenu) {
                        sub.classList.remove('active');
                    }
                });

                // Alterna el submenú actual (lo abre o lo cierra)
                submenu.classList.toggle('active');
            });
        }
    };

    // Activamos los tres botones principales de tu barra
    setupDropdown('dropdown-inicio-btn', 'submenu-inicio');
    setupDropdown('dropdown-prize-btn', 'submenu-prize');
    setupDropdown('dropdown-alumnos-btn', 'submenu-alumnos');

    // 3. Cerrar los submenús si haces clic en cualquier otra parte de la pantalla
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown-item')) {
            document.querySelectorAll('.submenu').forEach(sub => {
                sub.classList.remove('active');
            });
        }
    });

});

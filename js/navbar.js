document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const topHeader = document.querySelector('.top-header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        // Efecto de cambio de color en navbar
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Lógica para ocultar/mostrar la barra de contacto superior
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (topHeader) { // Asegurarnos que el elemento exista
            if (scrollTop > lastScrollTop && scrollTop > topHeader.offsetHeight){
                // Scroll hacia abajo
                topHeader.style.top = `-${topHeader.offsetHeight}px`;
            } else {
                // Scroll hacia arriba
                topHeader.style.top = '0';
            }
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
    });
});
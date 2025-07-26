document.addEventListener('DOMContentLoaded', function() {

    // --- Smooth Scroll para links de navegação ---
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // O offset é para compensar a altura da barra de navegação fixa
                const offsetTop = targetElement.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Fecha o menu hambúrguer (se estiver aberto) após o clique
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });

    // --- Animação de Fade-in ao Rolar ---
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% da seção visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Para a animação não repetir
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

});

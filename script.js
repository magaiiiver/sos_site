document.addEventListener('DOMContentLoaded', function() {

    // --- Smooth Scroll para links de navegação ---
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
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
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    sections.forEach(section => {
        observer.observe(section);
    });

    // --- Efeito Onda no Hover (Apenas para 'Quem Somos' agora) ---
    const quemSomosImage = document.querySelector('#quemsomos .img-fluid');
    if (quemSomosImage) {
        new HoverEffect({
            parent: quemSomosImage.parentElement,
            intensity: 0.3,
            image1: quemSomosImage.src,
            image2: quemSomosImage.src,
            displacementImage: 'https://i.imgur.com/CLIENT_ID/wave-texture.png',
            imagesRatio: 1,
        });
    }

    // --- Funcionalidade do Botão de Destaque Churrasco ---
    const btnVerChurrasco = document.getElementById('btn-ver-churrasco');
    if (btnVerChurrasco) {
        btnVerChurrasco.addEventListener('click', function(e) {
            e.preventDefault();

            // Rola para a seção de produtos
            const produtosSection = document.getElementById('produtos');
            produtosSection.scrollIntoView({ behavior: 'smooth' });

            // Ativa a aba de churrasco
            const churrascoTab = document.getElementById('churrasco-tab');
            if (churrascoTab) {
                const tab = new bootstrap.Tab(churrascoTab);
                tab.show();
            }
        });
    }
});

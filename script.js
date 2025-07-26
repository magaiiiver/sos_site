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

    // --- Filtro da Galeria ---
    const filterButtons = document.querySelectorAll('#gallery-filters .btn-filter');
    const galleryItems = document.querySelectorAll('.gallery-grid .gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            galleryItems.forEach(item => {
                item.classList.remove('hide');
                if (filter !== '*' && !item.classList.contains(filter.substring(1))) {
                    item.classList.add('hide');
                }
            });
        });
    });

    // --- Efeito Onda no Hover ---
    const imageElements = document.querySelectorAll('.gallery-item, #quemsomos .img-fluid');
    imageElements.forEach((element) => {
        // Para a galeria, o elemento pai é o container do efeito.
        // Para a imagem de "Quem Somos", criaremos um wrapper dinamicamente se necessário.
        let container = element.classList.contains('gallery-item') ? element : element.parentElement;

        new HoverEffect({
            parent: container,
            intensity: 0.3,
            image1: element.querySelector('img') ? element.querySelector('img').src : element.src,
            image2: element.querySelector('img') ? element.querySelector('img').src : element.src, // Mesma imagem para não trocar
            displacementImage: 'https://i.imgur.com/CLIENT_ID/wave-texture.png',
            imagesRatio: 1, // Ajuste conforme a proporção das suas imagens
        });
    });
});

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

    // Validação: O código do IntersectionObserver não está presente.
    // A inicialização do AOS está no final do arquivo.

    // --- Efeito Onda no Hover (Apenas para 'Quem Somos' agora) ---
    const quemSomosImage = document.querySelector('#quemsomos .img-fluid');
    if (quemSomosImage) {
        new HoverEffect({
            parent: quemSomosImage.parentElement,
            intensity: 0.3,
            image1: quemSomosImage.src,
            image2: quemSomosImage.src,
            displacementImage: 'https://i.imgur.com/py9cwkr.jpg', // Usando uma imagem de deslocamento válida
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

    // --- Inicialização do AOS ---
    AOS.init();
});

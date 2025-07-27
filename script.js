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

    // --- Inicialização do AOS ---
    AOS.init();

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

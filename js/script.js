
document.addEventListener('DOMContentLoaded', () => {
    const toggleMenu = document.querySelector('.toggle-menu');
    const heroMenu = document.querySelector('.hero-menu');
    const heroContent = document.querySelector('.hero-content');
    const body = document.body;

    toggleMenu.addEventListener('click', () => {
        heroMenu.classList.toggle('active');
        heroContent.classList.toggle('shifted');
        body.classList.toggle('sidebar-open');
    });
});

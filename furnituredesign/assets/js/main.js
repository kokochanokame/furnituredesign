document.querySelector('.nav-btn').addEventListener('click', () => {
    document.querySelector('.nav-btn').classList.toggle('open');
    document.querySelector('.overlay').classList.toggle('open');
    document.querySelector('.global-menu').classList.toggle('open');
});
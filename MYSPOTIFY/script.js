const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const playBtn = card.querySelector('.playbtn');

    card.addEventListener('mouseenter', () => {
        playBtn.classList.add('visible');
    });

    card.addEventListener('mouseleave', () => {
        playBtn.classList.remove('visible');
    });
});
// 
//  for first line cards of songs
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const playBtn = card.querySelector('.playbtn');

    card.addEventListener('mouseenter', () => {
        playBtn.classList.add("visible");
    });

    card.addEventListener('mouseleave', () => {
        playBtn.classList.remove('visible');
    });
});
// for creator cards
const creatorcards = document.querySelectorAll('.creatorcard');

creatorcards.forEach(ecard => {
    const playBtn = ecard.querySelector('.playbtn');

    ecard.addEventListener('mouseenter', () => {
        playBtn.classList.add("visible");
    });

    ecard.addEventListener('mouseleave', () => {
        playBtn.classList.remove('visible');
    });
});
// for radios cards
const radiocards = document.querySelectorAll('.radiocard');

radiocards.forEach(rcard => {
    const playBtn = rcard.querySelector('.playbtn');

    rcard.addEventListener('mouseenter', () => {
        playBtn.classList.add("visible");
    });

    rcard.addEventListener('mouseleave', () => {
        playBtn.classList.remove('visible');
    });
});
// see more click event
const seeMoreBtn = document.querySelector('.seemore');
const cardsContainer = document.querySelector('.cardcontainer');

seeMoreBtn.addEventListener('click', () => {
    if (cardsContainer.classList.contains('cardcontainer')) {
        cardsContainer.classList.replace('cardcontainer', 'grid');
        seeMoreBtn.textContent = 'See Less';
    } else {
        cardsContainer.classList.replace('grid', 'cardcontainer');
        seeMoreBtn.textContent = 'Show all';
    }
    // seemore();
});
// seemore click of creator side
const seeMore = document.querySelector('.seemoretwo');
const cardContainer = document.querySelector('.creatorscontainer');

seeMore.addEventListener('click', () => {
    if (cardContainer.classList.contains('creatorscontainer')) {
        cardContainer.classList.replace('creatorscontainer', 'gridcreator');
        seeMore.textContent = 'See Less';
    } else {
        cardContainer.classList.replace('gridcreator', 'creatorscontainer');
        seeMore.textContent = 'Show all';
    }
    // seemore();
});
// seemore click of radio side
const showall = document.querySelector('.seemorethree');
const radioContainer = document.querySelector('.radiocontainer');

showall.addEventListener('click', () => {
    if (radioContainer.classList.contains('radiocontainer')) {
        radioContainer.classList.replace('radiocontainer', 'gridcreator');
        showall.textContent = 'See Less';
    } else {
        radioContainer.classList.replace('gridcreator', 'radiocontainer');
        showall.textContent = 'Show all';
    }
    seemore();
});



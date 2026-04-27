const songs = [
  {
    img: "./assets/spotifyimagecard.jpeg",
    playbtn: "./assets/play.svg",
    title: "Jhol",
    artist: "Maanu, Annural Khalid"
  },
  {
    img: "./assets/spotifycard2.jpeg",
    playbtn: "./assets/play.svg",
    title: "Softly",
    artist: "Karan Aujla, Ikky"
  },
  {
    img: "./assets/spotifycard3.jpeg",
    playbtn: "./assets/play.svg",
    title: "4 Saal",
    artist: "Bayaan"
  },
  {
    img: "./assets/spotifycard5.jpeg",
    playbtn: "./assets/play.svg",
    title: "My Terrible Mind",
    artist: "Talha Anjum, Umair"
  },
  {
    img: "./assets/spotifycard4.jpeg",
    playbtn: "./assets/play.svg",
    title: "Glory",
    artist: "Yo Yo Honey Singh"
  },
  {
    img: "./assets/spotifycard6.jpeg",
    playbtn: "./assets/play.svg",
    title: "Shikwa (Side A)",
    artist: "Talhah Yunus"
  },
  {
    img: "./assets/spotifycard7.jpeg",
    playbtn: "./assets/play.svg",
    title: "Lemonade",
    artist: "Diljit Dosanjh"
  },
  {
    img: "./assets/spotifycard8.jpeg",
    playbtn: "./assets/play.svg",
    title: "Snapchat Story",
    artist: "Bilal Saeed, Romee khan"
  },
  {
    img: "./assets/spotifycard9.jpeg",
    playbtn: "./assets/play.svg",
    title: "Habibi",
    artist: "Asim Azhar"
  }
];


const creators = [
  {
    img: "./assets/creator1.jpeg",
    playbtn: "./assets/play.svg",
    name: "Afusic",
    role: "Artist"
  },
  {
    img: "./assets/creator13.jpg",
    playbtn: "./assets/play.svg",
    name: "Talhah Yunus",
    role: "Artist"
  },
  {
    img: "./assets/creator2.jpeg",
    playbtn: "./assets/play.svg",
    name: "Atif Aslam",
    role: "Artist"
  },
  {
    img: "./assets/creator6.jpeg",
    playbtn: "./assets/play.svg",
    name: "Karan Aujla",
    role: "Artist"
  },
  {
    img: "./assets/creator11.jpeg",
    playbtn: "./assets/play.svg",
    name: "Talha Anjum",
    role: "Artist"
  },
  {
    img: "./assets/creator4.jpeg",
    playbtn: "./assets/play.svg",
    name: "Shubh",
    role: "Artist"
  },
  {
    img: "./assets/creator5.jpeg",
    playbtn: "./assets/play.svg",
    name: "Maanu",
    role: "Artist"
  },
  {
    img: "./assets/creator7.jpeg",
    playbtn: "./assets/play.svg",
    name: "AP Dhillon",
    role: "Artist"
  },
  {
    img: "./assets/creator8.jpeg",
    playbtn: "./assets/play.svg",
    name: "Bayaan",
    role: "Artist"
  },
  {
    img: "./assets/creator9.jpeg",
    playbtn: "./assets/play.svg",
    name: "Diljit Dosanjh",
    role: "Artist"
  },
  {
    img: "./assets/creator10.jpeg",
    playbtn: "./assets/play.svg",
    name: "Yo Yo Honey Singh",
    role: "Artist"
  },
  {
    img: "./assets/creator12.jpeg",
    playbtn: "./assets/play.svg",
    name: "Nusrat Fateh Ali Khan",
    role: "Artist"
  }
];


const radios = [
  {
    img: "./assets/radio0.jpeg",
    playbtn: "./assets/play.svg",
    desc: "With Sachet-Jigar, Anuv Jain and Atif Aslam"
  },
  {
    img: "./assets/radio5.jpeg",
    playbtn: "./assets/play.svg",
    desc: "With Talhah Yunus, Young Stunners and Talha Anjum"
  },
  {
    img: "./assets/radio2.jpeg",
    playbtn: "./assets/play.svg",
    desc: "With Shubh, Sidhu Moose Wala and AP Dhillon"
  },
  {
    img: "./assets/radio7.jpeg",
    playbtn: "./assets/play.svg",
    desc: "With Karan Aujla, Diljit Dosanjh and Shubh"
  },
  {
    img: "./assets/radio4.jpeg",
    playbtn: "./assets/play.svg",
    desc: "With Karan Aujla, Shubh and AP Dhillon"
  },
  {
    img: "./assets/radio3.jpeg",
    playbtn: "./assets/play.svg",
    desc: "With Talwinder, Afusic and Hasan"
  },
  {
    img: "./assets/radio6.jpeg",
    playbtn: "./assets/play.svg",
    desc: "With Karan Aujla, Shubh and AP Dhillon"
  },
  {
    img: "./assets/radio8.jpeg",
    playbtn: "./assets/play.svg",
    desc: "With Karan Aujla, AP Dhillon and Shubh"
  },
  {
    img: "./assets/radio9.jpeg",
    playbtn: "./assets/play.svg",
    desc: "With Hasan Raheem, Talwinder and Afusic"
  },
  {
    img: "./assets/radio10.jpeg",
    playbtn: "./assets/play.svg",
    desc: "With Asim Azhar, Hasan and Aima Baig"
  }
];



const cardContainer = document.querySelector('.cardcontainer');


songs.forEach(song => {
  // create main card div
  const card = document.createElement('div');
  card.classList.add('card');

  // image
  const img = document.createElement('img');
  img.classList.add('pic');
  img.src = song.img;
  img.alt = "playlist pic";

  // play button
  const playBtn = document.createElement('img');
  playBtn.classList.add('playbtn');
  playBtn.src = song.playbtn;
  playBtn.alt = "play button";

  // title
  const h3 = document.createElement('h3');
  h3.textContent = song.title;

  // artist
  const p = document.createElement('p');
  p.textContent = song.artist;

  // append inside card
  card.appendChild(img);
  card.appendChild(playBtn);
  card.appendChild(h3);
  card.appendChild(p);

  // append card to container
  cardContainer.appendChild(card);
});








const creatorContainer = document.querySelector('.creatorcontainer'); // wrap all creatorcards inside this div

creators.forEach(creator => {
  const card = document.createElement('div');
  card.classList.add('creatorcard');

  const img = document.createElement('img');
  img.classList.add('piccreator');
  img.src = creator.img;
  img.alt = "playlist pic";

  const playBtn = document.createElement('img');
  playBtn.classList.add('playbtn');
  playBtn.src = creator.playbtn;
  playBtn.alt = "play button";

  const h3 = document.createElement('h3');
  h3.textContent = creator.name;

  const p = document.createElement('p');
  p.textContent = creator.role;

  card.appendChild(img);
  card.appendChild(playBtn);
  card.appendChild(h3);
  card.appendChild(p);

  creatorContainer.appendChild(card);
});





const radioContainer = document.querySelector('.radiocontainer');

radios.forEach(radio => {
  const card = document.createElement('div');
  card.classList.add('radiocard');

  const img = document.createElement('img');
  img.classList.add('picradio');
  img.src = radio.img;
  img.alt = "playlist pic";

  const playBtn = document.createElement('img');
  playBtn.classList.add('playbtn');
  playBtn.src = radio.playbtn;
  playBtn.alt = "play button";

  const p = document.createElement('p');
  p.textContent = radio.desc;

  card.appendChild(img);
  card.appendChild(playBtn);
  card.appendChild(p);

  radioContainer.appendChild(card);
});

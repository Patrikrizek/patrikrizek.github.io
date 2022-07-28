const projects = [
    {
        name: "Fly Personal Trainer",
        img: "/media/web-flypersonaltrainer-01.JPG",
        imgAlt: "Website Fly Personal Trainer",
        badge: "#website",
        label: "website",
        description: "The best choice for your personal training. I enjoy training others at any level and endeavour to push them to their full potential with support and guidance.",
        technology: "JavaScript, CSS, HTML, PHP, MySQL",
        link: "https://www.flypersonaltrainer.com/"
    },
    {
        name: "Music Slot Online",
        img: "/media/web-music-slot-online-01.JPG",
        imgAlt: "Website Music Slot Online",
        badge: "#website",
        label: "website",
        description: "Music Slot Online is an online music school that allows you to learn to play the piano from the comfort of your home - from your laptop, iPad or phone. We have created Music Slot Online to make music lessons accessible to anyone in the world, anywhere. It doesn't matter where you live, you can have lessons with the top teachers in the world!",
        technology: "JavaScript, CSS, HTML",
        link: "http://www.musicslotonline.com/"
    },
    {
        name: "Painter Blanka Sklibova",
        img: "/media/web-blankasklibova-painter-01.JPG",
        imgAlt: "Website Painter Blanka Sklibova",
        badge: "#website",
        label: "website",
        description: "Do you wish to give a gift that will bring joy, will last throughout generations and the value of the painting will rise with time? Let me paint a portrait of you or still live according to your wishes. Whether you want a portrait or still life, or another theme you choose, do not hesitate to contact me or to arrange an appointment in my studio.",
        technology: "JavaScript, CSS, HTML, PHP, MySQL",
        link: "https://blankasklibova.cz/en/painter-blanka-sklibova/"
    },
    {
        name: "all in equilibrium theater Vienna",
        img: "/media/web-all-in-equilibrium-01.JPG",
        imgAlt: "Website all in equilibrium theater Vienna",
        badge: "#website",
        label: "website",
        description: "We play theatre, not necessarily literature in costume, but original and up-to-date. You have to keep in balance, you have to be in motion, and that does not only apply to physics. We play theatre and achieve the balancing act between craftsmanship and imagination.",
        technology: "JavaScript, CSS, HTML, PHP, MySQL",
        link: "https://www.allinequilibrium-theater.com/en/all-in-equilibrium-2/"
    },
    {
        name: "Duo Adverso",
        img: "/media/web-duoadverso-01.JPG",
        imgAlt: "Online Shop Duo Adverso",
        badge: "#online-shop",
        label: "online-shop",
        description: "Wants to make something original and authentic that makes you feel special and valued and helps you to express yourself without any fear or shame, this is why their artworks are handmade, which means that every piece they design is unique, just like you.",
        technology: "JavaScript, CSS, HTML, PHP, MySQL",
        link: "https://www.duoadverso.com/"
    },
    {
        name: "NulBar",
        img: "/media/app-nulbar-01.jpg",
        imgAlt: "Mobile App NulBar",
        badge: "#mobile-app",
        label: "mobile-app",
        description: "Changing the way how we (drink) think. A bar concept challenging the view that good beers need alcohol, providing good quality, tasty, non-alcoholic beers ti a bar near you!",
        technology: "Java, XML",
        link: "https://play.google.com/store/apps/details?id=com.patrikrizek.nulbar&gl=US"
    },
    {
        name: "Mountainbike United&trade;",
        img: "/media/app-singletracker-01.jpg",
        imgAlt: "Mobile App SingleTracker",
        badge: "#mobile-app",
        label: "mobile-app",
        description: "Join Mountainbike United&trade; the new Singletracker&trade; and the only 100% mountainbike community that return 20% of your monthly membership to the trails we love. We say that giving back to the trails = way better trails in a much better community spirit. Support the trail builders with knowledge and tools.",
        technology: "Java, XML",
        link: "https://play.google.com/store/apps/details?id=com.motinno.singletracker&gl=US"
    },
    {
        name: "Maiona e-learning platform",
        img: "/media/web-maiona-web-01.JPG",
        imgAlt: "Maiona e-learning platform",
        badge: "#github",
        label: "github",
        description: "E-learning platform for Maiona Coding Ltd based in London.",
        technology: "JavaScript, CSS, HTML",
        link: "https://github.com/Patrikrizek/maionacoding"
    },
    {
        name: "Magic 8 ball",
        img: "/media/codepen-magic-8-ball.JPG",
        imgAlt: "Codepen Challenge Magic 8 ball",
        badge: "#CodePenChallenge",
        label: "codepen",
        description: "I was inspired by #CodePenChallenge: Dominoes & Dice. I started to think about where are dices used and if are just in games? Then I quickly realised there is this iconic Magic 8 ball containing 20-sided dice for telling the future. Check the result. I hope you will like it.",
        technology: "JavaScript, CSS, HTML",
        link: "https://codepen.io/patrikrizek/pen/KKoNmjv"
    },
    {
        name: "Flipping play cards",
        img: "/media/codepen-flipping-play-cards.jpg",
        imgAlt: "Codepen Challenge Flipping play cards",
        badge: "#CodePenChallenge",
        label: "codepen",
        description: "This is another Codepen Challenge. The topic for this week was 'Playing Cards'. I have decided to create this simple design of flipping play cards. External SVG is used for card symbols.",
        technology: "CSS, HTML",
        link: "https://codepen.io/patrikrizek/pen/dymRKvp"
    },
    {
        name: "Marbles Art",
        img: "/media/codepen-marbles-art.jpg",
        imgAlt: "Codepen Challenge Marbles",
        badge: "#CodePenChallenge",
        label: "codepen",
        description: "Another of the Codepen challenges. I wanted to create something artier this time. My creation was inspired by @marcosmasd.",
        technology: "CSS, HTML",
        link: "https://codepen.io/patrikrizek/pen/zYWPKjE"
    },
    {   
        name: "Portfolio",
        img: "/media/web-portfolio.JPG",
        imgAlt: "Website Patrik Krizek Portfolio",
        badge: "#website",
        label: "website",
        description: "Personal Portfolio with selected projects and challenges.",
        technology: "JS, CSS, HTML",
        link: "https://patrikrizek.github.io/"
    }
];

document.getElementById('project-list').innerHTML = `${projects.map(projectTemplate).join('')}`;

function projectTemplate(project) {
    return `
    <div class="col mb-4 d-flex align-items-stretch" data-label="${project.label}">
        <div class="card crd" style="width: 18rem;">
            <picture>
                <img src="${project.img}" class="card-img-top" alt="${project.imgAlt}">
            </picture>
            <div class="card-body">
                <h5 class="card-title">${project.name}</h5>
                <span class="badge web-clr mb-2">${project.badge}</span>
                <p class="card-text">${project.description}</p>
                <p class="text-secondary font-weight-lighter"><i>${project.technology}</i></p>
                <a href="${project.link}" target="_blank" class="card-link">Find more</a>
            </div>
        </div>
    </div>
    `;
}
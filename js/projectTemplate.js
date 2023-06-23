const projects = [
    {
        name: "Game Hub",
        img: "/media/react-app-game-hub.JPG",
        imgAlt: "React App Game Hub",
        badge: "#react-app",
        label: "react-app",
        description: "Game hub using API. You can filter tha games by genre and platforms, search for a specific game. Also switch between dark and light mode.",
        technology: "React 18, TS, Chakra, API",
        link: "https://gleaming-pika-c21c9b.netlify.app/"
    },
    {
        name: "Expense Tracker",
        img: "/media/react-app-expense-tracker.JPG",
        imgAlt: "React App Expense Tracker",
        badge: "#react-app",
        label: "react-app",
        description: "This is a mini project of a simple expense tracker. You can add or delete your expenses, filter them and see the total amount you spent.",
        technology: "React 18, TS, Bootstrap, zod, react-hook-form",
        link: "https://lustrous-cucurucho-9cdac0.netlify.app/"
    },
    {
        name: "Taste of Monarchy",
        img: "/media/web-taste-of-monarchy.JPG",
        imgAlt: "Website Taste of Monarchy",
        badge: "#online-shop",
        label: "online-shop",
        description: "Baking & Delivery Service. Our journey started 2019 in London but we are holding recipes and techniques proven by generations. We love baking and we want to bring our products closer to customers. We operate in South London, namely Surrey Quays, Bermondsey, Canada Water, Rotherhithe and Brockley.",
        technology: "JS, CSS, HTML, Bootstrap, Reflow",
        link: "https://tasteofmonarchy.com/"
    },
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
        link: "https://sites.google.com/musicslotonline.com/music-slot-online/"
    },
    // {
    //     name: "Painter Blanka Sklibova",
    //     img: "/media/web-blankasklibova-painter-01.JPG",
    //     imgAlt: "Website Painter Blanka Sklibova",
    //     badge: "#website",
    //     label: "website",
    //     description: "Do you wish to give a gift that will bring joy, will last throughout generations and the value of the painting will rise with time? Let me paint a portrait of you or still live according to your wishes. Whether you want a portrait or still life, or another theme you choose, do not hesitate to contact me or to arrange an appointment in my studio.",
    //     technology: "JavaScript, CSS, HTML, PHP, MySQL",
    //     link: "https://blankasklibova.cz/en/painter-blanka-sklibova/"
    // },
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
        name: "Portfolio",
        img: "/media/web-portfolio.JPG",
        imgAlt: "Website Patrik Krizek Portfolio",
        badge: "#website",
        label: "website",
        description: "Personal Portfolio with selected projects and challenges.",
        technology: "JS, CSS, HTML, Bootstrap",
        link: "https://patrikrizek.github.io/"
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
        name: "Simple text editor",
        img: "/media/github-simple-text-editor.JPG",
        imgAlt: "GitHub Simple text editor",
        badge: "#github",
        label: "github",
        description: "I created a simple text editor, that can handle basic text styling and editing.",
        technology: "JavaScript, CSS, HTML",
        link: "https://jade-donut-b44175.netlify.app/"
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
        img: "/media/codepen-marbles-art.JPG",
        imgAlt: "Codepen Challenge Marbles",
        badge: "#CodePenChallenge",
        label: "codepen",
        description: "Another of the Codepen challenges. I wanted to create something artier this time. My creation was inspired by @marcosmasd.",
        technology: "CSS, HTML",
        link: "https://codepen.io/patrikrizek/pen/zYWPKjE"
    },
    {
        name: "Looong Teeeext Challenge",
        img: "/media/codepen-long-text.JPG",
        imgAlt: "Codepen Looong Teeeext Challenge",
        badge: "#CodePenChallenge",
        label: "codepen",
        description: "This is the 1st of August 2022 tricky coding puzzles that you might encounter in a job interview or on a JavaScript proficiency test. In the begging, I was thinking to use an array, split and for of loop to achieve the result. But then I realised this can be done with a way smoother approach. Text, replace and arrow function with repeat. I add some form validation too.",
        technology: "JavaScript, CSS, HTML",
        link: "https://codepen.io/patrikrizek/pen/abYqENv"
    },
    {
        name: "All Unique Characters Challenge",
        img: "/media/codepen-all-unique-characters.JPG",
        imgAlt: "Codepen All Unique Characters Challenge",
        badge: "#CodePenChallenge",
        label: "codepen",
        description: "In this challenge, we were asked 'Write a function that determines if all the characters in a given string are unique.' This can be done with multiple approaches. For example, looping each element through an array. I have chosen to use the Set() function and measure the length with the original String.",
        technology: "JavaScript, CSS, HTML",
        link: "https://codepen.io/patrikrizek/pen/gOedrEe"
    },
    {
        name: "Equal with Deletions Challenge",
        img: "/media/codepen-equal-with-deletions.JPG",
        imgAlt: "Codepen Equal with Deletions Challenge",
        badge: "#CodePenChallenge",
        label: "codepen",
        description: "In this challenge, we delete characters in both directions by using # % symbols and compare them afterwards. This can be achievable in many ways. By using an  Array and loop, another approach is editing String by charAt() and replace() combining with loop, or you can loop regex through all characters in the String.",
        technology: "JavaScript, CSS, HTML",
        link: "https://codepen.io/patrikrizek/pen/mdxaaqj"
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
/*==================================================
ONE TINY HEARTBEAT
APP.JS
PART 1
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    App.init();

});

const App = {

    /*==================================================
    SETTINGS
    ==================================================*/

    revealDate: new Date("2026-08-01T10:00:00+02:00"),

    storyIndex: 0,

    storyTimer: null,

    selectedTeam: null,

    story: [

        {
            title: "One Tiny Heartbeat",
            text: "Every beautiful story begins with a single heartbeat."
        },

        {
            title: "A Dream",
            text: "Long before we knew your name, we imagined tiny footsteps, sleepy cuddles, and a love that would change our world forever."
        },

        {
            title: "Hope",
            text: "Day by day that dream quietly became our reality, and with every heartbeat our little miracle grew stronger."
        },

        {
            title: "Love",
            text: "Whether you're near or far, your love has already become part of our baby's story."
        },

        {
            title: "One Beautiful Secret",
            text: "There is just one beautiful little secret left to share..."
        }

    ],

    /*==================================================
    START
    ==================================================*/

    init(){

        this.cache();

        this.bind();

        this.createSparkles();

        this.createBirds();

        this.showOpening();

    },

    /*==================================================
    CACHE
    ==================================================*/

    cache(){

        this.title = document.getElementById("title");
        this.subtitle = document.getElementById("subtitle");
        this.beginBtn = document.getElementById("beginBtn");

        this.storySection = document.getElementById("story");
        this.storyTitle = document.getElementById("storyTitle");
        this.storyText = document.getElementById("storyText");

        this.teamSection = document.getElementById("team");

        this.sparkles = document.getElementById("sparkles");

    },

    /*==================================================
    EVENTS
    ==================================================*/

    bind(){

        this.beginBtn.addEventListener("click", () => {

            this.startStory();

        });

    },

    /*==================================================
    OPENING
    ==================================================*/

    showOpening(){

        const opening = [

            "No matter where you are in the world...",

            "Today, you're part of our little one's story.",

            "One Tiny Heartbeat"

        ];

        this.typeSequence(opening);

    },

    /*==================================================
    TYPEWRITER
    ==================================================*/

    typeSequence(lines){

        let step = 0;

        const next = () => {

            if(step === 0){

                this.title.textContent = "";

                this.subtitle.textContent = "";

            }

            if(step === 0){

                this.title.textContent = lines[0];

                this.title.classList.add("show");

            }

            if(step === 1){

                this.subtitle.textContent = lines[1];

                this.subtitle.classList.add("show");

            }

            if(step === 2){

                this.title.textContent = lines[2];

                this.subtitle.textContent =
                "Every beautiful story begins with a single heartbeat.";

                this.beginBtn.classList.add("showButton");

                return;

            }

            step++;

            setTimeout(next,2500);

        };

        next();

    },

    /*==================================================
    SPARKLES
    ==================================================*/

    createSparkles(){

        for(let i=0;i<40;i++){

            const s=document.createElement("div");

            s.className="sparkle";

            s.style.left=Math.random()*100+"%";

            s.style.top=Math.random()*100+"%";

            s.style.animationDuration=
            (2+Math.random()*5)+"s";

            s.style.animationDelay=
            Math.random()*5+"s";

            this.sparkles.appendChild(s);

        }

    },

    /*==================================================
    BIRDS
    ==================================================*/

    createBirds(){

        for(let i=0;i<5;i++){

            const b=document.createElement("div");

            b.className="bird";

            b.innerHTML="🕊";

            b.style.top=(10+i*8)+"%";

            b.style.animationDuration=
            (30+i*10)+"s";

            b.style.animationDelay=
            (i*5)+"s";

            document.body.appendChild(b);

        }

    }

};
/*==================================================
STORY
==================================================*/

startStory(){

    this.beginBtn.style.display = "none";

    document.getElementById("hero").classList.add("fadeOut");

    setTimeout(()=>{

        document.getElementById("hero").style.display="none";

        this.storySection.classList.remove("hidden");

        this.storySection.classList.add("fadeIn");

        this.showStorySlide(0);

    },800);

},

showStorySlide(index){

    if(index >= this.story.length){

        clearTimeout(this.storyTimer);

        this.showTeamSelection();

        return;

    }

    this.storyIndex = index;

    this.storyTitle.classList.remove("slideUp");
    this.storyText.classList.remove("slideUp");

    void this.storyTitle.offsetWidth;

    this.storyTitle.textContent =
        this.story[index].title;

    this.storyText.textContent =
        this.story[index].text;

    this.storyTitle.classList.add("slideUp");
    this.storyText.classList.add("slideUp");

    this.storyTimer = setTimeout(()=>{

        this.showStorySlide(index + 1);

    },6500);

},

/*==================================================
TEAM SELECTION
==================================================*/

showTeamSelection(){

    this.storySection.classList.add("hidden");

    this.teamSection.classList.remove("hidden");

    this.teamSection.classList.add("fadeIn");

    const boyBtn = document.getElementById("boyBtn");
    const girlBtn = document.getElementById("girlBtn");

    boyBtn.onclick = ()=>{

        this.selectedTeam = "boy";

        this.showGiftSection();

    };

    girlBtn.onclick = ()=>{

        this.selectedTeam = "girl";

        this.showGiftSection();

    };

},

/*==================================================
GIFTS
==================================================*/

showGiftSection(){

    this.teamSection.classList.add("hidden");

    const giftSection =
        document.getElementById("giftSection");

    const title =
        document.getElementById("giftTitle");

    const message =
        document.getElementById("giftMessage");

    const list =
        document.getElementById("giftList");

    list.innerHTML="";

    if(this.selectedTeam==="boy"){

        title.textContent="💙 Team Boy";

        message.textContent=
        "Thank you for joining Team Boy! If you'd like to spoil our little one, here are a few ideas.";

        [

            "Blue newborn grows",
            "Baby blankets",
            "Baby socks",
            "Nappies",
            "Baby wipes"

        ].forEach(item=>{

            const li=document.createElement("li");

            li.textContent=item;

            list.appendChild(li);

        });

    }else{

        title.textContent="💛 Team Girl";

        message.textContent=
        "Thank you for joining Team Girl! If you'd like to spoil our little one, here are a few ideas.";

        [

            "Pink newborn grows",
            "Baby blankets",
            "Hair accessories",
            "Nappies",
            "Baby wipes"

        ].forEach(item=>{

            const li=document.createElement("li");

            li.textContent=item;

            list.appendChild(li);

        });

    }

    giftSection.classList.remove("hidden");

    giftSection.classList.add("fadeIn");

    setTimeout(()=>{

        this.showWishSection();

    },8000);

},

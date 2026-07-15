/*==================================================
 ONE TINY HEARTBEAT
 APP.JS
 Cinematic Experience
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    App.init();

});

const App = {

    /*==================================================
    SETTINGS
    ==================================================*/

    countdownDate: new Date("2026-08-15T15:00:00+02:00"),

    prediction:null,

    storyIndex:0,

    storyTimer:null,

    /*==================================================
    STORY
    ==================================================*/

    story:[

        {
            title:"One Tiny Heartbeat",
            text:"Every beautiful story begins with a single heartbeat."
        },

        {
            title:"A Dream",
            text:"Long before we knew your name, we imagined tiny footsteps, sleepy cuddles, and a love that would change our world forever."
        },

        {
            title:"Hope",
            text:"Day by day that dream quietly became our reality, and with every heartbeat our little miracle grew stronger."
        },

        {
            title:"Love",
            text:"Today we celebrate this unforgettable chapter surrounded by our loved ones, whose kindness and support have already become part of our baby's story."
        },

        {
            title:"One Tiny Heartbeat",
            text:"Now...there is just one beautiful little secret left to share."
        }

    ],

    /*==================================================
    START
    ==================================================*/

    init(){

    this.cache();

    this.bind();

    this.showOpening();

},

    /*==================================================
    CACHE
    ==================================================*/

    cache(){

    this.title=document.getElementById("main-title");

    this.subtitle=document.getElementById("subtitle");

    this.begin=document.getElementById("begin-button");

},

bind(){

    this.begin.addEventListener("click",()=>{

        this.startStory();

    });

},

    /*==================================================
    OPENING
    ==================================================*/

    showOpening(){

        this.typeTitle();

    },

    /*==================================================
    TITLE TYPEWRITER
    ==================================================*/

    typeTitle(){

        const text="One Tiny Heartbeat";

        let i=0;

        this.title.textContent="";

        this.title.classList.add("title-visible");

        const typing=setInterval(()=>{

            this.title.textContent+=text.charAt(i);

            i++;

            if(i>=text.length){

                clearInterval(typing);

                this.showSubtitle();

            }

        },120);

    },

    /*==================================================
    SUBTITLE
    ==================================================*/

    showSubtitle(){

    this.subtitle.textContent =
    "Every beautiful story begins with a single heartbeat.";

    this.subtitle.classList.add("subtitle-visible");

    setTimeout(()=>{

        this.begin.classList.add("button-visible");

    },800);

},

/*==================================================
BEGIN STORY
==================================================*/

startStory(){

    this.begin.disabled = true;

    this.begin.style.pointerEvents = "none";

    this.begin.animate([
        {opacity:1, transform:"translateY(0)"},
        {opacity:0, transform:"translateY(20px)"}
    ],{
        duration:800,
        fill:"forwards",
        easing:"ease"
    });

    setTimeout(()=>{

        this.showStorySlide(0);

    },900);

},

/*==================================================
STORY SLIDES
==================================================*/

showStorySlide(index){

    if(index >= this.story.length){

        alert("Next scene coming in Part 3 😊");

        return;

    }

    this.storyIndex = index;

    this.title.animate([
        {opacity:1},
        {opacity:0}
    ],{
        duration:600,
        fill:"forwards"
    });

    this.subtitle.animate([
        {opacity:1},
        {opacity:0}
    ],{
        duration:600,
        fill:"forwards"
    });

    setTimeout(()=>{

        this.title.textContent = this.story[index].title;

        this.subtitle.textContent = this.story[index].text;

        this.title.animate([
            {opacity:0, transform:"translateY(20px)"},
            {opacity:1, transform:"translateY(0)"}
        ],{
            duration:1200,
            fill:"forwards"
        });

        this.subtitle.animate([
            {opacity:0, transform:"translateY(20px)"},
            {opacity:1, transform:"translateY(0)"}
        ],{
            duration:1200,
            fill:"forwards"
        });

    },650);

    this.storyTimer = setTimeout(()=>{

        this.showStorySlide(index + 1);

    },6500);

}

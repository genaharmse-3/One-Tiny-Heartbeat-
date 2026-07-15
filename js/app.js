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

        this.subtitle.textContent=
        "Every beautiful story begins with a single heartbeat.";

        this.subtitle.classList.add("subtitle-visible");

        setTimeout(()=>{

            this.begin.classList.add("button-visible");

        },800);

    }

};

/*==================================================
 ONE TINY HEARTBEAT
 APP.JS
 Version 1
==================================================*/

document.addEventListener("DOMContentLoaded", () => {
    App.init();
});

const App = {

    title: null,
    subtitle: null,
    begin: null,

    storyIndex: 0,
    storyTimer: null,

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
            text: "Day by day that dream quietly became our reality. Every heartbeat reminded us that our greatest adventure was already beginning."
        },

        {
            title: "Love",
            text: "Now we celebrate this beautiful chapter surrounded by our loved ones, whose kindness has already become part of our baby's story."
        },

        {
            title: "One Tiny Heartbeat",
            text: "And now... there is just one beautiful little secret left to share."
        }

    ],

    init(){

        this.cache();
        this.bind();
        this.showOpening();

    },

    cache(){

        this.title = document.getElementById("main-title");
        this.subtitle = document.getElementById("subtitle");
        this.begin = document.getElementById("begin-button");

    },

    bind(){

        this.begin.addEventListener("click", () => {

            this.startStory();

        });

    },

    showOpening(){

        this.typeTitle();

    },

    typeTitle(){

        const text = "One Tiny Heartbeat";

        let i = 0;

        this.title.textContent = "";

        this.title.classList.add("title-visible");

        const typing = setInterval(()=>{

            this.title.textContent += text.charAt(i);

            i++;

            if(i >= text.length){

                clearInterval(typing);

                this.showSubtitle();

            }

        },120);

    },

    showSubtitle(){

        this.subtitle.textContent =
        "Every beautiful story begins with a single heartbeat.";

        this.subtitle.classList.add("subtitle-visible");

        setTimeout(()=>{

            this.begin.classList.add("button-visible");

        },800);

    },

    startStory(){

        this.begin.disabled = true;

        this.begin.style.pointerEvents = "none";

        this.begin.animate([

            {
                opacity:1,
                transform:"translateY(0)"
            },

            {
                opacity:0,
                transform:"translateY(20px)"
            }

        ],{

            duration:800,
            fill:"forwards",
            easing:"ease"

        });

        setTimeout(()=>{

            this.showStorySlide(1);

        },900);

    },

    showStorySlide(index){

        if(index >= this.story.length){

            this.endVersionOne();

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

            this.title.textContent =
            this.story[index].title;

            this.subtitle.textContent =
            this.story[index].text;

            this.title.animate([

                {
                    opacity:0,
                    transform:"translateY(20px)"
                },

                {
                    opacity:1,
                    transform:"translateY(0)"
                }

            ],{

                duration:1200,
                fill:"forwards"

            });

            this.subtitle.animate([

                {
                    opacity:0,
                    transform:"translateY(20px)"
                },

                {
                    opacity:1,
                    transform:"translateY(0)"
                }

            ],{

                duration:1200,
                fill:"forwards"

            });

        },650);

        this.storyTimer = setTimeout(()=>{

            this.showStorySlide(index + 1);

        },6500);

    },

    endVersionOne(){

    this.title.animate([
        {opacity:1},
        {opacity:0}
    ],{
        duration:1200,
        fill:"forwards"
    });

    this.subtitle.animate([
        {opacity:1},
        {opacity:0}
    ],{
        duration:1200,
        fill:"forwards"
    });

    setTimeout(()=>{

        this.showPrediction();

    },1400);

},
/*==================================================
PREDICTION
==================================================*/

showPrediction(){

    this.title.textContent =
    "Before we share our little secret...";

    this.subtitle.textContent =
    "What does your heart believe? Choose the team you think our tiny miracle belongs to.";

    this.title.animate([
        {opacity:0, transform:"translateY(30px)"},
        {opacity:1, transform:"translateY(0)"}
    ],{
        duration:1400,
        fill:"forwards"
    });

    this.subtitle.animate([
        {opacity:0, transform:"translateY(30px)"},
        {opacity:1, transform:"translateY(0)"}
    ],{
        duration:1600,
        fill:"forwards"
    });

    this.createPredictionButtons();

},
 createPredictionButtons(){

    const wrapper = document.createElement("div");

    wrapper.id = "prediction-buttons";

    wrapper.innerHTML = `

        <button id="team-boy-btn" class="team-btn">
            💙 Team Boy
        </button>

        <button id="team-girl-btn" class="team-btn">
            🩷 Team Girl
        </button>

    `;

    document
        .getElementById("title-section")
        .appendChild(wrapper);

    document
        .getElementById("team-boy-btn")
        .onclick = ()=>{

            this.chooseTeam("boy");

        };

    document
        .getElementById("team-girl-btn")
        .onclick = ()=>{

            this.chooseTeam("girl");

        };

},
 chooseTeam(team){

    this.prediction = team;

    if(team==="boy"){

        alert("Only Team Boy guests will now see the Helping Hand suggestion.");

    }else{

        alert("Only Team Girl guests will now see the Helping Hand suggestion.");

    }

 }

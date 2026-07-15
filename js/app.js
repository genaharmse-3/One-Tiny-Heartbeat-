document.addEventListener("DOMContentLoaded", () => {

    const title = document.getElementById("main-title");
    const subtitle = document.getElementById("subtitle");
    const button = document.getElementById("begin-button");

    button.style.display = "none";

    const text = "One Tiny Heartbeat";

    let i = 0;

    function typeTitle(){

        if(i < text.length){

            title.textContent += text.charAt(i);

            i++;

            setTimeout(typeTitle,120);

        }

        else{

            showSubtitle();

        }

    }

    function showSubtitle(){

        subtitle.textContent =
        "Every beautiful story begins with a single heartbeat.";

        subtitle.animate([

            {opacity:0, transform:"translateY(15px)"},

            {opacity:1, transform:"translateY(0)"}

        ],{

            duration:1200,

            fill:"forwards",

            easing:"ease"

        });

        setTimeout(showButton,900);

    }

    function showButton(){

        button.style.display="inline-block";

        button.animate([

            {opacity:0, transform:"translateY(25px)"},

            {opacity:1, transform:"translateY(0)"}

        ],{

            duration:1200,

            fill:"forwards",

            easing:"ease"

        });

    }

    typeTitle();

});

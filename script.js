function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

words = [
    "Software Developer",
    "Web Developer"
]

async function typingText(array, elem, cursor) {
    while (true){
        for (let i=0;i<array.length;i++) {
            for (let j=0;j<array[i].length;j++) {
                let char = array[i].charAt(j);
                elem.textContent += char;
                await sleep(500);
            }

            let animation = cursor.animate([
                { opacity: 0, offset: 0 },
                { opacity: 0, offset: 0.49 },
                { opacity: 1, offset: 0.5 },
                { opacity: 1, offset: 1 }
            ], {
                duration: 1000,
                iterations: 5
            });
            await animation.finished;

            for (let j=array[i].length-1;j >= 0;j--) {
                let str = array[i].substring(0,j);
                elem.textContent = str;
                await sleep(250);
            }
        }
    }
}

function toggleMenu(buttonId) {
    const menu = document.getElementById("settings-menu");

    toggleSettings(buttonId);

    menu.classList.toggle('is-open');

}

function toggleSettings(settings) {
    settings.classList.toggle("change");
}

function ageCounter(){

}

function toggleTheme(){
    let themeStyle = document.querySelector("link[title=theme]").getAttribute("href");
    let themeButton = document.getElementById("themeButton");


    if(themeStyle.includes("dark")){
        //set light theme
        themeButton.innerHTML = languages[lang]["themeDarkButton"];
        themeStyle = themeStyle.replace("dark" , "light");
    } else {
        //set dark theme
        themeButton.innerHTML = languages[lang]["themeLightButton"];
        themeStyle = themeStyle.replace("light" , "dark");
    }
    

    document.querySelector("link[title=theme]").setAttribute("href", themeStyle)
}

const selectLangElement = document.getElementById("languages");
selectLangElement.addEventListener("change", function (event) {
    lang = event.target.value

    const elements = document.querySelectorAll(".lang-dependent");

    if (languages[lang]) {
        for (i = 0; i < elements.length; i++){
            let element = elements[i];
            let key = element.getAttribute("data-key");

            if (languages[lang] && languages[lang][key]) {
                element.innerHTML = languages[lang][key];
            } else {
                console.error(`No translation found for key: ${key} in language: ${lang}`);
            }
        }

        //Typing text reset
        const typingElem = document.getElementById("typing-text");
        const cursorElem = document.getElementById("cursor");

        typingElem.textContent = "";

        typingText(languages[lang].words, typingElem, cursorElem);

    } else {
        console.error("Language not supported");
        return;
    }
});




const languages = {
    en: {
        labelLang: `Language:`,
        themeDarkButton: `toggle dark mode`,
        themeLightButton: `toggle light mode`,

        descTitle: `Hi, I'm <span class="better-font title">ALIEN</span> &#x1F44B;`,
        desc1: `I'm 17 and i live in Italy &#x1f1ee;&#x1f1f9;`,
        desc2: `Currently High School Student in Padua &#127979;`,
        desc3: `Passionate about coding and aspiring to become a <span id="typing-text" class="better-font"></span><span id="cursor">&nbsp;</span>`,
        words: [
            `Software Developer`,
            `Web Developer`
        ],
        
        skills: `Skills`,
        HTMLdesc: `I made this <a href="https://github.com/Alien0-7/portfolio" target="_blank">portfolio</a> and other web pages for <a href="https://github.com/Alien0-7/School-projects/tree/main/HTML" target="_blank">school</a>.`,
        CSSdesc: `I made the style for this <a href="https://github.com/Alien0-7/portfolio" target="_blank">portfolio</a> and other stylesheet for <a href="https://github.com/Alien0-7/School-projects/tree/main/HTML" target="_blank">school</a>.`,
        pythondesc: `I tried to use bunch of libraries like: pygame, turtle, tkinter, nextcord, etc. And at <a href="https://github.com/Alien0-7/School-projects/tree/main/Python" target="_blank">school</a> we made some stuff.`,
        javadesc: `I used java to try to create simple plugins for minecraft and use it at <a href="https://github.com/Alien0-7/School-projects/tree/main/Java" target="_blank">school</a> to learn the basics of OOP.`,
        
        projects: `Projects`,
        UniverseMCdesc1: `UniverseMC was my old minecraft server`,
        UniverseMCdesc2: `created by my friends and I. It had only one big gamemode called <span class="better-font paragraph">TOWNY</span>.`,
        TelegramBotdesc1: `I created it to practice the PYTHON language.`,
        TelegramBotdesc2: `It includes features like: multi-language, whitelist,fake errors, screen rotation, and link opening.`,
        
        linksTitle: `Where you can find me?`,
    },
    it: {
        labelLang: `Lingua:`,
        themeDarkButton: `Attiva modalità scura`,
        themeLightButton: `Attiva modalità chiara`,


        descTitle: `Ciao, sono <span class="better-font title">ALIEN</span> &#x1F44B;`,
        desc1: `Ho 17 anni e vivo in Italia(provincia di Vicenza) &#x1f1ee;&#x1f1f9;`,
        desc2: `Studio presso le scuole superiori di Padova(<a href="https://euganeo.edu.it">I.I.S. Euganeo</a>) &#127979;`,
        desc3: `Appassionato di programmazione e aspirante a diventare un <span class="better-font">Programmatore&nbsp;&nbsp;</span><span id="typing-text" class="better-font"></span><span id="cursor">&nbsp;</span>`,
        words: [
            `Software`,
            `Web`
        ],

        skills: `Skillz`,
        HTMLdesc: `I made this <a href="https://github.com/Alien0-7/portfolio" target="_blank">portfolio</a> and other web pages for <a href="https://github.com/Alien0-7/School-projects/tree/main/HTML" target="_blank">school</a>.`,
        CSSdesc: `I made the style for this <a href="https://github.com/Alien0-7/portfolio" target="_blank">portfolio</a> and other stylesheet for <a href="https://github.com/Alien0-7/School-projects/tree/main/HTML" target="_blank">school</a>.`,
        pythondesc: `I tried to use bunch of libraries like: pygame, turtle, tkinter, nextcord, etc. And at <a href="https://github.com/Alien0-7/School-projects/tree/main/Python" target="_blank">school</a> we made some stuff.`,
        javadesc: `I used java to try to create simple plugins for minecraft and use it at <a href="https://github.com/Alien0-7/School-projects/tree/main/Java" target="_blank">school</a> to learn the basics of OOP.`,
        
        projects: `Projects`,
        UniverseMCdesc1: `UniverseMC was my old minecraft server`,
        UniverseMCdesc2: `created by my friends and I. It had only one big gamemode called <span class="better-font paragraph">TOWNY</span>.`,
        TelegramBotdesc1: `I created it to practice the PYTHON language.`,
        TelegramBotdesc2: `It includes features like: multi-language, whitelist,fake errors, screen rotation, and link opening.`,
        
        linksTitle: `Where you can find me?`,
    }
}



let lang = "en";
const elem = document.getElementById("typing-text");
const cursor = document.getElementById("cursor");
elem.textContent = "";
typingText(words, elem, cursor);
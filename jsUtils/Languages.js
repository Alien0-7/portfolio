import { agePopup } from '../script.js';

export const languages = {
    en: {
        labelLang: `Language:`,
        themeDarkButton: `toggle dark mode`,
        themeLightButton: `toggle light mode`,

        descTitle: `Hi, I'm <span class="better-font title">ALIEN</span> &#x1F44B;`,
        desc1: `I'm <span id="myage"></span> and i live in Italy &#x1f1ee;&#x1f1f9;`,
        desc2: `Currently High School Student in Padua &#127979;`,
        desc3: `Passionate about coding and aspiring to become a <span id="typing-text" class="better-font"></span><span id="cursor">&nbsp;</span>`,
        words: [
            `Software Developer`,
            `Web Developer`
        ],
        popup: {
            years: 'years',
            months: 'months',
            days: 'days',
            hours: 'hours',
            minutes: 'minutes',
            seconds: 'seconds',
            
            year: 'year',
            month: 'month',
            day: 'day',
            hour: 'hour',
            minute: 'minute',
            second: 'second',
        },
        
        skills: `Skills`,
        HTMLdesc: `I made this <a href="https://github.com/Alien0-7/portfolio" target="_blank">portfolio</a> and other web pages for <a href="https://github.com/Alien0-7/School-projects/tree/main/HTML" target="_blank">school</a>.`,
        CSSdesc: `I made the style for this <a href="https://github.com/Alien0-7/portfolio" target="_blank">portfolio</a> and other stylesheet for <a href="https://github.com/Alien0-7/School-projects/tree/main/HTML" target="_blank">school</a>.`,
        jsdesc: `I wrote the code for this <a href="https://github.com/Alien0-7/portfolio" target="_blank">portfolio</a> and tried to create a Discord bot using discord.js on the Node.js framework.`,
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
        desc1: `Ho <span id="myage"></span> anni e vivo in Italia(provincia di Vicenza) &#x1f1ee;&#x1f1f9;`,
        desc2: `Studio presso le scuole superiori di Padova(<a href="https://euganeo.edu.it">I.I.S. Euganeo</a>) &#127979;`,
        desc3: `Appassionato di programmazione e aspirante a diventare un <span class="better-font">Programmatore&nbsp;&nbsp;</span><span id="typing-text" class="better-font"></span><span id="cursor">&nbsp;</span>`,
        words: [
            `Software`,
            `Web`
        ],
        popup: {
            years: 'anni',
            months: 'mesi',
            days: 'giorni',
            hours: 'ore',
            minutes: 'minuti',
            seconds: 'secondi',

            year: 'anno',
            month: 'mese',
            day: 'giorno',
            hour: 'ora',
            minute: 'minuto',
            second: 'secondo',
        },

        skills: `Competenze`,
        HTMLdesc: `Ho realizzato questo <a href="https://github.com/Alien0-7/portfolio" target="_blank">portfolio</a> e altre pagine web per la <a href="https://github.com/Alien0-7/School-projects/tree/main/HTML" target="_blank">scuola</a>.`,
        CSSdesc: `Ho creato lo stile per questo <a href="https://github.com/Alien0-7/portfolio" target="_blank">portfolio</a> e altri fogli di stile per la <a href="https://github.com/Alien0-7/School-projects/tree/main/HTML" target="_blank">scuola</a>.`,
        jsdesc: `Ho scritto il codice per questo <a href="https://github.com/Alien0-7/portfolio" target="_blank">portfolio</a> e ho provato a creare un bot Discord utilizzando discord.js sul framework Node.js.`,
        pythondesc: `Ho provato a usare diverse librerie come: pygame, turtle, tkinter, nextcord, ecc. E a <a href="https://github.com/Alien0-7/School-projects/tree/main/Python" target="_blank">scuola</a> abbiamo realizzato alcune cose.`,
        javadesc: `Ho usato Java per provare a creare semplici plugin per Minecraft e per imparare a scuola i concetti base della programmazione orientata agli oggetti (<a href="https://github.com/Alien0-7/School-projects/tree/main/Java" target="_blank">OOP</a>).`,

        projects: `Progetti`,
        UniverseMCdesc1: `UniverseMC era il mio vecchio server di Minecraft`,
        UniverseMCdesc2: `creato da me e dai miei amici. Aveva una sola grande modalità di gioco chiamata <span class="better-font paragraph">TOWNY</span>.`,
        TelegramBotdesc1: `L'ho creato per esercitarmi con il linguaggio PYTHON.`,
        TelegramBotdesc2: `Include funzionalità come: multi-lingua, whitelist, errori finti, rotazione dello schermo e apertura di link.`,
        
        linksTitle: `Dove puoi trovarmi?`,
    }
}

export let lang = "en";
export function LanguageChange(typingText, AgeCalculator) {
    const selectLangElement = document.getElementById("languages");
    selectLangElement.addEventListener("change", function (event) {
        lang = event.target.value;
        const myage =  new AgeCalculator("14 August 2007")

        const elements = document.querySelectorAll(".lang-dependent");

        if (languages[lang]) {
            for (let i = 0; i < elements.length; i++) {
                let element = elements[i];
                let key = element.getAttribute("data-key");

                if (languages[lang] && languages[lang][key]) {
                    element.innerHTML = languages[lang][key];
                } else {
                    console.error(`No translation found for key: ${key} in language: ${lang}`);
                }
            }

            typingText(languages[lang].words);
            document.getElementById("myage").innerHTML = Math.floor(myage.getAgeInYears());
            document.getElementById('myage').removeEventListener('mouseover', agePopup);
            document.getElementById('myage').addEventListener('mouseover', agePopup);
        } else {
            console.error("Language not supported");
            return;
        }
    });
}
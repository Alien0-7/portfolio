import { languages, LanguageChange, lang } from './jsUtils/Languages.js';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typingText(array) {
    const elem = document.getElementById("typing-text");
    const cursor = document.getElementById("cursor");
    elem.textContent = "";

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

/*------ AGE POP-UP FUNCTIONS ------*/

function agePopup() {
    const myageText = document.getElementById('myage'); //this is the container of popup
    let popup = document.querySelector(".popup");

    function updatePopup() {
        let dateFrom = DateTime.fromISO("2007-08-14");
        let elapsedTime = DateTime.now().diff(dateFrom,[ "years", "months", "days", "hours", "minutes", "seconds" ]).toObject();

        let yearText = `${Math.floor(elapsedTime.years)}`;
        let monthText = `${Math.floor(elapsedTime.months)}`;
        let dayText = `${Math.floor(elapsedTime.days)}`;
        let hourText = `${Math.floor(elapsedTime.hours)}`;
        let minuteText = `${Math.floor(elapsedTime.minutes)}`;
        let secondText = `${Math.floor(elapsedTime.seconds)}`;

        if (yearText == "1") {
            yearText += ` ${languages[lang]["popup"]["year"]}`;
        } else {
            yearText += ` ${languages[lang]["popup"]["years"]}`;
        }

        if (monthText == "1") {
            monthText += ` ${languages[lang]["popup"]["month"]}`;
        } else {
            monthText += ` ${languages[lang]["popup"]["months"]}`;
        }

        if (dayText == "1") {
            dayText += ` ${languages[lang]["popup"]["day"]}`;
        } else {
            dayText += ` ${languages[lang]["popup"]["days"]}`;
        }

        if (hourText == "1") {
            hourText += ` ${languages[lang]["popup"]["hour"]}`;
        } else {
            hourText += ` ${languages[lang]["popup"]["hours"]}`;
        }

        if (minuteText == "1") {
            minuteText += ` ${languages[lang]["popup"]["minute"]}`;
        } else {
            minuteText += ` ${languages[lang]["popup"]["minutes"]}`;
        }

        if (secondText == "1") {
            secondText += ` ${languages[lang]["popup"]["second"]}`;
        } else {
            secondText += ` ${languages[lang]["popup"]["seconds"]}`;
        }


        const popuptext = `<span class="popup">${yearText}, ${monthText}, ${dayText}, ${hourText}, ${minuteText}, ${secondText}</span>`;

        if (popup == null){
            //SHOW POPUP
            myageText.innerHTML += `${popuptext}`;
            popup = document.querySelector(".popup");
        } else {
            //UPDATE POPUP
            popup.innerHTML = `${yearText}, ${monthText}, ${dayText}, ${hourText}, ${minuteText}, ${secondText}`;
        }
    }


    // Avvia l'aggiornamento automatico del popup ogni secondo
    const intervalId = setInterval(updatePopup, 1000);

    // Rimuovi il popup quando il mouse esce e ferma l'aggiornamento
    myageText.addEventListener('mouseleave', () => {
        if (popup) {
            popup.remove();
            popup = null;
        }
        clearInterval(intervalId); // Ferma l'aggiornamento
    });

    // Esegui il primo aggiornamento subito quando il mouse si posiziona sopra
    updatePopup();
}


/*------ SETTINGS FUNCTIONS ------*/
function toggleMenu() {

    const menu = document.getElementById("settings-menu");

    toggleSettings(document.querySelector('.settings'));

    menu.classList.toggle('is-open');

}

function toggleSettings(settingsButton) {
    settingsButton.classList.toggle("change");
}


/*------ THEME FUNCTION ------*/
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


//main
const { DateTime, Interval, Duration } = luxon;
export { agePopup };
setYears();

function setYears() {
    let dateFrom = DateTime.fromISO("2007-08-14");
    let myage = DateTime.now().diff(dateFrom,["years"]).toObject();
    document.getElementById("myage").innerHTML = Math.floor(myage.years)
}

//default functions
typingText(languages["en"].words);
LanguageChange(typingText, setYears);


//All Event Listeners
document.getElementById('themeButton').addEventListener('click', toggleTheme);
document.querySelector('.settings').addEventListener('click', toggleMenu);
document.getElementById('myage').addEventListener('mouseover', agePopup);


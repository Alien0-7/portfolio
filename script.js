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

let elem = document.getElementById("typing-text")
let cursor = document.getElementById("cursor")
elem.textContent = "";
typingText(words, elem, cursor);
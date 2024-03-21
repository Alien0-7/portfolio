function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

words = [
    "Software Developer",
    "Web Developer"
]

async function typetext(array, elem) {
    while (true){
        for (let i=0;i<array.length;i++) {
            for (let j=0;j<array[i].length;j++) {
                let char = array[i].charAt(j);
                elem.textContent += char;
                await sleep(500);
            }
            await sleep(3000);
            for (let j=array[i].length-1;j >= 0;j--) {
                let str = array[i].substring(0,j);
                elem.textContent = str;
                await sleep(250);
            }
        }
    }
}

let elem = document.getElementById("typing-text")
elem.textContent = "";
typetext(words, elem);
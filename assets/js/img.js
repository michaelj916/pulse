const paths = [];
const totalImg = 31;
function populatePaths() {
    // loop through '../img/processed/*.jpg'
    let path = './assets/img/processed/';
    for (let i = 0; i < totalImg; i++) {
        let fullPath = path.concat(i + 1, '.jpg');
        paths.push(fullPath);
    }
}

// a simple timer
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function imageSwitch() {
    let counter = 0;
    let img = document.getElementById('inner-image');
    while(true) {
        img.src = paths[counter];
        counter++;
        if (counter > totalImg) {
            counter = 0;
        }
        await sleep(100);
    }
}

populatePaths();
imageSwitch();
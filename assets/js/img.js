const paths = ['./assets/img/processed/1.jpg', './assets/img/processed/2.jpg', './assets/img/processed/3.jpg', './assets/img/processed/4.jpg', './assets/img/processed/5.jpg', './assets/img/processed/6.jpg', './assets/img/processed/7.jpg', './assets/img/processed/8.jpg', './assets/img/processed/9.jpg', './assets/img/processed/10.jpg', './assets/img/processed/11.jpg', './assets/img/processed/12.jpg', './assets/img/processed/13.jpg', './assets/img/processed/14.jpg', './assets/img/processed/15.jpg', './assets/img/processed/16.jpg'];
// function preload() {
//     // loop through images in '../img/live/processed/*.jpg'
//     let img = document.getElementById('inner-image');
//     let path = './assets/img/processed/';
//     for (let i = 0; i < 16; i++) {
//         let fullPath = path.concat(i + 1, '.jpg');
//         paths.push(fullPath);
//     }
// }

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
        if (counter > 15) {
            counter = 0;
        }
        await sleep(100);
    }
}

// preload();
imageSwitch();
const paths = ['./assets/img/processed/1.jpg', './assets/img/processed/2.jpg', './assets/img/processed/3.jpg', './assets/img/processed/4.jpg', './assets/img/processed/5.jpg', './assets/img/processed/6.jpg', './assets/img/processed/7.jpg', './assets/img/processed/8.jpg', './assets/img/processed/9.jpg', './assets/img/processed/10.jpg', './assets/img/processed/11.jpg', './assets/img/processed/12.jpg', './assets/img/processed/13.jpg', './assets/img/processed/14.jpg', './assets/img/processed/15.jpg', './assets/img/processed/16.jpg', './assets/img/processed/17.jpg', './assets/img/processed/18.jpg', './assets/img/processed/19.jpg', './assets/img/processed/20.jpg', './assets/img/processed/21.jpg', './assets/img/processed/22.jpg', './assets/img/processed/23.jpg', './assets/img/processed/24.jpg', './assets/img/processed/25.jpg', './assets/img/processed/26.jpg', './assets/img/processed/27.jpg', './assets/img/processed/28.jpg', './assets/img/processed/29.jpg', './assets/img/processed/30.jpg', './assets/img/processed/31.jpg', './assets/img/processed/32.jpg', './assets/img/processed/33.jpg', './assets/img/processed/34.jpg', './assets/img/processed/35.jpg', './assets/img/processed/36.jpg'];
const totalImg = 36;
// function populatePaths() {
//     // loop through '../img/processed/*.jpg'
//     let path = './assets/img/processed/';
//     for (let i = 0; i < totalImg; i++) {
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
        if (counter + 1 > totalImg) {
            counter = 0;
        }
        await sleep(100);
    }
}

// populatePaths();
// console.log(paths);
imageSwitch();
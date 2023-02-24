function preload()
{
    // loop through images in '../img/live/processed/*.jpg'
    let background = document.getElementById('image-background');
    let path = './assets/img/processed/';
    const paths = [];

    for (let i = 0; i < 16; i++) {
        let fullPath = path.concat(i + 1, '.jpg');
        let containerPath = 'image-container--';

        mImg = new Image();
        mImg.src = fullPath;
        mImg.className = 'image';

        let imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';
        imageContainer.className = containerPath.concat(i + 1);
        
        imageContainer.append(mImg);

        background.append(imageContainer);

        //paths.push(fullPath);
        //console.log(paths[i]);
    }
    //console.log(paths.length);
}
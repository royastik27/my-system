const el = document.getElementsByTagName('body')[0];

el.style.backgroundSize = 'cover';
el.style.transition = 'background-image 0.5s ease-in';

function setWallpaper(imgID)
{
    el.style.backgroundImage = `url('/assets/img/wall${imgID}.jpg')`;
}

export default setWallpaper;
const body = document.querySelector('body')
const IMG_NUMBER = 3

getRandomNum=()=>{
    const num = Math.floor(Math.random()*IMG_NUMBER)
    return num
}

paintImage=(num)=>{
    const image = new Image();
    image.src = `./images/${num+1}.jpg`
    image.classList.add('bgImage')
    body.prepend(image)
}

init=()=>{
    const randomNum = getRandomNum()
    paintImage(randomNum)
}

init()
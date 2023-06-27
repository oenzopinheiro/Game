const human =  document.querySelector('.human')
const dino = document.querySelector('.dino')

const jump = () => {

    human.classList.add('jump')

    setTimeout(() => {

        human.classList.remove('jump')
    }, 600)
}


const loop = setInterval(() => {

    


   const dinoPosition = dino.offsetLeft
   const humanPosition = +window.getComputedStyle(human).bottom.replace('px', '')

   if(dinoPosition <= 120 && dinoPosition > 0 && humanPosition < 80 ) {

    dino.style.animation = 'none'
    dino.style.left = `${humanPosition}px`


    human.style.animation = 'none'
    human.style.bottom = `${dinoPosition}px`


    clearInterval(loop) 

   }

},10)


document.addEventListener('click' , jump)
document.addEventListener('keydown' , jump)

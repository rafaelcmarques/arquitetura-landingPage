function openMenu() {
  const body = document.querySelector('body')
  body.classList.add('menu-expanded')
}

function closeMenu() {
  const body = document.querySelector('body')
  body.classList.remove('menu-expanded')
}

/** CARROSSEL DE image **/

let balls = document.querySelector('.balls')
let images = document.querySelectorAll('.slides .image')
let currentPosition = 0
let image = document.getElementById('current')
let next = document.getElementById('next')
let back = document.getElementById('back')

for (let i = 0; i < images.length; i++) {
  let div = document.createElement('div')
  div.id = i
  balls.appendChild(div)
}

document.getElementById('0').classList.add('currentImg')

let pos = document.querySelectorAll('.balls div')

for (let i = 0; i < pos.length; i++) {
  pos[i].addEventListener('click', () => {
    currentPosition = pos[i].id
    slide()
  })
}

back.addEventListener('click', () => {
  currentPosition--
  slide()
})

next.addEventListener('click', () => {
  currentPosition++
  slide()
})

function slide() {
  if (currentPosition >= images.length) {
    currentPosition = 0
  } else if (currentPosition < 0) {
    currentPosition = images.length - 1
  }

  document.querySelector('.currentImg').classList.remove('currentImg')
  image.style.marginLeft = -50 * currentPosition + 'rem'
  document.getElementById(currentPosition).classList.add('currentImg')
}

slide()

/** CARROSSEL DE image **/



const face = document.getElementById('cat-face')

class DomNode{
  constructor(){
    this.domCache = {}
  }
  getElementsByClassName(className){
    if(!this.domCache[className]){
      this.domCache[className] = document.getElementsByClassName(className) 
    }
    return this.domCache[className]
  }
}

let dom  = new DomNode()

const eyeBottom = dom.getElementsByClassName('eye-bottom')
const mouthLeft = dom.getElementsByClassName('mouth left')
const mouthRight = dom.getElementsByClassName('mouth right')
const earLeft = dom.getElementsByClassName('ear left')
const earRight = dom.getElementsByClassName('ear right')
const faceRed = dom.getElementsByClassName('face-red')
face.addEventListener('mouseover',()=>{
  mouthLeft[0].style.borderRadius = '50%'
  mouthRight[0].style.borderRadius = '50%'
  earLeft[0].style.transform = 'rotate(-30deg)'
  earRight[0].style.transform = 'rotate(30deg)'
  Array.prototype.slice.call(eyeBottom).forEach(item=>{
    item.style.marginTop = '30px'
  })
  console.log(faceRed)
  Array.prototype.slice.call(faceRed).forEach(item=>{
    item.style.opacity = 0.8
  })

})
face.addEventListener('mouseout',()=>{
  mouthLeft[0].style.borderRadius = '0% 40% 50% 20%'
  mouthRight[0].style.borderRadius = '40% 0% 20% 50%'
  earLeft[0].style.transform = 'rotate(0deg)'
  earRight[0].style.transform = 'rotate(0deg)'
  Array.prototype.slice.call(eyeBottom).forEach(item=>{
    item.style.marginTop = '48px'
  })
  Array.prototype.slice.call(faceRed).forEach(item=>{
    item.style.opacity = 0.0
  })
})


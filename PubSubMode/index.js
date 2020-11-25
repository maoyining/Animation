class MyEvent{
  constructor(){
    this.list = []
  }
  addEventListener(key, fn) {
    if(!this.list[key]) {
      this.list[key] = []
    }
    this.list[key].push(fn)
  }
  triggerEvent() {
    let key = Array.prototype.shift.call(arguments)
    let fns = this.list[key]
    if(!fns || fns.length===0 ) {
      return false
    }
    for(let i=0;i<fns.length;i++){
      fns[i].apply(this, arguments)
    }
  }
  removeEvent(key, fn) {
    let fns = this.list[key]
    if(!fns) {
      return false
    }
    if(!fn) {
      fns.length = 0
    } else {
      for( let i = 0; i < fns.length; i++) {
        if(fns[i] === fn){
          fns.splice(i,1)
        }
      }
    }
  }
}

let e = new MyEvent()

let sayHello = function() {
  console.log('hello everyone')
}

e.addEventListener('hello',sayHello)

e.addEventListener('hello',function(name){
  console.log(name)
})


e.triggerEvent('hello')
e.removeEvent('hello',sayHello)
e.triggerEvent('hello','maoyining')
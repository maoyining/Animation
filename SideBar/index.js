
//立即执行函数模块化
(function (){
  class MenuBar {
    constructor(){
      this.el = document.querySelector('#sidebar ul')
      this.state = 'allClosed' //hasOpened
      this.el.addEventListener('click',function(e){
        e.stopPropagation()
      })
      this.menuList = document.querySelectorAll('#sidebar ul > li')
    }
  }
  class SideBar {
    constructor (eId,closeBarId){
      this.element = document.getElementById(eId || "sidebar")
      this.closeBar = document.getElementById(closeBarId || "closeBar")
      this.state= 'opened'
      this.menubar = new MenuBar()
      let that=this
      this.element.addEventListener('click',function(e){
        if(e.target!==that.element){
          that.triggerSwitch(e.target)
        }
      })
    }
    close(){
      console.log('close')
      this.element.style.width = 0
      this.state='closed'
    }
    open(){
      console.log('open')
      this.element.style.width = '35px'
      this.state='opened'
    }
    triggerSwitch(element){
      console.log(element)
      if(this.state === 'opened'){
        this.close()
      }else{
        this.open()
      }
    }
  }
  
  const s=new SideBar()
  const list = s.menubar.menuList
  for(let i = 0;i<list.length;i++){
    list[i].addEventListener('click',function(e){
      const content = e.currentTarget.getAttribute('id')+"-content"
      if(s.menubar.state==='allClosed'){
        console.log('打开 ' +content)
        s.menubar.state = content
        
      }else{
        console.log('关闭 '+s.menubar.state)
        s.menubar.state = content
        console.log("打开 "+content)
      }
      
    })
  }
})()
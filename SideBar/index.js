
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
      this.back = document.getElementsByClassName("glyphicon glyphicon-chevron-left")
    }
  }
  class SideBar {
    constructor (eId,closeBarId,openBarId){
      this.element = document.getElementById(eId || "sidebar")
      this.closeBar = document.getElementById(closeBarId || "closeBar")
      this.openBar = document.getElementById(openBarId||"openBar")
      this.state= 'opened'
      this.menubar = new MenuBar()
      let that=this
      this.closeBar.addEventListener('click',function(e){  
          that.triggerSwitch()
      })
      this.openBar.addEventListener('click',function(e){
        that.triggerSwitch()
      })
    }
    close(){
      console.log('close')
      if(this.menubar.state !== "allClosed"){
        this.menubar.state.style.display="none"
        this.menubar.state = "allClosed"
      }
      
      this.openBar.style.display = "block"
      this.element.style.display = "none"
      this.state='closed'
    }
    open(){
      console.log('open')
      this.openBar.style.display = "none"
      this.element.style.display = "block"
      this.state='opened'
    }
    triggerSwitch(){
      if(this.state === 'opened'){
        this.close()
      }else{
        this.open()
      }
    }
  }
  
  const s=new SideBar()
  const list = s.menubar.menuList
  const backs = s.menubar.back
  for(let i = 0;i<list.length;i++){
    list[i].addEventListener('click',function(e){
      const content = e.currentTarget.getAttribute('id')+"-content"
      if(s.menubar.state==='allClosed'){
        
        const now = document.getElementById(content)
        now.style.display="block"
        s.menubar.state = now
        
      }else{   
        s.menubar.state.style.display="none"
        s.menubar.state = document.getElementById(content)
        s.menubar.state.style.display="block"
      }
      
    })
  }
  for(let i=0;i<backs.length;i++){
    backs[i].addEventListener('click',function(){
      s.menubar.state.style.display = "none"
      s.menubar.state="allClosed"
    })
  }
})()
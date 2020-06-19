//把从checkbox得到的数据存放在这里
let decideData = {
  region:[],
  product:[]
}

class CheckBox {
  //构造函数初始化
  constructor(id,arr){
    this.id=id
    this.element  = document.getElementById(id)
    //创建一个 checkbox 列表
    this.arr = arr.map((item)=>{
      let p = document.createElement('p')
      p.innerText= item 
      let el = document.createElement('input')
      el.setAttribute('value',item)
      el.setAttribute('type','checkbox')
      el.setAttribute('checkbox-type','common')
      p.appendChild(el) 
      return p
    })
    //全选节点创建
    this.chooseAll = document.createElement('input')
  }

  //checkbox 节点初始化函数
  init(){
    // 把在构造函数里创建的checkbox list 添加到网页上
    this.arr.forEach(item=>{
      this.element.appendChild(item)
    })
    //全选节点的创建与添加
    let p = document.createElement('p')
    p.innerText = '全选'
    this.chooseAll.setAttribute('checkbox-type','all')
    this.chooseAll.setAttribute('type','checkbox')
    p.appendChild(this.chooseAll)
    this.element.appendChild(p)
  }

  //事件绑定
  bindEvents(){
    let that = this
    this.element.addEventListener('click',function(event){
      let target = event.target
      //点击的是checkbox,控制HTML页面上checked的显示
      if(target.type==='checkbox'){
        //如果点击的是全选的话，将ckeckbox的checked状态统一通过遍历作处理
        if(target.getAttribute('checkbox-type') ==='all'){
          let collection = that.element.getElementsByTagName('p')
          for(let i=0;i<collection.length;i++){
            let checkbox=collection[i].getElementsByTagName('input')[0]
            if(target.checked === true){
              checkbox.checked=true
            }else{
              checkbox.checked=false
            }
          }
        }
        
        //通过遍历checkedbox来获取选中的数据
        let collection = that.element.getElementsByTagName('p')
        let res = []
        for(let i=0;i<collection.length-1;i++){
          let checkbox=collection[i].getElementsByTagName('input')[0]
          if(checkbox.checked === true){
            res.push(checkbox.value)
          }
        }
        
        //根据不同的id来决定是将数据填入地区还是商品
        if(that.id==='region-radio-wrapper'){
          decideData.region = res
        }else if(that.id==='product-radio-wrapper'){
          decideData.product = res
        }
        renderTable(decideData) //渲染表格
      }
    })
  }
}

let sourceData = [{
  product: "手机",
  region: "华东",
  sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
}, {
  product: "手机",
  region: "华北",
  sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
}, {
  product: "手机",
  region: "华南",
  sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
}, {
  product: "笔记本",
  region: "华东",
  sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
}, {
  product: "笔记本",
  region: "华北",
  sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
}, {
  product: "笔记本",
  region: "华南",
  sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
}, {
  product: "智能音箱",
  region: "华东",
  sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
}, {
  product: "智能音箱",
  region: "华北",
  sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
}, {
  product: "智能音箱",
  region: "华南",
  sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
}]
let tHeader = ['商品','地区','1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']

let elSelect = document.getElementById("region-select")
let elTable = document.getElementById('table-wrapper')
let defaultValue = {}

function selectDomListen (event) {
  if(event.target.getAttribute('id')==='region-select'){
    defaultValue.region = event.target.value
  }else if(event.target.getAttribute('id')==='product-select'){
    defaultValue.product = event.target.value
  }
  renderTable()
}

function getFormData(data) {
  let queryData = sourceData.filter(val=>{
    if(data.region && data.product){
      return val.region === data.region && val.product ===data.product
    }else if(data.region){
      return val.region === data.region
    }else if(data.product){
      return val.product === data.product
    }
    
  })
  return queryData
}

function createMonthData(item){
  elTable.innerHTML = ""
  let element = document.createElement('tr')
  let arr = []
  arr.push(document.createElement('td'))
  arr[0].innerText = item.product
  arr.push(document.createElement('td'))
  arr[1].innerText = item.region
  item.sale.forEach(element => {
    let el = document.createElement('td')
    el.innerText = element
    arr.push(el)
  });
  arr.forEach(item=>{
    element.appendChild(item)
  })
  return element
}

function renderTable () {
  let queryData = getFormData(defaultValue)
  let table = document.createElement('table')
  let tableHeader= tHeader.map(item=>{
    let el = document.createElement('th')
    el.innerText=item
    return el
  })
  let tableBody = queryData.map((item=>{
    return createMonthData(item)
  }))
  let trHead = document.createElement('tr')
  tableHeader.forEach(element=>{
    trHead.appendChild(element)
  })
  let trBody = document.createElement('tbody')
  tableBody.forEach(element=>{
    trBody.appendChild(element)
  })
  table.appendChild(trHead)
  table.appendChild(trBody) 
  elTable.appendChild(table)
}

// function CreateCheckBox( CheckBox容器, CheckBox选项的参数对象或者数组 ) {
//   生成全选checkbox的html，给一个自定义属性表示为全选checkbox，比如checkbox-type="all"
//   遍历参数对象 {
//       生成各个子选项checkbox的html，给一个自定义属性表示为子选项
//   }
//   容器innerHTML = 生成好的html集合

//   给容器做一个事件委托 = function() {
//       if 是checkbox
//           读取自定义属性
//           if 全选
//               做全选对应的逻辑
//           else
//               做子选项对应的逻辑
//   }
// }

// // 对象或数组自己根据喜好实现均可
// 生成一组CheckBox(容器1, [{
//   value: 1,
//   text: "XXXX"
// }, {
//   value: 2,
//   text: "YYYY"
// }]);

// 生成一组CheckBox(容器2, [{
//   value: 1,
//   text: "AAAA"
// }, {
//   value: 2,
//   text: "BBBB"
// }]);


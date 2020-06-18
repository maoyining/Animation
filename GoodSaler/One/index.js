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
let defaultValue = elSelect.value
function selectDomListen (event) {
  defaultValue = event.target.value
  renderTable()
}

function getFormData(data) {
  let queryData = sourceData.filter(val=>{
    return val.region ===data
  })
  return queryData
}

function createMonthData(item){
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


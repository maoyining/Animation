let tHeader = ['商品','地区','1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
import getFormData from './data'
import createPic from './line'
//完成一行数据的渲染
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
  element.addEventListener('mouseover',function(){
    createPic(item.sale)
  })
  return element
}

//渲染表格
export default function renderTable (data) {
  let elTable = document.getElementById('table-wrapper')
  elTable.innerHTML = ""
  let queryData = getFormData(data)
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

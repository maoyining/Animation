import { sourceData } from './souceData'
//根据checkbox返回处理后的内容结合已有数据筛选后得到要渲染的数据
export default function getFormData(data) {
  let database
  if(!localStorage.getItem("sourceData")){
    localStorage.setItem("sourceData",JSON.stringify(sourceData))
  }
  let res = JSON.parse(localStorage.getItem("sourceData"))
  database = res
  let queryData = database.filter(val=>{
    return data.region.indexOf(val.region)!==-1 &&  data.product.indexOf(val.product)!==-1  
  })
  return queryData
}


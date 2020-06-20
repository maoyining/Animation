

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

/**
 * 绘制点
 * @param {为描绘点提供的数据} data 
 * @param {用于计算高度（份）} piece 
 * @param {点的颜色} pointColor 
 */
function paintPoint(data,piece,pointColor){
  let pos = []
  data.forEach((element,index)=> {
    let x = index * 50 + 50
    let height = element * piece
    let y = 350-height
    ctx.strokeStyle=pointColor
    ctx.beginPath();
    ctx.arc(x,y,3,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = '#ff7c7c'
    ctx.fill();
    let obj = { x : x, y : y}
    pos.push(obj)
  });
  return pos
}

/**
 * 绘制折线
 * @param {位置} pos 
 * @param {线的颜色} lineColor 
 */
function paintLine(pos,lineColor){
  pos.forEach((element,index,arr)=>{
    if(index!==0){
      ctx.strokeStyle = lineColor
      ctx.moveTo(arr[index-1].x,arr[index-1].y)
      ctx.lineTo(element.x,element.y)
      ctx.stroke()
    }
  })
}
export default function createPic(data){
  //ctx.clearRect(0,0,700,400); 
  //绘制横纵坐标
  ctx.moveTo(50,50);
  ctx.lineTo(50,350);
  ctx.lineTo(650,350);
  ctx.stroke();
  let max = Math.max.apply(Math,data)
  let piece = 300/max
  //描绘点和线
  let pos = paintPoint(data,piece,"#ff7c7c")
  paintLine(pos,"#ff7c7c")
  
}


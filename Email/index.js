const postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net']
const elInput = document.getElementById('email-input')
const elWrapper = document.getElementById('email-sug-wrapper')

// 增加一个变量，用于存储当前选中的提示Li的序号
let nowSelectTipIndex = 0;

//inputDom的输入监听
inputDomListen = function () {
  nowSelectTipIndex = 0
  addToWrapper()
  controlWrapperStatus()
}

//获取用户输入
function getUserInput() {
  return elInput.value.trim()
}

//生成提示框中的提示内容
function createContent() {
  let text = getUserInput()
  const index = text.indexOf('@')
  if(index!==-1){
    let partA = text.substring(0,index)
    let partB = text.substring(index)
    const rightList = postfixList.filter((value) => {
      return (('@'+value).indexOf(partB)>=0)  
    })
    if(rightList.length!==0){
      let matchList = rightList.map(value=>{
        const tip = `${partA}@${value}`
        return tip
      })
      return matchList
    }
    let matchList = postfixList.map(value=>{
      const tip = `${partA}@${value}`
      return tip
    })
    return matchList
  
  }
  const list = postfixList.map((value) => {
    const tip = `${text}@${value}`
    return tip
  })
  return list
}



//将提示内容添加到email-sug-wrapper中
function addToWrapper() {
  const datalist = createContent()
  const list = datalist.map(val=>{
    let tempNode = document.createElement('li')
    tempNode.innerText = val
    return tempNode
  })
  //删除原来的元素
  let length = elWrapper.childElementCount
  if(length) {
    for(i=0;i<length;i++){
      elWrapper.removeChild(elWrapper.childNodes[0])
    }
  }
  //将新的提示内容添加到节点上
  let frag = document.createDocumentFragment()
  list[nowSelectTipIndex].style.background = "#eee"
  list.forEach(val=>{
    frag.appendChild(val)
  })
  elWrapper.appendChild(frag)
}

//控制email-sug-wrapper的显示/隐藏状态
function controlWrapperStatus() {
  const input = getUserInput()
  if (!input) {
    hideWrapper()
  } else {
    showWrapper()
  }
}

//隐藏提示框
function hideWrapper() {
  elWrapper.style.display="none"
}

//显示提示框
function showWrapper() {
  elWrapper.style.display="block"
}

function resetSelect() {
  nowSelectTipIndex = 0
}

function chooseValue(event){
  elInput.value=event.target.innerText
  hideWrapper()
}

// 监听特殊3个键的键盘事件，这个事件可能就是inputDom的输入监听，也有可能是另外一个，请自己测试后判断
function OnListenKey(event) { 
  const list = createContent()
  //如果按下的是上升键   
  if (event && event.keyCode===38) {
      if (nowSelectTipIndex!==0) {
          nowSelectTipIndex --
      } else {
          nowSelectTipIndex = list.length-1
      }
      addToWrapper()
  } 
  if (event && event.keyCode===40) {
      if (nowSelectTipIndex < list.length-1) {
          nowSelectTipIndex ++
      } else {
          nowSelectTipIndex = 0
      }
      addToWrapper()
  }
  
  if (event && event.keyCode===13) {
      let nodeList=elWrapper.getElementsByTagName('li')
      elInput.value=nodeList[nowSelectTipIndex].innerText
      hideWrapper()
  }
}
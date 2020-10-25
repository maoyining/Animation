let registerForm = document.getElementById('registerForm')


/***************策略对象***************** */
var strategies = {
  isNonEmpty: function(value,errorMsg) {
    if(value===''){
      return errorMsg
    }
  },
  minLength: function(value,length,errorMsg) {
    if(value.length<length){
      return errorMsg
    }
  },
  isMobile: function(value,errorMsg){
    if(!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
      return errorMsg
    }
  }
}


/**
 * rule的结构是[{strategy:'minLength:6',errorMsg:'长度不小于6'}]
 * 策略类
 */
class Validator {
  constructor(){
    this.cache = []
  }
  // 添加验证的规则
  add(dom,rules){
    rules.forEach(rule => {
      this.cache.push(function(){
        let strategyArr = rule.strategy.split(':')
        let errorMsg = rule.errorMsg
        let strategy = strategyArr.shift()
        strategyArr.unshift(dom.value)
        strategyArr.push(errorMsg)
        return strategies[strategy].apply(dom,strategyArr)
      })
    })
  }
  // 真正开始调用函数验证
  start(){
    for(let i=0;i<this.cache.length;i++){
      let errorMsg = (this.cache[i])()
      if(errorMsg){
        return errorMsg
      }
    }
  }
}

let validata = function(){
  let validator = new Validator()
  validator.add(registerForm.userName,[{
    strategy: 'isNonEmpty',
    errorMsg: '用户名不为空'
  },{
    strategy: 'minLength:2',
    errorMsg: '用户名最小长度为2'
  }])
  validator.add(registerForm.password,[{
    strategy: 'isNonEmpty',
    errorMsg: '密码不为空'
  },{
    strategy: 'minLength:6',
    errorMsg: '密码最小长度为6'
  }])
  let errMsg = validator.start()
  return errMsg
}

function submitForm(){
  let err = validata()
  if(err){
    console.log(err)
  }
}
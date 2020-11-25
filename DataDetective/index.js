function updateView() {
  console.log('更新视图')
}

// 重新定义数组的原型
const oldArrayProperty = Array.prototype
// 创建新对象，原型指向 oldArrayProperty,再扩展新的方法不会影响原型
const arrProto = Object.create(oldArrayProperty)
const arrFunc = ['push','pop','splice','shift','unshift']
arrFunc.forEach(methodName => {
  arrProto[methodName] = function() {
    Array.prototype[methodName].call(this,...arguments)
    updateView()
  }
})

/**
 * 利用defineProperty来重新定义属性，利用这个API 的get和set函数来达到监听效果
 * @param {*} target 对象
 * @param {*} key 要定义的属性的名字
 * @param {*} value 属性值
 */
function defineReactive(target, key, value){
  
  observer(value) // 深度监听
  
  Object.defineProperty(target, key, {
    get: function() {
      return value
    },
    set: function(newValue) {
      if(value !== newValue){
        observer(newValue) // 深度监听
        value = newValue
        updateView()
      }
    }
  })
}

// 监听对象的属性
function observer(target) {
  // 如果要监听的对象
  if (typeof target !== 'object' || target === null) {
    return target
  }
  if(Array.isArray(target)) {
    target.__proto__ = arrProto
  }
  for(let key in target) {
    defineReactive(target, key, target[key])
  }
}

// 准备数据
const data = {
  name: 'maoyining',
  age: 22,
  info: {
    school: 'HangZhou DianZi University',
    friends: ['hanshirong','shengqiongyi']
  }
}

// 对data进行监听
observer(data)
// data.name = 'litian'
// data.age = 23
// data.info.school = 'wuwwu'
// data.age = { num: 23 }
// data.age.num = 24
data.info.friends.push('litian')
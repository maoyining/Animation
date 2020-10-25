var add = (function realAdd(){
  let sum = 0
  return function(){
  	if(arguments[0]){
    	sum+=arguments[0]
    }else{
      console.log(sum)
    }
  }
})()
add(1)
add(2)
add(4)
add()
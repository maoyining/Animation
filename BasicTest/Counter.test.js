import Counter from './Counter'
test('测试addOne',()=>{
  let c = new Counter(6)
  c.addOne()
  console.log(c.number)
  expect(c.number).toBe(7)
})

test('测试minusOne',()=>{
  
})
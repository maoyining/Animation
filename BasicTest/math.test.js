import  {add,minus,multi}  from './math.js'

test('测试加法 3+7',()=>{
  expect(add(3,7)).toBe(10)
})

test('测试',()=>{
  const arr = ['maoyining','hanshirong','uuu']
  //const data = new Set(arr)
  expect(arr).toContain('maoyining')
})
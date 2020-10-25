import {fetchData} from './fetchData'

// test('异步测试一',(done)=>{
//   fetchData((data)=>{
//     expect(data).toEqual({
//       success:true
//     })
//     done()
//   })
// })

// test('异步测试二',()=>{
//   return fetchData().then(res=>{
//     expect(res.data).toEqual({
//       success:true
//     })
//   })
// })

test('异步测试三',()=>{
  expect.assertions(1)
  return fetchData().catch(e=>{
    expect(e.toString().indexOf('404')>-1).toBe(true)
  })
})
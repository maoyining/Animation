export default class Counter {
  constructor(number) {
    this.number = number
  }
  addOne(){
    this.number+=1
  }
  minusOne(){
    this.number-=1
  }
}
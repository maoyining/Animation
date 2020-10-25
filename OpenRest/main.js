function generateUUID() {
  var d = new Date().getTime();
  // if (window.performance && typeof window.performance.now === "function") {
  //     d += performance.now(); //use high-precision timer if available
  // }
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}

const customers = []

class Restaurant {
  constructor(info) {
    this.cash = info.cash
    this.seats = info.seats
    this.staff = info.staff
  }
  hire(p) {
    this.staff.push(p)
  }
  fire(p) {
    this.staff = this.staff.filter(item => {
      return item.id !== p.id
    })
  }
}

class Staff {
  constructor(name, salary) {
    this.id = generateUUID()
    this.name = name
    this.salary = salary
  }
  doOnceWork(taskName) {
    console.log(`${this.id}-${this.name}-${taskName}`)
  }
}

class Waiter extends Staff {
  constructor(name, salary) {
    super(name, salary)
  }
  doOnceWork(food) {
    if (Object.prototype.toString.call(food) === '[object Array]') {
      // 点菜
      customers[0].order(food)
    } else {
      // 上菜
      console.log(`服务员${this.id}-${this.name}为您上菜`)
    }
    
  }
}

class Cook extends Staff {
  constructor(name, salary) {
    super(name, salary)
  }
}

class Dish {
  constructor(name, cost, price) {
    this.name = name
    this.cost = cost
    this.price = price
  }
}

class Menu {
  constructor(arr) {
    this.menuList = arr
  }
  generateDish(){
    const index = Math.floor(Math.random() * this.menuList.length)
    const arr = []
    arr.push(this.menuList[index])
    return arr
  }
}

class Customer {
  order(food) {
    console.log("顾客点了以下这些菜：")
    console.log(food)
  }
  eat() {
    console.log(`菜品真不错，顾客正在愉快地用餐啦`)
    customers.splice(0,1)
    console.log(`顾客用餐完毕，下一位可以进来啦`)
    console.log('------------------------------------')
  }
}

// 初始化饭店
var ifeRestaurant = new Restaurant({
  cash: 1000000,
  seats: 20,
  staff: []
});

// 初始化员工
var newCook = new Cook("Tony", 10000);
ifeRestaurant.hire(newCook);
var newWaiter = new Waiter("Sweety",6000)
ifeRestaurant.hire(newWaiter);

// 初始化菜单
const menuList = []
const dish1 = new Dish("鱼香茄子",12,32)
const dish2 = new Dish("蛋黄南瓜",10,22)
const dish3 = new Dish("梅干菜扣肉",24,66)
menuList.push(dish1)
menuList.push(dish2)
menuList.push(dish3)
const menu = new Menu(menuList)

// 初始化顾客列表
const cus1 = new Customer()
const cus2 = new Customer()
const cus3 = new Customer()
customers.push(cus1)
customers.push(cus2)
customers.push(cus3)

while(customers.length){
  newWaiter.doOnceWork(menu.generateDish())
  newCook.doOnceWork('做菜')
  newWaiter.doOnceWork()
  customers[0].eat()
}


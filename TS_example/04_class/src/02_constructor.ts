class Dog {
  name:string;
  age:number;

  // constructor 被称为构造函数
  // 构造函数会在对象创建时调用
  constructor(name: string, age: number) {
    // 在实例方法中，this表示当前的实例
    // 在构造函数中，当前对象就是当前新建的那个对象
    // 可以通过this向新建的对象中添加属性
    this.name = name;
    this.age = age;
  }

  bark() {
    console.log('bark,bark');
    // 在方法中可以通过this来表示当前调用方法的对象
    console.log(this)
  }
}

const dog1 = new Dog('a',1);
const dog2 = new Dog('b',2);

console.log(dog1)
console.log(dog2)
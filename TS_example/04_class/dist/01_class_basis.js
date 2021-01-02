"use strict";
// 使用class关键字来定义一个类
// 对象中主要包含2个部分：属性、方法
class Person {
    constructor() {
        // 直接定义的属性是实例属性，需要通过对象的实例去访问
        // const per = new Person();
        // per.name
        // 使用static开头的属性是静态属性（类属性），可以直接通过类去访问
        // Person.age
        // readonly开头的属性表示一个只读的属性，无法修改
        // 定义实例属性
        // name: string = 'Vincent';
        this.name = 'Vincent';
    }
    // 定义方法
    // 如果方法以static开头，则方法就是类方法，可以直接通过类去调用
    sayHello() {
        console.log('hello');
    }
}
// 在属性前使用static关键字可以定义类数（静态属性）
// static age: number = 18;
// static readonly age: number = 18; // 注意static readonly的顺序不能颠倒
Person.age = 18;
const per = new Person();
console.log(per);
console.log(per.name);
console.log(Person.age);
console.log(per.sayHello);

"use strict";
(function () {
    // 定义一个表示人的类
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        /**
         * getter用来读取属性
         * setter用来设置属性
         * 它们被称为属性的存取器
         */
        // // 定义方法，用来获取name属性
        // getName(){
        //   return this._name;
        // }
        // // 定义方法，用来设置name属性
        // setName(val:string){
        //   this._name = val;
        // }
        // setAge(val){
        //   if(val>=0) this._age = val;
        // }
        // TS中设置getter方法的方式
        get name() {
            console.log('get name()');
            return this._name;
        }
        set name(val) {
            this._name = val;
        }
    }
    const per = new Person('aaa', 11);
    // 现在属性是在对象中设置的，属性可以任意地被修改
    // 属性可以任意被修改，会导致对象中的数据变得非常不安全
    // per._name = 'bbb';
    // per._age = 22;
    // console.log(per.getName())
    // per.setName('bbb');
    // console.log(per.getName())
    console.log(per.name);
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const b = new B(123);
    // class C{
    //   name:string;
    //   age:number;
    //   constructor(name:string, age:number){
    //     this.name = name;
    //     this.age = age;
    //   }
    // }
    // TS的语法糖，效果与上面的相同
    class C {
        // 可以直接将属性定义在构造函数中
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
})();

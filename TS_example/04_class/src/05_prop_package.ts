(function () {

  // 定义一个表示人的类
  class Person {
    // TS可以在属性前添加属性的修饰符
    //  public 默认值，修饰的属性可以在任意位置访问（修改）
    //  private 私有属性，只能在类内部进行访问（修改）
    //   可以在类中添加方法使得私有属性可以被外部访问
    //  protected 受保护的属性，只能在当前类和当前类的子类中访问（修改）
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
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
      console.log('get name()')
      return this._name;
    }

    set name(val: string) {
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


  console.log(per.name)



  class A{
    protected num:number;
    constructor(num:number){
      this.num = num
    }
  }

  class B extends A{
    test(){
      console.log(this.num)
    }
  }

  const b = new B(123)


  // class C{
  //   name:string;
  //   age:number;
  //   constructor(name:string, age:number){
  //     this.name = name;
  //     this.age = age;
  //   }
  // }
  

  // TS的语法糖，效果与上面的相同
  class C{
    // 可以直接将属性定义在构造函数中
    constructor(public name:string, public age:number){}
  }

})()
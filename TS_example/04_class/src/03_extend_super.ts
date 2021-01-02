(function () {

  /**
   * 以abstract开头的类是抽象类；
   * 抽象类和其他类区别不大，只是不能用来创建（实例）对象
   * 抽象类就是专门用来被继承的类
   * 
   * 抽象类中可以添加抽象方法
   */

  // 定义一个Animal类
  abstract class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    // sayHello() {
    //   console.log('emmmmmmm')
    // }


    // 定义一个抽象方法
    // 抽象方法使用abstract开头，没有方法体
    // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
    abstract sayHello():void;
  }




  /**
   * Dog extends Animal
  此时，Animal被称为父类，Dog被称为子类
  使用继承后，子类将会拥有父类所有的方法和属性
  通过继承可以将多个类中共有的代码写在一个父类中，这样只需要写在父类中即可让所有的子类都同时拥有父类中的属性和方法
    如果希望在子类中添加一些父类中没有的属性或方法，可以直接在子类中加入
  如果在子类中添加了和父类相同的方法，则子类方法会覆盖掉父类的方法
   这种子类覆盖掉父类方法的形式，称为方法重写
   */
  // 定义一个表示狗的类
  // 使Dog继承Animal类
  class Dog extends Animal {

    run() {
      console.log(this.name + 'is run')
    }
    sayHello() {
      console.log('bark')
    }
  }



  

  // 定义一个表示猫的类
  // 使Cat继承Animal类
  class Cat extends Animal {
    like: string;

    constructor(name: string, age: number, like: string) {
      // 如果在子类中写了构造函数，在子类的构造函数中必须对父类的构造函数进行调用
      super(name, age) // 调用父类的构造函数
      this.like = like;
    }

    sayHello() {
      // 在类的方法中，super就表示当前类的父类
      // super.sayHello();

      console.log('mow')
    }
  }




  const dog = new Dog('aaa', 5)
  console.log(dog);
  dog.sayHello();
  dog.run()

  const cat = new Cat('bbb', 3, 'play');
  console.log(cat);
  cat.sayHello()


  // const ani = new Animal();

})()
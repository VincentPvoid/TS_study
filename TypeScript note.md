TypeScript



# 0 TypeScript简介

- TypeScript是什么
以Javascript为基础构件的语言
是JS的超集
可以在任何支持JS的平台中执行
TS扩展了JS，并添加了类型
TS不能被JS解析器直接执行，需要编译为JS执行

- TypeScript增加了什么
类型、支持ES的新特性、添加ES不具备的新特性、丰富的配置选项、强大的开发工具





# 1 入门


## TypeScript开发环境搭建

1. 下载Node.js
2. 安装Node.js
3. 使用npm全局安装typescript
  进入命令行
  输入 npm i -g typescript
4. 创建一个ts文件
5. 使用tsc对ts文件进行编译
  进入命令行
  进入ts文件所在目录
  执行命令 tsc xxx.ts



## TS基本类型

- 类型声明
类型声明是TS非常重要的一个特点；
通过类型声明可以指定TS中变量（参数、形参）的类型；
指定类型后，当为变量赋值时，TS编译器会自动检查值是否符合类型声明，符合则赋值，否则报错
简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值

语法：
let 变量:类型
let 变量:类型 = 值
function fn(参数:类型, 参数:类型): 类型{
  ...
}

- 自动类型判断
TS拥有自动的类型判断机制
当对变量的声明和赋值同时进行时，TS编译器会自动判断变量的类型
所以如果变量的声明和赋值同时进行时，可以省略类型声明

- 类型
类型        描述                           例子
number    任意数字                         1 2 3
string    任意字符串                       'abc'
boolean   布尔值true或false                true
字面量    限制变量的值就是该字面量的值      其本身
any       任意类型                          *
unknown   类型安全的any                     *
void      没有值（或undefined）            空值（undefined）
never     不能是任何值                     没有值
object    任意的js对象                     {name:'a'}
array     任意js数组                       [1,2,3]
tuple     元素，ts新增类型，固定长度数组    [1,2]
enum      枚举，ts新增类型                 enum{A,B}



## 编译选项

### 自动编译文件
编译文件时，使用 -w 指令后，TS编译器会自动监视文件的变化，并在文件发生变化时对文件进行重新编译
例： tsc xxx.ts -w

### 自动编译整个项目
如果直接使用tsc指令，则可以自动将当前项目下的所有ts文件编译为js文件。
但是能直接使用tsc命令的前提是：要先在项目根目录下创建一个ts的配置文件tsconfig.json
tsconfig.json是一个JSON文件，添加配置文件后，只需执行tsc命令即可完成对整个项目的编译

配置选项
- include
定义希望被编译的文件所在的目录
默认值：["**/*"]
例
   "include":["src/**/* ", "test/**/*"]
   上述例子中，所有src目录和test目录下的文件都会被编译

- exclude
定义需要排除在外的目录
默认值：["node_modules", "bower_components", "jspm_packages"]
例
 "exclude":["./src/hello/**/*"]
  上述例子中，src下hello目录下的文件都不会被编译

- extends
定义被继承的配置文件
例
 "extends":"./configs/base"
  上述例子中，当前配置文件中会自动包含config目录下base.json中的所有配置信息

- files
指定被编译文件的列表，只有需要编译的文件少时才会用到
例
 "files":["core.ts", "sys.ts", "types.ts"...]
  列表中的文件都会被TS编译器编译

- compilerOptions
编译选项是配置文件中非常重要也比较复杂的配置选项
在compilerOptions中包含多个子选项，用来完成对编译的设置
项目选项
1. target
   设置ts代码编译的目标版本；
   可选值：ES3（默认）、ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext
 例
  "compilerOptions":{
    "target":"ES6"
  }
  如上设置，所编写的ts代码将会被编译为ES6版本的js代码
2. lib
  指定代码运行时所包含的库（宿主环境）；一般情况下不需要指定
  可选值：ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext、DOM、WebWorker、ScriptHost...
 例
  "compilerOptions":{
    "target":"ES6",
    "lib":["ES6", "DOM"],
    "outDir":"dist",
    "outFile":"dist/aa.js"
  }
3. module
设置编译后代码使用的模块化系统
可选值：none、CommonJS、UMD、AMD、System、ES6、ES2015、ES2020、ESNext
例
 "compilerOptions":{
   "module":"CommonJS"
 }
4. outDir
编译后文件所在的目录
默认情况下，编译后的js文件会和ts文件位于相同路径下；设置outDir后可以改变编译后文件的位置


## webpack
通常情况下，实际开发中我们都需要使用构建工具对代码进行打包，TS同样也可以结合构建工具一起使用
下面以webpack为例介绍如何结合构建工具使用TS

步骤
1. 初始化项目
进入项目根目录，执行命令 npm init -y
主要作用：创建package.json文件

2. 下载构建工具
npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin

- webpack
构建工具webpack 
- webpack-cli
webpack的命令行工具
- webpack-dev-server
webpack的开发服务器
- typescript
ts编译器
- ts-loader
ts加载器，用于在webpack中编译ts文件
- clean-webpack-plugin
webpack中的清除插件，每次构建都会先清除目录

3. 根目录下创建webpack的配置文件webpack.config.js

### 解决浏览器兼容
使用babel进行转换
npm i -D @babel/core @babel/preset-env babel-loader core-js

注意：新版webpack会把打包的代码放入一个箭头函数中，因此需要在output中进行配置修改
output:{
  environment:{
    arrowFunction:false, // 关闭webpack的箭头函数，可选
  }
}





# 2 面向对象
面向对象是程序中一个非常重要的思想
面向对象简而言之就是程序之中所有的操作都需要通过对象来完成。
例如：
  操作浏览器要使用window对象
  操作网页要使用document对象
  操作控制台要使用console对象

一切操作都要通过对象，也就是所谓的面向对象。
那么对象到底是什么呢？这就要先说到程序是什么：计算机程序的本质就是对现实事物的抽象，抽象的反义词是具体，例如：照片是对一个具体的人的抽象，汽车模型是对具体汽车的抽象等等。
程序也是对事物的抽象，在程序中我们可以表示一个人、一条狗、一把枪等所有的事物。一个事物到了程序中就抽象成了一个对象。

在程序中所有的对象都被分成了两个部分的数据和功能，以人为例，人的姓名、性别、年龄、身高、体重等属于数据，人可以说话、吃饭、睡觉等这些属于人的功能。
数据在对象中被称为属性，而功能就被称为方法。所有简而言之，在程序中一切皆对象。



## 类（class）
要面向对象，操作对象，首先要拥有对象，因此需要创建对象。
要创建对象，必须要先定义类。所谓的类可以理解为对象的模型，程序中可以根据类创建指定类型的对象；
例如：可以通过Person类来创建人的对象，通过Dog类创建狗的对象等等，不同的类可以用来创建不同的对象。

- 定义类
class 类名 {
  属性名：类型;
  constructor(参数：类型){
    this.属性名 = 参数;
  }
  方法名(){
    ...
  }
}





# 3 实际项目练习
在03_ts_webpack的基础上安装其他依赖；该项目采用less作为css的预处理语言

处理css和less
npm i -D less less-loader css-loader style-loader

处理css兼容性
npm i -D postcss postcss-loader postcss-preset-env
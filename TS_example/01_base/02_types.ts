// 可以直接使用字面量进行类型声明
let a: 10;
a = 10;


// 可以使用 | 来连接多个类型（联合类型）
let b: 'male' | 'female';
b = 'male';
b = 'female';


let c: string | boolean;
c = 'abc';
c = true;


// any表示的是任意类型；一个变量设置类型为any后，相当于对该变量关闭了TS的类型检测；
// 在使用TS时，不建议使用TS类型
// let d:any; // 显式的any

// 声明变量时如果不指定类型，则TS解析器会自动判断变量的类型为any（隐式的any）
let d;
d = 123;
d = 'abc';
d = true;


// unknown表示未知类型的值
let e: unknown;
e = 1;
e = true;
e = 'aaa';


let s: string;

// d的类型为any，它可以赋值给任意变量，不会报错
// s = d;

// unknown实际上就是一个类型安全的any；
// unknown类型的变量，不能直接赋值给其他变量
// if (typeof e === 'string') {
//   s = e;
// }

// 类型断言，可以用来告诉解析器变量的实际类型
/* 语法
  变量 as 类型
  <类型>变量
*/
s = e as string;
s = <string>e;



// void用来表示空，以函数为例，就表示没有返回值的函数（可以返回null，undefined）
function fn1():void{
  // return null;
  // return;
  // return undefined;
}


// never表示永远不会返回结果
function fn2():never{
  throw new Error('报错');
}






// object表示一个js对象
let aa:object;
aa = {};
aa = function(){}


// {}用来指定对象中可以包含哪些属性
// 语法：{属性名:属性值, ...}
// 在属性名后面加上?，表示属性是可选的
let bb : {name:string, age?:number}
bb = {name:'abc'}


// [propName: string]:any 表示任意类型的属性（propName只是变量名，可以随意起）
let cc:{name:string, [propName:string]:any}
// cc = {a:123, b:'test'}
cc = {name:'abc', a:123, b:'test'}


// 设置函数结构的类型声明
// 语法 (形参: 类型, 形参: 类型 ...) => 返回值
let dd:(a:number, b:number) => number;
dd = function(n1, n2){
  return n1+n2;
}


// 数组的类型声明
// 语法
//   类型[]
//   Array<类型>

let ee:string[]
ee = ['bb','c']
// ee.push('sdf')

let ff:Array<number>;
ff = [1,2,3]


// 元祖：固定长度的数组
// 语法 [类型, 类型, 类型]
let hh:[string, string];
hh = ['abc', 'bbb'];



// enum 枚举
// 默认值与顺序相同（类似数组下标）；也可以自定义（但因为没必要所以一般不用）
enum Gender{
  Male,  
  Female
}

let ii:{name:string, gender:Gender}
ii = {
  name:'test',
  gender:Gender.Male
}

console.log(ii.gender === Gender.Male)


// & 表示同时
let jj:{name:string} & {age:number}
// jj = {name:'abc',age:11, a:'test'}  // 报错，不能加入其他的属性值
jj = {name:'abc',age:11};



// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5;
let kk:myType;
let ll:myType;
kk = 1;
kk = 5;
// kk = 6; // 不在1-5范围内，报错

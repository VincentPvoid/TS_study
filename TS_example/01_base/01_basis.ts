// // 声明一个变量a，同时指定它的类型为Number
// let a: number;

// // a的类型设置为了number，因此在以后的使用过程中a的值只能是数字
// a = 10;
// a = 111;

// // a = 'test'; // 此行代码会报错，因为变量a的类型是Number，因此不能赋值为字符串




// // 声明完变量直接进行赋值
// // let c:boolean = false;

// // 如果变量的声明和赋值是同时进行的，TS会自动对变量进行类型检测
// let c = false;
// c = true;




// // JS中的函数不需要考虑参数的类型和个数
// // function sum(a, b) {
// //   return a + b;
// // }

// // console.log(sum(123, 456)); // 579
// // console.log(sum(123, '456')); // '123456'

// function sum(a: number, b: number): number {
//   return a + b;
// }

// let res = sum(123, 456)
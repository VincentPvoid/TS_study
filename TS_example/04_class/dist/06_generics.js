"use strict";
// function fn(a:any):any{
//   return a;
// }
// 在定义函数或是类时，如果遇到类型不明确的情况，可以使用泛型
function fn1(a) {
    return a;
}
// 可以直接调用具有泛型的函数
let res1 = fn1(10); // 不指定泛型，TS可以自动对类型进行推断
let res2 = fn1('hello'); // 指定泛型
// 泛型可以同时指定多个
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2(123, 'aaa');
// T extends Inter 表示泛型T必须是Inter实现类（子类）
function fn3(a) {
    return a.length;
}
fn3('abc');
// fn3(123)
class MyClass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new MyClass('abc');

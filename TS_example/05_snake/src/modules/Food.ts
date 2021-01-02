// 定义食物类Food
class Food{
  // 表示食物对应的元素
  ele:HTMLElement;

  constructor(){
    // 获取页面中的food元素
    this.ele = document.getElementById('food')!;
  }

  // 获取食物的X坐标
  get X(){
    return this.ele.offsetLeft;
  }
  // 获取食物的Y坐标
  get Y(){
    return this.ele.offsetTop;
  }

  // 随机改变食物位置
  changePos(){
    let X = Math.round(Math.random() * 29 ) * 10;
    let Y = Math.round(Math.random() * 29 ) * 10;

    this.ele.style.left = X + 'px';
    this.ele.style.top = Y + 'px';
  }
}


export default Food;
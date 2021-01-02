class Snake {

  ele: HTMLElement; // 包含整条蛇的容器
  head: HTMLElement; // 表示蛇头
  bodies: HTMLCollection; // 表示蛇身

  constructor() {
    this.ele = document.getElementById('snake')!;
    this.head = document.querySelector('#snake>div') as HTMLElement;
    // 使用getElementsByTagName才能动态获取变化的div
    this.bodies = this.ele.getElementsByTagName('div') as HTMLCollection;
  }

  // 获取蛇头坐标
  get X() {
    return this.head.offsetLeft;
  }
  get Y() {
    return this.head.offsetTop;
  }

  // 设置蛇头坐标
  set X(val) {
    // 如果位置没改变，则不进行修改
    if (this.X === val) return;

    // 如果蛇进行了掉头（往反方向移动）
    // 使用新值和第二节（即蛇头后第一节）的位置进行比较，判断是否在进行掉头
    if (this.bodies[1] && val === (this.bodies[1] as HTMLElement).offsetLeft) {
      if (val > this.X) {
        // 新值val大于蛇头的位置，说明身体在蛇右边，即当前蛇在向左前进
        val = this.X - 10;
      } else {
        val = this.X + 10;
      }
    }
    // 如果位置超出设定的屏幕范围，则抛出错误
    if (val < 0 || val > 290) throw new Error('GAME OVER');

    this.moveBody();
    this.head.style.left = val + 'px';
    // 检查是否撞到身体
    this.checkHit();
  }

  set Y(val) {
    if (this.Y === val) return;
    if (val < 0 || val > 290) throw new Error('GAME OVER');

    if (this.bodies[1] && val === (this.bodies[1] as HTMLElement).offsetTop) {
      if (val > this.Y) {
        // 新值val大于蛇头的位置，说明身体在蛇下边，即当前蛇在向上前进
        val = this.Y - 10;
      } else {
        val = this.Y + 10;
      }
    }

    this.moveBody();
    this.head.style.top = val + 'px';
    this.checkHit();
  }


  // 增加身体长度
  addBody() {
    this.ele.insertAdjacentHTML('beforeend', '<div></div>')
  }

  // 移动身体
  moveBody() {
    // 遍历身体（不包括蛇头），修改位置；注意要从后往前修改
    for (let i = this.bodies.length - 1; i > 0; i--) {
      // TS无法判断身体中的元素是否为HTMLElement，因此需要进行类型断言
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      // 根据前一节的位置更改后一节的位置
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
    }
  }

  // 判断蛇是否撞到了自己
  checkHit() {
    // 当有4个元素时（即下标为3）之后才可能会撞到自己
    if (this.bodies.length - 1 <= 3) return;

    for (let i = 3; i < this.bodies.length; i++) {
      let bd = this.bodies[i] as HTMLElement;
      // 当蛇头和其中一节身体的坐标相同时，说明撞到了自己
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        // debugger
        throw Error('Hit youself! GAME OVER')
      }
    }
  }

}

export default Snake;
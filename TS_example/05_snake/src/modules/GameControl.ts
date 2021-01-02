import Food from './Food';
import ScorePanel from './ScorePanel';
import Snake from './Snake';

class GameControl {
  food: Food;
  scorePanel: ScorePanel;
  snake: Snake;

  direction: string; // 表示当前前进方向

  isGameOver: boolean; // 表示游戏是否结束

  constructor() {
    this.food = new Food();
    this.scorePanel = new ScorePanel();
    this.snake = new Snake();
    this.direction = '';
    this.isGameOver = false;

    this.init();
  }


  // 初始化游戏
  init() {
    document.addEventListener('keydown', this.keydownHandler.bind(this))
    this.move();
  }

  // 按下键盘时的响应函数
  keydownHandler(e: KeyboardEvent) {
    // console.log(e.key)

    // 当按下方向键时才进行方向调整
    switch (e.key) {
      case 'ArrowUp':
      case 'Up':
      case 'ArrowDown':
      case 'Down':
      case 'ArrowLeft':
      case 'Left':
      case 'ArrowRight':
      case 'Right':
        this.direction = e.key;
    }
  }

  // 控制移动方向
  move() {

    let X = this.snake.X;
    let Y = this.snake.Y;

    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        Y -= 10;
        break;
      case 'ArrowDown':
      case 'Down':
        Y += 10;
        break;
      case 'ArrowLeft':
      case 'Left':
        X -= 10;
        break;
      case 'ArrowRight':
      case 'Right':
        X += 10;
        break;
    }
    // console.log('dir', this.direction)

    // 如果吃到了食物
    if (this.checkEat(X, Y)) {
      // 加1分
      this.scorePanel.addScore();
      // 改变食物位置
      this.food.changePos();
      // 增加蛇的长度
      this.snake.addBody()
    }

    try {
      // 修改蛇的位置
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (e) {
      // 出现异常时游戏结束
      alert(e.message);
      this.isGameOver = true;
    }

    // 定时器用于让蛇连续移动
    // 当游戏结束时不继续开启新的定时器
    !this.isGameOver && setTimeout(this.move.bind(this), 300 - (this.scorePanel.level - 1) * 30)
  }


  // 检查蛇是否吃到了食物
  checkEat(X: number, Y: number) {
    return X === this.food.X && Y === this.food.Y;
  }



}

export default GameControl;
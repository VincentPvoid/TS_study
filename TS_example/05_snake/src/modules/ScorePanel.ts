// 显示分数区的类
class ScorePanel {
  // 当前的分数和等级信息
  score = 0;
  level = 1;

  // 显示当前分数和等级信息的容器
  scoreEle: HTMLElement;
  levelEle: HTMLElement;

  // 限制等级的变量
  maxLevel:number;
  // 表示每升一级需要多少分的变量
  upScore:number;

  constructor(maxLevel:number = 10, upScore:number = 10) {
    this.scoreEle = document.getElementById('score')!;
    this.levelEle = document.getElementById('level')!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }

  // 加一分
  addScore() {
    this.scoreEle.innerHTML = ++this.score + '';
    // 如果当前值为10的倍数，则进行升级
    if(this.score % this.upScore === 0) this.levelUp();
  }

  // 升一级
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + '';
    }
  }
}

export default ScorePanel;
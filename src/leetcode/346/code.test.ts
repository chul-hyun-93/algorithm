class MovingAverage {
  private size = 0;

  private list: number[] = [];

  private writeIndex = 0;

  constructor(size: number) {
    this.size = size;
  }

  next(val: number): number {
    this.list[this.writeIndex] = val;
    this.writeIndex = (this.writeIndex + 1) % this.size;
    return this.list.reduce((total, val) => total + val, 0) / this.list.length;
  }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

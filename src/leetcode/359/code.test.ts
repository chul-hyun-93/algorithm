type message = string;
type timestamp = number;

const MAX_TIME = 10;

class Logger {
  map: Map<message, timestamp> = new Map();

  shouldPrintMessage(timestamp: number, message: string): boolean {
    const prevTimestamp = this.map.get(message);

    if(prevTimestamp !== undefined){
      if(timestamp - prevTimestamp < MAX_TIME) {
        return false;
      }
      this.map.set(message, timestamp);
      return true;
    }

    this.map.set(message, timestamp);
    return true;
  }
}

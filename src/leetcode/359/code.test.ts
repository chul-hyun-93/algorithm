type Message = string;
type Timestamp = number;

const MAX_TIME = 10;

class Logger {
  map: Map<Message, Timestamp> = new Map();

  shouldPrintMessage(timestamp: number, message: string): boolean {
    const prevTimestamp = this.map.get(message);

    if (prevTimestamp === undefined || prevTimestamp + MAX_TIME <= timestamp) {
      this.map.set(message, timestamp);
      return true;
    }

    return false;
  }
}

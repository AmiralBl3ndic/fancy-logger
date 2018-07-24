const log = require("fancy-log"); // So that we have the time in the log


const colors = {
  default: "\x1b[0m",

  // Foreground
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  green: "\x1b[32m",
  blue: "\x1b[34m",
  white: "\x1b[37m",
  cyan: "\x1b[36m",

  // Background
  bgBlack: "\x1b[40m",
  bgRed: "\x1b[41m",
  bgGreen: "\x1b[42m",
  bgYellow: "\x1b[43m",
  bgBlue: "\x1b[44m",
  bgMagenta: "\x1b[45m",
  bgCyan: "\x1b[46m",
  bgWhite: "\x1b[47m"
};


class FancyLogger {
  constructor () {
    this.tags = [];
  }
}
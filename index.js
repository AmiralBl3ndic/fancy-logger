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
    this.line = "";
  }


  /** Function that adds a tag to the current line
   *
   * @param {Object} tag - Object that represents the tag to add
   * @param {String} tag.content - Content of the tag ("test" yields "[test]")
   * @param {String} [tag.color = "default"] - Foreground color of the tag
   * @param {String} [tag.bgColor = "default"] - Background color of the tag
   */
  addTag (tag = {
    color: "default",
    bgColor: "default",
    content: null
  }) {
    if (!(tag instanceof Object) || tag.content == null || tag.content === undefined)
      return;

    tag.color = tag.color.trim();
    tag.bgColor = tag.bgColor.trim();
    tag.content = tag.content.trim();

    let exists = false;
    for (let nTag of this.tags)
      if (nTag.color === tag.color && nTag.bgColor === tag.bgColor && nTag.content === tag.content)
        exists = true;

    if (!exists)
      this.tags.push(tag);
  }


  /** Function that adds one or multiple tags to the current line
   *
   * @param {...Object | Object[]} tags - Object(s) that represents the tag(s) to add
   * @param {String} tags.content - Content of the tag ("test" yields "[test]")
   * @param {String} [tags.color = "default"] - Foreground color of the tag
   * @param {String} [tags.bgColor = "default"] - Background color of the tag
   */
  addTags (tags) {
    let n = arguments.length;

    for (let i = 0; i < n; i++) {
      if (arguments[i] instanceof Array) {
        for (let j = 0; j < arguments[i].length; j++)
          this.addTag(arguments[i][j]);
      }
      else
        this.addTag(arguments[i]);
    }
  }


  /** Function that adds a tag to the current line
   *
   * @param {Object} tag - Object that represents the tag to add
   * @param {String} tag.content - Content of the tag ("test" yields "[test]")
   * @param {String} [tag.color = "default"] - Foreground color of the tag
   * @param {String} [tag.bgColor = "default"] - Background color of the tag
   */
  removeTag (tag = {
    color: "default",
    bgColor: "default",
    content: null
  }) {
    if (!(tag instanceof Object) || tag.content == null || tag.content === undefined)
      return;
    tag.color = tag.color.trim();
    tag.bgColor = tag.bgColor.trim();
    tag.content = tag.content.trim();

    const index = this.tags.indexOf(tag);
    if (index !== -1)
      this.tags.splice(index, 1);
  }


  /** Function that removes one or multiple tags from the current line
   *
   * @param {...Object | Object[]} tags - Object(s) that represents the tag(s) to remove
   * @param {String} tags.content - Content of the tag ("test" yields "[test]")
   * @param {String} [tags.color = "default"] - Foreground color of the tag
   * @param {String} [tags.bgColor = "default"] - Background color of the tag
   */
  removeTags (tags) {
    let n = arguments.length;

    for (let i = 0; i < n; i++) {
      if (arguments[i] instanceof Array) {
        for (let j = 0; j < arguments[i].length; j++)
          this.removeTag(arguments[i][j]);
      }
      else
        this.removeTag(arguments[i]);
    }
  }
}
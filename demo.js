const SimpleFancyLog = require("./index");
const tags = require("./tags");

const logger = new SimpleFancyLog();

const args = process.argv;
for (let arg of args) {
  if (arg === "--demo1") {
    console.log("This module helps creating clear, colorful, tagged logs");

    console.log("\nThis is what logs basically look like:");
    console.log("\tNew user connected: 'Username'");
    console.log("\tUser disconnected: 'Username'");
    console.log("\tAccount created: 'Username#2'");

    console.log("And so on...");
    console.log("To ease finding the pieces of data you need, fancy-logger allows to have this king of logs:\n");
    logger.addTag({color: "green", content: "Connection"});
    logger.log("User connected: 'Username'");
    logger.addTag({color: "red", content: "Disconnection"});
    logger.log("User disconnected: 'Username'");
    logger.addTags({bgColor: "magenta", color: "yellow", content: "New account"}, {color: "green", content: "Connection"});
    logger.log("Account created: 'Username#2'");

    console.log("\n\n\n");

    process.exit();
  }
  else if (arg === "--demo2") {
    logger.log("Demo of fancy-logger\n");

    logger.addTag({content: "tag"});
    logger.log("Test with single tag");
    logger.addTags({content: "tag1"}, {content: "tag2", color: "default"});
    logger.log("Test with multiple tags");

    logger.addTag({color: "red", content: "tag"});
    logger.log("Test with single foreground colored tag");
    logger.addTags([{color: "cyan", content: "tag1"}, {color: "blue", content: "tag2"}], {color: "yellow", content: "tag3"});
    logger.log("Test with multiple foreground colored tags");

    logger.addTag({bgColor: "magenta", content: "tag"});
    logger.log("Test with single background colored tag");
    logger.addTags({bgColor: "magenta", content: "tag1"}, {bgColor: "black", content: "tag2"});
    logger.log("Test with multiple background colored tags");

    logger.addTag({bgColor: "black", color: "yellow", content: "tag"});
    logger.log("Test with single background and foreground colored tag");
    logger.addTags({bgColor: "black", color: "yellow", content: "tag1"}, {bgColor: "red", color: "cyan", content: "tag2"});
    logger.log("Test with multiple background and foreground colored tags");

    console.log("\n\n\n");

    process.exit();
  }
}

logger.addTag({color: "red", content: "Command Line Argument"});
logger.log("You must pass on a command line parameter of the following:\n\t\t--demo1\n\t\t--demo2");

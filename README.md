# What is `fancy-logger`?

This module helps creating clear, colorful, tagged logs

Logs are often ugly because not enough effort is put into making them clear and easy to read:

    New user connected: 'Username'
    User disconnected: 'Username'
    Account created: 'Username#2'

And so on...


To ease finding the exact pieces of data you need when retrieving your logs, `fancy-logger` brings a colorful tag system:
this is what the above log could look like with `fancy-logger`:

![Demonstration of fancy-logger into action](./doc/fancy-logger-demo%231.png)


---------

# How to use

`fancy-logger` uses a main class: the `FancyLogger` class.
The module exports the class, so you have to create your own instance:

This is what you will have to write in order to obtain the same log as above

```JavaScript
const FancyLogger = require("fancy-logger");

const logger = new FancyLogger();

// To write the first line
logger.addTag({color: "green", content: "Connection"});
logger.log("User connected: 'Username'");

// To write the second line
logger.addTag({color: "red", content: "Disconnection"});
logger.log("User disconnected: 'Username'");

// To write the third line
logger.addTags(
  {bgColor: "magenta", color: "yellow", content: "New account"},
  {color: "green", content: "Connection"}
);
logger.log("Account created: 'Username#2'");
```


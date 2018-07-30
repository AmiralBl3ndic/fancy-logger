# Demo
![Demonstration of fancy-logger](./doc/fancy-logger-demo%232.png)

---

# What is `fancy-logger`?

This module helps creating clear, colorful, tagged logs

Logs are often ugly because not enough effort is put into making them clear and easy to read:

    New user connected: 'Username'
    User disconnected: 'Username'
    Account created: 'Username#2'

And so on...


### With fancy-logger 
![Comparative demonstration of fancy-logger into action](./doc/fancy-logger-demo%231.png)


---------

# How to use

`fancy-logger` uses a main class: the `FancyLogger` class.
The module exports the class, so you have to create your own instance:

This is what you will have to write in order to obtain the same log as [above](#with-fancy-logger) (comparative log between )

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

------

# Reference

##### None of the methods are static, you always need an instance of the FancyLogger class to call them

<dl>
<dt><a href="#addTag">addTag(tag)</a></dt>
<dd><p>Function that adds a tag to the current line</p>
</dd>
<dt><a href="#addTags">addTags(tags)</a></dt>
<dd><p>Function that adds one or multiple _tags to the current line</p>
</dd>
<dt><a href="#removeTag">removeTag(tag)</a></dt>
<dd><p>Function that adds a tag to the current line</p>
</dd>
<dt><a href="#removeTags">removeTags(tags)</a></dt>
<dd><p>Function that removes one or multiple _tags from the current line</p>
</dd>
<dt><a href="#toString">toString()</a> ⇒ <code>String</code></dt>
<dd><p>Function that returns the string that will be logged when the log function is called</p>
</dd>
<dt><a href="#log">log(message)</a></dt>
<dd><p>Function that logs a message with all the set tags. This function resets the message and the tags after it is displayed</p>
</dd>
</dl>


<br />
<a name="addTag"></a>

## addTag(tag)
Function that adds a tag to the current line

**Kind**: Method of FancyLogger  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| tag | <code>Object</code> |  | Object that represents the tag to add |
| tag.content | <code>String</code> |  | Content of the tag ("test" yields "[test]") |
| [tag.color] | <code>String</code> | <code>&quot;default&quot;</code> | Foreground color of the tag |
| [tag.bgColor] | <code>String</code> | <code>&quot;default&quot;</code> | Background color of the tag |


<br />
<a name="addTags"></a>

## addTags(tags)
Function that adds one or multiple _tags to the current line

**Kind**: Method of FancyLogger  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| tags | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> |  | Object(s) that represents the tag(s) to add |
| tags.content | <code>String</code> |  | Content of the tag ("test" yields "[test]") |
| [tags.color] | <code>String</code> | <code>&quot;default&quot;</code> | Foreground color of the tag |
| [tags.bgColor] | <code>String</code> | <code>&quot;default&quot;</code> | Background color of the tag |


<br />
<a name="removeTag"></a>

## removeTag(tag)
Function that adds a tag to the current line

**Kind**: Method of FancyLogger  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| tag | <code>Object</code> |  | Object that represents the tag to add |
| tag.content | <code>String</code> |  | Content of the tag ("test" yields "[test]") |
| [tag.color] | <code>String</code> | <code>&quot;&quot;</code> | Foreground color of the tag |
| [tag.bgColor] | <code>String</code> | <code>&quot;&quot;</code> | Background color of the tag |


<br />
<a name="removeTags"></a>

## removeTags(tags)
Function that removes one or multiple _tags from the current line

**Kind**: method of FancyLogger

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| tags | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> |  | Object(s) that represents the tag(s) to remove |
| tags.content | <code>String</code> |  | Content of the tag ("test" yields "[test]") |
| [tags.color] | <code>String</code> | <code>&quot;default&quot;</code> | Foreground color of the tag |
| [tags.bgColor] | <code>String</code> | <code>&quot;default&quot;</code> | Background color of the tag |


<br />
<a name="toString"></a>

## toString() ⇒ <code>String</code>
Function that returns the string that will be logged when the log function is called

**Kind**: Method of FancyLogger  
**Returns**: <code>String</code> - - String that will be logged when the log function is called  


<br />
<a name="log"></a>

## log(message)
Function that logs a message with all the set tags. This function resets the message and the tags after it is displayed

**Kind**: Method of FancyLogger  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>String</code> | Message to display along with the tags |

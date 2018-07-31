# Demo
![Demonstration of simple-fancy-log](./doc/fancy-logger-demo%232.png)

---

# What is `simple-fancy-log`?

This module helps creating clear, colorful, tagged logs

Logs are often ugly because not enough effort is put into making them clear and easy to read:

    New user connected: 'Username'
    User disconnected: 'Username'
    Account created: 'Username#2'

And so on...


### With simple-fancy-log 
![Comparative demonstration of simple-fancy-log into action](./doc/fancy-logger-demo%231.png)


---------

# How to use

`simple-fancy-log` uses a main class: the `SimpleFancyLog` class.
The module exports the class, so you have to create your own instance:

This is what you will have to write in order to obtain the same log as [above](#with-simple-fancy-log) (comparative log between )

```JavaScript
const SimpleFancyLog = require("simple-fancy-log");

const logger = new SimpleFancyLog();

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

Alternatively, since the 2.1.0, you can use the following example to obtain the same result
```JavaScript
const SimpleFancyLog = require("simple-fancy-log");
const logger = new SimpleFancyLog();

// Creating re-usable tags
SimpleFancyLog.createTag({name: "connection", content: "Connection", color: "green"});
SimpleFancyLog.createTag({name: "disconnection", content: "Disconnection", color: "red"});
SimpleFancyLog.createTag({name: "account-creation", content: "New account", color: "yellow", bgColor: "magenta"});

// To write the first line
logger.addTag("connection");
logger.log("User connected: 'Username'");

// To write the second line
logger.addTag("disconnection");
logger.log("User disconnected: 'Username'");

// To write the third line
logger.addTags("account-creation", "connection");
logger.log("Account created: 'Username#2'");
```

------

# Reference

##### None of the methods are static, you always need an instance of the SimpleFancyLog class to call them

<dl>
<dt><a href="#available-colors">Available colors</a></dt>
<dd><p>List of available colors</p>
</dd>
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
<dt><a href="#findTag">findTag(toFind)</a> ⇒ <code>*</code></dt>
<dd><p>Function that looks for a given tag</p>
</dd>
<dt><a href="#createTag">createTag(newTag)</a> ⇒ <code>*</code></dt>
<dd><p>Function that creates and stores a tag</p>
</dd>
</dl>


<br />
<a name="addTag"></a>

### addTag(tag)
Function that adds a tag to the current line

**Kind**: Method of SimpleFancyLog  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| tag | <code>Object</code> |  | Object that represents the tag to add |
| tag.content | <code>String</code> |  | Content of the tag ("test" yields "[test]") |
| [tag.color] | <code>String</code> | <code>&quot;default&quot;</code> | Foreground color of the tag |
| [tag.bgColor] | <code>String</code> | <code>&quot;default&quot;</code> | Background color of the tag |


<br />
<a name="addTags"></a>

### addTags(tags)
Function that adds one or multiple _tags to the current line

**Kind**: Method of SimpleFancyLog  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| tags | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> |  | Object(s) that represents the tag(s) to add |
| tags.content | <code>String</code> |  | Content of the tag ("test" yields "[test]") |
| [tags.color] | <code>String</code> | <code>&quot;default&quot;</code> | Foreground color of the tag |
| [tags.bgColor] | <code>String</code> | <code>&quot;default&quot;</code> | Background color of the tag |


<br />
<a name="removeTag"></a>

### removeTag(tag)
Function that adds a tag to the current line

**Kind**: Method of SimpleFancyLog  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| tag | <code>Object</code> |  | Object that represents the tag to add |
| tag.content | <code>String</code> |  | Content of the tag ("test" yields "[test]") |
| [tag.color] | <code>String</code> | <code>&quot;&quot;</code> | Foreground color of the tag |
| [tag.bgColor] | <code>String</code> | <code>&quot;&quot;</code> | Background color of the tag |


<br />
<a name="removeTags"></a>

### removeTags(tags)
Function that removes one or multiple _tags from the current line

**Kind**: method of SimpleFancyLog

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| tags | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> |  | Object(s) that represents the tag(s) to remove |
| tags.content | <code>String</code> |  | Content of the tag ("test" yields "[test]") |
| [tags.color] | <code>String</code> | <code>&quot;default&quot;</code> | Foreground color of the tag |
| [tags.bgColor] | <code>String</code> | <code>&quot;default&quot;</code> | Background color of the tag |


<br />
<a name="toString"></a>

### toString() ⇒ <code>String</code>
Function that returns the string that will be logged when the log function is called

**Kind**: Method of SimpleFancyLog  
**Returns**: <code>String</code> - - String that will be logged when the log function is called  


<br />
<a name="log"></a>

### log(message)
Function that logs a message with all the set tags. This function resets the message and the tags after it is displayed

**Kind**: Method of SimpleFancyLog  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>String</code> | Message to display along with the tags |


<br />
<a name="findTag"></a>

### findTag(toFind) ⇒ <code>\*</code>
Function that looks for a given tag

**Kind**: Static method of SimpleFancyLog  
**Returns**: <code>\*</code> - - Either {} or the tag object  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| toFind | <code>Object</code> |  | Options to find the tag |
| [toFind.type] | <code>String</code> | <code>&quot;&quot;</code> | Type of the tag to find (primarily for base predefined tags) |
| [toFind.name] | <code>String</code> | <code>&quot;&quot;</code> | Name of the tag to find (for user defined tags) |


<br />
<a name="createTag"></a>

### createTag(newTag) ⇒ <code>\*</code>
Function that creates and stores a tag

**Kind**: Static method of SimpleFancyLog 
**Returns**: <code>\*</code> - - Either {} (in case of an error) or the newly created tag object  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| newTag | <code>Object</code> |  | Tag to create |
| newTag.name | <code>String</code> |  | Name of the tag to create |
| newTag.content | <code>String</code> |  | Content of the tag |
| [newTag.type] | <code>String</code> | <code>&quot;default&quot;</code> | Type (classifier) of the tag |
| [newTag.color] | <code>String</code> | <code>&quot;&quot;</code> | Color of the tag |
| [newTag.bgColor] | <code>String</code> | <code>&quot;&quot;</code> | Background color of the tag |

---

# Available colors

#### The available colors are:

| Color | Foreground (text color) | Background |
| --- | --- | --- |
| default (terminal default) | Yes | Yes |
| red | Yes | Yes |
| yellow | Yes | Yes |
| green | Yes | Yes |
| blue | Yes | Yes |
| cyan | Yes | Yes |
| white | Yes | Yes |
| black | - | Yes |
| magenta | - | Yes |

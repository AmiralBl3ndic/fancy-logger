const baseTags = [
  {
    type: "Danger",
    color: "yellow",
    bgColor: "red",
    content: "Danger"
  },

  {
    type: "Info",
    color: "cyan",
    content: "Info"
  },

  {
    type: "Debug",
    color: "blue",
    content: "Debug"
  },

  {
    type: "Success",
    color: "yellow",
    content: "Success"
  }
];

let userTags = [];




checkTagIntegrity = tag => {
  return tag.hasOwnProperty("name") && tag.hasOwnProperty("content");
};


module.exports.userTags = userTags;
module.exports.baseTags = baseTags;


/** Function that looks for a given tag
 *
 * @param {Object} toFind - Options to find the tag
 * @param {String} [toFind.type = ""] - Type of the tag to find (primarily for base predefined tags)
 * @param {String} [toFind.name = ""] - Name of the tag to find (for user defined tags)
 * @return {*} - Either {} or the tag object
 */
module.exports.findTag = toFind => {
  if (!toFind.hasOwnProperty("type") && !toFind.hasOwnProperty("name"))
    return {};

  toFind.type = toFind.hasOwnProperty("type") ? toFind.type : "";
  toFind.name = toFind.hasOwnProperty("name") ? toFind.name : "";

  if (typeof(toFind.type) !== "string" || typeof(toFind.name) !== "string")
    return {};

  // User defined tags first
  if (toFind.name !== "")
    for (let tag of userTags)
      if (toFind.name === tag.name)
        return tag;

  if (toFind.type !== "")
    for (let tag of baseTags)
      if (toFind.type === tag.type)
        return tag;

  return {};
};


/** Function that creates and stores a tag
 *
 * @param {Object} newTag - Tag to create
 * @param {String} newTag.name - Name of the tag to create
 * @param {String} newTag.content - Content of the tag
 * @param {String} [newTag.type = "default"] - Type (classifier) of the tag
 * @param {String} [newTag.color = ""] - Color of the tag
 * @param {String} [newTag.bgColor = ""] - Background color of the tag
 * @return {*} - Either {} (in case of an error) or the newly created tag object
 */
module.exports.createTag = newTag => {
  if (!checkTagIntegrity(newTag)) {
    console.error("At createTag: the newly created tag must have at least 'name' and 'content' properties");
    return {};
  }

  // Setting default values
  newTag.type = newTag.hasOwnProperty("type") ? newTag.type : "default";
  newTag.color = newTag.hasOwnProperty("color") ? newTag.color : "";
  newTag.bgColor = newTag.hasOwnProperty("bgColor") ? newTag.bgColor : "";

  // Test for existence
  for (let tag of userTags) {
    if (tag.name === newTag.name) {
      console.error("At createTag: cannot create tag with an already taken name '" + newTag.name + "'");
      return {};
    }
  }

  // Pushing the new tag to the user created tags
  userTags.push(newTag);

  return newTag;
};


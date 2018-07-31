const baseTags = [
  {
    type: "Danger",
    name: "base-danger",
    color: "white",
    bgColor: "red",
    content: "Danger"
  },

  {
    type: "Info",
    name: "base-info",
    color: "cyan",
    content: "Info"
  },

  {
    type: "Debug",
    name: "base-debug",
    color: "blue",
    content: "Debug"
  },

  {
    type: "Success",
    name: "base-success",
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


module.exports.findTag = (type = "", name = "") => {
  if (typeof(type) !== "string" || typeof(name) !== "string")
    return {};

  if (type === "" && name === "")
    return {};

  for (let tag of userTags)
    if (type === tag.type || name === tag.name)
      return tag;

  for (let tag of baseTags)
    if (type === tag.type || name === tag.name)
      return tag;

  return {};
};



module.exports.createTag = newTag => {
  if (!checkTagIntegrity(newTag))
    return;

  for (let tag of userTags)
    if (tag.name === newTag.name)
      return;
};

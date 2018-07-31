const baseTags = [
  {
    type: "Danger",
    color: "white",
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


module.exports.findTag = (type = "", name = "") => {
  if (typeof(type) !== "string" || typeof(name) !== "string")
    return {};

  if (type === "" && name === "")
    return {};

  if (type !== "")
    for (let tag of baseTags)
      if (type === tag.type)
        return tag;

  return {};
};



module.exports.createTag = newTag => {
  if (!checkTagIntegrity(newTag))
    return;

  for (let tag of userTags)
    if (tag.name === newTag.name) {
      console.error("At createTag: cannot create tag with an already taken name");
      return;
    }

};

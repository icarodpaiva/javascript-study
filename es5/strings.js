// string positions
const x = "some string"
console.log("position", x[0])
console.log("charAt", x.charAt(0))

// reserverd words in objects
const y = {
  public: "public",
  private: "private",
  new: "new",
  class: "class",
  function: "function"
}
console.log("object with reserverd words", y)

// cut white spaces
console.log("       white scpaces around       ".trimStart())
console.log("       white scpaces around       ".trimEnd())
console.log("       white scpaces around       ".trim())

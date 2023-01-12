const moveRover = require("../app");

describe(" unit test for moveRover function ", () => {
  test("check for space (start + end) of heading ", () => {
    //console.log(moveRover(4, 12, "NORTH", "FFB"));
    expect(moveRover(4, 12, " NORTH", "FFB")).toEqual("(4,13) NORTH");
  });
  test("check if heading start with (_) underscore", () => {
    expect(moveRover(4, 12, "_NORTH ", "FFB")).toEqual("(4,13) NORTH");
  });
  test("not supported commands", () => {
    const commands = "xlr";
    const result = moveRover((X = 0), (Y = 0), "NORTH", commands);
    expect(result).toEqual("not supported");
  });
});

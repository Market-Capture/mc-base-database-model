import { helloWorldInstance } from "../src/index.js";

describe("Hello World Test", () => {
  it("should say hello from the file name from which it was instantiated.", () => {
    expect(helloWorldInstance.sayHello()).toBe(
      "hello from helloWorldModel.js!"
    );
  });
});

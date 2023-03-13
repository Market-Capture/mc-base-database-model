import { helloWorldInstance } from "../src/index.js";

describe("Hello World Test", () => {
  it("should say hello from the file name from which it was instantiated.", () => {
    const fileName = helloWorldInstance.fileName;
    const say = helloWorldInstance.sayHello();

    expect(say).toBe(`hello from ${fileName}!`);
  });
});

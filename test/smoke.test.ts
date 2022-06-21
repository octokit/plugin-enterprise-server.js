import { enterpriseServer35, enterpriseServer35Admin } from "../src";

describe("Smoke test", () => {
  it("enterpriseServer35 is a function", () => {
    expect(enterpriseServer35).toBeInstanceOf(Function);
  });

  it("enterpriseServer35Admin is a function", () => {
    expect(enterpriseServer35Admin).toBeInstanceOf(Function);
  });

  it("enterpriseServer35.VERSION is set", () => {
    expect(enterpriseServer35.VERSION).toEqual("0.0.0-development");
  });

  it("enterpriseServer35Admin.VERSION is set", () => {
    expect(enterpriseServer35Admin.VERSION).toEqual("0.0.0-development");
  });
});

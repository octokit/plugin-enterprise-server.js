import { enterpriseServer219, enterpriseServer219Admin } from "../src";

describe("Smoke test", () => {
  it("enterpriseServer219 is a function", () => {
    expect(enterpriseServer219).toBeInstanceOf(Function);
  });

  it("enterpriseServer219Admin is a function", () => {
    expect(enterpriseServer219Admin).toBeInstanceOf(Function);
  });

  it("enterpriseServer219.VERSION is set", () => {
    expect(enterpriseServer219.VERSION).toEqual("0.0.0-development");
  });

  it("enterpriseServer219Admin.VERSION is set", () => {
    expect(enterpriseServer219Admin.VERSION).toEqual("0.0.0-development");
  });
});

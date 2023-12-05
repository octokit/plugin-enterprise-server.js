import { enterpriseServer38, enterpriseServer38Admin } from "../src/index.ts";

describe("Smoke test", () => {
  it("enterpriseServer35 is a function", () => {
    expect(enterpriseServer38).toBeInstanceOf(Function);
  });

  it("enterpriseServer35Admin is a function", () => {
    expect(enterpriseServer38Admin).toBeInstanceOf(Function);
  });

  it("enterpriseServer35.VERSION is set", () => {
    expect(enterpriseServer38.VERSION).toEqual("0.0.0-development");
  });

  it("enterpriseServer35Admin.VERSION is set", () => {
    expect(enterpriseServer38Admin.VERSION).toEqual("0.0.0-development");
  });
});

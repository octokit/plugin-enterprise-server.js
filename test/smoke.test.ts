import { enterpriseServer222, enterpriseServer222Admin } from "../src";

describe("Smoke test", () => {
  it("enterpriseServer222 is a function", () => {
    expect(enterpriseServer222).toBeInstanceOf(Function);
  });

  it("enterpriseServer222Admin is a function", () => {
    expect(enterpriseServer222Admin).toBeInstanceOf(Function);
  });

  it("enterpriseServer222.VERSION is set", () => {
    expect(enterpriseServer222.VERSION).toEqual("0.0.0-development");
  });

  it("enterpriseServer222Admin.VERSION is set", () => {
    expect(enterpriseServer222Admin.VERSION).toEqual("0.0.0-development");
  });
});

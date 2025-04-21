import { describe, expect, it } from "vitest";
import { enterpriseServer316, enterpriseServer316Admin } from "../src/index.ts";

describe("Smoke test", () => {
  it("enterpriseServer316 is a function", () => {
    expect(enterpriseServer316).toBeInstanceOf(Function);
  });

  it("enterpriseServer316Admin is a function", () => {
    expect(enterpriseServer316Admin).toBeInstanceOf(Function);
  });

  it("enterpriseServer316.VERSION is set", () => {
    expect(enterpriseServer316.VERSION).toEqual("0.0.0-development");
  });

  it("enterpriseServer316Admin.VERSION is set", () => {
    expect(enterpriseServer316Admin.VERSION).toEqual("0.0.0-development");
  });
});

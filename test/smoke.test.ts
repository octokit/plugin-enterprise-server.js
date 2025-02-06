import { describe, expect, it } from "vitest";
import { enterpriseServer312, enterpriseServer312Admin } from "../src/index.ts";

describe("Smoke test", () => {
  it("enterpriseServer312 is a function", () => {
    expect(enterpriseServer312).toBeInstanceOf(Function);
  });

  it("enterpriseServer312Admin is a function", () => {
    expect(enterpriseServer312Admin).toBeInstanceOf(Function);
  });

  it("enterpriseServer312.VERSION is set", () => {
    expect(enterpriseServer312.VERSION).toEqual("0.0.0-development");
  });

  it("enterpriseServer312Admin.VERSION is set", () => {
    expect(enterpriseServer312Admin.VERSION).toEqual("0.0.0-development");
  });
});

import { describe, it, expect } from "vitest";
import { getProducts, getProductById } from "./products";

describe("Products API", () => {
  it("should export getProducts function", () => {
    expect(typeof getProducts).toBe("function");
  });

  it("should export getProductById function", () => {
    expect(typeof getProductById).toBe("function");
  });
});
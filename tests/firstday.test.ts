import { describe, it, expect } from "vitest";
import { getFailedTests, getErrorMessage, type TestResult } from "../src/firstday";

describe("getFailedTests", () => {
  it("retorna solo los tests fallidos", () => {
    const results: TestResult[] = [
      { testName: "a", status: "passed", duration: 100 },
      { testName: "b", status: "failed", duration: 200, error: "timeout" },
    ];
    expect(getFailedTests(results)).toHaveLength(1);
    expect(getFailedTests(results)[0].testName).toBe("b");
  });
});

describe("getErrorMessage", () => {
  it("extrae el mensaje de un Error", () => {
    expect(getErrorMessage(new Error("falló"))).toBe("falló");
  });

  it("retorna el string directo si no es Error", () => {
    expect(getErrorMessage("mensaje simple")).toBe("mensaje simple");
  });
});
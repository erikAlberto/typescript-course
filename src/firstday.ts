export interface TestResult {
  testName: string;
  status: "passed" | "failed" | "skipped";
  duration: number;
  error?: string;
}

export function summarizeResults(results: TestResult[]): string {
  const passed = results.filter(r => r.status === "passed").length;
  const failed = results.filter(r => r.status === "failed").length;
  return `${passed} passed, ${failed} failed of ${results.length} total`;
}

// Reto: escribe una función `getFailedTests` que retorne
// solo los TestResult con status "failed", tipada correctamente

// Reto extra (narrowing): crea una función que reciba string | Error y, usando 
// instanceof, retorne siempre un string con el mensaje.

export function getFailedTests(results: TestResult[]): TestResult[]{
  let failed: TestResult[] = [];
  failed = results.filter(r => r.status === "failed");
  return failed;
}

export function getErrorMessage(input: string | Error): string{
    if (input instanceof Error){
        return input.message
    }
    return input
}
import { describe, it, expect } from "vitest";
import ApiClient from "../src/second-day"; 

interface User {
  id: number;
  first_name: string;
  email: string;
  password: string;
}

describe("ApiClient", () => {
  it("should fetch user data from the API", async () => {
    const userClient = new ApiClient<User>("https://reqres.in/api");
    const response = await userClient.get("users/2");
    expect(response.data.first_name).toBe("Janet");
  });

  it("should post user data to the API", async () => {
    const userClient = new ApiClient<User>("https://reqres.in/api");
    const response = await userClient.post("users", { first_name: "John", email: "john@test.com" });
    expect(response.data.first_name).toBe("John");
  });
});

import { describe, it, expect } from "vitest";
import { unwrapResponse, pickFields, User, type PublicUser } from "../src/testUtils";
const users: User[] = [
  { id: 1, 
    name: "Erik", 
    email: "erik@test.com", 
    password: "1234" 
  },
];

describe("pickFields", () => {
  it("returns only the specified properties of each object", () => {
    const result = pickFields(users, ["id", "name"]);
    expect(result).toEqual([{ id: 1, name: "Erik" }]);
  });
});

describe("unwrapResponse", () => {
  it("returns only the data field of the ApiResponse", () => {
    const result = unwrapResponse({ data: users, status: 200, success: true });
    console.log("EL RESULT:", result);
    expect(result).toEqual(users);
  });
});
describe("PublicUser type", () => {
  it("excludes the password property from User", () => {
    const publicUser: PublicUser = { id: 1, name: "Erik", email: "erik@test.com" };
    expect(publicUser).toEqual({ id: 1, name: "Erik", email: "erik@test.com" });
  });
});
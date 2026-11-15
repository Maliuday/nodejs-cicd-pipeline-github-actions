
const request = require("supertest");
const app = require("../app");

describe("Node.js CI/CD Application Tests", () => {
  test("GET / should return application status", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("Running");
  });

  test("GET /health should return healthy status", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("healthy");
  });

  test("POST /add should add two numbers", async () => {
    const response = await request(app)
      .post("/add")
      .send({ a: 10, b: 20 });

    expect(response.statusCode).toBe(200);
    expect(response.body.result).toBe(30);
  });

  test("POST /add should reject invalid input", async () => {
    const response = await request(app)
      .post("/add")
      .send({ a: "10", b: 20 });

    expect(response.statusCode).toBe(400);
  });
});

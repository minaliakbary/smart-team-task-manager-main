
const request = require("supertest");
const app = require("./server");

describe("Smart Task Manager API", () => {

    test("GET / should return status 200", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("success");
    });

    test("GET /tasks should return a list of tasks", async () => {
        const response = await request(app).get("/tasks");

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body).toHaveLength(2);
    });

    test("GET /unknown should return 404", async () => {
        const response = await request(app).get("/unknown");

        expect(response.statusCode).toBe(404);
    });

    test("GET /tasks should return JSON", async () => {
        const response = await request(app).get("/tasks");

        expect(response.headers["content-type"])
            .toMatch(/application\/json/);
    });

    test("Each task should have required fields", async () => {
        const response = await request(app).get("/tasks");

        expect(response.body[0]).toHaveProperty("id");
        expect(response.body[0]).toHaveProperty("title");
        expect(response.body[0]).toHaveProperty("completed");
    });

});

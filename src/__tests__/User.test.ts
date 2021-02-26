import request from 'supertest';
import { app } from '../app';

import createConnection from '../database';

describe("Users", () => {
  beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it("Should be albe to create a new user", async () => {
        const response = await request(app).post("/users").send({
            email: "user@example.com",
            name: "User Exaple"
        });

    expect(response.status).toBe(201);
    });

    it("Should not be albe to create user with exists email", async () => {
        const response = await request(app).post("/users").send({
            email: "user@example.com",
            name: "User Exaple"
        });

    expect(response.status).toBe(400);
    })
});
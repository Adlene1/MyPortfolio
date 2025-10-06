/**
 * Unit tests for the contact API route
 * Tests validation and error handling
 */

import { POST } from "@/app/api/contact/route"
import { NextRequest } from "next/server"

describe("/api/contact", () => {
  it("should return 400 if required fields are missing", async () => {
    const request = new NextRequest("http://localhost:3000/api/contact", {
      method: "POST",
      body: JSON.stringify({ name: "Test" }),
    })

    const response = await POST(request)
    expect(response.status).toBe(400)
  })

  it("should return 400 if email is invalid", async () => {
    const request = new NextRequest("http://localhost:3000/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: "Test User",
        email: "invalid-email",
        message: "Test message",
      }),
    })

    const response = await POST(request)
    expect(response.status).toBe(400)
  })

  it("should return 200 with valid data", async () => {
    const request = new NextRequest("http://localhost:3000/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: "Test User",
        email: "test@example.com",
        message: "This is a test message",
      }),
    })

    const response = await POST(request)
    expect(response.status).toBe(200)
  })
})

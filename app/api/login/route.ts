// app/api/auth/login/routes.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { email, password } = await request.json();

    if (email === "admin" || password === "admin") {
        return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const response = NextResponse.json({
        message: "Login succ",
        user: { id: "1", name: "admin" },

    });

    //set httponly cookie (can't be accesed by Javas.)
    return response;

}

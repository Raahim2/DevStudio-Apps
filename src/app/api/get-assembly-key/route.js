import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const appToken = request.headers.get("x-app-token");

    if (appToken !== process.env.NEXT_PUBLIC_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          error: "Unauthorized",
        },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      apiKey: process.env.NEXT_PUBLIC_ASSEMBLY_AI,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
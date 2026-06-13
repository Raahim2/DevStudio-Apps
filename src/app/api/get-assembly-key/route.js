import { NextResponse } from "next/server";

// Define the CORS headers to use across both GET and OPTIONS responses
const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // Allows any origin (crucial for local development)
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, x-app-token", // Explicitly allow your custom header
};

// 1. Handle the browser's preflight OPTIONS request
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}

// 2. Handle your normal GET request with CORS headers appended
export async function GET(request) {
  try {
    const appToken = request.headers.get("x-app-token");

    if (appToken !== process.env.NEXT_PUBLIC_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          error: "Unauthorized",
        },
        { 
          status: 401, 
          headers: corsHeaders // Make sure CORS headers are sent on error responses too
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        apiKey: process.env.NEXT_PUBLIC_ASSEMBLY_AI,
      },
      { 
        status: 200, 
        headers: corsHeaders 
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
      },
      { 
        status: 500, 
        headers: corsHeaders 
      }
    );
  }
}
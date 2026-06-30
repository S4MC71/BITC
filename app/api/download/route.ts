import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const file = searchParams.get("file");

  if (!file) {
    return new Response("Missing file parameter", { status: 400 });
  }

  // Prevent directory traversal attacks
  const cleanFile = file.replace(/[\/\\]/g, "").trim();
  if (!cleanFile || cleanFile.includes("..")) {
    return new Response("Invalid file path", { status: 400 });
  }

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "https://api.bitc.edu.bd";
  const fileUrl = `${backendUrl}/uploads/notices/${cleanFile}`;

  try {
    const response = await fetch(fileUrl, {
      method: "GET",
    });

    if (!response.ok) {
      return new Response("File not found", { status: 404 });
    }

    const blob = await response.blob();
    const headers = new Headers();
    
    // Pass original content type or default to pdf
    headers.set("Content-Type", response.headers.get("Content-Type") || "application/pdf");
    headers.set("Content-Disposition", `attachment; filename="${cleanFile}"`);

    return new NextResponse(blob, {
      status: 200,
      headers,
    });
  } catch (err: any) {
    return new Response("Error fetching file", { status: 500 });
  }
}

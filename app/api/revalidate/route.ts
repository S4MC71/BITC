import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");

  // Verify secret token to prevent unauthorized cache busting
  if (secret !== process.env.REVALIDATION_SECRET && secret !== "bitc_revalidate_token_2026") {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    // Clear and rebuild notices pages cache
    revalidatePath("/notices/bitc");
    revalidatePath("/notices/nu");
    revalidatePath("/");
    
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err: any) {
    return NextResponse.json({ message: "Error revalidating", error: err.message }, { status: 500 });
  }
}

import { NextResponse } from "next/server";

import prisma from "@/lib/prismadb";

export async function GET(req: Request) {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(users);
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({ status: "fail", message: error.message }),
      { status: 401 }
    );
  }
}
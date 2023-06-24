import { NextResponse } from "next/server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

import prisma from "@/lib/prismadb";

export async function POST(
  req: Request,
  { params }: { params: { postId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new NextResponse(
        JSON.stringify({ status: "fail", message: "You are not logged in" }),
        { status: 401 }
      );
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user?.email!,
      },
      select: {
        id: true,
      },
    });
    const postId = params.postId;
    const { body } = (await req.json()) as {
      body: string;
    };

    if (!postId || typeof postId !== "string") {
      return new NextResponse(
        JSON.stringify({
          status: "fail",
          message: "Invalid Post ID",
        }),
        { status: 400 }
      );
    }

    const comment = await prisma.comment.create({
      data: {
        body: body,
        userId: currentUser!.id,
        postId,
      },
    });

    return NextResponse.json(comment);
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "fail",
        message: error.message,
      }),
      { status: 400 }
    );
  }
}

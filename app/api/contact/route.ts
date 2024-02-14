import { NextRequest, NextResponse } from "next/server";

const POST = async (request: NextRequest) => {
  const { content } = await request.json();

  //dbに送信する処理をここに書く
  console.log(content);

  return NextResponse.json({}, { status: 200 });
};

export { POST };

import { NextResponse } from "next/server";

type ContactPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const targetEmail = "Fkratec@gmail.com";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!body.fullName || !body.email || !body.message || !emailRegex.test(body.email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid input." },
        { status: 400 },
      );
    }

    // This is a server-safe placeholder hook.
    // To enable real email sending, wire this payload to Resend, Nodemailer, or SES.
    console.log("New contact inquiry", {
      to: targetEmail,
      fromName: body.fullName,
      fromEmail: body.email,
      phone: body.phone ?? "",
      message: body.message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Server error." },
      { status: 500 },
    );
  }
}

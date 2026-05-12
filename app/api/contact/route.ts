import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const targetEmail = process.env.CONTACT_TO_EMAIL ?? "Fkratec@gmail.com";
const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "FkraTec Website <onboarding@resend.dev>";
const resendApiKey = process.env.RESEND_API_KEY;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

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

    if (!resendApiKey) {
      return NextResponse.json(
        { ok: false, error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const fullName = body.fullName.trim();
    const email = body.email.trim().toLowerCase();
    const phone = body.phone?.trim() || "Not provided";
    const message = body.message.trim();
    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: fromEmail,
      to: targetEmail,
      replyTo: email,
      subject: `New FkraTec inquiry from ${fullName}`,
      text: [
        "New contact inquiry from FkraTec landing page",
        "",
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
          <h2 style="margin:0 0 16px">New FkraTec inquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Message:</strong></p>
          <div style="white-space:pre-wrap;border-left:4px solid #14b8a6;padding:12px 16px;background:#f8fafc;border-radius:12px">${escapeHtml(message)}</div>
        </div>
      `,
      headers: {
        "X-Entity-Ref-ID": crypto.randomUUID(),
      },
    });

    console.log("New contact inquiry sent", {
      to: targetEmail,
      fromName: fullName,
      fromEmail: email,
      phone,
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

import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

const CLIENT_ID = process.env.GMAIL_CLIENT_ID!;
const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET!;
const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN!;
const REDIRECT_URI = "https://developers.google.com/oauthplayground";

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, subject, message, files } = await req.json();
    const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

    // ---------- สร้าง multipart MIME ----------
    const boundary = "boundary_" + new Date().getTime();

    let mimeParts = `
--${boundary}
Content-Type: text/html; charset="UTF-8"

<p><b>Dear</b> Mr.Piphat Upachatai,</p>
<p>${message.replace(/\n/g, "<br/>")}</p>
<p>
<b>From,</b><br/>
${name}<br/>
<b>Email:</b> ${email}<br/>
<b>Phone:</b> ${phone}
</p>
`;

    // เพิ่มไฟล์แนบ ถ้ามี
    if (files && Array.isArray(files)) {
      for (const file of files) {
        mimeParts += `
--${boundary}
Content-Type: ${file.mimeType}; name="${file.name}"
Content-Disposition: attachment; filename="${file.name}"
Content-Transfer-Encoding: base64

${file.contentBase64}
`;
      }
    }

    mimeParts += `\n--${boundary}--`;

    const emailLines = [
      `From: Portfolio <me>`,
      `To: Piphat.Upachatai@gmail.com`,
      `Subject: =?UTF-8?B?${Buffer.from(subject).toString("base64")}?=`,
      `MIME-Version: 1.0`,
      `Content-Type: multipart/mixed; boundary="${boundary}"`,
      ``,
      mimeParts,
    ];

    const emailBody = emailLines.join("\n");

    const encodedEmail = Buffer.from(emailBody)
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

    await gmail.users.messages.send({
      userId: "me",
      requestBody: {
        raw: encodedEmail,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Send email error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}

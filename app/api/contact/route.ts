import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, message, website } = body;

    // Honeypot check
    if (website) {
      return NextResponse.json({ success: true });
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const serviceLabels: Record<string, string> = {
      "business-loans": "Business Loans",
      "line-of-credit": "Line of Credit",
      "working-capital": "Working Capital",
      "sba-loans": "SBA Loans",
      "equipment-financing": "Equipment Financing",
      "real-estate": "Real Estate Financing",
      "ach-processing": "ACH Processing",
      echeck: "e-Checks",
      ecommerce: "E-commerce Payments",
      other: "Other",
    };

    const serviceName = service ? serviceLabels[service] || service : "Not specified";
    const date = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZone: "America/New_York",
    });

    await resend.emails.send({
      from: `Goldman Financial <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
      to: process.env.CONTACT_RECIPIENT!,
      replyTo: email,
      subject: `New Inquiry from ${name}${company ? ` — ${company}` : ""}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f1f5f9; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; width: 100%;">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); padding: 40px 48px 32px; border-radius: 16px 16px 0 0;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <h1 style="margin: 0 0 4px; font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: -0.02em;">GOLDMAN</h1>
                    <p style="margin: 0; font-size: 11px; font-weight: 500; color: #94A3B8; letter-spacing: 0.25em; text-transform: uppercase;">Financial</p>
                  </td>
                  <td align="right" valign="top">
                    <span style="display: inline-block; background-color: #046BD2; color: #ffffff; font-size: 11px; font-weight: 600; padding: 6px 14px; border-radius: 20px; letter-spacing: 0.03em;">NEW LEAD</span>
                  </td>
                </tr>
              </table>
              <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 24px 0 20px;">
              <p style="margin: 0; font-size: 13px; color: #64748B;">${date} EST</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color: #ffffff; padding: 0;">

              <!-- Contact Summary -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="padding: 36px 48px 28px;">
                <tr>
                  <td>
                    <p style="margin: 0 0 6px; font-size: 11px; font-weight: 600; color: #046BD2; text-transform: uppercase; letter-spacing: 0.1em;">Contact Details</p>
                    <h2 style="margin: 0 0 4px; font-size: 24px; font-weight: 700; color: #0F172A; letter-spacing: -0.02em;">${name}</h2>
                    ${company ? `<p style="margin: 0; font-size: 15px; color: #475569; font-weight: 500;">${company}</p>` : ""}
                  </td>
                </tr>
              </table>

              <!-- Contact Info Cards -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="padding: 0 48px 32px;">
                <tr>
                  <td style="padding-right: 8px;" width="50%">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #F8FAFC; border-radius: 10px; border: 1px solid #E2E8F0;">
                      <tr>
                        <td style="padding: 16px 18px;">
                          <p style="margin: 0 0 4px; font-size: 10px; font-weight: 600; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.08em;">Email</p>
                          <a href="mailto:${email}" style="font-size: 14px; color: #046BD2; text-decoration: none; font-weight: 500;">${email}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td style="padding-left: 8px;" width="50%">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #F8FAFC; border-radius: 10px; border: 1px solid #E2E8F0;">
                      <tr>
                        <td style="padding: 16px 18px;">
                          <p style="margin: 0 0 4px; font-size: 10px; font-weight: 600; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.08em;">Phone</p>
                          <p style="margin: 0; font-size: 14px; color: #0F172A; font-weight: 500;">${phone || "Not provided"}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="padding: 0 48px;">
                <tr><td style="border-top: 1px solid #E2E8F0;"></td></tr>
              </table>

              <!-- Service Interest -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="padding: 28px 48px;">
                <tr>
                  <td>
                    <p style="margin: 0 0 8px; font-size: 10px; font-weight: 600; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.08em;">Service Interested In</p>
                    <span style="display: inline-block; background: linear-gradient(135deg, #046BD2 0%, #0355A8 100%); color: #ffffff; font-size: 13px; font-weight: 600; padding: 8px 20px; border-radius: 8px;">${serviceName}</span>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="padding: 0 48px;">
                <tr><td style="border-top: 1px solid #E2E8F0;"></td></tr>
              </table>

              <!-- Message -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="padding: 28px 48px 40px;">
                <tr>
                  <td>
                    <p style="margin: 0 0 12px; font-size: 10px; font-weight: 600; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.08em;">Message</p>
                    <div style="background-color: #F8FAFC; border-left: 3px solid #046BD2; border-radius: 0 10px 10px 0; padding: 20px 24px;">
                      <p style="margin: 0; font-size: 15px; color: #1E293B; line-height: 1.7; white-space: pre-wrap;">${message}</p>
                    </div>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="padding: 0 48px 40px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #046BD2 0%, #0355A8 100%); color: #ffffff; font-size: 14px; font-weight: 600; padding: 14px 40px; border-radius: 10px; text-decoration: none; letter-spacing: 0.02em;">Reply to ${name.split(" ")[0]}</a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #0F172A; padding: 32px 48px; border-radius: 0 0 16px 16px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <p style="margin: 0 0 2px; font-size: 14px; font-weight: 700; color: #ffffff; letter-spacing: -0.01em;">Goldman Financial</p>
                    <p style="margin: 0; font-size: 12px; color: #64748B; line-height: 1.6;">777 Brickell Ave, Suite 500<br>Miami, FL 33131</p>
                  </td>
                  <td align="right" valign="top">
                    <a href="tel:+18889590331" style="font-size: 13px; color: #046BD2; text-decoration: none; font-weight: 500;">(888) 959-0331</a><br>
                    <a href="https://gogoldman.com" style="font-size: 13px; color: #64748B; text-decoration: none;">gogoldman.com</a>
                  </td>
                </tr>
              </table>
              <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.06); margin: 20px 0 16px;">
              <p style="margin: 0; font-size: 11px; color: #475569; text-align: center;">This message was sent from the Goldman Financial website contact form.<br>Do not forward this email — it may contain sensitive contact information.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Unknown error";
    console.error("Contact form error:", errMsg, error);
    return NextResponse.json(
      { error: `Failed to send message: ${errMsg}` },
      { status: 500 }
    );
  }
}

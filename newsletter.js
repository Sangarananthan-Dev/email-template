import { Resend } from "resend";

const resend = new Resend("re_DoKy812N_FdpZ35aSQypyu913EUg9uzM9");

const IMAGE_BASE_URL =
  "https://kdrcoacnxpdhsekzbmjn.supabase.co/storage/v1/object/public/midfin360/temp/";

const ASSETS = {
  logo: `${IMAGE_BASE_URL}logo.png`,
  card1: `${IMAGE_BASE_URL}1.png`,
  card2: `${IMAGE_BASE_URL}2.png`,
  card3: `${IMAGE_BASE_URL}3.png`,
  card4: `${IMAGE_BASE_URL}4.png`,
  roadAhead: `${IMAGE_BASE_URL}5.png`,
  footerPhone: `${IMAGE_BASE_URL}footer.png`,
};

const CARD_LINKS = {
  card1: "https://www.midfin360.com/qr/index.html",
  card2:
    "https://www.midfin360.com/media-and-presence/a-giant-leap-for-tamil-nadu%E2%80%99s-fintech-ecosystem:-fintech-tower-inaugurated-at-fintech-city?id=95113c24-934e-4540-b9d3-27dcf91dee71",
  card3: "https://www.midfin360.com/specialized-investment-funds",
  card4: "https://www.midfin360.com/fixed-deposit",
};

function generateNewsletterEmail() {
  return `
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>midfin360 Newsletter – March 2026</title>
  <!--[if mso]>
  <noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
  <![endif]-->
  <style>
    body, table, td, p, a, li, blockquote { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; }
    img { -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; display: block; }

    @media only screen and (max-width: 560px) {
      .email-wrapper  { width: 100% !important; }
      .content-pad    { padding: 24px 16px !important; }
      .hero-pad       { padding: 28px 16px 20px !important; }
      .headline       { font-size: 22px !important; line-height: 1.3 !important; }
      .card-img       { width: 100% !important; height: auto !important; border-radius: 12px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#ffffff;">

<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#ffffff;">
  <tr>
    <td align="center" style="padding:24px 0 32px;">

      <table class="email-wrapper" cellpadding="0" cellspacing="0" border="0" width="560" bgcolor="#ffffff"
             style="max-width:560px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- ── HEADER ── -->
        <tr>
          <td bgcolor="#ffffff" style="background-color:#ffffff;padding:20px 28px 16px;border-bottom:1px solid #eef1f5;">
            <img src="${ASSETS.logo}" alt="midfin360" width="130" height="auto" style="display:block;">
          </td>
        </tr>

        <!-- ── HERO ── -->
        <tr>
          <td class="hero-pad" style="padding:36px 28px 24px;background-color:#ffffff;">
            <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:13px;color:#64748b;letter-spacing:0.3px;">
              Milestones &amp; Updates
            </p>
            <h1 class="headline"
                style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:26px;font-weight:700;color:#0f172a;line-height:1.35;">
              Milestones. Momentum.<br>More Opportunities for Investors.
            </h1>
            <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#475569;line-height:1.65;">
              The journey of <strong>midfin360</strong> continues to gain momentum as we build one of India's most
              trusted digital investment platforms. Here are some exciting updates from our ecosystem.
            </p>
          </td>
        </tr>

        <!-- ── DIVIDER ── -->
        <tr>
          <td style="padding:0 28px;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr><td style="border-top:1px solid #eef1f5;font-size:0;line-height:0;">&nbsp;</td></tr>
            </table>
          </td>
        </tr>

        <!-- ── SECTION 1 – 100K App Installs ── -->
        <tr>
          <td class="content-pad" style="padding:28px 28px 0;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:14px;">
              <tr>
                <td valign="middle" style="width:12px;">
                  <div style="width:10px;height:10px;border-radius:50%;background-color:#6366f1;border:2px solid #c7d2fe;"></div>
                </td>
                <td style="padding-left:8px;">
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#94a3b8;text-transform:uppercase;letter-spacing:0.8px;">In Playstore</p>
                  <p style="margin:2px 0 0;font-family:Arial,sans-serif;font-size:13px;font-weight:700;color:#6366f1;">100,000+ App Installs</p>
                </td>
              </tr>
            </table>
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td>
                  <a href="${CARD_LINKS.card1}" target="_blank" style="text-decoration:none;">
                    <img class="card-img" src="${ASSETS.card1}" alt="100K App Installs"
                         width="504" height="auto"
                         style="display:block;width:100%;height:auto;border-radius:12px;">
                  </a>
                </td>
              </tr>
            </table>
            <p style="margin:16px 0 0;font-family:Arial,sans-serif;font-size:14px;color:#475569;line-height:1.65;">
              We are thrilled to announce that midfin360 has crossed <strong>100K app installs</strong>.
              This milestone reflects the growing trust investors place in our platform for discovering
              smarter financial opportunities. Every download represents a step toward making investments
              more accessible, transparent, and rewarding. Thank you to our community for being part of
              this journey.
            </p>
          </td>
        </tr>

        <!-- ── SECTION 2 – Fintech Towers ── -->
        <tr>
          <td class="content-pad" style="padding:28px 28px 0;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:14px;">
              <tr>
                <td valign="middle" style="width:12px;">
                  <div style="width:10px;height:10px;border-radius:50%;background-color:#10b981;border:2px solid #a7f3d0;"></div>
                </td>
                <td style="padding-left:8px;">
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#94a3b8;text-transform:uppercase;letter-spacing:0.8px;">midfin360 at</p>
                  <p style="margin:2px 0 0;font-family:Arial,sans-serif;font-size:13px;font-weight:700;color:#10b981;">Fintech Towers</p>
                </td>
              </tr>
            </table>
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td>
                  <a href="${CARD_LINKS.card2}" target="_blank" style="text-decoration:none;">
                    <img class="card-img" src="${ASSETS.card2}" alt="midfin360 at Fintech Towers Chennai"
                         width="504" height="auto"
                         style="display:block;width:100%;height:auto;border-radius:12px;">
                  </a>
                </td>
              </tr>
            </table>
            <p style="margin:16px 0 0;font-family:Arial,sans-serif;font-size:14px;color:#475569;line-height:1.65;">
              In a major recognition for our mission, the Government of Tamil Nadu has
              <strong>allocated space for midfin360</strong> at the Fintech Towers in Chennai.
              This initiative aims to nurture innovative financial technology companies and strengthen
              Tamil Nadu's position as a leading fintech hub in India. Being part of this ecosystem
              will allow midfin360 to collaborate, innovate, and accelerate financial inclusion.
            </p>
          </td>
        </tr>

        <!-- ── SECTION 3 – SIF Distributor ── -->
        <tr>
          <td class="content-pad" style="padding:28px 28px 0;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:14px;">
              <tr>
                <td valign="middle" style="width:12px;">
                  <div style="width:10px;height:10px;border-radius:50%;background-color:#f97316;border:2px solid #fed7aa;"></div>
                </td>
                <td style="padding-left:8px;">
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#94a3b8;text-transform:uppercase;letter-spacing:0.8px;">midfin360 is the</p>
                  <p style="margin:2px 0 0;font-family:Arial,sans-serif;font-size:13px;font-weight:700;color:#f97316;">India's First Digital SIF Distributor</p>
                </td>
              </tr>
            </table>
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td>
                  <a href="${CARD_LINKS.card3}" target="_blank" style="text-decoration:none;">
                    <img class="card-img" src="${ASSETS.card3}" alt="India's First Digital SIF Distributor"
                         width="504" height="auto"
                         style="display:block;width:100%;height:auto;border-radius:12px;">
                  </a>
                </td>
              </tr>
            </table>
            <p style="margin:16px 0 0;font-family:Arial,sans-serif;font-size:14px;color:#475569;line-height:1.65;">
              midfin360 is proud to become <strong>India's first Specialised Investment Fund (SIF)
              distributor</strong> approved by Securities and Exchange Board of India. This approval
              reinforces our commitment to regulatory compliance and investor protection while enabling
              us to bring sophisticated investment opportunities to our users.
            </p>
          </td>
        </tr>

        <!-- ── SECTION 4 – Fixed Deposits ── -->
        <tr>
          <td class="content-pad" style="padding:28px 28px 0;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:14px;">
              <tr>
                <td valign="middle" style="width:12px;">
                  <div style="width:10px;height:10px;border-radius:50%;background-color:#3b82f6;border:2px solid #bfdbfe;"></div>
                </td>
                <td style="padding-left:8px;">
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#94a3b8;text-transform:uppercase;letter-spacing:0.8px;">Launching Soon</p>
                  <p style="margin:2px 0 0;font-family:Arial,sans-serif;font-size:13px;font-weight:700;color:#3b82f6;">Fixed Deposits on midfin360</p>
                </td>
              </tr>
            </table>
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td>
                  <a href="${CARD_LINKS.card4}" target="_blank" style="text-decoration:none;">
                    <img class="card-img" src="${ASSETS.card4}" alt="Fixed Deposits on midfin360"
                         width="504" height="auto"
                         style="display:block;width:100%;height:auto;border-radius:12px;">
                  </a>
                </td>
              </tr>
            </table>
            <p style="margin:16px 0 0;font-family:Arial,sans-serif;font-size:14px;color:#475569;line-height:1.65;">
              We are excited to introduce Fixed Deposits on midfin360, offering investors a secure
              way to grow their savings.<br><br>
              <strong>Key benefits:</strong>
            </p>
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top:10px;">
              <tr>
                <td style="padding:4px 0;font-family:Arial,sans-serif;font-size:14px;color:#475569;">
                  &#8226;&nbsp; Earn returns up to <strong style="color:#16a34a;">8.82%</strong>
                </td>
              </tr>
              <tr>
                <td style="padding:4px 0;font-family:Arial,sans-serif;font-size:14px;color:#475569;">
                  &#8226;&nbsp; Annual yield up to <strong style="color:#16a34a;">9.87%</strong>
                </td>
              </tr>
              <tr>
                <td style="padding:4px 0;font-family:Arial,sans-serif;font-size:14px;color:#475569;">
                  &#8226;&nbsp; Simple and seamless digital investing experience
                </td>
              </tr>
            </table>
            <p style="margin:12px 0 0;font-family:Arial,sans-serif;font-size:14px;color:#475569;line-height:1.65;">
              This launch is part of our broader vision to make midfin360 a one-stop investment
              platform for every Indian investor.
            </p>
          </td>
        </tr>

        <!-- ── ROAD AHEAD ── -->
        <tr>
          <td style="padding:28px 28px 0;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td>
                  <img class="card-img" src="${ASSETS.roadAhead}" alt="The Road Ahead"
                       width="504" height="auto"
                       style="display:block;width:100%;height:auto;border-radius:14px;">
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- ── SOCIAL + FOOTER ── -->
        <tr>
          <td style="padding:24px 28px 28px;background-color:#ffffff;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:14px;">
              <tr>
                <td align="center" style="padding-bottom:4px;">
                  <a href="https://www.facebook.com/share/19WH7Td9hG" style="text-decoration:none;margin:0 8px;">
                    <img src="https://midfin360-assets.s3.ap-south-1.amazonaws.com/images/amc/facebook.png"
                         alt="Facebook" width="28" height="28" style="display:inline-block;border:0;">
                  </a>
                  <a href="https://x.com/midfin360?s=08" style="text-decoration:none;margin:0 8px;">
                    <img src="https://midfin360-assets.s3.ap-south-1.amazonaws.com/images/amc/x.png"
                         alt="X (Twitter)" width="28" height="28" style="display:inline-block;border:0;">
                  </a>
                  <a href="https://www.linkedin.com/company/midfin-wealth" style="text-decoration:none;margin:0 8px;">
                    <img src="https://midfin360-assets.s3.ap-south-1.amazonaws.com/images/amc/linkedIn.png"
                         alt="LinkedIn" width="28" height="28" style="display:inline-block;border:0;">
                  </a>
                  <a href="https://www.instagram.com/midfin360?igsh=NnFiZGZqMG8yeWhx" style="text-decoration:none;margin:0 8px;">
                    <img src="https://midfin360-assets.s3.ap-south-1.amazonaws.com/images/amc/insta.png"
                         alt="Instagram" width="28" height="28" style="display:inline-block;border:0;">
                  </a>
                </td>
              </tr>
            </table>
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:8px;">
              <tr>
                <td align="center">
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:#64748b;">
                    <a href="https://midfin360.com/privacy" style="color:#64748b;text-decoration:none;">Privacy Policy</a>
                    &nbsp;|&nbsp;
                    <a href="https://midfin360.com/terms" style="color:#64748b;text-decoration:none;">Terms of Service</a>
                  </p>
                </td>
              </tr>
            </table>
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td align="center">
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#94a3b8;line-height:1.5;">
                    &copy; 2026 midfin360. All rights reserved.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

      </table>

    </td>
  </tr>
</table>

</body>
</html>
  `;
}

async function sendNewsletterEmail(recipientEmail) {
  try {
    const emailHtml = generateNewsletterEmail();
    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: recipientEmail,
      subject: "Milestones. Momentum. More Opportunities for Investors. 🚀",
      html: emailHtml,
    });
    console.log("Newsletter sent successfully:", result);
    return result;
  } catch (error) {
    console.error("Error sending newsletter:", error);
    throw error;
  }
}

// Send test email
sendNewsletterEmail("sangarcool20@gmail.com");

export { generateNewsletterEmail, sendNewsletterEmail };

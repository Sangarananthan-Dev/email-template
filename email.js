import { Resend } from "resend";

const resend = new Resend("re_DoKy812N_FdpZ35aSQypyu913EUg9uzM9");

function generateVerificationEmail(verificationCode, expirationMinutes = 10) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Verification Code</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f8fafc; color: #1e293b;">
  
  <!-- Main Container -->
  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:rgb(255, 255, 255);">
    <tr>
      <td align="center">
        
        <!-- Email Container -->
        <table cellpadding="0" cellspacing="0" border="0" width="520" style="max-width: 520px; background-color:rgb(251, 253, 255); border: 1px solid #e2e8f0;">
          
          <!-- Header with Background Image -->
          <tr>
            <td align="center" style="background-image: url('https://pvuvzoyhqkgjfgxwtoyo.supabase.co/storage/v1/object/public/career-course/Category/midfin_background.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat; padding: 32px 40px 24px; position: relative;">
              <a href="https://midfin360.com" style="text-decoration: none;">
                <img src="https://pvuvzoyhqkgjfgxwtoyo.supabase.co/storage/v1/object/public/career-course/Category/midfin360.png" 
                     alt="Midfin360" 
                     width="160" 
                     height="auto" 
                     style="display: block; border: 0; max-width: 160px;">
              </a>
            </td>
          </tr>
          
          <!-- Decorative Top -->
          <tr>
            <td style="background-color: #f35320; height: 4px; line-height: 4px; font-size: 1px;">&nbsp;</td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 20px; background-color: #ffffff;">
              
              <!-- Title -->
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td align="left" style="padding-bottom: 16px;">
                    <h1 style="margin: 0; font-family: Arial, sans-serif; font-size: 28px; font-weight: bold; color: #0f172a; line-height: 1.4; margin: auto;">
                      Verification OTP
                    </h1>
                  </td>
                </tr>
              </table>

              <!-- Instructions -->
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td align="justify" style="padding-bottom: 24px;">
                    <p style="margin: 0; font-family: Arial, sans-serif; font-size: 14px; color: #475569; line-height: 1.5; max-width: 500px;">
                      <span>Thank you for choosing Midfin360</span>. To complete your email address verification, please use the OTP code provided above. This code will expire in <span>${expirationMinutes} minutes</span>, so please use it promptly.
                    </p>
                  </td>
                </tr>
              </table>
              
              <!-- OTP Section -->
              <table cellpadding="0" cellspacing="0" border="0" width="80%" align="center">
                <tr>
                  <td align="center" style="padding-bottom: 20px;">
                    
                    <!-- OTP Container -->
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td align="center" style="padding-bottom: 8px;">
                          <div style="background-color: #f35320; color: #ffffff; font-family: Arial, sans-serif; font-size: 32px; letter-spacing: 3px; padding: 10px 24px; border-radius: 8px; display: inline-block;">
                            ${verificationCode}
                          </div>
                        </td>
                      </tr>
                    </table>
                    
                  </td>
                </tr>
              </table>

              <!-- Instructions -->
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td align="justify" style="padding-bottom: 24px;">
                    <p style="color: #64748b; margin: 0; font-family: Arial, sans-serif; font-size: 14px; line-height: 1.5; max-width: 500px;">
                      For your security, do not share this code with anyone. including the Midfin360 team.
                    </p>
                  </td>
                </tr>
              </table>
              
              <!-- Support Link -->
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td align="center" style="padding-bottom: 0px;">
                    <p style="margin: 0; font-family: Arial, sans-serif; font-size: 13px; color: #64748b;">
                      Need help? Ask at <a href="mailto:support@midfin360.com" style="color:rgb(133, 177, 254); text-decoration: none; font-weight: normal;">help@midfin360.com</a> to visit our <a href="mailto:support@midfin360.com" style="color:rgb(133, 177, 254); text-decoration: none; font-weight: normal;">help center</a>.
                    </p>
                  </td>
                </tr>
              </table>
              
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td align="center" style="background-color: #f8fafc; padding: 25px 40px; border-top: 1px solid #e2e8f0;">
              
              <!-- Social Links -->
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td align="center" style="padding-bottom: 4px;">
                    <a href="https://www.facebook.com/share/19WH7Td9hG" style="text-decoration: none; margin: 0 8px;">
                      <img src="https://pvuvzoyhqkgjfgxwtoyo.supabase.co/storage/v1/object/public/career-course/Category/facebook.png" 
                           alt="Facebook" 
                           width="28" 
                           height="28" 
                           style="display: inline-block; border: 0;">
                    </a>
                    <a href="https://x.com/midfin360?s=08" style="text-decoration: none; margin: 0 8px;">
                      <img src="https://pvuvzoyhqkgjfgxwtoyo.supabase.co/storage/v1/object/public/career-course/Category/x.png" 
                           alt="X (Twitter)" 
                           width="28" 
                           height="28" 
                           style="display: inline-block; border: 0;">
                    </a>
                    <a href="https://www.linkedin.com/company/midfin-wealth" style="text-decoration: none; margin: 0 8px;">
                      <img src="https://pvuvzoyhqkgjfgxwtoyo.supabase.co/storage/v1/object/public/career-course/Category/linkedIn.png" 
                           alt="LinkedIn" 
                           width="28" 
                           height="28" 
                           style="display: inline-block; border: 0;">
                    </a>
                    <a href="https://www.instagram.com/midfin360?igsh=NnFiZGZqMG8yeWhx" style="text-decoration: none; margin: 0 8px;">
                      <img src="https://pvuvzoyhqkgjfgxwtoyo.supabase.co/storage/v1/object/public/career-course/Category/insta.png" 
                           alt="Instagram" 
                           width="28" 
                           height="28" 
                           style="display: inline-block; border: 0;">
                    </a>
                  </td>
                </tr>
              </table>
              
              <!-- Footer Links -->
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td align="center" style="padding-bottom: 6px;">
                    <p style="margin: 0; font-family: Arial, sans-serif; font-size: 12px; color: #64748b;">
                      <a href="https://midfin360.com/privacy" style="color: #64748b; text-decoration: none;">Privacy Policy</a> | 
                      <a href="https://midfin360.com/terms" style="color: #64748b; text-decoration: none;">Terms of Service</a> 
                    </p>
                  </td>
                </tr>
              </table>
              
              <!-- Company Info -->
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td align="center">
                    <p style="margin: 0; font-family: Arial, sans-serif; font-size: 11px; color: #94a3b8; line-height: 1.4;">
                      © 2024 Midfin360. All rights reserved.<br>
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

async function sendVerificationEmail(recipientEmail, verificationCode) {
  try {
    const emailHtml = generateVerificationEmail(verificationCode, 10);
    const result = await resend.emails.send({
      from: "onboarding@resend.dev", // Replace with your verified domain
      to: recipientEmail,
      subject: "Verify Your Midfin360 Account - Action Required",
      html: emailHtml,
    });
    console.log("Email sent successfully:", result);
    return result;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

// Example usage
sendVerificationEmail("sangarcool20@gmail.com", "743920");

export { generateVerificationEmail, sendVerificationEmail };

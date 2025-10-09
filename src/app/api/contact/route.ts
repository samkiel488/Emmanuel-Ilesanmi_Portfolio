import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "All fields are required." }), { status: 400 });
    }

    // Resend requires a verified from domain (use onboarding@resend.dev for testing)
    const response = await resend.emails.send({
      from: 'Emmanuel Portfolio <onboarding@resend.dev>', // Resend’s verified sandbox sender
      to: process.env.TO_EMAIL!,                          // Your target inbox (from .env.local)
      subject: `New message from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h3>📬 New Portfolio Contact Message</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    // Log and return success confirmation
    console.log("Resend response:", response);

    if (response.error) {
      console.error("Resend API Error:", response.error);
      return new Response(JSON.stringify({ error: "Resend failed to deliver email." }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}

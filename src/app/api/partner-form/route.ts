import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, org, affiliation, type, more } = body;

    // Create a transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GOOGLE_MAIL,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GOOGLE_MAIL,
      to: process.env.GOOGLE_MAIL,
      subject: `New Partner Form Submission from ${name}`,
      text: `
        New Partner Form Submission:
        
        Name: ${name}
        Email: ${email}
        Organisation / Company: ${org}
        Your Affiliation: ${affiliation}
        What kind of partnership are you exploring?: ${type}
        
        Tell us more details:
        ${more}
      `,
      html: `
        <h2>New Partner Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organisation / Company:</strong> ${org}</p>
        <p><strong>Your Affiliation:</strong> ${affiliation}</p>
        <p><strong>What kind of partnership are you exploring?:</strong> ${type}</p>
        <br/>
        <p><strong>Tell us more details:</strong></p>
        <p>${more.replace(/\n/g, "<br/>")}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        message: "Failed to send email",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}

import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { fullName, email, phone, organization, inquiryType, message, ...extra } = body;

    if (!fullName || !email || !inquiryType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const extraFields = Object.entries(extra)
      .filter(([, v]) => v)
      .map(([k, v]) => `<p><strong>${k}:</strong> ${v}</p>`)
      .join('');

    const { error } = await resend.emails.send({
      from: 'BFS Website <onboarding@resend.dev>',
      to: ['gloria@bfs.com.na'],
      subject: `New ${inquiryType} inquiry from ${fullName}`,
      replyTo: email,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Organisation:</strong> ${organization || 'Not provided'}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        ${extraFields}
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided'}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}

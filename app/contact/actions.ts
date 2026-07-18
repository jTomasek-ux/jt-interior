"use server";

export type ContactState = {
  ok: boolean;
  error?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { ok: false, error: "Please fill in name, email, and message." };
  }

  if (!isValidEmail(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  const to = process.env.CONTACT_EMAIL ?? "hello@jtinteriors.com";
  const apiKey = process.env.RESEND_API_KEY;
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  if (!apiKey) {
    console.info("[contact enquiry]", { name, email, phone, message });
    return {
      ok: true,
      message:
        "Thanks — your enquiry was received. We will be in touch shortly.",
    };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "JT Interiors <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `Project enquiry from ${name}`,
      text: body,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("[contact email failed]", detail);
    return {
      ok: false,
      error: "Something went wrong sending your message. Please try again or call us.",
    };
  }

  return {
    ok: true,
    message:
      "Thanks — your enquiry was received. We will be in touch shortly.",
  };
}

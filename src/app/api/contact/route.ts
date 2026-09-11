import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  user_name: z.string().min(2, "Ім'я надто коротке"),
  user_email: z.string().email("Некоректний Email"),
  message: z.string().min(10, "Повідомлення надто коротке"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);
    const { user_name, user_email, message } = validatedData;

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.error(
        "Помилка конфігурації: Потрібно додати RESEND_API_KEY в .env.local",
      );
      return NextResponse.json(
        { success: false, error: "Помилка конфігурації сервера" },
        { status: 500 },
      );
    }

    const resend = new Resend(RESEND_API_KEY);

    const emailSubject = `💡 Нова заявка від: ${user_name}`;
    const emailHtml = `<div style="font-family:sans-serif;padding:20px;background-color:#f8fafc;"><h2 style="color:#ea580c;">Нове повідомлення з портфоліо</h2><p><strong>Ім'я відправника:</strong> ${user_name}</p><p><strong>Email для зв'язку:</strong> ${user_email}</p><div style="margin-top:20px;padding:15px;background-color:#fff;border-left:4px solid #ea580c;"><p>${message}</p></div></div>`;

    const { data, error } = await resend.emails.send({
      from: "Portfolio Form <onboarding@resend.dev>",
      to: ["mitucha1983@gmail.com"],
      subject: emailSubject,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json(
        { success: false, error: "Помилка відправки пошти через сервіс" },
        { status: 500 },
      );
    }

    console.log("Лист успішно надіслано через Resend ID:", data?.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: "Некоректні дані форми" },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { success: false, error: "Помилка сервера" },
      { status: 500 },
    );
  }
}

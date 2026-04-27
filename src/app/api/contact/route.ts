import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone: string;
  volume?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Basic validation
    if (!data.name || !data.email || !data.phone) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs obligatoires." },
        { status: 400 }
      );
    }

    // In production, send email or store in DB
    console.log("Contact form submission:", data);

    return NextResponse.json({
      success: true,
      message: "Merci pour votre message. Nous vous contacterons bientot.",
    });
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur. Veuillez reessayer." },
      { status: 500 }
    );
  }
}

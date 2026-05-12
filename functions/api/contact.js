import { Resend } from 'resend';
import { buildContactEmail } from '../emails/contact-template.js';

const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const RECIPIENT_EMAIL = 'dev-cba@pm.me';
const SENDER = 'Portfolio <contact@dev-cba.com>';

export async function onRequestPost(context) {
    const { request, env } = context;

    let body;
    try {
        body = await request.json();
    } catch {
        return jsonResponse({ error: 'Corps de requête invalide.' }, 400);
    }

    const { name, email, message, turnstileToken } = body;

    const turnstileValid = await verifyTurnstile(turnstileToken, env.TURNSTILE_SECRET_KEY);

    if (!turnstileValid) {
        return jsonResponse({ error: 'Vérification CAPTCHA échouée.' }, 403);
    }

    const resend = new Resend(env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
        from: SENDER,
        to: [RECIPIENT_EMAIL],
        reply_to: email,
        subject: `Nouveau message de ${name}`,
        html: buildContactEmail({ name, email, message }),
    });

    if (error) {
        return jsonResponse({ error: "Erreur lors de l'envoi de l'email." }, 500);
    }

    return jsonResponse({ success: true }, 200);
}

async function verifyTurnstile(token, secretKey) {
    const res = await fetch(TURNSTILE_VERIFY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret: secretKey, response: token }),
    });
    const data = await res.json();
    return data.success === true;
}

function jsonResponse(data, status) {
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    });
}

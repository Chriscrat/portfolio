/**
 * @param {{ name: string, email: string, message: string }} data
 * @returns {string}
 */
export function buildContactEmail({ name, email, message }) {
    return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nouveau message — Portfolio</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #0f0f12;
            font-family: 'Segoe UI', Arial, sans-serif;
            color: #e2e2e2;
        }
        .wrapper {
            max-width: 560px;
            margin: 40px auto;
            background-color: #1a1a24;
            border: 1px solid #2a2a3a;
            border-radius: 16px;
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #6c63ff 0%, #a78bfa 100%);
            padding: 32px 40px;
        }
        .header h1 {
            margin: 0;
            font-size: 22px;
            font-weight: 700;
            color: #ffffff;
            letter-spacing: -0.5px;
        }
        .header p {
            margin: 6px 0 0;
            font-size: 13px;
            color: rgba(255,255,255,0.75);
        }
        .body {
            padding: 32px 40px;
        }
        .field {
            margin-bottom: 24px;
        }
        .field-label {
            display: block;
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #a78bfa;
            margin-bottom: 6px;
        }
        .field-value {
            font-size: 15px;
            color: #e2e2e2;
            line-height: 1.6;
            background-color: #12121a;
            border: 1px solid #2a2a3a;
            border-radius: 8px;
            padding: 12px 16px;
            word-break: break-word;
        }
        .message-value {
            white-space: pre-wrap;
        }
        .reply-btn {
            display: inline-block;
            margin-top: 8px;
            padding: 12px 28px;
            background: linear-gradient(135deg, #6c63ff, #a78bfa);
            color: #ffffff;
            text-decoration: none;
            border-radius: 999px;
            font-size: 14px;
            font-weight: 600;
        }
        .footer {
            padding: 20px 40px;
            border-top: 1px solid #2a2a3a;
            font-size: 12px;
            color: #555570;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="header">
            <h1>Nouveau message reçu</h1>
            <p>Via le formulaire de contact du portfolio</p>
        </div>
        <div class="body">
            <div class="field">
                <span class="field-label">Nom</span>
                <div class="field-value">${escapeHtml(name)}</div>
            </div>
            <div class="field">
                <span class="field-label">Email</span>
                <div class="field-value">${escapeHtml(email)}</div>
            </div>
            <div class="field">
                <span class="field-label">Message</span>
                <div class="field-value message-value">${escapeHtml(message)}</div>
            </div>
            <a class="reply-btn" href="mailto:${escapeHtml(email)}">Répondre à ${escapeHtml(name)}</a>
        </div>
        <div class="footer">
            Ce message a été envoyé depuis chriscrat.dev
        </div>
    </div>
</body>
</html>`;
}

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

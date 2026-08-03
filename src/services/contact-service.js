export const sendContactMessage = async (payload) => {
    const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });

    if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Erreur lors de l'envoi.");
    }
};

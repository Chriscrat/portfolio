export async function onRequestGet(context) {
    const { env } = context;
    return new Response(
        JSON.stringify({
            maintenance: env.MAINTENANCE_MODE === 'true'
        }),
        { headers: { 'Content-Type': 'application/json' } }
    );
}

addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Check if the request is for a specific route
    if (url.pathname.startsWith('/api')) {
        event.respondWith(handleRequest());
    } else {
        // Pass through to Cloudflare Pages for other routes
        event.respondWith(fetch(event.request));
    }
});

async function handleRequest() {
    const response = {
        message: 'Hello, World!',
    };

    return new Response(JSON.stringify(response), {
        headers: {
            "content-type": "application/json;charset=UTF-8",
            status: 200
        },
    });
}
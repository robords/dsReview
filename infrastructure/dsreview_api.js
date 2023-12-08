addEventListener('fetch', (event) => {
    event.respondWith(handleRequest());
});

async function handleRequest() {
    const response = {
        message: 'Hello, World!',
    };

    return new Response(JSON.stringify(response), {
        headers: {
            "content-type": "application/json;charset=UTF-8",
        },
    });
}
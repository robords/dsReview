import { NextRequest } from 'next/server';
export const config = {
    runtime: 'edge',
};

export default async function handler(req) {
    return new Response(
        JSON.stringify({
            message: 'Hello from Next.js!',
        }),
        {
            status: 200,
            headers: {
                'content-type': 'application/json',
            },
        },
    );
}
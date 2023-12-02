
export default function Footer() {
    const env = process.env.NODE_ENV
    return (
        <footer>
            <p> Powered by{' '}
                <a
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Next.js
                </a>
                {' '}and{' '}
                <a
                    href="https://pages.cloudflare.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    CloudFlare Pages
                </a>
                . Infrastructure managed with{' '}
                <a
                    href="https://www.terraform.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Terraform.
                </a>
                <br />
                Environment: {env}
            </p>
        </footer>
    )
}
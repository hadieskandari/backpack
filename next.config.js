/** @type {import('next').NextConfig} */
const nextConfig = {
    matcher: [
        '/((?!api|_next/static|_next/image|images|favicon.ico).*)',
    ],
    output: 'export',
    images: {
        unoptimized: true
    }
}

module.exports = nextConfig

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {

    trailingSlash: true,
    
    async redirects() {
        return [
            {
                source: '/page', // pagina que sera digitada no navegador
                destination: '/', // pagina que sera redirecioda
                permanent: true,
            },
        ]
    }

}

module.exports = nextConfig
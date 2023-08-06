/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {

    trailingSlash: true, //insere uma barra no final de todo link 

    async redirects() {
        return [
            {
                source: '/casa', // pagina que sera digitada no navegador
                destination: '/home', // pagina que sera redirecioda
                permanent: true,
            },
        ]
    }
}

module.exports = nextConfig

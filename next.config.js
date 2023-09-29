/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {

    trailingSlash: true, //insere uma barra no final de todo link 
    // output: 'export', //exporta o projeto para uma pasta chamada export
    async redirects() {
        return [
            {
                source: '/home', // pagina que sera digitada no navegador
                destination: '/dashboard', // pagina que sera redirecioda
                permanent: true,
            },
        ]
    }
}

module.exports = nextConfig

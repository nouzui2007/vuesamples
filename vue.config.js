module.exports = {
    runtimeCompiler: true,
    devServer: {
        port: 8080,
        proxy: {
            '/postal': {
                target: "https://zipcloud.ibsnet.co.jp/api/search",
                changeOrigin: true,
                pathRewrite: p => {
                    console.log(p);
                    r = p.replace(/^\/postal\/*/, '?zipcode=');
                    console.log("result:" + r);
                    return r;
                },
            }
        }
    }
};
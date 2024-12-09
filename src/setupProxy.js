const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/expressHome',
        createProxyMiddleware(
            {
                target: 'http://localhost:8080',
                changeOrigin: true,
                logger: console,
            }
        )
    )

    /* Dynamic Route Example
    send:
    GET http://localhost:3000/expressUser/5
    Accept: application/json

    hit: "/user/:id"
    * */
    app.use(
        '/expressUser',
        createProxyMiddleware(
            {
                target: 'http://localhost:8080/user/',
                changeOrigin: true,
                logger: console,
            }
        )
    )

    /* Query String Example
    send:
    GET http://localhost:3000/expressProfile?name=John&age=25
    Accept: application/json

    hit: "/profile"
    * */
    app.use(
        '/expressProfile',
        createProxyMiddleware(
            {
                target: 'http://localhost:8080/profile',
                changeOrigin: true,
                logger: console,
            }
        )
    )

    /* POST Example
    send:
    POST http://localhost:3000/expressEchoPostBody
    Content-Type: application/json

    {"Product Description":  "good stuff"}

    hit: "/echo-post-body"
     */
    app.use(
        '/expressEchoPostBody',
        createProxyMiddleware(
            {
                target: 'http://localhost:8080/echo-post-body',
                changeOrigin: true,
                logger: console,
            }
        )
    )

    /*
    send: curl -X PUT -d '{"field":"value"}' -H "Content-Type: application/json" localhost:3000/expressUpdateProduct/5

    hit: "/product/:id"
    * */
    app.use(
        '/expressUpdateProduct',
        createProxyMiddleware(
            {
                target: 'http://localhost:8080/product/',
                changeOrigin: true,
                logger: console,
            }
        )
    )

    /*
    send: curl -X DELETE localhost:3000/expressDeleteAccount/25
    hit: "/account/:id"
    * */
    app.use(
        '/expressDeleteAccount',
        createProxyMiddleware(
            {
                target: 'http://localhost:8080/account/',
                changeOrigin: true,
                logger: console,
            }
        )
    )
}
// import kingdeeSdk from "../index.js"
const kingdeeSdk = require('../index.cjs');
(async () => {
    const clientID = ''
    const clientSecret = ''
    const appKey = ''
    const appSecret = ''
    const externalNumber = ''
    // const uid = ''
    let getAuthTokenResult = await kingdeeSdk.getAuthToken({ clientID, clientSecret, appKey, appSecret })
    console.log(getAuthTokenResult)
    const pushAppAuthorizeResult = await kingdeeSdk.pushAppAuthorize({ clientID, clientSecret, externalNumber })
    console.log(pushAppAuthorizeResult)
})()
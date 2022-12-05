(async () => {
    const kingdeeSdk = require('../index.cjs')
    const clientID = ''
    const clientSecret = ''
    const appKey = ''
    const appSecret = ''
    const outerInstanceId = ''
    const uid = ''
    const appToken = ''
    const domain = 'https://tf.jdy.com'

    const url = 'https://api.kingdee.com/jdy/v2/bd/material'
    const method = 'GET'
    const params = {
        'search': ''
    }
    const data = {}

    let getAppTokenResult = await kingdeeSdk.getAppToken({ clientID, clientSecret, appKey, appSecret})
    console.log(getAppTokenResult)

    const pushAppAuthorizeResult = await kingdeeSdk.pushAppAuthorize({ clientID, clientSecret, outerInstanceId })
    console.log(pushAppAuthorizeResult)

    const invokeApiClient = await kingdeeSdk.invokeApiWithConfig({ clientID, clientSecret, appToken, domain })
    const invokeApiClientResult = await invokeApiClient({ url, method, params, data })
    console.log(invokeApiClientResult)


    const invokeApiResult = await kingdeeSdk.invokeApi({ clientID, clientSecret, appToken, domain, url, method, params, data })
    console.log(invokeApiResult)
})()
# kingdee-sdk

金蝶云星辰2.0 SDK\
<https://open.jdy.com/#/files/api/detail?index=2&categrayId=3cc8ee9a663e11eda5c84b5d383a2b93&id=adfe4a24712711eda0b307c6992ee459>

```js
const kingdeeSdk = require("kingdee-sdk")
```

```js
import kingdeeSdk from "kingdee-sdk";
```

```js
const clientID = ''
const clientSecret = ''
const appKey = ''
const appSecret = ''
const outerInstanceId = ''
const uid = ''
const appToken = ''
const domain = 'https://tf.jdy.com' // 我在写SDK的时候填这个，后面可能会填获取到的domain

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

// 建议使用 invokeApiWithConfig
const invokeApiClient = await kingdeeSdk.invokeApiWithConfig({ clientID, clientSecret, appToken, domain })
const invokeApiClientResult = await invokeApiClient({ url, method, params, data })
console.log(invokeApiClientResult)

// 也可以直接用 invokeApi
const invokeApiResult = await kingdeeSdk.invokeApi({ clientID, clientSecret, appToken, domain, url, method, params, data })
console.log(invokeApiResult)
```

# kingdee-sdk

```js
const kingdeeSdk = require("kingdee-sdk")
```

```js
import kingdeeSdk from "kingdee-sdk";
```

```js
const appKey = ''
const appSecret = ''
const clientID = ''
const clientSecret = ''
const externalNumber = ''
let getAuthTokenResult = await kingdeeSdk.getAuthToken({ clientID, clientSecret, appKey, appSecret })
console.log(getAuthTokenResult)
let pushAppAuthorizeResult = await kingdeeSdk.pushAppAuthorize({ clientID, clientSecret, externalNumber })
console.log(pushAppAuthorizeResult)
```

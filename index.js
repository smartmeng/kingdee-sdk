import getAppToken from './functions/getAppToken.js'
import pushAppAuthorize from './functions/pushAppAuthorize.js'
import { invokeApi, invokeApiWithConfig } from './functions/invokeApi.js'

export default {
    getAppToken: getAppToken,
    pushAppAuthorize: pushAppAuthorize,
    invokeApi: invokeApi,
    invokeApiWithConfig: invokeApiWithConfig
}

export { getAppToken, pushAppAuthorize, invokeApi, invokeApiWithConfig }
const getAppToken = async function (params) {
    const { default: getAppToken } = await import('./functions/getAppToken.js')
    return await getAppToken(params)
}

const pushAppAuthorize = async function (params) {
    const { default: pushAppAuthorize } = await import('./functions/pushAppAuthorize.js')
    return await pushAppAuthorize(params)
}

const invokeApi = async function (params) {
    const { invokeApi } = await import('./functions/invokeApi.js')
    return await invokeApi(params)
}

const invokeApiWithConfig = async function (params) {
    const { invokeApiWithConfig } = await import('./functions/invokeApi.js')
    return invokeApiWithConfig(params)
}

module.exports = {
    getAppToken: getAppToken,
    pushAppAuthorize: pushAppAuthorize,
    invokeApi: invokeApi,
    invokeApiWithConfig: invokeApiWithConfig
}
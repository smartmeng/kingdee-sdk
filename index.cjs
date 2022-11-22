const getAuthToken = async function (params) {
    const { default: getAuthToken } = await import('./functions/getAuthToken.js')
    return await getAuthToken(params)
}

const pushAppAuthorize = async function (params) {
    const { default: pushAppAuthorize } = await import('./functions/pushAppAuthorize.js')
    return await pushAppAuthorize(params)
}

module.exports = {
    getAuthToken: getAuthToken,
    pushAppAuthorize: pushAppAuthorize
}
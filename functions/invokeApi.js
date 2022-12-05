import fetch from 'node-fetch'
import * as R from 'ramda'
import randomInt from './randomInt.js'
import getSignature from './getSignature.js'
import getQueryStringFromParams from './getQueryStringFromParams.js'

const invokeApi = async function ({ clientID, clientSecret, appToken, domain, url, method, params = {}, data = {} }) {
    //@todo 对参数校验
    const path = new URL(url).pathname
    const headers = {
        'Content-Type': 'application/json',
        'X-Api-ClientID': clientID,
        'X-Api-Auth-Version': "2.0",
        'X-Api-TimeStamp': Date.now(),
        'X-Api-SignHeaders': 'X-Api-TimeStamp,X-Api-Nonce',
        'X-Api-Nonce': randomInt(),
        'X-Api-Signature': '',
        'app-token': appToken,
        'X-GW-Router-Addr': domain
    }

    const queryString = getQueryStringFromParams(params)
    // console.log("queryString", queryString)
    headers['X-Api-Signature'] = getSignature({ path, method, headers, queryString, clientSecret })
    // console.log('headers', headers)

    let fetchUrl
    if (R.isEmpty(queryString)) {
        fetchUrl = url
    } else {
        fetchUrl = url + "?" + queryString
    }
    // console.log('fetchUrl', fetchUrl)

    const fetchOptions = {
        'method': method,
        'headers': headers
    }
    if (!R.isEmpty(data)) {
        fetchOptions['body'] = JSON.stringify(data)
    }

    const response = await fetch(fetchUrl, fetchOptions)

    return await response.json()
}

const invokeApiWithConfig = function ({ clientID, clientSecret, appToken, domain }) {
    return async function ({ url, method, params = {}, data = {} }) {
        return await invokeApi({ clientID, clientSecret, appToken, domain, url, method, params, data })
    }
}

export default {
    invokeApi: invokeApi,
    invokeApiWithConfig: invokeApiWithConfig
}

export { invokeApi, invokeApiWithConfig }
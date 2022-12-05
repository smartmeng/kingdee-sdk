import fetch from 'node-fetch'
import getSignature from './getSignature.js'
import sha256AndBase64 from './sha256AndBase64.js'
import randomInt from './randomInt.js'
import getQueryStringFromParams from './getQueryStringFromParams.js'

const getAppToken = async function ({ appKey, appSecret, clientID, clientSecret }) {
    const url = 'https://api.kingdee.com/jdyconnector/app_management/kingdee_auth_token'
    const method = 'GET'
    const path = '/jdyconnector/app_management/kingdee_auth_token'
    const headers = {
        'Content-Type': 'application/json',
        'X-Api-ClientID': clientID,
        'X-Api-Auth-Version': "2.0",
        'X-Api-TimeStamp': Date.now(),
        'X-Api-SignHeaders': 'X-Api-TimeStamp,X-Api-Nonce',
        'X-Api-Nonce': randomInt(),
        'X-Api-Signature': ''
    }
    const params = {
        app_key: appKey,
        app_signature: sha256AndBase64(appKey, appSecret),
    }
    const queryString = getQueryStringFromParams(params)

    headers['X-Api-Signature'] = getSignature({ path, method, headers, queryString, clientSecret })

    const response = await fetch(url + "?" + queryString, {
        'method': method,
        'headers': headers
    })

    return await response.json()
}

export default getAppToken
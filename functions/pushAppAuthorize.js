import fetch from 'node-fetch'
import getSignature from './getSignature.js'
import randomInt from './randomInt.js'
import getQueryStringFromParams from './getQueryStringFromParams.js'

const pushAppAuthorize = async function ({ clientID, clientSecret, outerInstanceId }) {
    const url = 'https://api.kingdee.com/jdyconnector/app_management/push_app_authorize'
    const method = 'POST'
    const path = '/jdyconnector/app_management/push_app_authorize'
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
        outerInstanceId: outerInstanceId
    }
    const queryString = getQueryStringFromParams(params)

    headers['X-Api-Signature'] = getSignature({ path, method, headers, queryString, clientSecret })

    const response = await fetch(url + "?" + queryString, {
        'method': method,
        'headers': headers
    })

    return await response.json()
}

export default pushAppAuthorize
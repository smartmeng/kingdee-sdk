import axios from 'axios'
import * as R from 'ramda'
import getSignature from './getSignature.js'
import sha256AndBase64 from './sha256AndBase64.js'
import randomInt from './randomInt.js'

let getAuthToken = async function ({ appKey, appSecret, clientID, clientSecret, uid = '', isvType = '', isvUserNumber = '' }) {
    let params = {
        app_key: appKey,
        app_signature: sha256AndBase64(appKey, appSecret),
    }

    if (!R.isEmpty(uid)) {
        params['uid'] = uid
    }

    if (!R.isEmpty(isvType)) {
        params['isv_type'] = isvType
    }

    if (!R.isEmpty(isvUserNumber)) {
        params['isv_user_number'] = isvUserNumber
    }

    let queryString = ''
    R.forEachObjIndexed(function (value, key) {
        if (queryString.length > 0) {
            queryString = queryString + "&" + key + "=" + encodeURIComponent(value)
        } else {
            queryString = key + "=" + encodeURIComponent(value)
        }
    }, params)

    // console.log("queryString", queryString)

    let options = {
        path: '/jdyconnector/app_management/kingdee_auth_token',
        method: 'GET',
        headers: {
            "X-Api-ClientID": clientID,
            "X-Api-Auth-Version": "2.0",
            "X-Api-TimeStamp": Date.now(),
            "X-Api-SignHeaders": "X-Api-TimeStamp,X-Api-Nonce",
            "X-Api-Nonce": randomInt(),
            "X-Api-Signature": ""
        },
        queryString: queryString,
        clientSecret: clientSecret
    }

    options.headers['X-Api-Signature'] = getSignature(options)

    let result = await axios({
        "url": "https://api.kingdee.com/jdyconnector/app_management/kingdee_auth_token" + "?" + options.queryString,
        "method": "get",
        "headers": options.headers
    })
    return result.data
}

export default getAuthToken
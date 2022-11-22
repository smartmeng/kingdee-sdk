import axios from 'axios'
import * as R from 'ramda'
import getSignature from './getSignature.js'
import randomInt from './randomInt.js'

const pushAppAuthorize = async function ({ clientID, clientSecret, externalNumber }) {
    let params = {
        externalNumber: externalNumber
    }

    let queryString = ''
    R.forEachObjIndexed(function (value, key) {
        if (queryString.length > 0) {
            queryString = queryString + "&" + key + "=" + encodeURIComponent(value)
        } else {
            queryString = key + "=" + encodeURIComponent(value)
        }
    }, params)

    console.log("queryString", queryString)

    let options = {
        path: '/jdyconnector/app_management/push_app_authorize',
        method: 'POST',
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
        "url": "https://api.kingdee.com/jdyconnector/app_management/push_app_authorize" + "?" + options.queryString,
        "method": options.method,
        "headers": options.headers
    })
    return result.data
}

export default pushAppAuthorize
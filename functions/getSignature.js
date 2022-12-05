import * as R from 'ramda'
import sha256AndBase64 from './sha256AndBase64.js'
import getQueryString from './getQueryString.js'

const getSignature = function ({ path, method, headers, queryString, clientSecret }) {
    path = encodeURIComponent(path)
    queryString = getQueryString(queryString)
    // console.log("queryString", queryString)

    let headersString = ''
    let strArr = headers['X-Api-SignHeaders'].split(',')
    strArr = strArr.sort()
    strArr.map(item => {
        headersString = headersString + R.toLower(item) + ":" + headers[item] + "\n"
    })

    let signString = method + "\n"
        + path + "\n"
        + queryString + "\n"
        + headersString
    // console.log("signString", signString)

    let signature = sha256AndBase64(signString, clientSecret)
    // console.log("signature", signature)

    return signature
}

export default getSignature
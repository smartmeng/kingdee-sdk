import * as R from 'ramda'

const getQueryString = function (queryString) {
    if (R.isEmpty(queryString)) {
        return ''
    }
    let queryStrings = queryString.split('&')
    queryStrings = queryStrings.sort()
    let queryStringResult = ''

    queryStrings.map(item => {
        let strArr = item.split('=')
        let key = strArr[0]
        let value = strArr[1]
        if (queryStringResult.length > 0)
            queryStringResult = queryStringResult + "&" + encodeURIComponent(key) + "=" + encodeURIComponent(value)
        else
            queryStringResult = encodeURIComponent(key) + "=" + encodeURIComponent(value)
    })
    // console.log("queryStringResult", queryStringResult)

    return queryStringResult
}

export default getQueryString
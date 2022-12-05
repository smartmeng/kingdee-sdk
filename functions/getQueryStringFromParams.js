import * as R from 'ramda'

const getQueryStringFromParams = function (params) {
    let queryString = ''
    R.forEachObjIndexed(function (value, key) {
        if (queryString.length > 0) {
            queryString = queryString + "&" + key + "=" + encodeURIComponent(value)
        } else {
            queryString = key + "=" + encodeURIComponent(value)
        }
    }, params)
    return queryString
}

export default getQueryStringFromParams
const getQueryStringFromParams = function (params) {
    let queryString = ''
    const queryArray = Object.entries(params).reduce((acc, [key, value]) => {
        if (Array.isArray(value)) {
            value.forEach(item => acc.push(`${key}=${encodeURIComponent(item)}`));
        } else {
            acc.push(`${key}=${encodeURIComponent(value)}`);
        }
        return acc;
    }, []);
    queryString = queryArray.join('&');
    return queryString
}

export default getQueryStringFromParams
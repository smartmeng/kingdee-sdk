const getQueryStringFromParams = function (params) {
    const searchParams = new URLSearchParams();
    
    Object.entries(params).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            value.forEach(item => searchParams.append(key, item));
        } else {
            searchParams.append(key, value);
        }
    });
    
    const queryString = searchParams.toString();
    // console.log('[调试] 最终查询字符串:', queryString);
    return queryString;
}

export default getQueryStringFromParams
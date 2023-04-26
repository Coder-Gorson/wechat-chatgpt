const axios = require("axios") ;


// var url = "http://43.143.166.92:8443/api/mhxy/fuzzyQueryPriceByName";
var url = "http://localhost:8443/api/mhxy/fuzzyQueryPriceByName";
function getPriceInfo(dataValue) {
    datas = JSON.stringify({
        regionName: dataValue
    })
    console.log(datas)
    return axios.post(url, datas,{
        'content-type': 'application/json;charset=utf-8'
      })
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    });
}
// getPriceInfo('string')
var ss = "@DJ西栅老街金价".slice(3, -2);
getPriceInfo(ss)
// console.log(ss);

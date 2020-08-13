var qR = require('../server')

exports.getPriceData = async (request, response) => {
    console.log(" Get Price details")
    var query = "select * from price_test"
    await qR.queryResolver(query)
        .then((result) => {
            response.send(result["rows"]);
        }).catch((err) => {
            console.log(err)
            response.send(err);
        })
}
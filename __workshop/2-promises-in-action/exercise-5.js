const rp = require('request-promise');


let options = {
    url: 'https://geek-jokes.sameerkumar.website/api',
    method: 'GET'
}

rp(options, (err, response, body) => {
    if(!err && response.statusCode == 200)
        console.log(body)
});


const getGeekJoke = async () => {
    try{
        let geekContent = await rp(options);
        let body = await JSON.parse(geekContent);
        return body;
    } catch (err) {
        return console.log('Error: ', err);
}
}
getGeekJoke() 


module.exports = {
    getGeekJoke
}
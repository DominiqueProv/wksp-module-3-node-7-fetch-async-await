const rp = require('request-promise');


const objRequest = {
    uri: 'https://api.tronalddump.io/random/quote',

    headers: {
        'User-Agent': 'Request-Promise',
        'Accept': 'application/json'
    }
}

const getTronaldDump = async () => {
    try{
        let body = await rp(objRequest);
        let retourInfo = await JSON.parse(body);
        return retourInfo.value;

    }
    catch (err) {
        return console.log('Error: ', err);
    }


    }

    getTronaldDump();


    module.exports = {
        getTronaldDump
    }
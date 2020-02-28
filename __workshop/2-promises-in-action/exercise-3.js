const rp = require('request-promise');


    const objRequest = {
        uri: 'https://icanhazdadjoke.com/',

        headers: {
            'User-Agent': 'Request-Promise',
            'Accept': 'application/json'
        },
    };

    const getDadJoke = async () => {

    try {
        let body = await rp(objRequest);
        let retourInfo = await JSON.parse(body);
        return retourInfo.joke;

    }
    catch (err) {
        return console.log('Error: ', err);
    }

}

getDadJoke();

module.exports = {
    getDadJoke
}
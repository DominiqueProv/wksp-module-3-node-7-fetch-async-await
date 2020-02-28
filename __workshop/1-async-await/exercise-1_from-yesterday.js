// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const rp = require('request-promise');

// Returns the current position of the ISS

const getIssPosition = async () => {
        try {
            const res = await rp('http://api.open-notify.org/iss-now.json')
            const issLocation = await JSON.parse(res);

            const data =  {
                lat: issLocation.iss_position.latitude,
                lng: issLocation.iss_position.longitude,
            }
            console.log(data);
        } catch (err) { console.log(err) } 
}

    // add code here (include a try/catch as well)

getIssPosition();



// function getIssPosition() {
//     return request('http://api.open-notify.org/iss-now.json')
//         .then(res => {
//             const issLocation = JSON.parse(res);
//     return {
//         lat: issLocation.iss_position.latitude,
//         lng: issLocation.iss_position.longitude,
//     }
// });
// }


const getIssPosition = async () => {
    try {
        const response = await request('http://api.open-notify.org/iss-now.json');
        // Parse as JSON
        const issLocation = JSON.parse(response);
        const data = {
            lat: issLocation.iss_position.latitude,
            lng: issLocation.iss_position.longitude,
        };
        console.log(data); // console.log the result within the .then chain to inspect data
        return data; // return it to continue the data down the chain of Promises (if needed)
    }
    catch (err) {
        return console.log('Error: ', err);
    }
}

getIssPosition();
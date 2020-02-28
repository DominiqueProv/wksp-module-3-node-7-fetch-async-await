
const handleChoice = (event) => {

    event.preventDefault();

    const jokeContainer = document.getElementById('jokeContainer');
        let type = event.target.value;
        fetch('/joke', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify ({type})
        }).then(res=>res.json())
        .then(data => {
            const { status, error } = data;
            jokeContainer.innerHTML = data.data
        })
}
const fetch = require('node-fetch');

exports.handler = async (evt) => {
    const url = "https://ktvs5s43xd.execute-api.eu-central-1.amazonaws.com/Prod/hotel";

    let response = await fetch(url,{
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(evt)
        }
    );

    let json = await response.json();

    return json;
 }
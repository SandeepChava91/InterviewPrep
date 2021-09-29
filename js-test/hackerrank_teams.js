'use strict'
const https = require('https');
const request = require('request');

function myFetch(url) {
  return new Promise((resolve, reject) => {
    request(url, function (error, response, body) {
      if(error) reject(error)

      else resolve(body)
    });
  });
}

async function getTeams(year, k) {
    // write your code here
    // API endpoint template: https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=<YEAR>&page=<PAGE_NUMBER>

    let page = 1;

    let response = await APICall(year, page);
    let result = JSON.parse(response);

    const total_pages = result.total_pages;
    console.log(result.data);
    console.log(result.total);

    let dataArray = result.data;

    for (let i = 2; i <= total_pages; i++) {
        response = await APICall(year, i);
        result = JSON.parse(response);

        dataArray = dataArray.concat(result.data);
    }

    let teams = {};
    for (let i = 0; i < dataArray.length; i++) {
        let element = dataArray[i];
        if (!(element.team1 in teams)) {
            teams[element.team1.toString()] = 1;
        }
        else {
            teams[element.team1.toString()]++
        }

        if (!(element.team2 in teams)) {
            teams[element.team2.toString()] = 1;
        }
        else {
            teams[element.team2.toString()]++
        }
    }

    console.log(teams);

    let finalResult = []
    for (const key in teams) {

        if(teams[key] >= k){
            finalResult.push(key);
        }
    }

    console.log(finalResult);
}


async function APICall(year, page) {
    let url = "https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=" + year + "&page=" + page;

    var requestOptions = {
        method: 'GET'
    };

    https.get
    return myFetch(url, requestOptions)
        .then(response => response)
        .catch(error => console.log('error', error));
}


getTeams(2015, 13).then(() => {
    console.log("Done");
})
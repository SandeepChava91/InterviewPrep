'use strict'
const https = require('https');
const request = require('request');
const rp = require('request-promise');

const baseUrl = "https://jsonmock.hackerrank.com/api/articles";


async function getTitles(authorName) {
    // write your code here
    // API endpoint template: https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=<YEAR>&page=<PAGE_NUMBER>

    let page = 1;

    let response = await APICall(authorName, page);
    let result = JSON.parse(response);

    const total_pages = result.total_pages;
    let dataArray = result.data;

    for (let i = 2; i <= total_pages; i++) {
        response = await APICall(authorName, i);
        result = JSON.parse(response);

        dataArray = dataArray.concat(result.data);
    }

    const filteredResult = dataArray.filter((element) => element.title || element.story_title);

    const finalResult = filteredResult.map((element) => element.title || element.story_title);

    // updateTitles(dataArray);
    console.log(finalResult);
    return finalResult;
}

async function APICall(authorName, page) {

    let url = `${baseUrl}?author=${authorName}&page=${page}`;

    try {
        let response = await rp.get(url);
        return response;
    }
    catch (e) {
        throw Error(e);
    }
}


let author1 = "epaga";
let author2 = "saintamh";
getTitles(author2).then(() => {

    console.log("Done");
})
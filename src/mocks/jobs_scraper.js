
const request = require("request");
const cheerio = require("cheerio");
const axios = require('axios');

//const url = 'https://www.indeed.com/jobs?q=urgently%20hiring&start=0'
//const url = 'https://jooble.org/SearchResult?ukw=urgent'
//const url = 'https://www.indeed.com/jobs?q=urgent&l=New%20York%2C%20NY&jt=temporary&explvl=entry_level&start='

const url = 'https://www.indeed.com/jobs';

var feature = "urgent";
var location = "NewYork"
var term = "temporary"
var level = "entry_level"
var num_page = 5;

function url_generator(url) {
    var link = url + "?q=" + feature + "&l" + location + "&jt" + term + "&explvl" + level
    return link;
}

function scraper(link) {
    
    axios(link)
        .then(response => {
            const html = response.data
            const jobcard = cheerio.load(html)

            const cards = [];
            jobcard(".job_seen_beacon", html).each(function(){
                const jobTitle = jobcard(this).find(".jobTitle").text()
                const companyName = jobcard(this).find(".companyName").text()
                
                const location_text = jobcard(this).find(".companyLocation").text()
                const location = String(location_text.indexOf("+"))>0 ? String(location_text).substr(0, String(location_text).indexOf("+")) : String(location_text)
                const maxCapacity = jobcard(this).find(".hiringMultipleCandidatesCaption").text() > 0 ? jobcard(this).find(".hiringMultipleCandidatesCaption").text() > 0 : "undefined"
                const applied = 0
                
                //description
                const descrip_list = jobcard(this).find(".job-snippet").text()
                const description = descrip_list
                
                //salary, deadline, and workhours
                const info = Array.from(jobcard(this).find(".attribute_snippet").map((_, span) => jobcard(span).text()));
                const salary = info[0]
                const deadline = String(info[1]).indexOf("+")>0 ? String(info[1]).substr(0, String(info[1]).indexOf("+")) : String(info[1])
                const workHours = String(info[2]).indexOf("+")>0 ? String(info[2]).substr(0, String(info[2]).indexOf("+")) : String(info[2])
                

                cards.push({
                    jobTitle,
                    description,
                    deadline,
                    workHours,
                    maxCapacity,
                    applied,
                    location,
                    companyName,
                    salary
                })
            })
            
            console.log(cards);
        })
        .catch(error => console.log(error))
}


function json_generator(num_page) {
    for (let i = 0; i < num_page; i++) {
        link = url_generator(url) + "&start=" + i;
        scraper(link);
    }
}

console.log("generation");

json_generator(num_page);



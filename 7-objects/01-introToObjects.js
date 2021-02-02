/*
    - objects are used to store multiple sets of data in the key/value pair format
    - denoted by {}
*/

let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                    episode: 1,
                    episodeName: "Pilot"
                },
                {
                    episode: 2,
                    episodeName: "Diversity Day"
                },
                {
                    episode: 3,
                    episodeName: "Health Care"
                },
                {
                    episode: 4,
                    episodeName: "The Alliance"
                },
                {
                    episode: 5,
                    episodeName: "Basketball"
                },
            ]
        }
    },
    season2: {},
    season3: {}
};

// console.log("All data", netflix);
// console.log("Just season info", netflix.season1.seasonInfo);
// console.log("Episode name:", netflix.season1.seasonInfo.episodeInfo[1].episodeName);

/*
CHALLENGE
************
    - Pick an episode to console.log
    - Using dot notation, walk through the netflix object and print off both an episode number and an episode name.
*/
console.log("Episode name & number:", netflix.season1.seasonInfo.episodeInfo[3]);

// console.log(`episode: ${netflix.season1.seasonInfo.episodeInfo[1].episode} - ${netflix.season1.seasonInfo.episodeInfo[1].episodeName}`)

/*
    JSON Objects
        -JSON stands for JavaScript Object Notation
        - the JSON syntax is derived from JavaScript Object Notation, but the JSON format is text only
        - JSON exists as a string - useful when we want to fetch data from a server. JSON objects need to be converted to a native JavaScript object before we can access the data
*/


let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

// object.keys & object.values methods
console.log(Object.keys(spaceJam)) // Object.keys method will return all keys from the passed object in an array
console.log(Object.keys(spaceJam.toonSquad));

console.log(Object.values(spaceJam.nbaPlayers));//Object.values will return all key values from the referenced object
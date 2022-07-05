const path = require("path");
const fs = require("fs");

var count = 100000;
const initialCount = count;

function generateBig() {
  const filePath = path.join(__dirname, "../public/generated.json");

  if (initialCount === count) {
    console.time("generateBig");
    fs.appendFileSync(filePath, "[");
  }

  if (count > 0) {
    count--;
    fs.appendFileSync(filePath, JSON.stringify({
      "_id": "62bd5d2e3e70db38e13d57c7",
      "index": 0,
      "guid": "5b46770f-1985-466b-bf04-745eccc4e0cb",
      "isActive": false,
      "balance": "$2,932.73",
      "picture": "http://placehold.it/32x32",
      "age": 27,
      "eyeColor": "green",
      "name": "Sutton Dennis",
      "gender": "male",
      "company": "CIPROMOX",
      "email": "suttondennis@cipromox.com",
      "phone": "+1 (897) 525-3514",
      "address": "756 Sumner Place, Nutrioso, American Samoa, 4080",
      "about": "Veniam sint consectetur consectetur aliquip velit qui tempor consequat dolore. Consequat enim do quis irure consectetur voluptate officia reprehenderit culpa id magna minim non tempor. Proident minim commodo pariatur incididunt quis ut. In tempor id reprehenderit eu elit ut deserunt aute.\r\n",
      "registered": "2014-03-23T07:36:51 -02:00",
      "latitude": -16.923957,
      "longitude": 96.677398,
      "tags": [
        "id",
        "eu",
        "incididunt",
        "elit",
        "voluptate",
        "aute",
        "do",
      ],
      "friends": [
        {
          "id": 0,
          "name": "Langley Huber",
        },
        {
          "id": 1,
          "name": "Shelley Mathis",
        },
        {
          "id": 2,
          "name": "Albert Finley",
        },
      ],
      "greeting": "Hello, Sutton Dennis! You have 5 unread messages.",
      "favoriteFruit": "apple",
    }));
    setTimeout(generateBig);
  } else {
    fs.appendFileSync(filePath, "]");
    console.timeEnd("generateBig");
  }
}

generateBig();

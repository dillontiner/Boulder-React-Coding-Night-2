<img src="./brcnLogo.png" alt="Boulder React Coding Night logo" align="center" />

# Welcome to the second Boulder React Coding Night!


## Start
* Fork this repo into your personal github account
* Clone from your repo onto your local machine
* Run `npm install`
* Run `npm start`


## API Resources
* 1) Get current representatives by address
```
https://www.googleapis.com/civicinfo/v2/representatives?key=[key]&address=[address]
```

* 2) Get all elections
```
https://www.googleapis.com/civicinfo/v2/elections?key=[key]
```

* 3) Get individual election by address & election id
```
https://www.googleapis.com/civicinfo/v2/voterinfo?key=[key]&electionId=2000&address=[address]
```



## User Stories

### Home Page (API 1)
* User can enter zip code to see a list of representatives by location
* User can enter/save party affiliation (using local storage)
* User can see nested lists of 1) divisions 2) offices for each division and 3) officials for each office
* User can click on a single official to see a page of info for that official

### Official's Page (API 1)
* User can click links on the official's page to view website and social media (icons)

### All Elections Page (API 2)
* User can see a list of all upcoming elections
* User can click on a particular election to see a page of info for that election

### Individual Elections Page (API 3)
* User can see seats up for grabs
* User can see full list of candidates for each seat
* User can see candidates highlighted different colors based on party affiliation
* User can click on candidate to see details/links for that person
* User can filter candidates by party affiliation

### Social Sharing
* User can share elections
* User can share candidates

### Extra Credit
* Make a progressive web app
* User can save to desktop
* User can persist address



## Deployment Instructions
* `npm run build`
* `npm run surge`
* You'll be prompted to create a surge account if you don't have one
* IMPORTANT: add `build` to the end of the project path
* Leave the default domain or modify the value before `.surge.sh`
* Copy the URL and visit your site!

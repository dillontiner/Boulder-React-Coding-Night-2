<img src="./brcnLogo.png" alt="Boulder React Coding Night logo" align="center" />

# Welcome to the second Boulder React Coding Night!


## Start
* Fork and clone this repo
* Run `npm install`
* Run `npm start`


## API Resources
* Get current representatives by address
```
https://www.googleapis.com/civicinfo/v2/representatives?key=[key]&address=[address]
```

* Get elections
```
https://www.googleapis.com/civicinfo/v2/elections?key=[key]
```

* Get election options by address & election id
```
https://www.googleapis.com/civicinfo/v2/voterinfo?key=[key]&electionId=2000&address=[address]
```



## User Stories
### Elected Officials
* User can enter address or allow app to access current location
* User can enter party affiliation
* User can see list of their own current representatives
* User can click on their own current representatives to see additional info.
### Elections
* User can see a list of all upcoming elections
* User can filter elections by state
* User can see elections in their own state highlighted
* User can click on particular election
* User can see seats up for grabs
* User can see full list of candidates for each seat
* User can see candidates highlighted in Blue, Red, or Yellow according to their affiliations.
* User can click on candidate
* User can see candidate details/links
* User can Filter candidates by party affiliation

### Social Sharing
* User can share elections.
* User can share candidates.

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

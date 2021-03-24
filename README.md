# tournament-search
#[Demo](https://vilina.github.io/tournament-search/)

# Dependencies
Node.js (v14)
Npm (~v7)

# Installation
1. Clone the repo git clone `https://github.com/Vilina/tournament-search.git tournament-search && cd tournament-search`.
2. Install the dependencies in the root directory npm install 

# Running locally
Start the dev server with `npm run dev` (for development).
Point your browser to `http://localhost:8080/`.

# Deployment
For production build use command `npm run predeploy`
For deploying to gh-pages run `npm run deploy`



## Functional Requirements
The results are refreshed each time the user modifies the search term with a certain deploy to
make sure the user stopped typing to avoid abusing the API.\
When the user clicks on one of the results, the result dropdown closes, and the selected
tournament is added to the Saved Tournaments panel on the page (shown in the picture).
These tournaments must be saved for the user, so if the user closes the browser window and
opens it again, he is still able to see them.\
The user, however, can delete items from the saved tournaments, by clicking on the delete icon
on each of the tournaments. When deleting a tournament, a prompt must be shown to confirm
the action.
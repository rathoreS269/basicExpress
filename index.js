require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
    "login": "rathoreS269",
    "id": 164160458,
    "node_id": "U_kgDOCcjjyg",
    "avatar_url": "https://avatars.githubusercontent.com/u/164160458?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/rathoreS269",
    "html_url": "https://github.com/rathoreS269",
    "followers_url": "https://api.github.com/users/rathoreS269/followers",
    "following_url": "https://api.github.com/users/rathoreS269/following{/other_user}",
    "gists_url": "https://api.github.com/users/rathoreS269/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/rathoreS269/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/rathoreS269/subscriptions",
    "organizations_url": "https://api.github.com/users/rathoreS269/orgs",
    "repos_url": "https://api.github.com/users/rathoreS269/repos",
    "events_url": "https://api.github.com/users/rathoreS269/events{/privacy}",
    "received_events_url": "https://api.github.com/users/rathoreS269/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 7,
    "public_gists": 0,
    "followers": 1,
    "following": 0,
    "created_at": "2024-03-20T09:36:01Z",
    "updated_at": "2024-08-01T17:14:25Z"
  }
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req, res) =>{
    res.send('shrutiEightin')
})

app.get('/login', (req, res) =>{
    res.send('<h1> login to my yt channel </h1>')
})

app.get('/github', (req,res) =>{
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
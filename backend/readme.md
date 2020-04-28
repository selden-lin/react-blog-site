
## Setup
1. On the first install navigate to the directory this readme is in and npm install
2. npm start and navigate to localhost:3001

## Routes
- /blog
  - POST
  - will add new blog to database
- /blog/:id
  - GET
    - will retrieve blog from db using id
  - PUT
    - will update the blog in db using id
  - DELETE
    - will delete blog in db using id

## Blog structure in db
- {
    title: char,
    summary: char,
    content: char,
    date: date object,
    image: string
  }
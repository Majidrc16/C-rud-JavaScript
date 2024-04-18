# Crud in js

# CRUD Operation
```This project demonstrates CRUD (Create, Read, Update, Delete) operations on a collection of data using a RESTful API.```

# Table of Contents
1. Description
2. Features
3. Technologies Used
4. Installation
# Usage
API Endpoints
Contributing
License
# Description
This project showcases how to perform CRUD operations on a collection of data. It includes a backend API server and a frontend interface to interact with the data.

# Features
* Create new records
* Read existing records
* Update existing records
* Delete records
# Technologies Used
* HTML
* CSS
* Javascript
* Tailwind CSS

# Installation
1. Clone the repository:
```
git clone https://github.com/your-username/crud-operation.git
```
2. Navigate into the project directory: <br>
``` cd crud-operation ``` <br>
3. Run on localserver

# API's
# POST
```

- Description: Create a new post
- Endpoint: `https://jsonplaceholder.typicode.com/posts`
- Request Body:
  ```json
  {
    "userId": 1,
    "title": "Sample Title",
    "body": "Sample Body"
  }
```
# GET
```
Description: Retrieve all posts
Endpoint: https://jsonplaceholder.typicode.com/posts
Response:
json
Copy code
[
  {
    "userId": 1,
    "id": 1,
    "title": "Sample Title 1",
    "body": "Sample Body 1"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "Sample Title 2",
    "body": "Sample Body 2"
  }
]

```
# DELETE
```
Description: Delete a post by ID
Endpoint: https://jsonplaceholder.typicode.com/posts/:id
Note: Replace :id with the ID of the post to be deleted.
Response:
json
Copy code
{}
```
Contributing
Fork the repository
Create a new branch (git checkout -b feature/new-feature)
Make changes and commit them (git commit -am 'Add new feature')
Push to the branch (git push origin feature/new-feature)
Create a pull request
License
This project is licensed under the MIT License.
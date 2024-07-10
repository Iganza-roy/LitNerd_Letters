# LitNerd Letters

## Snippets of Stories and Insights

LitNerd Letters is a blog site where bloggers and writers can easily create, share, and discover articles and stories. It serves as a platform for literary enthusiasts to connect and share their insights and narratives.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization
- Create, read, update, and delete (CRUD) functionality for posts
- Rich text editor for creating and editing posts
- Category-based post filtering
- Search functionality
- File upload for post images
- Responsive design

## Technologies Used

### Frontend

- React
- Axios
- React Router DOM
- React Quill (Rich Text Editor)
- Sass (CSS Preprocessor)
- FontAwesome (Icons)
- Moment.js (Date manipulation)
- DOMPurify (Sanitizing HTML)

### Backend

- Node.js
- Express.js
- MySQL
- Multer (File upload handling)
- JWT (JSON Web Token for authentication)
- Bcrypt.js (Password hashing)
- Cookie-parser

## Installation

### Prerequisites

- Node.js
- MySQL Server and Workbench

### Frontend Setup

1. Clone the repository:
    ```
    git clone https://github.com/iganza-roy/litnerd-letters.git
    ```

2. Navigate to the frontend directory:
    ```
    cd litnerd-letters/frontend
    ```

3. Install the dependencies:
    ```
    npm install
    ```

### Backend Setup

1. Navigate to the backend directory:
    ```
    cd ../backend
    ```

2. Install the dependencies:
    ```
    npm install
    ```

## Database Setup

1. Download and install [MySQL Server](https://dev.mysql.com/downloads/mysql/) and [MySQL Workbench](https://dev.mysql.com/downloads/workbench/).

2. Create a new database called `litnerd` in MySQL Workbench.

3. Create the following tables:

    ```sql
    CREATE TABLE `users` (
      `id` int NOT NULL AUTO_INCREMENT,
      `username` varchar(45) NOT NULL,
      `email` varchar(255) NOT NULL,
      `password` varchar(255) NOT NULL,
      `img` varchar(255) DEFAULT NULL,
      PRIMARY KEY (`id`)
    );

    CREATE TABLE `posts` (
      `id` int NOT NULL AUTO_INCREMENT,
      `title` varchar(255) NOT NULL,
      `desc` varchar(10000) NOT NULL,
      `img` varchar(255) NOT NULL,
      `date` datetime NOT NULL,
      `uid` int NOT NULL,
      `cat` varchar(45) NOT NULL,
      PRIMARY KEY (`id`),
      KEY `uid_idx` (`uid`),
      CONSTRAINT `uid` FOREIGN KEY (`uid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
    );
    ```

## Environment Variables

Create a `.env` file in the backend directory with the following content:

```env
DB_HOST=your_db_host
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=litnerd
```

## usage
### Running the Frontend
Navigate to the frontend directory:

```
cd ../frontend
```

Start the frontend development server:

```
npm start
```

### Running the Backend
Navigate to the backend directory:

```
cd ../backend
```

Start the backend server:

```
npm start
```

### Access the Application
Open your browser and navigate to http://localhost:3000 to access LitNerd Letters.


## Contributing
We welcome contributions to enhance LitNerd Letters. To contribute:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Commit your changes (git commit -m 'Add new feature').
4. Push to the branch (git push origin feature-branch).
5. Create a new Pull Request.


We hope you enjoy using LitNerd Letters to share and discover fascinating articles and stories. For any issues or questions, please feel free to reach out to us.
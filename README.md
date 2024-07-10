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
- [Author](#Author)

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

- [React](https://www.google.com/url?sa=t&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiN1e7p55yHAxWrRPEDHfIOCBoQFnoECAYQAQ&url=https%3A%2F%2Freact.dev%2F&usg=AOvVaw1tEjYYiD7LQlxO53dgjTHV&opi=89978449)
- [Axios](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiR7YCI6JyHAxW6RPEDHUWZBw4QFnoECBQQAQ&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Faxios&usg=AOvVaw1qBY3XtHMePQgJzETxlPwf&opi=89978449)
- [React Router DOM](https://reactrouter.com/en/main)
- [React Quill](https://www.npmjs.com/package/react-quill) (Rich Text Editor)
- [Sass](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwigqtjL6JyHAxU_QvEDHcMZAocQFnoECAwQAQ&url=https%3A%2F%2Fsass-lang.com%2F&usg=AOvVaw0p_IRgLEbIPRGWtlW7Wph8&opi=89978449) (CSS Preprocessor)
- [FontAwesome](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjI6tXS6JyHAxUIS_EDHQk9Dd4QFnoECBMQAQ&url=https%3A%2F%2Fcdnjs.com%2Flibraries%2Ffont-awesome&usg=AOvVaw1eImeVzSxU6O0cwRlj7cPq&opi=89978449) (Icons)
- [Moment.js](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjrnJva6JyHAxWDSfEDHd3yCS8QFnoECB4QAQ&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fmoment&usg=AOvVaw1y_GYQTJS_XrztceLnl8xO&opi=89978449) (Date manipulation)
- [DOMPurify](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwixqYTi6JyHAxWnSvEDHdN4CzMQFnoECAYQAQ&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fdompurify&usg=AOvVaw3AtUzRgysEkHNPK2Jwp2vb&opi=89978449) (Sanitizing HTML)

### Backend

- [Node.js](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiHqOX46JyHAxVeX_EDHZafAjkQFnoECAYQAQ&url=https%3A%2F%2Fnodejs.org%2Fen&usg=AOvVaw1dFXYHr5kNGMvANfSjX4lC&opi=89978449)
- [Express.js](https://expressjs.com/)
- [MySQL](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiayNOC6ZyHAxVXQ_EDHW-gCv0QFnoECAYQAQ&url=https%3A%2F%2Fwww.mysql.com%2F&usg=AOvVaw20c6IrMAtNC1A9NZPsDpWW&opi=89978449)
- [Multer](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwipmpaH6ZyHAxVgSfEDHZ2IDSEQFnoECAYQAQ&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fmulter&usg=AOvVaw1V0kwzYTbQYRL4I23cBqvn&opi=89978449) (File upload handling)
- [JWT](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiBs5OM6ZyHAxXCQvEDHSZfBNoQFnoECEsQAQ&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fjsonwebtoken&usg=AOvVaw0586jpaPZctseC_IrWlxQF&opi=89978449) (JSON Web Token for authentication)
- [Bcrypt.js](https://www.npmjs.com/package/bcryptjs) (Password hashing)
- [Cookie-parser](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjT1ICX6ZyHAxXXSvEDHTX2Bq8QFnoECAYQAQ&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fcookie-parser&usg=AOvVaw1cfYg8uKIjvVMt7Iyn-zba&opi=89978449)

## Installation

### Prerequisites

- Node.js
- MySQL Server and Workbench

### Frontend Setup

1. Clone the repository:

   ```ssh
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

## Author:

[Roy Iganza Kibata](https://github.com/Iganza-roy)

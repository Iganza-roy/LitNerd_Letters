<div align='center'>
  <h1><a href="https://iganza-roy.github.io/Litnerd_letters-about/">LitNerd Letters 📖</a></h1>
  <h2>Snippets of Stories and Insights ✍️</h2>
  <p>
    LitNerd Letters is a blog site where bloggers and writers can easily create, share, and discover articles and stories. It serves as a platform for literary enthusiasts to connect and share their insights and narratives.
  </p>
  <img src="https://github.com/Iganza-roy/LitNerd_Letters/blob/main/frontend/public/cover_img.jpg"style="border-radius: 10px; box-shadow: 0 5px 20px rgba(43, 0, 56, 0.559);"/>
</div>

---

<div align="center">

### Quick Links 🌐

**[OFFICIAL PAGE](https://litnerdletters.netlify.app/) • 
[ABOUT](https://iganza-roy.github.io/Litnerd_letters-about/) • 
[BLOG POST]() • 
[LINKEDIN](https://www.linkedin.com/in/royiganzakibata)**

</div>

---

## Table of Contents 📋
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [Author](#author)

---

## 🌟 Features
- User authentication and authorization 🔐
- Create, read, update, and delete (CRUD) functionality for posts 📝
- Rich text editor for creating and editing posts ✒️
- Category-based post filtering 🗂️
- Search functionality 🔍
- File upload for post images 🖼️
- Responsive design 📱

## 👨‍💻 Technologies Used

### Frontend 🌐
- [React](https://react.dev/)
- [Axios](https://www.npmjs.com/package/axios)
- [React Router DOM](https://reactrouter.com/en/main)
- [React Quill (Rich Text Editor)](https://www.npmjs.com/package/react-quill)
- [Sass (CSS Preprocessor)](https://sass-lang.com/)
- [FontAwesome (Icons)](https://cdnjs.com/libraries/font-awesome)
- [Moment.js (Date manipulation)](https://www.npmjs.com/package/moment)
- [DOMPurify (Sanitizing HTML)](https://www.npmjs.com/package/dompurify)

### Backend 💾
- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Multer (File upload handling)](https://www.npmjs.com/package/multer)
- [JWT (JSON Web Token for authentication)](https://www.npmjs.com/package/jsonwebtoken)
- [Bcrypt.js (Password hashing)](https://www.npmjs.com/package/bcryptjs)
- [Cookie-parser](https://www.npmjs.com/package/cookie-parser)


# Running the App locally

## Installation ⚙️

### Prerequisites
- Node.js
- MySQL Server and Workbench

### Frontend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/iganza-roy/litnerd-letters.git
   ```
2. Navigate to the frontend directory:

  ```bash
  cd litnerd-letters/frontend
  ```

3. Install dependencies
   ```
   npm install
   ```

### Backend Setup

1. Navigate to the backend directory
  ```
cd ../backend
  ```
2. Install dependencies
```
npm install
```

### Database Setup 🗄️
1. Download and install [MySQL Server](https://dev.mysql.com/downloads/mysql/) and [MySQL Workbench](https://dev.mysql.com/downloads/workbench/).
2. Create a new database called ```litnerd``` in MySQL Workbench.
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

### Environment Variables 🗝️

Create a `.env` file in the backend directory with the following content:

```env
DB_HOST=your_db_host
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=litnerd
```

## Usage 🚀

#### Running the Frontend
1. Navigate to the frontend directory
```
cd ../frontend
```

2. Start the frontend development server:
```
npm start
```

#### Running the Backend
1. Navigate to the backend directory:
   ```
   cd ../backend
   ```

2. Start the backend server:

```
npm start
```

### Access the Application
Open your browser and navigate to http://localhost:3000 to access LitNerd Letters.

<img src="https://github.com/Iganza-roy/LitNerd_Letters/blob/main/frontend/public/sample.jpeg" alt="cover" style="width: 100%; max-width: 600px"/>

## ✍️ Contributing

We welcome contributions to enhance LitNerd Letters. To contribute:

1. Fork the repository.
2. Create a new branch:

```
git checkout -b feature-branch
```

3. Commit your changes
```
git commit -m 'Add new feature'
```

4. Push to the branch
```
git push origin feature-branch
```

5. Create a new Pull Request.
We hope you enjoy using LitNerd Letters to share and discover fascinating articles and stories. For any issues or questions, please feel free to reach out to us.

## Author 🖋️
[Roy Iganza Kibata](https://github.com/Iganza-roy)


  <body>
    <h1>
      <a href="https://iganza-roy.github.io/Litnerd_letters-about/"
        >LitNerd Letters</a
      >
    </h1>
    <img
      src="https://github.com/Iganza-roy/LitNerd_Letters/blob/main/frontend/public/cover_img.jpg"
      alt="cover"
      style="width: 100%; max-width: 600px"
    />
    <h2>Snippets of Stories and Insights</h2>
    <p>
      LitNerd Letters is a blog site where bloggers and writers can easily
      create, share, and discover articles and stories. It serves as a platform
      for literary enthusiasts to connect and share their insights and
      narratives.
    </p>
    <p>
      Click
      <a href="https://iganza-roy.github.io/Litnerd_letters-about/">here</a> to
      learn more about litnerd letters.
    </p>
    <p>Author's linkedin - [Iganzaroy](https://www.linkedin.com/in/royiganzakibata)</p>
    <h2>Table of Contents</h2>
    <ul>
      <li><a href="#features">Features</a></li>
      <li><a href="#technologies-used">Technologies Used</a></li>
      <li><a href="#installation">Installation</a></li>
      <li><a href="#database-setup">Database Setup</a></li>
      <li><a href="#environment-variables">Environment Variables</a></li>
      <li><a href="#usage">Usage</a></li>
      <li><a href="#contributing">Contributing</a></li>
      <li><a href="#author">Author</a></li>
    </ul>
    <h2 id="features">Features</h2>
    <ul>
      <li>User authentication and authorization</li>
      <li>Create, read, update, and delete (CRUD) functionality for posts</li>
      <li>Rich text editor for creating and editing posts</li>
      <li>Category-based post filtering</li>
      <li>Search functionality</li>
      <li>File upload for post images</li>
      <li>Responsive design</li>
    </ul>
    <h2 id="technologies-used">Technologies Used</h2>
    <h3>Frontend</h3>
    <ul>
      <li><a href="https://react.dev/">React</a></li>
      <li><a href="https://www.npmjs.com/package/axios">Axios</a></li>
      <li><a href="https://reactrouter.com/en/main">React Router DOM</a></li>
      <li>
        <a href="https://www.npmjs.com/package/react-quill"
          >React Quill (Rich Text Editor)</a
        >
      </li>
      <li><a href="https://sass-lang.com/">Sass (CSS Preprocessor)</a></li>
      <li>
        <a href="https://cdnjs.com/libraries/font-awesome"
          >FontAwesome (Icons)</a
        >
      </li>
      <li>
        <a href="https://www.npmjs.com/package/moment"
          >Moment.js (Date manipulation)</a
        >
      </li>
      <li>
        <a href="https://www.npmjs.com/package/dompurify"
          >DOMPurify (Sanitizing HTML)</a
        >
      </li>
    </ul>
    <h3>Backend</h3>
    <ul>
      <li><a href="https://nodejs.org/en">Node.js</a></li>
      <li><a href="https://expressjs.com/">Express.js</a></li>
      <li><a href="https://www.mysql.com/">MySQL</a></li>
      <li>
        <a href="https://www.npmjs.com/package/multer"
          >Multer (File upload handling)</a
        >
      </li>
      <li>
        <a href="https://www.npmjs.com/package/jsonwebtoken"
          >JWT (JSON Web Token for authentication)</a
        >
      </li>
      <li>
        <a href="https://www.npmjs.com/package/bcryptjs"
          >Bcrypt.js (Password hashing)</a
        >
      </li>
      <li>
        <a href="https://www.npmjs.com/package/cookie-parser">Cookie-parser</a>
      </li>
    </ul>
    <h2 id="installation">Installation</h2>
    <h3>Prerequisites</h3>
    <ul>
      <li>Node.js</li>
      <li>MySQL Server and Workbench</li>
    </ul>
    <h3>Frontend Setup</h3>
    <ol>
      <li>
        Clone the repository:
        <pre><code>git clone https://github.com/iganza-roy/litnerd-letters.git</code></pre>
      </li>
      <li>
        Navigate to the frontend directory:
        <pre><code>cd litnerd-letters/frontend</code></pre>
      </li>
      <li>
        Install the dependencies:
        <pre><code>npm install</code></pre>
      </li>
    </ol>
    <h3>Backend Setup</h3>
    <ol>
      <li>
        Navigate to the backend directory:
        <pre><code>cd ../backend</code></pre>
      </li>
      <li>
        Install the dependencies:
        <pre><code>npm install</code></pre>
      </li>
    </ol>
    <h2 id="database-setup">Database Setup</h2>
    <ol>
      <li>
        Download and install
        <a href="https://dev.mysql.com/downloads/mysql/">MySQL Server</a> and
        <a href="https://dev.mysql.com/downloads/workbench/">MySQL Workbench</a
        >.
      </li>
      <li>
        Create a new database called <code>litnerd</code> in MySQL Workbench.
      </li>
      <li>
        Create the following tables:
        
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
</li>
    </ol>
    <h2 id="environment-variables">Environment Variables</h2>
    <p>
      Create a <code>.env</code> file in the backend directory with the
      following content:
    </p>
    <pre><code>DB_HOST=your_db_host
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=litnerd
</code></pre>
    <h2 id="usage">Usage</h2>
    <h3>Running the Frontend</h3>
    <ol>
      <li>
        Navigate to the frontend directory:
        <pre><code>cd ../frontend</code></pre>
      </li>
      <li>
        Start the frontend development server:
        <pre><code>npm start</code></pre>
      </li>
    </ol>
    <h3>Running the Backend</h3>
    <ol>
      <li>
        Navigate to the backend directory:
        <pre><code>cd ../backend</code></pre>
      </li>
      <li>
        Start the backend server:
        <pre><code>npm start</code></pre>
      </li>
    </ol>
    <h3>Access the Application</h3>
    <p>
      Open your browser and navigate to
      <a href="http://localhost:3000">http://localhost:3000</a> to access
      LitNerd Letters.
    </p>
    <img
      src="https://github.com/Iganza-roy/LitNerd_Letters/blob/main/frontend/public/sample.jpeg"
      alt="cover"
      style="width: 100%; max-width: 600px"
    />
    <h2 id="contributing">Contributing</h2>
    <p>We welcome contributions to enhance LitNerd Letters. To contribute:</p>
    <ol>
      <li>Fork the repository.</li>
      <li>
        Create a new branch:
        <pre><code>git checkout -b feature-branch</code></pre>
      </li>
      <li>
        Commit your changes:
        <pre><code>git commit -m 'Add new feature'</code></pre>
      </li>
      <li>
        Push to the branch:
        <pre><code>git push origin feature-branch</code></pre>
      </li>
      <li>Create a new Pull Request.</li>
    </ol>
    <p>
      We hope you enjoy using LitNerd Letters to share and discover fascinating
      articles and stories. For any issues or questions, please feel free to
      reach out to us.
    </p>
    <h2 id="author">Author</h2>
    <p><a href="https://github.com/Iganza-roy">Roy Iganza Kibata</a></p>
  </body>

The Flow I Created:
pinterest-clone
├── backend
│   ├── middleware
│   │   └── auth.js          
│   ├── models
│   │   ├── User.js          
│   │   └── Post.js          
│   ├── routes
│   │   ├── auth.js         
│   │   └── posts.js         
│   ├── uploads           
│   ├── .env                 
│   └── server.js            
└── frontend
    └── src
        ├── api.js            
        ├── App.js            
        ├── components
        │   ├── Navbar.js     
        │   ├── PostCard.js  
        │   └── UploadModal.js
        └── pages
            ├── Login.js     
            ├── Register.js   
            ├── Feed.js      
            └── Feed.css      


 Installation & Setup
1. Clone the repository
bashgit clone https://github.com/your-username/pinterest-clone.git
cd pinterest-clone

3. Setup the Backend
bashcd backend
npm install
Created a .env file inside the backend/ folder:
envPORT=5000
MONGO_URI=mongodb://localhost:27017/pinterest
JWT_SECRET=mysupersecretkey123
Create the uploads folder:
bashmkdir uploads

4. Setup the Frontend
bashcd ../frontend
npm install

 Running the Project
You need 3 terminals open at the same time:
Terminal 1 — Start MongoDB
Windows:
bash"C:\Program Files\MongoDB\Server\8.3\bin\mongod.exe" --dbpath "C:\data\db"
Mac:
bashbrew services start mongodb-community
Wait until you see:
waiting for connections on port 27017
Terminal 2 — Start Backend
bashcd pinterest-clone/backend
node server.js
You should see:
MongoDB connected
Server running on port 5000
Terminal 3 — Start Frontend
bashcd pinterest-clone/frontend
npm start
The app will open at http://localhost:3000

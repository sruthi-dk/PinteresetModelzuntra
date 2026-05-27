The Flow I Created:
pinterest-clone:
Backend--->
----middleware
        └── auth.js
----models
        └── User.js
        └── Post.js  
----routes
        └── auth.js 
        └── posts.js 
----routes
        └── .env 
        └── server.js       
frontend--->
         └── src
             └── api.js
             └── App.js
             └── components
                      └── Navbar.js 
                      └── PostCard.js 
                      └── UploadModal.js
             └── components
                      └── Login.js 
                      └── Register.js
                      └── Feed.js
                      └── Feed.css
                       

             
Running the Project:
You need 3 terminals open at the same time:
Terminal 1 — Start MongoDB
Windows:
bash"C:\Program Files\MongoDB\Server\8.3\bin\mongod.exe" --dbpath "C:\data\db"
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

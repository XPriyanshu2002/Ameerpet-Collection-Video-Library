 var mongoClient = require("mongodb").MongoClient;
 var express = require("express");
 var cors = require("cors");
 var http = require("http");
 //const { createClient } = require("@supabase/supabase-js");

 //const supabase = createClient("https://vpkpskeqlbmjqztxizmk.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwa3Bza2VxbGJtanF6dHhpem1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkyMDM2MDUsImV4cCI6MjAzNDc3OTYwNX0.QAFYG3k2Z7dUdzDqabsLFLKk7GKO1DnMMekmQlP-U7A") 

 var app = express();
 var conStr = "mongodb://localhost:27017";
 //var conStr = "mongodb+srv://Priyanshu:Priyanshu007@ameerpetcollections.hivkc9e.mongodb.net";
 //var conStr = "mongodb+srv://Priyanshu:Priyanshu007@ameerpetcollections.hivkc9e.mongodb.net/?retryWrites=true&w=majority&appName=AmeerpetCollections"

 app.use(express.urlencoded({extended:true}));
 app.use(express.json());
 app.use(cors());

 app.get('/get-user',(req,res)=>{
    mongoClient.connect(conStr)
    .then(clientObject=>{
        var dataBase = clientObject.db('video-library');
        dataBase.collection('tblUsers').find({}).toArray()
        .then(document=>{
            res.send(document);
            res.end();
        });
    });
 });


 app.post('/register-user',(req,res)=>{
    var user = {
        UserId: req.body.UserId,
        UserName: req.body.UserName,
        Password: req.body.Password,
        Email: req.body.Email,
        Mobile: req.body.Mobile
    }

    mongoClient.connect(conStr)
    .then(clientObject=>{
        var dataBase = clientObject.db('video-library');
        dataBase.collection('tblUsers').insertOne(user)
        .then(document=>{
            console.log('User Registered');
            res.end();
        });
    });
 });

 app.get('/get-admin',(req,res)=>{
    mongoClient.connect(conStr)
    .then(clientObject=>{
        var dataBase = clientObject.db('video-library');
        dataBase.collection('tblAdmin').find({}).toArray()
        .then(document=>{
            res.send(document);
            res.end();
        });
    });
 });

 app.get('/get-videos',(req,res)=>{
    mongoClient.connect(conStr)
    .then(clientObject=>{
        var dataBase = clientObject.db('video-library');
        dataBase.collection('tblVideos').find({}).toArray()
        .then(document=>{
            res.send(document);
            res.end();
        });
    });
 });

 app.get('/get-video/:id',(req,res)=>{
    mongoClient.connect(conStr)
    .then(clientObject=>{
        var dataBase = clientObject.db('video-library');
        dataBase.collection('tblVideos').find({VideoId:parseInt(req.params.id)}).toArray()
        .then(document=>{
            res.send(document);
            res.end();
        });
    });
 });

 app.get('/get-videos/:categoryId',(req,res)=>{
    mongoClient.connect(conStr)
    .then(clientObject=>{
        var dataBase = clientObject.db('video-library');
        dataBase.collection('tblVideos').find({CategoryId:parseInt(req.params.categoryId)}).toArray()
        .then(document=>{
            res.send(document);
            res.end();
        });
    });
 });

 app.post('/post-video',(req,res)=>{
    var video = {
        VideoId: parseInt(req.body.VideoId),
        CategoryId: parseInt(req.body.CategoryId),
        Title: req.body.Title,
        Description: req.body.Description,
        Url: req.body.Url,
        Views: parseInt(req.body.Views),
        Likes: parseInt(req.body.Likes),
        Dislikes: parseInt(req.body.Dislikes)
    }

    mongoClient.connect(conStr)
    .then(clientObject=>{
        var dataBase = clientObject.db('video-library');
        dataBase.collection('tblVideos').insertOne(video)
        .then(()=>{
            console.log('Video Added Successfully');
            res.end();
        });
    });
 });

 app.put('/edit-video/:id',(req,res)=>{
    var id = parseInt(req.params.id);
    var video = {
        VideoId: parseInt(req.body.VideoId),
        CategoryId: parseInt(req.body.CategoryId),
        Title: req.body.Title,
        Description: req.body.Description,
        Url: req.body.Url,
        Views: parseInt(req.body.Views),
        Likes: parseInt(req.body.Likes),
        Dislikes: parseInt(req.body.Dislikes)
    }

    mongoClient.connect(conStr)
    .then(clientObject=>{
        var dataBase = clientObject.db('video-library');
        dataBase.collection('tblVideos').updateOne({VideoId:id},{$set:video})
        .then(()=>{
            console.log('Video Updated Successfully');
            res.end();
        });
    });
 });

 app.delete('/delete-video/:id',(req,res)=>{
    mongoClient.connect(conStr)
    .then(clientObject=>{
        var dataBase = clientObject.db('video-library');
        dataBase.collection('tblVideos').deleteOne({VideoId:parseInt(req.params.id)})
        .then(()=>{
            console.log('Video Deleted');
            res.end();
        });
    });
 });

 app.get('/get-categories',(req,res)=>{
    mongoClient.connect(conStr)
    .then(clientObject=>{
        var dataBase = clientObject.db('video-library');
        dataBase.collection('tblCategories').find({}).toArray()
        .then(document=>{
            res.send(document);
            res.end();
        });
    });
 });

 //http.createServer(app).listen(3030);
 app.listen(2020);
 console.log();
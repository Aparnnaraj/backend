const express=require('express');
const cors=require('cors');
const app=new express();
const path=require('path');
const CourseData=require('./models/Coursedata');
var postman=require('postman');
app.use (cors());
app.use(express.json());
app.use(express.static('./dist/frontend'));

app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname + '/dist//frontend/index.html'));
})
   
app.post('/api/addcourse',function(req,res){
    var item={
        courseTitle:req.body.title,
        courseDescription:req.body.description,
        courseVenue:req.body.venue,
        courseDuration:req.body.duration,
        courseDate:req.body.date
    }
    var data=CourseData(item);
    data.save();
    console.log(data);
    CourseData.find().then(function(data){
        res.send(data);
        console.log(data);
    })

})
app.get('/viewcourse',function(req,res){
    CourseData.find()
    .then(function(course){
        res.send(course);
    });
});


app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server ready on 3000");
});
const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://user12345:user12345@mycourseapp.8snlve6.mongodb.net/CourseappDB?retryWrites=true&w=majority')
const CourseSchema=mongoose.Schema({
    courseTitle:String,
    courseDescription:String,
    courseVenue:String,
    courseDuration:String,
    courseDate:String
})
var CourseData=mongoose.model('courseappset',CourseSchema);
module.exports=CourseData;
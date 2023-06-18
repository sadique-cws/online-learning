import mongoose from 'mongoose';

let Course;

try{
    Course = mongoose.model("Course")
}
catch(e){
    const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    instructor: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String, // Assuming the image is stored as a URL or file path
        required: true,
    },
    slug: {
        type: String,
        unique: true,
        slug:"title"
      },
    });

      Course = mongoose.model('Course', courseSchema);
}

export default Course;

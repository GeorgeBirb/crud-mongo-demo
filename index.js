const mongoose = require('mongoose');

try {
    mongoose.set('strictQuery', false);
} catch (e) {
    console.log('ERROR!!');
}

// Need to check this issue!!
// https://stackoverflow.com/questions/46523321/mongoerror-connect-econnrefused-127-0-0-127017/70517348#70517348
mongoose.connect('mongodb://0.0.0.0:27017/demo')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true, min:18},
    email: { type: String, required: true, set: v => v.toLowerCase(), unique: true }
});

const User = mongoose.model('User', userSchema);

// async function createUser() {
//     const user = new User({
//         name: 'TEST FOR DELETE2',
//         age: 19,
//         email: 'TEST FOR DELETE'
//     });

//     try {
//         const result = await user.save();
//         console.log("The following object created : ", result);
//     }catch(ex){
//         console.log(ex.message);
//     }
// }

createUser();

// async function updateUser(id) {
//     const user = await User.findById(id)
//     if(!user){
//         console.log("User not found...");
//         return;
//     } 

//     user.email='someone@something.gr'
//     const result = await user.save();
//     console.log("The following object updated : ",result);
// }

// updateUser('63d64847d22bd659641bd9db');


// async function removeUser(id) {
//     const user = await User.findById(id)
//     if(!user){
//         console.log("User not found...");
//         return;
//     }  
//     const result = await User.deleteOne({_id: id});
//     console.log("The following object removed : ",result);
// }

// removeUser('63d64847d22bd659641bd9db');


const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String
});

const Course = mongoose.model('Course', courseSchema);

// async function createCourse() {
//     const course = new Course({
//         name: 'TEST',
//         description: 'Something for TEST'
//     });

//     const result = await course.save();
//     console.log("The following object created : ",result);
// }

// createCourse();

// async function updateCourse(id) {
//     const course = await Course.findById(id)
//     if(!course){
//         console.log("Course not found...");
//         return;
//     }

//     course.description='Updated Description'
//     const result = await course.save();
//     console.log("The following object updated : ",result);
// }

// updateCourse('63d689b586f8004c739edc1b');


// async function removeCourse(id) {
//     const course = await Course.findById(id)
//     if(!course){
//         console.log("User not found...");
//         return;
//     }
//     const result = await Course.deleteOne({_id: id});
//     console.log("The following object removed : ",result);
// }

// removeCourse('63d689b586f8004c739edc1b');

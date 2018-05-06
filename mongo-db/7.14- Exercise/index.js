const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(() => {console.log('Connected to mongodb')})
    .catch((err) => {console.log('Something went wrong .... unable to connect', err)});

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now() },
    isPublished: Boolean,
    price: 0
});

const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
    /*return await Course
        .find({ isPublished: true, tags: 'backend' })
        .sort({ name: 1 })
        .select({ name: 1, author: 1 });*/

    /*return await Course
        .find({ isPublished: true, tags: {$in: ['backend', 'frontend']} })
        .sort('price')
        .select({ name: 1, author: 1, price: 1 });*/

    return await Course
        .find({ isPublished: true })
        .or([ { price: { $gte: 15 } }, { name: /.*by.*/i }])
}

async function run() {
    const courses = await getCourses();
    console.log(courses);
}

run();
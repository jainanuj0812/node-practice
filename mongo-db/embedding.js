const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
    name: String,
    bio: String,
    website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
    name: String,
    authors: [authorSchema]
}));

async function createCourse(name, authors) {
    const course = new Course({
        name,
        authors
    });

    const result = await course.save();
    console.log(result);
}

async function listCourses() {
    const courses = await Course.find();
    console.log(courses);
}

async function updateAuthor(courseId) {
    const course = await Course.update({_id: courseId,
        $set: {
            'author.name': 'Anuj Jain'
        }
    });
}

async function addAuthor(courseId, authors) {
    const course = await Course.findById(courseId);
    course.authors.push(authors);
    course.save();
}

async function removeAuthor(courseId, authorId) {
    const course = await Course.findById(courseId);
    course.authors.remove(authorId);
    course.save();
}

/*
createCourse('Angular', [
    new Author({name: 'Mosh'}),
    new Author({name: 'Anuj'})
]);*/

// updateAuthor('5af2a8409c443a3094f56716');

// addAuthor('5af2c201aa6165395834eb00', new Author({name: 'Amy'}));

removeAuthor('5af2c201aa6165395834eb00', '5af2c268390ee117441d4f5f');
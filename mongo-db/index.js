const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log("Connected to mongodb..."))
    .catch((err) => console.log("Error occurred while connecting to db..."));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tag: [ String ],
    date: { type: Date, default: Date.now() },
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'angular',
        author: 'Anuj jain',
        tag: [ 'angular', 'frontend' ],
        isPublished: true
    });

    const result = await course.save();
    console.log(result);
}

async function getCourses() {

    /*comparison operators
    eq
    ne
    gt
    lt
    $gte
    $lte
    in
    nin*/

    /*logical operator
    or
    and*/  /*find().or([{ author: 'Anuj Jain' }, { isPublished: true }])*/ /*and will be same*/

    // const courses = await Course.find(); //.find({ price: { $gte: 10 }})  .find({ price: { $gte: 10. $lt: 15}})  .find({ price: { $in : [10, 15, 20] }})
    const courses = await Course.find({ isPublished: true }).sort({name: 1}).limit(10).select({ name: 1, tag: 1 });

    // implement pagination

    /*const pageNumber = 1;
    const pageSize = 10;
    const courses = await Course
        .find({ isPublished: true })
        .sort({name: 1})
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)
        .select({ name: 1, tag: 1 });
*/

    console.log(courses);
}

async function updateCourse(id) {
    /*const res = await Course.update({ _id: id }, {
        $set: {
            author: 'Anuj jain',
            isPublished: true
        }
    });*/

    const courses = await Course.findByIdAndUpdate(id, {
        $set: {
            author: 'Anuj Anuj Anuj Anuj',
            isPublished: false
        }}, { new: true });

   /* console.log(course);
    if (!course) return;

    course.isPublished = false;
    course.author = 'Anuj Anuj';

    const res = await course.save();
*/
    console.log(courses);
}

async function deleteCourse(id) {
    const result  = await Course.deleteOne({ _id: id });  // deleteMany
    // const course = Course.findByIdAndRemove(id);
    console.log(result);
}

deleteCourse('5ae57151779740159aa91123');

// updateCourse('5ae57151779740159aa91123');

// getCourses();


// createCourse();

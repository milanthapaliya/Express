const express = require('express')
const app = express()
const {students} = require('./students')
// console.log(students);
app.get('/',(req,res) => {
    res.send('<h1>Home</h1> <a href = "/api/students">Students</a>')
})
//..........................................................................................
// Full data is not shown in general collection like collection of items in Ecommerce page
// app.get('/api/students', (req,res) => {
//     const lessDetail = students.map((x) => { //very less data are mapped to show in collection of students
//         const {name,id, gender} = x;
//         return {name, id, gender};
//     })
//     res.json(lessDetail);
// })
//.................................................................................................
// Below example shows scenario when we click on a single product and get to single product page which contains all information of the product ie. more information than the collection page but in this example we are using student in place of product
// app.get('/api/students/:studentID', (req,res) =>{
//     const {studentID} = req.params;
//     console.log(req.params); // consoles {studentID : '1'} route.params always comes as string
//     const singleStudent = students.find((x) => x.id == studentID ); //find method returns only first value that matches the search whereas filter method returns multiple matching values
//     if(!singleStudent){
//         return res.status(404).send("<h1>Page Not Found</h1>")
//     }
//     return res.json(singleStudent);
// })

// app.get('/api/students/:studentID/reviews/:reviewID', (req,res) => {
//     console.log(req.params);
//     res.send("<h1>This page contains students review</h1>")
// })

//URL QUERY PROCESSING
app.get('/v1/students/query', (req,res) => {
    const {search,limit} = req.query;
    let sortedStudents = [...students];
    if(search){
        sortedStudents = sortedStudents.filter((x) =>{
            return x.name.startsWith(search);
        })
    }
    if(limit){
        sortedStudents = sortedStudents.slice(0, Number(limit));
    }
    console.log(req.query);
    if(sortedStudents.length > 0){
    return res.status(200).json(sortedStudents);
    }
    res.status(200).send("<h1>Data not Found</h1>");
})
// app.get(`/students/${y}=`,(req,res) => {
//     res.json(students.find((x) => x.id == y))
// })
app.listen(8000, () =>{
    console.log("Server listening on port 8000");
})
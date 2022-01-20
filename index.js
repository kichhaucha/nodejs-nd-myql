// const mongoose = require('mongoose');
    

// const   main=async()=> {
//   await mongoose.connect('mongodb://localhost:27017/e-comm');


// const productSchema = new mongoose.Schema({
//   name: String
// });

//    ProductModel = mongoose.model('products',productSchema);
// let data=new ProductModel({name:"harry"});
//  let result= await data.save();
//  console.log(result)

// }
// main();


// getting-started.js
// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/e-comm');
// }
// main();

const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/e-comm',{
//     useNewUrlParser: true, 
//     useUnifiedTopology: true
// })
// .then(db => console.log('DB is connected'))
// .catch(err => console.log(err));

const uri = 'mongodb://localhost:27017/e-comm';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}

const connectWithDB =async () => {
    mongoose.connect(uri, options, (err, db) => {
      if (err) console.error(err);
      else console.log("database connection")
    })

    const productSchema = new mongoose.Schema({
  name: String
});

 const  ProductModel = mongoose.model('products',productSchema);
let data= ProductModel({name:"harry"});
 let result= await data.save();
 console.log(result)



}

connectWithDB()















// const express = require('express')
// const { body, validationResult } = require('express-validator');
// const con = require('./db')
// const app = express()
// // const con=require('./db');
// const port = 3000
// app.use(express.json())

// // app.get('/', (req, res) => {
// //   res.send('Hello World!')
// // })

// app.post('/',[
//     body('name','this is not correct').isLength({ min: 5 }),
//     body('email',"emain is invalid").isEmail()
// ],(req,res)=>{
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//          let cemail=req.body.email;
//      let email=cemail;
//     const data={name:req.body.name,email:email}
//      con.query('INSERT INTO samiullah SET ?', data, function (error, results, fields) {
//         if (error)  error;
//         res.send(data)
//       });
// })

// app.put('/:id',(req,res)=>{
//   const data=[req.body.name,req.body.email,req.params.id];
//   con.query('UPDATE samiullah SET name = ?, email = ? WHERE id = ?', data,  (error, results, fields)=> {
   
//     if (error)  error;
//     res.send(req.body)
//     // ...
//   });
// })

// app.delete('/:id',(req,res)=>{
 
//   con.query('DELETE FROM samiullah WHERE id =' + req.params.id, (error, results, fields)=> {
//     if (error)  error;
//     res.send(req.params.id)
//   })
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })



// **************this started mongoose  ***
const express = require('express');
const app = express();
const port = 7000;
const coonectDB =require('./config/mongoose')
const albumRoutes = require('./routes/route'); // Adjust the path based on your actual file structure


console.log('Starting the server...');

app.use(express.json());


// Define a route for the root URL
// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// define a route for thee url

app.use('/albums',albumRoutes)
console.log(albumRoutes)




// Start the server
coonectDB().then(()=>{

    // Use the album routes
    // app.use('/albums', albumRoutes);
app.listen(port, () => {
    console.log(`Server is listening at 7000`);
});
})
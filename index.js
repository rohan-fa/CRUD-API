import express from "express";
import bodyParser from "body-parser";  //allow us to take in incoming post request bodies 

//initialize our application:

const app = express();
const PORT = 5000;

// bodyparser middlewire

app.use(bodyParser.json())  //this is say we are going to use json data in our whole application.
app.get('/', (req, res) => {
    console.log('test');
    res.send('hellO')
}); 

//we can add listen to our incoming request
app.listen(PORT, () =>console.log(`Server running on port at http://localhost:${PORT}`));
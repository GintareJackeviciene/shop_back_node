require('dotenv').config();
const express = require ('express');
const morgan = require ('morgan');
const cors = require ('cors');

const app = express();
const port = process.env.PORT || 5000;

//Middleware
//isijungti json duomenis kai gaunam i post body
app.use(express.json());
app.use(morgan('dev'));
//gauti tuos duomenis is kito serverio negu musu adresas
app.use(cors());


app.get('/',(req, res) => {
    res.json('Hello World!');
})

app.listen(port, () => {
    console.log(`Sever is listening on port ${port}`);
});
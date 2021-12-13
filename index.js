import express from 'express';
import bodyParser from 'body-parser'; 

const app = express();
const PORT = process.env.PORT || 9000;

app.use(bodyParser.json());

//Listen at port PORT
app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`);
});
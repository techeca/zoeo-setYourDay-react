import express from 'express';
//import bodyParser from 'body-parser';
import router from './routes/documentRoute.js';
import cors from 'cors'

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())
app.use('/api', router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

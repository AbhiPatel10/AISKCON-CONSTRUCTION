require('dotenv').config();
import express, { urlencoded, json } from 'express';
import cors from 'cors';

import { sendMail } from './controller/email';

const app = express();
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());

app.use('/email', sendMail);

app.use('/', (req, res) => {
  res.status(200).json({
    message: 'Surver Running',
  });
});

app.listen(3000, () => {
  console.log('server started!');
});

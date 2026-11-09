import express from 'express';
import api from './api/index.js';

const app = express();

// serve static files
app.use('/public', express.static('public'));

// parse JSON bodies and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to my REST API!');
});

// all API routes start with /api/v1
app.use('/api/v1', api);

export default app;
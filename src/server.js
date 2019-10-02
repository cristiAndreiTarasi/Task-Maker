
const express = require('express');
const app = express();

app.set('views', '../public/');
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render(`template`));
app.listen(3000);
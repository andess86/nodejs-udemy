const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const errorController = require('./controllers/error');
const app = express();

app.set('view engine', 'ejs');
// views is default views-folder in express.
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// Uses '/' as per default - this is our 'catch-all'-route
app.use(errorController.get404);

app.listen(3000);

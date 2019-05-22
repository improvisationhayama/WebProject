/* eslint-disable linebreak-style */
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const navigation = [
  { link: '/', text: 'Home' },
  { link: '/Mens', text: 'Men\'s' },
  { link: '/Womens', text: 'Women\'s' },
  { link: '/Sale', text: 'Sale' },
];


const clothes = [
  {
    id: 0,
    name: 'man sale 0',
    price: '100 0 ',
    decriptione: 'This is men clothes 10',
  },
  {
    id: 1,
    name: 'man sale',
    price: '100',
    decriptione: 'This is men clothes 1',
  },
  {
    id: 2,
    name: 'man sale 2',
    price: '200',
    decriptione: 'This is men clothes 2',
  },
  {
    id: 3,
    name: 'man sale 3',
    price: '300',
    decriptione: 'This is men clothes 3',
  },
  {
    id: 4,
    name: 'man sale 4',
    price: '400',
    decriptione: 'This is men clothes 4',
  },
  {
    id: 5,
    name: 'man sale 5',
    price: '500',
    decriptione: 'This is men clothes 5',
  },
  {
    id: 6,
    name: 'man sale 6',
    price: '600',
    decriptione: 'This is men clothes 6',
  },
];

const app = express();
const port = process.env.PORT || 3000;

const saleRouter = require('./src/router/saleRouter')(navigation);
const adminRouters = require('./src/router/adminRouter')();
const loginRouter = require('./src/router/loginRouter')();
const registerRouter = require('./src/router/registerRouter')();

app.use('/sale', saleRouter);
app.use('/admin', adminRouters);
app.use('/login', loginRouter);
app.use('/register', registerRouter);

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));

app.get('/', (req, res) => {
  res.render('index', { Title: 'Home', nav: navigation, clo: clothes });
});

app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
});

const express = require('express'),
  app = express(),
  ejs = require('ejs'),
  port = process.env.PORT || 3000,
  c = console.log;

app.set('view engine', 'ejs');
app.use(express.static('public'));

// http://localhost:3000
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/profile', (req, res) => {
  let user = {
    name: 'Brandal',
    img:
      'https://sm.askmen.com/askmen_me/articlepage/m/mafioso-25-rules-of-wisdom/mafioso-25-rules-of-wisdom_tug6.jpg',
    friends: [] //['mafioso', 'bandit', 'preman', 'yakuza']
  };

  res.render('profile', { user });
});

app.listen(port, err => {
  if (!err) {
    c(`listening on port ${port}`);
  } else {
    c(err);
  }
});

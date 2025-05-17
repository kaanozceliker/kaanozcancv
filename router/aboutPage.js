const express = require('express')
const router = express.Router()
const data = {
  imgURL: '/img/background/about.jpg',
  title: 'Why Me',
  subTitle: 'What you need to know about me and why you should work with me'
}

router.get('/', (req, res) => {
  res.render('site/about', {
    headerData: data,
    isHome: false
  });
});

module.exports = router;

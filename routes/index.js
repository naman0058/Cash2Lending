var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/about',(req,res)=>{
  res.render('about')
})



router.get('/apply',(req,res)=>{
  res.render('apply')
})



router.get('/contact-us',(req,res)=>{
  res.render('contact')
})



router.get('/credit-card',(req,res)=>{
  res.render('creditcard')
})



router.get('/installment-loans',(req,res)=>{
  res.render('installment')
})



router.get('/lines-of-credit',(req,res)=>{
  res.render('lineofcredit')
})




router.get('/notfound',(req,res)=>{
  res.render('notfound')
})



router.get('/payday-loans',(req,res)=>{
  res.render('payday')
})




router.get('/title-loans',(req,res)=>{
  res.render('titleloans')
})



module.exports = router;

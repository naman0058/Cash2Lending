var express = require('express');
var router = express.Router();
 var pool = require('./pool')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , msg:''});
});


router.get('/about',(req,res)=>{
  res.render('about')
})



router.get('/apply',(req,res)=>{
  res.render('apply',{msg:''})
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



router.post('/apply',(req,res)=>{
  let body = req.body
  console.log(req.body)
  pool.query(`insert into apply set ?`,body,(err,result)=>{
    if(err) throw err;
    else res.render('apply',{msg:'Submitted Successfully...'})
  })
 // res.json(res)
})


router.post('/applyforloans',(req,res)=>{
  let body = req.body;
  pool.query(`insert into loans set ?`,body,(err,result)=>{
    if(err) throw err;
    else res.json({msg:'success'})
  })
})




router.post('/',(req,res)=>{
  let body = req.body;
  console.log('data',req.body)
  pool.query(`insert into quote set ?`,body,(err,result)=>{
    if(err) throw err;
    else res.render('index',{msg:'Submitted Successfully...'})
  })

})



router.get('/hi',(req,res)=>{
  pool.query(`select * from quote`,(err,result)=>{
    if(err) throw err;
    else res.json(result)
  })
})










router.get('/loan-request',(req,res)=>{
  if(req.session.adminid){
    pool.query('select * from loans order by id desc',(err,result)=>{
      res.render('reports',{result:result})
    })
  }
  else{
    res.render('admin',{msg : 'Invalid Username & Password'})
  }
 
})


router.get('/apply-request',(req,res)=>{
  if(req.session.adminid){
    pool.query('select * from apply order by id desc',(err,result)=>{
      // res.json(result)
       res.render('reports2',{result:result})
     })
  }
  else{
    res.render('admin',{msg : 'Invalid Username & Password'})
  }
 
})



router.get('/quote-request',(req,res)=>{
  if(req.session.adminid){
    pool.query('select * from quote order by id desc',(err,result)=>{
      res.render('reports1',{result:result})
    })
  }
  else {
    res.render('admin',{msg : 'Invalid Username & Password'})
  }
 
})



router.get('/logout',(req,res)=>{
  req.session.adminid = null ;
  res.redirect('/admin-login')
})


router.get('/admin-login',(req,res)=>{
  res.render('admin',{msg : ''})
})












router.post('/validation',(req,res)=>{
  pool.query(`select * from admin where email = '${req.body.email}' and password = '${req.body.password}'`,(err,result)=>{
      if(err) throw err;
      else if(result[0]){
        req.session.adminid = result[0].id
        res.redirect('/loan-request')
      }
      else {
          res.render('admin',{msg : 'Invalid Username & Password'})
      }
  })
})



module.exports = router;

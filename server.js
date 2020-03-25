const express=require('express');
const hbs=require('hbs');
const app=express();
const fs=require('fs');
const port=process.env.PORT || 3000;
app.use(express.static(__dirname + '/New folder'));
hbs.registerPartials(__dirname +'/views/partials')

app.set('view engine','hbs')
hbs.registerHelper('hassan',()=>{
    return ( new Date().getFullYear()+'hassan')
})

hbs.registerHelper('kabar',(text)=>{
return text.toUpperCase()
})

app.use((req,res,next)=>{

    let now=new Date().toString();
  const log=`${now}: ${req.method} ==${req.url}`;
  fs.appendFileSync('log',log);
  console.log(log)
  
    next();

})


app.use(express.static(__dirname + '/public'));


app.get('/',(req,res)=>{

    res.render('home.hbs',{
        welcome:'welcom to our site',
        
    })
});

app.get('/bad',(req,res)=>{
    res.send({
        message:'bad page'
    })
})

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pagetitle:'aboutpage',
        
    })
})




app.listen(port,()=>{
    console.log('page on port 3000')
});
const express=require('express');
const app =express();
const mongoose=require('mongoose');
const path=require('path');
const Faq = require('./models/faqmodel');
const faqroutes = require('./routes/faqroutes');
const seedDB = require('./seed');
const methodOverride=require('method-override');
require('dotenv').config();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname,'/public')));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));




mongoose.connect(process.env.MONGO_URL, 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
.then(() => {
    console.log("DB Connected")
})
.catch(e => {console.log("Error Occur");console.log(e);});

// seedDB();

app.use('/faq',faqroutes);

app.listen(process.env.PORT || 8080,()=>{
    console.log("Server is Running")
})
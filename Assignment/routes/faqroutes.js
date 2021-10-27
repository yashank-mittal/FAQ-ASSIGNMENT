const express = require('express');
const { findByIdAndUpdate } = require('../models/faqmodel');
const router = express.Router();
const Faq = require('../models/faqmodel');

//Get All Faqs
router.get('/',(req,res)=>{
    res.redirect('/faq');
})

router.get('/faq',async(req,res)=>{
    const faqs=await Faq.find({});
    res.render('index',{faqs})
})

//form to create New Faqs

router.get('/faq/new',(req,res)=>{
    res.render('new');
})

router.post('/faq',async(req,res)=>{
    const faq = req.body;
    await Faq.create(faq);
    res.redirect('/faq');
})

//show a perticular router
router.get('/faq/:id',async(req,res)=>{
    const faq=await Faq.findById(req.params.id);
    res.render('show',{faq});
})

//Edit perticular item

router.get('/faq/:id/edit',async(req,res)=>{
    const faq=await Faq.findById(req.params.id);
    res.render('edit',{ faq });
})

//update
router.patch('/faq/:id',async(req,res)=>{
    await Faq.findByIdAndUpdate(req.params.id,req.body);
    res.redirect(`/faq/${req.params.id}`);
})

router.delete('/faq/:id',async(req,res)=>{
    await Faq.findByIdAndDelete(req.params.id);
    res.redirect('/faq');
})

module.exports = router;

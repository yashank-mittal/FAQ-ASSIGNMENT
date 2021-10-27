const mongoose=require('mongoose');

const faqSchema= new mongoose.Schema({
    ques:{
        type:String,
        required: true
    },
    ans:{
        type:String,
        required:true
    }
})

const Faq = mongoose.model('Faq',faqSchema);

module.exports=Faq;
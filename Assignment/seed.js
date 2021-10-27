const mongoose = require('mongoose');
const Faq = require('./models/faqmodel');

const a=[
    {
        ques: "What is your name",
        ans: "My Name is Yashank Mittal"
    }
];

function seed(){
    Faq.insertMany(a)
    .then(()=>{
        console.log("DB Seeded");
    })
    .catch(e=>{
        console.log(e);
    })
}

module.exports = seed;
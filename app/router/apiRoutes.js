const express = require('express');
const router = express.Router();
const matches = require('../data/friends').friends;



router.post("/matches", (req, res, next)=> {
   console.log(req.body)
   const {name, jobRole, ...questions} = req.body;
   const userScores = Object.keys(questions).map(key=> parseInt(questions[key]))
   const diffBetweenMatches = matches.map(match =>{
       match.diff = match.scores
       .reduce((acc,cv,i) => acc + Math.abs(userScores[i] - cv),0)
       return match
   }).sort((a,b) =>a.diff > b.diff)

    console.log(diffBetweenMatches);
   
   // console.log(Object.keys(questions))
   
   //    console.log(questions)
    res.json({
       "Matched":diffBetweenMatches[0]
   })
   
})



module.exports =router;


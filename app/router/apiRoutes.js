const express = require('express');
const router = express.Router();
const matches = require('../data/friends').friends;

const arraySum = (array) => {
    return array
        .reduce((accumilator, currentValue) => accumilator + currentValue, 0)
}

const submittedAnswers = (answers) => {
    return Object.keys(answers)
        .map(key => answers[key])
        .map(answer => parseInt(answer))

}


const getMatch = (userScores,user) => {
return matches
.filter(match=>match.name !== user.name)
        .map(match => {
            match.difference = Math.abs(arraySum(match.scores) - arraySum(userScores))
            return match;
        }).sort((a, b) => a.difference > b.difference)[0]

}


router.post("/matches", (req, res, next) => {

    const {name,...answers} = req.body;
    const userScores = submittedAnswers(answers);
    matches.push(req.body);


    res.json({
        "match": getMatch(userScores,req.body),
        "user":req.body,
    })

})



module.exports = router;
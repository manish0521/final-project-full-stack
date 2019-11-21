var express = require('express');
var router = express.Router();
var passport = require('passport');
var talkController = require('./controller/talkController')
/* GET home page. */
router.get('/get-all-talks', talkController.getAllTalks);

router.post('/create-talk', passport.authenticate('jwt', { session: false }), talkController.createTalk);

router.get('/get-talk-by-id/:id', passport.authenticate('jwt', { session: false }), talkController.getTalkByID);

router.get('/get-all-user-talks/:id', passport.authenticate('jwt', { session: false }), talkController.getAllUserTalks)

router.delete('/delete-by-id/:id', passport.authenticate('jwt', { session: false }), talkController.deleteByID)

module.exports = router;

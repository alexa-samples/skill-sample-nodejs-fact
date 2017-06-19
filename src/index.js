'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = Football Facts;

var SKILL_NAME = "Football Facts";
var GET_FACT_MESSAGE = "Here's your fact: ";
var HELP_MESSAGE = "You can say tell me a football fact, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
    "Football originated in China around 476 B.C.",
    "In 1876, a coach named Walter Camp, who is considered the “Father of American Football,” helped produce the first rules of American football.",
    "The most watched television event in the United States is the Super Bowl.",
    "It takes about 600 cows to make one full season’s worth of NFL footballs.",
    "A cow has only a 1 in 17,420,000 chance of becoming an NFL football that is used in the Super Bowl.",
    "Dallas Cowboys running back Tony Dorsett is the only player to rush for a 99-yard touchdown, in 1983.",
    "Just two years after finishing their careers, approximately 78% of NFL players go bankrupt.",
    "Though football games usually last around 3 hours, the ball is typically in play for only 11 minutes. Around 56% of the game on TV is devoted to replays.",
    "The NFL consists of 32 teams, with an average team value of $1 billion. MLB has 30 teams, with an average team value of $523 million.",
    "Six teams in the NFL don’t employ cheerleaders: the Bears, the Browns, the Lions, the Giants, the Steelers, and the Packers.",
    "The first recognized football game as played between Rutgers and Princeton Universities in 1869, using rugby-like rules.",
    "The Miami Dolphins are the only NFL team in history to complete an undefeated playing season, in 1972.",
    "Helmets weren’t mandatory for football players until 1939."
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};

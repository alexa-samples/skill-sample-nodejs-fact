'use strict';
var Alexa = require('alexa-sdk');
var APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

var languageStrings = {
    "en-GB": {
        "translation": {
            "FACTS": [
                "A year on Mercury is just 88 days long.",
                "Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.",
                "Venus rotates anti-clockwise, possibly because of a collision in the past with an asteroid.",
                "On Mars, the Sun appears about half the size as it does on Earth.",
                "Earth is the only planet not named after a god.",
                "Jupiter has the shortest day of all the planets.",
                "The Milky Way galaxy will collide with the Andromeda Galaxy in about 5 billion years.",
                "The Sun contains 99.86% of the mass in the Solar System.",
                "The Sun is an almost perfect sphere.",
                "A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.",
                "Saturn radiates two and a half times more energy into space than it receives from the sun.",
                "The temperature inside the Sun can reach 15 million degrees Celsius.",
                "The Moon is moving approximately 3.8 cm away from our planet every year."
            ],
            "SKILL_NAME" : "British Space Facts",
            "GET_FACT_MESSAGE" : "Here's your fact: ",
            "HELP_MESSAGE" : "You can say tell me a space fact, or, you can say exit... What can I help you with?",
            "HELP_REPROMPT" : "What can I help you with?",
            "STOP_MESSAGE" : "Goodbye!"
        }
    },
    "en-US": {
        "translation": {
            "FACTS": [
                "A year on Mercury is just 88 days long.",
                "Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.",
                "Venus rotates counter-clockwise, possibly because of a collision in the past with an asteroid.",
                "On Mars, the Sun appears about half the size as it does on Earth.",
                "Earth is the only planet not named after a god.",
                "Jupiter has the shortest day of all the planets.",
                "The Milky Way galaxy will collide with the Andromeda Galaxy in about 5 billion years.",
                "The Sun contains 99.86% of the mass in the Solar System.",
                "The Sun is an almost perfect sphere.",
                "A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.",
                "Saturn radiates two and a half times more energy into space than it receives from the sun.",
                "The temperature inside the Sun can reach 15 million degrees Celsius.",
                "The Moon is moving approximately 3.8 cm away from our planet every year."
            ],
            "SKILL_NAME" : "American Space Facts",
            "GET_FACT_MESSAGE" : "Here's your fact: ",
            "HELP_MESSAGE" : "You can say tell me a space fact, or, you can say exit... What can I help you with?",
            "HELP_REPROMPT" : "What can I help you with?",
            "STOP_MESSAGE" : "Goodbye!"
        }
    }
};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        var factArr = this.t('FACTS');
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];

        // Create speech output
        var speechOutput = this.t("GET_FACT_MESSAGE") + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t("SKILL_NAME"), randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = this.t("HELP_MESSAGE");
        var reprompt = this.t("HELP_MESSAGE");
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    }
};
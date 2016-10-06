'use strict';
var Alexa = require('alexa-sdk');
var Translations = require('./translations');

var APP_ID = 'amzn1.ask.skill.<enter here>';

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.dynamoDBTableName = 'alexaFactTranslation';
    alexa.resources = Translations.getResources();
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
        if (this.attributes['askedFacts'] === undefined)
        {
            this.attributes['askedFacts'] = [];
        }

        // Get a random space fact from the space facts list
        var facts = this.t('facts');

        var factIndex = Math.floor(Math.random() * facts.length);
        var randomFact = facts[factIndex];

        this.attributes['askedFacts'].push(factIndex);
       
        // Create speech output
        var trans = this.t('get-fact');
        var speechOutput = trans.speechOutput + randomFact;

        var skill = this.t('skill');

        this.emit(':tellWithCard', speechOutput, skill.name, randomFact) // :tell* handler will save attributes
    },
    'AMAZON.HelpIntent': function () {
        var help = this.t('help');
        this.emit(':ask', help.speechOutput, help.reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit('SessionEndedRequest');
    },
    'AMAZON.StopIntent': function () {
        this.emit('SessionEndedRequest');
    },
    'SessionEndedRequest': function () {
      var goodbye = this.t('goodbye');
      this.emit(':tell', goodbye.speechOutput); // :tell* or :saveState handlers required here to save attributes
    }    
};

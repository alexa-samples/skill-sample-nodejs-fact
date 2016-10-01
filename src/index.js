'use strict';
var Alexa = require('alexa-sdk');
var Translations = require('./translations');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
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
        // Get a random space fact from the space facts list
        var facts = this.t('facts');

        var factIndex = Math.floor(Math.random() * facts.length);
        var randomFact = facts[factIndex];

        // Create speech output
        var trans = this.t('get-fact');
        var speechOutput = trans.speechOutput + randomFact;

        var skill = this.t('skill');

        this.emit(':tellWithCard', speechOutput, skill.name, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var help = this.t('help');
        this.emit(':ask', help.speechOutput, help.reprompt);
    },
    'AMAZON.CancelIntent': function () {
        var goodbye = this.t('goodbye');
        this.emit(':tell', goodbye.speechOutput);
    },
    'AMAZON.StopIntent': function () {
      var goodbye = this.t('goodbye');
      this.emit(':tell', goodbye.speechOutput);
    }
};

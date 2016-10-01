'use strict';

function Translations() {};

Translations.prototype.getResources = function () {
  var resources = {
      "en": {
        "translation": {
          "skill": {
            "name": "Space Facts"
          },
          "facts" : [
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
          "get-fact": {
            "speechOutput": "Here's your fact: "
          },
          "help": {
            "speechOutput": "You can say tell me a space fact, or, you can say exit... What can I help you with?",
            "reprompt": "What can I help you with?"
          },
          "goodbye": {
            "speechOutput": "Goodbye!"
          }
        }
      },
      "de": {
        "translation": {
          "skill": {
            "name": "de:Space Facts"
          },
          "facts" : [
            "de:A year on Mercury is just 88 days long.",
            "de:Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.",
            "de:Venus rotates counter-clockwise, possibly because of a collision in the past with an asteroid.",
            "de:On Mars, the Sun appears about half the size as it does on Earth.",
            "de:Earth is the only planet not named after a god.",
            "de:Jupiter has the shortest day of all the planets.",
            "de:The Milky Way galaxy will collide with the Andromeda Galaxy in about 5 billion years.",
            "de:The Sun contains 99.86% of the mass in the Solar System.",
            "de:The Sun is an almost perfect sphere.",
            "de:A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.",
            "de:Saturn radiates two and a half times more energy into space than it receives from the sun.",
            "de:The temperature inside the Sun can reach 15 million degrees Celsius.",
            "de:The Moon is moving approximately 3.8 cm away from our planet every year."
          ],
          "get-fact": {
            "speechOutput": "de:Here's your fact: "
          },
          "help": {
            "speechOutput": "de:You can say tell me a space fact, or, you can say exit... What can I help you with?",
            "reprompt": "de:What can I help you with?"
          },
          "goodbye": {
            "speechOutput": "de:Goodbye!"
          }
        }
      }
    };

  return resources;
};

module.exports = new Translations();

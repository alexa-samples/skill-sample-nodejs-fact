/**
 * Personalization Utility provides person details and personalized prompts
 **/
'use strict';

const EMPTY = "";

/**
 * 
 * @param handlerInput Get PersonalizedPrompt from Id else default to Empty
 * @returns  Person's name in a response using alexa:name tag
 * example: <alexa:name type="first" personId="amzn1.ask.person.ABCDEF..."/>
 */
const getPersonalizedPrompt = (handlerInput) => {
    if (getPerson(handlerInput)) {
        return getPersonalizedPromptFromId(handlerInput);
    }
    return handleFallback;
}
/**
 * Get person from requestEnvelope if personalization enabled.
 * 
 */
const getPerson = (handlerInput) => { return handlerInput.requestEnvelope.context.System.person };

/**
 * Get person Id from requestEnvelope if personalization enabled.
 */
const getPersonId = (handlerInput) => { return getPerson(handlerInput).personId };

/**
 * Handle fallback logic incase person not found.
 */
const handleFallback = () => { return EMPTY }

/**
 * Get personalized greeting from person Id.
 * Refer: https://developer.amazon.com/en-US/docs/alexa/custom-skills/add-personalized-greetings-or-prompts.html
 */
const getPersonalizedPromptFromId = handlerInput => {
    return `<alexa:name type="first" personId="${getPersonId(handlerInput)}" />`
}

/**
 * Export the list of needed for clients to use
 **/
module.exports = {
    getPersonalizedPrompt,
    getPerson
};

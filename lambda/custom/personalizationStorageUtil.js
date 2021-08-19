/**
 * Personalization Storage Utility - Helps persist presonalized preference
 **/
'use strict';

const AWS = require('aws-sdk');
const ddbAdapter = require('ask-sdk-dynamodb-persistence-adapter');
const personalizationUtil = require('./personalizationUtil')

/**
 *  DynamoDb persistenceAdapter with partition key based on personId
 */
const personlizedPersitenceAdapter = () => {
    return new ddbAdapter.DynamoDbPersistenceAdapter({
        tableName: process.env.DYNAMODB_PERSISTENCE_TABLE_NAME,
        createTable: false,
        partitionKeyGenerator: ddbAdapter.PartitionKeyGenerators.personId,
        dynamoDBClient: new AWS.DynamoDB({ apiVersion: 'latest', region: process.env.DYNAMODB_PERSISTENCE_REGION })
    })
}

/**
 * Set preference if personalization enabled
 */
const savePreference = (handlerInput, message) => {
    if (personalizationUtil.getPerson(handlerInput)) {
        const attributesManager = handlerInput.attributesManager;
        attributesManager.setPersistentAttributes(message);
        attributesManager.savePersistentAttributes();
        return true;
    }
}

/**
 * Creates a new attributes and sets it with key and value
 */
const setAttribute = (key, value) => {
    const message = {}
    message.key = key
    message.value = value
    return message
}

/**
 * Adds attributes on existing message
 */
const addAttribute = (message, key, value) => {
    message.key = key
    message.value = value
    return message
}

/**
 * Returns preference if personalization enabled
 */
async function getPreference(handlerInput) {
    if (personalizationUtil.getPerson(handlerInput)) {
        return await handlerInput.attributesManager.getPersistentAttributes();
    }
}

/**
* Returns preference if personalization enabled or return default
*/
async function getPreferenceOrDefault(handlerInput, defaultObj) {
    if (personalizationUtil.getPerson(handlerInput)) {
        return await handlerInput.attributesManager.getPersistentAttributes();
    }
    return defaultObj;
}

/**
 * Export the list of needed for clients to use
 **/
module.exports = {
    personlizedPersitenceAdapter,
    savePreference,
    setAttribute,
    addAttribute,
    getPreference,
    getPreferenceOrDefault
};
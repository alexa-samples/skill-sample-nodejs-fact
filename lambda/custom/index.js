/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');

//=========================================================================================================================================
//TODO: このコメント行より下の項目に注目してください。
//=========================================================================================================================================

const SKILL_NAME = "宇宙の豆知識";
const GET_FACT_MESSAGE = "知ってましたか？";
const HELP_MESSAGE = "豆知識を聞きたい時は「宇宙の豆知識」と、終わりたい時は「おしまい」と言ってください。どうしますか？";
const HELP_REPROMPT = "どうしますか？";
const FALLBACK_MESSAGE = "";
const FALLBACK_REPROMPT = "";
const STOP_MESSAGE = "さようなら";

//=========================================================================================================================================
//「TODO: ここから下のデータを自分用にカスタマイズしてください。」
//=========================================================================================================================================

const data = [
    "水星の一年はたった88日です。",
    "金星は水星と比べて太陽より遠くにありますが、気温は水星よりも高いです。",
    "金星は反時計回りに自転しています。過去に起こった隕石の衝突が原因と言われています。",
    "火星上から見ると、太陽の大きさは地球から見た場合の約半分に見えます。",
    "木星の<sub alias='いちにち'>1日</sub>は全惑星の中で一番短いです。",
    "天の川銀河は約50億年後にアンドロメダ星雲と衝突します。",
    "太陽の質量は全太陽系の質量の99.86%を占めます。",
    "太陽はほぼ完璧な円形です。",
    "皆既日食は一年から二年に一度しか発生しない珍しい出来事です。",
    "土星は自身が太陽から受けるエネルギーの2.5倍のエネルギーを宇宙に放出しています。",
    "太陽の内部温度は摂氏1500万度にも達します。",
    "月は毎年3.8cm地球から離れていっています。"
];

//=========================================================================================================================================
//この行から下のコードに変更を加えると、スキルが動作しなくなるかもしれません。わかる人のみ変更を加えてください。  
//=========================================================================================================================================

const GetNewFactHandler = {
    canHandle(handlerInput) {
      const request = handlerInput.requestEnvelope.request;
      return request.type === 'LaunchRequest'
        || (request.type === 'IntentRequest'
          && request.intent.name === 'GetNewFactIntent');
    },
    handle(handlerInput) {
      const randomFact = data[Math.floor(Math.random() * data.length)];
      const speechOutput = GET_FACT_MESSAGE + randomFact;
  
      return handlerInput.responseBuilder
        .speak(speechOutput)
        .withSimpleCard(SKILL_NAME, randomFact)
        .getResponse();
    },
  };
  
  const HelpHandler = {
    canHandle(handlerInput) {
      const request = handlerInput.requestEnvelope.request;
      return request.type === 'IntentRequest'
        && request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
      return handlerInput.responseBuilder
        .speak(HELP_MESSAGE)
        .reprompt(HELP_REPROMPT)
        .getResponse();
    },
  };
  
  const FallbackHandler = {
    // 2018-May-01: AMAZON.FallackIntent は現在 en-US のみ対応しております。
    //              その他の地域・言語では呼び出されませんが、デプロイには問題
    //              ありません。    
    canHandle(handlerInput) {
      const request = handlerInput.requestEnvelope.request;
      return request.type === 'IntentRequest'
        && request.intent.name === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
      return handlerInput.responseBuilder
        .speak(FALLBACK_MESSAGE)
        .reprompt(FALLBACK_REPROMPT)
        .getResponse();
    },
  };
  
  const ExitHandler = {
    canHandle(handlerInput) {
      const request = handlerInput.requestEnvelope.request;
      return request.type === 'IntentRequest'
        && (request.intent.name === 'AMAZON.CancelIntent'
          || request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
      return handlerInput.responseBuilder
        .speak(STOP_MESSAGE)
        .getResponse();
    },
  };
  
  const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
      const request = handlerInput.requestEnvelope.request;
      return request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
      console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);
  
      return handlerInput.responseBuilder.getResponse();
    },
  };
  
  const ErrorHandler = {
    canHandle() {
      return true;
    },
    handle(handlerInput, error) {
      console.log(`Error handled: ${error.message}`);
  
      return handlerInput.responseBuilder
        .speak('Sorry, an error occurred.')
        .reprompt('Sorry, an error occurred.')
        .getResponse();
    },
  };
  
  const skillBuilder = Alexa.SkillBuilders.custom();
  
  exports.handler = skillBuilder
    .addRequestHandlers(
      GetNewFactHandler,
      HelpHandler,
      ExitHandler,
      FallbackHandler,
      SessionEndedRequestHandler
    )
    .addErrorHandlers(ErrorHandler)
    .lambda();
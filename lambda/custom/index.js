'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: このコメント行より下の項目に注目してください。
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = undefined;

var SKILL_NAME = "豆知識";
var GET_FACT_MESSAGE = "知ってましたか？";
var HELP_MESSAGE = "豆知識を聞きたい時は「豆知識」と、終わりたい時は「おしまい」と言ってください。どうしますか？";
var HELP_REPROMPT = "どうしますか？";
var STOP_MESSAGE = "さようなら";

//=========================================================================================================================================
//「TODO: ここから下のデータを自分用にカスタマイズしてください。」
//=========================================================================================================================================
var data = [
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

Regions: [🇺🇸](../../tree/en-US)

# Alexa 豆知識スキルの作成 🇯🇵

<img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/quiz-game/header._TTH_.png" />

[![音声ユーザーインターフェイス](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/1-off.png)](instructions/1-voice-user-interface.md)
[![Lambda 関数](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/2-off.png)](instructions/2-lambda-function.md)
[![VUIとコードを接続する](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/3-off.png)](instructions/3-connect-vui-to-code.md)
[![テスト](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/4-off.png)](instructions/4-testing.md)
[![カスタマイズ](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/5-off.png)](instructions/5-customization.md)
[![スキルの公開](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/6-off.png)](instructions/6-publication.md)

## 学習すること
*  AWS Lambda
*  Alexa Skills Kit (ASK)
*  スキルビルダー
*  音声ユーザーインターフェース(VUI)の設計
*  スキルの申請

## 事前準備
*  [Amazon開発者ポータル](http://developer.amazon.com)のアカウント
*  [AWS](http://aws.amazon.com/)のアカウント
*  サンプルコード: [GitHub](lambda/custom/index.js)
*  シンプルなグラフィック編集ツール
*  好きなトピックに関する豆知識(25個以上)

## スキルの概要
Alexa豆知識スキルは初心者向けの"Hello, World"的なスキルです。あるトピックに関する面白い豆知識のリストを用意してください。エンドユーザがあなたのスキルを起動すると、Alexaはそれらのうちの１つを読み上げます。このスキルを作成した目的は、面白くて役に立つスキルの開発を通して、Alexaスキルの開発プロセスの中で各開発要素がどのように組み合わさるかを理解してもらうことです。

このAlexaスキルテンプレートは、あなたが豆知識スキルを初めて作る時に役に立つでしょう。エンドユーザは次ようにしてあなたが作るスキルを利用できます。

*  「Alexa、スーパーヒーロー豆知識に豆知識を聞いて」
*  「Alexa、野球豆知識を開いて」
*  「Alexa、タイタニック豆知識に他の豆知識を聞いて」

Alexaはこれらの問いかけに対して次のように答えます。

*  「知ってましたか？アイアンマンのアーマーにはかつてローラースケートがついていました。」
*  「知ってましたか？ラルフ・カイナーはメジャーリーグデビュー後、七年連続で本塁打王になったただ一人の選手です。」
*  「知ってましたか？タイタニック号は一日に600トンの石炭を消費しました。176人の乗務員がシャベルでボイラーに石炭を投入し、毎日100トンの灰を海に放出していました。」

<!--このスキルの動作例を見たい場合は、[Alexaスキルストア](http://amazon.com/skills)から[Gloucester Facts](https://www.amazon.com/Robert-McCauley-Gloucester-Facts/dp/B01I5MOIA2/)を有効化して使ってみてください。-->

[![始めましょう](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/general/buttons/button_get_started.png)](instructions/1-voice-user-interface.md)

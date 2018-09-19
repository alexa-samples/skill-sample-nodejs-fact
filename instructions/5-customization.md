# Alexa 豆知識スキルの作成
<img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/quiz-game/header._TTH_.png" />

[![音声ユーザーインターフェース](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/1-locked.png)](./1-voice-user-interface.md)[![Lambda 関数](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/2-locked.png)](./2-lambda-function.md)[![VUIとコードを接続する](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/3-locked.png)](./3-connect-vui-to-code.md)[![テスト](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/4-locked.pn)](./4-testing.md)[![カスタマイズ](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/5-on.png)](./5-customization.md)[![スキルの公開](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/6-locked.png)](./6-publication.md)

## スキルのカスタマイズ

ここまでで豆知識スキルの作業用コピーが用意できました。これをあなたのオリジナルのスキルにするために、事前に用意しておいたデータと応答文を使ってカスタマイズしましょう。変更すべき点は以下の通りです。

1.  **新しいデータ** あなたが選んだトピックに関する豆知識を用意してください。最低でも25個、できれば100個近くの豆知識があればユーザーによりよい体験を提供できるでしょう。

    1.  **index.js** を開きます。まだコードをダウンロードしていない場合は、ここから[ダウンロード](../lambda/custom/index.js)できます。[Atom](http://atom.io)や[Sublime Text](http://sublimetext.com)、[VSCode](http://code.visualstudio.com)といったシンプルで軽量なエディタで修正することもできますが、ブラウザに表示された Lambda関数を直接編集することもできます。

    2. コードの中から **TODO: ここから下のデータを自分用にカスタマイズしてください。** というコメント文を探します。 これがスキルのデータ部分です。シンプルな豆知識のリストであることがわかるでしょう。

    3.  index.js の内容を変更したら、**AWS マネジメントコンソール** に移動して Lambda 関数を開き、関数コードのところで index.js のデータを入れ替えます。テキストをコピー&ペーストするだけなのでとても簡単です。

       ![Lambda関数コード](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/5-1-5-lambda-code-box.png)

2.  **ユーザーへの応答文**

	応答文はあなたのスキル用にカスタマイズした方が良いでしょう。

    1.  **[index.js](../lambda/custom/index.js)** のコピーに戻ります。

    2.  **TODO: このコメント行より下の項目に注目してください。** というコメント行を探してください。その下にスタマイズすべき部分がみつかります。

    3.  **index.js** をファイルの下の方まで読むと、どの部分を変更すべきかおよそ察しがつくでしょう。

3.  **新しい言語** もし、日本語以外の言語にスキルを提供したい場合は、Alexaの応答がそれらの言語でなされるようにしてください。

    *  例えば、ドイツ向きスキルを作る場合、全てのAlexaからの応答はドイツ語でなされる必要があります。もしドイツ向きのスキルの応答が日本語でなされるようなことがある場合、審査を通過することはできないでしょう。

4.  このページに記載した全てのアップデートが終わったら、下のボタンをクリックして、**スキルの公開**に進んでください

[![スキルの公開](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/general/buttons/button_next_publication.png)](./6-publication.md)
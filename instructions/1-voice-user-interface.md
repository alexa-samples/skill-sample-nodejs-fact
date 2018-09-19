# Alexa 豆知識スキルの作成
<img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/quiz-game/header._TTH_.png" />

[![音声ユーザーインターフェース](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/1-on.png)](./1-voice-user-interface.md)[![Lambda 関数](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/2-locked.png)](./2-lambda-function.md)[![VUIとコードを接続する](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/3-locked.png)](./3-connect-vui-to-code.md)[![テスト](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/4-locked.pn)](./4-testing.md)[![カスタマイズ](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/5-locked.png)](./5-customization.md)[![スキルの公開](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/6-locked.png)](./6-publication.md)

1.  まず [Amazon開発者ポータル](https://developer.amazon.com/ja/alexa) を開き、右上にある **サインイン** ボタンをクリックします。もし、まだアカウントを持っていない場合でも、無料で新規アカウントを作成することができます。

2.  サインイン後、画面上部にある **あなたのAlexaコンソール** にマウスカーソルをあてて、**Skills**をクリックします。

3.  **alxea developer console** のページが開いたら、**スキルの作成** ボタンをクリックします。

4.  **スキル名**　を入力します。これはAlexaスキルストアでユーザーに表示される名前です。ここでは "宇宙の豆知識" にします。またデフォルトの言語を **日本語（日本）** に設定してください。 

5.  **カスタム** モデルを選択して、画面右上の**スキルを作成** ボタンを押してください。 

6.  **対話モデルの構築**
    1. 画面左側のナビゲーションパネルの **対話モデル** から **JSONエディター** を選択してください。右側JSONエディターの内容を、[models/ja-JP.json](../models/ja-JP.json) の中のもので置き換えてください。(選択したスキルの言語と同じモデルであることをご確認ください) 置き換えたら **モデルを保存** をクリックします
    2. **対話モデル** から **呼び出し名** を選択してください。ここで指定する呼び出し名をユーザーが発話すると、スキルが起動します。ここでは "宇宙の豆知識" にします。完了したら **モデルを保存** をクリックします。 
    3. **モデルをビルド** ボタンをクリックします。 **正常にビルドされました** というメッセージがでるまで、しばらくお待ちください。
    
7.  **オプショナル**  画面左側のナビゲーションパネルの **対話モデル** にある **インテント** と **スロットタイプ** は、先のJSONエディターによる対話モデルの入力により自動的に構築されます。よろしければそれぞれ確認して、ユーザーが発話しそうなパターンを考慮して対話モデルを膨らませてみてください。これらを変更した場合は、**モデルを保存** と **モデルをビルド** を都度行うことをお忘れなく。**インテント** と **スロットタイプ** に関しては[技術資料](https://developer.amazon.com/docs/custom-skills/create-intents-utterances-and-slots.html?&sc_category=Owned&sc_channel=RD&sc_campaign=Evangelism2018&sc_publisher=github&sc_content=Survey&sc_detail=fact-nodejs-V2_GUI-1&sc_funnel=Convert&sc_country=WW&sc_medium=Owned_RD_Evangelism2018_github_Survey_fact-nodejs-V2_GUI-1_Convert_WW_beginnersdevs&sc_segment=beginnersdevs)を参照してください。
    
8.  対話モデルのビルドが成功した場合、次のステップに進んでください。ビルドがうまくいかなかった場合、エラーが表示されますので解決を試みてください。このガイドの次のステップでは、AWS 開発者コンソールから Lambda 関数を作成します。このブラウザのタブは開いたままにしておいてください。[3ページ: VUIとコードを繋げる](3-connect-vui-to-code.md)で再びこの画面に戻ってきます。
    
     もし、対話モデルでエラーが発生するようであれば、下記を確認してください。

     *  **コードを正しく適切なボックスにコピー&ペーストしましたか？**
     *  **対話モデルもしくはサンプル発話に誤った文字を入力していませんか？**

[![次](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/general/buttons/button_next_lambda_function.png)](./2-lambda-function.md)
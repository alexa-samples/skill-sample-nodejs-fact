# Alexa 豆知識スキルの作成
[![音声ユーザーインターフェース](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/1-on.png)](1-voice-user-interface.md)
[![Lambda 関数](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/2-off.png)](2-lambda-function.md)
[![VUIとコードを接続する](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/3-off.png)](3-connect-vui-to-code.md)
[![テスト](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/4-off.png)](4-testing.md)
[![カスタマイズ](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/5-off.png)](5-customization.md)
[![スキルの公開](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/6-off.png)](6-publication.md)


## 開発者ポータルで Alexa スキルの設定を行う

Alexa スキルは２つの部分からできています。１つは[音声ユーザーインターフェース (VUI)](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/defining-the-voice-interface)です。ここで、エンドユーザからの音声入力をどのように処理し、特定の指示が発話された時にどのコードが実行されるか定義します。もう１つはスキルの実際のコードロジックです。これについては、このステップバイステップガイドの[2ページ](2-lambda-function.md)で説明します。

1.  まず [Amazon開発者ポータル](http://developer.amazon.com) を開き、右上にある **サインイン** ボタンをクリックします。もし、まだアカウントを持っていない場合でも、無料で新規アカウントを作成することができます。

    ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/1-1-developer-portal.png)

2.  サインイン後、画面の上にある **ALEXA** タブをクリックします。

    ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/1-2-alexa-button.png)

3.  **ALEXA** のページが開いたら、**Alexa Skills Kit** の **始める** ボタンをクリックします。

    ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/1-3-alexa-skills-kit.png)

4.  **新しいスキルを追加する** ボタンをクリックします。 

	新しい Alexa スキルの設定画面の最初のページが開きます。

    ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/1-4-add-a-new-skill.png)

5.  **スキル情報** ページに必要な情報を入力してください。 

	入力の際、下記のヒントを参考にしてください。

    ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/1-5-skill-information.png)
    
    ### スキル情報の入力
    1.  **スキルの種類** 	今回のスキルでは「カスタム対話モデル」を利用します。

    2.  **言語** 	サポートしたい言語を選択します。後から他の言語を追加することもできます。(このガイドでは「Japanese」を利用します。)

    3.  **スキル名**　Alexa スキルストアでユーザーに表示される名前です。ここでは「豆知識」と入力することにします。

    4.  **呼び出し名**　ユーザーがスキルを呼び出す際に使う名前です。以下に呼び出し名の条件を記載します。条件についての詳細は[カスタムスキルの呼び出し名を決定する](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/choosing-the-invocation-name-for-an-alexa-skill)を参照してください。ここではスキル名と同じ「豆知識」を呼び出し名にします。
    
    5.  **AudioPlayer** 今回の豆知識スキルではオーディオファイルは使用しないので「いいえ」を選択してください。スキルにオーディオを追加する方法について知りたい場合は、[Audio Player ガイド](https://github.com/alexa/skill-sample-nodejs-audio-player)を参照してください。

6.  **次へ** ボタンをクリックし **対話モデル** のページに移動します。

    ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/1-6-next-button.png)

7.  **スキルビルダーを起動する** ボタンをクリックします。スキルビルダーのダッシュボードが開きます。
    
    ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/1-7-skill-builder-launch.png)

8.  ダッシュボードの左上にある **Intents** の右にある **Add an Intent +** をクリックします。
    
    ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/1-8-intents-button.png)

9.  現れたテキストボックスの中にインテント名: **GetNewFactIntent** を入力し **Create Intent** ボタンをクリックします。
   
    ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/1-9-add-custom-intent.png)

10. テキストボックスにサンプル発話 (Sample Utterances) を10〜15個程度追加してください。これらはユーザーがこのインテントを呼び出したい時に発する言葉です。以下に例を記載します。
    
    ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/1-10-sample-utterances.png)

11. **Save Model** ボタンをクリックし、その後、 **Build Model** ボタンをクリックします。
    
    ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/1-12-skill-builder-build-save-model.png)

12.  対話モデルが問題なくビルドされたら、 **Configuration** ボタンをクリックし、設定の画面に移動してください。このガイドの次のステップでは、AWS 開発者コンソールから Lambda 関数を作成します。このブラウザのタブは開いたままにしておいてください。[3ページ: VUIとコードを繋げる](3-connect-vui-to-code.md)で再びこの画面に戻ってきます。


     ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/1-13-skill-builder-configuration.png)

     もし、対話モデルでエラーが発生するようであれば、下記を確認してください。

     *  **コードを正しく適切なボックスにコピー&ペーストしましたか？**
     *  **対話モデルもしくはサンプル発話に誤った文字を入力していませんか？**

13. ここまで終わったら、下のボタンをクリックして Lambda 関数に進んでください。

[![Lambda関数](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/general/buttons/button_next_lambda_function.png)](2-lambda-function.md)
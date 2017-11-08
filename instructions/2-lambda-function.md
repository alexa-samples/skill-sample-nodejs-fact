# Alexa 豆知識スキルの作成
[![音声ユーザーインターフェース](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/1-locked.png)](1-voice-user-interface.md)
[![Lambda 関数](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/2-on.png)](2-lambda-function.md)
[![VUIとコードを接続する](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/3-off.png)](3-connect-vui-to-code.md)
[![テスト](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/4-off.png)](4-testing.md)
[![カスタマイズ](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/5-off.png)](5-customization.md)
[![スキルの公開](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/6-off.png)](6-publication.md)

## Amazon Web Services を使い Lambda 関数を作成する

このガイドの[最初のステップ](1-voice-user-interface.md)で、Alexa スキル用の音声ユーザーインターフェース (VUI) を作成しました。このページでは、[Amazon Web Services](http://aws.amazon.com) を使って Lambda 関数を作っていきます。公式ドキュメント [Lambda 関数の詳細について](http://aws.amazon.com/lambda) にも詳しく記載されいますが、今回のスキルを作る上で知っておくべきことは Lambda はコードが実行される環境である、ということだけです。ユーザーが Alexa でスキルを呼び出したとき、適切な応答を返して会話を成立させるのが Lambda 関数です。

1.  **http://aws.amazon.com**にサインインしてコンソールを開きます。まだアカウントを持っていない場合は、アカウントを作成する必要があります。[新規AWSアカウントの作成手順](../set-up-aws.md)を参考にしてください。

	![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/2-1-sign-in-to-the-console.png)

2.  画面の上にあるメニューバーから **サービス** を選び、検索窓に **Lambda** と入力します。サービス一覧からも選択することができます。Lambda は「コンピューティング」のセクションにあります。

	![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/2-2-services-lambda.png)

3.  **AWS リージョン** を確認します。Alexa Skills Kit が利用できる Lambda のリージョンは2017年11月時点では、アジアパシフィック (東京)、米国東部 (バージニア北部)、米国西部 (オレゴン)、EU (アイルランド)の４つです。スキルのユーザーに最も近いリージョンを選択します。

    ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/2-3-check-region.png)

4.  **関数の作成** ボタンをクリックします。画面の右上にあります。

    ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/2-4-create-a-lambda-function.png)

5.  **alexa-skill-kit-sdk-factskill** という名前のブループリントを選択します。 ブループリントはスキルを作成する上で必要となる全ての設定が含まれるショートカットとしてあらかじめ用意されています。Lambda 関数用の Alexa-sdk もあらかじめ用意されているので、自分でアップロードする必要はありません。

    ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/2-5-blueprint.png)


6.  **基本的な情報** この画面は Lambda 関数で重要な項目を入力します。これらの値はあなたにしか見えませんが、関数名は何か意味のある名前をつけるようにしてください。もし、特に案がないのであれば、ここでは「FactSkill」でも良いでしょう。

    ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/2-7-configure-your-function.png)

7.  **Lambda 関数用 IAM ロールの設定**  ロールがまだない場合は[初めてLambda用ロールを作成する場合の手順](../lambda-role.md)を参考に作成してください。すでにロールがある場合は、 **既存のロールを選択**の値を「lambda\png)

	ここまでの設定が終わったら**関数の作成**をクリックします。

	![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/2-4-create-a-lambda-function.png)

8.  **トリガーの設定** 「トリガー」のタブをクリックしてトリガーの設定画面を表示します。

   ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/2-7b-switch_to_trigger.png)
	
  「＋トリガーを追加」をクリックします。
	
   ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/2-7c-add_a_trigger.png)

   たくさんの AWS サービスから Lambda 関数を起動できます。Alexa スキルから Lambda を起動するには「Alexa Skills Kit」を選択してください。Alexa Skills Kit がリストの中に見つからない時は、このページのステップ3からやり直してください。

   ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/2-6-configure-your-trigger.png)

   Alexa Skills Kit を選択したら **送信** ボタンをクリックし、再び設定画面に戻ります。


9.  Lambda関数のコード入力ボックスに必要なコードを貼り付けます。このスキル用のコードは [GitHub](../src/index.js)にあります。コード入力ボックス内のコードを削除し、この新しいコードを貼り付けてください。

	![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/2-9-paste-lambda-code.png)

10. **設定を保存** 今回はその他の設定は全てそのままで大丈夫です。**保存** ボタンをクリックして関数コードと設定を保存します。

    ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/2-10-save-button.png)

11. このセクションの**最後のステップ**です。 右上に表示されている ARN の文字列をコピーしてください。この値はこのガイドの次のセクションで必要になります。

    ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/2-12-copy-ARN._NEW_.png)

<br/><br/>
[![VUIとコードを接続する](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/general/buttons/button_next_connect_vui_to_code.png)](3-connect-vui-to-code.md)
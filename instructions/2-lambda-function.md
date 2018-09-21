# Alexa 豆知識スキルの作成
<img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/quiz-game/header._TTH_.png" />

[![音声ユーザーインターフェース](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/1-locked.png)](./1-voice-user-interface.md)[![Lambda 関数](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/2-on.png)](./2-lambda-function.md)[![VUIとコードを接続する](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/3-locked.png)](./3-connect-vui-to-code.md)[![テスト](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/4-locked.pn)](./4-testing.md)[![カスタマイズ](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/5-locked.png)](./5-customization.md)[![スキルの公開](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/6-locked.png)](./6-publication.md)

## Amazon Web Services を使い Lambda 関数を作成する

このガイドの[最初のステップ](1-voice-user-interface.md)で、Alexa スキル用の音声ユーザーインターフェース (VUI) を作成しました。このページでは、[Amazon Web Services](http://aws.amazon.com/jp) を使って Lambda 関数を作っていきます。詳細は [AWS Lambda](http://aws.amazon.com/jp/lambda) に記載されていますが、今回のスキルを作る上で知っておくべきことは、私たちのコードは AWS Lambda で実行されるということだけです。ユーザーが Alexa でスキルを呼び出したとき、適切な応答を返して会話を成立させるのが Lambda 関数です。

1.  **http://aws.amazon.com/jp** にサインインしてコンソールを開きます。まだアカウントを持っていない場合は、アカウントを作成する必要があります。[新規AWSアカウントの作成手順](../set-up-aws.md)を参考にしてください。

	[![デベロッパーコンソール](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/2-1-sign-in-to-the-console.png)](https://console.aws.amazon.com/console/home)

2.  画面の上にあるメニューバーから **AWS サービス** を選び、検索窓に **Lambda** と入力します。サービス一覧からも選択することができます。Lambda は「コンピューティング」のセクションにあります。

	[![Lambda](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/2-2-services-lambda.png)](https://console.aws.amazon.com/lambda/home)

3.  **AWS リージョン** を確認します。Alexa Skills Kit が利用できる Lambda のリージョンは2017年11月時点では、アジアパシフィック (東京)、米国東部 (バージニア北部)、米国西部 (オレゴン)、EU (アイルランド)の４つです。スキルのユーザーに最も近いリージョンを選択します。

    ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/2-3-check-region.png)

4.  **関数の作成** ボタンをクリックします。画面の右上にあります。

    ![関数の作成](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/2-4-create-a-lambda-function.png)

5.  関数の作成ページは "一から作成"、"設計図"、"サーバーレスアプリケーションのレポジトリ"という３つのボックスがありますので、**サーバーレスアプリケーションのレポジトリ** を選択してください。簡便化のため、スキルを作成する上で必要となる全ての設定を行うアプリケーションを用意しています。Lambda 関数用の Alexa-sdk もあらかじめ用意されているので、自分でアップロードする必要はありません。

6. **検索フィールドに　`fact` と入力して 　`alexa-skills-kit-nodejs-factskill` という名前のアプリケーションを検索してください。** もしくは名前をすべて入力すれば、検索結果を絞り込むこともできます。 

7. **検索したアプリケーションをクリックしてください** このアプリケーションはLambda関数を作成し、Alexaスキルキットから呼び出しされる権限と、IAMロールの設定を行います。加えてGitHubから関連する一連のコードを取得し追加します。

8. 必要でしたら Application name を変更して、**Deploy** ボタンをクリックしてください。

9. 画面右下に現れる３つの Resource の Status がすべて **CREATE_COMPLETE** になるまで待ちます。このとき、画面中央にも **Application successfully deployed** と表示されるはずです。

10. Lamda コンソールで作成された Lamda関数を開きます。通常、Resource 一覧の一番上に表示されているものをクリックしてください。

11. Lamda関数のページに移行したら、ページをスクロールダウンして、**関数コード**　を参照してください。

12. index.js の内容を [lamda/custom/index.js](../lambda/custom/index.js) のコードで置き換えてください。完了したら画面右上の　**保存**　ボタンをクリックします。

13. このページの先頭のほうに、このLambda関数の Amazon Resource Name (ARN)が表示されています。(表示されていなければスクロールアップしてみてください) この値は次のステップで利用しますので、**arn: で始まる値をコピーしておいてください**

    ![ARNのコピー](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/2-12-copy-ARN._NEW_.png)

[![次](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/general/buttons/button_next_connect_vui_to_code.png)](./3-connect-vui-to-code.md)

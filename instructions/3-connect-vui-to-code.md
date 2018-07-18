# Alexa 豆知識スキルの作成
[![音声ユーザーインターフェース](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/1-locked.png)](1-voice-user-interface.md)
[![Lambda 関数](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/2-locked.png)](2-lambda-function.md)
[![VUIとコードを接続する](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/3-on.png)](3-connect-vui-to-code.md)
[![テスト](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/4-off.png)](4-testing.md)
[![カスタマイズ](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/5-off.png)](5-customization.md)
[![スキルの公開](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/6-off.png)](6-publication.md)

## 音声ユーザーインターフェース (VUI) とコードをつなげる

このガイドの[1ページ目](1-voice-user-interface.md)で、エンドユーザーから期待するインテントとサンプル発話の設定を行い音声ユーザーインターフェースを作成しました。[2ページ目](2-lambda-function.md)では、Lambda 関数を作成しこのスキルに必要な全てのロジックを実装しました。このページでこれら２つの部分をつなげます。

1.  [Amazon開発者ポータル](https://developer.amazon.com/edw/home.html#/skills/list)に戻り、一覧からあなたのスキルを選択します。

2.  左側にある**設定**タブを開きます。

    ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/3-2-configuration-tab.png)

3.  エンドポイントとして **AWS Lambda ARN** を選択します。コードは好きな場所に設置することも可能ですが、単純化とコスト削減のため、ここでは AWS Lambda を利用します。ウェブサービスとしてカスタムスキルをホスティングする方法については[こちら](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/developing-an-alexa-skill-as-a-web-service)を参照してください。AWS の無料利用枠を利用することで、毎月100万回の Lambda 関数の起動、320万秒のコンピューティング時間が無料で使えます。無料利用枠については[こちら](https://aws.amazon.com/jp/free/)を参照してください。 

	![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/3-4-paste-arn._NEW_.png)

4.  前のセクションの最後のステップでコピーした Lambda の **ARN (Amazon リソースネーム)** をデフォルトのテキストボックスに貼り付けます。 上のスクリーンショットのようになります。

5.  **アカウントリンク** は **いいえ** のままにします。 このスキルではアカウントリンクは使用しません。アカウントリンクの詳細については[Alexa ユーザーとシステムユーザーを関連付ける](https://developer.amazon.com/ja/docs/custom-skills/link-an-alexa-user-with-a-user-in-your-system.html)を参照してください。

6. 今回のサンプルでは **アクセス権限** の項目はデフォルトのままにし、次のステップに進みましょう。

[![テスト](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/general/buttons/button_next_testing.png)](4-testing.md)

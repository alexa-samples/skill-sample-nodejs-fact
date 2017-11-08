# 最初のLambdaロールを設定する

このページを読んでいるということは、おそらくあなたはLambda関数の最初のロールを設定しようとしているはずです。手順は簡単ですが、手順のすべてについて「なぜ」おこなうのかを理解しておいてほしいと思います。

1.  **Roleドロップダウンから「Create a custom role」を選択します。** ブラウザで新しいタブが開きますので、ポップアップが有効になっていることを確認してください。

    ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/lambda-role/1-choose-custom-role._TTH_.png)

2.  **新しいIAMロールを作成しています。**  IAMとは、Identity and Access Management の略です.  ([IAMについて、ここで詳細を確認できます。](http://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html))  このロールを作成することで、Lambda関数は、関数自身のためにCloudWatch logsを作成できるようになります。 ([IAMロールによる権限管理について、ここで詳細を確認できます。](https://docs.aws.amazon.com/lambda/latest/dg/intro-permission-model.html#lambda-intro-execution-role))

3.  **何も変更する必要はありません。右下にある Allow ボタンをクリックします。**

    ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/lambda-role/3-allow-button._TTH_.png)

4.  **これによって、新しいタブが閉じ、Lambda関数が適切に設定されるはずです。**  "Lambda function handler and role" セクションが次のスクリーンショットのようになっていない場合は、ページを再読み込みして、"existing role" ドロップダウンから新しいロールを選択してみてください。

    ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/lambda-role/4-lambda-function-role._TTH_.png)

5.  **これで終わりです。それまでやっていた作業に戻って大丈夫です。**

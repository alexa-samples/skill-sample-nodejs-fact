# Alexa 豆知識スキルの作成
<img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/quiz-game/header._TTH_.png" />

[![音声ユーザーインターフェース](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/1-locked.png)](./1-voice-user-interface.md)[![Lambda 関数](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/2-locked.png)](./2-lambda-function.md)[![VUIとコードを接続する](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/3-locked.png)](./3-connect-vui-to-code.md)[![テスト](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/4-on.pn)](./4-testing.md)[![カスタマイズ](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/5-locked.png)](./5-customization.md)[![スキルの公開](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/6-locked.png)](./6-publication.md)

## Alexa スキルのテスト

ここまでで、[音声ユーザーインターフェース](./1-voice-user-interface.md)と [Lambda 関数](./2-lambda-function.md)を作成し、[それらを連携](./3-connect-vui-to-code.md)させました。 これであなたのスキルをテストする準備が整いました。

1. [Amazon開発者ポータル](https://developer.amazon.com/edw/home.html#/skills/list)に戻り、あなたが作ったスキルを選択します。

2. トップナビゲーションメニューから **テスト** タブを選択し **Alexaシミュレータ**を表示します。ブラウザによってはマイクへのアクセス許可を要求する場合があります。マイクを有効にすることを推奨しますが、テキスト入力によるテストも可能です。

3. **このスキルでは、テストは無効になっています** というメッセージが上部に表示されていますので、その横のトグルスイッチを切り替えて **このスキルでは、テストは有効になっています** という状態にしてください。

4. **Alexaシミュレータ** で、あなたのスキルが期待どおりに動作するか検証します。テキストボックスに文字を入力するか、マイクアイコンを押した状態でマイクに話しかけてみてください。
	1. **文字入力** [Step 1](./1-voice-user-interface.md)で指定したスキルの **呼び出し名** に続き "を開いて" とタイプしてください。(例："宇宙の豆知識を開く")
	2. **音声** テキストボックス横のマイクアイコンを押下した状態で、スキルの **呼び出し名** に続き "を開いて" と発話してください。
	3. スキルの **呼び出し名** を忘れた場合、トップナビゲーションメニューから **ビルド** タブを選択して、左側パネルの **呼び出し名** で確認してください。

5. あなたのスキルが期待する動作をするか確認してください。
	* Alexaシミュレータで検証をしたら、スキルI/O パネルの **JSON入力** と **JSON出力** ボックスを参照ください。また上部にある **デバイスのログ** を有効にすると、動作ステップも参照できます。
    * もし期待する動作をしない場合は、上記のスキルI/Oパネルが実際にLambda関数とやり取りしている入出力となりますので、問題解析のヒントにしてください。もちろん AWS Lambda も問題解決のための追加ツールを用意しています。

6.  **AWS Lambda のテストイベント設定** サービスシミュレーターの **リクエスト（JSON入力)** と **レスポンス（JSON出力)** について説明しました。この **リクエスト** の値を利用することで、Lambda 関数をアップデートした場合も直接テストすることができます。 次のような手順で行います。
    1.  **Alexaシミュレーター** でテキストか音声で発話をして、発生したリクエスト(JSON入力)の内容を次のステップのためにコピーしておいてください。

    2.  **AWS マネジメントコンソール** に移動して Lambda 関数を開き、**アクション** メニューの右側のドロップダウンリストから **テストイベントの設定** を選択します。![テストイベントの設定](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/4-5-2-configure-test-event.png)

    3.  **新しいテストイベントの作成** を選択して、イベントテンプレートのドロップダウンリストから **Alexa Start Session** を選択します。 実際はどのイベントテンプレートを選んでも良いのですが、覚えやすいのでここでは **Alexa Start Session** を利用します。 ![Alexa Start Session](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/4-5-3-alexa-start-session.png)

    4.  **イベント名** フィールドにイベント名を入力します。コードエディターの内容を削除して、先にコピーしたLambdaリクエスト(JSON入力)をペーストします。テキストボックスの内容を削除し、サービスシミュレーターから取得したリクエストの内容を貼り付けます。イベント名は、テストの内容を連想しやすければ、特に何でもかまいません。例えば、"startSession"でも結構です。AlexaシミュレータからLambdaリクエストをコピー・ペーストすることで、さまざまな発話にたいするテストイベントを作成することができます。      

    5.  **作成** ボタンをクリックします。これによりテストイベントが保存され、Lambda関数のメインページで **テスト** ボタンの左に指定したテストイベント名が現れます。

    6. 作成したテストイベント(例 startSession)を選択して **「テスト」** ボタンをクリックします。これにより Lambda 関数に対して設定したテストの内容が実行されます。![テストイベント](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/4-5-5-save-and-test.png)
        
        テストにより4つのことが確認できます。

        *  **レスポンス(JSON出力)** 「実行結果」内に表示されます。
           ![実行結果](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/4-5-5-1-execution-result.png)

        *  **実行結果の統計値の概要** ここには所用時間や課金時間、設定済みリソース、使用メモリなどが表示されます。

        *  **ログ出力**  Lambda 関数のコード内で console.log() を適切に使うことで、 関数内で何が起こっているかトラッキングすることができます。何か問題が起きた時に原因を特定する場合に役に立つでしょう。より高度なスキルを作るようになった時、ログの有用性に気づくはずです。
			![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/4-5-5-2-summary.png)

        *  ログ出力の説明の "[ここをクリックし](https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#logs:)" からリンクされる [CloudWatch](https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#logs:)には、このLambda関数の **全て** のレスポンスとエンドユーザーとのやりとりが記録されます。これはとても有益で、特に自分のデバイスでスキルをテストする時に非常に役に立ちます。

7.  **その他のテスト方法:**

    *  [Echosim.io](https://echosim.io) はブラウザベースのAlexaスキルのテストツールです。実機デバイスがなくてもテストできるので便利です。
    *  [Unit Testing with Alexa](https://github.com/alexa/alexa-cookbook/tree/master/testing/postman/README.md) は [Postman](http://getpostman.com) と [Amazon API Gateway](http://aws.amazon.com/apigateway)を使用したモダンなユニットテストのアプローチです。

8.  サンプルスキルが正常に動作することを確認できたら、このスキルを**カスタマイズ**しましょう。

[![次](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/general/buttons/button_next_customization.png)](./5-customization.md)
# Alexa 豆知識スキルの作成
<img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/quiz-game/header._TTH_.png" />

## ASK CLIを利用したセットアップ

### 概要
ここでは、あなたが CLI(コマンドラインインターフェイス)、[AWS](https://aws.amazon.com/)、[ASK(Alexa Skills Kit)開発者ポータル](https://developer.amazon.com/alexa-skills-kit?&sc_category=Owned&sc_channel=RD&sc_campaign=Evangelism2018&sc_publisher=github&sc_content=Content&sc_detail=fact-nodejs-V2_CLI-1&sc_funnel=Convert&sc_country=WW&sc_medium=Owned_RD_Evangelism2018_github_Content_fact-nodejs-V2_CLI-1_Convert_WW_beginnersdevs&sc_segment=beginnersdevs)につての知識と開発環境が準備されていることを前提としています。.準備がまだの場合は、 [こちら](./1-voice-user-interface.md) を参照してください.

### 準備しておくべきこと

* Node.js (バージョン 8 以上)
* [AWSアカウント](https://aws.amazon.com/)の登録
* [Amazon開発者アカウント](https://developer.amazon.com?&sc_category=Owned&sc_channel=RD&sc_campaign=Evangelism2018&sc_publisher=github&sc_content=Content&sc_detail=fact-nodejs-V2_CLI-1&sc_funnel=Convert&sc_country=WW&sc_medium=Owned_RD_Evangelism2018_github_Content_fact-nodejs-V2_CLI-1_Convert_WW_beginnersdevs&sc_segment=beginnersdevs)の登録
* [ASK CLI](https://developer.amazon.com/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html?&sc_category=Owned&sc_channel=RD&sc_campaign=Evangelism2018&sc_publisher=github&sc_content=Content&sc_detail=fact-nodejs-V2_CLI-1&sc_funnel=Convert&sc_country=WW&sc_medium=Owned_RD_Evangelism2018_github_Content_fact-nodejs-V2_CLI-1_Convert_WW_beginnersdevs&sc_segment=beginnersdevs)の取得

### インストール
1. 最新版の **ASK CLI** を取得していることを確認してください。

	```bash
	$ npm update -g ask-cli
	```

2. レポジトリを **clone** してください。

	```bash
	$ git clone https://github.com/alexa/skill-sample-nodejs-fact/
	```

3. 初回のご利用の場合、レポジトリ内で `ask init` コマンドを実行することで、 [ASK CLI](https://developer.amazon.com/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html?&sc_category=Owned&sc_channel=RD&sc_campaign=Evangelism2018&sc_publisher=github&sc_content=Content&sc_detail=fact-nodejs-V2_CLI-1&sc_funnel=Convert&sc_country=WW&sc_medium=Owned_RD_Evangelism2018_github_Content_fact-nodejs-V2_CLI-1_Convert_WW_beginnersdevs&sc_segment=beginnersdevs) を初期化してください。 

	```bash
	$ cd skill-sample-nodejs-fact
	$ ask init
	```

4. `/lambda/custom` ディレクトリで、`npm install` コマンドを実行して、npn関連をインストールしてください。

	```bash
	$ cd lambda/custom
	$ npm install
	```

### デプロイ

ASK CLI はスキルとLambda関数を作成します。このLambda関数はデフォルトで```us-east-1 (Northern Virginia)```に作成されます。

1. カレントディレクトリをプロジェクトのルートディレクトリにしてください。'skill.json' がそこにあるはずです。
2. 次のコマンドを実行することで、スキルとLambda関数を一度でデプロイすることができます。

	```bash
	$ ask deploy
	```

### テスト

1. テストをするには、そのスキルが有効化されている必要があります。`ask deploy` コマンドはデフォルトでそのスキルを有効化するのですが、`ask api enable-skill` コマンドにより手動で有効かすることもできます。[ドキュメント](https://developer.amazon.com/docs/smapi/ask-cli-command-reference.html#enable-skill-subcommand).

	```bash
	$ ask api enable-skill --skill-id amzn1.ask.skill.00000000-0000-0000-0000-000000000000
	```

2. スキルに対する対話をコマンドラインでシミュレートするには、次のようにコマンドを利用します。(少し時間がかかることがあります)

	```bash
	 $ ask simulate -l ja-JP -t "豆知識を開く"

	 ✓ Simulation created for simulation id: 4a7a9ed8-94b2-40c0-b3bd-fb63d9887fa7
	◡ Waiting for simulation response{
	  "status": "SUCCESSFUL",
	  ...
	 ```

3. "Test"スイッチが有効になっていると、あなたのスキルは開発者アカウントに紐づいたどのデバイスでもテストすることができます。デバイスを使う代わりにブラウザを使った [Echosim.io](https://echosim.io/welcome)や、**Amazon Alexa** や **Amazon Music** などのモバイルアプリを利用することもできます。

	```text
	アレクサ、豆知識を開いて
	```
## カスタマイズ

1. ```./skill.json```

   スキル名、フレーズの例題、アイコン、テスト手順などを変更してみてください。

   多くの要素は地域・言語によって違ってくるかもしれませんのでご注意ください。

   詳しくは [スキルマニフェスト（スキル管理API）](https://developer.amazon.com/docs/smapi/skill-manifest.html?&sc_category=Owned&sc_channel=RD&sc_campaign=Evangelism2018&sc_publisher=github&sc_content=Survey&sc_detail=fact-nodejs-V2_CLI-3&sc_funnel=Convert&sc_country=WW&sc_medium=Owned_RD_Evangelism2018_github_Survey_fact-nodejs-V2_CLI-3_Convert_WW_beginnersdevs&sc_segment=beginnersdevs) をご参照ください。

2. ```./lambda/custom/index.js```

   ソースコード中に記述されているメッセージや豆知識など変更してみてください。

3. ```./models/*.json```

	**呼び出し名** やそれぞれのインテントに対する **サンプルフレーズ** などを編子してみてください。変更はサポートを予定している、それぞれの地域・言語毎に行う必要があります。

4. 変更をしたときにはスキルとLambda関数を再デプロイすることをお忘れなく。

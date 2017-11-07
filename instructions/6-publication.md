# Alexa 豆知識スキルの作成
[![音声ユーザーインターフェース](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/1-locked.png)](1-voice-user-interface.md)
[![Lambda 関数](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/2-locked.png)](2-lambda-function.md)
[![VUIとコードを接続する](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/3-locked.png)](3-connect-vui-to-code.md)
[![テスト](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/4-locked.png)](4-testing.md)
[![カスタマイズ](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/5-locked.png)](5-customization.md)
[![スキルの公開](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/navigation/6-on.png)](6-publication.md)


## スキルの認定と公開

スキルの公開までもう少しです。最後のステップは[Alexaスキルストア](http://amazon.com/skills)で利用されるメタデータの追加です。このページで必要な手順を解説します。また、申請時にありがちなミスを避ける方法について、いくつかヒントを提示します。

1.  [Amazon開発者ポータル](https://developer.amazon.com/edw/home.html#/skills/list)で **公開情報** タブを開きます。

    <img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/6-1-publishing-information.png" />

2.  **グローバルフィールド** 

	この項目はこのスキルがサポートするすべての言語に対して適用されます。

    <img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/6-2-global-fields.png" />

    *  **カテゴリー** の選択メニューでは、今回は豆知識スキルを作成しているので「Games, Trivia, and Accessories」を選択します。  **サブカテゴリー** の選択メニューが表示されたら「Knowledge and Trivia」を選びます。

    *  **テストの手順** の項目では、このスキルの概要や特別な機能、使用上注意が必要な機能があればその説明をしてください。ここに書かれた内容は認定チームが参照します。この項目の入力は必須です。

        *  今回はFactスキルテンプレートを使っているので、テストの手順の項目には、次のように記入すると良いでしょう。

           `Factスキルテンプレートを利用して作成しました。`

           これでテストチームはあなたがどのようなスキルを申請しているか分かるため、審査時間を短縮することができます。

    *  **国と地域** はスキルの利用を特定の地域に制限したい場合を除いて「すべての国」にします。こうすることで　Amazon　はあなたのスキルを全世界で配布します。特定の言語が使用される地域でスキルが利用されるためには、その言語の設定を追加する必要があることを覚えておいてください。

3.  **スキルの説明**

	魅力的で簡潔な説明文を入力してください。説明文はユーザにあなたのスキルの魅力を伝えるためのものです。最大限に活用しましょう。これらの説明文は[Alexaアプリ](http://alexa.amazon.co.jp/spa/index.html#skills)のスキル一覧ページに表示されます。

    <img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/6-3-description.png" />

 
4.  **サンプルフレーズ** 

	ユーザーがスキルに話しかけるときに最も使われそうなフレーズを3つ入力します。

    <img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/6-4-example-phrases.png" />

    *  **サンプルフレーズ** には、サンプル発話と完全に一致するものを入力してください。ここを間違えてしまったことで審査が通らなかったという例がよくあります。以下にサンプルフレーズを書くときに考慮すべき事項を記載しておきます。

       | サンプルフレーズを入力する際に考慮すべき事項 |
       | ----------------------------------------- |
       | サンプルフレーズは[ユーザーによるカスタムスキルの呼び出し](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/supported-phrases-to-begin-a-conversation)に書かれているルールに沿っていること。 |
       | サンプルフレーズは対話モデルで定義した **サンプル発話**に基づいたものであること。 |
       | 1番目のサンプルフレーズは**ウェイクワードと呼び出し名**を含んでいること。 |
       | サンプルフレーズは**適切な応答を返す**ものであること。 |

    *  ユーザーがスキルに話しかけるときに、最も使いそうなフレーズを3つ選んでください。どのフレーズも正常に動作し、素晴らしいユーザー体験を提供するようにしてください。

5.  **キーワード**
	
	ユーザーがスキルを探すときに使うであろうキーワードを全て入力してください。これは項目は任意です。[Alexaアプリ](http://alexa.amazon.co.jp)での検索ではスキル名や説明文にある単語も検索対象となるため、入力を省略しても問題ありません。スキルを探すときにユーザーに使って欲しい単語がある場合は、それらのキーワードを入力してください。複数のキーワードはカンマで区切ってください。

    <img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/6-5-keywords.png" />

6.  **画像** 

	スキルのアイコンは **108x108**ピクセルと**512x512**ピクセルの2通りのサイズを用意する必要があります。

    <img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/6-6-icons.png" />

    *  自分が権利を持っているものでアイコンを作成してください。商標やコピーライトを侵害しないようにしてください。
    *  アイコンを作成するソフトウェアをお持ちでない場合は、以下のような無料ソフトから選ぶと良いでしょう。

       *  [GIMP](https://www.gimp.org/) (Windows/Mac/Linux)
       *  [Paint.NET](http://www.getpaint.net/index.html) (Windows)
       *  [Inkscape](http://inkscape.org) (Windows/Mac/Linux)
       *  [Iconion](http://iconion.com/) (Windows/Mac)

    *  各サイズのブランクのアイコンを様々なフォーマットでご用意しました。よろしければお使いください。

       *  [PSD](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/icon-templates/psd.zip)
       *  [PNG](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/icon-templates/png.zip)
       *  [GIF](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/icon-templates/gif.zip)
       *  [PDF](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/icon-templates/pdf.zip)
       *  [JPG](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/icon-templates/jpg.zip)
       *  [SVG](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/icon-templates/svg.zip)
       *  [PDN](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/icon-templates/pdn.zip) - [Paint.NET](http://www.getpaint.net/index.html)用
       *  [XCF](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/icon-templates/xcf.zip) - [GIMP](https://www.gimp.org/)用

7. **公開情報**の入力が完成したら**保存**ボタンをクリックし、左のパネルにある**プライバシーとコンプライアンス**タブを開きます。

    <img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/6-7-privacy-and-compliance.png"/>

8.  **グローバルフィールド**にある質問に下記のガイダンスに従いながら答えてください。

    <img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/6-8-global-fields.png"/>

    *  **このスキルを使って何かを購入したり、実際にお金を支払うことができますか？** 今回の豆知識スキルでは、**いいえ**を選択します。将来、あなたが作るスキルに適したオプションを選択してください。

    *  **このスキルはユーザーの個人情報を収集しますか？** これについても今回の豆知識スキルでは、 **いいえ** を選択します。 もし、ユーザーの個人情報、例えば氏名やメールアドレス、電話番号等を収集しているのであれば、この質問に**はい**と答えてください。
        *  この質問に **はい**と答えた場合、プライバシーポリシーへのリンクを提供する必要があります。

    *  **このスキルは13際未満の子供を対象としたものですか？** このスキルのデータはあなたが用意したデータでカスタマイズされているので、13際未満の子供を対象にしているかもしれません。カスタマイズする前の状態の豆知識スキルの場合は特定の年齢層をターゲットとしたものではないので、 **いいえ** を選択します。
        * このスキルが13際未満の子供向けかどうかを判断すには、以下の要素を考慮してみてください。
            * スキルのテーマ
            * 子供向けの内容が含まれているか
            * スキル内の言葉遣い
            * スキル内で利用されている音楽やその他おオーディオコンテンツ
            * スキルがどのように説明されマーケティングされるか
            * スキルの想定利用者層

9.  **輸出コンプライアンス** 全ての項目に同意できるか確認してください。同意する場合はボックスにチェックをつけてください。Amazonがスキルを配布するためには、ここでの同意が必要です。

10. **プライバシーポリシー URL** 必須項目ではありません。今回の豆知識スキルでは空白のままで問題ありません。

11. **利用規約 URL** 必須項目ではありません。空白のままで問題ありません。

12. **保存** ボタンをクリックします。

    <img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/6-12-save-button.png"/>

13. **全てのチェックマークがグリーンになっているはずです。**

    <img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/6-13-all-six-checkmarks.png"/>

14. 認定のための申請の準備ができたら、ページの下の **申請する** ボタンをクリックします。

    <img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/jp/tutorials/fact/6-14-submit-for-certification.png"/>

15. **申請完了です!** 

    *  **認定には数日かかります。** 審査が完了するまでしばらくお待ちください。


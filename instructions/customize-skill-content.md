# Build An Alexa Fact Skill
<img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/quiz-game/header._TTH_.png" />

Build an engaging facts skill about any topic. Alexa will select a fact at random and share it with the user when the skill is invoked.

## Customize the Skill to be Yours

At this point, you should have a working copy of our Fact skill.  In order to make it your own, you will need to customize it with data and responses that you create.  Here are the things you will need to change:

1.  **New data.** You will need to provide a set of facts for your topic. We recommend a minimum of 25, but a total closer to 100 offers a better experience.

    1. Navigate to the **Code** tab again, and expand the project folder on the left to `Skill Code/lambda`.

    2. Open **[languageStrings.js](../lambda/custom/languageStrings.js)**

    3. In this example, we are going to be adding an additional fact for the `en` locale. To do this, let's focus on lines `9-28` in the file, most importantly the `FACTS` array property. This is the entire set of facts our skill pulls from at random when a user asks for a fact (for `en` locales). Here is the default Facts for the `en` locale:
    ```js
    const enData = {
        translation: {
            ...,
            ...,
            ...,
            FACTS: [
                'A year on Mercury is just 88 days long.',
                'Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.',
                'On Mars, the Sun appears about half the size as it does on Earth.',
                'Jupiter has the shortest day of all the planets.',
                'The Sun is an almost perfect sphere.',
            ],
            ...,
        },
    };
    ```

    We can add, delete, or edit any of these facts. For example, if I wanted to include an additional fact about how long a day on Venus was, my `FACTS` array would look like so:

    ```js
    const enData = {
        translation: {
            ...,
            ...,
            ...,
            FACTS: [
                'A year on Mercury is just 88 days long.',
                'Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.',
                'On Mars, the Sun appears about half the size as it does on Earth.',
                'Jupiter has the shortest day of all the planets.',
                'The Sun is an almost perfect sphere.',
                'A single day on Venus is about 117 days.'  <-- NEW ITEM
            ],
            ...,
        },
    };
    ```

    After you're done editing all of the files necessary, make sure to press **Save**, **Deploy**, and navigate back to the **Testing** tab. Keep asking for a new fact, and Alexa should respond with a random fact from the new set.

2.  **New sentences to respond to your users.** There are several sentences and responses that you will want to customize for your skill.

    1. Navigate to the **Code** tab again, and expand the project folder on the left to `Skill Code/lambda`.

    2. Open **[languageStrings.js](../lambda/custom/languageStrings.js)**

    3. Just as before, we are going to be editing a response message for the `en` locale. This means we will be focusing on lines `9-28` in the file. For example, I am going to be replacing the response message when a user asks for a fact from "Here's your fact" to "Your fact is: ". To do this, let's focus on `GET_FACT_MESSAGE`, and replace the contents with any "Your fact is: " instead.

    Before:
    ```js
    const enData = {
        translation: {
            ...,
            GET_FACT_MESSAGE: 'Here\'s your fact: ',
            ...,
            ...,
            ...,
        },
    };
    ```

    After:
    ```js
    const enData = {
        translation: {
            ...,
            GET_FACT_MESSAGE: 'Your fact is: ',
            ...,
            ...,
            ...,
        },
    };
    ```

     After you're done editing all of the files necessary, as before, make sure to press **Save**, **Deploy**, and navigate back to the **Testing** tab. When you ask for a new fact, Alexa will say "Your fact is: \<fact\>" instead of "Here's your fact: \<fact\>".

3.  **New language.** If you are creating this skill for another language other than English, you will need to make sure Alexa's responses are also in that language.

    - For example, if you are creating your skill in German, every single response that Alexa makes has to be in German. You can't use English responses or your skill will fail certification.

4. **Once you have customized the skill's data, languages and/or sentences, return to the [Amazon Developer Portal](https://developer.amazon.com/alexa/console/ask?&sc_category=Owned&sc_channel=RD&sc_campaign=Evangelism2018&sc_publisher=github&sc_content=Survey&sc_detail=fact-nodejs-V2_GUI-5&sc_funnel=Convert&sc_country=WW&sc_medium=Owned_RD_Evangelism2018_github_Survey_fact-nodejs-V2_GUI-5_Convert_WW_beginnersdevs&sc_segment=beginnersdevs) and select your skill from the list.**

5.  **Click on "Distribution" in the top navigation to move on to the publishing and certification of your skill.**


[![Next](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/buttons/button_next_publication._TTH_.png)](./submit-for-certification.md)


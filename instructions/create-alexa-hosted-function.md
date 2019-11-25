# Build An Alexa Fact Skill
<img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/quiz-game/header._TTH_.png" />

Build an engaging facts skill about any topic. Alexa will select a fact at random and share it with the user when the skill is invoked.

## Deploying Skill Code

In the [first step of this guide](./setup-vui-alexa-hosted.md), we built the Voice User Interface (VUI) for our Alexa skill.
On this page, we will be exploring the Alexa-Hosted code editor, and deploying our code to enable testing.

 * *For details on what the Alexa-Hosted skills service provides, open [this page](https://developer.amazon.com/docs/hosted-skills/build-a-skill-end-to-end-using-an-alexa-hosted-skill.html) in a new tab.*


Within your skill in the developer console, click on the **Code** tab at the top of the page. You should see folders and files within the left panel, you can change your code, select the **Save** button, then select **Deploy**. This will deploy your code into a Lambda function that is automatically managed for you by the Alexa-Hosted service.


At the bottom left corner of the page, notice the link to **Logs: Amazon CloudWatch**. CloudWatch is the logging service you can use to help debug your skill. We will go into more depth on how to use CloudWatch in the next step.



[![Next](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/buttons/button_next_testing._TTH_.png)](./test-using-simulator.md)


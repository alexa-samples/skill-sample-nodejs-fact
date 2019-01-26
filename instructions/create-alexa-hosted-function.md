# Build An Alexa Fact Skill
<img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/quiz-game/header._TTH_.png" />


### Deploying Skill Code

In the [first step of this guide](./setup-vui-alexa-hosted.md), we built the Voice User Interface (VUI) for our Alexa skill.
On this page, we will be exploring the Alexa-Hosted code editor, and deploying our code to enable testing.

 * *For details on what the Alexa-Hosted skills service provides, open [this page](https://developer.amazon.com/docs/hosted-skills/build-a-skill-end-to-end-using-an-alexa-hosted-skill.html) in a new tab.*


1.  Within your skill in the developer console, click to the Code tab at the top of the page.
You should see folders and files within the left panel, and the **index.js** file opened in the main panel.  This index.js file is the main code file for the skill.
There is also a file called **package.json**.  We will be updating both these files next.

2. Click into the index.js file, Select-All the code, and delete it.

3. From the Github project folders (above), locate and open the file [/lambda/custom/index.js](../lambda/custom/index.js).

4. Click the "Raw" button just above the code, and Select-All and copy the code.  Return to the Alexa skill console and paste this into the index.js file you had previously cleared.

5. Repeat these steps for the **package.json** file: Copy the contents of [/lambda/custom/package.json](../lambda/custom/package.json), and paste them over the package.json file in your skill.

6. Select the Save button, then select Deploy.  This will deploy your code into a Lambda function that is automatically managed for you by the Alexa-Hosted service.

7. At the bottom left corner of the page, notice the link to **Logs: Amazon CloudWatch**.  CloudWatch is the logging service.


[![Next](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/buttons/button_next_testing._TTH_.png)](./test-using-simulator.md)


# How to Build a Fact-Based Alexa Skill

We want to introduce another way to help you build useful and meaningful skills for Alexa quickly. We have launched a fact skill template that makes it easy for developers or non-developers to create a skill similar to “Fact of the Day”, “Joke of the Day”, “Daily Reading” etc. The template leverages [AWS Lambda](https://aws.amazon.com/lambda/) the [Alexa Skills Kit (ASK)](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit) and the [ASK SDK](https://developer.amazon.com/public/community/post/Tx213D2XQIYH864/Announcing-the-Alexa-Skills-Kit-for-Node-js) while providing the business logic, multiple language support, use cases, error handling and help functions for your skill. You just need to come up with a fact idea (like “Food Facts”), plug in your fact list and edit the sample provided (we walk you through how it’s done). It's a valuable way to quickly learn the end-to-end process for building and publishing an Alexa skill.

This tutorial will walk first-time Alexa skills developers through all the required steps involved in creating a skill using this fact skill template, called ‘SpaceGeek’. This post assumes you have some familiarity with JavaScript/Node.js (or a similar programming language) and the Alexa Skills Kit.

Using the Alexa Skills Kit, you can build an application that can receive and respond to voice requests made on the Alexa platform.  In this tutorial, you’ll build a web service to handle notifications from Alexa and map this service to a skill in the Amazon Developer Portal, making it available on your device and to all Alexa users after certification.

 After completing this tutorial, you'll know how to do the following:

   * Create a fact-based skill - This tutorial will walk first-time Alexa skills developers through all the required steps involved in creating a fact-based skill using a template called ‘SpaceGeek’.
   * Understand the basics of VUI design - Creating this skill will help you understand the basics of creating a working Voice User Interface (VUI) while using a cut/paste approach to development. You will learn by doing, and end up with a published Alexa skill. This tutorial includes instructions on how to customize the skill and submit it for certification. For guidance on designing a voice experience with Alexa you can also [watch this video](https://goto.webcasts.com/starthere.jsp?ei=1087592).
   * Use JavaScript/Node.js and the Alexa Skills Kit to create a skill - You will use the template as a guide but the customization is up to you. For more background information on using the Alexa Skills Kit please [watch this video](https://goto.webcasts.com/starthere.jsp?ei=1087595).
   * Get your skill published - Once you have completed your skill, this tutorial will guide you through testing your skill and sending your skill through the certification process, making it available to be enabled by any Alexa user.

# Let's Get Started

## Step 1. Setting up Your Alexa Skill in the Developer Portal

Skills are managed through the Amazon Developer Portal. You’ll link the Lambda function you create to a skill defined in the [Developer Portal](https://developer.amazon.com/)

 1. Navigate to the Amazon Developer Portal. Sign in or create a free account (upper right). You might see a different image if you have registered already or our page may have changed. If you see a similar menu and the ability to create an account or sign in, you are in the right place.

  ![](https://s3.amazonaws.com/lantern-code-samples-images/fact/devsignin.png)

 2. Once signed in, navigate to Alexa and select **"Getting Started"** under Alexa Skills Kit.

  ![](https://s3.amazonaws.com/lantern-code-samples-images/fact/Getstartedask.png)

 3. Here is where you will define and manage your skill. Select **"Add a New Skill"**

  ![](https://s3.amazonaws.com/lantern-code-samples-images/fact/AddnewSkill.png)

 4. Select an initial language you want to support, and then optionally add additional languages later if needed (in Step 6). Make sure the radio button for the custom interaction model is selected for “Skill Type”. Add the name of the skill. You can use “My Fact Skill” for this example. Remember, when you create a skill that you will publish, you will use a name that you define for your skill. That name will be the one that shows up in the Alexa App. Add the invocation name. Since we are using the sample, type “space geek”. Since we will not use Audio Player for this skill, select "No". **Note**: "Global Fields" information apply to all languages supported by the skill. Finally, select **Next**.

   ![](https://s3.amazonaws.com/lantern-code-samples-images/fact/skill_information.PNG)

 5. Now, notice you're in the Interaction Model section.

   ![](https://s3.amazonaws.com/lantern-code-samples-images/fact/interactionmodel.png)

 6. Next, we need to define our skill’s Interaction Model. Let’s begin with the intent schema. In the context of Alexa, an intent represents an action that fulfills a user’s spoken request. Intents can optionally have arguments called slots. We will not be using custom slots in this template, but they are very useful if you want to parameterize your intents. Note: You will need to define both custom slot type values and sample utterances in language that matches current language tab.

* Review the intent schema below. This is written in JSON and provides the information needed to map the intents we want to handle programmatically.  Copy this from the intent schema in the [GitHub repository here](https://github.com/alexa/skill-sample-nodejs-fact/blob/master/speechAssets/IntentSchema.json).

* You will see the intents for getting a new fact, and then a collection of built-in intents to simplify handling common user tasks. Help intent will handle any time the user asks for help, stop and cancel are built-in intents to make it easier for you to handle when a user wants to exit the application. For more on the use of built-in intents, go [here](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/implementing-the-built-in-intents).

```JSON
{
  "intents": [
    {
      "intent": "GetNewFactIntent"
    },
    {
      "intent": "AMAZON.HelpIntent"
    },
    {
      "intent": "AMAZON.StopIntent"
    },
    {
      "intent": "AMAZON.CancelIntent"
    }
  ]
}
```

 7. The next step is to build the utterance list.

    Given the flexibility and variation of spoken language in the real world, there will often be many different ways to express the same request. Providing these different phrases in your sample utterances will help improve voice recognition for the abilities you add to Alexa. It is important to include as wide a range of representative samples as you can -– all the phrases that you can think of that are possible in use (though do not include samples that users will never speak). Alexa also attempts to generalize based on the samples you provide to interpret spoken phrases that differ in minor ways from the samples specified.

    Now it's time to add the utterances. Select and copy/paste the sample utterances from [GitHub](https://github.com/alexa/skill-sample-nodejs-fact/blob/master/speechAssets) with your initial language. For example, if your select English (US) as initial language above, then you will need to copy/paste SampleUtterances_en_US.txt in previous link. An example of utterances is listed below. Once they are copied, the screen should look similar to the following image:

  ```
  GetNewFactIntent a fact
  GetNewFactIntent a space fact
  GetNewFactIntent tell me a fact
  GetNewFactIntent tell me a space fact
  GetNewFactIntent give me a fact
  GetNewFactIntent give me a space fact
  GetNewFactIntent tell me trivia
  GetNewFactIntent tell me a space trivia
  GetNewFactIntent give me trivia
  GetNewFactIntent give me a space trivia
  GetNewFactIntent give me some information
  GetNewFactIntent give me some space information
  GetNewFactIntent tell me something
  GetNewFactIntent give me something
  ```

 8. Select **Save**. You should see the interaction model being built (this might a take a minute or two). If you select next, your changes will be saved and you will go directly to the Configuration screen. After selecting Save, it should now look like this:

    ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/fact/interaction_model._TTH_.png)

Next we will configure the AWS Lambda function that will host the logic for our skill.

## Step 2: Creating Your Skill Logic Using AWS Lambda

### Installing and Working with the Alexa Skills Kit SDK for Node.js (alexa-sdk)

To make the development of skills easier, we have created the ASK SDK for Node.js. We will be using this module to deploy the sample. The Alexa SDK is available on [GitHub](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs) and can be deployed as a Node package from within your Node.js environment.

### Create an AWS Account

 ![](https://s3.amazonaws.com/lantern-code-samples-images/fact/aws_home.png)

  1. Open [aws.amazon.com](https://aws.amazon.com/) and then choose **‘Create a Free Account’**

* Follow the online instructions. Do not worry about the IAM role, we will do that later.
* You will need a Valid Credit Card to set up your account (note the AWS Free Tier will suffice however. You can find out more about the free tier [here](https://aws.amazon.com/free/).)
* Part of the sign-up procedure involves receiving a phone call and entering a PIN using the phone keypad.

 2. Sign in to the AWS Console

  ![](https://s3.amazonaws.com/lantern-code-samples-images/fact/aws_login.png)

 3. It can sometimes take a couple of minutes for your new AWS account to go live. You will receive an e-mail when your account is active.

### Create an AWS Lambda Function

AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume - there is no charge when your code is not running. With Lambda, you can run code for virtually any type of application or backend service - all with zero administration. Just upload your code and Lambda takes care of everything required to run and scale your code with high availability.

**Note: If you are new to Lambda and would like more information, visit the [Lambda Getting Started Guide](https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html)**

 1. **IMPORTANT**: For Regions (upper right) , Select **US East (N. Virginia)** for US skills and **EU (Ireland)** for UK/DE skills. These are the only two regions currently supported for Alexa skill development on AWS Lambda, and choosing the right region will guarantee lower latency.

 ![](https://s3.amazonaws.com/lantern-code-samples-images/fact/aws_region.png)

 2. Select **Lambda** from Compute services (upper left)

 ![](https://s3.amazonaws.com/lantern-code-samples-images/fact/aws_lambda.png)

 3. Select **“Create a Lambda Function”** to begin the process of defining your Lambda function.

 ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/fact/create_a_lambda_function._TTH_.png)

 4. In the **‘Select Blueprint’** page, filter on **'Alexa'**, select **“alexa-skill-kit-sdk-factskill”**.  This blueprint is a shortcut to getting the Fact Skill set up for you, and will install the sample code (and dependencies) that are needed for this project.

 ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/fact/select_blueprint._TTH_.png)

 5. Now, you need to configure the event that will trigger your function to be called. As we are building skills with the Alexa Skills Kit, click on the gray dash-lined box and select Alexa Skills Kit from the dropdown menu.

 ![](https://s3.amazonaws.com/lantern-code-samples-images/fact/aws_lambda_ask.png)

 6. Choose **Next** to continue.

 ![](https://s3.amazonaws.com/lantern-code-samples-images/fact/aws_next.png)

 7. You should now be in the **"Configure Function"** section. Enter the Name, Description, and select "Node 4.3" as the Runtime for your skill as in the example.

 ![](https://s3.amazonaws.com/lantern-code-samples-images/fact/aws_config_function.png)

 8. Set your handler and role as follows:

    * Keep Handler as ‘index.handler’
    * Drop down the “Role” menu and select **“Create a new custom role”**. (Note: if you have already used Lambda you may already have a ‘lambda_basic_execution’ role created that you can use.) This will launch a new tab in the IAM Management Console.

 ![](https://s3.amazonaws.com/lantern-code-samples-images/fact/aws_role.png)

 9. You will be asked to set up your Identity and Access Management or “IAM” role if you have not done so. AWS Identity and Access Management (IAM) enables you to securely control access to AWS services and resources for your users. Using IAM, you can create and manage AWS users and groups, and use permissions to allow and deny their access to AWS resources. We need to create a role that allows our skill to invoke this Lambda function. In the Role Summary section, select "Create a new IAM Role" from the IAM Role dropdown menu. The Role Name and policy document will automatically populate.

 ![](https://s3.amazonaws.com/lantern-code-samples-images/fact/iam_role.png)

 10. Select **“Allow”** in the lower right corner and you will be returned to your Lambda function.

 ![](https://s3.amazonaws.com/lantern-code-samples-images/fact/allowrole.png)

 11. Keep the Advanced settings as default. Select **‘Next’** and review. You should see something like below. Then select **‘Create Function’**:

 ![](https://s3.amazonaws.com/lantern-code-samples-images/fact/CreateFunctionbuitton.png)

 12. Congratulations, you have created your AWS Lambda function. **Copy** the ARN for use in the Configuration section of the Amazon Developer Portal.

![](https://s3.amazonaws.com/lantern-code-samples-images/fact/ARN.png)

## Step 3: Add Your Lambda Function to Your Skill

 1. Navigate back to [developer.amazon.com](https://developer.amazon.com/) and select your skill from the list. You can select the skill name or the edit button.

 ![](https://s3.amazonaws.com/lantern-code-samples-images/fact/my_fact_skill_edit.png)

 2. Select the Configuration section. Add the ARN from the Lambda function you created in the AWS Console earlier. Select the **Lambda ARN (Amazon Resource Name)** radio button and tick the corresponding region. Then, select **“No”** for account linking since we will not be connecting to an external account for this tutorial. Paste the ARN you copied earlier into the Endpoint field. Then select **Next**. **Note:** the region(s) here should match the region(s) of your Lambda function(s).

 ![](https://s3.amazonaws.com/lantern-code-samples-images/fact/configuration.png)

 3. You have now completed the initial development of your skill. Now it's time to test.

## Step 4: Testing Your Skill

 1. In the Test area, we are going to enter a sample utterance in the Service Simulator section and see how Alexa will respond. In this example, we have called the skill ‘Space Geek’. This is the ‘Invocation Name’ we set up in the “Skill Information” section.

    * In the Service Simulator, type **‘open Space Geek’** and select **“Ask My Fact Skill”**.

  ![](https://s3.amazonaws.com/lantern-code-samples-images/fact/openspacegeek.png)

 2. You should see the formatted JSON request from the Alexa Service and the response coming back. Verify that you get a correct Lambda response, and notice the card output. You will want to customize this output later.

  ![](https://s3.amazonaws.com/lantern-code-samples-images/fact/servicesimulator.png)

 3. (Optional) Testing with your device. This is optional as you can do all the testing in the portal. Assuming your Alexa device is on-line (and logged in with the same account as your developer account), you should now see your skill enabled in the Alexa app and ask Alexa to launch your skill. For more information on testing an Alexa skill and registering an Alexa-enabled device, [check here](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/testing-an-alexa-skill).

  ![](https://s3.amazonaws.com/lantern-code-samples-images/fact/alexaappskill.png)

### Not working (getting an invalid response)?
* Do you have the right ARN copied from your Developer Portal/Skill into your your Lambda function?
* Are you calling the right invocation name?
* Are you saying launch, start or open?
* Are you sure you have no other skills in your accounts with the same invocation name?
* For this template specifically, you should have a minimum of 20 facts for a good customer experience.

## Step 5: Make it Yours

 1. In the Skill Information section in the Developer Console, edit the Skill Information Tab to reflect your new Fact Skill:

   * Provide a skill name that represents the new skill you are creating.
   * Come up with a cool Invocation Name that users will use to invoke your skill.  Ensure that the invocation name you choose stays clear of pitfalls listed in the table below. Column on the right provides examples of invocation names that will definitely fail certification.

   ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/invocation_name_requirements._TTH_.png)
     
   * Create a fun icon. Be sure you have the rights to whatever icons you are uploading – you will need to provide both 108x108px and 512x512px images. Need help finding an image? See PixelBay as a possible source for royalty-free images. Use an image editor (such as Paint on Windows or Preview on Mac) to change the size of the image.

   Everything else can stay as-is for now in the Developer Portal

 2. [OPTIONAL] If you want to use your own code editor for these next steps, download the code from your Lambda function. From the **'Actions'** dropdown choose **'Export Function'**. Inside the .zip file you download, you will find the index.js file inside the "src" folder.

 ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/fact/export_your_function._TTH_.png)

 3. On the code tab of your Lambda function in aws.amazon.com (or in your editor), you can edit your code. Look for corresponding locale strings in languageStrings object. "Ctrl-F" **en-US** for English(U.S.), **en-GB** for English(U.K.) and **de-DE** for German. You will see on line 10 the definition of the facts used in the SpaceGeek example. These are the strings you will want to edit to customize this fact for your use.

  ![](https://s3.amazonaws.com/lantern-code-samples-images/fact/index.png)

 4. Change the SKILL_NAME variable to the name of your skill.

 ```JSON
 "SKILL_NAME": "Space Geek"
 ```

 5.  Edit the strings to contain whatever facts or information you would like to make randomly available when a user invokes your skill. A few suggestions:
 * Only change the "FACT" array values between the double quotes. These are your facts.
 * Ensure you don’t accidentally delete any quotes or commas. You can always go back to GitHub and copy it again if you make a mistake.
 * The skill uses a mathematical randomization on your list of facts. It is a good idea to have at least 20 facts in the skill to ensure that the facts do not repeat too quickly. Also remember that because it is random, it is possible that the same fact can be repeated twice.
 * For extra credit and completely optional- If you would like to ensure that the facts don’t repeat (for a “Daily Fact Skill” for example), you can use a datastore like DynamoDB to store an id that you can check when the user accesses the skill and iterate through the facts. For more information on using DynamoDB with Lambda, [go here](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html).


 6. You will also want to make sure to change the “Space Geek” references to the name of your skill. You don’t have to edit them all, but the following reference changes are required for certification.
    * Find this code in the HELP_MESSAGE, and change "space fact" to your custom words:

    ```JSON
    "HELP_MESSAGE" : "You can say tell me a space fact, or, you can say exit... What can I help you with?",
    ```
 7.  In order to control who accesses your web service, we should validate the Application Id in requests made to your web service. Let’s go back to your Alexa skill in your Developer Portal for a moment. Copy in your Application Id from the ‘Skill Information’ section in your developer portal

 ![](https://s3.amazonaws.com/lantern-code-samples-images/fact/changeAppId.png)


 8. Copy the Application Id into the value of the APP_ID variable in index.js. Make sure to place the app id in quotation marks.
 ```JSON
 var APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).
 ```

 9. A minimum of 20 facts is needed to get started, but about 100 is a good number to keep users engaged. The more the better.

 10. Be sure to select **SAVE** when you are all done. Note: we test initially in the Developer Portal, not in our Lambda function (AWS).

 11. If you've downloaded your code to use your own editor, log back into your AWS console and copy-and-paste the contents of your index.js file to the Code tab of your Lambda function.

  ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/fact/code_tab._TTH_.png)

 12. Repeat the tests you performed earlier to ensure your changes are functioning properly. See step 4 for a review of how to performs functional tests.

## Step 6: Add Additional Languages (Optional)
You can use the Alexa Skills Kit to create skills in multiple languages. A skill can support a single language, or any combination of the available languages:
* English (US)
* English (UK)
* German

For more on developing skills in multiple languages, go [here](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/developing-skills-in-multiple-languages)

1. To add an additional language, simply select the Add New Language tab and choose your second language. Choose and fill all necessary information like we did for the initial language of your skill. You will need to define Name and Invocation Name for the current language (e.g. German name for German skills). Then click Save to continue.
![](https://s3.amazonaws.com/lantern-code-samples-images/fact/german_fact_info.png)

2. In the Interaction Model section, our skill shares the same intent schema and uses different sample utterances and custom slot type values in different languages. Copy intent schema from the intent schema in the [GitHub repository here](https://github.com/alexa/skill-sample-nodejs-fact/blob/master/speechAssets/IntentSchema.json) and change sample utterances into your second language.  We will not be using custom slots in this template, but slot type values should be put in the new language if your skill has them.

![](https://s3.amazonaws.com/lantern-code-samples-images/fact/german_intent.png)

3. Open the source file for your Lambda function, index.js. In the languageString variable, look up the locale for your current language, edit the facts strings and other message like you did for your initial language. Strings are supposed to be defined using your second language.
![](https://s3.amazonaws.com/lantern-code-samples-images/fact/german_strings.PNG)

4. For better latency, deploying your code to different endpoints is recommended. Follow the Create Lambda Function instructions in Step 2 and be sure to select an appropriate Lambda region. Select **US East (N. Virginia)** for US skills and **EU (Ireland)** for UK/DE skills. Copy the ARN for use in the Configuration section of the Amazon Developer Portal.

5. Go back to skill Configuration section, which contains Global fields for all languages. Add an extra endpoint and paste your Lambda ARN. Save your skill configuration information.

![](https://s3.amazonaws.com/lantern-code-samples-images/fact/german_lambda.png)

6. Test your skill in the second language using Service Simulator or a device.


## Step 7: Publish Your Skill

Now we need to go back to our Developer Portal to test and edit our skill and we will be ready for certification.

 1.  In your skills Test section, enter your Utterances into the Simulator to make sure everything is working with your new facts.

 2.  Optionally, you can test with your Alexa-enabled device to make sure everything is working correctly. You may find a few words that need to be changed for a better user experience.

 Some things to think about:

  * Is every fact pronounced correctly?
  * Do you need to change any words to avoid poor pronunciations?

  Because we are randomizing our facts, this could take a while. Instead, you can use the Voice Simulator in the Test section to simulate Alexa’s responses. In the Voice Simulator, type in each fact that you are using to test how Alexa will say it. Use additional punctuation or possibly SSML if you need to better control how Alexa responds. You can find out more about [SSML here](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference).

  * Have you added in YOUR Application Id as per the previous instruction?

 3. Select the Publishing Information area of your skill next:

    ![](https://s3.amazonaws.com/lantern-code-samples-images/fact/publishing.png)

    For Global fields, choose an proper category. **IMPORTANT**: Add the text “This is based on the Fact Skill Template” to the Testing Instructions section. This alerts the Certification team of your submission using this standardized template, smoothing the road to a faster publish. Also select the countries that you want your skill to be available in.

    ![](https://s3.amazonaws.com/lantern-code-samples-images/fact/publishing_us.png)

    For other publishing information:

   * Spend some time coming up with an enticing, succinct description. This is the only place you have to attract new users. These descriptions show up on the list of [skills available](http://alexa.amazon.com/#skills) in the Alexa app.
   * In your example phrases, be sure that the examples you use match the utterances that you created in the Interaction Model section. Remember, there are built-in intents such as help and cancel. You can learn more about [built-in intents here](https://developer.amazon.com/appsandservices/solutions/alexa/alexa-skills-kit/docs/implementing-the-built-in-intents#Available%20Built-in%20Intents). You can also review the list of [supported phrases](https://developer.amazon.com/appsandservices/solutions/alexa/alexa-skills-kit/docs/supported-phrases-to-begin-a-conversation) to begin a conversation.

    <h2>Common Certification Pitfalls</h2>
    When you submit a skill to Alexa skill store, it must meet [Amazon's Certification Requirements](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/alexa-skills-kit-submission-checklist) for it to be available to customers. 65% of all skill submissions fail certification because of a handful of simple requirements.

    <h3>Incorrect Example phrases (Frequency of Failures: Very High)</h3>
    As part of your submission, you are required to provide three example phrases.  These phrases are shown to a user when they enable your skill in the store, so that they have some context for how to communicate with your skill.  These are found on the "Publishing Information" section of your [Developer Console](https://developer.amazon.com/edw/home.html#/skills/list) for your skill.

    ![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-skit/blog/common_pitfalls/example_phrases._TTH_.png)

    Certification requirements for the first example phrase are different from the second and third. As you read this, it is important to understand whether the following requirements apply to only the first or all example phrases.

    There are generally four scenarios that can lead to certification failure with example phrases.

    1.  **Example phrases are missing specific criteria**

        For the first example phrase, you need to provide the user with an example to start your skill.  Something like "Alexa, ask Seattle Guide about the Space Needle," is an example of a good first example phrase.

        The second and third phrases can be a little more flexible, depending on how you structured your skill.  If your skill asks the user for a response (keeps the stream open), your second and third example phrases can be responses to those questions. (For these cases, you don't need the wake word or the invocation name in your example.)
        
        In most cases, however, we recommend providing a user with three distinct ways to interact with your skill from the beginning, using both a wake word and an invocation name.  This way, you can highlight some of the key features of your skill to your new users, and give them some interesting things to try as soon as they enable your skill.

        A successful example phrase will use the following format:</br>
        **[Wake Word], [Launch Word] [Invocation Name] [Connector*] [Utterance]**

        * **Wake Word** - this will generally be the word Alexa, but some users have changed their wake word to Amazon, Echo, or Computer.  Use "Alexa" in these examples.
        * **Launch Word** - this includes words like "open," "ask," "start," "launch," "begin," "talk to," "resume," "run," "tell", or "load."
        * **Invocation Name** - this is the name you assigned to your skill.
        * **Connector** - these are simple words to connect a user's launch word to their utterance, like "and," "to," or "for."  This is optional, but makes a user's statement sound more like natural language.
        * **Utterance** - this should be one of the sample utterances you provided in your Interaction Model for your skill.  It *must* match one of your sample utterances.

        For more information on creating strong example phrases, please read [Understanding How Users Invoke Custom Skills](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/supported-phrases-to-begin-a-conversation).

        Here are some examples of phrases that consistently fail certification:
        *  "Alexa, start over" - You cannot use a wake word without your invocation name. In addition, "start over" (or "don’t know") can be a response from the user when the stream is open, in which case, wake word and invocation name do not make sense.
        *  "Alexa, ask GetNewFactIntent give me a fact" - GetNewFactIntent is not the invocation name for the skill, it is likely the name of the intent you created.
        *  "Alexa, Social Headline" - You must use a launch word before your invocation name.

    2.  **Example phrases do not contain one of your skill’s Sample Utterances**

        Each example phrase should be explicitly modeled on the sample utterances. For instance, if you have this example phrase:
            "Alexa, ask Tide Pooler when is high tide in Seattle."

        Then you must also have this utterance:  
            <Intent Name> when is high tide in {City}

        Any slots in the example phrase (such as Seattle in this example) must be filled with an example of a valid slot value. In this example, City is a custom slot type, and “Seattle” is a value explicitly defined for the City type.  It is important to review your sample utterances and pick example phrases from these sample utterances only.
        
    3.  **Example phrases do not provide a response in context**
        Example phrases are shown on the skill’s detail card in the Alexa app to help users understand how to interact with your skill. These are the phrases users are most likely to try the first time they interact with the skill. Therefore, you want to be certain that they work well and provide a good user experience.

        Consider the following example,
        > User: "Alexa, ask home cooking how to make pancakes"

        > Skill: "Welcome to Home Cooking. You can ask a question like, what's the recipe for pancakes. ... Now, what can I help you with?"
        
        The example phrase fails because it does not elicit a relevant response from the skill.

    <h3>Unacceptable Invocation Names (Frequency of Failures: High)</h3>
    An invocation name is required only for a custom skill, and it is how a user indicates they want to interact with your skill. Complete instructions on choosing an appropriate invocation name are available at [Choosing the Invocation Name for a Custom Skill](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/choosing-the-invocation-name-for-an-alexa-skill).

    Typically a skill may fail due to one or more of following concerns with its invocation name:

    1.  Invocation name is a single word, without it being unique to developer’s brand/intellectual property.  You must use at least two words in your invocation name unless you own the rights to a specific word, like Uber, Dominos, or Nest.
    2.  Invocation name consists of 2 words, one of which is a definite article.  In English, "the" is a definite article.  You can't use the word "the" in a 2 word invocation name.
    3.  Invocation name consists of wake words (Alexa, Amazon, Echo, or Computer) or connectors (to, from, by, if, and, whether) or launch words (launch, ask, tell, load, enable, or begin).
    4.  Invocation name infringes upon intellectual property rights of an entity or a person.  For example, you can't use the name "AWS Helper" because it infringes on AWS's intellectual property.

    An exhaustive list of [Invocation Name Requirements](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/choosing-the-invocation-name-for-an-alexa-skill#invocation-name-requirements) are documented on the developer portal. 

    <h3>IP Infringement (Frequency of Failure: High)</h3>
    A skill fails for IP infringement when it:

    1.  Implies sponsorship or endorsement by Amazon or otherwise mischaracterizes the relationship with Amazon.
    2.  Infringes the intellectual property rights (including copyright, trademark and publicity rights) of a third party.
    3.  Purports to be affiliated with a company or brand but is not the official skill of that company or brand.

    IP infringement may occur in metadata including but not limited to, skill name, invocation names, and description or even in responses from the skill.

    There are two important things you must take care of for your skill to not fail:

    1.  You must provide documentation demonstrating that you have the right to use the trademark via the [Contact Us form in the Amazon Developer Console](https://developer.amazon.com/public/support/contact/contact-us).
    2. In case you want to create a skill that is based on a movie/celebrity or any other brand, we recommend:
        1.  Add your developer name or one of the following words to the skill name or invocation name (whichever contains the third party trademark): "unofficial", "fan", "unauthorized"; and/or
        2.  Revise your skill description to clarify that the skill is not sponsored or endorsed by the brand you are mentioning.

    <h3>Incorrect Session Management (Frequency of Failure: Medium)</h3>
    Every response sent from your skill to the Alexa service includes a flag indicating whether the conversation with the user (the session) should end or continue. If the text-to-speech provided by your skill and the session flag do not synchronize, it will be failed for incorrect session management.

    There are 3 scenarios in which a skill will fail:

    1.  Response from the skill asks the user a question (or prompts the user for a reply) must leave the session open for a user response.
    2.  If your skill does not request a response from the user, the session should close.  Keeping the session open without prompting the user to interact will result in failure.
    3.  If user input is required after launching the skill with no intent, a welcome prompt must be provided describing what users can ask for, and the session must remain open for a user response. If the session closes after launching the skill, a core functionality must be completed without prompting users to speak.  An example of a welcome message can be found in our [City Guide template](https://github.com/alexa/skill-sample-nodejs-city-guide), and an example of offering core functionality (with no prompt) can be found in our [Fact Skill template](https://github.com/alexa/skill-sample-nodejs-fact).

    <h3>Incorrect Implementation of the Help Intent (Frequency of Failure: Medium)</h3>
    When users ask for “help” within the skill, it must return a prompt which instructs users how to navigate the skill’s core functionality. Additionally, the help prompt must end with a question for users and leave the session open to receive a response. Consider the following example:
    > User: "Alexa, open silicon roundabout" 

    > Skill: "Welcome to Women Of Silicon Roundabout."

    >User: "help" 

    >Skill: "Welcome to Women Of Silicon Roundabout."

    The skill does not provide a descriptive help prompt that provides valuable instructions to user to navigate the skill. Here’s another example where help intent is incorrectly implemented. The skill takes help as a slot value:

    >User: alexa open airport info 

    >Alexa: For delay information, tell me an Airport code. 

    >User: help 

    >Alexa: I didn't have data for an airport code of help

    In this case, the user is indicating that they need help with your skill, but you are receiving the value "help" as a slot value.  This can lead to a frustrating experience for your users, and will result in a failed certification.

 4. Be sure you have the rights to whatever icons you are uploading – you will need to provide both 108x108px and 512x512px images. If there is any question the Amazon certification team will fail your Alexa skill submission.

   ![](https://s3.amazonaws.com/lantern-code-samples-images/fact/publishing_english.png)

   Once you have uploaded your icons, you should see a success message at the bottom of the screen. Finally, **select Next**.

 5. (Optional) For multiple language skill, once you finish and save publishing information for your initial language, you will need to do it again for your second language. Under your second language tab, select publishing infomation, and add additional publishing region(s) to the global fields and all other customer facing information in non-global fields.
  ![](https://s3.amazonaws.com/lantern-code-samples-images/fact/publishing_de.png)
  ![](https://s3.amazonaws.com/lantern-code-samples-images/fact/publishing_de_phrases.PNG)
  ![](https://s3.amazonaws.com/lantern-code-samples-images/fact/publishing_de_icon.png)

 6. Privacy and Compliance. On the Privacy and Compliance section, select ‘No’ for spending real money and collecting personal information. Privacy and Terms URL’s are optional. Choose to certify that your skill can be imported to and exported from the US.

 7. Select **“Save”**. If your skill supports multiple languages, then you will need to complete Privacy and Compliance for each language before submission.
    ![](https://s3.amazonaws.com/lantern-code-samples-images/fact/privacy.png) 

 8. Select “Submit for Certification”
    ![](https://s3.amazonaws.com/lantern-code-samples-images/fact/privacy_check.png)

 9. Finally, confirm your submission. Select “Yes” to submit your skill.



Congratulations! You have successfully submitted your skill for publication. You will receive progress e-mails and possibly other suggestions from the team on how you can make your skill even better. You can update your skills at any time.

## Check out These Other Developer Resources

* [Alexa Skills Kit (ASK)](https://developer.amazon.com/ask)
* [Alexa Developer Forums](https://forums.developer.amazon.com/spaces/165/index.html)
* [Knowledge Base](https://goto.webcasts.com/starthere.jsp?ei=1090197)
* [Intro to Alexa Skills Kit  - On Demand Webinar](https://goto.webcasts.com/starthere.jsp?ei=1090197)
* [Voice Design 101 - On Demand Webinar](https://goto.webcasts.com/starthere.jsp?ei=1087594)
* [Developer Office Hours](https://attendee.gotowebinar.com/rt/8389200425172113931)
* [Developing Skills in Multiple Languages](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/developing-skills-in-multiple-languages)

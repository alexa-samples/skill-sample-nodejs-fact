# How to Build a Fact-Based Alexa Skill

We want to introduce another way to help you build useful and meaningful skills for Alexa quickly. We have launched a fact skill template that makes it easy for developers or non-developers to create a skill similar to “Fact of the Day”, “Joke of the Day”, “Daily Reading” etc. The template leverages [AWS Lambda](https://aws.amazon.com/lambda/), the [Alexa Skills Kit (ASK)](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit), and the [ASK SDK](https://developer.amazon.com/public/community/post/Tx213D2XQIYH864/Announcing-the-Alexa-Skills-Kit-for-Node-js), while providing the business logic, use cases, error handling and help functions for your skill. You just need to come up with a fact idea (like “Food Facts”), plug in your fact list and edit the sample provided (we walk you through how it’s done). It's a valuable way to quickly learn the end-to-end process for building and publishing an Alexa skill.

This tutorial will walk first-time Alexa skills developers through all the required steps involved in creating a skill using this fact skill template, called ‘SpaceGeek’. This post assumes you have some familiarity with JavaScript/Node.js (or a similar programming language) and the Alexa Skills Kit.

Using the Alexa Skills Kit, you can build an application that can receive and respond to voice requests made on the Alexa platform.  In this tutorial, you’ll build a web service to handle notifications from Alexa and map this service to a Skill in the Amazon Developer Portal, making it available on your device and to all Alexa users after certification. 

 After completing this tutorial, you'll know how to do the following: 

   * Create a fact-based skill - This tutorial will walk first-time Alexa skills developers through all the required steps involved in creating a fact based skill using a template called ‘SpaceGeek’.
   * Understand the basics of VUI design - Creating this skill will help you understand the basics of creating a working Voice User Interface (VUI) while using a cut/paste approach to development. You will learn by doing, and end up with a published Alexa skill. This tutorial includes instructions on how to customize the skill and submit for certification. For guidance on designing a voice experience with Alexa you can also [watch this video](https://goto.webcasts.com/starthere.jsp?ei=1087592).
   * Use JavaScript/Node.js and the Alexa Skills Kit to create a skill - You will use the template as a guide but the customization is up to you. For more background information on using the Alexa Skills Kit please [watch this video](https://goto.webcasts.com/starthere.jsp?ei=1087595).
   * Get your skill published - Once you have completed your skill, this tutorial will guide you through testing your skill and sending your skill through the certification process for making it available to be enabled by any Alexa user. 
   
# Let's Get Started

## Step 1. Setting up Your Alexa Skill in the Developer Portal
   
Skills are managed through the Amazon Developer Portal. You’ll link the Lambda function you created above to a Skill defined in the Developer Portal.

 1. Navigate to the Amazon Developer Portal. Sign in or create a free account (upper right). You might see a different image if you have registered already or our page may have changed. If you see a similar menu and the ability to create an account or sign in, you are in the right place.
  
  ![](https://s3.amazonaws.com/alexaskillimages/recipe/devsignin.png)
 
 2. Once signed in, navigate to Alexa and select **"Getting Started"** under Alexa Skills Kit.
  
  ![](https://s3.amazonaws.com/alexaskillimages/fact/Getstartedask.png)
 
 3. Here is where you will define and manage your skill. Select **"Add a New Skill"**
  
  ![](https://s3.amazonaws.com/alexaskillimages/recipe/AddnewSkill.png)
 
 4. Make sure the radio button for the custom interaction model is selected for “Skill Type”. Add the name of the skill. You can use “My Fact Skill” for this example. Remember, when you create a skill that you will publish, you will use a name that you define for your skill. That name will be the one that shows up in the Alexa App. Add the invocation name. Since we are using the sample, type “space geek”. Select **Next**.
   
   ![](https://s3.amazonaws.com/alexaskillimages/fact/skillinformationNEXT.png)

 5. Now, notice you're in the interaction model section.
   
   ![](https://s3.amazonaws.com/alexaskillimages/fact/interactionmodel.png)
 
 6. Next, we need to define our skill’s interaction model. Let’s begin with the intent schema. In the context of Alexa, an intent represents an action that fulfills a user’s spoken request. Intents can optionally have arguments called slots. We will not be using custom slots in this template, but they are very useful if you want to parameterize your intents.

    * Review the Intent Schema below. This is written in JSON and provides the information needed to map the intents we want to handle programmatically.  Copy this from the intent schema in the [GitHub repository here](https://github.com/alexa/skill-sample-nodejs-fact/blob/master/speechAssets/IntentSchema.json).
  
   ![](https://s3.amazonaws.com/alexaskillimages/fact/intentschemacopy.png)
    
   Below you will see the intents for getting a new fact, and then a collection of built-in intents to simplify handling common user tasks. Help intent will handle any time the user asks for help, stop and cancel are built-in intents to make it easier for you to handle when a user wants to exit the application. For more on the use of built-in intents, go [here](https://github.com/alexa/skill-sample-nodejs-fact/blob/master/speechAssets/IntentSchema.json).

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

 8. The next step is to build the utterance list.

    Given the flexibility and variation of spoken language in the real world, there will often be many different ways to express the same request. Providing these different phrases in your sample utterances will help improve voice recognition for the abilities you add to Alexa. It is important to include as wide a range of representative samples as you can -– all the phrases that you can think of that are possible in use (though do not include samples that users will never speak). Alexa also attempts to generalize based on the samples you provide to interpret spoken phrases that differ in minor ways from the samples specified.

    Now its time to add the Utterances. Copy/paste the sample utterances from [GitHub](https://github.com/alexa/skill-sample-nodejs-fact/blob/master/speechAssets/SampleUtterances.txt). An example of utterances is listed below. Once they are copied, the screen should look similar to the following image:

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

 9. Select **Save**. You should see the interaction model being built (this might a take a minute or 2). If you select next, your changes will be saved and you will go directly to the test screen. After selecting Save, it should now look like this:

    ![](https://cdn.amazonblogs.com/developer_blog/images/image28_FactSkill_ZC.png)

Next we will configure the AWS Lambda function that will host the logic for our skill.
 
## Step 2: Creating Your Skill Logic using AWS Lambda

### Installing and Working with the Alexa Skills Kit SDK for Node.js (alexa-sdk)

To make the development of skills easier, we have created the ASK SDK for Node.js.We will be using this module to deploy the sample. The alexa-sdk is immediately available on [github here](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs) and can be deployed as a node package from within your Node.js environment.

 1. First, you will need to download the sample repository
    * On GitHub, navigate to the [Fact Skill repository](https://github.com/alexa/skill-sample-nodejs-fact). Click download (the green button) to download the repository to your local machine.
    
 2. To leverage the SDK for ASK you will need to install Node.js and update npm. To set this up on your machine, [follow these steps](https://docs.npmjs.com/getting-started/installing-node).
    
 2. Once you have the source downloaded, node installed and npm updated, you are ready to install the ASK-SDK. Install this in the same directory as your src/index.js file for your skill. Change the directory to the src directory of your skill, and then in the command line, type:
 
    ```
    npm install --save alexa-sdk
    ```
    Once this is installed you will need to include the **node_modules** directory with the source code for your skill when you compress the src for uploading to AWS Lambda. Let's do this with the example.
    
 4. Navigate to where you downloaded the sample respository and installed the Alexa SDK in step 3. Select the **src** directory.

 6. Compress the files inside the src directory into a zip file. **Remember**, do not compress the src directory itself, just the files within the directory, the index.js file and the node_modules folder. Your compressed file should show up in the src directory. You will use this file in a later step.

### Create an AWS Account
 
 ![](https://cdn.amazonblogs.com/developer_blog/images/image2_FactSkill_ZC.png)
    
  1. Open [aws.amazon.com](aws.amazon.com) and then choose **‘Create a Free Account’**

    1. Follow the online instructions. Do not worry about the IAM role, we will do that later.
    2. You will need a Valid Credit Card to set up your account (note the AWS Free Tier will suffice however. You can find out more about the free tier here.)
    3. Part of the sign-up procedure involves receiving a phone call and entering a PIN using the phone keypad.
    
  2. Sign in to the AWS Console

  ![](https://cdn.amazonblogs.com/developer_blog/images/image3_FactSkill_ZC.png)

  3. It can sometimes take a couple minutes for your new AWS account to go live. You will receive an e-mail when your account is active.

### Create an AWS Lambda Function

AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume - there is no charge when your code is not running. With Lambda, you can run code for virtually any type of application or backend service - all with zero administration. Just upload your code and Lambda takes care of everything required to run and scale your code with high availability.

**Note: If you are new to Lambda and would like more information, visit the [Lambda Getting Started Guide](http://docs.aws.amazon.com/lambda/latest/dg/getting-started.html).**

 1. **IMPORTANT**: Select **US East (N. Virginia)** region (upper right). This is the only region that currently supports Alexa Skill development.

 ![](https://s3.amazonaws.com/alexaskillimages/recipe/RegionSelect.png)

 2. Select **Lambda** from Compute services (upper left)

 ![](https://s3.amazonaws.com/alexaskillimages/recipe/LambdaSelection.png)

 3. Select **“Create a Lambda Function”** to begin the process of defining your Lambda function.

 4. At the bottom of the **‘Select Blueprint’** page, select **“Next”**

 ![](https://s3.amazonaws.com/alexaskillimages/fact/blueprintNEXT.png)

 5. Now, you need to configure the event that will trigger your function to be called. As we are building skills with the Alexa Skills Kit, click on the gray dash-lined box and select Alexa Skills Kit from the dropdown menu.

 ![](https://s3.amazonaws.com/alexaskillimages/fact/congifuretriggerASK.png)

 6. Choose **Next** to continue.

 ![](https://s3.amazonaws.com/alexaskillimages/fact/configuretriggernext.png)

 7. You should now be in the **"Configure Function"** section. Enter the Name, Description, and Runtime for your skill as in the example.

 ![](https://s3.amazonaws.com/alexaskillimages/fact/configurefunction.png)

 8. Select the **‘Code Entry Type’** as **‘Upload Zip File’** and upload the zip file containing the example you created in Step 1. **Note:** This zip file should contain the contents of the src directory, including the node_modules subfolder.

 ![](https://s3.amazonaws.com/alexaskillimages/fact/lambdafunctioncode.png)

 9. Set your handler and role as follows:

    * Keep Handler as ‘index.handler’
    * Drop down the “Role” menu and select **“Create a new custom role”**. (Note: if you have already used Lambda you may already have a ‘lambda_basic_execution’ role created that you can use.) This will launch a new tab in the IAM Management Console.
    
 ![](https://s3.amazonaws.com/alexaskillimages/fact/createcustomrole.png)

 10. You will be asked to set up your Identity and Access Management or “IAM” role if you have not done so. AWS Identity and Access Management (IAM) enables you to securely control access to AWS services and resources for your users. Using IAM, you can create and manage AWS users and groups, and use permissions to allow and deny their access to AWS resources. We need to create a role that allows our skill to invoke this Lambda function. In the Role Summary section, select "Create a new IAM Role" from the IAM Role dropdown menu. The Role Name and policy document will automatically populate.

 ![](https://s3.amazonaws.com/alexaskillimages/fact/createcustomrole.png)

 11. Select **“Allow”** in the lower right corner and you will be returned to your Lambda function.


 ![](https://s3.amazonaws.com/alexaskillimages/recipe/allowrole.png)

 12. Keep the Advanced settings as default. Select **‘Next’** and review. You should see something like below. Then select **‘Create Function’**:

 ![](https://s3.amazonaws.com/alexaskillimages/fact/CreateFunctionbuitton.png)

 13. Congradulations, you have created your AWS Lambda function. **Copy** the ARN for use in the Configuration section of the Amazon Developer Portal.

![](https://s3.amazonaws.com/alexaskillimages/fact/ARN.png)

## Step 3: Add Your Lambda Function to Your Skill

 1. Navigate back to [developer.amazon.com](http://developer.amazon.com) and select your skill from the list. You can select the skill name or the edit button.
 
 ![](https://s3.amazonaws.com/alexaskillimages/fact/editskill.png)

 2. Select the Configuration section. Add the ARN from the Lambda function you created in the AWS Console earlier. Select the **Lambda ARN (Amazon Resource Name)** radio button. Then, select **“No”** for account linking since we will not be connecting to an external account for this tutorial. Paste the ARN you copied earlier into the Endpoint field. Then select **Next**.

 ![](https://s3.amazonaws.com/alexaskillimages/fact/configurationtab.png)

 3. You have now completed the initial development of your skill. Now its time to test.

## Step 4: Testing Your Skill

 1. In the Test area, we are going to enter a sample utterance in the service simulator section and see how Alexa will respond. In this example, we have called the skill ‘Space Geek’. This is the ‘Invocation Name’ we set up on the Skill Information line in the “Skill Information” section.

    * In the Service Simulator, type **‘open Space Geek’** and select **“Ask My Fact Skill”**.

  ![](https://s3.amazonaws.com/alexaskillimages/fact/openspacegeek.png)

 2. You should see the formatted JSON request from the Alexa Service and the response coming back. Verify that you get a correct Lambda response, and notice the card output. You will want to customize this output later.
  
  ![](https://s3.amazonaws.com/alexaskillimages/fact/servicesimulator.png)
 
 3. (Optional) Testing with your device. This is optional as you can do all the testing in the portal. Assuming your Echo device is on-line (and logged in with the same account as your developer account), you should now see your skill enabled in the Alexa app and ask Alexa to launch your skill. For more information on testing an Alexa skill and registering an Alexa-enabled device, [check here](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/testing-an-alexa-skill).
 
  ![](https://s3.amazonaws.com/alexaskillimages/fact/alexaappskill.png)
  
### Not working (getting an invalid response)?
 Do you have the right ARN copied from your Lambda function into your Developer Portal / Skill?
    * Are you calling the right invocation name?
    * Are you saying launch, start or open?
    * Are you sure you have no other skills in your accounts with the same invocation name?
    * For this template specifically, you should have a minimum of 20 facts for a good customer experience.

## Step 5: Make it Yours
 
 1. In the Skill Information section in the Developer Console, edit the Skill Information Tab to reflect your new Fact Skill:

   1. Provide a skill name that represents the new skill you are creating.
   2. Come up with a cool Invocation Name that users will use to invoke your skill
   3. Create a fun icon. Be sure you have the rights to whatever icons you are uploading – you will need to provide both 108x108px and 512x512px images. Need help finding an image, see PixelBay as a possible source for royalty-free images. Use an image editor (such as Paint on Windows or Preview on Mac to change the size of the image.
   
   Everything else can stay as-is for now in the Developer Portal

 2. Open the source file for your Lambda function, index.js, in an editor of your choice. This is in the src directory of the repository you downloaded earlier. You will see on line 10 the definition of the facts used in the SpaceGeek example. These are the strings you will want to edit to customize this fact for your use.
 
  ![](https://s3.amazonaws.com/alexaskillimages/fact/arrayofspacefacts.png)
  
 3. Change the SKILL_NAME variable to the name of your skill.
 
 ```JSON
 var SKILL_NAME = 'Space Facts'
 ```
 
 4.  Edit the strings to contain what ever facts or information you would like to make randomly available when a user invokes your skill. A few suggestions:

    * Only change the text between the double quotes. These are your facts.
    * Ensure you don’t accidentally delete and quotes or commas. You can always go back to GitHub and copy it again if you make a mistake.
    * The skill uses a mathematical randomization on your list of facts. It is a good idea to have at least 20, but more like 100, facts in the skill to ensure that the facts do not repeat too quickly. Also remember that because it is random, it is possible that the same fact can be repeated twice.
    * For extra credit and completely optional- If you would like to ensure that the facts don’t repeat (for a “Daily Fact Skill” for example), you can use a datastore like DynamoDB to store an id that you can check when the user accesses the skill and iterate through the facts. For more information on using DynamoDB with Lambda, [go here](http://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html). 
    
 5. You will also want to make sure to change the “Space Geek” references to the name of your skill. You don’t have to edit them all, but the following reference changes are required for certification.

    * Find this code in the HelpIntent, and change Space Geek to your custom name:
    
    ```JSON
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a space fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    ```
 6.  In order to control who accesses your web service, we should validate the application id in requests made to your web service. Let’s go back to your Alexa skill in your Developer Portal for a moment. Copy in your Application ID from the ‘Skill Information’ section in your developer portal / skill:
 
 ![](https://s3.amazonaws.com/alexaskillimages/fact/appid.png)
 
 
 7. Copy the application id into the value of the APP_ID variable. Make sure to place the app id in quotation marks.
 ```JSON
 var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
 ```
 
 8. A minimum of 20 facts is needed to get started, about 100 is a good number to keep users engaged. The more the better.

 9. Be sure to select **SAVE** when you are all done. Note: we test initially in the Developer Portal, not in our Lambda function (AWS). 

 10. Log back into your AWS console and upload the changes you have just made. First you will need to zip up the files into a new archive. You can do this by selecting the files that you need in the src directory (the node_modules directory and your updated index.js) into a new archive. Be sure that you compress the files in the folder, not the folder itself. 
 
 11. Select your Lambda function and on the Code tab, select “Upload” to add the archive you just created.
 
 ![](https://s3.amazonaws.com/alexaskillimages/fact/uploadupdate.png)

 12. Once you have successfully added the file you will see it on the screen, then select “Save”.
 
 13. Repeat the tests you performed earlier to ensure your changes are functioning properly. See step 4 for a review of how to performs functional tests.

## Step 6: Publish Your Skill

Now we need to go back to our Developer Portal to test and edit our skill and we will be ready for certification.

 1.  In your skills Test section, enter your Utterances into the Simulator to make sure everything is working with your new facts.

 2.  Optionally, you can test with your Alexa-enabled device to make sure everything is working correctly. You may find a few words that need to be changed for a better user experience.

 Some things to think about:

  * Does every fact sound correct? 
  * Do you need to change any words to make them sound correct? 
  
  Because we are randomizing our facts, this could take a while. Instead, you can use the Voice Simulator in the Test section to simulate Alexa’s responses. In the Voice Simulator, type in each fact that you are using to test how Alexa will say it. Use additional punctuation or possibly SSML if you need to better control how Alexa responds. You can find out more about [SSML here](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference).

  * Have you added in YOUR ApplicationID as per the previous instruction?

 3. Select the Publishing Information area of your skill next:
 
  ![](https://s3.amazonaws.com/alexaskillimages/fact/piblishinginfo.png)
 
   * Spend some time coming up with an enticing, succinct description. This is the only place you have to attract new users. These descriptions show up on the list of [skills available](http://alexa.amazon.com/#skills) in the Alexa app.
   * In your example phrases, be sure that the examples you use match the utterances that your created in the Interaction Model section. Remember, there are built-in intents such as help and cancel. You can learn more about [built-in intents here](https://developer.amazon.com/appsandservices/solutions/alexa/alexa-skills-kit/docs/implementing-the-built-in-intents#Available%20Built-in%20Intents). You can also review the list of [supported phrases](https://developer.amazon.com/appsandservices/solutions/alexa/alexa-skills-kit/docs/supported-phrases-to-begin-a-conversation) to begin a conversation.
    * Be sure you have the rights to whatever icons you are uploading – you will need to provide both 108x108px and 512x512px images. If there is any question the Amazon certification team will fail your Alexa skill submission.

  ![](https://s3.amazonaws.com/alexaskillimages/fact/pubinfocomplete.png)
 
  Once you have uploaded your icons, you should see a success message at the bottom of the screen.

 4.  IMPORTANT: Add the text “This is based on the Fact Skill Template” to the Testing Instructions section. This alerts the Certification team of your submission using this standardized template, smoothing the road to a faster publish. Finally, **select Next**.
   ![](https://s3.amazonaws.com/alexaskillimages/fact/testinstructions.png)
   
 5.  Privacy and Compliance.

    a.  On the Privacy and Compliance section, select ‘No’ for spending real money and collecting personal information. Privacy and Terms URL’s are optional. Choose to certify that your skill can be imported to and exported from the US.

    1.  Select **“Save”**.
 
    ![](https://s3.amazonaws.com/alexaskillimages/fact/privcompli.png)

    2.  Select “Submit for Certification”
    ![](https://s3.amazonaws.com/alexaskillimages/fact/submit.png)
   
    3.  Finally, confirm your submission. Select “Yes” to submit your skill.
   
   
   
Congratulations! You have successfully sumbitted your skill for publication. You will receive progress e-mails and possibly other suggestions from the team on how you can make your skill even better. You can update your skills at any time.

## Check out These Other Developer Resources
    
* [Alexa Skills Kit (ASK)](https://developer.amazon.com/ask)
* [Alexa Developer Forums](https://forums.developer.amazon.com/spaces/165/index.html)
* [Knowledge Base](https://goto.webcasts.com/starthere.jsp?ei=1090197)
* [Intro to Alexa Skills Kit  - On Demand Webinar](https://goto.webcasts.com/starthere.jsp?ei=1090197)
* [Voice Design 101 - On Demand Webinar](https://goto.webcasts.com/starthere.jsp?ei=1087594)
* [Developer Office Hours](https://attendee.gotowebinar.com/rt/8389200425172113931)

 























   
   
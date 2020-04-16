# Build An Alexa Fact Skill
<img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/fact/header._TTH_.png" />

## Setup w/ ASK CLI

### About
This readme assumes you have your developer environment ready to go and that you have some familiarity with CLI (Command Line Interface) Tools, [AWS](https://aws.amazon.com/), and the [ASK Developer Portal](https://developer.amazon.com/alexa-skills-kit?&sc_category=Owned&sc_channel=RD&sc_campaign=Evangelism2018&sc_publisher=github&sc_content=Content&sc_detail=fact-nodejs-V2_CLI-1&sc_funnel=Convert&sc_country=WW&sc_medium=Owned_RD_Evangelism2018_github_Content_fact-nodejs-V2_CLI-1_Convert_WW_beginnersdevs&sc_segment=beginnersdevs). If not, [click here](./1-voice-user-interface.md) for a more detailed walkthrough.

### Pre-requisites

* Node.js (> v10.x)
* Register for an [AWS Account](https://aws.amazon.com/)
* Register for an [Amazon Developer Account](https://developer.amazon.com?&sc_category=Owned&sc_channel=RD&sc_campaign=Evangelism2018&sc_publisher=github&sc_content=Content&sc_detail=fact-nodejs-V2_CLI-1&sc_funnel=Convert&sc_country=WW&sc_medium=Owned_RD_Evangelism2018_github_Content_fact-nodejs-V2_CLI-1_Convert_WW_beginnersdevs&sc_segment=beginnersdevs)
* Install and Setup [ASK CLI](https://developer.amazon.com/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html?&sc_category=Owned&sc_channel=RD&sc_campaign=Evangelism2018&sc_publisher=github&sc_content=Content&sc_detail=fact-nodejs-V2_CLI-1&sc_funnel=Convert&sc_country=WW&sc_medium=Owned_RD_Evangelism2018_github_Content_fact-nodejs-V2_CLI-1_Convert_WW_beginnersdevs&sc_segment=beginnersdevs)

### Installation
1. **Make sure** you are running the latest version of the CLI

	```bash
	$ npm update -g ask-cli
	```

2. **Clone** the repository.

	```bash
	$ git clone https://github.com/alexa/skill-sample-nodejs-fact/
	```

3. If it's your first time using it, **configure** the [ASK CLI](https://developer.amazon.com/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html?&sc_category=Owned&sc_channel=RD&sc_campaign=Evangelism2018&sc_publisher=github&sc_content=Content&sc_detail=fact-nodejs-V2_CLI-1&sc_funnel=Convert&sc_country=WW&sc_medium=Owned_RD_Evangelism2018_github_Content_fact-nodejs-V2_CLI-1_Convert_WW_beginnersdevs&sc_segment=beginnersdevs) by navigating into the repository and running npm command: `ask configure`. Follow the prompts.

	```bash
	$ cd skill-sample-nodejs-fact
	$ ask configure
	```

4. Install npm dependencies by navigating into the `/lambda/custom` directory and running the npm command: `npm install --save`

	```bash
	$ cd lambda/custom
	$ npm install
	```

### Deployment

ASK CLI **will create the skill and the lambda function for you**. The Lambda function will be created in ```us-east-1 (Northern Virginia)``` by default.

1. Navigate to the project's root directory. You should see a folder named 'skill-package' it contains a file called 'skill.json'.
2. Deploy the skill and the lambda function in one step by running the following command:

	```bash
	$ ask deploy
	```

### Testing

1. To test, you need to login to Alexa Developer Console, and **enable the "Test" switch on your skill from the "Test" Tab**.

2. Simulate verbal interaction with your skill through the command line (this might take a few moments) using the following example:

	```bash
	 $ ask dialog -l en-US 
	 
	 ========================================== Welcome to ASK Dialog 
	 ========================================== In interactive mode, type your utterance text onto the console and hit enter 
	 ========================================== Alexa will then evaluate your input and give a response!
	 ========================================== Use ".record <fileName>" or ".record <fileName> --append-quit" to save list of utterances to a file. 
	 ========================================== You can exit the interactive mode by entering ".quit" or "ctrl + c". 
	 User  > open space facts
	 ...
	 ```

3. Once the "Test" switch is enabled, your skill can be tested on devices associated with the developer account as well. Speak to Alexa from any enabled device, from your browser at [echosim.io](https://echosim.io/welcome), or through your Amazon Mobile App and say :

	```text
	Alexa, open space facts
	```
## Customization

1. ```.skill-package/skill.json```

   Change the skill name, example phrase, icons, testing instructions etc ...

   Remember than many information are locale-specific and must be changed for each locale (en-GB and en-US)

   See the Skill [Manifest Documentation](https://developer.amazon.com/docs/smapi/skill-manifest.html?&sc_category=Owned&sc_channel=RD&sc_campaign=Evangelism2018&sc_publisher=github&sc_content=Survey&sc_detail=fact-nodejs-V2_CLI-3&sc_funnel=Convert&sc_country=WW&sc_medium=Owned_RD_Evangelism2018_github_Survey_fact-nodejs-V2_CLI-3_Convert_WW_beginnersdevs&sc_segment=beginnersdevs) for more information.

2. ```./lambda/custom/index.js```

   Modify messages, and data from the source code to customize the skill.

3. ```./models/*.json```

	Change the model definition to replace the invocation name and the sample phrase for each intent.  Repeat the operation for each locale you are planning to support.

4. Remember to re-deploy your skill and lambda function for your changes to take effect.

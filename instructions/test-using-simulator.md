# Build An Alexa Fact Skill
<img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/quiz-game/header._TTH_.png" />

Build an engaging facts skill about any topic. Alexa will select a fact at random and share it with the user when the skill is invoked.

## Testing Your Alexa Skill

So far, we have created a Voice User Interface, and deployed code to a backend service linked to the skill.  Your skill is now ready to test.

1.  If you are not continuing immediately from the previous step, **go back to the [Amazon Developer Portal](https://developer.amazon.com/alexa/console/ask?&sc_category=Owned&sc_channel=RD&sc_campaign=Evangelism2018&sc_publisher=github&sc_content=Survey&sc_detail=fact-nodejs-V2_GUI-4&sc_funnel=Convert&sc_country=WW&sc_medium=Owned_RD_Evangelism2018_github_Survey_fact-nodejs-V2_GUI-4_Convert_WW_beginnersdevs&sc_segment=beginnersdevs) and select your skill from the list.**

2. Access the **Alexa Simulator**, by selecting the **Test** tab from the top navigation menu.  Your browser may request permission to access your microphone.  While it is recommended to do so, it is not required.  Do note that if you don't allow access to the microphone, you must type your utterances to Alexa in the simulator.

3. Notice the dropdown next to "Test is disabled for this skill.", found just underneath the top navigation menu. To enable testing mode, toggle the dropdown from Off to Development.

4. To validate that your skill is working as expected, invoke your skill from the **Alexa Simulator** just below. You can either type or click and hold the mic from the input box to use your voice.
	1. **Type** "Open" followed by the invocation name you gave your skill previously. For example, "Open space facts".
	2. **Use your voice** by clicking and holding the mic on the side panel and saying "Open" followed by the invocation name you gave your skill.
	3. **If you've forgotten the invocation name** for your skill, revisit the **Build** panel on the top navigation menu and select **Invocation** from the sidebar to review it.

* *Tip: Always finish your test by saying "stop" to formally end your session.*


5. Ensure your skill works the way that you designed it to.
	* After you interact with the Alexa Simulator, you should see the Skill I/O **JSON Input** and **JSON Output** boxes get populated with JSON data. You can also view the **Device Log** to trace your steps.
		- You can view the Device Log in the **Test** tab by toggling the check box in the upper right hand corner.
	* If it's not working as expected, you can dig into the JSON to see exactly what Alexa is sending and receiving from the endpoint. If something is broken, you can find the error in AWS Cloudwatch.


6.  Troubleshooting with CloudWatch log messages: You can add `console.log()` statements to your code, to track what is happening as your code executes, and help to figure out what is happening when something goes wrong. You will find the log to be incredibly valuable as you move into more advanced skills. To view CloudWatch logs:
	1. Navigate to the **Code** Tab
	2. In the bottom left hand corner, click the **Logs: Amazon CloudWatch** link
	3. Once you are in the AWS CloudWatch Management Console, you can filter your log streams. Sorting by the `Last Event Time` column and clicking the top row will show you the logs of the last invocation. You can also filter or search for a specific log output with the `Filter` input field. 


[![Next](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/buttons/button_next_customization._TTH_.png)](./customize-skill-content.md)

## **How to setup and run Unit Tests**

There are several methods commonly used to test and simulate Alexa skills during the development process.
See the Alexa Cookbook [testing guide](https://github.com/alexa/alexa-cookbook/tree/master/guides/testing) for more details.

For running formal QA tests, developers can leverage third-party tools that run on standard unit test frameworks like [Jest](https://jestjs.io/) or [Mocha](https://mochajs.org/).

Here we will focus on running a test suite against your local code project using the Bespoken CLI (`bst`) from [Bespoken](https://bespoken.io).

To get started, you need to install the Bespoken CLI, please follow the next steps:
1. Install the Bespoken CLI by running `npm install -g bespoken-tools` on your command line.
2. Create the main testing folder. We recommend to name it `test`; it should be under the root of your skill's directory.
3. Create a folder named `unit` under `test\`, this folder will store your unit test script files.
4. Add the test configuration file `testing.json`. This file should be located under your `test\unit` directory. It might look like this:
    ```JSON
    {
        "handler": "../../src/index.js",
        "locale": "en-US",
        "trace": true,
        "jest": {
            "silent": false
        }
    }
    ```
    The most important parameter is the handler where you indicate Bespoken's Skill Tester where the source code of your skill is. These parameters can be overwritten on each test script file under their configuration section.
5. Add your test scripts. We recommend to use next convention when naming your test script files:
     * If you have only one test script: `index.test.yml`
     * If you want to create more than one test script: `functionalityName.test.yml`.

     The yml extension indicates this is a YAML file, which is the syntax we use to create test scripts; `test` means that is a unit test script file. A test script looks like this:
    ```YAML
    ---
    configuration: # Here you define your locales and mocks
        locale: en-US

    --- # Three dashes start a new YAML document
    - test: Launch request, no further interaction. # A description of this test sequence
    - LaunchRequest: # LaunchRequest is not an utterance but a request type
        - response.outputSpeech.ssml: Here's your fact
        - response.card.type: Simple
        - response.card.title: Space Facts
        - response.card.content: "*" # A wildcard means any text will match
    ```
    A typical YAML sentence is composed of 2 parts separated by a colon; in the left part we have the intent name we want to test; in the right part we have the expected result. You can also access any element on the JSON response object like the session attributes.
6. To execute the scripts go to the root of your project and run `bst test`. That will find and run all the unit test scripts files.

For more information about skill unit testing with Bespoken, please read [here](https://read.bespoken.io/unit-testing/getting-started/).

If you need assistance, reach Bespoken on any of these channels:
* [Chat with us](https://bespoken.io/testing) (chat is in lower right-hand corner of the page)
* [Email](mailto:support@bespoken.io)
* [Twitter](https://twitter.com/bespokenio)
* [Gitter](https://gitter.im/bespoken)

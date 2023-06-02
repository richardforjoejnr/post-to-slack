#  Slack Command-Line Tool
The 'slack' command-line tool provides a utility to automate the process of posting messages to a Slack channel. It uses a template system that allows you to define the structure and content of the message, then populate it with data from a JSON file.

#  Getting Started
Before you begin, you will need to install all the necessary dependencies by running:

npm install -g @richardforjoesky/post-to-slack
OR
yarn global add @richardforjoesky/post-to-slack

Ensure that you have Node.js installed on your system as the tool is built using Node.js.

#  Usage
To use the 'slack' command-line tool, use the following syntax:

npm run|yarn slack-tools post-message 
--template '<template-path>' --data '<data-path>'
Where:

<template-path> is the path to the template file. This file defines the structure and content of the Slack message. It should contain placeholders where data from the JSON file will be inserted.
<data-path> is the path to the data file. This file should be in JSON format and contains the data that will be used to populate the template for the Slack message.
#  Example

node ./src/slack.js send-slack-message --template './sample/testreport_template' --data './src/slack-message-tool/sample/slack_data.json'

In the above example, the 'slack' command-line tool is instructed to send a Slack message. The structure and content of the message are defined in the 'testreport_template' file and it is populated with data from the 'slack_data.json' file.

#  Error Handling
If an error occurs while sending a Slack message, the error will be logged in the console and the process will exit with a status code of 1. This could happen, for example, if there is a problem with the data or template files, or if there is an issue with the connection to Slack.


#  sendSlackMessage Package
Description
The sendSlackMessage function is part of a utility package designed to automate the process of sending messages to Slack from Node.js applications. This function can be especially useful when integrated with automated test runners to send test results directly to a Slack channel.

#  Installation
Before you begin, make sure you have Node.js and npm installed on your local machine. Then, navigate to your project's root directory and run the following command:

npm install --save @post-to-slack

#  Usage
First, you will need to include the function in your file:


const { sendSlackMessage } = require('post-to-slack');
To use the function, you need to call it and pass an object containing your message data:

javascript
const data = {
  channel: '#your-channel',
  text: 'Your message here',
};
sendSlackMessage(data);
The function will automatically choose the method of sending the message based on the presence of a Slack bot token.

Environment Variables
The sendSlackMessage function uses two environment variables:

SLACK_TOKEN - Your Slack bot token.
SLACK_WEBHOOK - Your Slack webhook URL.
You need to define these variables in your .env file:



License
This project is licensed under MIT License.

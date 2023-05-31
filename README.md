
#  sendSlackMessage Package
Description
The sendSlackMessage function is part of a utility package designed to automate the process of sending messages to Slack from Node.js applications. This function can be especially useful when integrated with automated test runners to send test results directly to a Slack channel.

#  Installation
Before you begin, make sure you have Node.js and npm installed on your local machine. Then, navigate to your project's root directory and run the following command:

npm install --save @post-to-slack

#  Usage
First, you will need to include the function in your file:

javascript
Copy code
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

SLACK_TOKEN_PERSONAL - Your Slack bot token.
SLACK_WEBHOOK - Your Slack webhook URL.
You need to define these variables in your .env file:


SLACK_TOKEN_PERSONAL=your_slack_token
SLACK_WEBHOOK=your_webhook_url


License
This project is licensed under MIT License.

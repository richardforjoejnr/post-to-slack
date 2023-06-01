const { WebClient } = require("@slack/web-api");
const axios = require("axios");
require("dotenv").config();

exports.sendSlackMessage = async (data) => {
  const token = process.env.SLACK_TOKEN; 
const webhookUrl = process.env.SLACK_WEBHOOK;

const web = new WebClient(token);
  try {
    token
      ? await web.chat.postMessage(data)
      : axios.post(webhookUrl, data);
  } catch (error) {
    throw new Error('Either a slack token or webhook url is needed in your .env file.');
    console.error(error);
  }
};

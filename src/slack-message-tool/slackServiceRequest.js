const { WebClient } = require("@slack/web-api");
const axios = require("axios");
require("dotenv").config();

exports.sendSlackMessage = async (data, authentication) => {
  const token = authentication || process.env.SLACK_TOKEN_PERSONAL; 
const webhookUrl = authentication || process.env.SLACK_WEBHOOK;

const web = new WebClient(token);
  try {
    token
      ? await web.chat.postMessage(data)
      : axios.post(webhookUrl, data);
  } catch (error) {
    console.error(error);
  }
};

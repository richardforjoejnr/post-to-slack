const { WebClient } = require('@slack/web-api');
require('dotenv').config();

const token = process.env.SLACK_TOKEN_PERSONAL; // You should replace this with your actual token

const web = new WebClient(token);

const sendMessageConfig = (data) => {
  return {
    channel: data.channel,
    text: data.text,
    blocks: data.blocks,
  };
};

exports.sendSlackMessage = async (data) => {
  try {
    await web.chat.postMessage(sendMessageConfig(data));
  } catch (error) {
    console.error(error);
  }
};

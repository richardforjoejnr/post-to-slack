/* eslint-disable no-console */
const fs = require('fs');
const envPath = require('path');

const { sendSlackMessage } = require('./slackServiceRequest');
const { TESTREPORT } = require('./data/data');

require('dotenv').config({ path: envPath.resolve(__dirname, '.env') });

console.log('slack_data.json path exists', fs.existsSync('slack-message-tool/data/slack_data.json'));
const slackData = fs.existsSync('slack-message-tool/data/slack_data.json')
  ? fs.readFileSync(`slack-message-tool/data/slack_data.json`).toString()
  : '';

  console.log(slackData)
// process.platform = 'linux';
// const isPipeline = process.platform === 'linux';

exports.sendMessage = async (opts) => {

  console.log('REPORT', slackData, opts);
  let data;
  (opts.data) ? data = JSON.parse(opts.data) : data = JSON.parse(slackData);
  console.log('REPORT PARSE', data);


  await sendSlackMessage(TESTREPORT(data || slackData));

  console.log('All done...sent to slack');
};

/* eslint-disable no-console */
const fs = require('fs');

const { sendSlackMessage } = require('./slackServiceRequest');


exports.sendMessage = async (opts) => {

  const slackTemplatePath = `${opts.template}`

  const { TEMPLATE } = require(slackTemplatePath);

  const slackData = fs.existsSync(opts.data)
  ? fs.readFileSync(opts.data).toString()
  : '';

  if (!opts.template || !opts.data) {
    throw new Error('Both slack template and slack data are required.');
}

  const data = JSON.parse(slackData);

await sendSlackMessage(TEMPLATE(data));

  console.log('All done...sent to slack');
};

exports.TESTREPORT = (data) => {
  
  const reportUrl = data.reportUrl;
  const date = data.date;
  const totalPassed = data.totalPassed; // Replace with your actual data
  const totalFailed = data.totalFailed; // Replace with your actual data
  const totalNotRun = data.totalNotRun; // Replace with your actual dat
  console.log('failedTests', data, data.channel, data.failedTests)

  const failedTestsText = data.failedTests
  .map((feature) => {
    const scenarioText = feature.scenarios
      .map((scenario) => `ID: ${scenario.id}, Name: ${scenario.name}`)
      .join('\n');
    return `Feature: ${feature.feature}\n${scenarioText}`;
  })
  .join('\n\n');
  return {
    channel: data.channel || '#general',
    text: `${data.title}\n${data.description}`,
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: 'Test Report',
          emoji: true,
        },
      },
      {
        type: 'divider',
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*:heavy_check_mark: Total Passed:* ${totalPassed}\n`,
          },
          {
            type: 'mrkdwn',
            text: `*:x: Total Failed:* ${totalFailed}\n`,
          },
          {
            type: 'mrkdwn',
            text: `*:no_entry: Total Not Run:* ${totalNotRun}\n`,
          },
          {
            type: 'mrkdwn',
            text: `*Date:*\n${date}`,
          },
        ],
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Failed Tests:*\n${failedTestsText}`,
        },
      },
      {
        type: 'context',
        elements: [
          {
            type: 'mrkdwn',
            text: `For more details, please refer to the full report at: <${reportUrl}|View Full Report>`,
          },
        ],
      },
    ],
  };
};

const { formatReleaseNote } = require('./changelogformatter');
const { releaseData } = require('./release_data')

exports.RELEASEREPORT = (data = releaseData()) => {
  console.log('NOTE1', data.releasenotes);
  
  const releaseUrl = data.releaseUrl;
  const date = data.date;
  const releasenotes = formatReleaseNote(`${data.releasenotes}`);
  console.log('NOTE2', releasenotes);

  return {
    channel: data.channel || '#general',
    text: `${data.title}\n${data.description}`,
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: 'Release note',
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
            text: `*:heavy_check_mark: Completed Release*\n`,
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
          text: releasenotes,
        },
      },
      {
        type: 'context',
        elements: [
          {
            type: 'mrkdwn',
            text: `For more details, please refer to the release note at: <${releaseUrl}|View Full Release Note>`,
          },
        ],
      },
    ],
  };
};

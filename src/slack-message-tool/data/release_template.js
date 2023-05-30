
exports.RELEASEREPORT = (data) => {

  const channel = data.channel;
  const title = data.title;
  const subTitle = data.subTitle
  const description = data.description;
  const releaseUrl = data.releaseUrl;
  const date = data.date;
  const releaseNotes = data.releaseNotes;

  return {
    channel: channel || '#general',
    text: `${title}\n${subTitle}`,
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: `${title}\n${subTitle}`,
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
            text: `*:heavy_check_mark: ${description}*\n`,
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
          text: releaseNotes,
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

const { WebClient } = require('@slack/web-api');
require('dotenv').config()

const tokenClient = process.env.SLACK_TOKEN_PERSONAL; // You should replace this with your actual token

const webClient = new WebClient(tokenClient);

let totalPassed = 10; // Replace with your actual data
let totalFailed = 2; // Replace with your actual data
let totalNotRun = 5; // Replace with your actual data

let failedTests = [
    {id: 'TC001', name: 'Test Case 1'},
    {id: 'TC005', name: 'Test Case 5'}
    // Add more failed tests as needed
];

let failedTestsText = failedTests.map(test => `ID: ${test.id}, Name: ${test.name}`).join('\n');


async function sendMessage(web = webClient, token = tokenClient, title, description, imageUrl) {
    try {
        const response = await web.chat.postMessage({
            channel: '#general', 
            text: `${title}\n${description}`,
            blocks: [
                {
                    "type": "header",
                    "text": {
                        "type": "plain_text",
                        "text": "Test Report",
                        "emoji": true
                    }
                },
                {
                    "type": "divider"
                },
                {
                    "type": "section",
                    "fields": [
                        {
                            "type": "mrkdwn",
                            "text": "*:heavy_check_mark: Total Passed:*\n" + totalPassed
                        },
                        {
                            "type": "mrkdwn",
                            "text": "*:x: Total Failed:*\n" + totalFailed
                        },
                        {
                            "type": "mrkdwn",
                            "text": "*:no_entry: Total Not Run:*\n" + totalNotRun
                        },
                        {
                            "type": "mrkdwn",
                            "text": "*Date:*\n2023-05-13"
                        }
                    ]
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "*Failed Tests:*\n" + failedTestsText
                    }
                },
                {
                    "type": "context",
                    "elements": [
                        {
                            "type": "mrkdwn",
                            "text": "For more details, please refer to the full report at: <http://example.com|View Full Report>"
                        }
                    ]
                }
            ],
        });
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    sendMessage
  };
// sendMessage('Your Title', 'Your Description', 'https://png.pngtree.com/element_our/png/20181227/link-glyph-black-icon-png_292930.jpg');

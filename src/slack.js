#! /usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable no-multi-str */
const dotenv = require("dotenv");
const { Command } = require("commander");
require("colors").enable();

const { sendMessage } = require("./slack-message-tool/slackMethods");

// initialise environment
dotenv.config();

const VERSION = "1.1.0";

const program = new Command();
program
  .version(VERSION)
  .name('slack')
  .usage("<command> [options]")
  .description("The 'slack' command-line tool provides a utility automate posting messages to Slack.");

program
  .command('send-slack-message')
  .description("Sends a custom message to a designated Slack channel.\
  \n\nExample Usage: node ./src/slack.js send-slack-message --template './sample/testreport_template' --data './src/slack-message-tool/sample/slack_data.json'")
  .option(
    '-d, --data <data>',
    "Specify the path to the data file. The data file should be in JSON format and will be used to populate the template for the Slack message."
  )
  .option(
    '-t, --template <template>',
    "Specify the path to the template file. This file defines the slack message structure and content of the Slack message from the json, and it inserts the data from the json."
  )
  .action(async (opts) => {
    try {
      await sendMessage(opts);
    } catch (e) {
      console.error(`Failed: ${e.message || e}`.red);
      process.exit(1);
    }
  });

  program.parse(process.argv);
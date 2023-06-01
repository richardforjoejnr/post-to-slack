#! /usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable no-multi-str */
const dotenv = require("dotenv");
const { Command } = require("commander");
require("colors").enable();

const { sendMessage } = require("./slack-message-tool/slackMethods");

// initialise environment
dotenv.config();

const VERSION = "1.0.0";

const program = new Command();
program
  .version(VERSION)
  .name('slack')
  .usage("<command> [options]")
  .description("Provides tools and utilities for slack");

program
  .command('send-slack-message')
  .description("Sending a message to a slack channel")
  .option(
    '-d, --data <data>',
    "Pass in the relevant data file.\
    \n\nExample: node ./slack-message-tool/slack.js send-slack-message --data 'src/slack-message-tool/data/slack_data.json'"
  )
  .option(
    '-t, --template <template>',
    "Pass in the relevant template file.\
    \n\nExample: node ./slack-message-tool/slack.js send-slack-message --template './data/release_template'"
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
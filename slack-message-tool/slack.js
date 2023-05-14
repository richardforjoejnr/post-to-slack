#! /usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable no-multi-str */
const dotenv = require("dotenv");
const { Command } = require("commander");
require("colors").enable();

const { sendMessage } = require("./slackMethods");

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
    "Pass in the relevant data needed for slack.\
    \n\nExample: node ./slack-message-tool/slack.js send-slack-message --data '{'key1':'value1', 'key2':'value2'}'"
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
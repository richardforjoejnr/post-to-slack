function formatMessage(text) {
  const lines = text.split('\n');

  let message = '*Change Log*\n\n';

  let type;
  const changes = { 'BREAKING CHANGES': [], Features: [], 'Bug Fixes': [], Other: [] };
  let version;
  let date;
  let versionLink;

  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (!version && !date) {
        if (line.includes('[')) {
          const versionInfo = line.match(/\[([\d.]+)\]\((.*?)\)/);
          version = versionInfo[1];
          const appName = versionInfo[2].match(/\/compare\/(.*?)@/)[1];
          versionLink = `https://github.com/dummy/releases/tag/${appName}%40${version}`;
          date = line.match(/\((\d{4}-\d{2}-\d{2})\)[^(]*$/)[1];
        } else {
          [version, date] = line.replace('## ', '').split(' (');
          date = date.replace(')', '');
        }
        message += `*Version:* <${versionLink}|${version}>\n*Release Date:* ${date}\n\n`;
        message += 'All notable changes will be documented here.\n';
        message +=
          'See <https://conventionalcommits.org|Conventional Commits> for commit guidelines.\n\n';
      }
    } else if (line.startsWith('### ')) {
      type = line.replace('### ', '');
    } else if (line.startsWith('* **')) {
      // eslint-disable-next-line prefer-const
      let [description, commit] = line
        .replace('* **', '')
        .replace(' ([', '|')
        .replace('))', '')
        .split('|');
      commit = commit.split(' ')[0]; // Remove extra part of the commit link
      const commitNumber = commit.slice(0, 7); // Get short version of the commit number
      const formattedChange = `• *Description:* ${description} (<https://github.com/dummy/commit/${commitNumber}|${commitNumber}>)`;
      if (changes.hasOwnProperty(type)) {
        changes[type].push(formattedChange);
      } else {
        changes.Other.push(formattedChange);
      }
    }
  }

  // All changes
  for (type in changes) {
    if (changes[type].length) {
      message += `${type}:\n${changes[type].join('\n')}\n\n`;
    }
  }

  return message;
}

exports.formatReleaseNote = (inputText) => {
  try {
    return formatMessage(inputText);
  } catch (error) {
    return '*Change Log* - No release notes';
  }
};

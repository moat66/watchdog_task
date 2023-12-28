const {
  sendMessageText
} = require('./api/message');

async function sendNotify(
  text,
  desp,
  params = {},
) {
  await sendMessageText(desp);
}

module.exports = {
  sendNotify
};
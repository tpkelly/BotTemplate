const { WebhookClient } = require('discord.js');

function styledEmbed(title, description, colour) {
  return {
      title: title,
      description: description,
      color: colour || 0xde153a,
      footer: {
        //iconURL: 'https://example.com/template.png',
        text: 'Template'
      }
    }
}

function sendHook(hookId, hookToken, messageData) {
  var hook = new WebhookClient({ id: hookId, token: hookToken });
  setTimeout(() => hook.destroy(), 10000);
  return hook.send(messageData).catch(err => console.error(err));
}

module.exports = {
  styledEmbed: styledEmbed,
  sendHook: sendHook
};
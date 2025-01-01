const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const settings = require('./settings');

const startBot = async () => {
    const conn = new WAConnection();

    conn.on('open', () => {
        console.log(`Bot connected: ${conn.user.jid}`);
    });

    await conn.connect();
};

startBot();
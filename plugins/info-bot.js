import fs from "fs"
let handler = m => m
handler.all = async function (m) {
let vn = './media/bot.mp3'
let chat = global.db.data.chats[m.chat]
//const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "77755611654-1625305606@g.us" } : {}) }, message: {orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'πβπ ππ¦π π‘ππ - π΅ππ‘', orderTitle: 'Bang', thumbnail: fs.readFileSync('./Menu2.jpg'), sellerJid: '0@s.whatsapp.net'}}}
//const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "77755611654-1625305606@g.us" } : {}) }, message: {"audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"}}}  
if (/^bot$/i.test(m.text) && !chat.isBanned) { 
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendButton(m.chat, '*π·πΎπ»π°, ΒΏπ²πΎπΌπΎ ππ΄ πΏππ΄π³πΎ π°πππ³π°π?*', wm, [['πΌπ΄π½π π³π΄ π²πΎπΌπ°π½π³πΎπ', `#menu`]], 'conversation', { sendEphemeral: true, quoted: m })
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', seconds: '4556', ptt: true }, { quoted: m })      
//conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, { type: 'audioMessage', seconds: '4556', ptt: true, sendEphemeral: true, quoted: m })
}
return !0
}
export default handler

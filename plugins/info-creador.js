let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `
*ββ π΄π» π½ππΌπ΄ππΎ π³π΄ πΌπΈ π²ππ΄π°π³πΎπ π΄π wa.me/77755611654*

*ββ π΄π» π½ππΌπ΄ππΎ π³π΄π» π²πΎπ»π°π±πΎππ°π³πΎπ π· π΄π wa.me/34642467703*

*ββ π΄π» π½ππΌπ΄ππΎ π³π΄π» π²πΎπ»π°π±πΎππ°π³πΎπ 2 π΄π wa.me/77755611654*

*ββ π΄π» π½ππΌπ΄ππΎ π³π΄π» π²πΎπ»π°π±πΎππ°π³πΎπ 3 π΄π wa.me/595986460945*

*ββ π΄π» π½ππΌπ΄ππΎ π³π΄π» π²πΎπ»π°π±πΎππ°π³πΎπ 4 π΄π wa.me/51940617554*

*ββ π΄π» π½ππΌπ΄ππΎ π³π΄π» π²πΎπ»π°π±πΎππ°π³πΎπ 5 π΄π wa.me/51995386439*

*ββ π΄π» π½ππΌπ΄ππΎ π³π΄π» π²πΎπ»π°π±πΎππ°π³πΎπ 6 π΄π wa.me/593991398786*

*ββ π΄π» π½ππΌπ΄ππΎ π³π΄π» π²πΎπ»π°π±πΎππ°π³πΎπ 7 π΄π wa.me/51996089079*

*ββ π΄π» π½ππΌπ΄ππΎ π³π΄π» π²πΎπ»π°π±πΎππ°π³πΎπ 8 π΄π wa.me/573225236629*

*ββ π΄π» π½ππΌπ΄ππΎ π³π΄π» π²πΎπ»π°π±πΎππ°π³πΎπ 9 π΄π wa.me/593959425714*

*ββ π΄π» π½ππΌπ΄ππΎ π³π΄π» π²πΎπ»π°π±πΎππ°π³πΎπ 10 π΄π wa.me/50246028932*

*ββ π΄π» π²πΎπ½ππ°π²ππΎ π³π΄ π»π° π²πΎπ»π°π±πΎππ°π³πΎππ° 11 π΄π https://instagram.com/gata_dios*
`.trim()   
let buttonMessage= {
'document': { url: `https://github.com/BrunoSobrino/TheMystic-Bot-MD` },
'mimetype': `application/${document}`,
'fileName': `γ  π―ππππ πΎππππ γ`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/BrunoSobrino/TheMystic-Bot-MD',
'mediaType': 2,
'previewType': 'pdf',
'title': 'α΄Κ α΄α΄α΄α΄Κ Κα΄α΄ α΄α΄ α΄‘Κα΄α΄sα΄α΄α΄β©',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://www.youtube.com/channel/UCSTDMKjbm-EmEovkygX-lCA' }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'πΎ πΌπ΄π½π πΎ'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: 'π? π³πΎπ½π°π π?'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;π©ππππ πΊππππππ π;;;\nFN:π©ππππ πΊππππππ π\nORG:π©ππππ πΊππππππ π\nTITLE:\nitem1.TEL;waid=5219996125657:+521 999 612 5657\nitem1.X-ABLabel:π©ππππ πΊππππππ π\nX-WA-BIZ-DESCRIPTION:[β] α΄α΄Ι΄α΄α΄α΄α΄α΄ α΄ α΄sα΄α΄ Ι΄α΄α΄ α΄α΄Κα΄ α΄α΄sα΄s Ιͺα΄α΄α΄Κα΄α΄Ι΄α΄α΄s.\nX-WA-BIZ-NAME:π©ππππ πΊππππππ π\nEND:VCARD`
//await conn.sendMessage(m.chat, { contacts: { displayName: 'Bruno Sobrino π', contacts: [{ vcard }] }}, {quoted: m})
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler

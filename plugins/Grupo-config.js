let handler = async (m, { conn, args, usedPrefix, command }) => {
let isClose = { // Switch Case Like :v
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'abrir': 'not_announcement',
'cerrar': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
throw `------------------------------------------------------------------------------------------------------------
𝐀𝐝𝐫𝐢𝐞𝐥 𝐁𝐨𝐭
*[❗] 𝙵𝙾𝚁𝙼𝙰𝚃𝙾 𝙴𝚁𝚁𝙾𝙽𝙴𝙾!!*
✨𝙴𝙹𝙴𝙼𝙿𝙻𝙾✨ 
${usedPrefix + command} abrir*
${usedPrefix + command} cerrar*

------------------------------------------------------------------------------------------------------------

𝐀𝐝𝐫𝐢𝐞𝐥 𝐁𝐨𝐭
*[❗]WRONG FORMAT!!*
*✨EXAMPLE✨*
${usedPrefix + command} *open*
${usedPrefix + command} *close*
------------------------------------------------------------------------------------------------------------`.trim()
await conn.groupSettingUpdate(m.chat, isClose)
{m.reply('*[ ✔ ] 𝙶𝚁𝚄𝙿𝙾 𝙲𝙾𝙽𝙵𝙸𝙶𝚄𝚁𝙰𝙳𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴*\n\n\n*')}
}
handler.help = ['group open / close', 'grupo abrir / cerrar']
handler.tags = ['group']
handler.command = /^(group|grupo)$/i
handler.admin = true
handler.botAdmin = true
handler.register = true
export default handler

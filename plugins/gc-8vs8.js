let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `𝘓𝘐𝘚𝘛𝘈 8 VS 8❤️‍🔥•: ${pesan}`
let teks = `╭┈┈ ๑👻๑ •• ${oi} ๑👻๑ ••:\n`
for (let mem of participants) {
teks += `@${mem.id.split('@')[0]}❤️‍🔥`}
teks += `ㅤ
│
│         🐻‍❄️ 𝐀𝐝𝐫𝐢𝐞𝐥𝐁𝐨𝐭 🐻‍❄️
│        ₊˚︶︶︶︶︶︶︶︶˚ ‧₊
│
│      ෆ 𝘌𝘯𝘤𝘢𝘳𝘨𝘢𝘥o:
│      ෆ 𝘏𝘰𝘳𝘢𝘳𝘪𐐫:
│         ‧₊⏱️  🇵🇪 ⌇  🇧🇴 ⌇  🇦🇷      
│
│ㅤㅤʚ 𝙹𝚄𝙶𝙰𝙳𝙾𝚁𝙴𝚂❄️:
│
│   𝙴𝚀𝚄𝙸𝙿𝙾 𝟷
│ㅤ🐼• 
│ㅤ🐼• 
│ㅤ🐼• 
│ㅤ🐼•
│   𝙴𝚀𝚄𝙸𝙿𝙾 𝟸
│ㅤ🐼• 
│ㅤ🐼• 
│ㅤ🐼• 
│ㅤ🐼•
│   ㅤㅤ
│ㅤㅤʚ 𝚂𝚄𝙿𝙻𝙴𝙽𝚃𝙴𝚂❄️:
│ㅤ🐼•
│ㅤ🐼•
│
│   ⊹ ִֶָ𝙳𝙾𝙽𝙰𝙳𝙾𝚁 𝙳𝙴 𝚂𝙰𝙻𝙰: 
│ㅤ
│. 🐼•
╰───────────────๑ •`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['smsm8vs8 <mesaje>','mapa8vs8 <mesaje>']
handler.tags = ['group']
handler.command = /^(smsm8vs8|mapa8vs8)$/i
handler.admin = true
handler.group = true
export default handler
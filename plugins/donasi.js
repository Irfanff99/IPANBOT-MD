let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0858-5585-4993]
│─「 Dana • Ovo • Gopay 」
│ •  [0895-1049-7533]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

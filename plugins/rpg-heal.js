import { join } from 'path' 
import { promises } from 'fs'
let handler = async (m, { conn, args, usedPrefix, __dirname }) => {
let imgr = flaaa.getRandom()
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let user = global.db.data.users[m.sender]
if (user.health >= 100) return conn.sendButton(m.chat, `ππ ππ°π»ππ³ π΄πππ° π»π»π΄π½π° β€οΈ`, wm, imgr + `SALUD: ${user.health}`, [
[`ποΈ π°ππ΄π½ππππ°π`, `${usedPrefix}adventure`]], m)
const heal = 40 + (user.cat * 4)
let count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((90 - user.health) / heal)))) * 1
if (user.potion < count) return conn.sendButton(m.chat,`${htki} ππΈπ½ πΏπΎπ²πΈπΎπ½π΄π ${htka}`, 
`π½π΄π²π΄ππΈππ°π ${count - user.potion} πΏπΎπ²πΈπΎπ½ π₯€ πΏπ°ππ° π²πππ°πππ΄
ππ°π»ππ³ Β» ${user.health} β€οΈ
πΏπΎπ²πΈπΎπ½ Β» ${user.potion} π₯€
π²πΎπΌπΏππ° πΏπΎπ²πΈπΎπ½ πΎ πΏπΈπ³π΄π»π΄ π° π°π»πΆππΈπ΄π½ πππ΄ ππ΄ πππ°π½ππ΅πΈπ΄ππ°`.trim(), imgr + 'POCION BAJA', [
[`π²πΎπΌπΏππ°π πΏπΎπ²πΈπΎπ½ π₯€`, `${usedPrefix}buy potion ${count - user.potion}`],
[`πΏπ΄π³πΈπ π°πππ³π° π£`, `${usedPrefix}pedirayuda *Por Favor alguien ayudeme con ${count - user.potion} de POCION* π₯€ 
*Β» AYUDA TRANSFIRIENDO:*
*${usedPrefix}transfer potion ${count - user.potion}* @${conn.getName(m.sender)}`]], m)
user.potion -= count * 1 //1 potion = count (1) 
user.health += heal * count 
conn.sendButton(m.chat, `*βββγ β ππ°π»ππ³ π²πΎπΌπΏπ»π΄ππ° γβββ*`, `π΄ππΈππΎππ°πΌπ΄π½ππ΄ πππΎ ${count} π³π΄ πΏπΎπ²πΈπΎπ½ π₯€ πΏπ°ππ° ππ΄π²ππΏπ΄ππ°π ππ ππ°π»ππ³\n\πππ°π»ππ³ Β» ${user.health} β€οΈ`, imgr + 'SALUD COMPLETADA', [
[`π°ππ΄π½ππππ°π ποΈ`, `${usedPrefix}adventure`]], m)}
handler.help = ['heal']
handler.tags = ['rpg']
handler.command = /^(heal|curar)$/i
export default handler
function isNumber(number) {
if (!number) return number
number = parseInt(number)
return typeof number == 'number' && !isNaN(number)}

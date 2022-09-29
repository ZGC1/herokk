
const fs = require('fs')
const chalk = require('chalk')

global.wlcm = []
global.ntnsfw = []
global.ntnsfww = []
//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
//=================================================//
//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh dip aja bisacredits :), note tanda ' gausah di hapus!
global.youtube = 'https://youtube.com/c/creditnya HWMODS'
global.ig = 'https://www.instagram.com/Credit HWMODS'
global.mygc = 'wa.me/6285858850541'
global.myweb = 'breachforums.com'
global.linkgrupss = "https://chat.whatsapp.com/credit HWMODS"
global.linkpro ='mailto:support@whatsapp.com?subj'
global.email = 'gameguardian.net'
global.region = 'indonesia'
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'KL-HH' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = 'KL-HH' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = 'KL-HH' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
// Other
global.owner = ['6285858850541']
global.premium = ['6285858850541']
global.packname = 'KL-HH'
global.ownerr = ['KL-HH']
global.author = 'KL-HH'
global.sessionName = './haykallop'
global.prefa = ['$','_','-','!',':','/','.','#','〽️']
global.sp = '⭔'
global.mess = {
    nsfw: '*😂Fitur NSFW tidak diaktifkan, chat admin grup supaya diaktifkan📜*_',
    wait: '*Loading... ℹ️Sabar Wibu⚙️*_',
    private: '📜Fitur Digunakan Hanya Untuk Private Chat!📜',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    endLimit: 'Limit Harian Anda Telah Habis,⚠️ Limit Akan Direset Setiap Jam 12😂',
}
//=================================================//
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vnd.android.package-archive'
//=================================================//
global.limitawal = {
    premium: "Infinity",
    free: 100
}
   global.rpg = {
   darahawal: 100,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}
//=================================================//
global.thumb = fs.readFileSync("./baseikal/image/hw.jpg")
global.visoka = fs.readFileSync("./baseikal/video/hikal.gif")
global.log0 = fs.readFileSync("./baseikal/image/haikal.jpg")
global.menuimg = 'https://k.top4top.io/p_2388xws321.jpg'
global.ggikal = fs.readFileSync("./baseikal/video/haikal.mp4")
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.token)
var utenteAut = message.author

var parolacce = ["coglion", "stronz", "succhiamelo", "dio can", "porco dio", "porca madonn"]
    var parolacciaTrovata = false
    var messaggioCensurato = message.content
    var paroleMessaggio = message.content.split(/\s+/)
        for (var i = 0; i < paroleMessaggio.length; i++) {
        for (var j = 0; j < parolacce.length; j++) {
    if(parolacce.some(word => message.content.toLowerCase().includes(word))) {
        if(message.member.roles.cache.has("843919428332159057")) return
    var lunghezzaCensored = ""
        for (var z = 2; z < parolacce[j].length; z++) {
        lunghezzaCensored += "#"
    }
    parolacciaTrovata = true
    messaggioCensurato = messaggioCensurato.replace(new RegExp(parolacce[j], 'g'), parolacce[j][0] + lunghezzaCensored + parolacce[j][parolacce[j].length - 1])
            }
        }
    }
    if(parolacciaTrovata) {
    message.delete({ timeout: 5000})
    let Moderazione = new Discord.MessageEmbed()
    .setColor("#5E8834")
    .setTitle("MODERA IL LINGUAGGIO")
    .setDescription(utenteAut.toString() + " NON PUOI SCRIVERLO!")
    .addField("Messaggio:", messaggioCensurato)
    message.channel.send(Moderazione).then(msg => {
    msg.delete({ timeout: 5000 })
    let ModerazioneLog = new Discord.MessageEmbed()
    .setAuthor("[AUTOMOD] " + utenteAut.tag, utenteAut.avatarURL())
    .setDescription(utenteAut.toString() + " ha scritto " + messaggioCensurato)
    .addField("Canale Testuale:", message.channel.toString())
    .addField("Ore: ", ora + ":" + minuto)
    .setFooter("ID Utente: " + utenteAut.id)
    client.channels.cache.get(canaleLog).send(ModerazioneLog)
    let ModerazioneAutore = new Discord.MessageEmbed()
    .setTitle (utenteAut.tag + "!!")
    .setDescription (":face_with_symbols_over_mouth: NON PUOI SCRIVERLO! :face_with_symbols_over_mouth:")
    .addField ("FERMATI O ALLA PROSSIMA VERRAI MUTATO!")
    message.author.send(ModerazioneAutore)
    })
}
client.user.setActivity ('La Tana Di Roxy', { type:"playing" }).catch(console.error)
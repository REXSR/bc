const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Great.`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});




client.on('message', message => {

  if (true) {

if (message.content === '+invite') {

      message.author.send(' رابط البوت |  https://discordapp.com/api/oauth2/authorize?client_id=490091768860377088&permissions=2146958583&scope=bot p').catch(e => console.log(e.stack));

    }

   } 

  });
  
  
  
  
  
  client.on('message', message => {

  if (true) {

if (message.content === '+support') {

      message.author.send(' https://discord.gg/D6FHAtU|  رابط السيرفر ').catch(e => console.log(e.stack));

    }

   } 

  });
  
  client.on('message', message => {

    if (message.author.id === client.user.id) return;

    if (message.guild) {

   let embed = new Discord.RichEmbed()

    let args = message.content.split(' ').slice(1).join(' ');

if(message.content.split(' ')[0] == prefix + 'bc') {

    if (!args[1]) {

message.channel.send("**bc <message>**");

return;

}

        message.guild.members.forEach(m => {

   if(!message.member.hasPermission('ADMINISTRATOR')) return;

            var bc = new Discord.RichEmbed()
            .addField('Broadcast')
            .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
            .addField('» السيرفر :', `${message.guild.name}`)
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
        
        
        
        
        
        
   client.login(process.env.BOT_TOKEN);

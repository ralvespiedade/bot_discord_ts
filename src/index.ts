import { ExtendedClient } from "./structs/ExtendedClient"
export * from "colors";

const client = new ExtendedClient();

client.start();

export { client }

client.on("ready", ()=> {
  console.log('Bot online!'.green)
})

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  const mensagem = message.content

  if (mensagem == 'bot') {
    message.reply({
      content: 'Sim, `por enquanto` eu sou o único robô por aqui'
    })
  };
  const user = message.author.username
  console.log(`O usuário: ${user.bgGreen} enviou a mensagem: ${mensagem.bgCyan}`)
  
  message.reply({
    content: `Olá, ${message.author.username}`
  })
})
/* 
client.on("guildMemberAdd", (event) => {
  console.log('Dentro do evento de Adição de Usuário.')
  console.log(event)
}) */
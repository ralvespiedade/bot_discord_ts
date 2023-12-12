import { ExtendedClient } from "./structs/ExtendedClient"

import config from "./structs/config.json"
export * from "colors";

const client = new ExtendedClient();

client.start();

export { client, config }


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

client.on("guildMemberAdd", (event) => {
  const nomeGlobal = event.user.globalName
  console.log(`${nomeGlobal} foi adicionado(a) ao servidor!`)
  
  //manda uma mesagem direta para o novo usuário.
  event.send({
    content: `'${nomeGlobal}' seja bem vindo(a)`
  })
})


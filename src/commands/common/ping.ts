import { ActionRowBuilder, ApplicationCommandOptionType, ApplicationCommandType, ButtonBuilder, ButtonStyle, Collection } from "discord.js";
import { Command } from "../../structs/types/Commands";

export default new Command({
  name: "gerenciar",
  description: "reply with pong",
  type: ApplicationCommandType.ChatInput,
  options: [{
    name: "cpf",
    description: "Digite seu CPF: ",
    type: ApplicationCommandOptionType.String,
    required: true
  }],
  async run({interaction, options}) {
    /* const row = new ActionRowBuilder<ButtonBuilder>({components: [
      new ButtonBuilder({custom_id: "test-button", label: "Clique aqui", style: ButtonStyle.Success})
    ]}) */
    
    //true para garantir que vai retornar uma string, se for uma oção obrigatória
    const texto = options.getString("texto", true)


    await interaction.reply({content: `Seu CPF é: ${texto}`})
  },
  buttons: new Collection([
    ["test-button", async (interaction) => {

      interaction.update({components: []})

    }]
  ])
})
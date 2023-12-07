import { CommandInteractionOptionResolver } from "discord.js";
import { client } from "../..";
import { Events } from "../../structs/types/Events";

export default new Events({
  name: "interactionCreate",
  run(interaction) {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    const options = interaction.options as CommandInteractionOptionResolver  

    command.run({ client, interaction, options })
  }
})
import { ButtonInteraction, CommandInteraction, Collection, CommandInteractionOptionResolver, StringSelectMenuInteraction, ModalSubmitInteraction, ComponentBuilder, ApplicationCommandData } from "discord.js";
import { ExtendedClient } from "../ExtendedClient";

interface CommandProps {
  client: ExtendedClient, 
  interaction: CommandInteraction, 
  options: CommandInteractionOptionResolver
}

//criando os comoponentes de comandos que ficarão dentro dos nossos comandos
//para usarmos a todo momento
export type ComponentsButton = Collection<string, (interaction: ButtonInteraction) => any>
export type ComponentsSelect = Collection<string, (interaction: StringSelectMenuInteraction) => any>
export type ComponentsModal = Collection<string, (interaction: ModalSubmitInteraction) => any>

interface CommandComponents {
  buttons?: ComponentsButton;
  selects?: ComponentsSelect;
  modals?: ComponentsModal;
}

//Recebe as propriedades de comandos do js
export type CommandType = ApplicationCommandData & CommandComponents & {
  run(props: CommandProps): any
}

export class Command {
  constructor(options: CommandType) {
    //Nenhum comando feito aqui poderá ser usado na dm do bot
    options.dmPermission = false;
    Object.assign(this, options)

  }
}
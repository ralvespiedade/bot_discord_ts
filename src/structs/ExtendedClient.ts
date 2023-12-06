import { Client, Partials, IntentsBitField, BitFieldResolvable, GatewayIntentsString } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

//é o client com algumas propriedades a mais
export class ExtendedClient extends Client {
  constructor() {
    super({
      //malícia para adicionar todos os intents
      intents: Object.keys(IntentsBitField.Flags) as BitFieldResolvable<GatewayIntentsString, number>,
      
      //todos os partials também
      partials: [
        Partials.Channel, Partials.GuildMember, Partials.GuildScheduledEvent,
        Partials.Message, Partials.Reaction, Partials.ThreadMember, Partials.User
      ]
    })
  }
  public start() {
    this.login(process.env.BOT_TOKEN);
  }
}
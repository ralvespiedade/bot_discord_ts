import { Client, Partials, IntentsBitField, BitFieldResolvable, GatewayIntentsString } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

export class ExtendedClient extends Client {
  constructor() {
    super({
      //malicia para adicionar todos os intents
      intents: [
        "GuildMembers",
        "GuildMessages"
      ],
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
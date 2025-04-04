// messages.js
// import MessageType from "../enums/MessageTypes";
// import EntityType from "../enums/EntityTypes";
// import {
//   bot1Name,
//   bot2Name,
//   bot3Name,
//   bot4Name,
//   bot5Name,
// } from "../constants/botNames";
import { message1BotGroups_SIA } from "./SIA";
import { message1BotGroups_SIS } from "./SIS";
import { message1BotGroups_SOA } from "./SOA";
import { message1BotGroups_SOS } from "./SOS";
import { message5BotGroups_MIA } from "./MIA";
import { message5BotGroups_MIS } from "./MIS";
import { message5BotGroups_MOA } from "./MOA";
import { message5BotGroups_MOS } from "./MOS";

export const messageGroupsAllBots = [
  message5BotGroups_MIA,
  message5BotGroups_MIS,
  message5BotGroups_MOA,
  message5BotGroups_MOS,
  message1BotGroups_SIA,
  message1BotGroups_SIS,
  message1BotGroups_SOA,
  message1BotGroups_SOS,
];

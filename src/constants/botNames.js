export const totalBots = 5;
export const botNames = Array.from(
  { length: totalBots },
  (_, i) => `Bot${i + 1}`
);
export const botDisplayNames = ["Alex", "Jordan", "Taylor", "Morgan", "Casey"];
export const botDisplayNamesMap = Object.fromEntries(
  botNames.map((key, i) => [key, botDisplayNames[i]])
);

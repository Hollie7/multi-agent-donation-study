import { botDisplayNamesMap } from "../constants/botNames";

/**
 * Get display name for a given botKey like "Bot1"
 * Fallback to botKey if not found
 */
export function getDisplayName(botKey) {
  return botDisplayNamesMap[botKey] || botKey;
}

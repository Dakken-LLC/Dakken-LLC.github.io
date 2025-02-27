/**
 * challenge checks if the message is not sent by a bot
 * @param text Input text
 * @returns true if the message may be sent by a human, false otherwise
 */
export function challenge(message: string): boolean {
  // Note that messages from the bot often consist of non-Japanese characters.
  if (message.match(/[\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]/)) {
    return true;
  }
  return false;
}

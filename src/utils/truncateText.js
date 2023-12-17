/**
 * Truncates a given text to a specified maximum number of words.
 *
 * @param {string} text - The input text to be truncated.
 * @param {number} maxWords - The maximum number of words to retain in the truncated text.
 * @returns {string} - The truncated text, followed by an ellipsis (`...`) if it was truncated.
 */
function truncateText(text, maxWords) {
  const words = text.split(" ");

  if (words.length > maxWords) {
    const truncatedText = words.slice(0, maxWords).join(" ");
    return `${truncatedText} ...`;
  }

  return text;
}

export default truncateText;

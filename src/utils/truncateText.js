function truncateText(text, maxWords) {
  const words = text.split(" ");

  if (words.length > maxWords) {
    const truncatedText = words.slice(0, maxWords).join(" ");
    return `${truncatedText} ...`;
  }

  return text;
}

export default truncateText;

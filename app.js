function countEmojis(inputString) {
    const emojiRegex = /[\p{Emoji}]/gu;
    const emojiCounts = {};
    const emojis = inputString.match(emojiRegex);

    if (!emojis) {
        return emojiCounts;
    }
    emojis.forEach(emoji => {
        emojiCounts[emoji] = (emojiCounts[emoji] || 0) + 1
    })
    return emojiCounts
}

// Test Function:
const str = "Hello, I ❤️ JavaScript! 🚀🚀🚀 😊🙂 😊🙂 ";
console.log(countEmojis(str));

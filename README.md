# Regular Expression - Emoji Counter 
You have a string containing a mix of regular text and emojis. Write a JavaScript function that takes in the string and returns an object that contains the count of each emoji in the string.

## Example

Given the following string:
```
"Hello, I ❤️ JavaScript! 🚀🚀🚀"
```

your function should return an object that looks like this:
```
{
  "❤️": 1,
  "🚀": 3
}
```
## Tips:

- Use regular expressions to match each emoji in the string.
- Emojis are represented as Unicode characters, so you'll need to use the appropriate Unicode range in your regular expression. You can find a list of common emoji Unicode ranges here: https://www.regular-expressions.info/unicode.html#block
- Your function should be case-sensitive, so "😀" and "😃" should be counted as separate emojis.
- Your function should return an empty object if there are no emojis in the string.
- If you're not sure how to get started with regular expressions in JavaScript, here's a helpful resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
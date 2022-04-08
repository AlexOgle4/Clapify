//Declare "clappify" as the function. "message" is the parameter of that function
function clapify(message, emojis) {
  // trim message assigned to trimmed message
  // eliminating the spaces in the front and back of the "message"
  // "wordsArray" variable has been assigned to "trimmedMessage"
  //   with "split" seperating every word in the array to a string because of the space in between
  const trimmedMessage = message.trim()
  const wordsArray = trimmedMessage.split(' ')
  // using console log to see what is being input by "wordsArray"
  console.log('input', wordsArray)

  // "filteredWordsArray" variable is assigned to "wordsArray" with "filter"
  //   letting us see the input and output
  const filteredWordsArray = wordsArray.filter((word) => {
    console.log('filter', word)
    // take out extra spaces
    if (!word.length) {
      //filter these out
      return false
    } else {
      // Leave it alone
      return true
    }
  })
  const wordsAndEmojis = []
  for (let i = 0; i < filteredWordsArray.length; i++) {
    const word = filteredWordsArray[i]
    wordsAndEmojis.push(word)
    const emoji = emojis[i % emojis.length]
    wordsAndEmojis.push(emoji)
    console.log(i, word)
    console.log(wordsAndEmojis)
  }
  wordsAndEmojis.pop()

  console.log('output', wordsAndEmojis)
  // put clap in the space
  const clappedMessage = wordsAndEmojis.join('')
  //   const clappedMessage = message.replace(' ', '👏')
  //
  return clappedMessage
}
module.exports = clapify

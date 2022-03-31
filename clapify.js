//Declare "clappify" as the function. "message" is the parameter of that function
function clapify(message) {
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
  console.log('output', filteredWordsArray)
  // put clap in the space
  const clappedMessage = filteredWordsArray.join('👏')
  //   const clappedMessage = message.replace(' ', '👏')
  //
  return clappedMessage
}

const clappedMessage = clapify('  Yass King   Bad Boi ')

console.log(clappedMessage)
module.exports = clapify

const args = process.argv.slice(2)
const word = args[0]?.toLowerCase()

if (!word) {
  console.log("Please enter a word to translate.")
  process.exit(1)
}

const vowels = ['a', 'e', 'i', 'o', 'u']

function toPigLatin(word) {
  if (vowels.includes(word[0])) {
    return word + 'way'
  } else {
    const firstVowelIndex = [...word].findIndex(letter => vowels.includes(letter))
    if (firstVowelIndex === -1) {
      // aucun voyelle trouvée
      return word + 'ay'
    }
    return word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex) + 'ay'
  }
}

const translated = toPigLatin(word)
console.log(`Original name : ${word}`)
console.log(`Pig Latin     : ${translated}`)

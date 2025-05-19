const args = process.argv.slice(2)
const message = args[0]?.toLowerCase()
const shift = parseInt(args[1])

if (!message || isNaN(shift)) {
  console.log("Usage : node caesar_cipher.js <message> <shifting>")
  process.exit(1)
}

function caesarCipher(text, shift) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let result = ''

  for (let char of text) {
    if (alphabet.includes(char)) {
      const index = alphabet.indexOf(char)
      const newIndex = (index + shift + 26) % 26  // pour gérer les décalages négatifs
      result += alphabet[newIndex]
    } else {
      result += char  // garder les espaces, ponctuations, etc.
    }
  }

  return result
}

const encrypted = caesarCipher(message, shift)
console.log(`Original message : ${message}`)
console.log(`Cripted message  : ${encrypted}`)

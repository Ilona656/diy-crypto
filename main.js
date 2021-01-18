// Refaktorisera = täda, omorganisera kod UTAN att ända funktinalitet
function caesarEncrypt(msg) {

      // 1.översätt varje tecken till ett nummer
      const charCodes = []
      for (let index = 0; index < charCodes.length; index++) {
          charCodes.push(msh[index].charCodeAt(0))
          
      }

      console.log(charCodes)

      //2.shifta det nummret
      for (let index = 0; index < charCodes.length; index++) {
          charCodes[index] = charCodes[index] + 1
          
      }

      console.log(charCodes)

      //3.översätta tillbaka från charCode till string
      let result = ""
      for (let index = 0; index < charCodes.length; index++) {
          result = result + String.fromCharCode(charCodes[index])
          
      }

      return result

}

const secretMessage = "RETREATTOMORROW"
const encryptedMessage = caesarEncrypt(secretMessage)

console.log(secretMessage, encryptedMessage)
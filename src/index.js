const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let string = "";
  for (let i = 0; i < expr.length; i += 10) {
    const sliceString = expr.slice(i, i + 10);
    if (sliceString === "**********") {
      string += " ";
    } else {
      let morse = "";
      for (let index = 0; index < 10; index += 2) {
        const decodeString = sliceString.slice(index, index + 2);
        if (decodeString === "10") {
          morse += ".";
        } else if (decodeString === "11") {
          morse += "-";
        }
      }
      string += MORSE_TABLE[morse];
    }
  }
  return string;
}

module.exports = {
  decode,
};

export const removeAllWhiteSpace = (str) => {
    return str.replace(/\s*,\s*/g, '')
  },
  removeAllASCII = (str) => {
    return str.replace(/(?:\\[rn]|[\r\n]+)+/g, '')
  }

export const objGetKey = (obj) => {
    return Object.keys(obj)
  },
  objQetValue = (obj) => {
    return objGetKey(obj).map(key => obj[key])
  },
  objQetValueWrapSingleQuote = (obj) => {
    return objGetKey(obj).map(key => (`'${obj[key]}'`))
  }

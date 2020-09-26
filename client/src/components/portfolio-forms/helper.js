export const calculateTotal = (numbers) => {
  return Object.entries(numbers).reduce((finalValue, [key, value]) => {
    if (value === '') {
      // if entered value is empty string "", omits it
      return finalValue
    }
    return finalValue + value
  }, 0)
}

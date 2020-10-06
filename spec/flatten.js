const converted = (arr) => {
  const modified = {
    flattened: [],
    high: arr[0],
    low: arr[0]
  }

  const finalConversion = (arr) => {
    arr.forEach(item => {
      if (Array.isArray(item)) {
        finalConversion(item)
      } else {
        modified.flattened.push(item)
        if (Number.isFinite(item)) {
          if (modified.high < item || !Number.isFinite(modified.high)) {
            modified.high = item
          }
          if (modified.low > item || !Number.isFinite(modified.low)) {
            modified.low = item
          }
        }
      }
    })
  }
  finalConversion(arr)

  return modified
}

// console.log(converted([1, 2, [3, 4], 10, 5]))
module.exports = converted

/**
 * @typedef {number[]} InputData
 */

/**
 * @typedef {Object} processData
 * @property {number} max - Nilai terbesar
 * @property {number} min - Nilai terkecil
 * @property {number} average - Nilai rata-rata
 */


/**
 *
 * @param {InputData} input an object array 
 * @returns {processData} an calculation from min , max and average
 * @throws {Error} if the parameter value is not an array
 * @throws {Error} if array empty
 */
function main(input) {
  if (!Array.isArray(input)) {
    throw new Error("parameters must be array")
    }
  if (input.length === 0) {
    throw new Error("Array tidak boleh kosong")
    }
    let max = input[0]
    let min = input[0]
    let total = 0
 for (let i = 0; i < input.length; i++) {
  if (input[i] > max) {
    max = input[i]
}
  if (input[i] < min) {
    min = input[i]
}
  total += input[i]
}
 return {
    max,
    min,
    average: total / input.length
}
}

module.exports = {
    main
}
function sortedFrequency(array, num) {

    const count = 0;
    const sum = array.reduce((accumulator, currentValue) => currentValue == num ? accumulator + 1 : accumulator + 0, count)

    return sum == 0 ? -1 : sum
}

module.exports = sortedFrequency
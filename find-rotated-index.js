function findRotatedIndex(array, num) {

    const index = array.findIndex((n) => n == num)

    return index ? index : -1
}

module.exports = findRotatedIndex
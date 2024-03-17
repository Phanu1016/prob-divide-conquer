function findRotationCount(array, first = 0, last = array.length - 1) {

    if (last < first) return 0

    if (last == first) return first

    let middle = Math.floor((first + last) / 2)

    if (middle < last && array[middle + 1] < array[middle]) return middle + 1

    if (middle > first && array[middle] < array[middle - 1]) return middle

    if (array[last] > array[middle]) return findRotationCount(array, first, middle - 1)

    return findRotationCount(array, middle + 1, last)
}

module.exports = findRotationCount
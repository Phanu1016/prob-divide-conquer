function findFloor(array, num, first = 0, last = array.length - 1) {
    if (first > last) return -1

    if (num >= array[last]) return array[last]

    let middle = Math.floor((first + last) / 2)

    if (array[middle] === num) return array[middle]

    if (middle > 0 && array[middle - 1] <= num && num < array[middle]) return array[middle - 1]

    if (num < array[middle]) return findFloor(array, num, first, middle - 1)

    return findFloor(array, num, middle + 1, last)
}

module.exports = findFloor
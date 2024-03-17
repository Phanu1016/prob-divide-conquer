function findZero(array, first = 0, last = array.length - 1){
    if (last >= first) {

        let middle = first + Math.floor((last - first) / 2)

        if ((middle == 0 || array[middle - 1] == 1) && array[middle] == 0) return middle

        else if (array[middle] == 1) return findZero(array, middle + 1, last)

        return findZero(array, first, middle - 1)

    }

    return -1;
}

function countZeroes(array) {
    let zeroes = findZero(array)
    return zeroes === -1 ? 0 : array.length - zeroes
}

module.exports = countZeroes
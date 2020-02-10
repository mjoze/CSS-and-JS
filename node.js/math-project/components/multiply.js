const multiplyNumber = (...numbers) => {
    return numbers.reduce((sum, value) => sum * value)
}

// module.exports.multiply = multiplyNumber;
// module.exports.description = 'mathematical operation'
module.exports = {
    multiply: multiplyNumber,
    description: 'mathematical operation'
}
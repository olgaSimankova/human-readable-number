module.exports = function toReadable(number) {
    const a = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    if (number === 0) return 'zero'
    let result = '', tempNum = number

    if (tempNum >= 100) {
        result += a[parseInt(number.toString()[0], 10)] + ' hundred'
        tempNum %= 100;
    }

    //it's a single word
    if (tempNum < 20) {
        result += ' ' + a[tempNum]

        //it's possibly two words
    } else {
        result += ' ' + b[parseInt(tempNum.toString()[0], 10)]
        tempNum %= 10
        if (tempNum) {
            result += ' ' + a[tempNum]
        }
    }
    return result.trim()
}

function encodec(input) {
    let temp = {}
    let count = 1
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== input[i + 1]) {
            temp[input[i]] = count
            count = 1
        } else {
            count++
        }
    }

    let res = ''
    for (const t in temp) {
        res += `${temp[t]}${t}`
    }

    console.log('res', res)
    return res
}

encodec("aabbbccccc")
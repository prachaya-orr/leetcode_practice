function encodec(input) {
    let temp = {}
    let count = 1
    for (let i = 0; i < input.length; i++) {
        if (input[i] == input[i + 1]) {
            count++
        } else if (input[i] !== input[i + 1]) {
            temp[input[i]] = count
            count = 1
        }
    }

    let res = ''
    for (const t in temp) {
        res += `${temp[t]}${t}`
    }

    console.log(res)
    return res
}

encodec("aabbbccccc")

function decode(input) {
    let temp = {}
    for (i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            temp[input[i + 1]] = input[i]
        }
    }
    let res = ''
    for (t in temp) {
        for (i = 0; i < temp[t]; i++) {
            res += t
        }
    }
    console.log(res);
    return res
}

decode('2a3b5c')
/* 
BEGIN
INPUT 
INIT temp to { }
INIT count to 1
FOR each alphabet of input
    IF current alphabet equal next alphabet THEN
        SET movecount
    ELSE current alphabet not equal next alphabet THEN
        SET current alphabet to key AND
        SET count to value AND
        SET key:value to temp
        SET count to 1
    ENDIF
ENDFOR
INIT output to ""
FOR each key-value of temp
        SET output += value + key
ENDFOR
RETURN output
END
*/

function encode(input) {
    let temp = {}
    let count = 1
    for (let i = 0; i < input.length; i++) {
        if (input[i] == input[i + 1]) {
            count++
        } else if (input[i] != input[i + 1]) {
            temp[input[i]] = count
            count = 1
        }
    }
    let output = ""
    for (k in temp) {
        output += temp[k] + k
    }
    console.log(output);
    return output
}

encode("aabbbcccaffddd")


/* 
BEGIN
INIT result to ""
INIT count to 1
// No need to start from Index[0]
FOR each alphabet of input start from Index[1] to lastIndex
    IF current alphabet eqaul previous alphabet
        INCREMENT count + 1
    ELSE current alphabet not equal previous alphabet
        SET result = previous_result + count +previous alphabet AND
        SET count = 1
    ENDIF
ENDFOR
RETURN result
END
 */


function encodec(input) {
    let result = ''
    let count = 1
    for (let i = 1; i <= input.length; i++) {
        if (input[i] == input[i - 1]) {
            count++
        } else if (input[i] != input[i - 1]) {
            result += count + input[i - 1]
            count = 1
        }
    }
    console.log(result);
    return result
}
encodec("aabbbcccaffddd")


/* 
BEGIN
INPUT "2a3b5c"
INIT tempt to {}
FOR each alphabet of input
    IF index of current alphabet is even (modulus with 2 equal 0 )THEN
        SET current alphabet to value AND
        SET next alphabet to key 
    ENDIF
ENDFOR

INIT output to ""
FOR each key-value pair of temp
    FOR i=0 to quantity of value of key-value
        SET output += key
    ENDFOR
ENDFOR
RETURN output
END
*/

// Fail when decode "1a2b3c2a" ;input character duplicate
function decode(input) {
    let temp = {}
    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            temp[input[i + 1]] = +input[i]
        }
    }
    console.log(temp);
    let output = ""
    for (const key in temp) {
        for (i = 0; i < temp[key]; i++) {
            output += key
        }
    }
    console.log(output);
    return output
}

// decode("2a3b5c")

/* 
Begin
INPUT "2a3b5c1a"
INIT result to ""
INIT count 
FOR each alphabet of input 
    IF current alphabet not is Not a Number (Mean is Number) THEN
        SET count to current value with type number
    ELSE current alphabet is NaN THEN
        FOR each count 
            SET resutl += current alphabet
        ENDFOR
        SET count to zero
    ENDIF
ENDFOR
RETURN result
END
 */

// function decodec(input) {
//     let result = '';
//     let count;

//     for (let i = 0; i < input.length; i++) {
//         if (!isNaN(input[i])) {
//             count = +input[i];
//         } else {
//             for (j = 0; j < count; j++) {
//                 result += input[i]
//             }
//             count = 0
//         }
//     }

//     console.log(result);
//     return result;
// }


// decodec("2a3b5c1a")


/* 
Begin
INPUT "2a3b5c1a"
INIT result to ""
INIT count 
FOR each alphabet of input 
    IF current alphabet Index is even THEN
        SET count to current value with type number
    ELSE current alphabet Index is odd THEN
        FOR each count 
            SET resutl += current alphabet
        ENDFOR
        SET count to zero
    ENDIF
ENDFOR
RETURN result
END
 */

function decodeMod2(input) {
    let res = ""
    let count = 0

    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            count = +input[i]
        } else if (i % 2 != 0) {
            for (let j = 0; j < count; j++) {
                res += input[i]
            }
        }
    }
    console.log(res);
    return res
}

decodeMod2("2a3b5c")
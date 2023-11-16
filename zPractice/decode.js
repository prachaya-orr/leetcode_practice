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
    FOR quantity of value of key-value
        SET output += key
    ENDFOR
ENDFOR
RETURN output
END
*/
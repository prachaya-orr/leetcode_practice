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
    ENDIF
ENDFOR
INIT output to ""
FOR each key-value of temp
        SET output += value + key
ENDFOR
RETURN output
END
*/
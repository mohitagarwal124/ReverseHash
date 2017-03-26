# ReverseHash
 To find a string of characters that contains only letters from 'acdegilmnoprstuw'.
 
 Considering the hash is defined by following pseudo code:- 
 
 Int64 hash (String s) {
    Int64 h = 7
    String letters = "acdegilmnoprstuw"
    for(Int32 i = 0; i < s.length; i++) {
        h = (h * 37 + letters.indexOf(s[i]))
    }
    return h
}

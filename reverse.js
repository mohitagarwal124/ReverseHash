var check = {};
check.letters = 'acdegilmnoprstuw';
check.hash_initialized = 7;

function reversehash(hash) {
    var output = '';
    var i;
    while (hash > 0) {
        i = hash % 37;
        output = output + check.letters[i];
        hash = parseInt((hash - i) / 37);
        if (hash == check.hash_initialized) {
            output = output.split('');
            output = output.reverse();
            output = output.join('');
            console.log('The string after reversing hash is: ' + output);
            break;
        } else if (hash < check.hash_initialized) {
            console.log('invalid hash');
            break;
        }
    }
}

console.log('Hash Provided is 680131659347 and the output should be leepadg');
reversehash(680131659347);
function checkBrackets(brackets) {
    var left = [];
    var isOk = true;
    for (var i = 0; i < brackets.length; i++) {
        var current = brackets[i];
        if (/[(\[{]/.test(current)) {
            left.push(current);
        }
        else if (/[}\])]/.test(current) && !isMatch(left.pop(), current)) {
            isOk = false;
            break;
        }
    }
    console.log(left);
    return isOk;
}
function isMatch(left, right) {
    return ((left === "(" && right === ")") ||
        (left === "[" && right === "]") ||
        (left === "{" && right === "}"));
}
console.log(checkBrackets("(11)"));
console.log(checkBrackets("(11"));
console.log(checkBrackets("(([11]))"));
console.log(checkBrackets("(([11])]"));
console.log(checkBrackets("({[11]})"));

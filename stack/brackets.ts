function checkBrackets(brackets: string): Boolean {
  let left: string[] = [];
  let isOk = true;
  for (let i = 0; i < brackets.length; i++) {
    const current = brackets[i];
    if (/[(\[{]/.test(current)) {
      left.push(current);
    } else if (/[}\])]/.test(current) && !isMatch(left.pop()!, current)) {
      isOk = false;
      break;
    }
  }
  console.log(left);
  return isOk;
}

function isMatch(left: string, right: string): Boolean {
  return (
    (left === "(" && right === ")") ||
    (left === "[" && right === "]") ||
    (left === "{" && right === "}")
  );
}
console.log(checkBrackets("(11)"));
console.log(checkBrackets("(11"));
console.log(checkBrackets("(([11]))"));
console.log(checkBrackets("(([11])]"));
console.log(checkBrackets("({[11]})"));

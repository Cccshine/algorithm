const priority = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2,
};

function calc(str: string): number | null {
  let opts: string[] = [];
  let nums: string[] = [];
  let numS = "";
  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    if (/\d/.test(current)) {
      numS += current;
      if (!/\d/.test(str[i + 1])) {
        nums.push(numS);
        numS = "";
      }
    } else if (/[\+\-\*\/]/.test(current)) {
      // 运算符优先级比栈顶元素低或相同
      if (opts.length && comparePriority(opts[opts.length - 1], current)) {
        operator(nums, opts);
        i--;
      } else {
        opts.push(current);
      }
    } else if (/\(/.test(current)) {
      opts.push(current);
    } else if (/\)/.test(current)) {
      operator(nums, opts, true);
    }
  }
  while (nums.length > 1) {
    operator(nums, opts);
  }
  return Number(nums[0]);
}

// a>=b
function comparePriority(a: string, b: string): Boolean {
  return priority[a] - priority[b] >= 0;
}

function operator(nums, opts, isLeftBracket?) {
  let num1 = nums.pop();
  let num2 = nums.pop();
  let opt = opts.pop();
  let rt = eval(`${num2}${opt}${num1}`);
  isLeftBracket && opts.pop();
  nums.push(rt);
}

console.log(calc("1+2*(3+5-2)*100+(3+3)"));
// console.log(calc("1+2*(3+5)*100/2-2*6"));

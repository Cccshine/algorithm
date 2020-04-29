let h1: string[] = []; //存储可后退的
let h2: string[] = []; //存储可前进的
function go(page: string) {
  h1.push(page);
  console.log(`浏览${page}`);
  if (h2.length) {
    h2 = [];
  }
}
function forward() {
  if (!h2.length) {
    console.log("不能前进了哦~");
    return;
  }
  let page = h2.pop();
  h1.push(page!);
  console.log(`前进到${page}`);
}
function back() {
  if (h1.length <= 1) {
    console.log("不能后退了哦~");
    return;
  }
  let page = h1.pop();
  h2.push(page!);
  console.log(`回到${h1[h1.length - 1]}`);
}
go("page1");
go("page2");
go("page3");
go("page4");
back();
back();
forward();
go("page4");
forward();
back();
back();
console.log(h1);
console.log(h2);

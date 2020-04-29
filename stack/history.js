var h1 = [];
var h2 = [];
function go(page) {
    h1.push(page);
    console.log("\u6D4F\u89C8" + page);
    if (h2.length) {
        h2 = [];
    }
}
function forward() {
    if (!h2.length) {
        console.log("不能前进了哦~");
        return;
    }
    var page = h2.pop();
    h1.push(page);
    console.log("\u524D\u8FDB\u5230" + page);
}
function back() {
    if (h1.length <= 1) {
        console.log("不能后退了哦~");
        return;
    }
    var page = h1.pop();
    h2.push(page);
    console.log("\u56DE\u5230" + h1[h1.length - 1]);
}
go("page1");
go("page2");
go("page3");
go("page4");
back();
back();
// forward();
go("page4");
forward();
back();
// back();
console.log(h1);
console.log(h2);

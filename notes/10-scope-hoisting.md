# Nhóm 10: Scope & Hoisting

🔗 Các bài liên quan: JS Scope, Code Blocks, Hoisting, var/let/const, Strict Mode

## Tóm tắt
> Scope quyết định biến "nhìn thấy được" ở đâu trong code; hoisting là cơ chế JS "kéo" khai báo lên đầu phạm vi trước khi chạy.

## Ý chính
- Global scope: biến khai báo ngoài mọi hàm/khối, truy cập được ở khắp nơi.
- Function scope: biến `var` chỉ giới hạn trong hàm chứa nó (không theo khối `{}`).
- Block scope: biến `let`/`const` giới hạn trong khối `{}` gần nhất (if, for, while...).
- Hoisting: khai báo `var` và `function` được "kéo" lên đầu scope (nhưng `var` chỉ hoisted phần khai báo, giá trị vẫn `undefined` cho tới khi gán); `let`/`const` cũng hoisted nhưng nằm trong "temporal dead zone" — truy cập trước khi khai báo sẽ lỗi.
- `"use strict"`: bật chế độ nghiêm ngặt, bắt lỗi sớm hơn (VD cấm gán biến chưa khai báo).

## Ví dụ
```js
console.log(x); // undefined (hoisting, chưa lỗi)
var x = 5;

console.log(y); // ❌ lỗi: Cannot access 'y' before initialization
let y = 5;

function test() {
  if (true) {
    var a = 1; // function scope — vẫn truy cập được ngoài if
    let b = 2; // block scope — chỉ trong if
  }
  console.log(a); // 1
  // console.log(b); // ❌ lỗi
}
```

## Hay nhầm / lỗi thường gặp
- Tưởng `var` cũng theo block scope như `let` — thực ra `var` chỉ theo function scope, dễ gây lỗi rò rỉ biến ra ngoài khối `if`/`for`.

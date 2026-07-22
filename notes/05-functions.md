# Nhóm 05: Functions (Khai báo, tham số, return, arrow function)

🔗 Các bài liên quan: Function Intro, Invocation, Parameters, Return, Arguments, Function Expressions, Arrow Function

## Tóm tắt
> Hàm là khối code tái sử dụng được, nhận tham số đầu vào và có thể trả về giá trị.

## Ý chính
- Khai báo hàm: `function ten(param) { ... }` (function declaration — được hoisting, gọi được trước khi khai báo).
- Function expression: `const f = function() {...}` — không hoisting, phải khai báo trước khi dùng.
- Arrow function: `const f = (a, b) => a + b` — cú pháp gọn, **không có `this` riêng** (kế thừa `this` từ ngữ cảnh bên ngoài).
- Tham số mặc định: `function f(x = 10) {}`.
- `arguments`: object chứa toàn bộ tham số truyền vào (chỉ có ở function thường, arrow function không có).
- `return` dừng hàm ngay và trả về giá trị; không có `return` → hàm trả về `undefined`.

## Ví dụ
```js
function add(a, b) {
  return a + b;
}

const multiply = (a, b) => a * b;

function greet(name = "bạn") {
  return `Xin chào ${name}`;
}
```

## Hay nhầm / lỗi thường gặp
- Dùng arrow function làm method của object rồi mong `this` trỏ về object đó → sai, vì arrow function không có `this` riêng.
- Quên `return` → hàm luôn trả về `undefined` dù có logic bên trong.

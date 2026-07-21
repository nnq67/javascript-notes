# Biến & Kiểu dữ liệu

> Nguồn: MDN | W3Schools

## Khái niệm
JavaScript có 3 cách khai báo biến: `var`, `let`, `const`.

- `var`: phạm vi hàm (function scope), bị hoisting, có thể khai báo lại — dễ gây bug.
- `let`: phạm vi khối (block scope), có thể gán lại giá trị.
- `const`: phạm vi khối, không thể gán lại biến (nhưng object/array bên trong vẫn sửa được).

## Ví dụ code
```js
const arr = [1, 2, 3];
arr.push(4);       // OK, vẫn sửa được nội dung
console.log(arr);  // [1, 2, 3, 4]
```

> File ví dụ đầy đủ: `examples/01-basics/variables.js`

## Khi nào dùng
- Ưu tiên `const` mặc định, chỉ dùng `let` khi chắc chắn sẽ gán lại.
- Tránh `var` trừ khi maintain code cũ.

## Câu hỏi/nhầm lẫn của mình
- `const` không có nghĩa là bất biến hoàn toàn, chỉ là không gán lại được tên biến đó.

## Nguồn tham khảo
- MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types
- W3Schools: https://www.w3schools.com/js/js_variables.asp

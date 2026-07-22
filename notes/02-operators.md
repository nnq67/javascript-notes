# Nhóm 02: Operators (Arithmetic, Assignment, Comparison, Logical)

🔗 Các bài liên quan: JS Operators, Arithmetic, Assignment, Comparisons, Conditional

## Tóm tắt
> Các toán tử để tính toán, gán giá trị, so sánh, và kết hợp điều kiện logic.

## Ý chính
- Arithmetic: `+ - * / % **` (mũ), `++ --` (tăng/giảm 1).
- Assignment: `= += -= *= /=`...
- Comparison: `==` (so sánh giá trị, tự ép kiểu), `===` (so sánh cả kiểu lẫn giá trị — nên dùng cái này), `!= !== > < >= <=`.
- Logical: `&&` (và), `||` (hoặc), `!` (phủ định). `&&`/`||` trả về giá trị thực tế chứ không chỉ true/false (dùng để gán giá trị mặc định).
- Toán tử `??` (nullish coalescing): chỉ thay thế khi giá trị là `null`/`undefined`, khác với `||` (thay cả khi giá trị falsy như `0`, `""`).

## Ví dụ
```js
console.log(5 == "5");   // true (ép kiểu)
console.log(5 === "5");  // false (khác kiểu)

let name = userName || "Khách"; // giá trị mặc định nếu userName falsy
let count = input ?? 0;          // chỉ mặc định khi null/undefined
```

## Hay nhầm / lỗi thường gặp
- Dùng `==` thay vì `===` → dễ gây lỗi so sánh không mong muốn do JS tự ép kiểu.
- Nhầm `||` và `??` khi giá trị hợp lệ là `0` hoặc chuỗi rỗng `""` (`||` sẽ ghi đè nhầm, `??` thì không).

# Nhóm 07: Strings & Numbers

🔗 Các bài liên quan: JS Strings, String Templates, String Methods, JS Numbers, Number Methods

## Tóm tắt
> Các phương thức xử lý chuỗi và số phổ biến, cùng template string để nối chuỗi dễ đọc hơn.

## Ý chính
- Template string: `` `Xin chào ${name}` `` — nhúng biến trực tiếp vào chuỗi, thay cho nối chuỗi bằng `+`.
- String methods hay dùng: `.length`, `.toUpperCase()/.toLowerCase()`, `.trim()`, `.slice()`, `.split()`, `.includes()`, `.replace()`.
- Number methods hay dùng: `.toFixed(n)` (làm tròn n chữ số thập phân, trả về string), `.toString()`, `Number.isInteger()`.
- Chuyển đổi kiểu: `Number("5")`, `String(5)`, `parseInt("5px")` (lấy phần số ở đầu chuỗi).
- `NaN` (Not a Number) — kết quả của phép tính không hợp lệ; kiểm tra bằng `Number.isNaN()` (chính xác hơn `isNaN()` toàn cục).

## Ví dụ
```js
const name = "Anna";
console.log(`Xin chào ${name}, bạn có ${5 + 3} điểm`);

const price = 19.999;
console.log(price.toFixed(2)); // "20.00"

console.log(parseInt("100px")); // 100
```

## Hay nhầm / lỗi thường gặp
- `.toFixed()` trả về **string**, không phải number — cần `Number(...)` lại nếu muốn tính toán tiếp.
- So sánh số thực dấu phẩy động có thể lệch nhỏ (VD `0.1 + 0.2 !== 0.3`) do cách máy tính lưu số thực.

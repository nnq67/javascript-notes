# Nhóm 12: RegExp

🔗 Các bài liên quan: JS RegExp, RegExp Flags, RegExp Patterns, RegExp Methods

## Tóm tắt
> Regular Expression (regex) dùng để tìm kiếm/kiểm tra mẫu (pattern) trong chuỗi.

## Ý chính
- Khai báo: `/pattern/flags` hoặc `new RegExp("pattern", "flags")`.
- Flag hay dùng: `g` (tìm tất cả, không dừng ở lần đầu), `i` (không phân biệt hoa/thường).
- Ký tự đặc biệt hay gặp: `\d` (chữ số), `\w` (chữ/số/gạch dưới), `\s` (khoảng trắng), `.` (bất kỳ ký tự), `+` (1 hoặc nhiều), `*` (0 hoặc nhiều), `?` (0 hoặc 1).
- Method hay dùng: `.test(str)` (trả về true/false), `str.match(regex)`, `str.replace(regex, "...")`.

## Ví dụ
```js
const regex = /^\d{3}-\d{4}$/; // VD kiểm tra số điện thoại dạng 123-4567
console.log(regex.test("123-4567")); // true

const str = "Hello World";
console.log(str.replace(/o/g, "0")); // "Hell0 W0rld"
```

## Hay nhầm / lỗi thường gặp
- Quên flag `g` khi cần thay thế/tìm **tất cả** vị trí khớp, không chỉ vị trí đầu tiên.
- Regex phức tạp dễ khó đọc — nên comment giải thích hoặc dùng named groups nếu pattern dài.

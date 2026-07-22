# Nhóm 14: Style Guide & Best Practices

🔗 Các bài liên quan: JS Style Guide, JS Best Practices, JS Mistakes, JS Performance

## Tóm tắt
> Các quy tắc/thói quen giúp code JS sạch, nhất quán, tránh lỗi phổ biến.

## Ý chính
- Ưu tiên `const`, chỉ dùng `let` khi thật sự cần gán lại; tránh `var`.
- Dùng `===`/`!==` thay vì `==`/`!=` để tránh ép kiểu ngoài ý muốn.
- Đặt tên biến/hàm rõ nghĩa (camelCase cho biến/hàm, PascalCase cho class).
- Tránh biến toàn cục tràn lan — dễ gây xung đột tên, khó bảo trì.
- Luôn khai báo biến trước khi dùng (tránh dựa vào hoisting).
- Format code nhất quán (thụt lề, dấu chấm phẩy) — nên dùng Prettier/ESLint tự động hóa.

## Ví dụ
```js
// Không nên
var x = 1;
if (x == "1") { ... }

// Nên
const x = 1;
if (x === 1) { ... }
```

## Hay nhầm / lỗi thường gặp
- Sửa đổi trực tiếp tham số truyền vào hàm (mutate) mà không rõ ràng → gây side-effect khó lường ở nơi khác gọi hàm đó.
- So sánh object/array bằng `==`/`===` mong đợi so sánh nội dung — thực ra JS so sánh theo **tham chiếu**, 2 object nội dung giống nhau vẫn `!==` nhau.

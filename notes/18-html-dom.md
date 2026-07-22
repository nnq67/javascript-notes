# Nhóm 18: HTML DOM (Chọn phần tử, đổi HTML/CSS, sự kiện)

🔗 Các bài liên quan: HTML DOM, Selecting Elements, Changing HTML, Changing CSS, Intro to Events

## Tóm tắt
> DOM là cách JS thao tác trực tiếp với HTML đang hiển thị trên trang — chọn phần tử, đổi nội dung/style, lắng nghe sự kiện người dùng.

## Ý chính
- Chọn phần tử: `document.getElementById()`, `document.querySelector()`, `document.querySelectorAll()`.
- Đổi nội dung: `.innerHTML` (chèn cả HTML), `.textContent` (chỉ text, an toàn hơn).
- Đổi CSS: `element.style.thuocTinh` (camelCase).
- Sự kiện: `element.addEventListener("click", handler)` — cách khuyến nghị, tách biệt JS ra khỏi HTML.
- Sự kiện phổ biến: `click`, `input`, `change`, `submit`, `keydown`, `mouseover`.

## Ví dụ
```js
const btn = document.querySelector("#myBtn");
btn.addEventListener("click", () => {
  document.getElementById("demo").innerHTML = "Đã click!";
});
```

## Hay nhầm / lỗi thường gặp
- Chạy JS thao tác DOM trước khi HTML load xong → phần tử chưa tồn tại. Nên đặt `<script>` cuối `<body>` hoặc dùng `DOMContentLoaded`.
- Dùng `.innerHTML` với dữ liệu không tin cậy (input người dùng) → rủi ro XSS, nên dùng `.textContent` khi chỉ cần hiển thị text.

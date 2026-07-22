# Nhóm 01: Basics (Introduction, Syntax, Variables, Data Types)

🔗 Các bài liên quan: JS Introduction, JS Syntax, JS Variables, JS Let/Const, JS Types

## Tóm tắt
> JavaScript là ngôn ngữ lập trình của web — dùng để tính toán, xử lý dữ liệu, và thay đổi HTML/CSS ngay trên trang đang chạy (không cần tải lại trang).

## Ý chính
- JS có thể thay đổi **nội dung HTML** qua `document.getElementById("id").innerHTML = "..."`.
- JS có thể thay đổi **thuộc tính HTML** (VD đổi `src` của ảnh) và **CSS** (VD `element.style.fontSize = "35px"`).
- JS có thể **ẩn/hiện** phần tử bằng `element.style.display = "none"` / `"block"`.
- Chấp nhận cả dấu nháy đơn `'` và nháy kép `"`.
- JavaScript ra đời năm 1995 (Brendan Eich), chuẩn hóa thành ECMAScript (ECMA-262) năm 1997 — **JavaScript và Java là 2 ngôn ngữ hoàn toàn khác nhau**, dù tên giống nhau.
- Khai báo biến bằng `var` (cũ), `let`, `const` (hiện đại, nên dùng).

## Ví dụ
```js
document.getElementById("demo").innerHTML = "Hello JavaScript";

document.getElementById("demo").style.fontSize = "35px";

document.getElementById("demo").style.display = "none"; // ẩn
document.getElementById("demo").style.display = "block"; // hiện
```

## Hay nhầm / lỗi thường gặp
- Nhầm JavaScript với Java — 2 ngôn ngữ không liên quan, chỉ trùng tên.
- Quên rằng thay đổi CSS qua JS dùng `element.style.tenThuocTinh` (camelCase, VD `fontSize` chứ không phải `font-size`).

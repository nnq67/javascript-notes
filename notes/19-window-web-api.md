# Nhóm 19: Window & Web API

🔗 Các bài liên quan: JS Window, Location, Cookies, Web API, Web Storage, Geolocation

## Tóm tắt
> `window` là object toàn cục đại diện cho cửa sổ trình duyệt; Web API là các API có sẵn của trình duyệt để tương tác với môi trường ngoài JS thuần (lưu trữ, vị trí, sự kiện thời gian...).

## Ý chính
- `window`: chứa mọi thứ toàn cục — `window.location` (URL hiện tại), `window.history`, `window.navigator`.
- `localStorage` / `sessionStorage`: lưu dữ liệu dạng key-value trên trình duyệt. `localStorage` tồn tại mãi (tới khi xóa), `sessionStorage` mất khi đóng tab.
- `setTimeout(fn, ms)`: chạy 1 lần sau khoảng thời gian; `setInterval(fn, ms)`: chạy lặp lại liên tục (nhớ `clearInterval` khi không cần nữa).
- `navigator.geolocation`: xin quyền và lấy vị trí người dùng (cần HTTPS và người dùng đồng ý).

## Ví dụ
```js
localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme"));

const timer = setInterval(() => console.log("tick"), 1000);
clearInterval(timer); // dừng khi không cần nữa
```

## Hay nhầm / lỗi thường gặp
- `localStorage` chỉ lưu được **string** — object/array phải `JSON.stringify()` trước khi lưu, và `JSON.parse()` khi đọc ra.
- Quên `clearInterval()` → interval chạy mãi ngầm, gây rò rỉ bộ nhớ/hiệu năng.

# Nhóm 16: Asynchronous (Callback, Promise, Async/Await, Fetch)

🔗 Các bài liên quan: Async Intro, Callbacks, Promises, Async Await, Fetch

## Tóm tắt
> Cách JS xử lý các tác vụ mất thời gian (gọi API, đọc file, chờ timer) mà không "đứng hình" chương trình.

## Ý chính
- Callback: hàm truyền vào 1 hàm khác, được gọi lại khi tác vụ xong — dễ dẫn tới "callback hell" nếu lồng nhiều tầng.
- Promise: đại diện cho 1 giá trị sẽ có trong tương lai, có 3 trạng thái: pending, fulfilled, rejected. Dùng `.then()`/`.catch()` để xử lý.
- `async/await`: cú pháp viết Promise theo kiểu tuần tự, dễ đọc hơn `.then()` nối chuỗi (xem chi tiết ở note riêng nếu cần).
- `fetch()`: API có sẵn của trình duyệt để gọi HTTP request, trả về Promise.

## Ví dụ
```js
// Promise
fetch("https://api.example.com/data")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// Async/await — tương đương nhưng dễ đọc hơn
async function getData() {
  try {
    const res = await fetch("https://api.example.com/data");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

## Hay nhầm / lỗi thường gặp
- Quên `return` Promise trong `.then()` khi cần nối chuỗi tiếp → mất đồng bộ hóa, dòng sau chạy trước khi dòng trước xong.
- `fetch()` không tự động reject khi HTTP status lỗi (VD 404) — phải tự kiểm tra `res.ok`.

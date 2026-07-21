# Async / Await

> Nguồn: MDN | W3Schools

## Khái niệm
`async/await` là cú pháp giúp viết code bất đồng bộ (Promise) trông giống code đồng bộ, dễ đọc hơn.

- `async` đặt trước hàm để hàm luôn trả về 1 Promise.
- `await` chỉ dùng trong hàm `async`, giúp chờ Promise resolve rồi mới chạy tiếp.

## Ví dụ code
```js
async function getUser() {
  const user = await fetchUser();
  console.log(user.name);
}
```

> File ví dụ đầy đủ: `examples/04-async/async-await.js`

## Khi nào dùng
- Gọi API (fetch dữ liệu từ server).
- Bất kỳ thao tác nào cần chờ xong mới chạy tiếp (đọc file, timeout...).

## Câu hỏi/nhầm lẫn của mình
- `await` chỉ tạm dừng phần code trong hàm `async` đó, không dừng cả chương trình.
- Quên `try/catch` thì lỗi Promise không bị bắt, gây "Unhandled promise rejection".

## Nguồn tham khảo
- MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
- W3Schools: https://www.w3schools.com/js/js_async.asp

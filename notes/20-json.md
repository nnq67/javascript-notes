# Nhóm 20: JSON (Parse, Stringify)

🔗 Các bài liên quan: JSON Intro, JSON Syntax, JSON Parse, JSON Stringify

## Tóm tắt
> JSON (JavaScript Object Notation) là định dạng text để trao đổi dữ liệu, có cú pháp gần giống object JS nhưng chặt chẽ hơn.

## Ý chính
- `JSON.stringify(obj)`: chuyển object/array JS → chuỗi JSON (dùng khi gửi dữ liệu đi, hoặc lưu vào localStorage).
- `JSON.parse(str)`: chuyển chuỗi JSON → object/array JS (dùng khi nhận dữ liệu từ API).
- Cú pháp JSON khác object JS thường: **key phải để trong dấu ngoặc kép `"key"`**, không cho phép comment, không cho phép function hay `undefined` làm giá trị.
- Thường dùng cùng `fetch()` để xử lý dữ liệu trả về từ API: `const data = await res.json();` (tương đương `JSON.parse` tự động).

## Ví dụ
```js
const user = { name: "Anna", age: 25 };

const jsonStr = JSON.stringify(user);
console.log(jsonStr); // '{"name":"Anna","age":25}'

const backToObj = JSON.parse(jsonStr);
console.log(backToObj.name); // "Anna"
```

## Hay nhầm / lỗi thường gặp
- Viết object JS thường (key không có dấu ngoặc kép) rồi tưởng đó là JSON hợp lệ — JSON thật sự bắt buộc key phải là chuỗi có dấu ngoặc kép.
- `JSON.stringify()` sẽ bỏ qua các property có giá trị là `function` hoặc `undefined` — dễ mất dữ liệu không mong muốn nếu không để ý.

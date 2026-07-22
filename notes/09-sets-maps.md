# Nhóm 09: Sets & Maps

🔗 Các bài liên quan: JS Sets, Set Methods, JS Maps, Map Methods

## Tóm tắt
> `Set` lưu tập hợp giá trị **không trùng lặp**; `Map` lưu key-value giống object nhưng key có thể là bất kỳ kiểu dữ liệu nào (không chỉ string).

## Ý chính
- `Set`: tự động loại bỏ giá trị trùng khi thêm vào. Method: `.add()`, `.delete()`, `.has()`, `.size`.
- `Map`: giống object nhưng key có thể là number, object, function... Method: `.set()`, `.get()`, `.has()`, `.delete()`, `.size`.
- Cả 2 đều **giữ đúng thứ tự** thêm vào (khác với object, thứ tự key không đảm bảo tuyệt đối trong 1 số trường hợp).
- Chuyển Set/Map sang mảng: `[...mySet]`, `[...myMap]`.

## Ví dụ
```js
const uniqueNums = new Set([1, 2, 2, 3]);
console.log(uniqueNums.size); // 3

const userMap = new Map();
userMap.set("name", "Anna");
userMap.set(1, "một");
console.log(userMap.get("name")); // "Anna"
```

## Hay nhầm / lỗi thường gặp
- Dùng object thường khi cần key không phải string (VD key là số hoặc object) → nên dùng `Map` thay vì object.
- Quên rằng `Set` chỉ loại trùng giá trị nguyên thủy chính xác — 2 object khác nhau dù nội dung giống nhau vẫn được coi là khác nhau.

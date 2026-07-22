# Nhóm 03: Control Flow (If/Else, Ternary, Switch)

🔗 Các bài liên quan: JS If, If Else, Ternary, Switch, Booleans

## Tóm tắt
> Các cấu trúc rẽ nhánh để code chạy theo điều kiện khác nhau.

## Ý chính
- `if / else if / else`: rẽ nhánh cơ bản.
- Toán tử 3 ngôi (ternary): `dieuKien ? giaTriDung : giaTriSai` — viết gọn if/else 1 dòng, trả về giá trị.
- `switch`: so sánh 1 biến với nhiều giá trị cụ thể, dùng `break` để tránh "rơi" (fall-through) xuống case tiếp theo; `default` là nhánh mặc định.
- Giá trị "falsy" trong JS: `false, 0, "", null, undefined, NaN` — mọi giá trị khác đều "truthy".

## Ví dụ
```js
const age = 20;
const status = age >= 18 ? "Người lớn" : "Trẻ em";

switch (day) {
  case "Mon":
    console.log("Thứ Hai");
    break;
  default:
    console.log("Ngày khác");
}
```

## Hay nhầm / lỗi thường gặp
- Quên `break` trong `switch` → code "rơi" xuống case tiếp theo dù không mong muốn.
- Nhầm giá trị falsy: `"0"` (chuỗi) là truthy, nhưng `0` (số) là falsy.

# Nhóm 06: Objects (Properties, Methods, this, Constructors)

🔗 Các bài liên quan: Object Intro, Properties, Methods, this, Object Constructors

## Tóm tắt
> Object lưu dữ liệu dạng key-value, có thể chứa cả hàm (method) bên trong.

## Ý chính
- Khai báo: `const obj = { key: value, method() {...} }`.
- Truy cập: `obj.key` (dot notation) hoặc `obj["key"]` (bracket notation — dùng khi key động).
- `this` bên trong method trỏ về chính object đang gọi method đó (phụ thuộc **cách gọi**, không phải nơi khai báo).
- Constructor function / `class`: dùng để tạo nhiều object cùng "khuôn mẫu" — gọi bằng từ khóa `new`.
- Object literal có thể lồng nhau, chứa mảng, hàm...

## Ví dụ
```js
const person = {
  name: "Anna",
  greet() {
    return `Xin chào, tôi là ${this.name}`;
  },
};

function Person(name) {
  this.name = name;
}
const p1 = new Person("Bob");
```

## Hay nhầm / lỗi thường gặp
- Gọi method rồi gán ra biến riêng (`const g = person.greet; g()`) → mất ngữ cảnh `this`, gây lỗi hoặc `undefined`.
- Quên `new` khi gọi constructor function → `this` trỏ nhầm sang global object thay vì object mới.

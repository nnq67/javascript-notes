# Nhóm 15: Classes (Class, Inheritance, Static)

🔗 Các bài liên quan: JS Classes, Class Inheritance, Class Static

## Tóm tắt
> `class` là cú pháp hiện đại (ES6) để viết code hướng đối tượng, thực chất vẫn dựa trên prototype của JS bên dưới.

## Ý chính
- Khai báo: `class Ten { constructor(...) {...} method() {...} }`.
- Kế thừa: `class Con extends Cha { constructor() { super(...); } }` — `super()` gọi constructor của class cha, bắt buộc gọi trước khi dùng `this` trong class con.
- `static`: thuộc tính/method thuộc về chính class, không thuộc về instance — gọi qua `TenClass.method()` chứ không qua object.
- Getter/setter: `get ten() {...}` / `set ten(value) {...}` — cho phép truy cập như property nhưng chạy logic bên trong.

## Ví dụ
```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} phát ra âm thanh`;
  }
  static info() {
    return "Đây là class Animal";
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} sủa`;
  }
}

const d = new Dog("Rex");
console.log(d.speak()); // "Rex sủa"
console.log(Animal.info());
```

## Hay nhầm / lỗi thường gặp
- Quên gọi `super()` trong constructor của class con → lỗi "must call super before accessing this".
- Nhầm `static` method có thể gọi qua instance — thực ra chỉ gọi được qua chính class.

# Nhóm 17: Modules (Export/Import)

🔗 Các bài liên quan: Modules Intro, Modules Export, Modules Import

## Tóm tắt
> Module giúp chia code JS thành nhiều file, mỗi file chỉ "lộ" ra phần cần thiết qua export/import.

## Ý chính
- Export: `export function ten() {}` (named export, xuất nhiều thứ trong 1 file) hoặc `export default ten` (chỉ 1 default export mỗi file).
- Import: `import { ten } from "./file.js"` (named) hoặc `import ten from "./file.js"` (default).
- File dùng module cần khai báo `type="module"` trong thẻ `<script>` (trình duyệt) hoặc cấu hình `"type": "module"` trong `package.json` (Node.js).
- Module tự động chạy ở chế độ strict mode, và có scope riêng (biến trong module không tự động là global).

## Ví dụ
```js
// math.js
export function add(a, b) {
  return a + b;
}
export default function multiply(a, b) {
  return a * b;
}

// main.js
import multiply, { add } from "./math.js";
console.log(add(2, 3));
console.log(multiply(2, 3));
```

## Hay nhầm / lỗi thường gặp
- Quên `type="module"` trong `<script>` khi chạy trên trình duyệt → lỗi "Cannot use import statement outside a module".
- Nhầm cú pháp import default (không dấu `{}`) với named export (có dấu `{}`).

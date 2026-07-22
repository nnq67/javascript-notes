# Nhóm 13: Errors & Debugging

🔗 Các bài liên quan: JS Errors, Error Statements, Error Object, JS Debugging

## Tóm tắt
> Cách bắt và xử lý lỗi bằng `try/catch`, cùng các công cụ debug cơ bản.

## Ý chính
- `try { code có thể lỗi } catch (error) { xử lý lỗi } finally { luôn chạy }`.
- `throw new Error("message")`: tự tạo lỗi để báo hiệu tình huống bất thường.
- Error object có `.message` (mô tả lỗi) và `.name` (loại lỗi, VD `TypeError`, `RangeError`).
- Debug bằng `console.log()`, `console.error()`, `console.table()` (in mảng/object dạng bảng), hoặc dùng breakpoint trong DevTools trình duyệt.

## Ví dụ
```js
function divide(a, b) {
  if (b === 0) {
    throw new Error("Không thể chia cho 0");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.error("Lỗi:", error.message);
} finally {
  console.log("Hoàn tất thử chia");
}
```

## Hay nhầm / lỗi thường gặp
- Chỉ `console.log` để debug mà không dùng breakpoint — với lỗi phức tạp, breakpoint trong DevTools hiệu quả hơn nhiều.
- Bắt lỗi (`catch`) nhưng không xử lý gì (empty catch) → lỗi bị "nuốt" âm thầm, khó phát hiện bug.

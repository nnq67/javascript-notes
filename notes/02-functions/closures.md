# Closures

> Nguồn: MDN | W3Schools

## Khái niệm
Closure là khi một hàm "nhớ" được scope nơi nó được tạo ra, kể cả sau khi hàm cha đã chạy xong. Hàm con vẫn truy cập được biến của hàm cha.

## Ví dụ code
```js
function counter() {
  let count = 0;
  return () => ++count;
}

const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2
```

> File ví dụ đầy đủ: `examples/02-functions/closures.js`

## Khi nào dùng
- Tạo biến private, ẩn dữ liệu khỏi truy cập trực tiếp.
- Hàm factory (như ví dụ `counter`).
- Debounce/throttle, event handler cần giữ state riêng.

## Câu hỏi/nhầm lẫn của mình
- Closure giữ **tham chiếu** tới biến gốc, không phải bản sao.
- Cẩn thận dùng closure trong vòng lặp `var` — dễ lỗi vì share chung 1 biến.

## Nguồn tham khảo
- MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
- W3Schools: https://www.w3schools.com/js/js_function_closures.asp

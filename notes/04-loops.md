# Nhóm 04: Loops (For, While, Break, Continue)

🔗 Các bài liên quan: JS Loops, Loop for, Loop while, Break, Continue

## Tóm tắt
> Các cách lặp lại 1 đoạn code nhiều lần.

## Ý chính
- `for (let i = 0; i < n; i++)`: vòng lặp phổ biến nhất, biết trước số lần lặp.
- `while (dieuKien)`: lặp khi điều kiện còn đúng, không biết trước số lần.
- `do...while`: chạy ít nhất 1 lần trước khi kiểm tra điều kiện.
- `for...of`: lặp qua giá trị của mảng/chuỗi (iterable).
- `for...in`: lặp qua key của object (ít dùng cho mảng).
- `break`: thoát vòng lặp ngay lập tức; `continue`: bỏ qua lần lặp hiện tại, tiếp tục lần sau.

## Ví dụ
```js
for (let i = 0; i < 5; i++) {
  if (i === 3) continue; // bỏ qua i=3
  if (i === 4) break;    // dừng hẳn khi i=4
  console.log(i);
}

const arr = [1, 2, 3];
for (const item of arr) {
  console.log(item);
}
```

## Hay nhầm / lỗi thường gặp
- Dùng `for...in` cho mảng → lặp qua index dạng string, dễ gây lỗi khi thao tác số; nên dùng `for...of` cho mảng.
- Vòng lặp `while` sai điều kiện dừng → dễ tạo vòng lặp vô hạn.

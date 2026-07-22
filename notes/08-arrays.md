# Nhóm 08: Arrays (Methods, Search, Sort, Iteration)

🔗 Các bài liên quan: JS Arrays, Array Methods, Array Search, Array Sort, Array Iterations

## Tóm tắt
> Mảng lưu danh sách giá trị có thứ tự; JS cung cấp sẵn nhiều method mạnh để thao tác mà không cần viết vòng lặp tay.

## Ý chính
- Thêm/xóa: `.push()` (thêm cuối), `.pop()` (xóa cuối), `.unshift()` (thêm đầu), `.shift()` (xóa đầu), `.splice()` (thêm/xóa ở vị trí bất kỳ).
- Tìm kiếm: `.indexOf()`, `.includes()`, `.find()` (trả về phần tử đầu tiên khớp điều kiện).
- Sắp xếp: `.sort()` — mặc định sort theo string, cần truyền hàm so sánh cho số: `.sort((a, b) => a - b)`.
- Duyệt/biến đổi mảng (rất hay dùng):
  - `.map()`: tạo mảng mới từ việc biến đổi từng phần tử.
  - `.filter()`: tạo mảng mới chỉ gồm phần tử thỏa điều kiện.
  - `.reduce()`: gộp cả mảng thành 1 giá trị duy nhất (VD tính tổng).
  - `.forEach()`: chạy 1 hàm cho từng phần tử, không trả về mảng mới.

## Ví dụ
```js
const nums = [3, 1, 4, 1, 5];

const doubled = nums.map((n) => n * 2);
const evens = nums.filter((n) => n % 2 === 0);
const total = nums.reduce((sum, n) => sum + n, 0);

nums.sort((a, b) => a - b); // sắp xếp tăng dần
```

## Hay nhầm / lỗi thường gặp
- `.sort()` không truyền hàm so sánh → sort số bị sai (VD `[10, 2, 1]` sort mặc định ra `[1, 10, 2]` vì so theo string).
- Nhầm `.map()` (trả về mảng mới) với `.forEach()` (không trả về gì) — dùng sai dễ gây `undefined`.

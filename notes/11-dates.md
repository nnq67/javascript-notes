# Nhóm 11: Dates

🔗 Các bài liên quan: JS Dates, Date Formats, Date Get, Date Set

## Tóm tắt
> `Date` object dùng để làm việc với ngày giờ trong JavaScript.

## Ý chính
- Tạo ngày hiện tại: `new Date()`.
- Tạo ngày cụ thể: `new Date(2026, 6, 22)` — **lưu ý: tháng bắt đầu từ 0** (0 = Tháng 1, 6 = Tháng 7).
- Lấy thông tin: `.getFullYear()`, `.getMonth()`, `.getDate()`, `.getDay()` (thứ trong tuần), `.getHours()`...
- Đặt lại thông tin: `.setFullYear()`, `.setMonth()`...
- So sánh 2 ngày: chuyển sang số mili-giây bằng `.getTime()` rồi so sánh, hoặc trừ trực tiếp 2 object Date.

## Ví dụ
```js
const now = new Date();
console.log(now.getFullYear()); // VD: 2026

const specificDate = new Date(2026, 6, 22); // 22/07/2026 (tháng 6 = Tháng 7)
console.log(specificDate.getMonth()); // 6

const diffMs = date2.getTime() - date1.getTime();
const diffDays = diffMs / (1000 * 60 * 60 * 24);
```

## Hay nhầm / lỗi thường gặp
- Quên tháng đánh số từ 0 → dễ nhầm lệch 1 tháng khi tạo ngày cụ thể.
- Format ngày hiển thị mặc định của `Date` phụ thuộc trình duyệt/locale — nên dùng thư viện (VD `Intl.DateTimeFormat`) nếu cần format chuẩn, nhất quán.

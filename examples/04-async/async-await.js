// examples/04-async/async-await.js

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "An" }), 1000);
  });
}

async function getUser() {
  try {
    console.log("Đang lấy dữ liệu...");
    const user = await fetchUser();
    console.log("Đã có user:", user.name);
  } catch (err) {
    console.error("Lỗi:", err);
  }
}

getUser();
